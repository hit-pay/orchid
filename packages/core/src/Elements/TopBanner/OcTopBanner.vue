<script setup>
import { Button, Icon } from '@/orchidui-core'

defineProps({
  title: {
    type: String,
    default: ''
  },
  buttonLabel: String
})

defineEmits(['click:button'])
</script>

<template>
  <div class="w-screen relative h-[40px] bg-oc-warning-300 flex items-center justify-center">
    <span class="text-sm font-medium">
      {{ title }}
    </span>

    <Button
      v-if="buttonLabel"
      class="absolute right-9"
      size="small"
      is-transparent
      @click="$emit('click:button')"
    >
      <span class="flex items-center gap-2 underline">
        {{ buttonLabel }} <Icon name="arrow-right" width="9" height="9" />
      </span>
    </Button>
  </div>
</template>
