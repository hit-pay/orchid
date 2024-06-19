<script setup>
import { Button } from '@/orchidui'
defineProps({
  section: Object
})
defineEmits(['add', 'customize'])
</script>
<template>
  <div class="flex flex-col">
    <div class="w-full relative group">
      <div
        class="w-full h-full bg-black/25 absolute top-0 left-0 hidden group-hover:flex rounded-lg"
      >
        <div class="w-full px-6 gap-3 m-auto flex">
          <Button
            class="w-1/2"
            variant="secondary"
            label="Customize"
            size="small"
            @click="$emit('customize', section)"
          />
          <Button class="w-1/2" label="Add" size="small" @click="$emit('add', section)" />
        </div>
      </div>
      <img class="w-full" :src="section.preview" :alt="section.title" />
    </div>
    <div class="mt-4 text-md text-center">
      {{ section.title }}
    </div>
  </div>
</template>
