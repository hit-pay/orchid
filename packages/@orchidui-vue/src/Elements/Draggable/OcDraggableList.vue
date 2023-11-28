<script setup>
import Draggable from "./OcDraggable.vue";
import { Icon } from "@/orchidui";
defineProps({
  modelValue: Array,
});
defineEmits({
  "update:modelValue": [],
});
</script>
<template>
  <Draggable
    v-slot="{ list }"
    :model-value="modelValue"
    class="grid gap-3"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div
      v-for="element in list"
      :key="element.id"
      class="group bg-oc-accent-1-50 hover:bg-oc-gray-50 text-oc-text-500 p-4 flex rounded hover:border border-gray-200"
    >
      <span class="opacity-0 group-hover:opacity-100 cursor-move drag-el">
        <Icon name="draggable" />
      </span>
      <span class="ml-2">{{ element.label }}</span>
      <span class="opacity-0 group-hover:opacity-100 ml-auto cursor-pointer">
        <Icon name="dots-vertical" />
      </span>
    </div>
  </Draggable>
</template>
