<script setup>
import {
  Table,
  Pagination,
  Select,
  Tabs,
  FilterSearch,
  FilterSearchFor,
  FilterForm,
} from "@orchid";
import { ref, computed, defineEmits } from "vue";

const props = defineProps({
  options: {
    type: Object,
  },
});

const emit = defineEmits(["update:filter"]);

const { paginationOptions, tableOptions, filter, filterOptions } =
  props.options;

const selectedRows = ref([]);
const activeTab = ref(filter.tabs);
const currentPage = ref(filter.current_page);
const perPage = ref({
  label: filter.per_page,
  value: filter.per_page,
});
const queries = ref([]);

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


const showBulkAction = computed(() => {
  return selectedRows.value.length > 0;
});

const addQuery = (query) => {
  if (!query.trim() || queries.value.includes(query)) return;
  queries.value.push(query);
  applyFilter();
};
const removeQuery = (query) => {
  queries.value = queries.value.filter((q) => q !== query);
  applyFilter();
};

const applyFilter = () => {
  let filterData = {};
  if (filterOptions.current_page) {
    filterData[filterOptions.current_page.key] = currentPage.value;
  }
  if (filterOptions.per_page) {
    filterData[filterOptions.per_page.key] = perPage.value.value;
  }
  if (filterOptions.tabs) {
    filterData[filterOptions.tabs.key] = activeTab.value;
  }
  if (filterOptions.search) {
    filterData[filterOptions.search.key] = queries.value.join();
  }
  emit("update:filter", filterData);
};
</script>
<template>
  <div class="flex flex-col gap-3">
    <Table v-model="selectedRows" :options="tableOptions">
      <template #before>
        <div class="flex items-center m-5 relative">
          <div v-if="showBulkAction" class="flex gap-3 items-center">
            <slot name="bulk-actions" :selected-rows="selectedRows" />
          </div>
          <div v-else class="flex gap-3">
            <Tabs
              v-model="activeTab"
              :tabs="filterOptions.tabs.options"
              :variant="'pills'"
              @update:model-value="applyFilter"
            />
          </div>
          <div class="flex gap-3 absolute right-0">
            <FilterSearch @add-query="addQuery" />
            <FilterForm />
          </div>
        </div>
        <FilterSearchFor
          v-if="queries.length"
          :queries="queries"
          @remove-query="removeQuery"
        />
      </template>
      <template 
          v-for="header in tableOptions.headers" 
          #[header.key]="{data, item}">
          <slot :name="header.key" :data="data" :item="item"> </slot>
      </template>
    </Table>
    <div class="flex gap-3 items-center m-3 md:mx-0">
      <Pagination
        v-model="currentPage"
        class="justify-center md:justify-start"
        :max-page="paginationOptions.last_page"
        total-visible="5"
        @update:model-value="applyFilter"
      />
      <div class="hidden md:flex items-center">
        <div class="min-w-[100px] mr-2">Item per page : </div>
        <Select
          v-model="perPage"
          :options="perPageOptions"
          @update:model-value="applyFilter"
        />
      </div>
    </div>
  </div>
</template>
