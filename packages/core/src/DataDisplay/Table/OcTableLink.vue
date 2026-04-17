<script setup>
defineProps({
  /** URL to navigate to when the cell is clicked. When absent, renders a plain `div` instead of an `<a>` tag. */
  link: String
})
</script>
<template>
  <div v-if="!link">
    <slot></slot>
  </div>
  <a v-else :href="link" style="'pointer-events: none'" @click.prevent>
    <slot></slot>
  </a>
</template>
