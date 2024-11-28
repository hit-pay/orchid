<script setup lang="ts">
import { ListUrl, Icon, Dropdown } from '@orchidui/vue'
import { ref } from 'vue'

defineProps({
  urls: {
    type: Array,
    default: () => []
  },
  title: String,
  date: String
})
defineEmits(['more'])
const isOpen = ref(false)
</script>

<template>
  <div
    class="px-5 py-4 flex flex-col gap-y-5 rounded border border-gray-200 group hover:shadow-normal"
  >
    <div class="flex items-center justify-between">
      <div class="flex text-sm text-oc-text-400 items-center gap-x-2">
        <span v-if="title" class="text-base text-oc-text font-medium">
          {{ title }}
        </span>
        -
        <span v-if="date">{{ date }}</span>
      </div>
      <Dropdown v-model="isOpen">
        <Icon
          name="dots-vertical"
          class="opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded"
          @click="$emit('more')"
        />
        <template #menu>
          <div @mouseleave="isOpen = false">
            <slot name="menu" />
          </div>
        </template>
      </Dropdown>
    </div>
    <div v-if="urls?.length" class="flex flex-col gap-y-3">
      <ListUrl v-for="(url, i) in urls" :key="i" :title="url.title" :url="url.url" />
    </div>
  </div>
</template>
