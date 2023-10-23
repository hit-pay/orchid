<script setup>
import { Input, Icon } from "@orchid";
defineProps({
  placeholder: String,
  hint: String,
  label: String,
  errorMessage: String,
  cardType: String,
  isInlineLabel: Boolean,
  isDisabled: Boolean,
  modelValue: String,
});
defineEmits({
  "update:modelValue": [],
});
</script>

<template>
  <Input
    :placeholder="placeholder"
    :label="label"
    :error-message="errorMessage"
    :is-inline-label="isInlineLabel"
    :disabled="isDisabled"
    :hint="hint"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #icon>
      <div class="w-[30px] h-[20px] flex items-center justify-center">
        <Icon :name="cardType" width="20" height="12" />
      </div>
    </template>
  </Input>
</template>
