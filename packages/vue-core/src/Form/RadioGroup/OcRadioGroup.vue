<script setup>
import { computed } from 'vue'
import { Radio, BaseInput } from '@orchidui/vue-core'

defineProps({
  alignment: {
    type: String,
    default: 'vertical'
  },
  radio: Array,
  label: String,
  wrapperClass: String,
  groupName: String,
  errorMessage: String,
  hint: String,
  modelValue: String,
  isButtonVariant: Boolean,
  isButtonVariantWithRadio: Boolean,
  isBlock: Boolean
})
const emit = defineEmits({
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
