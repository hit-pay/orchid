<script setup>
import { Icon, Tooltip } from "@orchid";

defineProps({
  label: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
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
  <div class="flex gap-x-5 text-sm group">
    <div class="flex gap-x-2 items-center w-[80px] shrink-0 text-oc-text-400">
      {{ label }}

      <Tooltip position="top" :hide-after="1500" trigger="click" :distance="10">
        <template #popper>
          <div class="px-3 py-2 text-oc-text-400 text-sm font-medium">
            Copied!
          </div>
        </template>
        <template #default="{ isShow }">
          <Icon
            width="14"
            height="14"
            class="cursor-pointer transition-all duration-500 group-hover:opacity-100"
            :class="isShow ? 'opacity-100' : 'opacity-0'"
            name="copy"
            @click="copyToClipboard(content)"
          />
        </template>
      </Tooltip>
    </div>

    <span>{{ content }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
