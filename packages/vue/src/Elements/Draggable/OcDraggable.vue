<script setup>
import { VueDraggableNext } from "vue-draggable-next";
import { ref } from "vue";

const props = defineProps({
  modelValue: Array,
});

const emit = defineEmits({
  "update:modelValue": [],
});

const list = ref(props.modelValue);

const onChange = () => {
  emit("update:modelValue", list.value);
};
</script>
<template>
  <VueDraggableNext
    handle=".drag-el"
    :list="list"
    :animation="500"
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
