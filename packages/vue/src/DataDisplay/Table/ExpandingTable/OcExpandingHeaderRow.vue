<script setup lang="ts">
defineProps({
  headers: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="flex bg-oc-gray-50 border-b border-oc-text-200 h-[34px]">
    <div class="w-9" />
    <div
      v-for="header in headers"
      :key="header.key"
      class="py-3 px-4 flex-1 uppercase text-xs text-oc-text-400 font-medium"
      :class="header.class"
    >
      {{ header.label }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
