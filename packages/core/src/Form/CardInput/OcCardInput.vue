<script setup>
import { Input, Icon } from '@/orchidui-core'

defineProps({
  /** Placeholder text shown when the input is empty. */
  placeholder: String,
  /** Helper text shown below the input. */
  hint: String,
  /** Field label shown above the input. */
  label: String,
  /** Validation error message shown in red below the input. */
  errorMessage: String,
  /** Card brand icon name rendered inside the input (e.g. `'visa'`, `'mastercard'`). */
  cardType: String,
  /** Compact inline label — label text appears inside the input box before the value. */
  isInlineLabel: Boolean,
  /** Disable the input — non-interactive, grayed out. */
  isDisabled: Boolean,
  /** Current input value (v-model). */
  modelValue: String,
  /** Mark the field as required — shows a `*` indicator next to the label. */
  isRequired: {
    type: Boolean,
    default: false
  },
  /** Icon name rendered in the label area as a tooltip trigger. */
  labelIcon: {
    type: String,
    default: ''
  },
  /** Text shown in the tooltip when hovering `labelIcon`. */
  tooltipText: {
    type: String,
    default: ''
  },
  /** Props forwarded to the Tooltip component on the label icon. */
  tooltipOptions: {
    type: Object,
    default: () => ({})
  }
})
defineEmits({
  /** Input value changed. Payload: new string value. */
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
