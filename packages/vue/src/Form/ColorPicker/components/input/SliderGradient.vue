<template>
  <div
    class="gradient-bar"
    @mousedown="$emit('onMouseDown', $event)"
    @dragstart="handleItemDragStart"
  >
    <div
      ref="gradientBar"
      class="gradient-container"
      @dblclick="$emit('onAddColor', $event)"
    ></div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const gradientBar = inject("gradientBar");

defineEmits(["onAddColor", "onMouseDown"]);

const handleItemDragStart = (e) => {
  e.preventDefault();
};
</script>
