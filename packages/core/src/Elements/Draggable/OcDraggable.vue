<script setup>
import { computed } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

const props = defineProps({
  /** v-model — the array of items to make draggable. Updated in-place when items are reordered. */
  modelValue: Array
})

const emit = defineEmits({
  /** Item order changed. Payload: `(newList, event)` — the reordered array and the vue-draggable event. */
  'update:modelValue': [],
  /** An item is being dragged over another position. Used to restrict or allow drops. */
  detectMove: null
})

const list = computed(() => {
  return props.modelValue
})

const onChange = (event) => {
  emit('update:modelValue', list.value, event)
}

const detectMove = (event) => {
  emit('detectMove', event)
}
</script>
<template>
  <VueDraggableNext
    handle=".drag-el"
    :list="list"
    :animation="500"
    :force-fallback="true"
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

body:has(.sortable-chosen) * {
  user-select: none;
  cursor: grabbing !important;
}

.drag-el {
  cursor: grab !important;
}
</style>
