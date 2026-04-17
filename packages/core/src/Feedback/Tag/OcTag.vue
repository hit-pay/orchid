<script setup>
defineProps({
  /**
   * Color variant of the tag.
   * @values warning, accent-2
   */
  variant: {
    type: String,
    default: 'warning'
  },
  /** Text label displayed inside the tag. */
  label: {
    type: String,
    default: ''
  }
})
const variantClasses = {
  warning: 'bg-oc-warning-600 text-white',
  'accent-2': 'bg-oc-accent-2-500 text-white'
}
</script>

<template>
  <div class="rounded-sm py-1 px-3 text-xs" :class="variantClasses[variant]">
    {{ label }}
  </div>
</template>

<style scoped lang="scss"></style>
