<script setup>
import { createPopper } from '@popperjs/core'
import { onMounted, ref, watch } from 'vue'

const reference = ref()
const popper = ref()
const popperInstance = ref()

const props = defineProps({
  placement: {
    type: String,
    required: true
  },
  /**
   * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
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

const getPopperOptions = () => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'flip',
      enabled: props.isFlipEnabled,
      options: {
        allowedAutoPlacements: ['top', 'bottom']
      }
    },
    {
      name: 'offset',
      options: {
        offset: [props.skidding, props.distance]
      }
    }
  ],
  ...(props.popperOptions || [])
})

const checkElementIsInsidePopper = (targetElement) => {
  return targetElement && popper.value?.contains(targetElement)
}

onMounted(() => {
  popperInstance.value = createPopper(reference.value, popper.value, getPopperOptions())

  // Need add setTimeout because placement is not updated immediately from props when component is mounted
  setTimeout(() => popperInstance.value.update(), 50)
})

watch(
  () => [props.popperOptions, props.placement, props.distance, props.skidding],
  () => {
    popperInstance.value.setOptions(getPopperOptions())
    popperInstance.value.update()
  },
  { deep: true }
)

defineExpose({
  popperInstance,
  checkElementIsInsidePopper
})
</script>

<template>
  <div class="flex w-[inherit]">
    <div ref="reference" class="w-[inherit] flex">
      <slot />
    </div>
    <teleport to="body" :disabled="!isAttachToBody">
      <div ref="popper" :class="popperClass" :style="popperStyle" class="z-[1007]">
        <slot name="popper" />
      </div>
    </teleport>
  </div>
</template>
