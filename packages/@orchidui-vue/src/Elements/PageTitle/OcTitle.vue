<script setup>
import { Chip, CopyTooltip, Icon } from "@/orchidui";

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  chipProps: Object,
  tooltipOptions: Object,
  isCopy: Boolean,
});
</script>

<template>
  <div class="flex text-oc-text justify-center flex-col gap-y-3 max-w-full">
    <div class="md:text-xl font-medium flex items-center gap-x-3">
      <slot name="title" :title="title">
        <span class="whitespace-nowrap text-ellipsis overflow-hidden">
          {{ title }}
        </span>
      </slot>
      <Chip v-if="chipProps" v-bind="chipProps" />
    </div>
    <div
      v-if="description"
      class="text-oc-text-400 text-sm group flex items-center gap-x-4"
    >
      <slot name="description" :description="description">
        <span class="overflow-hidden whitespace-nowrap text-ellipsis">
          {{ description }}
        </span>
      </slot>

      <CopyTooltip
        v-if="isCopy"
        :value="description"
        :tooltip-options="tooltipOptions"
      >
        <template #default="{ isShow }">
          <Icon
            width="16"
            height="16"
            class="cursor-pointer transition-all duration-500 group-hover:opacity-100"
            :class="isShow ? 'opacity-100' : 'opacity-0'"
            name="copy"
          />
        </template>
      </CopyTooltip>
    </div>
  </div>
</template>
