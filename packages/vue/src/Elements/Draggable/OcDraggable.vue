<script setup>
import { VueDraggableNext } from "vue-draggable-next";
import { computed } from "vue";

const props = defineProps({
  modelValue: Array,
});

const emit = defineEmits({
  "update:modelValue": [],
  detectMove: null,
});

const list = computed(() => {
  return props.modelValue;
});

const onChange = () => {
  emit("update:modelValue", list.value);
};

const detectMove = (event) => {
  emit("detectMove", event);
};
</script>
<template>
  <VueDraggableNext
    handle=".drag-el"
    :list="list"
    :animation="500"
    :move="detectMove"
    @change="onChange"
  >
    <slot :list="list"></slot>
  </VueDraggableNext>
</template>

<style>
.grabbing * {
  cursor: grabbing;
}
</style>
