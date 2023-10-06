<template>
  <span class="rounded-full py-2 px-4 text-xs" :class="className">
    <template v-if="label">{{ label }}</template>
    <slot v-else />
  </span>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: ''
  },
  label: String
});

const className = computed(() => {
  let className = "";
  switch (props.variant) {
    case "accent-1":
      className = "bg-oc-accent-1-50 text-oc-accent-1 ";
      break;
    case "accent-2":
      className = "bg-oc-accent-2-50 text-oc-accent-2 ";
      break;
    case "success":
      className = "bg-oc-success-50 text-oc-success ";
      break;
    case "warning":
      className = "bg-oc-warning-50 text-oc-warning ";
      break;
    case "error":
      className = "bg-oc-error-50 text-oc-error ";
      break;
    default:
      className = "bg-oc-primary-50 text-oc-primary ";
      break;
  }
  return className;
});
</script>