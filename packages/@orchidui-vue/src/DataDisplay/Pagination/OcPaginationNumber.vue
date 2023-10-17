<script setup>
import { computed } from "vue";

defineProps({
  active: Boolean,
  isRounded: Boolean,
  size: {
    type: String,
    default: "default",
  },
});
const sizeClasses = computed(() => ({
  default: "w-[36px]  h-[36px]",
  small: "w-[32px] text-sm h-[32px]",
  big: "w-[40px] text-lg h-[40px]",
}));
</script>

<template>
  <div
    class="flex items-center justify-center cursor-pointer py-3 px-1"
    :class="[
      sizeClasses[size],
      active
        ? 'bg-oc-gray-100 text-oc-text'
        : 'text-oc-text-400 hover:text-oc-text hover:bg-oc-gray-50',
      isRounded ? 'rounded-full' : 'rounded-sm',
    ]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
