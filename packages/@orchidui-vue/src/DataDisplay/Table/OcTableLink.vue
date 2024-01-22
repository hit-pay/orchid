<script setup>
defineProps({
  link: String,
});
</script>
<template>
  <div v-if="!link">
    <slot></slot>
  </div>
  <a v-else :href="link" style="'pointer-events: none'" @click.prevent>
    <slot></slot>
  </a>
</template>
