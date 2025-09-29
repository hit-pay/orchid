<script setup>
import { DatePicker } from 'v-calendar'
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { Button } from '@/orchidui-core'

const props = defineProps({
  shortcuts: Array,
  cancelButtonProps: Object,
  submitButtonProps: Object,
  modelValue: {
    type: [Object, String, Array],
    default: () => ({
      start: new Date(),
      end: new Date()
    })
  },
  countCalendars: {
    type: Number,
    default: 2
  },
  withFooter: {
    type: Boolean,
    default: true
  },
  isRange: {
    type: Boolean,
    default: true
  },
  minDate: {
    type: [String, Date, Number]
  },
  maxDate: {
    type: [String, Date, Number]
  }
})
const emit = defineEmits({
  'update:modelValue': []
})
const datePicker = ref()

// Normalize modelValue to ensure it's always in the correct format for v-calendar
const normalizedModelValue = computed(() => {
  const defaultValue = { start: new Date(), end: new Date() }
  
  return !props.modelValue ? defaultValue :
    typeof props.modelValue === 'string' ? { start: dayjs(props.modelValue).toDate(), end: dayjs(props.modelValue).toDate() } :
    Array.isArray(props.modelValue) ? 
      props.modelValue.length === 0 ? defaultValue :
      props.modelValue.length === 1 ? { start: dayjs(props.modelValue[0]).toDate(), end: dayjs(props.modelValue[0]).toDate() } :
      { start: dayjs(props.modelValue[0]).toDate(), end: dayjs(props.modelValue[1]).toDate() } :
    typeof props.modelValue === 'object' && props.modelValue !== null ? 
      { start: props.modelValue.start ? dayjs(props.modelValue.start).toDate() : new Date(), end: props.modelValue.end ? dayjs(props.modelValue.end).toDate() : new Date() } :
    defaultValue
})

const changeModelValue = (value) => {
  if(!datePicker.value) return
  emit('update:modelValue', value)
  datePicker.value.calendarRef.focusDate(dayjs(value.start).toDate())
}
</script>

<template>
  <div class="flex flex-col p-6 gap-y-7 w-fit shadow-normal rounded">
    <div class="flex gap-x-7">
      <div v-if="shortcuts?.length" class="flex flex-col py-2 gap-y-4">
        <div
          v-for="shortcut in shortcuts"
          :key="shortcut"
          class="rounded text-center px-4 font-medium py-2 cursor-pointer"
          :class="
            dayjs(shortcut.value.start).format('YY-MM-DD') ===
              dayjs(normalizedModelValue.start).format('YY-MM-DD') &&
            dayjs(shortcut.value.end).format('YY-MM-DD') ===
              dayjs(normalizedModelValue.end).format('YY-MM-DD') &&
            normalizedModelValue.end &&
            normalizedModelValue.start
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
        :model-value="normalizedModelValue"
        :model-modifiers="{
          range: isRange
        }"
        :class="{
          'oc-complex-calendar__calendar--single': !isRange || countCalendars == 1
        }"
        locale="en"
        color="primary"
        borderless
        :columns="countCalendars"
        v-bind="$attrs"
        :min-date="minDate"
        :max-date="maxDate"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </div>

    <div v-if="withFooter" class="flex justify-end gap-x-3">
      <Button class="min-w-[72px]" label="Clear" variant="secondary" v-bind="cancelButtonProps" />
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

.oc-complex-calendar__calendar--single {
  .vc-pane-layout {
    @apply grid-cols-1 #{!important};
  }
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
