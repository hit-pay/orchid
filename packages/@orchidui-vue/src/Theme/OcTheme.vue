<template>
  <main>
    <slot />
  </main>
</template>
<script setup>
import { onMounted } from 'vue';
const props = defineProps({
  colorMode: {
    type: String,
    default: "light",
  }
});
onMounted(() => {
  document.querySelector('body').setAttribute("class", props.colorMode === 'light' ? 'light-mode': 'dark-mode')
})
</script>
