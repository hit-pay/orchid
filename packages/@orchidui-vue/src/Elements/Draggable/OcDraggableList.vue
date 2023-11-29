<script setup>
import Draggable from "./OcDraggable.vue";
import { Icon, Dropdown } from "@/orchidui";
import { ref } from "vue";

defineProps({
  modelValue: Array,
  iconKey: {
    type: String,
    default: "icon",
  },
});
defineEmits({
  "update:modelValue": [],
});
const isDropdownOpen = ref([]);
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
      class="group bg-oc-accent-1-50 hover:bg-oc-gray-50 text-oc-text-500 p-4 flex items-center rounded hover:border border-gray-200 hover:shadow"
      @mouseleave="isDropdownOpen[element.id] = false"
    >
      <span :class="!element.isDisable ? 'drag-el cursor-move' : ''">
        <Icon
          v-if="!element.isDisable"
          name="draggable"
          :class="
            element[iconKey]
              ? 'hidden group-hover:block'
              : 'opacity-0 group-hover:opacity-100 '
          "
        />
        <Icon
          v-if="element[iconKey]"
          :name="element[iconKey]"
          :class="!element.isDisable ? 'group-hover:hidden' : ''"
        />
      </span>
      <span class="ml-2">{{ element.label }}</span>
      <div class="flex ml-auto">
        <slot name="before-action" :item="element"></slot>
        <slot name="action" :item="element">
          <Dropdown
            v-model="isDropdownOpen[element.id]"
            placement="bottom-end"
            class="opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <Icon name="dots-vertical" />
            <template #menu>
              <slot name="action-item" :item="element"></slot>
            </template>
          </Dropdown>
        </slot>
      </div>
    </div>
  </Draggable>
</template>
