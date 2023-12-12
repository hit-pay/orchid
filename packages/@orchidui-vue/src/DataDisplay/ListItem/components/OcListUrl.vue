<script setup lang="ts">
defineProps({
  title: String,
  url: String,
});
</script>

<template>
  <div class="flex gap-x-3 text-sm">
    <span class="text-oc-text-400 font-medium">{{ title }}:</span>
    {{ url }}
  </div>
</template>

<style scoped lang="scss"></style>
