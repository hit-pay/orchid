<script setup>
import { Skeleton } from "@/orchidui";

defineProps({
  isActive: Boolean,
  isLoading: Boolean,
  title: String,
  content: String,
});
</script>

<template>
  <div
    class="cursor-pointer rounded group font-medium justify-center border gap-y-2 md:w-fit w-full flex flex-col hover:shadow-normal"
    :class="[
      isActive && !isLoading
        ? 'border-b-[3px] border-oc-primary'
        : 'border-oc-accent-1-100',
      !isLoading ? 'px-5 py-4 h-[76px]' : 'p-3',
    ]"
  >
    <div v-if="isLoading" class="min-w-[138px] flex flex-col gap-y-3">
      <Skeleton class="h-[14px] w-[80%] rounded-sm" />
      <Skeleton class="h-[20px] w-full rounded-sm" />
    </div>

    <template v-else>
      <span class="text-oc-text-400 text-sm">{{ title }}</span>
      <span
        class="text-xl group-hover:text-oc-text"
        :class="isActive ? 'text-oc-text' : 'text-oc-text-400'"
      >
        {{ content }}
      </span>
    </template>
  </div>
</template>
