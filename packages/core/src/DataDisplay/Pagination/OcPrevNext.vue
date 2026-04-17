<script setup>
import { Icon } from '@/orchidui-core'
import { computed } from 'vue'
defineProps({
  /** Disable the button — no-click cursor and reduced opacity. */
  disabled: Boolean,
  /** Render as the "Next" button (reversed chevron direction and label). */
  isNext: Boolean,
  /**
   * Size variant — controls padding and text size.
   * @values default, small, big
   */
  size: {
    type: String,
    default: 'default'
  }
})
const sizeClasses = computed(() => ({
  default: 'px-1 py-3 text-[13px]',
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
