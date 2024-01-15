<script setup>
import { Icon, CopyTooltip } from "@/orchidui";

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
</script>

<template>
  <div class="flex gap-x-5 text-sm group">
    <div class="flex gap-x-2 items-center w-[80px] shrink-0 text-oc-text-400">
      {{ label }}

      <CopyTooltip :value="content">
        <template #default="{ isShow }">
          <Icon
            width="14"
            height="14"
            class="cursor-pointer transition-all duration-500 group-hover:opacity-100"
            :class="isShow ? 'opacity-100' : 'opacity-0'"
            name="copy"
          />
        </template>
      </CopyTooltip>
    </div>

    <span>{{ content }}</span>
  </div>
</template>
