<script setup>
import { Icon } from '@orchidui/vue'
defineProps({
  isSaved: Boolean
})
defineEmits(['back'])
</script>
<template>
  <div class="flex items-center">
    <slot>
      <slot name="before" />
      <span
        v-if="isSaved"
        class="text-oc-text-100 flex items-center cursor-pointer"
        @click="$emit('back')"
      >
        <Icon name="chevron-down" class="rotate-90" />
        Back
      </span>
      <span v-else class="text-oc-text-300 text-sm md:text-base"> Unsaved changes </span>
      <slot name="after" />
    </slot>
  </div>
</template>
