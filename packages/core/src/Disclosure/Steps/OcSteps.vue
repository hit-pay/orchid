<script setup>
import Step from './OcStep.vue'

defineProps({
  steps: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

defineEmits(['update:model-value'])
</script>

<template>
  <div class="flex gap-x-7">
    <slot>
      <Step
        v-for="(step, i) in steps"
        :key="i"
        :title="step.title"
        :value="i + 1"
        :is-current="i === modelValue"
        :is-completed="i < modelValue"
        class="flex flex-col gap-y-3 items-center text-sm"
        @click="$emit('update:model-value', i)"
      />
    </slot>
  </div>
</template>
