<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  max: {
    type: Number,
    default: 0
  },
  current: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="flex items-center gap-x-3">
    <span class="text-oc-text-400 text-sm shrink-0">{{ label }}</span>
    <div class="w-full rounded-full bg-oc-gray-100 h-[8px] overflow-hidden">
      <div
        class="h-[8px] rounded-l-full bg-oc-primary transition-all"
        :style="{ width: (current / max) * 100 + '%' }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
