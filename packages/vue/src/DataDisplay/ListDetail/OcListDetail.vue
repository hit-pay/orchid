<script setup>
import { Icon, CopyTooltip } from '@/orchidui'
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'small',
    validator: (val) => ['small', 'big'].includes(val)
  },
  alignment: {
    type: String,
    default: 'horizontal',
    validator: (val) => ['horizontal', 'vertical'].includes(val)
  },
  showCopyTooltip: {
    type: Boolean,
    default: true
  }
})

const isVertical = computed(() => props.alignment === 'vertical')
</script>

<template>
  <div class="flex gap-x-5 text-sm group" :class="{ 'flex-col': isVertical }">
    <div
      class="flex gap-x-2 items-center shrink-0 text-oc-text-400"
      :class="{ 'w-[80px]': variant === 'small' && !isVertical }"
    >
      {{ label }}

      <CopyTooltip v-if="showCopyTooltip" :value="content">
        <template #default="{ isShow }">
          <Icon
            width="14"
            height="14"
            class="cursor-pointer transition-all duration-500 group-hover:opacity-100"
            :class="isShow ? 'opacity-100' : 'opacity-0'"
            name="copy"
          />
        </template>
      </CopyTooltip>
    </div>

    <div :class="{ 'text-base font-medium': isVertical }">
      <slot name="content">
        <span>{{ content }}</span>
      </slot>
    </div>
  </div>
</template>
