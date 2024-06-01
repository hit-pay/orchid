<script setup>
import { Dropdown, Calendar, Input } from "@/orchidui";
import { computed, ref } from "vue";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

// Getting invalid date while using 'DD/MM/YYYY' format
// https://github.com/iamkun/dayjs/issues/1786
dayjs.extend(customParseFormat);

const emit = defineEmits(["update:modelValue", "resetCalendar"]);
const props = defineProps({
  modelValue: {
    type: [String, Date, Number, Array],
  },
  type: {
    type: String,
    default: "default",
    validator: (val) => ["default", "range"].includes(val),
  },
  disabledDate: {
    type: Function,
    default: () => false,
  },
  minDate: {
    type: [String, Date, Number],
    default: null,
  },
  maxDate: {
    type: [String, Date, Number],
    default: null,
  },
  dateFormat: {
    type: String,
    default: "YYYY-MM-DD",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "DD/MM/YYYY",
  },
  isSplitInput: {
    type: Boolean,
    default: true,
  },
  minLabel: {
    type: String,
    default: "From",
  },
  maxLabel: {
    type: String,
    default: "To",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isIndefinite: {
    type: Boolean,
    default: false,
  },
});

const startDateSelected = ref();
const toInputElement = ref();
const fromInputElement = ref();
const isDropdownOpened = ref(false);
const isCalendarIndefinite = ref(false);

const isRangeInput = computed(() => props.type === "range");

const formattedDate = computed(() => {
  if (!isRangeInput.value) {
    return props.modelValue ? dayjs(props.modelValue, props.dateFormat) : "";
  }

  if (props.modelValue && props.modelValue[0]) {
    return [
      dayjs(props.modelValue[0], props.dateFormat),
      dayjs(props.modelValue[1], props.dateFormat),
    ];
  }

  return ["", ""];
});

const updateCalendar = (newValue) => {
  if (props.type === "range") {
    emit("update:modelValue", [
      dayjs(newValue[0]).format(props.dateFormat),
      dayjs(newValue[1]).format(props.dateFormat),
    ]);
  } else {
    emit("update:modelValue", dayjs(newValue).format(props.dateFormat));
  }
  isDropdownOpened.value = false;
};

const resetCalendar = () => {
  emit("resetCalendar");
  emit("update:modelValue", isRangeInput.value ? [] : null);

  isDropdownOpened.value = false;
};

const disableAllDates = (value) => {
  const date = dayjs(value);
  const isInCurrentMonth = (date) => date.get("month") === dayjs().get("month");
  return isInCurrentMonth(date);
};

const handleIndefinite = (event) => {
  isCalendarIndefinite.value = event;
  emit("update:modelValue", event ? "Indefinite" : null);
};
</script>

<template>
  <Dropdown
    v-model="isDropdownOpened"
    placement="bottom-start"
    :distance="10"
    class="w-full"
  >
    <div class="flex flex-col gap-y-2 w-full">
      <div v-if="!isSplitInput || !isRangeInput" class="flex w-full">
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
          :placeholder="placeholder"
          :disabled="disabled"
          is-readonly
          :has-error="errorMessage.length > 0"
          :is-required="isRequired"
        />
      </div>
      <div v-else class="flex flex-wrap">
        <div class="w-full flex gap-x-4">
          <Input
            ref="fromInputElement"
            :label="`${label} ${minLabel}`"
            :model-value="
              formattedDate[0] ? formattedDate[0].format(dateFormat) : ''
            "
            icon="calendar"
            :placeholder="placeholder"
            :disabled="disabled"
            is-readonly
            :has-error="errorMessage.length > 0"
            :is-required="isRequired"
          />
          <Input
            ref="toInputElement"
            :label="`${label} ${maxLabel}`"
            :model-value="
              formattedDate[1] ? formattedDate[1].format(dateFormat) : ''
            "
            icon="calendar"
            :placeholder="placeholder"
            :disabled="disabled"
            is-readonly
            :has-error="errorMessage.length > 0"
            :is-required="isRequired"
          />
        </div>
      </div>
      <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
        {{ errorMessage }}
      </div>
    </div>

    <template #menu="{ isPopoverOpen }">
      <slot
        name="menu"
        :is-popover-open="isPopoverOpen"
        :update-calendar="updateCalendar"
        :reset-calendar="resetCalendar"
      >
        <Calendar
          v-if="!disabled && isPopoverOpen"
          :model-value="
            isRangeInput
              ? modelValue && modelValue[0]
                ? [formattedDate[0].toDate(), formattedDate[1].toDate()]
                : undefined
              : formattedDate
                ? formattedDate.toDate()
                : new Date()
          "
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
