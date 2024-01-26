<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@/orchidui";

const props = defineProps({
  variant: {
    type: String,
    default: "current",
    validator: (value) =>
      [
        "completed",
        "not_completed",
        "current",
        "partially_completed",
        "pending",
        "error",
      ].includes(value),
  },
});
const isSlotAvailable = computed(
  () => !["completed", "error", "pending"].includes(props.variant),
);

const getIconName = {
  completed: "check-2",
  pending: "time",
  error: "filled-x-circle",
};

const getVariantClasses = {
  completed: "text-white bg-oc-primary",
  pending: "text-oc-warning border border-oc-warning",
  error: "text-oc-error border border-oc-error",
  not_completed: "border border-oc-gray-300",
  partially_completed: "border-2 border-dashed border-oc-primary",
  current: "border border-oc-gray-800",
};

const iconSize = {
  completed: 12,
  error: 18,
  pending: 18,
};
</script>

<template>
  <div
    class="rounded-full w-7 h-7 flex items-center justify-center"
    :class="getVariantClasses[variant]"
  >
    <slot v-if="isSlotAvailable" />
    <Icon
      v-else
      :width="iconSize[variant]"
      :height="iconSize[variant]"
      :name="getIconName[variant]"
    />
  </div>
</template>
