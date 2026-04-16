<script setup>
import { BaseInput, Icon, Tooltip } from '@/orchidui-core'

defineProps({
  /** v-model — the value this radio represents. When selected, this value is emitted. */
  modelValue: [String, Boolean],
  /** Disable the radio — non-interactive with reduced opacity. */
  isDisabled: Boolean,
  /** Whether this radio is checked (controlled externally by RadioGroup). */
  checked: Boolean,
  /** Label text shown next to the radio. */
  label: String,
  /** Unique id used together with groupName for the underlying input element. */
  id: [String, Number],
  /** HTML name attribute grouping radio buttons together (required for single-select behavior). */
  groupName: String,
  /** Validation error message shown below the radio. */
  errorMessage: String,
  /** Helper text shown below the label. */
  hint: String,
  /** Tooltip text shown on hover of the label icon. */
  tooltipText: String,
  /** Icon name rendered inside the label area (triggers tooltip). */
  labelIcon: String,
  /** Extra props forwarded to the Tooltip component. */
  tooltipOptions: Object,
  /** Render as a button-style radio (bordered card). */
  isButtonVariant: Boolean,
  /** Button variant with the radio circle visible inside the card. */
  isButtonVariantWithRadio: Boolean,
  /** Icon name shown before the label text. */
  icon: String
})
defineEmits({
  /** Radio selected. Payload: the modelValue of this radio. */
  'update:modelValue': []
})
</script>

<template>
  <BaseInput
    class="radio-button inline-block relative cursor-pointer"
    :class="isDisabled ? 'disabled' : ''"
    label=""
    :error-message="errorMessage"
    :hint="hint"
  >
    <input
      :id="groupName + id"
      :value="modelValue"
      :checked="checked"
      :name="groupName"
      :disabled="isDisabled"
      class="radio-button__input absolute opacity-0 w-0 h-0"
      type="radio"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label
      :for="groupName + id"
      class="radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500"
      :class="{
        '!text-oc-text-300': isDisabled,
        'bg-gray-200': isDisabled && isButtonVariant,
        '!border-oc-error': errorMessage && isButtonVariant,
        'radio-button__label--button border-gray-200 border py-3 px-5 rounded': isButtonVariant,
        '!px-6 !py-5 !gap-x-4': isButtonVariantWithRadio
      }"
    >
      <span
        v-if="!isButtonVariant || isButtonVariantWithRadio"
        class="radio-button__custom w-5 h-5 rounded-full border transition-all duration-300 radio-button-init-shadow"
        :class="[
          isDisabled || !modelValue ? 'border-oc-gray-200' : '',
          isDisabled && !modelValue ? 'bg-oc-accent-1-50' : '',
          !isDisabled && !errorMessage ? 'radio-button-focus-shadow' : '',
          errorMessage ? 'radio-button-error-shadow' : 'border-oc-gray-200'
        ]"
      />

      <Icon
        v-if="icon"
        class="w-5 h-5 text-oc-text-500"
        :class="{ '!text-oc-text-300': isDisabled }"
        :name="icon"
      />

      <slot>
        <span v-if="label" :class="{ 'text-sm': !isButtonVariantWithRadio }">{{ label }}</span>
      </slot>

      <Tooltip v-if="labelIcon" v-bind="tooltipOptions">
        <Icon width="16" height="16" :name="labelIcon" class="text-oc-text-400" />
        <template #popper>
          <slot name="tooltipText">
            <div v-if="tooltipText" class="px-3 py-2 whitespace-nowrap">
              {{ tooltipText }}
            </div>
          </slot>
        </template>
      </Tooltip>
    </label>
  </BaseInput>
</template>

<style lang="scss">
.radio-button {
  &__input:checked + &__label &__custom {
    @apply border-[5px];

    &:not(.disabled) {
      @apply border-[var(--oc-primary-500)];
    }
  }

  &__input:checked + &__label--button {
    @apply border-[var(--oc-primary-500)];
  }

  &.disabled &__input:checked + &__label &__custom {
    @apply border-[var(--oc-primary-100)];
  }
}
.radio-button-init-shadow {
  box-shadow: 0px 1.5px 1.5px 0px #00000017, 0px 1px 3px 0px #0000000A;
}
label:hover {
  .radio-button-focus-shadow {
    box-shadow: 0px 0px 0px 3px var(--oc-primary-200) !important;
    border-color: var(--oc-primary-500) !important;
  }
}
.radio-button-error-shadow {
  box-shadow: 0px 0px 0px 3px var(--oc-error-200);
  border-color: var(--oc-error-500);
}
</style>
