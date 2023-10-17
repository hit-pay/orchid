<script setup>
import { onMounted, ref, watch } from "vue";
import { createPopper } from "@popperjs/core";

const props = defineProps({
  offset: Array,
  popperOptions: Object,
  position: {
    type: String,
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

const trigger = ref();
const tooltip = ref();
const popperInstance = ref();
onMounted(() => {
  try {
    popperInstance.value = createPopper(trigger.value, tooltip.value, {
      placement: props.position,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: props.offset,
          },
        },
      ],
      ...props.popperOptions,
    });
  } catch (error) {
    console.error("Failed to create Popper instance:", error);
  }
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
  // Make the tooltip visible
  tooltip.value.setAttribute("data-show", "");

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
};

const hide = () => {
  // Hide the tooltip
  tooltip.value.removeAttribute("data-show");

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
  const showEvents = ["mouseenter", "focus"];
  const hideEvents = ["mouseleave", "blur"];

  showEvents.forEach((event) => {
    trigger.value.addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    trigger.value.addEventListener(event, hide);
  });
});
</script>

<template>
  <span class="relative">
    <span ref="trigger">
      <slot />
    </span>
    <span id="tooltip" ref="tooltip">
      <slot name="popper" />
      <span v-if="!arrowHidden" id="arrow" data-popper-arrow />
    </span>
  </span>
</template>

<style scoped lang="scss">
#tooltip {
  box-shadow:
    0 3px 22px 0 rgba(38, 42, 50, 0.09),
    0 1px 3px 0 rgba(0, 0, 0, 0.1);
  @apply hidden rounded-sm z-10 bg-[var(--oc-grey-50)];

  &[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > #arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
  }

  &[data-show] {
    @apply block;
  }

  #arrow {
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
</style>
