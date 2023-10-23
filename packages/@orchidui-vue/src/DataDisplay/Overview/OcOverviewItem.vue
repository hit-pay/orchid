<script setup>
import { OverviewIcon, Icon } from "@orchid";

defineProps({
  icon: String,
  variant: String,
  title: String,
  content: String,
  info: Boolean,
});
</script>

<template>
  <div
    class="flex gap-x-3 flex-1 items-center p-4 border rounded bg-oc-bg-light border-oc-gray-200"
  >
    <OverviewIcon :icon="icon" :variant="variant" />
    <div class="flex flex-col gap-y-px font-medium">
      <div class="uppercase flex items-start gap-x-3 text-xs text-oc-text-300">
        {{ title }}
        <Icon v-if="info" width="16" height="16" name="information" />
      </div>
      <span>{{ content }}</span>
    </div>
  </div>
</template>
