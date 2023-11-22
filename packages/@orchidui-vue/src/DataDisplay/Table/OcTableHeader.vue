<script setup>
import { computed } from "vue";
import { Checkbox } from "@/orchidui";

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
  isSticky: Boolean,
});
defineEmits({
  selectAll: [],
});
const variantClass = computed(() => ({
  text: "px-4 py-3",
  checkbox: "p-4 md:p-3",
}));
</script>

<template>
  <div
    class="whitespace-nowrap text-start md:uppercase text-oc-text-400 md:text-xs font-medium bg-oc-gray-50 flex gap-3"
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
      <span class="text-oc-text-500" :class="isSticky ? 'hidden' : 'md:hidden'"
        >Select all</span
      >
    </slot>
  </div>
</template>
