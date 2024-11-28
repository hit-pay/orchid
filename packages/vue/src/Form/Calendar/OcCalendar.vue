<script setup>
import { Button, Icon, Checkbox, Dropdown } from '@orchidui/vue'
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import { debounce } from 'lodash-es'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(customParseFormat)

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  minDate: {
    type: [String, Date, Number],
    default: null
  },
  maxDate: {
    type: [String, Date, Number],
    default: null
  },
  position: {
    type: String,
    default: 'floating'
  },
  modelValue: {
    type: [String, Date, Number, Array],
    default: null,
    validator: (val) => (Array.isArray(val) ? dayjs(val[0]).isSameOrBefore(dayjs(val[1])) : true)
  },
  disabledDate: {
    type: Function,
    default: () => false
  },
  isIndefinite: {
    type: Boolean,
    default: false
  },
  inDefiniteLabel: {
    type: String,
    default: 'Indefinite'
  }
})
const emit = defineEmits(['update:modelValue', 'reset-calendar', 'update:isIndefinite'])

const selectedDate = ref()

const selectedStartDate = ref()
const selectedEndDate = ref()
const selectedStartDay = ref()
const selectedEndDay = ref()

const selectedYearDate = ref()

const hoveringDate = ref()

const isCalendarIndefinite = ref(false)
const isStartDateSet = ref(false)
const isChooseYear = ref(false)
const isOpenChooseMonth = ref(false)

const isRangeSelection = computed(() => props.type === 'range')

const daysInMonth = computed(() => {
  const date = selectedDate.value

  const lastDay = date.endOf('month').date()

  return Array.from({ length: lastDay }, (_, i) => i + 1)
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const selectedMonth = computed(() => selectedDate.value.format('MMMM YYYY'))
const selectedYear = computed(() =>
  isChooseYear.value ? selectedYearDate.value.format('YYYY') : selectedDate.value.format('YYYY')
)

const currentMonth = computed(() => selectedDate.value.format('MMM'))

const selectedRangeDate = computed(() => {
  const start = selectedStartDate.value
  const end = selectedEndDate.value ?? hoveringDate.value
  const result = [start, end]

  if (end && start?.isAfter(end)) {
    result.reverse()
  }

  return {
    from: result[0],
    to: result[1]
  }
})

const hasSelectedState = computed(
  () => Object.values(selectedRangeDate.value).filter(Boolean).length > 1
)

const currentSelectedMonth = computed(() => selectedDate.value.month())
const isSelectedSameStartMonth = computed(
  () => currentSelectedMonth.value === selectedStartDate.value?.month()
)
const isSelectedSameEndMonth = computed(
  () => currentSelectedMonth.value === selectedEndDate.value?.month()
)

const prevMonth = () => {
  hoveringDate.value = null
  selectedDate.value = selectedDate.value.subtract(1, 'month')

  if (!selectedStartDate.value) {
    return
  }

  selectedStartDay.value = isSelectedSameStartMonth.value ? selectedStartDate.value.date() : null
  selectedEndDay.value = isSelectedSameEndMonth.value ? selectedEndDate.value.date() : null
}

const nextMonth = () => {
  hoveringDate.value = null
  selectedDate.value = selectedDate.value.add(1, 'month')

  selectedStartDay.value = isSelectedSameStartMonth.value ? selectedStartDate.value.date() : null
  selectedEndDay.value = isSelectedSameEndMonth.value ? selectedEndDate.value.date() : null
}

const setMonth = (month) => {
  hoveringDate.value = null
  selectedDate.value = selectedDate.value.set('month', month)
  isOpenChooseMonth.value = false
}

const setYear = (year) => {
  hoveringDate.value = null
  selectedDate.value = selectedDate.value.set('year', year)
  isChooseYear.value = false
}

const prevYear = () => {
  hoveringDate.value = null

  if (isChooseYear.value) {
    selectedYearDate.value = selectedYearDate.value.subtract(11, 'year')
  } else {
    selectedDate.value = selectedDate.value.subtract(1, 'year')
  }
}

const nextYear = () => {
  hoveringDate.value = null

  if (isChooseYear.value) {
    selectedYearDate.value = selectedYearDate.value.add(11, 'year')
  } else {
    selectedDate.value = selectedDate.value.add(1, 'year')
  }
}

const openChooseMonth = () => {
  isChooseYear.value = false
  isOpenChooseMonth.value = !isOpenChooseMonth.value
}

const isDaySelected = (day) => {
  const date = selectedDate.value.date(day)

  return Object.values(selectedRangeDate.value)
    .filter(Boolean)
    .find((selected) => selected.isSame(date))
}

const isDayInRange = (day) => {
  if (isRangeSelection.value) {
    if (!hasSelectedState.value) {
      return false
    }

    const currentDate = selectedDate.value.date(day)

    return currentDate.isBetween(
      selectedRangeDate.value.from,
      selectedRangeDate.value.to,
      null,
      '[]'
    )
  }

  return (
    selectedStartDay.value &&
    selectedEndDay.value &&
    selectedStartDay.value <= day &&
    selectedEndDay.value >= day
  )
}

const isDayDisabled = (day) => {
  const currentDate = selectedDate.value.date(day)
  return (
    props.disabledDate(currentDate.toDate()) ||
    (props.minDate && currentDate.isBefore(dayjs(props.minDate), 'day')) ||
    (props.maxDate && currentDate.isAfter(dayjs(props.maxDate), 'day'))
  )
}

const doneSelecting = () => {
  if (isRangeSelection.value) {
    if (
      isDayDisabled(selectedStartDate.value.toDate()) ||
      isDayDisabled(selectedEndDate.value.toDate())
    ) {
      return
    }
  }

  isStartDateSet.value = false
  emit(
    'update:modelValue',
    isRangeSelection.value
      ? [selectedRangeDate.value.from, selectedRangeDate.value.to].map((date) => date.toDate())
      : selectedStartDate.value.toDate()
  )
}

const handleIndefinite = (value) => {
  emit('update:isIndefinite', value)
}

const selectDay = (day, shouldEmit = true) => {
  if (!isRangeSelection.value) {
    let currentMonth = dayjs(selectedMonth.value, 'MMMM YYYY').date(day)

    selectedStartDay.value = day
    selectedStartDate.value = currentMonth
    selectedEndDay.value = null
    selectedEndDate.value = null
    doneSelecting()

    return
  }

  let currentMonth = day && selectedDate.value.date(day)

  if (!isStartDateSet.value) {
    selectedStartDay.value = day
    selectedStartDate.value = currentMonth

    // reset end date the same to not show dates in range
    selectedEndDay.value = undefined
    selectedEndDate.value = undefined
    isStartDateSet.value = true

    return
  }

  selectedEndDate.value = currentMonth
  selectedEndDay.value = day

  if (shouldEmit) {
    doneSelecting()
  }
}

const selectDayDebounced = debounce((value) => {
  // Do not add hover state when start date has not selected
  if (!isStartDateSet.value) {
    return
  }

  selectDay(value, false)
}, 50)

const initCalendar = () => {
  const model = isRangeSelection.value ? props.modelValue?.[0] : props.modelValue

  // set calendar is from modelValue, else default is current month
  selectedDate.value = dayjs(model)
  selectedYearDate.value = dayjs(model)
  selectedStartDate.value = model && selectedDate.value
  selectedStartDay.value = model && selectedStartDate.value.date()

  if (!isRangeSelection.value || !model) {
    return
  }

  // set data for range date selection
  selectedEndDate.value = dayjs(props.modelValue?.[1])
  selectedEndDay.value =
    selectedEndDate.value?.month() === selectedDate.value.month()
      ? selectedEndDate.value.date()
      : undefined
}

const getYears = (startYear) => {
  const currentYear = startYear + 11
  const years = []

  while (startYear <= currentYear) {
    years.push(startYear++)
  }

  return years
}

initCalendar()
</script>

<template>
  <div
    class="p-6 w-fit rounded flex flex-col gap-y-7"
    :class="position === 'floating' ? 'shadow-normal bg-white' : ''"
  >
    <div class="flex items-center justify-between">
      <Dropdown
        v-model="isOpenChooseMonth"
        :distance="10"
        position="bottom"
        is-popover
        trigger="click"
        :popper-options="{ strategy: 'fixed' }"
      >
        <span
          :class="[isCalendarIndefinite ? 'pointer-events-none opacity-[.35]' : '']"
          class="cursor-pointer hover:opacity-50 transition"
          @click.stop="openChooseMonth"
        >
          {{ selectedMonth }}
        </span>
        <template #menu>
          <div class="flex flex-col gap-2 p-3">
            <div class="flex justify-between items-center">
              <Button left-icon="chevron-left" is-transparent @click="prevYear" />
              <div
                class="cursor-pointer hover:opacity-50 transition"
                @click="isChooseYear = !isChooseYear"
              >
                <div v-if="isChooseYear">{{ selectedYear - 11 }} - {{ selectedYear }}</div>
                <div v-else>{{ selectedYear }}</div>
              </div>
              <Button left-icon="chevron-right" is-transparent @click="nextYear" />
            </div>

            <div class="grid grid-cols-3 gap-3" v-if="isChooseYear">
              <div
                v-for="year in getYears(selectedYear - 11)"
                :key="year"
                class="px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer"
                :class="{
                  '!border-oc-primary bg-oc-primary text-white': selectedDate.year() === year
                }"
                @click="setYear(year)"
              >
                {{ year }}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-3" v-else>
              <div
                v-for="(month, index) in months"
                :key="month"
                class="px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer"
                :class="{
                  '!border-oc-primary bg-oc-primary text-white': currentMonth === month
                }"
                @click="setMonth(index)"
              >
                {{ month }}
              </div>
            </div>
          </div>
        </template>
      </Dropdown>
      <div
        class="flex gap-x-3"
        :class="[isCalendarIndefinite ? 'pointer-events-none opacity-[.35]' : '']"
      >
        <Icon name="chevron-down" class="rotate-90 cursor-pointer" @click="prevMonth" />
        <Icon name="chevron-down" class="-rotate-90 cursor-pointer" @click="nextMonth" />
      </div>
    </div>

    <div class="grid grid-cols-7 w-fit gap-3" @mouseout="selectDayDebounced(undefined)">
      <div
        v-for="day in daysInMonth"
        :key="day"
        class="w-9 rounded-full flex cursor-pointer items-center relative justify-center h-9"
        :class="[
          isDaySelected(day) ? 'bg-oc-primary text-white' : 'hover:bg-oc-primary-50-tr',
          isDayDisabled(day) ? 'pointer-events-none opacity-[.35]' : '',
          isRangeSelection
            ? {
                ...(isDayInRange(day) && {
                  'before:bg-oc-primary-50-tr before:px-3 before:w-[calc(100%+0.5rem)] before:h-full before:absolute': true,
                  'before:rounded-l-full before:left-0 before:!w-[calc(100%+0.25rem)]':
                    selectedRangeDate.from.isSame(selectedDate.date(day)),
                  'before:rounded-r-full before:right-0 before:!w-[calc(100%+0.25rem)]':
                    selectedRangeDate.to?.isSame(selectedDate.date(day))
                }),
                'before:bg-transparent':
                  selectedStartDay !== null && selectedStartDay === selectedEndDay
              }
            : ''
        ]"
        @click="selectDay(day)"
        @mouseover="selectDayDebounced(day)"
      >
        {{ day }}
      </div>
    </div>

    <slot name="bottom">
      <span v-if="isIndefinite">
        <Checkbox
          v-model="isCalendarIndefinite"
          :label="inDefiniteLabel"
          @update:model-value="handleIndefinite"
        />
      </span>
    </slot>

    <div class="flex gap-x-3 justify-end">
      <Button
        label="Reset"
        class="w-[72px]"
        :is-disabled="isCalendarIndefinite"
        @click="emit('reset-calendar')"
      />
    </div>
  </div>
</template>
