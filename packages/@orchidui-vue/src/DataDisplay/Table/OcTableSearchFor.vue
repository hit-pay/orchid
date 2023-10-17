<script setup>
import TableHeader from "./OcTableHeader.vue";
import { defineAsyncComponent } from "vue";

const Chip = defineAsyncComponent(() =>
  import("../../Feedback/Chip/OcChip.vue"),
);
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
        variant="grey"
        closable
        :label="query"
        @remove="$emit('removeQuery', query)"
      />
    </div>
  </TableHeader>
</template>
