<script setup>
import { computed } from "vue";

defineProps({
  size: {
    type: Number,
    validator: (value) => [64, 48, 40, 32, 24].includes(value),
  },
  type: {
    type: String,
    default: "default",
    validator: (value) => ["business", "default", "image"].includes(value),
  },
});
const typeClasses = computed(() => ({
  business: "bg-oc-accent-3 text-oc-text-100",
  default: "bg-oc-grey-800 text-oc-text-100",
  image: "text-oc-text-500",
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
    <slot>H</slot>
  </div>
</template>
