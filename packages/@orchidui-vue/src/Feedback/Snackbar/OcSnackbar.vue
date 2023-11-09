<script setup>
import { Icon } from "@/orchidui";
defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "default",
  },
  content: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "filled-check",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  isCloseIcon: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["update:modelValue"]);
const colorClasses = Object.freeze({
  default: "border-oc-success-200 bg-oc-success-50 text-oc-success-500",
  primary: "border-oc-primary-200 bg-oc-primary-50 text-oc-primary-500",
  error: "border-oc-error-200 bg-oc-error-50 text-oc-error-500",
  warning: "border-oc-warning-200 bg-oc-warning-50 text-oc-warning-500",
  gray: "border-oc-gray-300 bg-oc-gray-100 text-oc-gray-700",
});
</script>

<template>
  <div
    v-show="modelValue"
    :class="colorClasses[color]"
    class="border rounded-lg p-4 flex items-center gap-x-3 shadow-sm"
  >
    <Icon v-if="showIcon" :name="icon" class="shrink-0" />
    <slot>
      <div class="w-full flex items-center justify-between">
        <span class="text-oc-text text-sm">
          {{ content }}
        </span>
        <div
          v-if="isCloseIcon"
          class="rounded cursor-pointer text-oc-gray-500 hover:bg-transparent hover:text-oc-text"
          @click="$emit('update:modelValue', false)"
        >
          <Icon name="x" width="20" height="20" />
        </div>
      </div>
    </slot>
  </div>
</template>
