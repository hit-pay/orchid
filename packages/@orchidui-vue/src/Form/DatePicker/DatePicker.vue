<script setup>
import { Dropdown, Calendar, Input } from "@/orchidui";
import { computed, ref } from "vue";
import dayjs from "dayjs";

const emit = defineEmits(["update:modelValue", "update:from", "update:to"]);
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
});
console.log(props.type, props.from, props.to, props.modelValue);

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
    return [
      date.value?.[0] ? dayjs(date.value?.[0]).format(props.dateFormat) : "",
      date.value?.[1] ? dayjs(date.value?.[1]).format(props.dateFormat) : "",
    ];
  }
});

const updateCalendar = () => {
  if (props.type === "range") {
    emit("update:from", formattedDate.value[0]);
    emit("update:to", formattedDate.value[1]);
  } else {
    emit("update:modelValue", formattedDate.value);
  }
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
    <div v-if="type === 'default'" class="flex w-full">
      <Input
        :model-value="formattedDate"
        icon="calendar"
        :label="label"
        :hint="hint"
        :placeholder="placeholder"
        :disabled="disabled"
        readonly
      />
    </div>

    <div v-else class="flex gap-x-4">
      <Input
        label="From"
        :model-value="formattedDate[0]"
        icon="calendar"
        :placeholder="placeholder"
        :disabled="disabled"
        readonly
      />

      <Input
        label="To"
        :model-value="formattedDate[1]"
        icon="calendar"
        :placeholder="placeholder"
        :disabled="disabled"
        readonly
      />
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
        @update:model-value="updateCalendar"
      />
    </template>
  </Dropdown>
</template>
