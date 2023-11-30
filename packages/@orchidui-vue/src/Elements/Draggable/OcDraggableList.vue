<!-- TODO : group not support nested dynamic -->
<script setup>
import { OcDraggable } from "@/orchidui/OcDraggable";
import { Icon, Dropdown } from "@/orchidui";
import { ref } from "vue";

defineProps({
  modelValue: Array,
  iconKey: {
    type: String,
    default: "icon",
  },
  isChildren: Boolean,
  childrenKey: {
    type: String,
    default: "children",
  },
  isLink: Boolean,
  linkKey: {
    type: String,
    default: "link",
  },
});
defineEmits({
  "update:modelValue": [],
});
const isHovered = ref([]);
const isDropdownOpen = ref([]);
</script>
<template>
  <OcDraggable
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
          ? 'hover:shadow border bg-oc-gray-50'
          : isChildren && !isHovered[element.id]
            ? 'bg-oc-accent-1-50'
            : 'hover:shadow hover:border bg-oc-accent-1-50 hover:bg-oc-gray-50'
      "
      @mouseleave="
        isDropdownOpen[element.id] = false;
        isHovered[element.id] = false;
      "
      @mouseover="isHovered[element.id] = true"
    >
      <div :class="!element.isDisable ? 'drag-el cursor-move' : ''">
        <Icon
          v-if="!element.isDisable"
          name="draggable"
          :class="
            element[iconKey]
              ? isChildren && !isHovered[element.id]
                ? 'hidden'
                : 'hidden group-hover:block'
              : isChildren && !isHovered[element.id]
                ? 'opacity-0'
                : 'opacity-0 group-hover:opacity-100 '
          "
        />
        <Icon
          v-if="element[iconKey]"
          :name="element[iconKey]"
          :class="
            !element.isDisable && isHovered[element.id]
              ? 'group-hover:hidden'
              : ''
          "
        />
      </div>
      <div class="ml-2 flex items-center">
        {{ element.label }}
        <a
          v-if="isLink && element[linkKey]"
          :href="element[linkKey]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon class="ml-2 text-oc-text-300" name="external-link" />
        </a>
      </div>
      <div class="flex ml-auto">
        <slot name="before-action" :item="element"></slot>
        <slot name="action" :item="element">
          <Dropdown
            v-model="isDropdownOpen[element.id]"
            placement="bottom-end"
            class="cursor-pointer"
            :class="
              isChildren && !isHovered[element.id]
                ? 'opacity-0'
                : 'opacity-0 group-hover:opacity-100'
            "
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
  </OcDraggable>
</template>
