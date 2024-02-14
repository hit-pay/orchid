<script setup>
import { Icon, Checkbox } from "@/orchidui";

defineProps({
  label: String,
  subLabel: String,
  image: {
    type: String,
    validator: (value) => {
      const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i",
      );
      return !!pattern.test(value);
    },
  },
  isSelected: [Boolean, Number],
  isCheckboxes: Boolean,
  isPartial: Boolean,
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
      :is-partial="isPartial"
      class="!w-fit pointer-events-none"
    />
    <div class="flex items-center gap-x-3">
      <div
        v-if="image"
        class="aspect-square rounded w-10 border border-oc-accent-1-100"
      >
        <img
          :src="image"
          :alt="label"
          class="object-contain h-full w-full"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col gap-3" :class="{ 'flex-1': isCheckboxes }">
        <span>{{ label }}</span>
        <span v-if="subLabel" class="text-sm text-oc-text-300">{{
          subLabel
        }}</span>
      </div>
    </div>
    <Icon
      v-if="isSelected && !isCheckboxes"
      class="w-5 h-5 text-oc-primary"
      name="check-2"
    />
  </div>
</template>
