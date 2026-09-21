<script setup>
import { onMounted, ref } from 'vue'
import { Popper } from '@/orchidui-core'
import { clickOutside as vClickOutside } from '../../directives/clickOutside.js'

const props = defineProps({
  /** CSS class applied to the tooltip panel (background color, border, etc.). */
  popperClass: {
    type: String,
    default: 'bg-oc-bg-light'
  },
  /** Vertical distance between the trigger and the tooltip panel (px). */
  distance: {
    type: [String, Number],
    default: 5
  },
  /** Horizontal shift of the tooltip panel relative to the trigger (px). */
  skidding: {
    type: Number,
    default: 0
  },
  /** Vue transition name applied when the tooltip panel appears/disappears. */
  transitionName: {
    type: String,
    default: 'fade'
  },
  /** Auto-hide the tooltip after this many milliseconds. Omit to keep it open until mouse-leave. */
  hideAfter: Number,
  /** Extra options passed directly to the Popper.js instance. */
  popperOptions: Object,
  /**
   * What event opens the tooltip.
   * @values hover, click
   */
  trigger: {
    type: String,
    default: 'hover',
    validator: (val) => ['hover', 'click'].includes(val)
  },
  /**
   * Popper.js placement for the tooltip panel.
   * @values top-start, top, top-end, right-start, right, right-end, bottom-start, bottom, bottom-end, left-start, left, left-end
   */
  position: {
    type: String,
    default: 'bottom',
    validator: (value) =>
      [
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-start',
        'bottom',
        'bottom-end',
        'left-start',
        'left',
        'left-end'
      ].includes(value)
  },
  /** Hide the small directional arrow on the tooltip panel. */
  arrowHidden: {
    type: Boolean,
    default: false
  },
  /** Keep the tooltip open when hovering over the panel itself (useful for interactive content). */
  isPopover: {
    type: Boolean,
    default: false
  },
  /** Teleport the tooltip panel to `document.body` (required inside overflow:hidden containers). */
  isAttachToBody: {
    type: Boolean,
    default: false
  }
})

const isShow = ref(false)
const triggerEl = ref()
const popperBodyEl = ref()
const popper = ref()

const show = () => {
  isShow.value = true
  // Update its position
  popper.value?.popperInstance?.update()
  if (props.hideAfter) setTimeout(() => hide(), props.hideAfter)
}

const hide = () => (isShow.value = false)

onMounted(() => {
  if (props.trigger === 'hover') {
    const showEvents = ['mouseenter', 'focus']
    const hideEvents = ['mouseleave', 'blur']

    showEvents.forEach((event) => {
      triggerEl.value.addEventListener(event, show)
    })

    hideEvents.forEach((event) => {
      triggerEl.value.addEventListener(event, hide)
    })

    if (props.isPopover) {
      showEvents.forEach((event) => {
        popperBodyEl.value.addEventListener(event, show)
      })

      hideEvents.forEach((event) => {
        popperBodyEl.value.addEventListener(event, hide)
      })
    }
  } else {
    triggerEl.value.addEventListener('click', () => (isShow.value ? hide() : show()))
  }
})
const onClickOutside = () => {
  if (isShow.value) hide()
}
</script>

<template>
  <span v-click-outside="onClickOutside" class="oc-tooltip-wrapper">
    <Popper
      ref="popper"
      :placement="position"
      :skidding="skidding"
      :distance="distance"
      :popper-options="popperOptions"
      :is-attach-to-body="isAttachToBody"
      class="!z-[1010]"
    >
      <div ref="triggerEl" class="w-[inherit] relative">
        <slot />
      </div>
      <template #popper>
        <Transition :name="transitionName">
          <div v-show="isShow" ref="popperBodyEl" class="oc-tooltip" :class="popperClass">
            <slot name="popper" />
            <div v-if="!arrowHidden" class="oc-arrow" data-popper-arrow />
          </div>
        </Transition>
      </template>
    </Popper>
  </span>
</template>

<style scoped lang="scss">
.oc-tooltip {
  box-shadow:
    0 3px 22px 0 rgba(38, 42, 50, 0.09),
    0 1px 3px 0 rgba(0, 0, 0, 0.1);
  @apply rounded-md z-[1010];

  .oc-arrow {
    @apply absolute z-0 h-3 w-3 bg-inherit;
    visibility: hidden;

    // Drawn as a real triangle (via clip-path) that sits flush against the panel
    // edge, so it points cleanly without overlapping the tooltip text. The size,
    // shape and offset per placement are defined in the unscoped block below.
    &::before {
      @apply absolute bg-inherit;
      visibility: visible;
      content: '';
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
// Each placement draws a triangle whose base is flush with the panel edge and
// whose tip points toward the trigger, so it never covers the tooltip content.
div[data-popper-placement^='top'] .oc-arrow {
  bottom: 0;

  &::before {
    top: 100%;
    left: 0;
    width: 12px;
    height: 6px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
}
div[data-popper-placement^='bottom'] .oc-arrow {
  top: 0;

  &::before {
    bottom: 100%;
    left: 0;
    width: 12px;
    height: 6px;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }
}
div[data-popper-placement^='left'] .oc-arrow {
  right: 0;

  &::before {
    left: 100%;
    top: 0;
    width: 6px;
    height: 12px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }
}
div[data-popper-placement^='right'] .oc-arrow {
  left: 0;

  &::before {
    right: 100%;
    top: 0;
    width: 6px;
    height: 12px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
  }
}
</style>
