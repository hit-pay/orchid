<script setup lang="ts">
defineProps({
  title: String,
  url: String,
});
</script>

<template>
  <div class="flex gap-x-3">{{ title }}: {{ url }}</div>
</template>

<style scoped lang="scss"></style>
