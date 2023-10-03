<template>
  <main :data-theme="colorMode" :data-group="group">
    <slot />
  </main>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  colorMode: {
    type: String,
    default: "light",
  },
  group: {
    type: String,
    enum: ["payment", "pos", "shop"],
    default: "payment",
  },
});
</script>
