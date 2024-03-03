<script setup>
import { computed } from "vue";
import { Checkbox, BaseInput } from "@/orchidui";

const props = defineProps({
  alignment: {
    type: String,
    default: "vertical",
  },
  checkboxes: Array,
  modelValue: {
    type: [Array, String],
  },
  label: String,
  errorMessage: String,
  hint: String,
  isDisabled: Boolean,
  isSelectAll: Boolean,
});
const emit = defineEmits({
  "update:modelValue": [],
});

const alignmentClasses = computed(() => ({
  horizontal: "gap-x-5 flex-wrap",
  vertical: "flex-col gap-y-3",
}));
const isSelectedCheckbox = (value) => props.modelValue?.includes(value);
const toggleCheckbox = (value) => {
  emit(
    "update:modelValue",
    isSelectedCheckbox(value)
      ? props.modelValue.filter((v) => v !== value)
      : [...props.modelValue, value],
  );
};
const isAllSelected = computed(() =>
  props.checkboxes?.every((checkbox) => isSelectedCheckbox(checkbox?.value)),
);
const allCheckboxValues = computed(() =>
  props.checkboxes?.map((checkbox) => checkbox?.value),
);
const selectAll = () => {
  if (isAllSelected.value) {
    emit("update:modelValue", []);
  } else {
    emit("update:modelValue", allCheckboxValues.value);
  }
};
</script>

<template>
  <BaseInput :label="label" :error-message="errorMessage" :hint="hint">
    <div class="flex" :class="alignmentClasses[alignment]">
      <Checkbox
        v-if="isSelectAll"
        label="Select all"
        :is-disabled="isDisabled"
        :value="allCheckboxValues"
        :model-value="isAllSelected"
        @update:model-value="selectAll"
      />
      <Checkbox
        v-for="(checkbox, i) in checkboxes"
        :key="i"
        :label="checkbox.label"
        :value="checkbox.value"
        :is-error="!!errorMessage"
        :is-disabled="isDisabled"
        class="!w-fit"
        :model-value="isSelectedCheckbox(checkbox.value)"
        @update:model-value="toggleCheckbox(checkbox.value)"
      />
    </div>
  </BaseInput>
</template>
