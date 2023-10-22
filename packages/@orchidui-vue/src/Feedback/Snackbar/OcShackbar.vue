<script setup>
import { Icon } from '@orchid'
defineProps({
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
});
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
    :class="colorClasses[color]"
    class="border rounded-lg p-4 flex items-center gap-x-3 shadow-sm"
  >
    <Icon v-if="showIcon" :name="icon" class="shrink-0" />
    <slot>
      <span class="text-oc-text text-sm">
        {{ content }}
      </span>
    </slot>
  </div>
</template>
