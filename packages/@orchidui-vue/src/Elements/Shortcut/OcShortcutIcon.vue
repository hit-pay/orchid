<template>
  <Tooltip position="top" :distance="8" arrow-hidden>
    <div
      class="border rounded p-3 hover:shadow duration-300 relative"
      :class="variants[variant].border"
    >
      <Icon
        :name="icon"
        width="24"
        height="24"
        :class="variants[variant].icon"
      />

      <div
        v-if="iconBadge"
        class="absolute top-[-4px] right-[-4px] rounded w-[14px] h-[14px] flex items-center justify-center"
        :class="variants[variant].iconBadge"
      >
        <Icon
          :name="isEdit ? 'x' : iconBadge"
          width="12"
          height="12"
          class="text-white"
        />
      </div>
    </div>
    <template #popper v-if="slots.tooltip">
      <div class="w-max py-3 px-4 text-oc-text-400 font-medium flex gap-3">
        <slot name="tooltip"></slot>
      </div>
    </template>
  </Tooltip>
</template>

<script setup lang="ts">
import { Icon, Tooltip } from "@/orchidui";
import { useSlots } from "vue";

const slots = useSlots();

defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (val) =>
      ["dark-blue", "purple", "green", "default"].includes(val),
  },
  icon: String,
  iconBadge: String,
  isEdit: Boolean,
});

const variants = {
  "dark-blue": {
    border: "border-oc-accent-1-100 bg-oc-accent-1-50",
    icon: "text-oc-accent-1-500",
    iconBadge: "bg-oc-accent-1-500",
  },
  purple: {
    border: "border-oc-accent-2-100 bg-oc-accent-2-50",
    icon: "text-oc-accent-2-500",
    iconBadge: "bg-oc-accent-2-500",
  },
  green: {
    border: "border-oc-success-100 bg-oc-success-50-tr",
    icon: "text-oc-success-500",
    iconBadge: "bg-oc-success-500",
  },
  default: {
    border: "border-grey-200 bg-oc-gray-50",
    icon: "text-oc-text-300",
    iconBadge: "bg-oc-gray-500",
  },
};
</script>
