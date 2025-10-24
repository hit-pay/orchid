<script setup>
import { Chip, Icon, Dropdown } from '@/orchidui-core'
import { ref } from 'vue'

defineProps({
  title: String,
  description: String,
  descriptionIcon: String,
  chips: {
    type: Array,
    default: () => []
  },
  details: {
    type: Array,
    default: () => []
  },
  isDisabled: Boolean,
  isDropdownActionsVisible: {
    type: Boolean,
    default: true
  },
  isTransparent: Boolean
})
const emit = defineEmits(['more'])
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  emit('more')
}
</script>

<template>
  <div
    class="px-5 py-4 rounded border border-gray-200 group"
    :class="{
      'hover:shadow-normal': !isDisabled && !isTransparent,
      'border-none !p-0': isTransparent
    }"
    @mouseleave="isOpen = false"
  >
    <div class="flex items-center gap-x-4 w-full">
      <slot name="logo" />

      <div class="flex flex-col flex-1 gap-y-3 overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex text-sm text-oc-text-400 items-center gap-x-3 overflow-hidden">
            <slot name="title">
              <span v-if="title" class="text-base text-oc-text font-medium truncate">
                {{ title }}
              </span>
            </slot>

            <div v-if="chips.length" class="flex gap-3 shrink-0">
              <Chip
                v-for="(item, i) in chips"
                :key="i"
                :label="item.label"
                :variant="item.variant"
                :icon="item.icon"
                :icon-size="item.iconSize"
                :icon-tooltip="item.iconTooltip"
                :class="item.class"
                class="font-medium shrink-0"
              />
            </div>

            <slot name="right-title" />
          </div>
          <slot name="actions">
            <Dropdown
              v-if="isDropdownActionsVisible && !isDisabled"
              v-model="isOpen"
              placement="bottom-end"
            >
              <Icon
                name="dots-vertical"
                class="opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded"
                @click.stop="toggleDropdown"
              />
              <template #menu>
                <slot name="menu" />
              </template>
            </Dropdown>
          </slot>
        </div>

        <slot>
          <div v-if="descriptionIcon || description || details.length" class="flex flex-col gap-3">
            <div class="text-oc-text-400 flex gap-x-2 items-center text-sm">
              <Icon
                v-if="descriptionIcon"
                :name="descriptionIcon"
                width="16"
                height="16"
                class="text-oc-text-400"
              />
              {{ description }}
            </div>
            <div v-if="details.length" class="flex gap-5">
              <div v-for="(item, i) in details" :key="i" class="flex items-center gap-2">
                <div
                  v-if="item.country"
                  class="fi w-[15px] h-[15px] shadow"
                  :class="'fi-' + item.country"
                ></div>
                <Icon
                  v-else
                  :name="item.icon"
                  width="16"
                  height="16"
                  class="text-oc-text-400 shrink-0"
                />
                <div class="font-medium whitespace-nowrap text-oc-text-500 text-sm">
                  {{ item.label }}
                </div>
              </div>
            </div>
          </div>
        </slot>
      </div>

      <slot name="append" />
    </div>
  </div>
</template>
