<script setup>
import { Dropdown, Icon, DropdownItem } from '@/orchidui-core'

defineProps({
  /** v-model — controls whether the support menu dropdown is open. */
  modelValue: {
    type: Boolean,
    default: false
  },
  /** Heading text shown at the top of the menu panel. */
  title: {
    type: String,
    default: 'Have a question?'
  },
  /** Subtitle text shown below the heading. */
  info: {
    type: String,
    default: "We're ready to guide you through anything you need!"
  },
  /** Props forwarded to the primary confirm Button in the menu panel. */
  confirmButtonProps: {
    type: Object,
    default: () => ({})
  },
  /**
   * Top section menu groups. Each group: `{ title, items: [DropdownItem props] }`.
   * Items support all DropdownItem props plus `isLoading`.
   */
  topMenu: {
    type: Array,
    default: () => []
  },
  /**
   * Bottom section menu items (below the divider). Array of DropdownItem props.
   * Items support all DropdownItem props plus `isLoading`.
   */
  bottomMenu: {
    type: Array,
    default: () => []
  },
  /** Props forwarded to the floating question mark trigger button. */
  questionBtnProps: {
    type: Object,
    default: () => ({})
  },
  /** Show a red dot indicator on the trigger button (e.g. for unread notifications). */
  isPointed: Boolean
})

defineEmits({
  /** Dropdown open state changed. Payload: new boolean value. */
  'update:modelValue': null
})

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
                <slot name="badge" :item="item" />
                <Icon
                  v-if="item.isLoading"
                  width="16"
                  height="16"
                  class="animate-spin"
                  name="loading-2"
                />
              </template>
            </DropdownItem>
          </template>

          <div class="w-full border-t border-gray-200" />

          <DropdownItem v-for="(item, i) in bottomMenu" :key="i" class="text-sm" v-bind="item">
            <template #badge>
              <slot name="badge" :item="item" />
              <Icon
                v-if="item.isLoading"
                width="16"
                height="16"
                class="animate-spin"
                name="loading-2"
              />
            </template>
          </DropdownItem>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
