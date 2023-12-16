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

const isDropdownOpened = ref(false);

const formattedDate = computed(() => {
  if (props.type === "default") {
    return props.modelValue
      ? dayjs(props.modelValue, props.dateFormat).format("DD/MM/YYYY")
      : "";
  } else {
    if (props.modelValue && props.modelValue[0]) {
      return [
        dayjs(props.modelValue[0], props.dateFormat).format("DD/MM/YYYY"),
        dayjs(props.modelValue[1], props.dateFormat).format("DD/MM/YYYY"),
      ];
    } else {
      return ["", ""];
    }
  }
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
      <div v-else class="flex flex-wrap">
        <label
          class="text-sm flex items-center gap-x-3 font-medium text-oc-text-400"
        >
          <span class="flex gap-x-1 items-center">
            {{ label }}
            <span v-if="isRequired" class="text-oc-error">*</span>
          </span>
        </label>
        <div class="flex gap-x-4">
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
      </div>
      <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
        {{ errorMessage }}
      </div>
    </div>

    <template #menu>
      <Calendar
        v-if="!disabled"
        :model-value="
          type === 'range'
            ? modelValue && modelValue[0]
              ? [
                  dayjs(modelValue[0], dateFormat).toDate(),
                  dayjs(modelValue[1], dateFormat).toDate(),
                ]
              : [dayjs().toDate(), dayjs().add(2, 'day').toDate()]
            : modelValue
              ? dayjs(modelValue, dateFormat).toDate()
              : new Date()
        "
        :disabled-date="disabledDate"
        :max-date="maxDate"
        :min-date="minDate"
        position="inline"
        :type="type"
        @update:model-value="updateCalendar"
        @reset-calendar="resetCalendar"
      />
    </template>
  </Dropdown>
</template>
