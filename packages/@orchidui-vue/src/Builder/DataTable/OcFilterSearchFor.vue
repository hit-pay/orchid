<script setup>
import { computed } from "vue";
import { TableHeader, Chip } from "@/orchidui";
const props = defineProps({
  filters: Object,
  queries: Object,
});
const emit = defineEmits({
  removeQuery: [],
  removeFilter: [],
  removeAll: [],
});

const filterData = computed(() => {
  let filterData = [];
  props.filters.forEach((filter) => {
    if (filter.multiNames) {
      const exist = filterData.find((f) => f.name === filter.multiNames[0]);
      if (!exist) {
        filterData.push(filter);
      } else {
        exist.label = exist.label + filter.label;
      }
    }
  });
  return filterData;
});

const removeFilter = (name, multiNames) => {
  let filter = {};
  filter[name] = "";
  if (multiNames) {
    multiNames.forEach((filterName) => {
      let multifilter = {};
      multifilter[filterName] = "";
      emit("removeFilter", multifilter, filterName);
    });
  } else {
    emit("removeFilter", filter, name);
  }
};
</script>

<template>
  <TableHeader
    v-if="filterData.length > 0 || queries.length > 0"
    class="!w-full !justify-start !bg-oc-bg-light"
  >
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
        @remove="removeFilter(item.name, item.multiNames)"
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
