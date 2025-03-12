<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
  size: {
    type: String,
    default: 'default'
  },
  label: String
})
const emit = defineEmits({
  'update:modelValue': []
})
const onInput = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}
const toggleSizeClasses = computed(() => ({
  default: 'w-[42px] h-7',
  small: 'w-[26px] h-[15px]'
}))
const ellipseClasses = computed(() => ({
  default: 'before:w-6 before:h-6 before:top-px before:left-px',
  small: ' before:w-4 before:h-4 before:top-[0.5px] before:left-[0.5px]'
})) 
const labelClasses = `absolute top-0 left-0 border border-transparent hover:bg-oc-primary-300 hover:border-oc-primary-500 bg-oc-primary-100 rounded-full cursor-pointer transition-all duration-300
 before:transition-all before:duration-300 before:absolute before:rounded-full before:bg-oc-bg-light`
</script>

<template>
  <div class="inline-flex items-center gap-3 h-fit">
    <label
      class="toggle-switch relative inline-block"
      :class="[toggleSizeClasses[size], size, disabled ? 'pointer-events-none' : '']"
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
        :class="[labelClasses, toggleSizeClasses[size], ellipseClasses[size], {
          'toggle-on-focus': !disabled && !modelValue,
          '!bg-oc-accent-1-100 before:bg-oc-accent-1-50': disabled
        }]"
      ></span>
    </label>
    <div v-if="label" class="text-sm cursor-pointer" @click="onInput">{{ label }}</div>
  </div>
</template>

<style scoped lang="scss">
.toggle-switch .toggle-input.is-checked + .toggle-label {
  @apply bg-[var(--oc-primary-500)];
}

.toggle-switch {
  &:hover {
    .toggle-on-focus {
      box-shadow: 0px 0px 0px 3px var(--oc-primary-200);
    }
  }
  .toggle-input.is-checked + .toggle-label::before {
    @apply translate-x-[18px];
  }

  &.small .toggle-input.is-checked + .toggle-label::before {
    @apply translate-x-[11px];
  }
}
</style>
