<script setup>
import { computed } from "vue";

defineProps({
  size: [String, Number],
  type: {
    type: String,
    default: "default",
  },
});
const typeClasses = computed(() => ({
  business: "bg-oc-dark-blue",
  default: "bg-oc-grey-800",
  image: "",
}));
</script>

<template>
  <div
    class="rounded-full text-white border border-oc-grey-300 flex items-center justify-center"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :class="typeClasses[type]"
  >
    <slot />
  </div>
</template>

