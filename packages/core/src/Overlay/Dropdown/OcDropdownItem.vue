<script setup>
import { computed } from 'vue'
import { Icon } from '@/orchidui-core'

defineProps({
  /**
   * Visual style variant.
   * @values default, destructive
   */
  variant: {
    type: String,
    default: 'default'
  },
  /** Icon name shown on the left side of the item. */
  icon: String,
  /** Extra CSS class applied to the icon element. */
  iconClasses: String,
  /** Primary label text of the menu item. */
  text: String,
  /** Secondary description text shown below the main text. */
  subText: String,
  /** Extra attrs forwarded to the Icon component (e.g. width, height). */
  iconProps: Object,
  /** Show a "BETA" badge on the right side of the item. */
  isBeta: Boolean,
  /** Show a "NEW" badge on the right side of the item. */
  isNew: Boolean,
  /** Show a "TRY IT" badge on the right side of the item. */
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
