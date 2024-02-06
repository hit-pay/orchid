<script setup>
const props = defineProps({
  steps: {
    type: Number,
    required: true,
  },

  currentStep: {
    type: Number,
    default: 1,
  },

  label: String,
});

const isStepCompleted = (index) => {
  return index <= props.currentStep;
};
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
