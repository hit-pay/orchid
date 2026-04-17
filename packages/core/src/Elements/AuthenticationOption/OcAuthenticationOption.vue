<script setup>
import { Icon, Chip } from '@/orchidui-core'

defineProps({
  /** Icon name displayed in the center of the card. */
  icon: String,
  /** Width of the icon in pixels. */
  width: String,
  /** Height of the icon in pixels. */
  height: String,
  /** Extra CSS class applied to the icon element. */
  iconClass: String,
  /** Card label text shown next to the icon. */
  title: String,
  /** Highlight the card with a primary border to indicate it is selected. */
  isActive: Boolean,
  /** Props forwarded to the Chip badge shown in the top-right corner. Pass `null` to hide. */
  chipProps: Object
})
</script>

<template>
  <div
    class="relative border rounded gap-x-3 flex justify-center items-center py-6 px-5 bg-oc-bg-light shadow-sm cursor-pointer hover:border-oc-primary duration-500"
    :class="isActive ? 'border-oc-primary' : 'border-oc-gray-200'"
  >
    <Icon v-if="icon" :name="icon" :width="width" :height="height" :class="iconClass" />
    <span>{{ title }}</span>

    <Chip v-if="chipProps" v-bind="chipProps" class="absolute top-0 -translate-y-1/2 sm:right-9" />
  </div>
</template>
