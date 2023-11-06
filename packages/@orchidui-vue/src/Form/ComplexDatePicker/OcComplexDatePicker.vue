<script setup>
import { ComplexCalendar, Dropdown, Input } from "@orchid";
import { ref } from "vue";
import dayjs from "dayjs";

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
  formatDate: {
    type: String,
    default: "DD/MM/YYYY",
  },
});
defineEmits({
  "update:modelValue": [],
});
const isOpen = ref(false);
</script>

<template>
  <Dropdown v-model="isOpen" position="bottom" class="w-full">
    <Input
      :model-value="`${dayjs(modelValue.start).format(formatDate)} - ${dayjs(
        modelValue.end,
      ).format(formatDate)}`"
      icon="calendar"
      readonly
    />

    <template #menu>
      <ComplexCalendar
        :model-value="modelValue"
        :shortcuts="shortcuts"
        :cancel-button-props="cancelButtonProps"
        :submit-button-props="submitButtonProps"
        :calendar-props="calendarProps"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </template>
  </Dropdown>
</template>
