<template>
  <svg
    ref="iconRef"
    :width="`${props.width}px`"
    :height="`${props.height}px`"
    :viewBox="`0 0 ${props.width} ${props.height}`"
    xmlns="http://www.w3.org/2000/svg"
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
      const dom = document.createElement("div");
      dom.innerHTML = text;
      dom.querySelector("svg").removeAttribute("width");
      dom.querySelector("svg").removeAttribute("height");
      iconRef.value.innerHTML = dom.innerHTML;
    }
  });
</script>
