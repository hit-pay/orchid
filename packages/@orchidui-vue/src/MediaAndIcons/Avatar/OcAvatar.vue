<script setup>
import { computed } from "vue";

defineProps({
  size: Number,
  type: {
    type: String,
    default: "default",
  },
});
const typeClasses = computed(() => ({
  business: "bg-oc-dark-blue text-white",
  default: "bg-oc-grey-800 text-white",
  image: "text-black",
}));
const fontSizes = computed(() => ({
  64: "text-[30px]",
  48: "text-xl",
  40: "text-lg",
  32: "text-base",
  24: "text-xs",
}));
</script>

<template>
  <div
    class="rounded-full border border-oc-grey-300 flex items-center font-bold justify-center"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :class="[typeClasses[type], fontSizes[size]]"
  >
    <slot />
  </div>
</template>
