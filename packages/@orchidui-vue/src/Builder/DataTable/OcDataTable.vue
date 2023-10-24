<script setup>
import { Table, Pagination, Select, Tabs } from "@orchid";
import { ref, computed } from "vue";
const props = defineProps({
  options: {
    type: Object,
  },
});
const { paginationOptions, tableOptions, filter, filterOptions } =
  props.options;

const activeTab = ref(filter.tabs);
const currentPage = ref(filter.current_page);
const perPage = ref({
  label: filter.per_page,
  value: filter.per_page,
});

const perPageOptions = computed(() => {
  let page = 10;
  let per_page_option = [
    {
      label: page.toString(),
      value: page,
    },
    {
      label: (page * 2).toString(),
      value: page * 2,
    },
    {
      label: paginationOptions.total.toString(),
      value: paginationOptions.total,
    },
  ];
  const maxLength =
    paginationOptions.total < 100 ? paginationOptions.total : 100;
  return [
    ...new Set(
      per_page_option.filter((p) => {
        return p.value <= maxLength;
      }),
    ),
  ];
});

const applyFilter = () => {
  // currentPage : filterOptions.current_page.key
  // perPage : filterOptions.per_page.key
  // activeTab : filterOptions.tabs.key
  // filterForm : filterOptions.form
  // emit filter changed
};
</script>
<template>
  <div class="flex flex-col">
    <div class="flex gap-3 items-center my-5">
      <Tabs
        v-model="activeTab"
        :tabs="filterOptions.tabs.options"
        :variant="'pills'"
        @update:model-value="applyFilter"
      />
    </div>
    <slot name="table">
      <Table :options="tableOptions"></Table>
    </slot>
    <div class="flex gap-3 items-center m-5">
      <Pagination
        v-model="currentPage"
        class="justify-center md:justify-start"
        :max-page="paginationOptions.last_page"
        total-visible="5"
        @update:model-value="applyFilter"
      />
      <div class="hidden md:flex items-center">
        <div class="min-w-[100px]">Item per page:</div>
        <Select v-model="perPage" :options="perPageOptions" />
      </div>
    </div>
  </div>
</template>
