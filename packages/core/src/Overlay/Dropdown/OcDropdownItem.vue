<script setup>
import { computed } from 'vue'
import { Icon } from '@/orchidui-core'

defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  icon: String,
  iconClasses: String,
  text: String,
  subText: String,
  iconProps: Object
})
const variantClasses = computed(() => ({
  default: 'text-oc-text',
  destructive: 'text-oc-error'
}))
</script>

<template>
  <div
    class="flex flex-col cursor-pointer rounded-sm hover:bg-oc-accent-1-50"
    :class="variantClasses[variant]"
  >
    <div class="flex items-center gap-x-3 p-3">
      <Icon v-if="icon" class="w-5 h-5" :name="icon" v-bind="iconProps" :class="iconClasses" />

      <span>{{ text }}</span>

      <slot name="badge" />
    </div>

    <div v-if="subText" class="p-3 text-sm text-oc-text-300">
      <span>{{ subText }}</span>
    </div>
  </div>
</template>
