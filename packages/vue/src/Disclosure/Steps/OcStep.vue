<script setup lang="ts">
import { Icon } from '@/orchidui'

defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    default: ''
  },
  isCurrent: {
    type: Boolean,
    default: false
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="flex flex-col gap-y-3 text-sm cursor-pointer"
    :class="isCurrent || isCompleted ? 'text-oc-text-500' : 'text-oc-text-300'"
  >
    <div
      class="rounded-full flex items-center justify-center w-7 h-7 font-medium"
      :class="[
        isCompleted ? 'text-white bg-oc-primary' : 'border border-oc-gray-300',
        isCurrent ? 'border-oc-gray-800' : ''
      ]"
    >
      <Icon v-if="isCompleted" name="check-2" width="12" height="12" />
      <span v-else>{{ value }}</span>
    </div>
    <span :class="isCurrent ? 'font-medium' : ''">{{ title }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
