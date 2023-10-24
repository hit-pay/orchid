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
import { ref, computed } from "vue";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  filter: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:filter"]);

const pagination = computed(() => {
  return props.options.pagination;
});

const tableOptions = computed(() => {
  return props.options.tableOptions;
});

const filterOptions = computed(() => {
  return props.options.filterOptions;
});

const selectedRows = ref([]);
const filterTab = ref(props.filter.tabs);
const currentPage = ref(props.filter.current_page);
const perPage = ref({
  label: props.filter.per_page,
  value: props.filter.per_page,
});
const queries = ref([]);

const isSearchExpanded = ref(false);

const perPageOptions = computed(() => {
  let page = 10;
  let per_page_option = [
    {
      label: page?.toString(),
      value: page,
    },
    {
      label: (page * 2)?.toString(),
      value: page * 2,
    },
    {
      label: pagination.value.total.toString(),
      value: pagination.value.total,
    },
  ];
  const maxLength = pagination.value.total < 100 ? pagination.value.total : 100;
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

const filterEnabled = computed(() => {
  return (
    selectedRows.value.length > 0 ||
    filterOptions.value.tabs ||
    filterOptions.value.search ||
    filterOptions.value.form
  );
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
  if (filterOptions.value.current_page) {
    filterData[filterOptions.value.current_page.key] = currentPage.value;
  }
  if (filterOptions.value.per_page) {
    filterData[filterOptions.value.per_page.key] = perPage.value.value;
  }
  if (filterOptions.value.tabs) {
    filterData[filterOptions.value.tabs.key] = filterTab.value;
  }
  if (filterOptions.value.search) {
    filterData[filterOptions.value.search.key] = queries.value.join();
  }
  emit("update:filter", filterData);
};
</script>
<template>
  <div class="flex flex-col gap-3">
    <Table v-model="selectedRows" :options="tableOptions">
      <template #before>
        <div
          v-if="filterEnabled"
          class="flex items-center m-5 relative min-h-[30px]"
        >
          <div v-if="showBulkAction" class="flex gap-3 items-center">
            <slot name="bulk-actions" :selected-rows="selectedRows" />
          </div>
          <div v-else class="flex gap-3">
            <Tabs
              v-if="filterOptions.tabs"
              v-model="filterTab"
              :tabs="filterOptions.tabs.options"
              :variant="'pills'"
              @update:model-value="applyFilter"
            />
          </div>
          <div
            class="flex gap-3 absolute bg-oc-bg-light right-0"
            :class="isSearchExpanded ? 'md:w-fit w-full' : ''"
          >
            <FilterSearch
              v-if="filterOptions.search"
              @add-query="addQuery"
              @toggle="isSearchExpanded = $event"
            />
            <FilterForm v-if="filterOptions.form" />
          </div>
        </div>
        <FilterSearchFor
          v-if="queries.length"
          :queries="queries"
          class="border-t border-oc-gray-200"
          @remove-query="removeQuery"
        />
      </template>
      <template
        v-for="header in tableOptions.headers"
        #[header.key]="{ data, item }"
      >
        <slot :name="header.key" :data="data" :item="item"></slot>
      </template>
    </Table>
    <div class="flex gap-3 items-center m-3 md:mx-0">
      <Pagination
        v-model="currentPage"
        class="justify-center md:justify-start"
        :max-page="pagination.last_page"
        total-visible="5"
        @update:model-value="applyFilter"
      />
      <div class="hidden md:flex items-center">
        <div class="min-w-[100px] mr-2">Item per page :</div>
        <Select
          v-model="perPage"
          :options="perPageOptions"
          @update:model-value="applyFilter"
        />
      </div>
    </div>
  </div>
</template>
