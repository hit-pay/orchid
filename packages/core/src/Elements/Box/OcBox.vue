<script setup>
import { OverviewIcon } from '@/orchidui-core'

defineProps({
  icon: String,
  width: String,
  height: String,
  variant: String,
  title: String,
  description: String,
  isActive: Boolean
})
</script>

<template>
  <div
    class="rounded py-7 px-5 border bg-oc-bg-light flex flex-col gap-y-5 items-center shadow-sm"
    :class="isActive ? 'border-oc-primary' : 'border-oc-gray-200'"
  >
    <OverviewIcon :icon="icon" :width="width" :height="height" :variant="variant" />

    <div class="flex flex-col text-center gap-y-3">
      <span class="text-lg font-medium">{{ title }}</span>
      <span class="text-sm text-oc-text-400">{{ description }}</span>
    </div>
  </div>
</template>
