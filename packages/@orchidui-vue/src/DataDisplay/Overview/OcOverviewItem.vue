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
  percentValue: Number,
});
</script>

<template>
  <div
    class="flex flex-1 items-center rounded md:overflow-hidden w-full md:w-auto"
    :class="[
      isBig ? 'gap-x-[.75rem]' : 'gap-x-3',
      isTransparent ? 'p-3' : 'border p-4 bg-oc-bg-light border-oc-gray-200',
    ]"
  >
    <OverviewIcon v-if="icon" :icon="icon" :variant="variant" />
    <div class="flex flex-col gap-y-px font-medium overflow-hidden">
      <template v-if="percentValue !== undefined">
        <div class="flex items-center gap-x-3 overflow-hidden">
          <span :class="isBig ? 'text-xl' : ''" class="truncate">{{
            title
          }}</span>
          <div class="flex items-center gap-x-1" v-if="percentValue">
            <Icon
              :name="percentValue > 0 ? 'triangle-up' : 'triangle-down'"
              :class="
                percentValue > 0 ? 'text-oc-success-500' : 'text-oc-error-500'
              "
              width="10"
              height="9"
            />
            <span class="text-oc-text-400 text-sm font-medium">
              {{ percentValue }}%
            </span>
          </div>
        </div>
        <div
          class="uppercase flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300"
        >
          {{ content }}
        </div>
      </template>
      <template v-else>
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
          <span :class="isBig ? 'text-xl' : ''" class="truncate">{{
            content
          }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
