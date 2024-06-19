<script setup>
import { Button, Icon } from '@/orchidui'
import { computed } from 'vue'

defineEmits('click:Button')
defineProps({
  isButton: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  isUpgrade: {
    type: Boolean,
    default: false
  },
  upgradeLabel: {
    type: String,
    default: 'Upgrade now'
  },
  addButtonLabel: {
    type: String,
    default: 'Add new'
  },
  addButtonIcon: {
    type: String,
    default: 'plus'
  },
  icon: {
    type: String,
    default: 'document'
  },
  size: {
    type: String,
    validator: (value) => ['large', 'default', 'small'].includes(value),
    default: 'default'
  },
  hideBadge: {
    type: Boolean,
    default: false
  }
})

const sizes = computed(() => ({
  default: {
    icon: {
      container: 'w-[64px]',
      size: '32'
    },
    badge: {
      class: 'right-0 top-[2px]',
      size: '20'
    },
    containerInfo: 'gap-y-3',
    box: 'gap-y-7',
    title: 'text-lg',
    description: ''
  },
  large: {
    icon: {
      container: 'w-[128px]',
      size: '64'
    },
    badge: {
      class: 'right-0 top-[2px]',
      size: '32'
    },
    containerInfo: 'gap-y-3',
    box: 'gap-y-7',
    title: 'text-lg',
    description: ''
  },
  small: {
    icon: {
      container: 'w-[48px]',
      size: '24'
    },
    badge: {
      class: 'right-[-2px] top-[-2px]',
      size: '20'
    },
    containerInfo: 'gap-y-1',
    box: 'gap-y-5',
    title: 'text-[14px] font-medium',
    description: 'text-[12px]'
  }
}))
</script>

<template>
  <div class="flex flex-col items-center" :class="sizes[size].box">
    <div class="relative">
      <div
        class="flex justify-center border rounded-full items-center aspect-square"
        :class="[
          isUpgrade
            ? 'text-oc-warning-600 border-oc-warning-300 bg-oc-warning-50'
            : 'text-oc-text-400 border-oc-gray-200 bg-oc-gray-50',
          sizes[size].icon.container
        ]"
      >
        <Icon :name="icon" :width="sizes[size].icon.size" :height="sizes[size].icon.size" />
      </div>
      <Icon
        v-if="!isUpgrade && !hideBadge"
        name="exclamation"
        :width="sizes[size].badge.size"
        :height="sizes[size].badge.size"
        class="absolute"
        :class="sizes[size].badge.class"
      />
    </div>
    <div class="flex flex-col items-center" :class="sizes[size].containerInfo">
      <span :class="sizes[size].title" class="font-medium">{{ title }}</span>
      <slot name="description">
        <span :class="sizes[size].description" class="text-oc-text-400 text-center">{{
          description
        }}</span>
      </slot>
    </div>
    <Button
      v-if="isButton"
      :label="isUpgrade ? upgradeLabel : addButtonLabel"
      :left-icon="isUpgrade ? '' : addButtonIcon"
      @click="$emit('click:Button')"
    />
  </div>
</template>
