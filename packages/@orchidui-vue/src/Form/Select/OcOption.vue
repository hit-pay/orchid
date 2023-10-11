<script setup>
import { defineAsyncComponent } from "vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OcIcon.vue"),
);

defineProps({
  label: String,
  isSelected: Boolean,
});
</script>

<template>
  <div
    class="p-3 flex items-center text-oc-text-400 justify-between cursor-pointer hover:bg-oc-dark-blue-50 gap-x-3 rounded-sm"
    :class="isSelected && 'bg-oc-dark-blue-50'"
  >
    {{ label }}
    <Icon v-if="isSelected" class="w-5 h-5 text-oc-primary" name="check-2" />
  </div>
</template>
