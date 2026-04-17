<script setup>
import { Button } from '@/orchidui-core'

defineProps({
  /** Alt text and caption shown below the logo image. */
  title: String,
  /** URL of the logo image. */
  image: String,
  /** Extra CSS class applied to the `<img>` element. */
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
