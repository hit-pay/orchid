<script setup>
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { ref } from "vue";
import dayjs from "dayjs";
import { Button } from "@/orchidui";

defineProps({
  shortcuts: Array,
  cancelButtonProps: Object,
  submitButtonProps: Object,
  /**
   * Props to pass to the calendar component from https://vcalendar.io/
   */
  calendarProps: Object,
  modelValue: {
    type: Object,
    default: () => ({
      start: new Date(),
      end: new Date(),
    }),
  },
  countCalendars: {
    type: Number,
    default: 2,
  },
  withFooter: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits({
  "update:modelValue": [],
});
const datePicker = ref();
const changeModelValue = (value) => {
  emit("update:modelValue", value);
  datePicker.value.calendarRef.focusDate(value.start);
};
</script>

<template>
  <div class="flex flex-col p-6 gap-y-7 w-fit shadow-normal rounded">
    <div class="flex gap-x-7">
      <div v-if="shortcuts" class="flex flex-col py-2 gap-y-4">
        <div
          v-for="shortcut in shortcuts"
          :key="shortcut"
          class="rounded text-center px-4 font-medium py-2 cursor-pointer"
          :class="
            dayjs(shortcut.value.start).format('YY-MM-DD') ===
              dayjs(modelValue.start).format('YY-MM-DD') &&
            dayjs(shortcut.value.end).format('YY-MM-DD') ===
              dayjs(modelValue.end).format('YY-MM-DD')
              ? 'bg-oc-primary-50'
              : 'hover:bg-oc-accent-1-50'
          "
          @click="changeModelValue(shortcut.value)"
        >
          {{ shortcut.label }}
        </div>
      </div>
      <DatePicker
        ref="datePicker"
        :model-value="modelValue"
        :model-modifiers="{
          range: true,
        }"
        color="primary"
        borderless
        :columns="countCalendars"
        :calendar-props="calendarProps"
        @update:range="$emit('update:modelValue', $event)"
      />
    </div>

    <div v-if="withFooter" class="flex justify-end gap-x-3">
      <Button
        class="min-w-[72px]"
        label="Clear"
        variant="secondary"
        v-bind="cancelButtonProps"
      />
      <Button class="min-w-[72px]" label="Done" v-bind="submitButtonProps" />
    </div>
  </div>
</template>

<style lang="scss">
.vc-pane-layout {
  gap: 0 24px;
  --vc-text-lg: 14px;
  @apply grid-cols-1 md:grid-cols-2 #{!important};
}

.vc-primary {
  --vc-accent-200: var(--oc-primary-50);
  --vc-accent-500: var(--oc-primary-50);
  --vc-accent-600: var(--oc-primary-500);
}

.vc-light {
  --vc-nav-item-active-color: var(--oc-text-500);
}

.vc-header {
  @apply mt-0;
}

.vc-monthly .is-not-in-month * {
  @apply opacity-[.35];
}
</style>
