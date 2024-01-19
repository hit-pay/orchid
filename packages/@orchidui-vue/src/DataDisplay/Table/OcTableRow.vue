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
  <a v-else :href="link" class="cursor-pointer" @click="onClickRow">
    <slot></slot>
  </a>
</template>
