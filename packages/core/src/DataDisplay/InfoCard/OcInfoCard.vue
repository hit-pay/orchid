<script setup>
import { Icon, Tooltip } from '@/orchidui-core'
import { useSlots } from 'vue'

defineProps({
  /** Show a spinning loader overlay while data is loading. */
  isLoading: Boolean,
  /** Card heading text shown in the title bar. */
  title: String,
  /** Icon name displayed next to the title (requires `titleIconTooltip` for the tooltip). */
  titleIcon: String,
  /** Tooltip text shown when hovering over the title icon. */
  titleIconTooltip: String,
  /** Object of CSS classes applied to the title bar wrapper. */
  titleClass: Object,
  /** Remove the card border (transparent card style). */
  transparent: Boolean,
  /** Apply a hover shadow to the card. */
  hover: Boolean,
  /** Apply a persistent drop shadow to the card. */
  shadow: Boolean,
  /** Reserved for a "no data" empty state (currently unused in the template). */
  noData: Boolean,
  /** Description shown in the "no data" state (currently unused in the template). */
  noDataDescription: String
})

const slots = useSlots()

const hasSlot = (name) => !!slots[name]
</script>

<template>
  <div
    class="border border-gray-200 rounded p-5 flex flex-col grow transition relative"
    :class="{
      'border-transparent': transparent,
      'hover:shadow': hover,
      shadow: shadow
    }"
  >
    <div
      v-if="title && !hasSlot('header')"
      class="flex items-start text-oc-text-400 font-medium text-[10px]"
      :class="titleClass"
    >
      <div class="uppercase">{{ title }}</div>
      <Tooltip popper-class="w-max bg-oc-bg" position="top-start" v-if="titleIconTooltip">
        <Icon class="ml-[3px]" :name="titleIcon" width="16" height="16" />
        <template #popper>
          <div class="flex flex-col px-3 py-2 text-[12px] text-oc-text-400 font-medium text-sm">
            {{ titleIconTooltip }}
          </div>
        </template>
      </Tooltip>
    </div>

    <slot name="header"></slot>

    <div class="mb-auto">
      <slot name="default"></slot>
    </div>

    <slot name="footer"></slot>

    <div
      class="absolute top-2 right-2 left-2 bottom-2 bg-white flex items-center justify-center"
      v-if="isLoading"
    >
      <Icon
        name="loading-2"
        width="32"
        height="32"
        class="text-oc-text-400 motion-safe:animate-spin"
      ></Icon>
    </div>
  </div>
</template>
