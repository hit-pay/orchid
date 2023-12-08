<script setup>
import { Icon, BaseInput } from "@/orchidui";

const props = defineProps({
  modelValue: Boolean,
  isPartial: Boolean,
  isDisabled: Boolean,
  label: String,
  hint: String,
  errorMessage: String,
});
const emit = defineEmits({
  "update:modelValue": [],
});
const onInput = () =>
  emit("update:modelValue", !props.isDisabled ? !props.modelValue : "");
</script>

<template>
  <BaseInput class="w-fit" label="" :hint="hint" :error-message="errorMessage">
    <label class="flex items-center gap-x-3 cursor-pointer">
      <div
        class="w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm"
        :class="[
          modelValue
            ? isDisabled
              ? 'border-oc-primary-100 bg-oc-primary-100'
              : 'border-oc-primary bg-oc-primary'
            : errorMessage
              ? 'border-oc-error'
              : isDisabled
                ? 'bg-oc-primary-50 border-oc-primary-200'
                : 'border-oc-primary-200',
          errorMessage && modelValue && !isDisabled ? '!bg-oc-error ' : '',
          errorMessage && !isDisabled ? '!border-oc-error' : '',
          isPartial
            ? isDisabled
              ? '!border-oc-primary-200 !bg-oc-primary-50'
              : '!border-oc-primary !bg-oc-primary-100'
            : '',
        ]"
      >
        <Icon
          v-if="isPartial ? true : modelValue"
          class="w-4 h-4"
          :class="
            isPartial
              ? isDisabled
                ? 'text-oc-primary-200'
                : 'text-oc-primary'
              : 'text-oc-text-100'
          "
          :name="isPartial ? 'minus' : 'check-2'"
        />
      </div>

      <span v-if="label" class="text-sm">{{ label }}</span>
      <input
        :value="modelValue"
        type="checkbox"
        :checked="modelValue"
        class="h-0 w-0 hidden"
        :disabled="isDisabled"
        @change="onInput"
      />

      <slot name="after" />
    </label>
  </BaseInput>
</template>
