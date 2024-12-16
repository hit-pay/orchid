<script setup>
import { CopyTooltip, Dropdown, DropdownItem, Icon } from '@/orchidui-core'
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  isClose: {
    type: Boolean,
    default: true
  },
  title: String,
  description: String,
  dropdownOptions: {
    type: Object
  },
  dropdownProps: {
    type: Object,
    default: () => ({})
  },
  position: {
    type: String,
    validator: (v) => ['left', 'right'].includes(v),
    default: 'right'
  }
})

const emit = defineEmits(['update:model-value'])

const isOpen = ref(false)
</script>

<template>
  <div
    class="fixed top-0 bottom-0 shadow-xl bg-oc-bg-light transition-all h-full z-50 overflow-y-auto"
    :class="{
      'right-0': modelValue && position === 'right',
      'right-[-999px] w-0': !modelValue && position === 'right',
      'left-0': modelValue && position === 'left',
      'left-[-999px] w-0': !modelValue && position === 'left'
    }"
  >
    <div v-if="modelValue">
      <div
        class="flex border-oc-gray-200 gap-x-9 justify-between p-5 items-start border-b sticky bg-oc-bg-light top-0"
      >
        <slot name="header">
          <div class="flex flex-col gap-y-1 max-w-[300px]">
            <span class="text-lg font-medium truncate">
              <slot name="title">
                {{ title }}
              </slot>
            </span>
            <slot name="description">
              <div class="flex gap-3 items-center">
                <span v-if="description" class="text-sm text-oc-text-300 truncate">
                  {{ description }}
                </span>
                <CopyTooltip :value="description" :tooltip-options="{ strategy: 'fixed' }">
                  <template #default="{ isShow }">
                    <Icon
                      width="14"
                      height="14"
                      class="cursor-pointer text-oc-text-400"
                      name="copy"
                    />
                  </template>
                </CopyTooltip>
              </div>
            </slot>
          </div>
          <div class="flex items-center gap-3">
            <template v-if="dropdownOptions">
              <Dropdown
                v-model="isOpen"
                :popper-options="{ strategy: 'fixed' }"
                placement="bottom"
                class="text-sm"
                v-bind="dropdownProps"
              >
                <div
                  class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
                >
                  <Icon name="dots-vertical" width="20" height="20" />
                </div>
                <template #menu>
                  <div class="p-2 border-b border-gray-200">
                    <DropdownItem v-for="(item, i) in dropdownOptions.top" :key="i" v-bind="item" />
                  </div>
                  <div v-if="dropdownOptions.bottom" class="p-2">
                    <DropdownItem
                      v-for="(item, i) in dropdownOptions.bottom"
                      :key="i"
                      v-bind="item"
                    />
                  </div>
                </template>
              </Dropdown>
            </template>

            <div
              v-if="isClose"
              class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
              @click="$emit('update:model-value', false)"
            >
              <Icon name="x" width="20" height="20" />
            </div>
          </div>
        </slot>
      </div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
