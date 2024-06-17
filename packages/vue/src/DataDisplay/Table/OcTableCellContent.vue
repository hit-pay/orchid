<script setup>
defineProps({
  important: Boolean,
  title: String,
  description: String,
  href: String,
  link: String
})

import { TableLink } from '@/orchidui'
</script>

<template>
  <TableLink
    :link="!href ? link : ''"
    class="flex flex-col gap-y-1 whitespace-nowrap overflow-hidden w-full"
  >
    <span
      class="overflow-hidden text-ellipsis text-oc-text truncate"
      :class="important ? 'font-medium' : 'font-regular'"
    >
      <a v-if="href" :href="href" target="_blank" rel="noopener noreferrer">
        {{ title }}
      </a>
      <template v-else>{{ title }}</template>
      <span v-if="!title">-</span>
    </span>
    <span class="overflow-hidden text-ellipsis text-oc-text-400 text-sm truncate">
      <slot name="description" :description="description">
        {{ description }}
      </slot>
      <span v-if="!description">-</span>
    </span>
  </TableLink>
</template>
