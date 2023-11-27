<script setup>
import { computed } from "vue";
import { Icon } from "@/orchidui";

defineProps({
  variant: {
    type: String,
    default: "default",
  },
  icon: String,
  iconClasses: String,
  text: String,
  subText: String,
  pointed: Boolean,
});
const variantClasses = computed(() => ({
  default: "text-oc-text",
  destructive: "text-oc-error",
}));
</script>

<template>
  <div
    class="flex flex-col cursor-pointer rounded-sm hover:bg-oc-accent-1-50"
    :class="variantClasses[variant]"
  >
    <div class="flex items-center gap-x-3 p-3">
      <Icon v-if="icon" class="w-5 h-5" :name="icon" :class="iconClasses" />

      <span>{{ text }}</span>

      <div
        v-if="pointed"
        class="w-[6px] aspect-square rounded-full bg-oc-error"
      />
    </div>

    <div v-if="subText" class="p-3 text-sm text-oc-text-300">
      <span>{{ subText }}</span>
    </div>
  </div>
</template>
