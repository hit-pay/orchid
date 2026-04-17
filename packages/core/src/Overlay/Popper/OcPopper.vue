<script setup>
import { createPopper } from '@popperjs/core'
import { onMounted, ref, watch } from 'vue'

const reference = ref()
const popper = ref()
const popperInstance = ref()

const props = defineProps({
  /** Popper.js placement string (e.g. `'bottom'`, `'top-start'`, `'right-end'`). */
  placement: {
    type: String,
    required: true
  },
  /**
   * Additional options passed directly to the Popper.js instance.
   * See https://popper.js.org/docs/v2/modifiers/ for available modifiers.
   */
  popperOptions: {
    type: Object
  },
  /** Inline CSS styles applied to the popper container element. */
  popperStyle: {
    type: Object
  },
  /** Horizontal shift of the popper relative to the reference element (px). */
  skidding: {
    type: Number,
    default: 0
  },
  /** Vertical distance between the reference element and the popper panel (px). */
  distance: {
    type: [String, Number],
    default: 5
  },
  /** Allow the popper to flip to the opposite side when it would overflow the viewport. */
  isFlipEnabled: {
    type: Boolean,
    default: true
  },
  /** CSS class(es) applied to the popper container element. */
  popperClass: {
    type: [String, Array, Object],
    default: ''
  },
  /** Teleport the popper panel to `document.body` (required inside overflow:hidden containers). */
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
      enabled: props.isFlipEnabled
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
  setTimeout(() => popperInstance.value?.update(), 150)
})

watch(
  () => [props.popperOptions, props.placement, props.distance, props.skidding],
  () => {
    popperInstance.value?.setOptions(getPopperOptions())
    popperInstance.value?.update()
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
