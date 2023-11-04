<script setup>
import { Icon } from "@/orchidui";
defineProps({
  modelValue: Boolean,
  label: String,
});
</script>

<template>
  <div
    class="flex gap-x-2 relative items-center text-oc-text-500 cursor-pointer transition-all duration-300"
  >
    <div
      class="w-5 h-5 flex items-center justify-center rounded-full border transition-all duration-300"
      :class="
        modelValue
          ? 'bg-oc-success border-oc-success'
          : 'border-oc-primary-100 bg-oc-primary-50'
      "
    >
      <Icon
        v-if="modelValue"
        name="check-2"
        class="w-[10px] h-[10px] text-oc-text-100"
      />
    </div>

    <span
      v-if="label"
      :class="modelValue ? 'text-oc-success' : 'text-oc-primary-300'"
      >{{ label }}</span
    >
  </div>
</template>
