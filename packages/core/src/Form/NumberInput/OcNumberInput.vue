<script setup lang="ts">
import { BaseInput, Button } from '@/orchidui-core'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null
  },
  minValue: {
    type: Number,
    default: 1
  },
  label: String,
  errorMessage: String,
  isDisabled: Boolean,
  tooltipOptions: Object,
  hint: String,
  labelIcon: String,
  isRequired: Boolean,
  tooltipText: String,
  inputClass: [String, Array, Object]
})
const emit = defineEmits(['update:modelValue'])

const increment = () => emit('update:modelValue', Number(props.modelValue) + 1)
const decrement = () => {
  if (Number(props.modelValue) > props.minValue) {
    emit('update:modelValue', Number(props.modelValue) - 1)
  }
}
const preventEventIfNotNumberInput = (event) => {
  if ((event.key >= '0' && event.key <= '9') || event.key === 'Backspace') {
    return
  }

  event.preventDefault()
}
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
      class="flex justify-between gap-x-3 h-[36px] items-center number-input-initial-shadow border rounded px-1"
      :class="[
        inputClass,
        isDisabled ? 'bg-oc-bg-dark' : '',
        errorMessage ? 'border-oc-error number-input-error-shadow' : 'border-oc-gray-200',
        !isDisabled && !errorMessage ? 'number-input-focus-shadow' : ''
      ]"
    >
      <Button
        variant="secondary"
        class="w-[28px] shrink-0 aspect-square"
        size="small"
        icon-class="shrink-0"
        :is-disabled="isDisabled"
        left-icon="minus"
        @click="decrement"
      />
      <input
        :value="modelValue"
        :class="modelValue ? 'font-medium' : 'text-oc-text-300'"
        class="outline-none text-center max-w-[calc(100%-76px)] bg-transparent"
        placeholder="1"
        @keydown="preventEventIfNotNumberInput"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <Button
        variant="secondary"
        class="w-[28px] shrink-0 aspect-square"
        size="small"
        icon-class="shrink-0"
        :is-disabled="isDisabled"
        left-icon="plus"
        @click="increment"
      />
    </div>
  </BaseInput>
</template>

<style scoped>
.number-input-focus-shadow:hover {
  box-shadow:
    0px 0px 0px 3px var(--oc-primary-200),
    0px 2px 4px 0px #0000003d inset;
  border-color: var(--oc-primary-500);
}

.number-input-error-shadow {
  box-shadow: 0px 0px 0px 3px var(--oc-error-200) !important;
}

.number-input-initial-shadow {
  box-shadow:
    0px 1.5px 1.5px 0px #00000017,
    0px 1px 3px 0px #0000000a;
}
</style>
