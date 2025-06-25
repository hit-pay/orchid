<script setup>
import { onMounted, ref } from 'vue'
import { Popper } from '@/orchidui-core'
import { clickOutside as vClickOutside } from '../../directives/clickOutside.js'

const props = defineProps({
  popperClass: {
    type: String,
    default: 'bg-oc-bg-light'
  },
  distance: {
    type: [String, Number],
    default: 5
  },
  skidding: {
    type: Number,
    default: 0
  },
  transitionName: {
    type: String,
    default: 'fade'
  },
  hideAfter: Number,
  popperOptions: Object,
  trigger: {
    type: String,
    default: 'hover',
    validator: (val) => ['hover', 'click'].includes(val)
  },
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
  arrowHidden: {
    type: Boolean,
    default: false
  },
  isPopover: {
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
  @apply rounded-sm z-[1010];

  &-wrapper {
    div[data-popper-placement^='top'] .oc-arrow {
      bottom: -4px;
    }

    div[data-popper-placement^='top'] .oc-arrow {
      bottom: -4px;
    }

    div[data-popper-placement^='bottom'] .oc-arrow {
      top: -4px;
    }

    div[data-popper-placement^='left'] .oc-arrow {
      right: -4px;
    }

    div[data-popper-placement^='right'] .oc-arrow {
      left: -4px;
    }
  }

  .oc-arrow {
    @apply z-0;
    visibility: hidden;

    &,
    &::before {
      @apply absolute w-3 h-3  bg-inherit;
    }

    &::before {
      visibility: visible;
      content: '';
      transform: rotate(45deg);
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
