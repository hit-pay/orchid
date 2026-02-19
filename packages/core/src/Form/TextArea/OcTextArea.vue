<script setup>
import { BaseInput } from '@/orchidui-core'
import { ref, watch } from 'vue'

const props = defineProps({
  placeholder: String,
  label: String,
  errorMessage: String,
  hint: String,
  modelValue: String,
  rows: Number,
  autoResize: {
    type: Boolean,
    default: false
  },
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
  },
  ai: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits({
  'update:modelValue': []
})

const isFocused = ref(false)
const hasAi = ref(props.ai && !!props.modelValue)

watch(() => props.modelValue, () => {
  hasAi.value = false
}, {
  once: true
})

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
    :ai="hasAi"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <textarea
      class="outline-none p-3 min-h-[120px] rounded border disabled:bg-oc-bg-dark"
      :class="[
        isFocused ? 'focused-shadow' : '',
        errorMessage ? 'error-shadow' : hasAi ? 'border-oc-accent-2-300 bg-oc-accent-2-50 focus:bg-oc-bg-light' : 'input-shadow',
        !autoResize ? 'resize-none' : 'resize-y'
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
