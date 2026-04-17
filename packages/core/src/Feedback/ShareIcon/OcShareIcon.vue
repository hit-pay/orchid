<script setup>
import { Icon, Tooltip } from '@/orchidui-core'

defineProps({
  /** Label text shown next to the icon (or inside the tooltip when `isOnlyIcon` is true). */
  text: String,
  /** Icon name passed to the Icon component. */
  icon: String,
  /** When true, renders only the icon inside a circular button and shows `text` as a tooltip on hover. */
  isOnlyIcon: Boolean,
  /** Props forwarded to the Tooltip component (position, distance, etc.). */
  tooltipOptions: {
    type: Object
  }
})
</script>

<template>
  <Tooltip v-if="isOnlyIcon" v-bind="tooltipOptions">
    <div
      class="rounded-full share-icon w-fit cursor-pointer text-oc-text-400 p-3 border border-gray-200"
    >
      <Icon :name="icon" width="20" height="20" />
    </div>

    <template #popper>
      <div class="px-3 py-2 text-oc-text-400 text-sm font-medium">
        {{ text }}
      </div>
    </template>
  </Tooltip>
  <div
    v-else
    class="px-3 share-icon border border-oc-gray-200 rounded-full w-fit py-[6px] flex items-center gap-x-2"
  >
    <Icon :name="icon" width="20" height="20" />
    <span class="text-sm">{{ text }}</span>
  </div>
</template>
<style lang="scss">
.share-icon {
  background: var(--button-secondary-default);

  &:hover {
    background: var(--button-secondary-hover);
  }

  &:active {
    background: var(--button-secondary-pressed);
  }
}
</style>
