<script setup>
import { Select } from "@/orchidui";
defineEmits("update:model-value");
defineProps({
  modelValue: Array,
  label: String,
  options: {
    type: Array,
  },
});
</script>
<template>
  <Select
    :model-value="modelValue"
    :label="label"
    :options="options"
    is-filterable
    placeholder="Placeholder"
  >
    <!-- <template #default="{ fOptions, selectOption }"> -->
        <!-- fOptions -->
        <!-- create sub select up 3 level -->
    <!-- </template> -->
  </Select>
</template>
