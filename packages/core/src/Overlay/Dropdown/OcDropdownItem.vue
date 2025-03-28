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
  iconProps: Object,
  isBeta: Boolean,
  isNew: Boolean,
  isTryIt: Boolean
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
    <div class="flex items-center justify-between gap-x-3 p-3">
      <div class="flex items-center gap-x-3">
        <Icon v-if="icon" class="w-5 h-5" :name="icon" v-bind="iconProps" :class="iconClasses" />

        <span>{{ text }}</span>

        <slot name="badge" />
      </div>

      <div
        v-if="isBeta"
        class="bg-oc-warning-50 text-oc-warning shrink-0 px-2 rounded-sm uppercase text-xs font-medium"
      >
        BETA
      </div>
      <div
        v-else-if="isNew"
        class="bg-oc-accent-2-50 text-oc-accent-2 shrink-0 px-2 rounded-sm uppercase text-xs font-medium"
      >
        NEW
      </div>
      <div
        v-else-if="isTryIt"
        class="bg-oc-accent-2-50 text-oc-accent-2 shrink-0 px-2 rounded-sm uppercase text-xs font-medium"
      >
        TRY IT
      </div>
    </div>

    <div v-if="subText" class="p-3 text-sm text-oc-text-300">
      <span>{{ subText }}</span>
    </div>
  </div>
</template>
