<template>
    <iconComp :width="width" :height="height" />
  </template>
  <script setup>
  import { defineAsyncComponent } from 'vue';
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    width: {
      default: 22,
    },
    height: {
      default: 22,
    },
  });
  // feel free to update this with an svg directory of your choice
  const iconComp = defineAsyncComponent(() =>
    import(`../public/icons/${props.name}.svg?component`)
  );
  </script>