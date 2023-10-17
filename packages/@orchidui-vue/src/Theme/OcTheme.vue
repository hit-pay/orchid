<template>
  <main :class="(colorMode === 'dark') ? 'dark-mode': 'light-mode'">
    <slot />
  </main>
</template>
<script setup>
defineProps({
  colorMode: {
    type: String,
    default: "light",
  }
});
</script>
