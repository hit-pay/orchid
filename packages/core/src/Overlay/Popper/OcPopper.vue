<script setup>
import { useFloating, offset, flip } from '@floating-ui/vue'
import { onMounted, ref, watch } from 'vue'

const reference = ref()
const popper = ref()
const floatingInstance = ref()

const props = defineProps({
  placement: {
    type: String,
    required: true
  },
  /**
   * Options passed to the floating element
   */
  popperOptions: {
    type: Object
  },
  popperStyle: {
    type: Object
  },
  skidding: {
    type: Number,
    default: 0
  },
  distance: {
    type: [String, Number],
    default: 5
  },
  isFlipEnabled: {
    type: Boolean,
    default: true
  },
  popperClass: {
    type: [String, Array, Object],
    default: ''
  },
  isAttachToBody: {
    type: Boolean,
    default: false
  }
})

const getFloatingOptions = () => {
  const baseOptions = {
    placement: props.placement,
    middleware: [
      offset({
        mainAxis: Number(props.distance),
        crossAxis: props.skidding
      }),
      flip({
        enabled: props.isFlipEnabled
      })
    ]
  }

  // Merge with custom popper options if provided
  if (props.popperOptions) {
    return {
      ...baseOptions,
      ...props.popperOptions,
      middleware: [
        ...baseOptions.middleware,
        ...(props.popperOptions.middleware || [])
      ]
    }
  }

  return baseOptions
}

const checkElementIsInsidePopper = (targetElement) => {
  return targetElement && popper.value?.contains(targetElement)
}

const { x, y, strategy, update } = useFloating(reference, popper, getFloatingOptions())

onMounted(() => {
  floatingInstance.value = { update }
  // Need add setTimeout because placement is not updated immediately from props when component is mounted
  setTimeout(() => update(), 150)
})

watch(
  () => [props.popperOptions, props.placement, props.distance, props.skidding],
  () => {
    update()
  },
  { deep: true }
)

defineExpose({
  floatingInstance,
  checkElementIsInsidePopper
})
</script>

<template>
  <div class="flex w-[inherit]">
    <div ref="reference" class="w-[inherit] flex">
      <slot />
    </div>
    <teleport to="body" :disabled="!isAttachToBody">
      <div 
        ref="popper" 
        :class="popperClass" 
        :style="{
          position: strategy,
          top: `${y ?? 0}px`,
          left: `${x ?? 0}px`,
          ...popperStyle
        }" 
        class="z-[1007]"
      >
        <slot name="popper" />
      </div>
    </teleport>
  </div>
</template>
