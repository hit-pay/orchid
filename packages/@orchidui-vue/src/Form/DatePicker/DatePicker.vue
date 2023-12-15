<script setup>
import { Dropdown, Calendar, Input } from "@/orchidui";
import { computed, ref } from "vue";
import dayjs from "dayjs";

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
    default: "DD/MM/YYYY",
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
  placeholder: String,
  minLabel: {
    type: String,
    default: "From",
  },
  maxLabel: {
    type: String,
    default: "To",
  },
  isRequired: Boolean,
});

let defaultValue = props.modelValue;
if (props.type === "range" && props.from && props.to) {
  defaultValue = [props.from, props.to];
}

const date = ref(defaultValue ?? "");
const isDropdownOpened = ref(false);

const formattedDate = computed(() => {
  if (props.type === "default") {
    return date.value ? dayjs(date.value).format(props.dateFormat) : "";
  } else {
    const dateFrom = date.value?.[0]
      ? dayjs(date.value[0]).format(props.dateFormat)
      : "";
    const dateTo = date.value?.[1]
      ? dayjs(date.value[1]).format(props.dateFormat)
      : "";
    return [dateFrom, dateTo];
  }
});

const updateCalendar = () => {
  if (props.type === "range") {
    emit("update:modelValue", [formattedDate.value[0], formattedDate.value[1]]);
  } else {
    emit("update:modelValue", formattedDate.value);
  }
  isDropdownOpened.value = false;
};

const resetCalendar = () => {
  if (props.type === "range") {
    date.value[0] = "";
    date.value[1] = "";
  } else {
    date.value = "";
  }
  emit("resetCalendar");
  isDropdownOpened.value = false;
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
      <div v-if="type === 'default'" class="flex w-full">
        <Input
          :model-value="formattedDate"
          icon="calendar"
          :label="label"
          :hint="hint"
          :placeholder="placeholder"
          :disabled="disabled"
          readonly
          :has-error="errorMessage.length > 0"
        />
      </div>
      <div v-else class="flex flex-wrap gap-x-4">
        <span class="flex gap-x-1 items-center">
          {{ label }}
          <span v-if="isRequired" class="text-oc-error">*</span>
        </span>
        <Input
          :label="minLabel"
          :model-value="formattedDate[0]"
          icon="calendar"
          :placeholder="placeholder"
          :disabled="disabled"
          readonly
          :has-error="errorMessage.length > 0"
        />
        <Input
          :label="maxLabel"
          :model-value="formattedDate[1]"
          icon="calendar"
          :placeholder="placeholder"
          :disabled="disabled"
          readonly
          :has-error="errorMessage.length > 0"
        />
      </div>
      <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
        {{ errorMessage }}
      </div>
    </div>

    <template #menu>
      <Calendar
        v-if="!disabled"
        v-model="date"
        :disabled-date="disabledDate"
        :max-date="maxDate"
        :min-date="minDate"
        position="inline"
        :type="type"
        :date-format="dateFormat"
        @update:model-value="updateCalendar"
        @reset-calendar="resetCalendar"
      />
    </template>
  </Dropdown>
</template>
