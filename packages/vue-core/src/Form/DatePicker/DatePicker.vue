<script setup>
import { Dropdown, Calendar, Input, BaseInput, Icon } from '@orchidui/vue-core'
import { computed, ref } from 'vue'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'
import ComplexCalendar from '@/orchidui-core/Form/ComplexCalendar/OcComplexCalendar.vue'

// Getting invalid date while using 'DD/MM/YYYY' format
// https://github.com/iamkun/dayjs/issues/1786
dayjs.extend(customParseFormat)

const emit = defineEmits(['update:modelValue', 'resetCalendar', 'error'])
const props = defineProps({
  modelValue: {
    type: [String, Date, Number, Array]
  },
  type: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'range'].includes(val)
  },
  disabledDate: {
    type: Function,
    default: () => false
  },
  minDate: {
    type: [String, Date, Number],
    default: null
  },
  maxDate: {
    type: [String, Date, Number],
    default: null
  },
  dateFormat: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  isSplitInput: {
    type: Boolean,
    default: true
  },
  minLabel: {
    type: String,
    default: 'From'
  },
  maxLabel: {
    type: String,
    default: 'To'
  },
  isRequired: {
    type: Boolean,
    default: false
  },
  isIndefinite: {
    type: Boolean,
    default: false
  },
  disabledRange: {
    type: Object,
    default: () => ({
      start: null,
      end: null
    })
  },
  countCalendars: {
    type: Number,
    default: 2
  },
  shortcuts: {
    type: Array,
    default: () => []
  }
})

const isDropdownOpened = ref(false)
const isCalendarIndefinite = ref(false)
const isDateInvalid = ref(false)
const inputtedData = ref([])
const isRangeInput = computed(() => props.type === 'range')

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
    placement="bottom-start"
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
            :is-required="isRequired"
            :disabled="disabled"
            :placeholder="placeholder"
          />
        </div>
        <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
          {{ errorMessage }}
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
        >
          <div
            class="rounded justify-between border flex items-center gap-3 h-[36px] px-3"
            :class="[
              errorMessage || isDateInvalid
                ? 'border-oc-error shadow-oc-error'
                : 'border-oc-gray-200 shadow-oc-gray-200',
              disabled ? 'pointer-events-none bg-oc-bg-dark' : 'bg-white',
              {
                'shadow-[0_0_0_2px]': isDropdownOpened && !disabled
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
