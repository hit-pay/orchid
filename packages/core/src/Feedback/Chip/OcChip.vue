<script setup>
import { computed } from 'vue'
import { Icon, Tooltip } from '@/orchidui-core'

const props = defineProps({
  variant: {
    type: String,
    default: ''
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
  switch (props.variant) {
    case 'accent-1':
      className = 'bg-oc-accent-1-50 text-oc-accent-1 border border-transparent'
      break
    case 'accent-2':
      className = 'bg-oc-accent-2-50 text-oc-accent-2 border border-transparent'
      break
    case 'accent-3':
      className = 'bg-oc-accent-3-50 text-oc-accent-3 border border-transparent'
      break
    case 'success':
      className = 'bg-oc-success-50 text-oc-success border border-transparent'
      break
    case 'warning':
      className = 'bg-oc-warning-50 text-oc-warning border border-transparent'
      break
    case 'error':
      className = 'bg-oc-error-50 text-oc-error border border-transparent'
      break
    case 'gray':
      className = 'bg-oc-gray-100 text-oc-gray-700 border border-transparent'
      break
    case 'light-red':
      className = 'bg-oc-accent-3-50 text-oc-accent-3 border border-transparent'
      break
    case 'neutral':
      className = 'bg-white text-oc-text-400 border border-oc-gray-200'
      break
    default:
      className = 'bg-oc-primary-50 text-oc-primary'
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
      className = 'text-oc-warning-300 '
      break
    case 'error':
      className = 'text-oc-error-300 '
      break
    case 'gray':
      className = 'text-oc-gray-400 '
      break
    case 'light-red':
      className = 'text-oc-error '
      break
    case 'neutral':
      className = 'text-oc-text-400 '
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
    class="rounded-full flex items-center gap-x-3 py-1 px-3 text-sm leading-[18px]"
    :class="className"
  >
    <slot>
      <div
        class="flex gap-3 items-center"
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
