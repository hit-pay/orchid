<script setup>
import { Variant } from '@/orchidui-core'

defineProps({
  /** Array of variant option objects — each supports all OcVariant props (value, label, icon, isDisabled, etc.). */
  variants: {
    type: Array,
    default: () => []
  },
  /** v-model — value of the currently selected variant. */
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

defineEmits({
  /** Selected variant changed. Payload: the `value` of the newly selected variant. */
  'update:modelValue': []
})
</script>

<template>
  <div class="flex gap-3 items-start md:flex-row flex-col">
    <Variant
      v-for="variant in variants"
      :key="variant.value"
      :is-active="variant.value === modelValue"
      v-bind="variant"
      @click="$emit('update:modelValue', variant.isDisabled ? modelValue : variant.value)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Variant>
  </div>
</template>

<style scoped lang="scss"></style>
