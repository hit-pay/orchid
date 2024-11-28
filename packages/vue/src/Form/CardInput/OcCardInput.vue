<script setup>
import { Input, Icon } from '@orchidui/vue'

defineProps({
  placeholder: String,
  hint: String,
  label: String,
  errorMessage: String,
  cardType: String,
  isInlineLabel: Boolean,
  isDisabled: Boolean,
  modelValue: String,
  isRequired: {
    type: Boolean,
    default: false
  },
  labelIcon: {
    type: String,
    default: ''
  },
  tooltipText: {
    type: String,
    default: ''
  },
  tooltipOptions: {
    type: Object,
    default: () => ({})
  }
})
defineEmits({
  'update:modelValue': []
})
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
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #icon>
      <div class="w-[30px] h-[20px] flex items-center justify-center">
        <Icon :name="`payment-methods/${cardType}`" width="20" height="12" />
      </div>
    </template>
  </Input>
</template>
