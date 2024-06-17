<script setup>
import { Icon } from '@/orchidui'
import { computed } from 'vue'

defineProps({
  icon: {
    type: String,
    default: 'circle'
  },
  variant: {
    type: String,
    default: 'blue'
  },
  width: {
    type: String,
    default: '22'
  },
  height: {
    type: String,
    default: '22'
  }
})
const variantClasses = computed(() => ({
  gray: 'bg-oc-gray-100 text-oc-gray-700',
  orange: 'bg-oc-warning-50-tr text-oc-warning-600',
  red: 'bg-oc-error-50-tr text-oc-error',
  green: 'bg-oc-success-50-tr text-oc-success',
  accent: 'bg-oc-accent-1-50-tr text-oc-accent-1',
  blue: 'bg-oc-primary-50-tr text-oc-primary'
}))
</script>

<template>
  <div
    class="rounded-full p-3 flex items-center justify-center aspect-square"
    :class="variantClasses[variant]"
  >
    <Icon :name="icon" :width="width" :height="height" />
  </div>
</template>
