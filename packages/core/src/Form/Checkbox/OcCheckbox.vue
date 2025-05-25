<script setup>
import { Icon, BaseInput } from '@/orchidui-core'
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  isPartial: Boolean,
  isDisabled: Boolean,
  label: String,
  subLabel: String,
  topLabel: String,
  hint: String,
  errorMessage: String,
  isButtonVariant: Boolean
})
const emit = defineEmits({
  'update:modelValue': []
})

const computedClasses = computed(() => [
  props.modelValue
    ? props.isDisabled
      ? 'border-oc-primary-100 bg-oc-primary-100 checkbox-init-shadow'
      : 'bg-oc-primary'
    : props.errorMessage
      ? 'checkbox-error-shadow'
      : props.isDisabled
        ? 'bg-oc-gray-50 border-oc-gray-200 checkbox-init-shadow'
        : 'border-oc-accent-1-200 checkbox-focus-shadow checkbox-init-shadow',
  props.errorMessage && props.modelValue && !props.isDisabled ? '!bg-oc-error checkbox-error-shadow' : '',
  props.errorMessage && !props.isDisabled ? '!border-oc-error checkbox-error-shadow' : '',
  props.isPartial
    ? props.isDisabled
      ? '!border-oc-gray-200 !bg-oc-gray-50 checkbox-init-shadow'
      : '!bg-oc-primary-100 checkbox-init-shadow checkbox-focus-shadow'
    : ''
])
const onInput = () => emit('update:modelValue', !props.isDisabled ? !props.modelValue : '')
</script>

<template>
  <BaseInput
    class="w-fit"
    :label="topLabel"
    :sub-label="subLabel"
    :hint="hint"
    :error-message="errorMessage"
  >
    <label
      class="flex items-center gap-x-3 cursor-pointer group"
      :class="{
        '!border-oc-error': errorMessage && isButtonVariant,
        'border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4':
          isButtonVariant,
        'border-oc-primary-500': modelValue
      }"
    >
      <div
        class="w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300"
        :class="computedClasses"
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

      <span v-if="label" :class="{ 'text-sm': !isButtonVariant }">{{ label }}</span>
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

<style scoped>
.checkbox-init-shadow {
  box-shadow: 0px 1.5px 1.5px 0px #00000017, 0px 1px 3px 0px #0000000A;
}
label:hover {
  .checkbox-focus-shadow {
    box-shadow: 0px 0px 0px 3px var(--oc-primary-200);
    border-color: var(--oc-primary-500);
  }
}
.checkbox-error-shadow {
  box-shadow: 0px 0px 0px 3px var(--oc-error-200);
  border-color: var(--oc-error-500);
}
</style>
