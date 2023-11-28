<script setup>
defineProps({
  important: Boolean,
  title: String,
  description: String,
  href: String,
});
</script>

<template>
  <div class="flex flex-col gap-y-1 whitespace-nowrap overflow-hidden">
    <span
      class="overflow-hidden text-ellipsis text-oc-text"
      :class="important ? 'font-medium' : 'font-regular'"
    >
      <a v-if="href" :href="href" target="_blank" rel="noopener noreferrer">{{ title }}</a>
      <template v-else>{{ title }}</template>
      <span v-if="!title">-</span>
    </span>
    <span class="overflow-hidden text-ellipsis text-oc-text-400 text-sm">
      {{ description }}
      <span v-if="!description">-</span>
    </span>
  </div>
</template>
