<script setup>
import Draggable from "./OcDraggable.vue";
import { Icon } from "@/orchidui";
defineProps({
  modelValue: Array,
  itemClass: {
    type: String,
    default: "h-[110px] w-[110px]",
  },
});
defineEmits({
  "update:modelValue": [],
});
</script>
<template>
  <Draggable
    v-slot="{ list }"
    :model-value="modelValue"
    class="flex gap-8"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div
      v-for="element in list"
      :key="element.id"
      :class="itemClass"
      class="group relative group bg-oc-accent-1-50 hover:bg-oc-gray-50 text-oc-text-500 p-4 flex rounded hover:border border-gray-200"
    >
      <span class="ml-2">{{ element.label }}</span>
      <div
        class="hidden group-hover:flex absolute bg-black/30 w-full h-full top-0 left-0 rounded"
      >
        <span class="cursor-pointer m-auto drag-el">
          <Icon
            name="arrows"
            class="text-oc-accent-1-50"
            width="32"
            height="32"
          />
        </span>
      </div>
    </div>
  </Draggable>
</template>
