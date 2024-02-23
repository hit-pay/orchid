<template>
  <svg
    ref="iconRef"
    :width="`${props.width}px`"
    :height="`${props.height}px`"
    :viewBox="`0 0 ${props.width} ${props.height}`"
  ></svg>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
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
const iconRef = ref(null);
fetch(`${props.path}/${props.name}.svg`)
  .then((r) => (r.status === 200 ? r.text() : ""))
  .then((text) => {
    if (text && iconRef.value) {
      iconRef.value.innerHTML = text;
    }
  });
</script>
