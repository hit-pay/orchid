<template>
  <div class="opacity-bar">
    <div class="picker-opacity-slider opacity-bar-background">
      <input
        ref="opacitySlider"
        :value="modelValue"
        class="opacity__slider"
        type="range"
        min="0"
        max="100"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

defineProps({
  modelValue: { default: 0, type: Number },
});

const opacitySlider = inject("opacitySlider");

const emits = defineEmits(["update:modelValue", "onInput"]);

const handleInput = (event) => {
  emits("update:modelValue", parseInt(event.target.value));
  emits("onInput", event);
};
</script>
