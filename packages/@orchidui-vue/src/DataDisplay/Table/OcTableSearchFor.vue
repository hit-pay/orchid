<script setup>
import { TableHeader, Chip } from  '@orchid'
defineProps({
  queries: Array,
});
defineEmits({
  removeQuery: [],
});
</script>

<template>
  <TableHeader class="!w-full !justify-start !bg-oc-bg-light">
    <div class="flex gap-1 items-center normal-case flex-wrap">
      <span class="pr-2 text-sm font-medium text-oc-text">Search for:</span>
      <Chip
        v-for="query in queries"
        :key="query"
        variant="gray"
        closable
        :label="query"
        @remove="$emit('removeQuery', query)"
      />
    </div>
  </TableHeader>
</template>
