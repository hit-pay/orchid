

<template>
  <svg :width="`${width}px`" :height="`${height}px`" :viewBox="`0 0 ${width} ${height}`">
    <use :xlink:href="`${path}/${name}.svg#orchid`"></use>
  </svg>
</template>

<script setup>
const props = defineProps({
  path: {
    default: '/icons'
  },
  name: {
    type: String,
    required: true,
  },
  width: {
    default: 24
  },
  height: {
    default: 24
  }
});
</script>