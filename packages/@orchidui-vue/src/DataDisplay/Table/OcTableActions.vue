<script setup>
import TableHeader from "./OcTableHeader.vue";
import { defineAsyncComponent, ref } from "vue";
import TableActionSearch from "./OcTableActionSearch.vue";

const Tabs = defineAsyncComponent(() =>
  import("../../Disclosure/Tabs/OcTabs.vue"),
);
const Button = defineAsyncComponent(() =>
  import("../../Form/Button/OcButton.vue"),
);
defineEmits({
  addQuery: [],
});
defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
});
const activeTab = ref("");
const isSortDescending = ref(true);
</script>

<template>
  <div class="flex justify-between">
    <TableHeader
      class="!bg-oc-bg-light rounded-t-l flex-1 items-center flex !justify-start"
    >
      <Tabs v-model="activeTab" variant="pills" :tabs="tabs" />
    </TableHeader>

    <TableHeader
      class="!bg-oc-bg-light !text-base rounded-t-r flex gap-x-3 items-center"
    >
      <TableActionSearch @add-query="$emit('addQuery', $event)" />

      <Button
        variant="secondary"
        left-icon="sort-descending"
        :icon-class="[
          !isSortDescending && '-scale-y-100',
          'transition-all duration',
        ]"
        @click="isSortDescending = !isSortDescending"
      />
    </TableHeader>
  </div>
</template>
