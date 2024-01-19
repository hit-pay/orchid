<script setup lang="ts">
import { Icon } from "@/orchidui";
import { ref, watch } from "vue";
import OnboardingStatusIcon from "./OnboardingStatusIcon.vue";

defineProps({
  description: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  isBorder: {
    type: Boolean,
    default: false,
  },
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

const bodyWrapper = ref();
const isOpen = ref(false);

const calculateHeight = () => {
  if (bodyWrapper.value) {
    bodyWrapper.value.style.height = isOpen.value
      ? `${bodyWrapper.value.scrollHeight}px`
      : "0px";
  }
};
const toggle = () => {
  isOpen.value = !isOpen.value;
  calculateHeight();
};
watch(() => bodyWrapper.value, calculateHeight);
</script>

<template>
  <div
    class="hover:bg-oc-gray-50 border overflow-hidden"
    :class="isBorder ? 'border-oc-gray-200 rounded' : 'border-transparent'"
  >
    <div class="px-7 items-center py-5 flex gap-x-7" @click="toggle">
      <div class="flex items-center flex-1 gap-x-4">
        <OnboardingStatusIcon :variant="variant" />
        <div class="flex flex-col gap-y-1">
          <span class="font-medium">{{ title }}</span>
          <span class="text-oc-text-400 text-sm">{{ description }}</span>
        </div>
      </div>

      <slot name="button-group" />

      <Icon
        name="chevron-down"
        class="text-oc-text-400 transition duration-300"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </div>
    <div ref="bodyWrapper" class="transition-all duration-300">
      <slot />
    </div>
  </div>
</template>
