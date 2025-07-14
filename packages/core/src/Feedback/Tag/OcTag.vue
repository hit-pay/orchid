<script setup>
defineProps({
  variant: {
    type: String,
    default: 'warning'
  },
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
