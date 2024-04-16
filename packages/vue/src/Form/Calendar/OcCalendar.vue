<script setup>
import { Button, Icon, Checkbox } from "@/orchidui";
import { computed, ref } from "vue";
import dayjs from "dayjs";
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
  dateSelecting: {
    type: String,
    default: undefined,
    validator: (value) => (value ? ["from", "to"].includes(value) : true),
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
  "start-date-selected",
  "update:isIndefinite",
]);

const selectedDate = ref(
  props.type === "range"
    ? dayjs(props.modelValue[0] ?? undefined)
    : dayjs(props.modelValue ?? undefined),
);

const selectedStartDate = ref(selectedDate.value);
const isCalendarIndefinite = ref(false);
const isStartDateSet = ref(false);

const selectedEndDate = ref(
  props.type === "range"
    ? dayjs(props.modelValue[1] ?? selectedStartDate.value.add(2, "day"))
    : null,
);

const selectedStartDay = ref(
  selectedStartDate.value.isSame(selectedDate.value, "month")
    ? dayjs(selectedStartDate.value).date()
    : null,
);
const selectedEndDay = ref(
  props.type === "range"
    ? selectedEndDate.value.month() === selectedDate.value.month()
      ? selectedEndDate.value.date()
      : null
    : null,
);

const daysInMonth = computed(() => {
  const date = selectedDate.value;

  const lastDay = date.endOf("month").date();

  return Array.from({ length: lastDay }, (_, i) => i + 1);
});

const selectedMonth = computed(() => selectedDate.value.format("MMMM YYYY"));

const isRangeSelection = computed(() => props.type === "range");

const selectDay = (day) => {
  if (!isRangeSelection.value) {
    let currentMonth = dayjs(selectedMonth.value, "MMMM YYYY").date(day);

    selectedStartDay.value = day;
    selectedStartDate.value = currentMonth;
    selectedEndDay.value = null;
    selectedEndDate.value = null;

    return;
  }

  let currentMonth = selectedDate.value.date(day);

  if (selectedStartDay.value && props.dateSelecting === "to") {
    selectedEndDay.value = day;
    selectedEndDate.value = currentMonth;

    return;
  }

  if (!isStartDateSet.value) {
    selectedStartDay.value = day;
    selectedStartDate.value = currentMonth;

    selectedEndDay.value = day;
    selectedEndDate.value = currentMonth;

    isStartDateSet.value = true;
    emit(
      "start-date-selected",
      dayjs(selectedMonth.value, "MMMM YYYY").date(day),
    );

    return;
  }

  if (dayjs(selectedStartDate.value).isSameOrAfter(currentMonth)) {
    selectedStartDay.value = day;
    selectedStartDate.value = currentMonth;

    return;
  }

  selectedEndDay.value = day;
  selectedEndDate.value = currentMonth;
};

const clearDate = () => {
  if (isRangeSelection.value) {
    selectedStartDate.value = dayjs(props.modelValue[0] ?? undefined);
    selectedEndDate.value = dayjs(props.modelValue[1]) || dayjs().add(2, "day");
  } else {
    selectedStartDate.value = dayjs(props.modelValue ?? undefined);
  }

  selectedStartDay.value =
    selectedStartDate.value?.month() === selectedDate.value?.month()
      ? selectedStartDate.value?.toDate()
      : null;
  selectedEndDay.value = isRangeSelection.value
    ? selectedEndDate.value?.month() === selectedDate.value?.month()
      ? selectedEndDate.value?.toDate()
      : null
    : null;

  emit("resetCalendar");
};

const prevMonth = () => {
  selectedDate.value = selectedDate.value.subtract(1, "month");
  selectedStartDay.value =
    selectedDate.value.month() === selectedStartDate.value.month()
      ? selectedStartDate.value.date()
      : null;
  selectedEndDay.value =
    dayjs(selectedDate.value).month() === dayjs(selectedEndDate.value).month()
      ? dayjs(selectedEndDate.value).date()
      : null;
};

const nextMonth = () => {
  selectedDate.value = selectedDate.value.add(1, "month");
  selectedStartDay.value =
    dayjs(selectedDate.value).month() === dayjs(selectedStartDate.value).month()
      ? dayjs(selectedStartDate.value).date()
      : null;
  selectedEndDay.value =
    dayjs(selectedDate.value).month() === dayjs(selectedEndDate.value).month()
      ? dayjs(selectedEndDate.value).date()
      : null;
};

const isDaySelected = (day) => {
  return (
    (selectedStartDay.value === day &&
      dayjs(selectedMonth.value, "MMMM YYYY").isSame(
        selectedStartDate.value,
        "month",
      )) ||
    (selectedEndDay.value === day &&
      dayjs(selectedMonth.value, "MMMM YYYY").isSame(
        selectedEndDate.value,
        "month",
      ))
  );
};

const isDayInRange = (day) => {
  if (isRangeSelection.value) {
    const currentDate = selectedDate.value.date(day);
    return (
      isDaySelected(day) ||
      currentDate.isBetween(
        selectedStartDate.value,
        selectedEndDate.value,
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
  const currentDate = dayjs(selectedDate.value).date(day);
  return (
    props.disabledDate(currentDate.toDate()) ||
    (props.minDate && currentDate.isBefore(dayjs(props.minDate), "day")) ||
    (props.maxDate && currentDate.isAfter(dayjs(props.maxDate), "day"))
  );
};

const getRangeDates = () => {
  return [selectedStartDate.value, selectedEndDate.value].sort((a, b) =>
    a.isBefore(b) ? -1 : 1,
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
      ? getRangeDates().map((date) => date.toDate())
      : selectedStartDate.value.toDate(),
  );
};

const handleIndefinite = (value) => {
  emit("update:isIndefinite", value);
};
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

    <div class="grid grid-cols-7 w-fit gap-3">
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
                'before:bg-oc-primary-50-tr before:px-3 before:w-[calc(100%+0.5rem)] before:h-full before:absolute':
                  isDayInRange(day),
                'before:rounded-l-full before:left-0 before:!w-[calc(100%+0.25rem)]':
                  isDayInRange(day) && day === selectedStartDay,
                'before:rounded-r-full before:right-0 before:!w-[calc(100%+0.25rem)]':
                  isDayInRange(day) && day === selectedEndDay,
                'before:bg-transparent':
                  selectedStartDay !== null &&
                  selectedStartDay === selectedEndDay,
              }
            : '',
        ]"
        @click="selectDay(day)"
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
        @click="clearDate"
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
