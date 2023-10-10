<template>
  <div
    class="flex cursor-pointer gap-x-3 p-3 items-center hover:bg-oc-dark-blue-50"
    :class="variantClasses[variant]"
  >
    <Icon v-if="icon" class="w-5 h-5" :name="icon" />

    <span>{{ text }}</span>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OcIcon.vue"),
);

defineProps({
  variant: {
    type: String,
    default: "default",
  },
  icon: String,
  text: String,
});
const variantClasses = computed(() => ({
  default: "text-oc-text",
  destructive: "text-oc-error",
}));
</script>
