<script setup>
import { Icon, Checkbox } from "@/orchidui";

defineEmits(["select", "show:children", "hide:children"]);
defineProps({
  label: String,
  subLabel: String,
  isSelected: [Boolean, Number],
  isCheckboxes: Boolean,
  isPartial: Boolean,
  hasChildren: Boolean,
  showChildren: Boolean,
});
</script>

<template>
  <div class="w-full flex flex-wrap">
    <div
      class="w-full p-3 flex items-center text-oc-text-400 justify-between cursor-pointer hover:bg-oc-accent-1-50 gap-x-3 rounded-sm"
      :class="isSelected && !isCheckboxes && 'bg-oc-accent-1-50'"
      @click="$emit('select')"
    >
      <Checkbox
        v-if="isCheckboxes"
        :model-value="!!isSelected"
        :is-partial="isPartial"
        class="!w-fit pointer-events-none"
      />
      <div class="w-full flex items-center gap-x-3">
        <slot name="trailing"></slot>

        <div class="flex flex-col gap-3" :class="{ 'flex-1': isCheckboxes }">
          <span>{{ label }}</span>
          <span v-if="subLabel" class="text-sm text-oc-text-300">{{
            subLabel
          }}</span>
        </div>

        <slot name="leading"></slot>
      </div>
      <Icon
        v-if="isSelected && !isCheckboxes"
        class="w-5 h-5 text-oc-primary"
        name="check-2"
      />
      <Icon v-if="hasChildren" class="w-6 h-6 " :class="showChildren ? 'rotate-180': ''" name="chevron-down" />
    </div>
    <slot name="after"></slot>
  </div>
</template>
