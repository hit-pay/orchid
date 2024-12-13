<template>
  <div
    ref="pickerWrap"
    class="cp-picker-wrap"
    @mousedown="$emit('onMouseDown', $event)"
    @dragstart="handleItemDragStart"
  >
    <canvas ref="canvas" class="colour-area"> </canvas>
    <div class="colour-area-mask"></div>
    <div ref="pickerPointer" class="colour-area-point-circle"></div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineEmits(['onMouseDown'])

const canvas = inject('canvas')
const pickerWrap = inject('pickerWrap')
const pickerPointer = inject('pickerPointer')

const handleItemDragStart = (e) => {
  e.preventDefault()
}
</script>
