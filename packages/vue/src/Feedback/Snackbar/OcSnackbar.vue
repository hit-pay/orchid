<script setup>
import { Icon, Button } from '@/orchidui'
import { computed, nextTick, ref, watch } from 'vue'

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
  isFloating: {
    type: Boolean,
    default: false
  },
  isRawHtml: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'top-center'
  },
  transitionName: {
    type: String,
    default: 'slide-from-top'
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  secondaryButton: {
    type: Object,
    default: () => null
  },
  primaryButton: {
    type: Object,
    default: () => null
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'big', 'small'].includes(value)
  }
})
defineEmits(['update:modelValue'])
const colorClasses = Object.freeze({
  default: 'border-oc-success-200 bg-oc-success-50 text-oc-success-500',
  primary: 'border-oc-primary-200 bg-oc-primary-50 text-oc-primary-500',
  error: 'border-oc-error-200 bg-oc-error-50 text-oc-error-500',
  warning: 'border-oc-warning-200 bg-oc-warning-50 text-oc-warning-500',
  gray: 'border-oc-gray-300 bg-oc-gray-100 text-oc-gray-700'
})
const positionClasses = {
  'top-center': 'top-4',
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-center': 'bottom-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4'
}
const iconBgClasses = {
  default: 'bg-oc-success-100',
  primary: 'bg-oc-primary-100',
  error: 'bg-oc-error-100',
  warning: 'bg-oc-warning-100',
  gray: 'bg-oc-gray-200'
}
const snackBar = ref()
const halfWindowWidth = ref()
const isSmall = computed(() => props.size === 'small')
const isBig = computed(() => props.size === 'big')
watch(
  () => props.modelValue,
  async () => {
    await nextTick()
    halfWindowWidth.value = (document.body.clientWidth - snackBar.value.clientWidth) / 2
  }
)
</script>

<template>
  <Transition :name="transitionName">
    <div
      v-show="modelValue"
      ref="snackBar"
      :class="[
        colorClasses[color],
        isFloating && positionClasses[position],
        {
          '!fixed z-[1004]': isFloating,
          'gap-x-2 py-3 px-4 items-center': isSmall,
          'gap-x-5 pt-5 pb-6 px-5 items-start': isBig,
          'gap-x-4 py-4 px-5 items-center': !isBig && !isSmall,
          '!pr-10': dismissible
        }
      ]"
      class="border rounded-lg flex shadow-sm snackbar relative"
      :style="isFloating && position.includes('center') ? { left: halfWindowWidth + 'px' } : ''"
    >
      <template v-if="showIcon">
        <div
          v-if="isBig"
          :class="iconBgClasses[color]"
          class="w-[48px] flex shrink-0 items-center justify-center h-[48px] rounded-full"
        >
          <Icon :name="icon" class="shrink-0" width="24" />
        </div>
        <Icon
          v-else
          :name="icon"
          class="shrink-0"
          :width="isSmall ? '16' : '24'"
          :height="isSmall ? '16' : '24'"
        />
      </template>
      <slot>
        <div v-if="isBig" class="flex flex-col gap-y-4 w-full">
          <div class="flex flex-col gap-y-3">
            <span class="font-medium text-oc-text"> {{ title }}</span>
            <span class="text-oc-text-400">{{ description }}</span>
          </div>
          <div class="flex gap-x-3">
            <Button
              v-if="secondaryButton"
              variant="secondary"
              size="small"
              v-bind="secondaryButton"
            />
            <Button v-if="primaryButton" size="small" v-bind="primaryButton" />
          </div>
        </div>
        <div
          v-else
          class="w-full flex items-center justify-between"
          :class="isSmall ? 'text-sm' : ''"
        >
          <span v-if="!isRawHtml" class="text-oc-text">
            {{ content }}
          </span>
          <span v-else class="text-oc-text" v-html="content" />
        </div>
      </slot>

      <div
        v-if="dismissible"
        class="cursor-pointer absolute top-4 right-4 text-oc-gray-800 opacity-25 hover:opacity-50"
        @click="$emit('update:modelValue', false)"
      >
        <Icon name="x-circle-filled" width="20" height="20" />
      </div>
    </div>
  </Transition>
</template>
<style lang="scss">
.snackbar {
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
