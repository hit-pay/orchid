<script setup>
import Step from './OcStep.vue'

defineProps({
  /** Array of step objects, each with a `title` field. Rendered when the default slot is empty. */
  steps: {
    type: Array,
    default: () => []
  },
  /** v-model — zero-based index of the active step. */
  modelValue: {
    type: Number,
    default: 0
  }
})

defineEmits({
  /** A step was clicked. Payload: zero-based index of the clicked step. */
  'update:model-value': null
})
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
