<script setup>
const props = defineProps({
  /** Total number of pill segments to render. */
  steps: {
    type: Number,
    required: true
  },
  /** Index of the last completed step (1-based). Segments up to this index are filled. */
  currentStep: {
    type: Number,
    default: 1
  },
  /** Optional label text shown above the progress bar. */
  label: String
})

const isStepCompleted = (index) => {
  return index <= props.currentStep
}
</script>

<template>
  <div>
    <p v-if="label" class="mb-3 text-center">{{ label }}</p>
    <div class="w-full flex align-center justify-center gap-2">
      <span
        v-for="index in steps"
        :key="index"
        class="bg-oc-primary h-2 w-14 rounded-full"
        :class="{ 'bg-oc-primary-50-tr': !isStepCompleted(index) }"
      />
    </div>
  </div>
</template>
