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
import { ref, watch } from "vue";
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

const setIconRef = (text) => {
  const iconDom = document.createElement("div");
  iconDom.innerHTML = text;
  if (iconDom.querySelector("svg")) {
    iconDom.querySelector("svg").removeAttribute("width");
    iconDom.querySelector("svg").removeAttribute("height");
    iconRef.value.innerHTML = iconDom.innerHTML;
  }
  iconDom.remove();
};

const renderIcon = () => {
  let iconData = "";
  if (window.oc_icons) {
    let windowIcons = JSON.parse(window.oc_icons);
    iconData = windowIcons.find((icon) => icon.name === props.name);
  }
  if (!iconData) {
    fetch(`${props.path}/${props.name}.svg`)
      .then((r) => (r.status === 200 ? r.text() : ""))
      .then((text) => {
        if (text && iconRef.value) {
          if (window.oc_icons) {
            window.oc_icons = JSON.stringify([
              ...window.oc_icons,
              {
                name: props.name,
                svg: text,
              },
            ]);
          }
          setIconRef(text);
        }
      });
  } else {
    setIconRef(iconData.svg);
  }
};

renderIcon();

watch(
  () => props.name,
  () => {
    renderIcon();
  }
);
</script>
