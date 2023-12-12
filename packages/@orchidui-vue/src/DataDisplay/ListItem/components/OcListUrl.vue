<script setup lang="ts">
import { Icon, Tooltip } from "@/orchidui";

const props = defineProps({
  title: String,
  url: String,
});
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.url);
  } catch (err) {
    console.error("Unable to copy text to clipboard. Error: ", err);
  }
};
</script>

<template>
  <div class="flex gap-x-3 text-sm items-center group/url">
    <span class="text-oc-text-400 font-medium">{{ title }}:</span>
    {{ url }}

    <Tooltip
      position="top"
      :hide-after="1500"
      arrow-hidden
      trigger="click"
      :distance="10"
    >
      <template #popper>
        <div class="px-3 py-2 text-oc-text-400 text-sm font-medium">
          Copied!
        </div>
      </template>
      <template #default="{ isShow }">
        <Icon
          width="14"
          height="14"
          class="cursor-pointer transition-all duration-500 group-hover/url:opacity-100"
          :class="isShow ? 'opacity-100' : 'opacity-0'"
          name="copy"
          @click="copyToClipboard"
        />
      </template>
    </Tooltip>
  </div>
</template>

<style scoped lang="scss"></style>
