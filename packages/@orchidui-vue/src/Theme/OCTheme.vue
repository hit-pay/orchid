<template>
  <main :class="(colorMode === 'dark') ? 'dark-mode': ''">
    <slot />
  </main>
</template>
<script setup>
defineProps({
  colorMode: {
    type: String,
    default: "light",
  },
  // TODO : customize variable for storefront
  variables: {
    type: String,
    default: '',
  }
});
</script>
