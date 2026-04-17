<script setup>
import { watch } from 'vue'
const props = defineProps({
  /**
   * Global color mode applied to the `<body>` element class.
   * @values light, dark
   */
  colorMode: {
    type: String,
    default: 'light'
  }
})
watch(
  () => props.colorMode,
  () => {
    if (props.colorMode === 'dark') {
      document.querySelector('body').setAttribute('class', 'dark')
    } else {
      document.querySelector('body').setAttribute('class', 'light')
    }
  },
  { immediate: true }
)
</script>

<template>
  <main class="orchid-ui bg-oc-bg-light text-oc-text-500">
    <slot />
  </main>
</template>
