<script setup>
import { Icon } from '@orchidui/vue-core'
import { computed } from 'vue'
defineProps({
  disabled: Boolean,
  isNext: Boolean,
  size: {
    type: String,
    default: 'default'
  }
})
const sizeClasses = computed(() => ({
  default: 'px-1 py-3',
  small: 'py-2 text-sm',
  big: 'px-2 py-4 text-lg'
}))
</script>

<template>
  <div
    class="flex text-oc-text-400 items-center gap-x-1"
    :class="[
      sizeClasses[size],
      disabled ? 'cursor-not-allowed opacity-60' : 'hover:text-oc-text cursor-pointer',
      isNext ? 'flex-row-reverse' : ''
    ]"
  >
    <Icon width="14" height="14" :class="isNext ? '-rotate-90' : 'rotate-90'" name="chevron-down" />
    {{ isNext ? 'Next' : 'Prev' }}
  </div>
</template>
