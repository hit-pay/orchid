<script setup lang="ts">
import { BaseInput, Button } from "@/orchidui";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "1",
  },
  minValue: {
    type: Number,
    default: 1,
  },
  label: String,
  errorMessage: String,
  isDisabled: Boolean,
  tooltipOptions: Object,
  hint: String,
  labelIcon: String,
  isRequired: Boolean,
  tooltipText: String,
  inputClass: [String, Array, Object],
});
const emit = defineEmits(["update:modelValue"]);

const increment = () => emit("update:modelValue", Number(props.modelValue) + 1);
const decrement = () => {
  if (Number(props.modelValue) > props.minValue) {
    emit("update:modelValue", Number(props.modelValue) - 1);
  }
};
</script>

<template>
  <BaseInput
    :label="label"
    :tooltip-options="tooltipOptions"
    :error-message="errorMessage"
    :hint="hint"
    :label-icon="labelIcon"
    :is-required="isRequired"
    :tooltip-text="tooltipText"
  >
    <div
      class="flex w-fit justify-between gap-x-3 h-[36px] items-center min-w-[100px] border rounded px-1"
      :class="[
        inputClass,
        isDisabled ? 'bg-oc-bg-dark' : '',
        errorMessage ? 'border-oc-error' : 'border-oc-gray-200',
      ]"
    >
      <Button
        variant="secondary"
        class="w-[28px] aspect-square"
        size="small"
        icon-class="shrink-0"
        :is-disabled="isDisabled"
        left-icon="minus"
        @click="decrement"
      />
      <span class="text-oc-text-300">{{ modelValue }}</span>
      <Button
        variant="secondary"
        class="w-[28px] aspect-square"
        size="small"
        icon-class="shrink-0"
        :is-disabled="isDisabled"
        left-icon="plus"
        @click="increment"
      />
    </div>
  </BaseInput>
</template>
