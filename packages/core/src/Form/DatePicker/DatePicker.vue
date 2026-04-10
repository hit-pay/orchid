<script setup>
import { Dropdown, Calendar, Input, BaseInput, Icon, ComplexCalendar } from '@/orchidui-core'
import { computed, ref, watch } from 'vue'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'

// Getting invalid date while using 'DD/MM/YYYY' format
// https://github.com/iamkun/dayjs/issues/1786
dayjs.extend(customParseFormat)

const emit = defineEmits([
  /** Date value changed. Payload: formatted string (single) or [startString, endString] (range). */
  'update:modelValue',
  /** Calendar was reset (indefinite toggle turned off). */
  'resetCalendar',
  /** Invalid date was typed into the input. */
  'error'
])
const props = defineProps({
  /** v-model — formatted date string (single) or `[startDate, endDate]` array (range). */
  modelValue: {
    type: [String, Date, Number, Array]
  },
  /**
   * Picker mode.
   * @values default, range
   */
  type: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'range'].includes(val)
  },
  /** Custom function `(date: Date) => boolean` — return `true` to disable a specific date. */
  disabledDate: {
    type: Function,
    default: () => false
  },
  /** Earliest selectable date (string, Date, or timestamp). Dates before this are disabled. */
  minDate: {
    type: [String, Date, Number],
    default: null
  },
  /** Latest selectable date (string, Date, or timestamp). Dates after this are disabled. */
  maxDate: {
    type: [String, Date, Number],
    default: null
  },
  /**
   * dayjs format string used for display, input parsing, and the emitted v-model value.
   * Default: `'YYYY-MM-DD'`. Use `'DD/MM/YYYY'` etc. to match your locale.
   */
  dateFormat: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  /** Disable the entire picker — non-interactive. */
  disabled: {
    type: Boolean,
    default: false
  },
  /** Validation error message shown below the input. */
  errorMessage: {
    type: String,
    default: ''
  },
  /** Field label shown above the input. */
  label: {
    type: String,
    default: ''
  },
  /** Helper text shown below the label. */
  hint: {
    type: String,
    default: ''
  },
  /** Placeholder text for the single-date input. */
  placeholder: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  /** Range mode: show two separate text inputs (start + end) instead of one combined input. */
  isSplitInput: {
    type: Boolean,
    default: true
  },
  /** Range mode: label for the start date input. */
  minLabel: {
    type: String,
    default: 'From'
  },
  /** Range mode: label for the end date input. */
  maxLabel: {
    type: String,
    default: 'To'
  },
  /** Show a `*` required indicator next to the label. */
  isRequired: {
    type: Boolean,
    default: false
  },
  /** Show an "Indefinite" toggle checkbox that clears the date and disables the picker. */
  isIndefinite: {
    type: Boolean,
    default: false
  },
  /**
   * Disable a specific date range inside the calendar (e.g. already-booked slots).
   * Shape: `{ start: Date|string|null, end: Date|string|null }`.
   */
  disabledRange: {
    type: Object,
    default: () => ({
      start: null,
      end: null
    })
  },
  /** Number of calendar months shown in the dropdown (range mode). Default: 2. */
  countCalendars: {
    type: Number,
    default: 2
  },
  /**
   * Quick-select shortcut buttons shown above the calendar.
   * Each item: `{ label: string, range: [startDate, endDate] }`.
   */
  shortcuts: {
    type: Array,
    default: () => []
  },
  /**
   * Popper placement for the calendar dropdown.
   * Any valid Popper.js placement string (e.g. `'bottom-start'`, `'top-end'`).
   */
  placement: {
    type: String,
    default: 'bottom-start'
  },
  /** AI-assisted state — shows a subtle accent border. Clears on first user interaction. */
  ai: {
    type: Boolean,
    default: false
  }
})

const isDropdownOpened = ref(false)
const isCalendarIndefinite = ref(false)
const isDateInvalid = ref(false)
const inputtedData = ref([])
const isRangeInput = computed(() => props.type === 'range')
const hasAi = ref(props.ai && !!props.modelValue)

watch(() => props.modelValue, () => {
  hasAi.value = false
}, {
  once: true
})

const formattedDate = computed(() => {
  if (!isRangeInput.value) {
    return props.modelValue ? dayjs(props.modelValue, props.dateFormat) : ''
  }

  if (props.modelValue && props.modelValue[0]) {
    return [
      dayjs(props.modelValue[0], props.dateFormat),
      dayjs(props.modelValue[1], props.dateFormat)
    ]
  }

  return ['', '']
})

const updateCalendar = (newValue) => {
  if (props.type === 'range') {
    emit(
      'update:modelValue',
      newValue
        ? [
            dayjs(newValue.start).format(props.dateFormat),
            dayjs(newValue.end).format(props.dateFormat)
          ]
        : []
    )
  } else {
    emit('update:modelValue', dayjs(newValue).format(props.dateFormat))
  }
  isDropdownOpened.value = false
}

const resetCalendar = () => {
  emit('resetCalendar')
  emit('update:modelValue', isRangeInput.value ? [] : null)

  isDropdownOpened.value = false
}

const disableAllDates = (value) => {
  const date = dayjs(value)
  const isInCurrentMonth = (date) => date.get('month') === dayjs().get('month')
  return isInCurrentMonth(date)
}

const handleIndefinite = (event) => {
  isCalendarIndefinite.value = event
  emit('update:modelValue', event ? 'Indefinite' : null)
}
const parseInputtedDate = (value, index) => {
  const date = dayjs(value, props.dateFormat, true)
  inputtedData.value[index] = date.format(props.dateFormat)
  inputtedData.value[index ? 0 : 1] =
    props.modelValue?.[index ? 0 : 1] || dayjs().format(props.dateFormat)
}
const validateAndEmit = () => {
  if (!inputtedData.value.length) return
  isDateInvalid.value = false
  if (inputtedData.value.some((d) => !dayjs(d, props.dateFormat).isValid())) {
    isDateInvalid.value = true
    inputtedData.value = []
    return
  }
  if (props.maxDate) {
    inputtedData.value = inputtedData.value.map((date) =>
      dayjs(date, props.dateFormat).isSameOrBefore(dayjs(props.maxDate))
        ? date
        : dayjs(props.maxDate).format(props.dateFormat)
    )
  }
  emit('update:modelValue', inputtedData.value)
  inputtedData.value = []
}
</script>

<template>
  <Dropdown
    v-model="isDropdownOpened"
    :is-disabled="disabled"
    :placement="placement"
    :distance="10"
    class="w-full"
  >
    <div class="flex flex-col gap-y-2 w-full">
      <template v-if="!isSplitInput || !isRangeInput">
        <div class="flex w-full">
          <Input
            :model-value="
              isRangeInput
                ? modelValue && modelValue[0]
                  ? `${formattedDate[0].format(dateFormat)} - ${formattedDate[1].format(dateFormat)}`
                  : ''
                : modelValue === 'Indefinite'
                  ? 'Indefinite'
                  : modelValue
                    ? formattedDate.format(dateFormat)
                    : ''
            "
            icon="calendar"
            :label="label"
            :hint="hint"
            :error-message="errorMessage"
            :is-required="isRequired"
            :disabled="disabled"
            :placeholder="placeholder"
            :ai="hasAi"
          />
        </div>
      </template>
      <div v-else class="flex flex-wrap cursor-pointer">
        <BaseInput
          :error-message="
            isDateInvalid ? `Invalid Date. Try this format (${dateFormat})` : errorMessage
          "
          :hint="hint"
          :is-required="isRequired"
          :label="label"
          :ai="hasAi"
        >
          <div
            class="rounded justify-between border flex items-center gap-3 h-[36px] px-3"
            :class="[
              errorMessage || isDateInvalid ? 'error-shadow' : hasAi ? 'border-oc-accent-2-300 bg-oc-accent-2-50 focus-within:bg-oc-bg-light' : 'input-shadow',
              disabled ? 'pointer-events-none bg-oc-bg-dark' : !hasAi && 'bg-white',
              {
                'focused-shadow': isDropdownOpened && !disabled
              }
            ]"
            @click="isDropdownOpened ? $event.stopPropagation : null"
          >
            <div class="flex items-center gap-x-3">
              <Icon name="calendar" class="text-oc-text-400" />
              <input
                placeholder="Start date"
                :value="formattedDate[0] ? formattedDate[0].format(dateFormat) : ''"
                class="text-center bg-transparent outline-0 w-full placeholder:text-oc-text-300"
                @input="parseInputtedDate($event.target.value, 0)"
                @keydown.enter="validateAndEmit"
                @blur="validateAndEmit"
              />
            </div>
            <span class="text-oc-text-400">To</span>
            <div class="flex items-center gap-x-3">
              <input
                placeholder="End date"
                :value="formattedDate[1] ? formattedDate[1].format(dateFormat) : ''"
                class="text-center bg-transparent outline-0 w-full placeholder:text-oc-text-300"
                @input="parseInputtedDate($event.target.value, 1)"
                @keydown.enter="validateAndEmit"
                @blur="validateAndEmit"
              />
              <Icon
                :class="formattedDate.every(Boolean) ? 'opacity-100' : 'opacity-0'"
                width="16"
                height="16"
                class="text-oc-text-400"
                name="filled-x-circle"
                @click.stop="resetCalendar"
              />
            </div>
          </div>
        </BaseInput>
      </div>
    </div>

    <template #menu="{ isPopoverOpen }">
      <slot
        name="menu"
        :is-popover-open="isPopoverOpen"
        :update-calendar="updateCalendar"
        :reset-calendar="resetCalendar"
      >
        <template v-if="isRangeInput">
          <ComplexCalendar
            :model-value="{
              start: modelValue?.[0],
              end: modelValue?.[1]
            }"
            :shortcuts="shortcuts"
            :count-calendars="countCalendars"
            is-range
            :with-footer="false"
            :min-date="minDate"
            :max-date="maxDate"
            :masks="{ modelValue: dateFormat }"
            @update:model-value="updateCalendar"
          />
        </template>
        <Calendar
          v-else-if="!disabled && isPopoverOpen"
          :model-value="formattedDate ? formattedDate.toDate() : new Date()"
          :disabled-date="isCalendarIndefinite ? disableAllDates : disabledDate"
          :max-date="maxDate"
          :min-date="minDate"
          :is-indefinite="isIndefinite"
          position="inline"
          :type="type"
          @update:model-value="updateCalendar"
          @update:is-indefinite="handleIndefinite"
          @reset-calendar="resetCalendar"
        />
      </slot>
    </template>
  </Dropdown>
</template>

<style>
.vc-day-content.vc-disabled {
  pointer-events: none;
}
</style>
