<script setup>
import Draggable from "./OcDraggable.vue";
import { Icon, Dropdown } from "@/orchidui";
import { ref } from "vue";

defineProps({
  modelValue: Array,
});
defineEmits({
  "update:modelValue": [],
});
const isDropdownOpen = ref(false);
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
      class="group bg-oc-accent-1-50 hover:bg-oc-gray-50 text-oc-text-500 p-4 flex rounded hover:border border-gray-200 hover:shadow"
    >
      <span class="opacity-0 group-hover:opacity-100 cursor-move drag-el">
        <Icon name="draggable" />
      </span>
      <span class="ml-2">{{ element.label }}</span>
      <div class="flex ml-auto">
        <slot name="before-action" :item="element"></slot>
        <Dropdown
          v-model="isDropdownOpen"
          placement="bottom-end"
          class="opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <Icon name="dots-vertical" />
          <template #menu>
            <slot name="action" :item="element"></slot>
          </template>
        </Dropdown>
      </div>
    </div>
  </Draggable>
</template>
