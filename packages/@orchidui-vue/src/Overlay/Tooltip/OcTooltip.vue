<script setup>
import { onMounted, ref, watch } from "vue";
import { createPopper } from "@popperjs/core";
import { clickOutside as vClickOutside } from "../../directives/clickOutside.js";

const props = defineProps({
  popperClass: {
    type: String,
    default: "bg-oc-bg-light",
  },
  offset: {
    type: Array,
    default: () => [0, 0],
  },
  hideAfter: Number,
  popperOptions: Object,
  trigger: {
    type: String,
    default: "hover",
    validator: (val) => ["hover", "click"].includes(val),
  },
  position: {
    type: String,
    default: "bottom",
    validator: (value) =>
      [
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left-start",
        "left",
        "left-end",
      ].includes(value),
  },
  arrowHidden: {
    type: Boolean,
    default: false,
  },
});

const triggerElement = ref();
const tooltip = ref();
const popperInstance = ref();
const isShow = ref(false);
onMounted(() => {
  popperInstance.value = createPopper(triggerElement.value, tooltip.value, {
    placement: props.position,
    modifiers: [
      { name: "eventListeners", enabled: false },
      {
        name: "offset",
        options: {
          offset: props.offset,
        },
      },
    ],
    ...props.popperOptions,
  });
});
watch(
  () => [props.offset, props.position],
  () => {
    try {
      popperInstance.value.setOptions((options) => ({
        ...options,
        placement: props.position,
        modifiers: [
          ...options.modifiers,
          {
            name: "offset",
            options: {
              offset: props.offset,
            },
          },
        ],
        ...props.popperOptions,
      }));
    } catch (error) {
      console.error("Failed to set Popper options:", error);
    }
  },
);
const show = () => {
  isShow.value = true;

  // Enable the event listeners
  popperInstance.value.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: true },
    ],
  }));

  // Update its position
  popperInstance.value.update();
  if (props.hideAfter) setTimeout(() => hide(), props.hideAfter);
};

const hide = () => {
  isShow.value = false;

  // Disable the event listeners
  popperInstance.value.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: false },
    ],
  }));
};
onMounted(() => {
  if (props.trigger === "hover") {
    const showEvents = ["mouseenter", "focus"];
    const hideEvents = ["mouseleave", "blur"];

    showEvents.forEach((event) => {
      triggerElement.value.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
      triggerElement.value.addEventListener(event, hide);
    });
  } else {
    triggerElement.value.addEventListener("click", () =>
      isShow.value ? hide() : show(),
    );
  }
});
const onClickOutside = () => {
  if (isShow.value) hide();
};
</script>

<template>
  <span v-click-outside="onClickOutside" class="relative">
    <span ref="triggerElement">
      <slot :is-show="isShow" />
    </span>
    <Transition name="fade">
      <span
        v-show="isShow"
        ref="tooltip"
        class="oc-tooltip"
        :class="popperClass"
      >
        <slot name="popper" />
        <span v-if="!arrowHidden" class="oc-arrow" data-popper-arrow />
      </span>
    </Transition>
  </span>
</template>

<style scoped lang="scss">
.oc-tooltip {
  box-shadow:
    0 3px 22px 0 rgba(38, 42, 50, 0.09),
    0 1px 3px 0 rgba(0, 0, 0, 0.1);
  @apply rounded-sm z-[1006];

  &[data-popper-placement^="top"] > .oc-arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > .oc-arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > .oc-arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > .oc-arrow {
    left: -4px;
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
      content: "";
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
