<template>
  <main>
    <slot />
  </main>
</template>
<script setup>
import { watch } from 'vue';
const props = defineProps({
  colorMode: {
      type: String,
      default: "light",
  }
})
watch(() => props.colorMode, () => {
  console.log('props.colorMode', props.colorMode)
        if (props.colorMode === 'dark') {
          document.querySelector('body').setAttribute("class", 'dark')
        } else {
          document.querySelector('body').setAttribute("class", 'light')
        }},{immediate:true});
</script>
