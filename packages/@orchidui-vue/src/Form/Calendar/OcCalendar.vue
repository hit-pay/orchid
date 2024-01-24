<script setup>
import { Button, Icon } from "@/orchidui";
import { computed, onMounted, ref } from "vue";
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
});
const emit = defineEmits(["update:modelValue", "resetCalendar"]);

const selectedDate = ref(
  props.type === "range"
    ? dayjs(props.modelValue[0] ?? undefined)
    : dayjs(props.modelValue ?? undefined),
);

const selectedStartDate = ref(selectedDate.value);

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
onMounted(() => {
  console.log(props.modelValue);
});
const daysInMonth = computed(() => {
  const date = selectedDate.value;

  const lastDay = date.endOf("month").date();

  return Array.from({ length: lastDay }, (_, i) => i + 1);
});

const selectedMonth = computed(() => {
  return selectedDate.value.format("MMMM YYYY");
});
const isStartDateSet = ref(false);
const selectDay = (day) => {
  if (props.type !== "range") {
    let currentMonth = dayjs(selectedMonth.value, "MMMM YYYY").date(day);

    selectedStartDay.value = day;
    selectedStartDate.value = currentMonth;
    selectedEndDay.value = null;
    selectedEndDate.value = null;
  } else {
    let currentMonth = selectedDate.value.date(day);
    isStartDateSet.value = selectedStartDay.value === selectedEndDay.value;

    if (!isStartDateSet.value) {
      isStartDateSet.value = true;

      selectedStartDay.value = day;
      selectedStartDate.value = currentMonth;

      selectedEndDay.value = day;
      selectedEndDate.value = currentMonth;
    } else {
      if (dayjs(selectedStartDate.value).isSameOrAfter(currentMonth)) {
        selectedStartDay.value = day;
        selectedStartDate.value = currentMonth;
      } else {
        selectedEndDay.value = day;
        selectedEndDate.value = currentMonth;
      }
    }
  }
};

const clearDate = () => {
  if (props.type === "range") {
    selectedStartDate.value = dayjs(props.modelValue[0] ?? undefined);
    selectedEndDate.value = dayjs(props.modelValue[1]) || dayjs().add(2, "day");
  } else {
    selectedStartDate.value = dayjs(props.modelValue ?? undefined);
  }

  selectedStartDay.value =
    selectedStartDate.value?.month() === selectedDate.value?.month()
      ? selectedStartDate.value?.toDate()
      : null;
  selectedEndDay.value =
    props.type === "range"
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
  if (props.type === "range") {
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
    (props.minDate && currentDate.isBefore(dayjs(props.minDate))) ||
    (props.maxDate &&
      currentDate.isAfter(dayjs(props.maxDate).add(60, "second")))
  );
};

const getRangeDates = () => {
  return [selectedStartDate.value, selectedEndDate.value].sort((a, b) =>
    a.isBefore(b) ? -1 : 1,
  );
};

const doneSelecting = () => {
  if (props.type === "range") {
    if (
      isDayDisabled(selectedStartDate.value.toDate()) ||
      isDayDisabled(selectedEndDate.value.toDate())
    ) {
      return;
    }
  }

  emit(
    "update:modelValue",
    props.type === "range"
      ? getRangeDates().map((date) => date.toDate())
      : selectedStartDate.value.toDate(),
  );
};
</script>

<template>
  <div
    class="p-6 w-fit rounded flex flex-col gap-y-7"
    :class="position === 'floating' ? 'shadow-normal bg-white' : ''"
  >
    <div class="flex items-center justify-between">
      <span>{{ selectedMonth }}</span>
      <div class="flex gap-x-3">
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
          type === 'range'
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

    <div class="flex gap-x-3 justify-end">
      <Button
        variant="secondary"
        class="w-[72px]"
        label="Clear"
        @click="clearDate"
      />
      <Button label="Done" class="w-[72px]" @click="doneSelecting" />
    </div>
  </div>
</template>
