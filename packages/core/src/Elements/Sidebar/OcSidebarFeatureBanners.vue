<template>
  <div class="relative">
    <div class="border absolute top-2 left-0 w-full h-[calc(100%-4px)] border-oc-gray-200 rounded pt-2">
    </div>
    <div class="border relative z-10 bg-white border-oc-gray-200 shadow-normal rounded p-2 flex flex-col gap-y-2">
        <div class="py-2 px-3 gap-x-3 flex items-center">
          <Icon name="sparkle-2" class="text-oc-accent-2" />
          <div class="text-oc-accent-2 flex-1 font-medium">
            {{ title }}
          </div>
          <div class="flex items-center gap-x-2">
            <Icon name="x" class="text-oc-text-300 hover:text-oc-text" width="14" height="14" @click="$emit('close')" />
            <Icon name="arrow-top-right" class="text-oc-text-300 hover:text-oc-text" width="14" height="14" @click="$emit('redirect')" />
          </div>
        </div>
        <div class="px-3 pb-3 text-oc-text-400 text-sm">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@/orchidui-core'
defineProps({
  /** Reserved for future stacked layout variant — not currently applied. */
  isStacked: {
    type: Boolean,
    default: false
  },
  /** Feature name shown in the card header. */
  title: {
    type: String,
    default: ''
  },
  /** Supporting description text shown below the title. */
  description: {
    type: String,
    default: ''
  }
})
defineEmits({
  /** ✕ close icon clicked — banner should be dismissed. */
  close: [],
  /** Arrow icon clicked — user wants to navigate to the feature. */
  redirect: []
})
</script>
