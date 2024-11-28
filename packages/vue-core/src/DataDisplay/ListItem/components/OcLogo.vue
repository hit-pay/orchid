<script setup lang="ts">
import { Button } from '@orchidui/vue-core'

defineProps({
  title: String,
  image: String,
  imageClass: String
})
</script>

<template>
  <div class="p-5 rounded border border-gray-200 max-w-[156px]">
    <img :src="image" :class="imageClass" :alt="title" class="object-contain" />
    <div class="text-oc-text-400 mt-4">
      {{ title }}
    </div>

    <slot />
  </div>
</template>
