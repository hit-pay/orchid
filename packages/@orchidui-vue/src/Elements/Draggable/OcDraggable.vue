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
  console.log("list.value:", list.value);
  emit("update:modelValue", list.value);
};
</script>
<template>
  <VueDraggableNext handle=".drag-el" :list="list" @change="onChange">
    <transition-group name="list">
      <slot :list="list"></slot>
    </transition-group>
  </VueDraggableNext>
</template>

<style>
.grabbing * {
  cursor: grabbing;
}
.list-move {
  transition: transform 0.5s;
}
</style>
