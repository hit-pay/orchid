<script setup>
import { computed } from "vue";
import { Icon } from "@/orchidui";
const props = defineProps({
  variant: {
    type: String,
    default: "",
  },
  label: String,
  closable: Boolean,
});
defineEmits({
  remove: [],
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
    case "accent-3":
      className = "bg-oc-accent-3-50 text-oc-accent-3 ";
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
    case "gray":
      className = "bg-oc-gray-100 text-oc-gray-700 ";
      break;
    default:
      className = "bg-oc-primary-50 text-oc-primary ";
      break;
  }
  return className;
});
const iconColor = computed(() => {
  let className = "";
  switch (props.variant) {
    case "accent-1":
      className = "text-oc-accent-1-300";
      break;
    case "accent-2":
      className = "text-oc-accent-2-300";
      break;
    case "accent-3":
      className = "text-oc-accent-3-300";
      break;
    case "success":
      className = "text-oc-success-300 ";
      break;
    case "warning":
      className = "text-oc-warning-300 ";
      break;
    case "error":
      className = "text-oc-error-300 ";
      break;
    case "gray":
      className = "text-oc-gray-400 ";
      break;
    default:
      className = "text-oc-primary-300 ";
      break;
  }
  return className;
});
</script>

<template>
  <span
    class="rounded-full flex items-center gap-x-3 py-1 px-3 text-sm leading-[20px]"
    :class="className"
  >
    <template v-if="label">{{ label }}</template>
    <slot v-else />
    <Icon
      v-if="closable"
      width="18"
      height="18"
      :class="iconColor"
      name="filled-x-circle"
      class="cursor-pointer"
      @click.stop="$emit('remove')"
    />
  </span>
</template>
