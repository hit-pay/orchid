<script setup>
import { Popper } from '@/orchidui-core'
import { clickOutside as vClickOutside } from '../../directives/clickOutside.js'
import { ref, watch, onMounted } from 'vue' // Import the directive

const emit = defineEmits({
  /** Dropdown open/close state changed. Payload: new boolean state. */
  'update:modelValue': [],
  /** Menu panel scrolled. Payload: scroll event. */
  scroll: []
})

const props = defineProps({
  /** v-model — open/closed state of the dropdown. */
  modelValue: Boolean,
  /** Vertical offset between the trigger and the menu panel (px). */
  distance: {
    type: Number,
    default: 4
  },
  /** Horizontal offset between the trigger and the menu panel (px). */
  skidding: {
    type: Number,
    default: 0
  },
  /** Disable the dropdown — clicks on the trigger do nothing. */
  isDisabled: Boolean,
  /** Extra CSS class applied to the menu panel container. */
  menuClasses: String,
  /**
   * Popper.js placement for the menu panel.
   * Common values: \`'bottom-start'\`, \`'bottom-end'\`, \`'top-start'\`, \`'right'\`.
   */
  placement: {
    type: String,
    default: 'bottom-start'
  },
  /** Extra options passed directly to the Popper.js instance. */
  popperOptions: {
    type: Object,
    default: () => ({})
  },
  /** Maximum height of the menu panel (px). Auto-calculated to avoid viewport overflow if not set. */
  maxMenuHeight: Number,
  /** Inline styles applied to the popper element. */
  popperStyle: Object,
  /** CSS class(es) applied to the popper element wrapper. */
  popperClass: [String, Array, Object],
  /** Prevent the dropdown from closing when clicking outside the trigger. */
  preventClickOutside: Boolean,
  /** Attach the menu panel to \`document.body\` instead of the component's parent. Required inside modals with overflow:hidden. */
  isAttachToBody: Boolean
})
const popper = ref()
const dropdownScroll = ref()
const toggleDropdown = async (e) => {
  if (!e?.target) return
  if (props.isDisabled) return
  // Need to add a timeout because the popup position cannot be determined while the element is display:none (v-show), which is required for the appearance animation
  setTimeout(() => {
    popper.value?.popperInstance?.update()
    emit('update:modelValue', !props.modelValue)
  }, 30)
}
const onClickOutside = (e) => {
  if (
    props.isAttachToBody &&
    !props.preventClickOutside &&
    popper.value.checkElementIsInsidePopper(e.target)
  ) {
    return
  }

  if (props.modelValue && !props.preventClickOutside) emit('update:modelValue', false)
}
const parentElement = ref()
const maxPopperHeight = ref(0)

const getMaxHeightWithoutOverflow = async () => {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight

  const parentElementTop = parentElement.value.getBoundingClientRect().top

  const parentElementBottom = viewportHeight - parentElement.value.getBoundingClientRect().bottom

  const max = Math.max(parentElementTop, parentElementBottom)
  const additionalTopOffset = max === parentElementTop ? 2.5 : 0

  const maxHeight = max - (2 + additionalTopOffset) * 16 // offset;

  maxPopperHeight.value = maxHeight > 0 ? maxHeight : 0
  popper.value?.popperInstance?.update()
}

watch(() => props.modelValue, getMaxHeightWithoutOverflow)

defineExpose({
  dropdownScroll,
  toggleDropdown,
  popper
})

const isFixed = ref(false)

onMounted(() => {
  if (parentElement.value.closest('#modal-overlay-wrapper')) {
    isFixed.value = true
  }
})
</script>

<template>
  <span ref="parentElement" v-click-outside="onClickOutside" class="flex w-[inherit]">
    <Popper
      ref="popper"
      :placement="placement"
      :distance="distance"
      :popper-class="popperClass"
      :skidding="skidding"
      :popper-style="popperStyle"
      :popper-options="{
        ...popperOptions,
        strategy: isFixed ? 'fixed' : popperOptions.strategy || 'absolute'
      }"
      :is-attach-to-body="isAttachToBody"
    >
      <div class="w-[inherit] flex" @click="toggleDropdown">
        <slot />
      </div>
      <template #popper>
        <Transition name="dropdown-fade">
          <div
            v-show="modelValue"
            ref="dropdownScroll"
            :class="menuClasses"
            class="rounded bg-oc-bg-light shadow min-w-[162px] overflow-y-auto"
            :style="{
              maxHeight: (maxMenuHeight || maxPopperHeight) - 68 + 'px'
            }"
            @scroll="$emit('scroll', $event)"
          >
            <slot name="menu" :is-popover-open="modelValue" />
          </div>
        </Transition>
      </template>
    </Popper>
  </span>
</template>

<style scoped lang="scss">
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
}
</style>
