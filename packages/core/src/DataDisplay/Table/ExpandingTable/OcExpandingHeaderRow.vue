<script setup lang="ts">
defineProps({
  headers: {
    type: Array,
    required: true
  },
  isSticky: {
    type: Boolean,
    default: false
  },
  gridTemplateColumns: {
    type: String,
    default: '32px 200px repeat(${headers.length - 1}, minmax(150px, auto)) 32px'
  }
})
</script>

<template>
  <div
    class="grid bg-oc-gray-50 h-[35px] min-w-max relative"
    :style="{
      gridTemplateColumns
    }"
  >
    <div
      class="w-9 flex items-center justify-center border-b border-oc-text-200"
      :class="isSticky ? 'sticky left-0 z-20 bg-oc-gray-50 border-oc-gray-200' : ''"
    />
    <div
      v-for="(header, index) in headers"
      :key="header.key"
      class="py-3 px-4 text-xs text-oc-text-400 border-b border-oc-text-200 font-medium whitespace-nowrap"
      :class="[
        header.class,
        isSticky && index === 0 ? 'sticky left-9 z-10 bg-oc-gray-50 border-oc-gray-200' : ''
      ]"
    >
      {{ header.label }}
    </div>
    <div class="w-9 border-b border-oc-text-200" />
  </div>
</template>
