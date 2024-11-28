<script setup>
import { BaseInput } from '@orchidui/vue'
import { ref } from 'vue'

defineProps({
  placeholder: String,
  label: String,
  errorMessage: String,
  hint: String,
  modelValue: String,
  rows: Number,
  autoResize: Boolean,
  isDisabled: Boolean,
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

const emit = defineEmits({
  'update:modelValue': []
})

const isFocused = ref(false)

const MIN_HEIGHT = '18px'

const onInput = (event) => {
  const input = event.target
  if (!input) return
  input.style.height = MIN_HEIGHT
  input.style.height = input.scrollHeight + 'px'
  emit('update:modelValue', input.value)
}
</script>

<template>
  <BaseInput
    :label="label"
    :error-message="errorMessage"
    :hint="hint"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <textarea
      class="outline-none p-3 min-h-[120px] rounded border resize-none disabled:bg-oc-bg-dark"
      :class="[
        isFocused ? 'shadow-[0_0_0_2px]' : '',
        errorMessage ? 'border-oc-error shadow-oc-error' : 'border-oc-gray-200 shadow-oc-gray-200'
      ]"
      :disabled="isDisabled"
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      @input="onInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </BaseInput>
</template>
