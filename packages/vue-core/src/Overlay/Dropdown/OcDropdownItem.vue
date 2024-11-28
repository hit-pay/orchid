<script setup>
import { computed } from 'vue'
import { Icon } from '@orchidui/vue-core'

defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  icon: String,
  iconClasses: String,
  text: String,
  subText: String,
  pointed: Boolean,
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

      <span class="md:text-base text-sm">{{ text }}</span>

      <slot v-if="pointed" name="badge">
        <div class="w-[6px] aspect-square rounded-full bg-oc-error" />
      </slot>
    </div>

    <div v-if="subText" class="p-3 text-sm text-oc-text-300">
      <span>{{ subText }}</span>
    </div>
  </div>
</template>
