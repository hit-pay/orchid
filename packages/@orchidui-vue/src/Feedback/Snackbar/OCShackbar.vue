<script setup>
import { defineAsyncComponent } from "vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OCIcon.vue"),
);

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
  blue: "border-oc-blue-200 bg-oc-blue-50 text-oc-blue-500",
  red: "border-oc-error-200 bg-oc-error-50 text-oc-error-500",
  orange: "border-oc-warning-200 bg-oc-warning-50 text-oc-warning-500",
  grey: "border-oc-grey-300 bg-oc-grey-100 text-oc-grey-700",
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
