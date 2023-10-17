<template>
  <main :class="(colorMode === 'dark') ? 'dark-mode': 'light-mode'">
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
  document.querySelector('body').setAttribute("class", props.colorMode ? 'light-mode': 'dark-mode')
})
</script>
