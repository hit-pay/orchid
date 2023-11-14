<script setup>
import { createPopper } from "@popperjs/core";
import { onMounted, ref, watch } from "vue";

const reference = ref();
const popper = ref();
const popperInstance = ref();
defineExpose({
  popperInstance,
});
const props = defineProps({
  placement: {
    type: String,
    required: true,
  },
  /**
   * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
   */
  popperOptions: {
    type: Object,
  },
  skidding: {
    type: Number,
    default: 0,
  },
  distance: {
    type: Number,
    default: 5,
  },
  isFlipEnabled: {
    type: Boolean,
    default: true,
  },
});
const getPopperOptions = () => ({
  placement: props.placement,
  strategy: "fixed",
  modifiers: [
    {
      name: "flip",
      enabled: props.isFlipEnabled,
    },
    {
      name: "offset",
      options: {
        offset: [props.skidding, props.distance],
      },
    },
  ],
  ...(props.popperOptions || []),
});

onMounted(() => {
  popperInstance.value = createPopper(
    reference.value,
    popper.value,
    getPopperOptions()
  );

  // Need add setTimeout because placement is not updated immediately from props when component is mounted
  setTimeout(() => popperInstance.value.update(), 50);
});

watch(
  () => [props.popperOptions, props.placement, props.distance, props.skidding],
  () => {
    popperInstance.value.setOptions(getPopperOptions());
    popperInstance.value.update();
  },
  { deep: true }
);
</script>

<template>
  <div class="flex w-[inherit]">
    <div ref="reference" class="w-[inherit] flex">
      <slot />
    </div>
    <div ref="popper" class="z-[1005]">
      <slot name="popper" />
    </div>
  </div>
</template>
