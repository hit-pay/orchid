<script setup lang="ts">
import { Dropdown, Icon, DropdownItem } from '@orchidui/vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Have a question?'
  },
  info: {
    type: String,
    default: "We're ready to guide you through anything you need!"
  },
  confirmButtonProps: {
    type: Object,
    default: () => ({})
  },
  topMenu: {
    type: Array,
    default: () => []
  },
  bottomMenu: {
    type: Array,
    default: () => []
  },
  questionBtnProps: {
    type: Object,
    default: () => ({})
  },
  isPointed: Boolean
})

defineEmits(['update:modelValue'])

const popperOptions = {
  arrowHidden: true
}
</script>

<template>
  <div class="fixed bottom-[30px] right-[32px]">
    <Dropdown
      :model-value="modelValue"
      :popper-options="popperOptions"
      placement="top-end"
      :distance="8"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <div class="relative">
        <div class="flex items-center justify-end" v-if="isPointed">
          <div class="w-[6px] aspect-square rounded-full bg-oc-error" />
        </div>
        <div
          class="w-[40px] flex text-white items-center bg-oc-text active:bg-oc-gray-800 justify-center aspect-square rounded-full cursor-pointer"
        >
          <Icon name="question" width="33" height="33" />
        </div>
      </div>
      <template #menu>
        <div class="min-w-[180px]">
          <template v-for="(group, j) in topMenu" :key="j">
            <div class="p-3">
              <span class="uppercase text-oc-text-400 text-xs font-medium">
                {{ group.title }}
              </span>
            </div>

            <DropdownItem v-for="(item, i) in group.items" :key="i" class="text-sm" v-bind="item">
              <template #badge>
                <slot name="badge" />
              </template>
            </DropdownItem>
          </template>

          <div class="w-full border-t border-gray-200" />

          <DropdownItem v-for="(item, i) in bottomMenu" :key="i" class="text-sm" v-bind="item">
            <template #badge>
              <slot name="badge" />
            </template>
          </DropdownItem>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
