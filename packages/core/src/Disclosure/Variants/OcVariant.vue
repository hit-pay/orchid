<script setup lang="ts">
import { Icon } from '@/orchidui-core'

defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  iconOptions: {
    type: Object,
    default: null
  },
  value: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <div
    class="md:w-fit w-full py-3 px-4 border flex flex-col gap-y-2 rounded"
    :class="
      isDisabled
        ? 'bg-oc-gray-50 border-oc-gray-200'
        : isActive
          ? 'border-oc-primary bg-oc-bg-light cursor-pointer'
          : 'border-oc-gray-200 bg-oc-bg-light cursor-pointer'
    "
  >
    <div class="flex items-center gap-x-3">
      <Icon
        v-if="icon"
        width="18"
        height="18"
        :name="icon"
        :class="isDisabled ? 'text-oc-text-200' : isActive ? '' : 'text-oc-text-400'"
        v-bind="iconOptions"
      />
      <span v-if="label" :class="isDisabled ? 'text-oc-text-300' : isActive ? 'font-medium' : ''">{{
        label
      }}</span>
    </div>
    <slot :name="`${value}-description`" />
  </div>
</template>
