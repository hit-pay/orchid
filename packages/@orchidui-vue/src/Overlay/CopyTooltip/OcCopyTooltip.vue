<script setup lang="ts">
import { Icon, Tooltip } from "@/orchidui";

defineProps({
  value: String,
  tooltipText: {
    type: String,
    default: "Copied!",
  },
  tooltipOptions: Object,
});
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Unable to copy text to clipboard. Error: ", err);
  }
};
</script>

<template>
  <Tooltip
    position="top"
    :hide-after="1500"
    arrow-hidden
    trigger="click"
    :distance="10"
    v-bind="tooltipOptions"
  >
    <template #popper>
      <div class="px-3 py-2 text-oc-text-400 text-sm font-medium">
        {{ tooltipText }}
      </div>
    </template>
    <template #default="{ isShow }">
      <div @click="copyToClipboard(value)">
        <slot :is-show="isShow">
          <Icon
            width="14"
            height="14"
            class="cursor-pointer transition-all duration-500"
            name="copy"
          />
        </slot>
      </div>
    </template>
  </Tooltip>
</template>
