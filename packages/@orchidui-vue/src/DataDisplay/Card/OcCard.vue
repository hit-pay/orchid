<script setup>
import OcIcon from "@/orchidui/MediaAndIcons/Icon/OcIcon.vue";
import OcTooltip from "@/orchidui/Overlay/Tooltip/OcTooltip.vue";
import { useSlots } from "vue";
import OcNoData from "@/orchidui/DataDisplay/NoData/OcNoData.vue";

defineProps({
  loading: {
    type: Boolean,
  },
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
    class="border border-gray-200 rounded p-5 flex flex-col grow transition"
    :class="{
      'animate-pulse opacity-90': loading,
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
      <oc-tooltip
        popper-class="w-max bg-oc-bg"
        position="top-start"
        v-if="titleIconTooltip"
      >
        <oc-icon class="ml-[3px]" :name="titleIcon" width="16" height="16" />
        <template #popper>
          <div
            class="flex flex-col px-3 py-2 text-[12px] text-oc-text-400 font-medium text-sm"
          >
            {{ titleIconTooltip }}
          </div>
        </template>
      </oc-tooltip>
    </div>

    <div v-if="!noData">
      <slot name="header"></slot>

      <div class="mb-auto">
        <slot name="default"></slot>
      </div>

      <slot name="footer"></slot>
    </div>

    <oc-no-data
      v-else-if="noData && !loading"
      class="mt-5 mb-9"
      :description="noDataDescription"
    ></oc-no-data>
  </div>
</template>
