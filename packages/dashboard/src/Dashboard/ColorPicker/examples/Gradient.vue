<script setup>
import { ColorPicker } from '@orchidui/dashboard'
import { ref, computed } from 'vue'

const gradient = ref('')
const bgStyle = computed(() => (gradient.value ? `background: ${gradient.value}` : ''))
</script>

<template>
  <div class="flex flex-col gap-3">
    <ColorPicker v-model="gradient" variant="gradient" />
    <div class="h-32 w-full rounded border border-oc-gray-200" :style="bgStyle" />
  </div>
</template>
