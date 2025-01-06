<template>
    <div class="border relative z-10 border-oc-gray-200 shadow-normal bg-white rounded p-2 flex flex-col gap-y-2">
      <div class="py-2 px-3 gap-x-3 flex items-center">
        <div class="text-oc-warning flex-1">Finish your account ({{ value }}%)</div>
        <Icon name="arrow-top-right" class="text-oc-text-300 hover:text-oc-text" width="14" height="14" @click="$emit('redirect')" />
      </div>

      <div class="px-3 pb-3 flex flex-col gap-y-3">
        <div class="relative bg-oc-accent-1-50 rounded-full h-2">
          <div class="absolute top-0 left-0 bg-oc-primary rounded-full h-2" :style="{ width: `${value}%` }"></div>
        </div>
        <div class="flex items-center gap-x-3">
          <div class="w-[6px] h-[6px] bg-oc-success shadow-[0_0_0_4px_var(--oc-success-50)] rounded-full" />
          <span  class="text-sm text-oc-text-400">{{ infoLabel }}</span>
        </div>
      </div>

  </div>
</template>

<script setup>
import { Icon } from '@/orchidui-core'

defineProps({
  value: {
    type: Number,
    default: 0
  },
  infoLabel: {
    type: String,
    default: ''
  }
})
  
defineEmits(['redirect'])
</script>
