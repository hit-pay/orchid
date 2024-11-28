<script setup lang="ts">
import { Icon, Chip } from '@orchidui/vue'

defineProps({
  icon: String,
  width: String,
  height: String,
  iconClass: String,
  title: String,
  isActive: Boolean,
  chipProps: Object
})
</script>

<template>
  <div
    class="relative border rounded gap-x-3 flex justify-center items-center py-6 px-5 bg-oc-bg-light shadow-sm cursor-pointer hover:border-oc-primary duration-500"
    :class="isActive ? 'border-oc-primary' : 'border-oc-gray-200'"
  >
    <Icon v-if="icon" :name="icon" :width="width" :height="height" :class="iconClass" />
    <span>{{ title }}</span>

    <Chip v-if="chipProps" v-bind="chipProps" class="absolute top-0 -translate-y-1/2 sm:right-9" />
  </div>
</template>
