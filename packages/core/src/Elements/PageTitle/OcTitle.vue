323
<script setup>
import { Chip, CopyTooltip, Icon } from '@/orchidui-core'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  copyValue: { type: String, default: '' },
  chipProps: Object,
  tooltipOptions: Object,
  isCopy: Boolean
})
</script>

<template>
  <div class="flex text-oc-text justify-center flex-col gap-y-3 max-w-full">
    <div class="md:text-xl font-medium flex items-center gap-x-3">
      <slot name="title">
        <span class="whitespace-nowrap text-ellipsis overflow-hidden md:text-base lg:text-xl">
          {{ title }}
        </span>
      </slot>
      <Chip v-if="chipProps" v-bind="chipProps" />
    </div>
    <div
      v-if="description || $slots.description"
      class="text-oc-text-400 text-sm group flex items-center gap-x-4"
    >
      <slot name="description">
        <span class="overflow-hidden whitespace-nowrap text-ellipsis">
          {{ description }}
        </span>
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
