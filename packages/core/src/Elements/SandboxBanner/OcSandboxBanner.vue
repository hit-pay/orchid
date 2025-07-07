<script setup lang="ts">
import { Chip } from '@/orchidui-core'

defineProps({
  title: {
    type: String,
    default: ''
  },
  chipProps: {
    type: Object,
    default: () => null
  },
  buttonProps: {
    type: Object,
    default: () => null
  }
})
</script>

<template>
  <div
    class="w-screen relative h-[40px] bg-oc-accent-3 flex items-center justify-center text-white"
  >
    <span class="text-sm">
      {{ title }}
    </span>

    <Chip v-if="chipProps" class="absolute left-[40px]" v-bind="chipProps" />

    <Button v-if="buttonProps" class="absolute right-[32px]" v-bind="buttonProps" />
  </div>
</template>
