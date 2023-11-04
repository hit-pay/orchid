<script setup>
import { OverviewIcon, Icon } from "@/orchidui";

defineProps({
  icon: String,
  variant: String,
  title: String,
  content: String,
  info: Boolean,
  isBig: Boolean,
  isTransparent: Boolean,
  isCard: Boolean,
});
</script>

<template>
  <div
    class="flex flex-1 items-center rounded overflow-hidden"
    :class="[
      isBig ? 'gap-x-[.75rem]' : 'gap-x-3',
      isTransparent ? 'p-3' : 'border p-4 bg-oc-bg-light border-oc-gray-200',
    ]"
  >
    <OverviewIcon v-if="icon" :icon="icon" :variant="variant" />
    <div class="flex flex-col gap-y-px font-medium overflow-hidden">
      <div
        class="uppercase flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300"
      >
        {{ title }}
        <Icon
          v-if="info"
          width="16"
          height="16"
          class="text-oc-text-400"
          name="information"
        />
      </div>
      <div class="flex items-center gap-x-2 overflow-hidden">
        <Icon v-if="isCard" width="35" name="payment-methods/visa" />
        <span
          :class="isBig ? 'text-xl' : ''"
          class="text-ellipsis overflow-hidden whitespace-nowrap"
          >{{ content }}</span
        >
      </div>
    </div>
  </div>
</template>
