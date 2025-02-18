<script setup>
import { Chip, CopyTooltip, Icon, Skeleton } from '@/orchidui-core'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  copyValue: { type: String, default: '' },
  chipProps: Object,
  tooltipOptions: Object,
  isCopy: Boolean,
  isLoading: { type: Boolean, default: false }
})
</script>

<template>
  <div class="flex text-oc-text justify-center flex-col gap-y-3 max-w-full">
    <div class="md:text-xl font-medium flex items-center gap-x-3">
      <slot name="title">
        <span
          v-if="!isLoading"
          class="whitespace-nowrap text-ellipsis overflow-hidden md:text-base lg:text-xl"
        >
          {{ title }}
        </span>
        <Skeleton v-else class="w-1/2 h-[20px] rounded"></Skeleton>
      </slot>
      <Chip v-if="chipProps" v-bind="chipProps" />
    </div>
    <div
      v-if="description || $slots.description"
      class="text-oc-text-400 text-sm group flex items-center gap-x-4"
    >
      <slot name="description">
        <span v-if="!isLoading" class="overflow-hidden whitespace-nowrap text-ellipsis">
          {{ description }}
        </span>
        <Skeleton v-else class="w-1/3 h-[18px] rounded"></Skeleton>
      </slot>

      <CopyTooltip v-if="isCopy" :value="copyValue" :tooltip-options="tooltipOptions">
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
