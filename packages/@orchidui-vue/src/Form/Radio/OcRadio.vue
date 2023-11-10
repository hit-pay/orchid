<script setup>
defineProps({
  modelValue: [String, Boolean],
  isDisabled: Boolean,
  isError: Boolean,
  checked: Boolean,
  label: String,
  id: [String, Number],
  groupName: String,
});
defineEmits({
  "update:modelValue": [],
});
</script>

<template>
  <div
    class="radio-button inline-block relative cursor-pointer"
    :class="isDisabled ? 'disabled' : ''"
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
      class="radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300"
      :class="isDisabled ? 'text-oc-text-300' : 'text-oc-text-500'"
    >
      <span
        class="radio-button__custom w-5 h-5 rounded-full border transition-all duration-300"
        :class="[
          isDisabled || !modelValue
            ? 'border-oc-primary-200 bg-oc-primary-50'
            : '',
          isError ? '!border-oc-error' : 'border-oc-primary-200',
        ]"
      />

      <span v-if="label" class="text-sm">{{ label }}</span>
    </label>
  </div>
</template>

<style lang="scss">
.radio-button {
  &__input:checked + &__label &__custom {
    @apply border-[5px];

    &:not(.disabled) {
      @apply border-[var(--oc-primary-500)];
    }
  }

  &.disabled &__input:checked + &__label &__custom {
    @apply border-[var(--oc-primary-100)];
  }
}
</style>
