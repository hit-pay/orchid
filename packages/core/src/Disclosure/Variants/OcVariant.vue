<script setup>
import { Icon } from '@/orchidui-core'

defineProps({
  /** Icon name shown to the left of the label. */
  icon: {
    type: String,
    default: ''
  },
  /** Text label displayed inside the variant card. */
  label: {
    type: String,
    default: ''
  },
  /** Highlight this card as the currently selected variant. */
  isActive: {
    type: Boolean,
    default: false
  },
  /** Disable selection — card becomes non-interactive and visually muted. */
  isDisabled: {
    type: Boolean,
    default: false
  },
  /** Extra props forwarded to the Icon component. */
  iconOptions: {
    type: Object,
    default: null
  },
  /** Unique value identifying this variant option. */
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
