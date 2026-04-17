<script setup>
import { Chip, Icon } from '@/orchidui-core'

defineProps({
  /** Heading text shown in the card. */
  title: {
    type: String,
    default: 'Enter form manually'
  },
  /** Props forwarded to the Chip shown next to the title. Pass `null` to hide. */
  chipOptions: {
    type: Object,
    default: null
  },
  /** Icon name shown in the top-right corner when the card is active. */
  icon: {
    type: String,
    default: 'check-2'
  },
  /** Show a primary border to indicate this option is selected. */
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="rounded hover:bg-oc-gray-50 p-5 flex flex-col gap-y-3"
    :class="isActive ? 'border-2 border-oc-primary' : 'border border-oc-gray-200'"
  >
    <div class="flex items-center">
      <div class="flex flex-1 items-center gap-x-3">
        <slot name="title">
          <span class="font-medium text-lg">{{ title }}</span>
        </slot>
        <Chip v-if="chipOptions" v-bind="chipOptions" />
      </div>
      <Icon v-if="isActive" class="shrink-0 text-oc-primary" :name="icon" width="18" height="18" />
    </div>

    <slot name="content" />
  </div>
</template>
