<script setup lang="ts">
import { Chip, Icon } from '@/orchidui-core'
import { defineEmits, defineExpose, defineProps, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: String,
  description: String,
  chips: {
    type: Array,
    default: () => []
  },
  isDisabled: Boolean,
  hasActions: {
    type: Boolean,
    default: true
  },
  isTransparent: Boolean,
  isDraggable: Boolean,
  isNoToggleForced: Boolean,
  isOpenDefault: Boolean
})


const emit = defineEmits(['update:modelValue', 'edit', 'delete'])

const isOpen = ref(props.isOpenDefault)

const toggleAccordion = () => {
  if (props.isNoToggleForced || props.isDisabled) return
  isOpen.value = !isOpen.value
  emit('update:modelValue', isOpen.value)
}

watch(() => props.modelValue, (value) => { isOpen.value = value })

defineExpose({ toggleAccordion })
</script>

<template>
  <div
    class="rounded border border-gray-200 group overflow-hidden"
    :class="{
      'hover:shadow-normal': !isDisabled && !isTransparent,
      'border-none !p-0': isTransparent
    }"
  >
    <div
      class="flex gap-4 items-stretch cursor-pointer"
      :class="{ 'border-b': isOpen, 'pl-5': isNoToggleForced }"
      @click="toggleAccordion"
    >
      <div
        v-if="!isNoToggleForced"
        class="flex items-center p-3 border-r bg-gray-50"
      >
        <Icon
          :name="isOpen ? 'chevron-up' : 'chevron-down'"
          width="20"
          height="20"
          class="text-oc-text-400"
        />
      </div>

      <div class="flex items-center gap-x-4 w-full p-5 pl-0 overflow-hidden">
        <slot name="logo" />

        <div class="flex flex-col flex-1 gap-y-3 overflow-hidden">
          <div class="flex items-center justify-between">
            <div class="flex text-sm text-oc-text-400 items-center gap-x-3 overflow-hidden">
              <span v-if="title" class="text-base text-oc-text font-medium truncate">
                {{ title }}
              </span>
              <div v-if="chips.length" class="flex gap-3 shrink-0">
                <Chip
                  v-for="(item, i) in chips"
                  :key="i"
                  :label="item.label"
                  :variant="item.variant"
                  :icon="item.icon"
                  :icon-tooltip="item.iconTooltip"
                  class="font-medium shrink-0"
                />
              </div>
            </div>
          </div>

          <slot>
            <div v-if="description" class="flex flex-col gap-3">
              <div class="text-oc-text-400 flex gap-x-2 items-center text-sm">
                {{ description }}
              </div>
            </div>
          </slot>
        </div>

        <slot name="right" :is-open="isOpen" :toggle-accordion="toggleAccordion">
          <div
            v-if="hasActions"
            class="flex items-center gap-4 opacity-0 group-hover:opacity-100"
          >
            <div class="border border-oc-accent-1-100 rounded-sm p-1 flex gap-x-1">
              <Icon
                name="pencil"
                class="cursor-pointer text-oc-text-400 p-2"
                @click.stop="emit('edit')"
              />
              <div class="border-r border-gray-200" />
              <Icon
                name="bin"
                class="cursor-pointer text-oc-error p-2"
                @click.stop="emit('delete')"
              />
            </div>
            <Icon
              v-if="isDraggable"
              name="draggable"
              class="cursor-grab text-oc-text-400"
              width="24"
              height="24"
            />
          </div>
        </slot>
      </div>
    </div>

    <div v-show="isOpen" class="py-5 px-7">
      <slot name="content" />
    </div>
  </div>
</template>
