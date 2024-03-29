<script setup>
import { Icon } from "@/orchidui";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  isCloseIcon: {
    type: Boolean,
    default: true,
  },
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="fixed top-0 bottom-0 right-0 shadow-xl bg-oc-bg-light transition-all h-full"
    :class="{
      'right-0': modelValue,
      'right-[-999px] w-0': !modelValue,
    }"
  >
    <div
      v-if="modelValue"
      class="flex border-oc-gray-200 gap-x-9 justify-between p-5 items-start border-b"
    >
      <slot name="header">
        <div class="flex flex-col gap-y-1 overflow-hidden">
          <span
            class="text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {{ title }}
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
        <div
          v-if="isCloseIcon"
          class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
          @click="$emit('update:modelValue', false)"
        >
          <Icon name="x" width="20" height="20" />
        </div>
      </slot>
    </div>
  </div>
</template>
