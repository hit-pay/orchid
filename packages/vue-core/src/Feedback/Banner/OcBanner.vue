<script setup>
import { Icon, Button } from '@/orchidui-core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: 'default'
  },
  content: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'filled-check'
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  dismissible: {
    type: Boolean,
    default: false
  },
  transitionName: {
    type: String,
    default: 'slide-from-top'
  },
  title: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])
const colorClasses = Object.freeze({
  default: 'bg-oc-success-50 text-oc-success-500',
  primary: 'bg-oc-primary-50 text-oc-primary-500',
  error: 'bg-oc-error-50 text-oc-error-500',
  warning: 'bg-oc-warning-50 text-oc-warning-500',
  gray: 'bg-oc-gray-100 text-oc-gray-700'
})
const borderClasses = Object.freeze({
  default: 'border-oc-success-200',
  primary: 'border-oc-primary-200',
  error: 'border-oc-error-200',
  warning: 'border-oc-warning-200',
  gray: 'border-oc-gray-300'
})
</script>

<template>
  <Transition :name="transitionName">
    <div
      v-show="modelValue"
      :class="borderClasses[color]"
      class="border rounded-lg banner relative overflow-hidden"
    >
      <div
        class="flex flex-1 items-center justify-between gap-3 min-h-[34px] px-4 text-sm"
        :class="colorClasses[color]"
      >
        <div class="flex items-center gap-3">
          <Icon v-if="showIcon" :name="icon" class="shrink-0" width="16" height="16" />

          <slot name="title">
            <div class="text-oc-text-500">{{ title }}</div>
          </slot>
        </div>

        <Button
          v-if="dismissible"
          variant="secondary"
          is-transparent
          label="Close"
          @click="$emit('update:modelValue', false)"
        />
      </div>

      <div class="p-4 text-sm">
        <slot>
          {{ content }}
        </slot>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.banner {
  transition:
    transform 0.5s,
    opacity 0.5s;
}

.slide-from-top-enter-from {
  transform: translateY(-200%);
}

.slide-from-top-enter-to {
  transform: translateY(0%);
}

.slide-from-top-leave-from {
  opacity: 1;
}

.slide-from-top-leave-to {
  opacity: 0;
}
</style>
