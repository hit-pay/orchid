<script setup>
import { Popper } from '@/orchidui-core'
import { clickOutside as vClickOutside } from '../../directives/clickOutside.js'
import { ref, watch } from 'vue' // Import the directive

const emit = defineEmits({
  'update:modelValue': [],
  scroll: []
})

const props = defineProps({
  distance: {
    type: Number,
    default: 4
  },
  skidding: {
    type: Number,
    default: 0
  },
  isDisabled: Boolean,
  menuClasses: String,
  placement: {
    type: String,
    default: 'bottom-start'
  },
  popperOptions: {
    type: Object,
    default: () => ({
      strategy: 'fixed'
    })
  },
  maxMenuHeight: Number,
  popperStyle: Object,
  popperClass: [String, Array, Object],
  modelValue: Boolean,
  preventClickOutside: Boolean,
  isAttachToBody: Boolean
})
const popper = ref()
const dropdownScroll = ref()
const toggleDropdown = async (e) => {
  if (!e?.target) return
  if (props.isDisabled) return
  // Need to add a timeout because the popup position cannot be determined while the element is display:none (v-show), which is required for the appearance animation
  setTimeout(() => popper.value?.popperInstance?.update(), 10)
  emit('update:modelValue', !props.modelValue)
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
  popper.value.popperInstance.update()
}

watch(() => props.modelValue, getMaxHeightWithoutOverflow)

defineExpose({
  dropdownScroll,
  toggleDropdown,
  popper
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
      :popper-options="popperOptions"
      :is-attach-to-body="isAttachToBody"
    >
      <div class="w-[inherit] flex" @click="toggleDropdown">
        <slot />
      </div>
      <template #popper>
        <Transition name="fade">
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
