<script setup>
import { computed } from 'vue'
import { Icon, Tooltip } from '@/orchidui-core'

// Chip type constants
const CHIP_TYPES = {
  BACKGROUND: 'background',
  TRANSPARENT: 'transparent',
  OUTLINED: 'outlined'
}

const props = defineProps({
  variant: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'background',
  },
  label: String,
  icon: String,
  iconSize: String,
  iconTooltip: String,
  closable: Boolean,
  truncate: Boolean,
  iconProps: Object
})
defineEmits({
  remove: []
})

const className = computed(() => {
  let className = ''
  
  // Get base color classes based on variant
  const getColorClasses = (variant) => {
    switch (variant) {
      case 'accent-1':
        return { text: 'text-oc-accent-1', bg: 'bg-oc-accent-1-50', border: 'border-oc-accent-1' }
      case 'accent-2':
        return { text: 'text-oc-accent-2-600', bg: 'bg-oc-accent-2-50', border: 'border-oc-accent-2-600' }
      case 'accent-3':
        return { text: 'text-oc-accent-3', bg: 'bg-oc-accent-3-50', border: 'border-oc-accent-3' }
      case 'success':
        return { text: 'text-oc-success-600', bg: 'bg-oc-success-50', border: 'border-oc-success-600' }
      case 'warning':
        return { text: 'text-oc-warning-700', bg: 'bg-oc-warning-50', border: 'border-oc-warning-700' }
      case 'error':
        return { text: 'text-oc-error-600', bg: 'bg-oc-error-50', border: 'border-oc-error-600' }
      case 'gray':
        return { text: 'text-oc-gray-700', bg: 'bg-oc-gray-100', border: 'border-oc-gray-700' }
      case 'light-red':
        return { text: 'text-oc-red-600', bg: 'bg-oc-red-50', border: 'border-oc-red-600' }
      case 'neutral':
        return { text: 'text-oc-text-400', bg: 'bg-white', border: 'border-oc-gray-200' }
      case 'tosca':
        return { text: 'text-oc-tosca-500', bg: 'bg-oc-tosca-200', border: 'border-oc-tosca-500' }
      default:
        return { text: 'text-oc-primary', bg: 'bg-oc-primary-50', border: 'border-oc-primary' }
    }
  }

  const colors = getColorClasses(props.variant)
  
  // Apply styling based on type
  switch (props.type) {
    case CHIP_TYPES.BACKGROUND:
      className = `${colors.bg} ${colors.text} border border-transparent`
      break
    case CHIP_TYPES.TRANSPARENT:
      className = `${colors.text}`
      break
    case CHIP_TYPES.OUTLINED:
      className = `${colors.text} border ${colors.border}`
      break
    default:
      className = `${colors.bg} ${colors.text} border border-transparent`
      break
  }

  if (props.truncate) {
    className = `${className} overflow-hidden`
  }

  return className
})
const iconColor = computed(() => {
  let className = ''
  switch (props.variant) {
    case 'accent-1':
      className = 'text-oc-accent-1-300'
      break
    case 'accent-2':
      className = 'text-oc-accent-2-300'
      break
    case 'accent-3':
      className = 'text-oc-accent-3-300'
      break
    case 'success':
      className = 'text-oc-success-300 '
      break
    case 'warning':
      className = 'text-oc-warning-400 '
      break
    case 'error':
      className = 'text-oc-error-300 '
      break
    case 'gray':
      className = 'text-oc-gray-400 '
      break
    case 'light-red':
      className = 'text-oc-red-300 '
      break
    case 'neutral':
      className = 'text-oc-text-400 '
      break
    case 'tosca':
      className = 'text-oc-tosca-500 '
      break
    default:
      className = 'text-oc-primary-300 '
      break
  }
  return className
})
</script>

<template>
  <span
    class="rounded-full flex items-center gap-x-3 py-1 text-sm leading-[18px]"
    :class="[
      className,
      {
        'px-3': type !== CHIP_TYPES.TRANSPARENT,
        'px-0': type === CHIP_TYPES.TRANSPARENT
      }
    ]"
  >
    <slot>
      <div
        class="flex gap-3 items-center font-medium text-sm"
        :class="{
          'overflow-hidden': truncate
        }"
      >
        <Tooltip v-if="iconTooltip && icon" position="top" :distance="10">
          <Icon width="18" height="18" :name="icon" v-bind="iconProps" />
          <template #popper>
            <div class="px-3 py-2 text-oc-text-400 text-sm font-medium">
              {{ iconTooltip }}
            </div>
          </template>
        </Tooltip>
        <Icon v-else-if="icon" :width="iconSize ?? 18" :height="iconSize ?? 18" :name="icon" />
        <div
          :class="{
            'truncate max-w-[180px]': truncate
          }"
        >
          {{ label }}
        </div>
      </div>
    </slot>
    <Icon
      v-if="closable"
      width="18"
      height="18"
      :class="iconColor"
      name="filled-x-circle"
      class="cursor-pointer min-w-[18px]"
      @click.stop="$emit('remove')"
    />
  </span>
</template>
