<template>
  <main :data-theme="colorMode">
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
