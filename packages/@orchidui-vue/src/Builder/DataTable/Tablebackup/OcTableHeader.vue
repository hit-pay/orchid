<script setup>
import { computed } from "vue";
import { Checkbox } from "@orchid";

const Variants = {
  TEXT: "text",
  CHECKBOX: "checkbox",
};

defineProps({
  variant: {
    type: String,
    default: "text",
    validator: (value) => ["text", "checkbox"].includes(value),
  },
  text: String,
  isPartial: Boolean,
  isChecked: Boolean,
});
defineEmits({
  selectAll: [],
});
const variantClass = computed(() => ({
  text: "px-4 py-3",
  checkbox: "p-3",
}));
</script>

<template>
  <div
    class="border-b border-oc-text-200 whitespace-nowrap w-fit text-start uppercase text-oc-text-400 text-xs font-medium bg-oc-gray-50"
    :class="variantClass[variant]"
  >
    <slot v-if="variant === Variants.TEXT">{{ text }}</slot>
    <slot v-else>
      <Checkbox
        :model-value="isChecked"
        class="mx-auto"
        :is-partial="isPartial"
        @update:model-value="$emit('selectAll', $event)"
      />
    </slot>
  </div>
</template>
