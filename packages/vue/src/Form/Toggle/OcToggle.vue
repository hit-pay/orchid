<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
  size: {
    type: String,
    default: 'default'
  }
})
const emit = defineEmits({
  'update:modelValue': []
})
const onInput = () => emit('update:modelValue', !props.modelValue)
const toggleSizeClasses = computed(() => ({
  default: 'w-[42px] h-7',
  small: 'w-[26px] h-[15px]'
}))
const ellipseClasses = computed(() => ({
  default: 'before:w-6 before:h-6 before:top-1 before:left-1',
  small: ' before:w-4 before:h-4 before:top-[1.5px] before:left-[1.5px]'
}))
const labelClasses = `absolute top-0 left-0 bg-oc-primary-100 rounded-full cursor-pointer transition-all duration-300
 before:transition-all before:duration-300 before:absolute before:rounded-full before:bg-oc-bg-light`
</script>

<template>
  <label
    class="toggle-switch relative inline-block"
    :class="[toggleSizeClasses[size], size, disabled ? 'pointer-events-none opacity-60' : '']"
  >
    <input
      class="toggle-input hidden"
      :class="{
        'is-checked': modelValue
      }"
      :value="modelValue"
      :checked="modelValue"
      type="checkbox"
      @change="onInput"
    />
    <span
      class="toggle-label"
      :class="[labelClasses, toggleSizeClasses[size], ellipseClasses[size]]"
    ></span>
  </label>
</template>

<style scoped lang="scss">
.toggle-switch .toggle-input.is-checked + .toggle-label {
  @apply bg-[var(--oc-primary-500)];
}

.toggle-switch {
  .toggle-input.is-checked + .toggle-label::before {
    @apply translate-x-[18px];
  }

  &.small .toggle-input.is-checked + .toggle-label::before {
    @apply translate-x-[11px];
  }
}
</style>
