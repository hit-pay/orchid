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
      : [...props.modelValue, value]
  );
};
</script>

<template>
  <BaseInput :label="label" :error-message="errorMessage" :hint="hint">
    <div class="flex" :class="alignmentClasses[alignment]">
      <Checkbox
        v-for="(checkbox, i) in checkboxes"
        :key="i"
        :label="checkbox.label"
        :value="checkbox.value"
        :is-error="!!errorMessage"
        :disabled="isDisabled"
        :model-value="isSelectedCheckbox(checkbox.value)"
        @update:model-value="toggleCheckbox(checkbox.value)"
      />
    </div>
  </BaseInput>
</template>
