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
    class="whitespace-nowrap text-start uppercase text-oc-text-400 leading-[18px] text-xs font-medium bg-oc-gray-50 flex items-center gap-3"
    :class="variantClass[variant]"
  >
    <slot v-if="variant === Variants.TEXT">{{ text }}</slot>
    <slot v-else>
      <div class="mx-auto">
        <Checkbox
          :model-value="isChecked"
          :is-partial="isPartial"
          @update:model-value="$emit('selectAll', $event)"
        />
      </div>
      <span class="text-oc-text-500" :class="isSticky ? 'hidden' : 'md:hidden'"
        >Select all</span
      >
    </slot>
  </div>
</template>
