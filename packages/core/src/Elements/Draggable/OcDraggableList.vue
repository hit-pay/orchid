<!-- TODO : group not support nested dynamic -->
<script setup>
import { Dropdown, Icon, Tooltip } from '@/orchidui-core'
import { defineAsyncComponent } from 'vue'
import { ref } from 'vue'

const Draggable = defineAsyncComponent(() => import('@/orchidui-core').then(module => module.Draggable))

defineProps({
  modelValue: Array,
  iconKey: {
    type: String,
    default: 'icon'
  },
  isChildren: Boolean,
  childrenKey: {
    type: String,
    default: 'children'
  },
  isLink: Boolean,
  linkKey: {
    type: String,
    default: 'link'
  },
  unmovable: Boolean, // general unmovable
  enableStatusVariant: Boolean,
  classes: {
    type: String,
    default: ''
  },
  titleWidth: String
})

const emit = defineEmits({
  'update:modelValue': [],
  'click:element': [],
  detectMove: null
})
const isHovered = ref([])
const isDropdownOpen = ref([])

const handleEmit = (list, element) => {
  emit('update:modelValue', list, element)
}
</script>
<template>
  <Draggable
    v-slot="{ list }"
    :model-value="modelValue"
    class="grid gap-3"
    @update:model-value="(changedList, changedElement) => handleEmit(changedList, changedElement)"
    @detect-move="$emit('detectMove', $event)"
  >
    <!-- wrapper -->
    <div
      v-for="(element, indexElement) in list"
      :key="element.id"
      class="group text-oc-text-500 p-4 flex flex-col w-full rounded border border-gray-200 cursor-pointer"
      :class="[
        element[childrenKey]
          ? 'hover:shadow bg-oc-gray-50'
          : isChildren && !isHovered[element.id]
            ? 'bg-oc-accent-1-50'
            : classes
              ? classes
              : 'hover:shadow bg-oc-accent-1-50 hover:bg-oc-gray-50',
        {
          'bg-oc-gray-100 !text-oc-text-300': !element.active && enableStatusVariant
        }
      ]"
      @mouseleave="
        () => {
          isDropdownOpen[element.id] = false
          isHovered[element.id] = false
        }
      "
      @mouseover="isHovered[element.id] = true"
      @click="$emit('click:element', element)"
    >
      <!-- top content -->
      <div class="flex justify-evenly w-full">
        <!-- icon and title content -->
        <div class="flex w-full">
          <!-- icon -->
          <div
            class="px-2 flex items-center text-oc-text-400"
            :class="
              !unmovable && !element.isDisable && !element.unmovable ? 'drag-el cursor-move' : ''
            "
          >
            <Icon
              v-if="!unmovable && !element.isDisable && !element.unmovable"
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
                !unmovable && !element.isDisable && !element.unmovable && isHovered[element.id]
                  ? 'group-hover:hidden'
                  : ''
              "
            />
          </div>

          <!-- title -->
          <div class="ml-4 flex w-full">
            <div class="flex items-center flex-wrap w-full">
              <slot name="title" :item="element">
                <div class="truncate" :class="titleWidth">
                  {{ element.title }}
                </div>
              </slot>

              <a
                v-if="isLink && element[linkKey] && element.type === 'link'"
                :href="element[linkKey]"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full flex items-center text-oc-text-300 mt-2"
              >
                <Tooltip
                  distance="2"
                  position="bottom-start"
                  popper-class="bg-oc-bg-light text-oc-text-500 p-4 rounded"
                >
                  <Icon width="12" height="12" class="mr-2 text-oc-text-400" name="link" />
                  <template #popper>
                    <div class="min-w-[120px]">
                      {{ element[linkKey] }}
                    </div>
                  </template>
                </Tooltip>
                <span class="truncate w-[200px]"> {{ element[linkKey] }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- action items  -->
        <div class="flex items-center ml-4">
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
              <div
                class="hover:bg-oc-gray-100 p-1 rounded"
                :class="isDropdownOpen[element.id] ? 'bg-oc-gray-100' : ''"
              >
                <Icon name="dots-vertical" class="text-oc-text-400" />
              </div>
              <template #menu>
                <slot name="action-item" :item="element" :index="indexElement"></slot>
              </template>
            </Dropdown>
          </slot>
        </div>
      </div>

      <!-- extra content -->
      <div class="flex w-full">
        <slot name="content" :item="element" :index="indexElement" />
      </div>
    </div>
  </Draggable>
</template>
