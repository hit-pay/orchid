<template>
  <div class="flex flex-col p-3 overflow-hidden gap-y-px font-medium">
    <span class="text-xs text-oc-text-300 uppercase whitespace-nowrap">
      {{ title }}
    </span>
    <span class="text-ellipsis overflow-hidden whitespace-nowrap">
      {{ content }}
    </span>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>
