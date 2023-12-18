<script setup>
import { Icon, Checkbox } from "@/orchidui";

defineProps({
  label: String,
  isSelected: [Boolean, Number],
  isCheckboxes: Boolean,
});
</script>

<template>
  <div
    class="p-3 flex items-center text-oc-text-400 justify-between cursor-pointer hover:bg-oc-accent-1-50 gap-x-3 rounded-sm"
    :class="isSelected && !isCheckboxes && 'bg-oc-accent-1-50'"
  >
    <Checkbox
      v-if="isCheckboxes"
      :model-value="isSelected"
      class="!w-fit pointer-events-none"
    />
    <span :class="isCheckboxes ? 'flex-1' : ''">{{ label }}</span>
    <Icon
      v-if="isSelected && !isCheckboxes"
      class="w-5 h-5 text-oc-primary"
      name="check-2"
    />
  </div>
</template>
