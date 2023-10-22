
<script setup>
import { computed } from "vue";
import { Icon } from '@orchid'

defineProps({
  variant: {
    type: String,
    default: "default",
  },
  icon: String,
  iconClasses: String,
  text: String,
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
      class="w-5 h-5 text-oc-text-400"
      :name="icon"
      :class="iconClasses"
    />

    <span>{{ text }}</span>
  </div>
</template>
