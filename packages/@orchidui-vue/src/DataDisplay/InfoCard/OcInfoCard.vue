<script setup>
import { Icon, Tooltip } from "@/orchidui";
import { useSlots } from "vue";

defineProps({
  isLoading: Boolean,
  title: String,
  titleIcon: String,
  titleIconTooltip: String,
  titleClass: Object,
  transparent: Boolean,
  hover: Boolean,
  shadow: Boolean,
  noData: Boolean,
  noDataDescription: String,
});

const slots = useSlots();

const hasSlot = (name) => !!slots[name];
</script>

<template>
  <div
    class="border border-gray-200 rounded p-5 flex flex-col grow transition relative overflow-hidden"
    :class="{
      'border-transparent': transparent,
      'hover:shadow': hover,
      shadow: shadow,
    }"
  >
    <div
      v-if="title && !hasSlot('header')"
      class="flex items-start text-oc-text-400 font-medium text-[10px]"
      :class="titleClass"
    >
      <div class="uppercase">{{ title }}</div>
      <Tooltip
        popper-class="w-max bg-oc-bg"
        position="top-start"
        v-if="titleIconTooltip"
      >
        <Icon class="ml-[3px]" :name="titleIcon" width="16" height="16" />
        <template #popper>
          <div
            class="flex flex-col px-3 py-2 text-[12px] text-oc-text-400 font-medium text-sm"
          >
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
      class="absolute top-0 right-0 left-0 bottom-0 bg-white flex items-center justify-center"
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
