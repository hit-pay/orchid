<script setup lang="ts">
import { Icon } from "@/orchidui";

defineProps({
  isActive: Boolean,
  title: String,
  description: String,
  icon: String,
  iconClass: String,
  iconText: String,
});
</script>

<template>
  <div
    class="flex w-full relative gap-x-5 py-4 before:top-[20px] last:before:top-0 before:h-full before:left-[10px] before:absolute before:border-l"
  >
    <div>
      <div
        class="w-6 h-6 flex z-[1] relative items-center rounded-full justify-center"
        :class="isActive ? 'bg-oc-accent-1-50 shadow' : ' bg-transparent'"
      >
        <div
          class="w-3 h-3 rounded-full"
          :class="isActive ? 'bg-oc-accent-1' : ' bg-oc-gray-500'"
        />
      </div>
    </div>

    <div class="flex gap-x-7 w-full items-center">
      <div class="flex flex-1 flex-col gap-y-2">
        <span>{{ title }}</span>
        <span class="text-sm text-oc-text-400">
          {{ description }}
        </span>
      </div>

      <div class="flex items-end gap-x-2">
        <Icon :name="icon" :class="iconClass" />
        <span class="text-lg font-medium">{{ iconText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
