<script setup>
import { BaseInput } from '@/orchidui-core'
import { ref, watch } from 'vue'

const props = defineProps({
  /** v-model — the textarea value. */
  modelValue: String,
  /** Placeholder text shown when the textarea is empty. */
  placeholder: String,
  /** Field label shown above the textarea. */
  label: String,
  /** Validation error message shown in red below the textarea. */
  errorMessage: String,
  /** Helper text shown below the label. */
  hint: String,
  /** Number of visible text rows (HTML rows attribute). */
  rows: Number,
  /** Allow the user to resize the textarea vertically. When false, resize is disabled. */
  autoResize: {
    type: Boolean,
    default: false
  },
  /** Disable the textarea — non-interactive. */
  isDisabled: Boolean,
  /** Show a `*` required indicator next to the label. */
  isRequired: {
    type: Boolean,
    default: false
  },
  /** Icon name rendered inside the label area (tooltip trigger). */
  labelIcon: {
    type: String,
    default: ''
  },
  /** Tooltip text shown when hovering the label icon. */
  tooltipText: {
    type: String,
    default: ''
  },
  /** Extra props forwarded to the label tooltip component. */
  tooltipOptions: {
    type: Object,
    default: () => ({})
  },
  /** AI-assisted state — shows a subtle accent border. Clears on first user input. */
  ai: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits({
  /** Textarea value changed. Payload: new string value. */
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
