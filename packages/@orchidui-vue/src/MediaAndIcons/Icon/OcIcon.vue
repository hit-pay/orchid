<template>
  <svg
    :width="`${width}px`"
    :height="`${height}px`"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <use :xlink:href="`${path}/${name}.svg#orchid`"></use>
  </svg>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    default: "/icons/orchidui",
  },
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>
