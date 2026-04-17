<script setup>
import { computed } from 'vue'
import { Checkbox, BaseInput } from '@/orchidui-core'

const props = defineProps({
  /** Layout direction of the checkboxes. */
  alignment: {
    type: String,
    default: 'vertical'
  },
  /** Array of checkbox items — each with `label` and `value` keys. */
  checkboxes: Array,
  /** Current selected values (v-model). */
  modelValue: {
    type: [Array, String]
  },
  /** Field label shown above the checkboxes. */
  label: String,
  /** Validation error message shown in red below the field. */
  errorMessage: String,
  /** Helper text shown below the field. */
  hint: String,
  /** Disable all checkboxes — non-interactive, grayed out. */
  isDisabled: Boolean,
  /** Show a "Select all" checkbox at the top. */
  isSelectAll: Boolean,
  /** Render checkboxes as button-style toggles instead of standard checkboxes. */
  isButtonVariant: Boolean,
  /** Make each checkbox full-width (block-level). */
  isBlock: Boolean
})
const emit = defineEmits({
  /** Selected values changed. Payload: new array of selected values. */
  'update:modelValue': []
})

const alignmentClasses = computed(() => ({
  horizontal: 'gap-x-5 flex-wrap',
  vertical: 'flex-col gap-y-3'
}))
const isSelectedCheckbox = (value) => props.modelValue?.includes(value)
const toggleCheckbox = (value) => {
  emit(
    'update:modelValue',
    isSelectedCheckbox(value)
      ? props.modelValue.filter((v) => v !== value)
      : [...props.modelValue, value]
  )
}
const isAllSelected = computed(() =>
  props.checkboxes?.every((checkbox) => isSelectedCheckbox(checkbox?.value))
)
const allCheckboxValues = computed(() => props.checkboxes?.map((checkbox) => checkbox?.value))
const selectAll = () => {
  if (isAllSelected.value) {
    emit('update:modelValue', [])
  } else {
    emit('update:modelValue', allCheckboxValues.value)
  }
}
</script>

<template>
  <BaseInput :label="label" :error-message="errorMessage" :hint="hint">
    <div class="flex" :class="alignmentClasses[alignment]">
      <Checkbox
        v-if="isSelectAll"
        label="Select all"
        :is-disabled="isDisabled"
        :value="allCheckboxValues"
        :model-value="isAllSelected"
        :is-button-variant="isButtonVariant"
        @update:model-value="selectAll"
      />
      <Checkbox
        v-for="(checkbox, i) in checkboxes"
        :key="i"
        :label="checkbox.label"
        :value="checkbox.value"
        :is-error="!!errorMessage"
        :is-disabled="isDisabled"
        :class="{ '!w-fit': !isBlock }"
        :model-value="isSelectedCheckbox(checkbox.value)"
        :is-button-variant="isButtonVariant"
        @update:model-value="toggleCheckbox(checkbox.value)"
      />
    </div>
  </BaseInput>
</template>
