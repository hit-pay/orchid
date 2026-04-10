<script setup>
import { computed } from 'vue'
import { Radio, BaseInput } from '@/orchidui-core'

defineProps({
  /**
   * Layout direction for the radio options.
   * @values vertical, horizontal
   */
  alignment: {
    type: String,
    default: 'vertical'
  },
  /**
   * Array of radio option objects.
   * Each item: `{ label, value, icon?, isDisabled?, tooltipText?, labelIcon?, tooltipOptions? }`
   */
  radio: Array,
  /** Label shown above the group. */
  label: String,
  /** Additional CSS class applied to the options wrapper div. */
  wrapperClass: String,
  /** HTML name attribute shared by all radio inputs in this group. */
  groupName: String,
  /** Validation error message shown below the group. */
  errorMessage: String,
  /** Helper text shown below the label. */
  hint: String,
  /** v-model — the value of the currently selected radio. */
  modelValue: String,
  /** Render all options as button-style radios (bordered cards). */
  isButtonVariant: Boolean,
  /** Button variant with the radio circle visible inside each card. */
  isButtonVariantWithRadio: Boolean,
  /** Make each option expand to full width (block display). */
  isBlock: Boolean
})
const emit = defineEmits({
  /** Selected radio changed. Payload: the value of the selected option. */
  'update:modelValue': []
})
const alignmentClasses = computed(() => ({
  horizontal: 'gap-x-5 flex-wrap',
  vertical: 'flex-col gap-y-3'
}))
const onInput = (value) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <BaseInput :label="label" :error-message="errorMessage" :hint="hint">
    <div class="flex" :class="[alignmentClasses[alignment], wrapperClass]">
      <Radio
        v-for="(item, i) in radio"
        :id="item.value"
        :key="i"
        :class="{ '!w-fit': !isBlock }"
        :model-value="item.value"
        :label="item.label"
        :icon="item.icon"
        :is-error="!!errorMessage"
        :checked="item.value === modelValue"
        :is-disabled="!!item.isDisabled"
        :group-name="groupName"
        :tooltip-text="item.tooltipText"
        :label-icon="item.labelIcon"
        :tooltip-options="item.tooltipOptions"
        :is-button-variant="isButtonVariant"
        :is-button-variant-with-radio="isButtonVariantWithRadio"
        @update:model-value="onInput"
      />
    </div>
  </BaseInput>
</template>
