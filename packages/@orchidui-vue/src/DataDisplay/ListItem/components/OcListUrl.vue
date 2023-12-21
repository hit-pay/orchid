<script setup lang="ts">
import { Icon, CopyTooltip } from "@/orchidui";

defineProps({
  title: String,
  url: String,
});
</script>

<template>
  <div class="flex gap-x-3 text-sm items-center group/url">
    <span class="text-oc-text-400 font-medium shrink-0">{{ title }}:</span>
    <span class="break-all">{{ url }}</span>

    <CopyTooltip :value="url">
      <template #default="{ isShow }">
        <Icon
          width="14"
          height="14"
          class="cursor-pointer transition-all duration-500 group-hover/url:opacity-100"
          :class="isShow ? 'opacity-100' : 'opacity-0'"
          name="copy"
        />
      </template>
    </CopyTooltip>
  </div>
</template>

<style scoped lang="scss"></style>
