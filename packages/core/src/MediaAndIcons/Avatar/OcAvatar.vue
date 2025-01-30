<script setup>
import { computed } from 'vue'

defineProps({
  size: {
    type: Number,
    validator: (value) => [64, 48, 40, 32, 28, 24].includes(value),
    default: 32
  },
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['business', 'default', 'image'].includes(value)
  }
})
const typeClasses = computed(() => ({
  business: 'bg-oc-accent-1 text-oc-text-100',
  default: 'bg-oc-gray-800 text-oc-text-100',
  image: 'text-oc-text-500',
  icon: 'border-oc-gray-100'
}))
const fontSizes = computed(() => ({
  64: 'text-[30px]',
  48: 'text-xl',
  40: 'text-lg',
  32: 'text-base',
  24: 'text-xs'
}))
</script>

<template>
  <div
    class="rounded-full border border-oc-gray-300 flex items-center font-bold justify-center"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :class="[typeClasses[type], fontSizes[size]]"
  >
    <slot>H</slot>
  </div>
</template>
