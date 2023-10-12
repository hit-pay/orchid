<script setup>
defineProps({
  important: Boolean,
  title: String,
  description: String,
});
</script>

<template>
  <div class="flex flex-col gap-y-1 whitespace-nowrap overflow-hidden">
    <span
      class="overflow-hidden text-ellipsis text-oc-text"
      :class="important ? 'font-medium' : 'font-regular'"
    >
      {{ title }}
    </span>
    <span class="overflow-hidden text-ellipsis text-oc-text-400 text-sm">
      {{ description }}
    </span>
  </div>
</template>
