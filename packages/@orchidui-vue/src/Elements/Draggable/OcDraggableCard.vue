<script setup>
import Draggable from "./OcDraggable.vue";
import { Icon, Dropdown } from "@/orchidui";
import { ref } from "vue";
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
const isDropdownOpen = ref(false);
</script>
<template>
  <Draggable
    v-slot="{ list }"
    :model-value="modelValue"
    class="flex flex-wrap gap-8"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div
      v-for="element in list"
      :key="element.id"
      :class="itemClass"
      class="group relative group bg-oc-accent-1-50 hover:bg-oc-gray-50 text-oc-text-500 p-4 flex rounded hover:border border-gray-200 hover:shadow"
    >
      <div
        class="absolute w-full h-full top-0 left-0 rounded"
        :style="`background-image: url(${element.image})`"
      >
        <Dropdown
          v-model="isDropdownOpen"
          placement="bottom-end"
          class="absolute top-3 right-3 z-[1010] hidden group-hover:flex"
        >
          <Icon
            name="dots-vertical"
            class="p-2 draggable-card-action cursor-pointer w-[32px] h-[32px] aspect-square items-center justify-center text-oc-bg-light"
          />
          <template #menu>
            <slot name="action" :item="element"></slot>
          </template>
        </Dropdown>
        <div
          class="z-[1009] hidden group-hover:flex absolute bg-black/30 w-full h-full top-0 left-0 rounded"
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
    </div>
  </Draggable>
</template>
<style>
.draggable-card-action {
  border-radius: 56px;
  background: rgba(41, 41, 44, 0.35);
  backdrop-filter: blur(2px);
}
</style>
