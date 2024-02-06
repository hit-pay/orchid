<script setup>
import { BaseInput, Icon } from '@/orchidui';

defineProps({
  modelValue: [String, Boolean],
  isDisabled: Boolean,
  checked: Boolean,
  label: String,
  id: [String, Number],
  groupName: String,
  errorMessage: String,
  hint: String,
  isButtonVariant: Boolean,
  icon: String,
});
defineEmits({
  'update:modelValue': [],
});
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
        'radio-button__label--button border-gray-200 border py-3 px-5 rounded-sm': isButtonVariant,
      }"
    >
      <span
        v-if="!isButtonVariant"
        class="radio-button__custom w-5 h-5 rounded-full border transition-all duration-300"
        :class="[
          isDisabled || !modelValue ? 'border-oc-primary-200 bg-oc-primary-50' : '',
          errorMessage ? '!border-oc-error' : 'border-oc-primary-200',
        ]"
      />

      <Icon v-if="icon" class="w-5 h-5 text-oc-text-500" :class="{ '!text-oc-text-300': isDisabled }" :name="icon" />

      <span v-if="label" class="text-sm">{{ label }}</span>
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
</style>
