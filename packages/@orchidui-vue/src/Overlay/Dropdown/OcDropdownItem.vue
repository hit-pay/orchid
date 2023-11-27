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
  pointed: Boolean,
});
const variantClasses = computed(() => ({
  default: "text-oc-text",
  destructive: "text-oc-error",
}));
</script>

<template>
  <div
    class="flex cursor-pointer rounded-sm gap-x-3 p-3 items-center hover:bg-oc-accent-1-50"
    :class="variantClasses[variant]"
  >
    <Icon
      v-if="icon"
      class="text-oc-text-400"
      :name="icon"
      width="16"
      height="16"
      :class="iconClasses"
    />

    <slot>
      <span>{{ text }}</span>
    </slot>

    <div
      v-if="pointed"
      class="w-[6px] aspect-square rounded-full bg-oc-error"
    />
  </div>
</template>
