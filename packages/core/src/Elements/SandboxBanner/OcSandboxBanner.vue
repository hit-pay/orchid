<script setup>
import { Chip, Button } from '@/orchidui-core'

defineProps({
  /** Text shown in the center of the banner bar. */
  title: {
    type: String,
    default: ''
  },
  /** Props forwarded to the Chip shown on the left side. Pass `null` to hide. */
  chipProps: {
    type: Object,
    default: () => null
  },
  /** Props forwarded to the Button shown on the right side. Pass `null` to hide. */
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
