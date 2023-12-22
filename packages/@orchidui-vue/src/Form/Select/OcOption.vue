<script setup>
import { Icon, Checkbox } from "@/orchidui";

defineProps({
  label: String,
  subLabel: String,
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
      :model-value="!!isSelected"
      class="!w-fit pointer-events-none"
    />
    <div class="flex flex-col gap-3" :class="{ 'flex-1': isCheckboxes }">
      <span>{{ label }}</span>
      <span v-if="subLabel" class="text-sm text-oc-text-300">{{
        subLabel
      }}</span>
    </div>
    <Icon
      v-if="isSelected && !isCheckboxes"
      class="w-5 h-5 text-oc-primary"
      name="check-2"
    />
  </div>
</template>
