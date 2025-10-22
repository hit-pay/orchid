<script setup>
import { Button, Icon, Chip } from '@/orchidui-core'

defineProps({
  chipProps: {
    type: Object,
    required: false,
    default: null
  },
  title: {
    type: String,
    default: ''
  },
  rawHtml: {
    type: String,
    default: null
  },
  buttonLabel: String,
  titleClass: String
})

defineEmits(['click:button'])
</script>

<template>
  <div class="w-screen relative bg-oc-warning-300 flex items-center justify-center px-5">
    <Chip
      v-if="chipProps"
      v-bind="chipProps"
    />

    <div class="flex-1 flex flex-col items-center md:flex-row gap-3 md:gap-5">
      <span v-if="title" :class="['text-sm font-medium flex-1', titleClass]">
        {{ title }}
      </span>

      <div
        v-else-if="rawHtml"
        :class="['text-sm font-medium flex-1', titleClass]"
        v-html="rawHtml"
      />

      <Button
        v-if="buttonLabel"
        class="md:ml-auto mr-auto"
        size="small"
        is-transparent
        @click="$emit('click:button')"
      >
        <span class="flex items-center gap-2 underline">
          {{ buttonLabel }} <Icon name="arrow-right" width="9" height="9" />
        </span>
      </Button>
    </div>
  </div>
</template>
