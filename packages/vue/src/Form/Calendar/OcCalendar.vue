<script setup>
import { Button, Icon, Checkbox } from "@/orchidui";
import { computed, ref } from "vue";
import dayjs from "dayjs";
import { debounce } from "lodash-es";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  minDate: {
    type: [String, Date, Number],
    default: null,
  },
  maxDate: {
    type: [String, Date, Number],
    default: null,
  },
  position: {
    type: String,
    default: "floating",
  },
  modelValue: {
    type: [String, Date, Number, Array],
    default: null,
    validator: (val) =>
      Array.isArray(val) ? dayjs(val[0]).isSameOrBefore(dayjs(val[1])) : true,
  },
  disabledDate: {
    type: Function,
    default: () => false,
  },
  isIndefinite: {
    type: Boolean,
    default: false,
  },
  inDefiniteLabel: {
    type: String,
    default: "Indefinite",
  },
});
const emit = defineEmits([
  "update:modelValue",
  "resetCalendar",
  "update:isIndefinite",
]);

const selectedDate = ref();

const selectedStartDate = ref();
const selectedEndDate = ref();
const selectedStartDay = ref();
const selectedEndDay = ref();

const hoveringDate = ref();

const isCalendarIndefinite = ref(false);
const isStartDateSet = ref(false);

const isRangeSelection = computed(() => props.type === "range");

const daysInMonth = computed(() => {
  const date = selectedDate.value;

  const lastDay = date.endOf("month").date();

  return Array.from({ length: lastDay }, (_, i) => i + 1);
});

const selectedMonth = computed(() => selectedDate.value.format("MMMM YYYY"));

const selectedRangeDate = computed(() => {
  const start = selectedStartDate.value;
  const end = selectedEndDate.value ?? hoveringDate.value;
  const result = [start, end];

  if (end && start?.isAfter(end)) {
    result.reverse()
  }

  return {
    from: result[0],
    to: result[1],
  }
})

const hasSelectedState = computed(() => Object.values(selectedRangeDate.value).filter(Boolean).length > 1)

const currentSelectedMonth = computed(() => selectedDate.value.month())
const isSelectedSameStartMonth = computed(() => currentSelectedMonth.value === selectedStartDate.value?.month())
const isSelectedSameEndMonth = computed(() => currentSelectedMonth.value === selectedEndDate.value?.month())

const prevMonth = () => {
  hoveringDate.value = null;
  selectedDate.value = selectedDate.value.subtract(1, "month");

  if (!selectedStartDate.value) {
    return;
  }

  selectedStartDay.value = isSelectedSameStartMonth.value ? selectedStartDate.value.date() : null;
  selectedEndDay.value = isSelectedSameEndMonth.value ? selectedEndDate.value.date() : null;
};

const nextMonth = () => {
  hoveringDate.value = null;
  selectedDate.value = selectedDate.value.add(1, "month");

  selectedStartDay.value = isSelectedSameStartMonth.value ? selectedStartDate.value.date() : null;
  selectedEndDay.value = isSelectedSameEndMonth.value ? selectedEndDate.value.date() : null;
};

const isDaySelected = (day) => {
  const date = selectedDate.value.date(day);

  return Object.values(selectedRangeDate.value).filter(Boolean).find((selected) => selected.isSame(date));
};

const isDayInRange = (day) => {
  if (isRangeSelection.value) {
    if (!hasSelectedState.value) {
      return false;
    }

    const currentDate = selectedDate.value.date(day);

    return (
      currentDate.isBetween(
        selectedRangeDate.value.from,
        selectedRangeDate.value.to,
        null,
        "[]",
      )
    );
  }

  return (
    selectedStartDay.value &&
    selectedEndDay.value &&
    selectedStartDay.value <= day &&
    selectedEndDay.value >= day
  );
};

const isDayDisabled = (day) => {
  const currentDate = selectedDate.value.date(day);
  return (
    props.disabledDate(currentDate.toDate())
    || (props.minDate && currentDate.isBefore(dayjs(props.minDate), "day"))
    || (props.maxDate && currentDate.isAfter(dayjs(props.maxDate), "day"))
  );
};

const doneSelecting = () => {
  if (isRangeSelection.value) {
    if (
      isDayDisabled(selectedStartDate.value.toDate()) ||
      isDayDisabled(selectedEndDate.value.toDate())
    ) {
      return;
    }
  }

  isStartDateSet.value = false;
  emit(
    "update:modelValue",
    isRangeSelection.value
      ? [selectedRangeDate.value.from, selectedRangeDate.value.to].map((date) => date.toDate())
      : selectedStartDate.value.toDate(),
  );
};

const handleIndefinite = (value) => {
  emit("update:isIndefinite", value);
};

const selectDay = (day, shouldEmit = true) => {
  if (!isRangeSelection.value) {
    let currentMonth = dayjs(selectedMonth.value, "MMMM YYYY").date(day);

    selectedStartDay.value = day;
    selectedStartDate.value = currentMonth;
    selectedEndDay.value = null;
    selectedEndDate.value = null;

    return;
  }

  let currentMonth = day && selectedDate.value.date(day);

  if (!isStartDateSet.value) {
    selectedStartDay.value = day;
    selectedStartDate.value = currentMonth;

    // reset end date the same to not show dates in range
    selectedEndDay.value = undefined;
    selectedEndDate.value = undefined;
    isStartDateSet.value = true;

    return;
  }

  selectedEndDate.value = currentMonth;
  selectedEndDay.value = day;

  if (shouldEmit) {
    doneSelecting();
  }
};

const selectDayDebounced = debounce((value) => {
  // Do not add hover state when start date has not selected
  if (!isStartDateSet.value) {
    return
  }

  selectDay(value, false)
}, 50);

const initCalendar = () => {
  const model = isRangeSelection.value ? props.modelValue?.[0] : props.modelValue;

  // set calendar is from modelValue, else default is current month
  selectedDate.value = dayjs(model);
  selectedStartDate.value = model && selectedDate.value;
  selectedStartDay.value = model && selectedStartDate.value.date();

  if (!isRangeSelection.value || !model) {
    return
  }

  // set data for range date selection
  selectedEndDate.value = dayjs(props.modelValue?.[1]);
  selectedEndDay.value = selectedEndDate.value?.month() === selectedDate.value.month()
    ? selectedEndDate.value.date()
    : undefined;
}

initCalendar();
</script>

<template>
  <div
    class="p-6 w-fit rounded flex flex-col gap-y-7"
    :class="position === 'floating' ? 'shadow-normal bg-white' : ''"
  >
    <div class="flex items-center justify-between">
      <span
        :class="[
          isCalendarIndefinite ? 'pointer-events-none opacity-[.35]' : '',
        ]"
      >
        {{ selectedMonth }}
      </span>
      <div
        class="flex gap-x-3"
        :class="[
          isCalendarIndefinite ? 'pointer-events-none opacity-[.35]' : '',
        ]"
      >
        <Icon
          name="chevron-down"
          class="rotate-90 cursor-pointer"
          @click="prevMonth"
        />
        <Icon
          name="chevron-down"
          class="-rotate-90 cursor-pointer"
          @click="nextMonth"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-7 w-fit gap-3"
      @mouseout="selectDayDebounced(undefined)"
    >
      <div
        v-for="day in daysInMonth"
        :key="day"
        class="w-9 rounded-full flex cursor-pointer items-center relative justify-center h-9"
        :class="[
          isDaySelected(day)
            ? 'bg-oc-primary text-white'
            : 'hover:bg-oc-primary-50-tr',
          isDayDisabled(day) ? 'pointer-events-none opacity-[.35]' : '',
          isRangeSelection
            ? {
                ...(isDayInRange(day) && {
                  'before:bg-oc-primary-50-tr before:px-3 before:w-[calc(100%+0.5rem)] before:h-full before:absolute': true,
                  'before:rounded-l-full before:left-0 before:!w-[calc(100%+0.25rem)]': selectedRangeDate.from.isSame(selectedDate.date(day)),
                  'before:rounded-r-full before:right-0 before:!w-[calc(100%+0.25rem)]': selectedRangeDate.to?.isSame(selectedDate.date(day)),
                }),
                'before:bg-transparent':
                  selectedStartDay !== null &&
                  selectedStartDay === selectedEndDay,
              }
            : '',
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
        variant="secondary"
        class="w-[72px]"
        label="Clear"
        :is-disabled="isCalendarIndefinite"
        @click="initCalendar"
      />
      <Button
        label="Done"
        class="w-[72px]"
        :is-disabled="isCalendarIndefinite"
        @click="doneSelecting"
      />
    </div>
  </div>
</template>
