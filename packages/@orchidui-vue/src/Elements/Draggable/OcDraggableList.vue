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
  childrenKey: {
    type: String,
    default: "children",
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
      class="group text-oc-text-500 p-4 flex flex-wrap items-center rounded border-gray-200"
      :class="
        element[childrenKey]
          ? 'shadow border bg-oc-gray-50'
          : 'hover:shadow hover:border bg-oc-accent-1-50 hover:bg-oc-gray-50'
      "
      @mouseleave="isDropdownOpen[element.id] = false"
    >
      <div :class="!element.isDisable ? 'drag-el cursor-move' : ''">
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
      </div>
      <div class="ml-2">{{ element.label }}</div>
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
      <slot name="content" :item="element" />
    </div>
  </Draggable>
</template>
