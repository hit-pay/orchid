<script setup lang="ts">
import { ref } from "vue";
import { Icon, Tooltip } from "@/orchidui";

defineProps({
  value: [String, Blob],
  tooltipText: {
    type: String,
    default: "Copied!",
  },
  tooltipOptions: Object,
});

const isCopied = ref(false);
const copyToClipboard = async (data) => {
  try {
    if (data instanceof Blob) {
      await navigator.clipboard.write([
        new ClipboardItem({
          [data.type]: data,
        }),
      ]);
    } else {
      await navigator.clipboard.writeText(data);
    }
    isCopied.value = true;

    setTimeout(() => {
      isCopied.value = false;
    }, 1500);
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
    trigger="hover"
    :distance="20"
    v-bind="tooltipOptions"
  >
    <template #popper>
      <div
        v-if="isCopied"
        class="px-3 py-2 text-oc-text-400 text-sm font-medium"
      >
        {{ tooltipText }}
      </div>
    </template>
    <template #default="{ isShow }">
      <div @click.stop="copyToClipboard(value)">
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
