<script setup>
import { ColorPicker } from '@orchidui/dashboard'
import { Icon } from '@orchidui/core'
import { ref } from 'vue'

const color = ref('#3B82F6')
</script>

<template>
  <div class="flex flex-col gap-3">
    <ColorPicker v-model="color">
      <template #leading>
        <Icon name="paint" />
      </template>
    </ColorPicker>
    <p class="text-sm text-oc-text-400 font-mono">{{ color }}</p>
  </div>
</template>
