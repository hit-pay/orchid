<script setup>
import { Button, Icon } from "@/orchidui";
import { computed, ref } from "vue";
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
      Array.isArray(val)
        ? new Date(val[0]).getTime() <= new Date(val[1]).getTime()
        : true,
  },
  disabledDate: {
    type: Function,
    default: () => false,
  },
});
const emit = defineEmits(["update:modelValue", "resetCalendar"]);

const selectedDate = ref(
  props.type === "range"
    ? props.modelValue[0] || new Date()
    : props.modelValue || new Date(),
);

const selectedStartDate = ref(selectedDate.value);

const selectedEndDate = ref(
  props.type === "range"
    ? props.modelValue[1] ||
        new Date(
          new Date(selectedStartDate.value).setDate(
            selectedStartDate.value.getDate() + 2,
          ),
        )
    : null,
);

const selectedStartDay = ref(
  selectedStartDate.value.getMonth() === selectedDate.value?.getMonth()
    ? selectedStartDate.value.getDate()
    : null,
);
const selectedEndDay = ref(
  props.type === "range"
    ? selectedEndDate.value.getMonth() === selectedDate.value?.getMonth()
      ? selectedEndDate.value.getDate()
      : null
    : null,
);

const daysInMonth = computed(() => {
  const date =
    props.type === "range" ? selectedDate.value : selectedStartDate.value;

  const lastDay = new Date(
    date?.getFullYear(),
    date?.getMonth() + 1,
    0,
  ).getDate();

  return Array.from({ length: lastDay }, (_, i) => i + 1);
});

const selectedMonth = computed(() => {
  if (props.type === "range") {
    return selectedDate.value.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }
  if (selectedStartDate.value) {
    return selectedStartDate.value?.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }
  return "";
});

const selectDay = (day) => {
  const currentMonth = new Date(selectedDate.value);
  currentMonth.setDate(day);
  if (
    props.type !== "range" ||
    Math.abs(
      currentMonth.getTime() - new Date(selectedEndDate.value).getTime(),
    ) >
      Math.abs(
        currentMonth.getTime() - new Date(selectedStartDate.value).getTime(),
      )
  ) {
    selectedStartDay.value = day;
    selectedStartDate.value = currentMonth;
  } else {
    selectedEndDay.value = day;
    selectedEndDate.value = currentMonth;
  }
};

const clearDate = () => {
  if (props.type === "range") {
    selectedStartDate.value = props.modelValue[0] || new Date();
    selectedEndDate.value =
      props.modelValue[1] ||
      new Date(new Date().setDate(new Date().getDate() + 2));
  } else {
    selectedStartDate.value = props.modelValue || new Date();
  }

  selectedStartDay.value =
    selectedStartDate.value?.getMonth() === selectedDate.value?.getMonth()
      ? selectedStartDate.value.getDate()
      : null;
  selectedEndDay.value =
    props.type === "range"
      ? selectedEndDate.value?.getMonth() === selectedDate.value?.getMonth()
        ? selectedEndDate.value.getDate()
        : null
      : null;
  emit("resetCalendar");
};
const prevMonth = () => {
  if (props.type === "range") {
    selectedDate.value = new Date(
      selectedDate.value?.getFullYear(),
      selectedDate.value?.getMonth() - 1,
      1,
    );

    selectedStartDay.value =
      selectedDate.value?.getMonth() === selectedStartDate.value?.getMonth()
        ? selectedStartDate.value.getDate()
        : null;
    selectedEndDay.value =
      selectedDate.value?.getMonth() === selectedEndDate.value?.getMonth()
        ? selectedEndDate.value.getDate()
        : null;
  } else {
    if (selectedStartDate.value) {
      selectedStartDate.value = new Date(
        selectedStartDate.value?.getFullYear(),
        selectedStartDate.value?.getMonth() - 1,
        1,
      );
      selectedStartDay.value = null;
    }
  }
};

const nextMonth = () => {
  if (props.type === "range") {
    selectedDate.value = new Date(
      selectedDate.value?.getFullYear(),
      selectedDate.value?.getMonth() + 1,
      1,
    );
    selectedStartDay.value =
      selectedDate.value?.getMonth() === selectedStartDate.value?.getMonth()
        ? selectedStartDate.value.getDate()
        : null;
    selectedEndDay.value =
      selectedDate.value?.getMonth() === selectedEndDate.value?.getMonth()
        ? selectedEndDate.value.getDate()
        : null;
  } else {
    if (selectedStartDate.value) {
      selectedStartDate.value = new Date(
        selectedStartDate.value?.getFullYear(),
        selectedStartDate.value?.getMonth() + 1,
        1,
      );
      selectedStartDay.value = null;
    }
  }
};
const isDaySelected = (day) => {
  return selectedStartDay.value === day || selectedEndDay.value === day;
};
const isDayInRange = (day) => {
  if (props.type === "range") {
    const currentDate = new Date(selectedDate.value);
    currentDate.setDate(day);
    return (
      isDaySelected(day) ||
      (selectedStartDate.value.getTime() <= currentDate.getTime() &&
        selectedEndDate.value.getTime() >= currentDate.getTime())
    );
  }
  if (selectedStartDay.value && selectedEndDay.value)
    return selectedStartDay.value <= day && selectedEndDay.value >= day;
};
const isDayDisabled = (day) => {
  if (props.type === "range") {
    const currentDate = new Date(selectedDate.value);
    currentDate.setDate(day);
    return (
      props.disabledDate(currentDate.setDate(day)) ||
      (props.minDate &&
        currentDate.getTime() < new Date(props.minDate).getTime()) ||
      (props.maxDate &&
        currentDate.getTime() > new Date(props.maxDate).getTime())
    );
  }
  if (selectedStartDate.value) {
    const currentDate = new Date(selectedStartDate.value);
    currentDate.setDate(day);

    return (
      props.disabledDate(currentDate.setDate(day)) ||
      (props.minDate &&
        currentDate.getTime() < new Date(props.minDate).getTime()) ||
      (props.maxDate &&
        currentDate.getTime() > new Date(props.maxDate).getTime())
    );
  }
};
const doneSelecting = () => {
  emit(
    "update:modelValue",
    props.type === "range"
      ? [
          new Date(selectedStartDate.value).toString(),
          new Date(selectedEndDate.value).toString(),
        ]
      : new Date(selectedStartDate.value).toString(),
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
