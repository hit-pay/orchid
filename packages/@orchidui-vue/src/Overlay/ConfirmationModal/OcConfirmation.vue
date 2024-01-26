<script setup>
import { Icon } from "@/orchidui";

defineProps({
  description: String,
  iconClass: String,
  variant: {
    type: String,
    default: "delete",
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
  icon: String,
  descriptionStyle: String,
});
const variantIcon = {
  delete: "bin",
  warning: "alert",
  success: "check-2",
  question: "question-mark",
};
const classIcon = {
  delete: "text-oc-error bg-oc-error-50-tr",
  warning: "text-oc-warning-600 bg-oc-warning-50-tr",
  success: "text-oc-success bg-oc-success-50-tr",
  question: "text-oc-accent-1 bg-oc-accent-1-50-tr",
};
</script>

<template>
  <div class="flex flex-col gap-y-4 items-center" :class="descriptionStyle">
    <div
      v-if="!hideIcon"
      class="w-[48px] aspect-square rounded-full flex items-center justify-center"
      :class="[classIcon[variant], iconClass]"
    >
      <Icon :name="icon ?? variantIcon[variant]" />
    </div>
    <div class="text-center">
      <slot name="description">{{ description }}</slot>
    </div>
  </div>
</template>
