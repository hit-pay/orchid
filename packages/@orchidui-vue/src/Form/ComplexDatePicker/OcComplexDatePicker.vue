<script setup>
import { Dropdown, Input, BaseInput } from '@/orchidui';
import { ComplexCalendar } from '@/orchidui/Calendar';
import { ref } from 'vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)

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
  countCalendars: {
    type: Number,
    default: 2,
  },
  withFooter: {
    type: Boolean,
    default: true,
  },
  label: String,
  hint: String,
  isRequired: Boolean,
  errorMessage: String,
  labelIcon: String,
  tooltipText: String,
  tooltipOptions: Object,
});
defineEmits({
  "update:modelValue": [],
});
const isOpen = ref(false);
</script>

<template>
  <BaseInput
    :label="label"
    :hint="hint"
    :error-message="errorMessage"
    :is-required="isRequired"
    :tooltip-options="tooltipOptions"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
  >
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
          :count-calendars="countCalendars"
          :with-footer="withFooter"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </template>
    </Dropdown>
  </BaseInput>
</template>
