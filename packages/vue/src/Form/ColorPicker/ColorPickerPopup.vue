<script setup lang="ts">
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { onMounted, ref } from "vue";
import ColorInputs from "./ColorInputs.vue";

defineProps({
  modelValue: {
    type: String,
    default: "#ff0000",
  },
});
const emit = defineEmits(["update:modelValue"]);
const colorPickerRef = ref();
const activeRailColor = ref("#ff0000");
const hslToHex = (value) => {
  emit("update:modelValue", value);
  let hueValue = colorPickerRef.value.colorInstance.hueValue;
  // Ensure hue is in the valid range [0, 360]
  hueValue = ((hueValue % 360) + 360) % 360;

  // Convert HSL to RGB
  const c = 1;
  const x = (1 - Math.abs(((hueValue / 60) % 2) - 1)) * c;
  const m = 0;
  let red, green, blue;

  if (hueValue >= 0 && hueValue < 60) {
    red = c;
    green = x;
    blue = 0;
  } else if (hueValue >= 60 && hueValue < 120) {
    red = x;
    green = c;
    blue = 0;
  } else if (hueValue >= 120 && hueValue < 180) {
    red = 0;
    green = c;
    blue = x;
  } else if (hueValue >= 180 && hueValue < 240) {
    red = 0;
    green = x;
    blue = c;
  } else if (hueValue >= 240 && hueValue < 300) {
    red = x;
    green = 0;
    blue = c;
  } else {
    red = c;
    green = 0;
    blue = x;
  }

  // Convert RGB to HEX
  const hexRed = Math.round((red + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const hexGreen = Math.round((green + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const hexBlue = Math.round((blue + m) * 255)
    .toString(16)
    .padStart(2, "0");

  activeRailColor.value = `#${hexRed}${hexGreen}${hexBlue}`;
};
const target = ref();
onMounted(() => {
  target.value = colorPickerRef.value.$el.parentNode.querySelector(
    ".vc-chrome-colorPicker-body",
  );
});
</script>

<template>
  <div
    :style="{
      '--active-color': modelValue,
      '--active-rail-color': activeRailColor,
    }"
  >
    <color-picker
      ref="colorPickerRef"
      :pure-color="modelValue"
      is-widget
      disable-alpha
      format="hex"
      disable-history
      picker-type="chrome"
      @update:pure-color="hslToHex"
    />
    <teleport v-if="colorPickerRef && target" :to="target">
      <ColorInputs
        :active-color="modelValue"
        @update:active-color="$emit('update:modelValue', $event)"
      />
    </teleport>
  </div>
</template>

<style lang="scss">
.vc-display {
  @apply hidden #{!important};
}

.vc-colorpicker {
  @apply rounded-lg w-[352px] #{!important};

  &--container {
    @apply p-5 #{!important};
  }
}

.vc-saturation {
  &__chrome {
    @apply rounded h-[238px] overflow-hidden #{!important};
  }

  &__cursor div {
    @apply w-9 h-9 border-[8px] #{!important};
  }
}

.chrome-sliders {
  @apply ml-0 #{!important};

  .vc-hue-slider.small-slider {
    @apply h-4 mb-5 #{!important};

    .small-bar {
      @apply -translate-y-full;

      & div {
        @apply w-9 h-9 border-[8px] border-white bg-[var(--active-rail-color)] rounded-full #{!important};
      }
    }
  }
}
</style>
