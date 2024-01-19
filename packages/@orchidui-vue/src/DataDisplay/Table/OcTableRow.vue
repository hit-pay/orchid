<script setup>
import { ref } from "vue";
defineProps({
  rowLink: String,
  link: String,
});

const onContextMenu = ref(false);
const onClickRow = (e) => {
  e.preventDefault();
};
</script>
<template>
  <div
    v-if="!rowLink || !link || !onContextMenu"
    @contextmenu="onContextMenu = true"
  >
    <slot></slot>
  </div>
  <a
    v-else
    :href="link"
    @click="onClickRow"
    @mouseleave="onContextMenu = false"
  >
    <slot></slot>
  </a>
</template>
