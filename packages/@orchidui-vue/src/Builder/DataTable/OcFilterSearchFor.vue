<script setup>
import { computed } from "vue";
import { TableHeader, Chip } from "@/orchidui";
const props = defineProps({
  filters: Object,
  queries: Object,
});
defineEmits({
  removeQuery: [],
  removeFilter: [],
  removeAll: [],
});

const filterData = computed(() => {
  console.log(props.filters);
  return props.filters;
});
</script>

<template>
  <TableHeader class="!w-full !justify-start !bg-oc-bg-light">
    <div class="flex gap-1 items-center normal-case flex-wrap">
      <span class="pr-2 text-sm font-medium text-oc-text">Search for:</span>
      <Chip
        v-for="query in queries"
        :key="query"
        variant="accent-1"
        closable
        :label="query"
        @remove="$emit('removeQuery', query)"
      />
      <Chip
        v-for="item in filterData"
        :key="item.name"
        variant="accent-1"
        closable
        :label="item.label"
        @remove="$emit('removeFilter', item.name)"
      />
      <Chip
        variant="gray"
        class="cursor-pointer"
        label="Clear all"
        @click="$emit('removeAll')"
      />
    </div>
  </TableHeader>
</template>
