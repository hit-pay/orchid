<template>
  <div class="picker-hue">
    <input
      :value="modelValue"
      class="picker-hue-range-slider"
      type="range"
      min="0"
      max="360"
      step="0.1"
      @input="handleInput"
      @change="$emit('onChange', $event)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: { default: 0, type: Number }
})

const emits = defineEmits(['update:modelValue', 'onInput', 'onChange'])

const handleInput = (event) => {
  emits('update:modelValue', parseFloat(event.target.value))
  emits('onInput', event)
}
</script>
