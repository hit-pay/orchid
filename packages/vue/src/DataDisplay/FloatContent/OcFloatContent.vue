<script setup>
import { Dropdown, DropdownItem, Icon } from "@/orchidui";
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  isClose: {
    type: Boolean,
    default: true,
  },
  isDropdown: {
    type: Boolean,
    default: true,
  },
  title: String,
  description: String,
  dropdownOptions: {
    type: Object,
    default: () => ({
      top: [],
      bottom: [],
    }),
  },
  dropdownProps: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:model-value"]);

const isOpen = ref(false);
</script>

<template>
  <div
    class="fixed top-0 bottom-0 right-0 shadow-xl bg-oc-bg-light transition-all h-full"
    :class="{
      'right-0': modelValue,
      'right-[-999px] w-0': !modelValue,
    }"
  >
    <template v-if="modelValue">
      <div
        class="flex border-oc-gray-200 gap-x-9 justify-between p-5 items-start border-b"
      >
        <slot name="header">
          <div class="flex flex-col gap-y-1 overflow-hidden">
            <span
              class="text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap"
            >
              <slot name="title">
                {{ title }}
              </slot>
            </span>
            <slot name="description">
              <span
                v-if="description"
                class="text-sm text-oc-text-300 text-ellipsis overflow-hidden whitespace-nowrap"
              >
                {{ description }}
              </span>
            </slot>
          </div>
          <div class="flex items-center gap-3">
            <Dropdown
              v-model="isOpen"
              :popper-options="{ strategy: 'fixed' }"
              placement="bottom"
              class="text-sm"
              v-bind="dropdownProps"
            >
              <div
                v-if="isDropdown"
                class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
              >
                <Icon name="dots-vertical" width="20" height="20" />
              </div>
              <template #menu>
                <div class="p-2 border-b border-gray-200">
                  <DropdownItem
                    v-for="(item, i) in dropdownOptions.top"
                    :key="i"
                    v-bind="item"
                  />
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
      <slot name="default"></slot>
    </template>
  </div>
</template>
