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
  loading: Boolean,
  id: {
    type: String,
    required: true,
  },
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
const filterTab = ref(props.filter[filterOptions.value?.tabs?.key]);
const currentPage = ref(props.filter.page);
const perPage = ref(props.filter.per_page);
const defaultQuery = props.filter[filterOptions.value?.search?.key] ?? [];
const queries = ref(defaultQuery ? defaultQuery.split(",") : []);
const isSearchExpanded = ref(false);

const searchExpanded = computed(() => {
  return filterOptions.value.tabs || isSearchExpanded.value;
});

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
      label: (page * 3)?.toString(),
      value: page * 3,
    },
    {
      label: (page * 4)?.toString(),
      value: page * 4,
    },
    {
      label: (page * 6)?.toString(),
      value: page * 6,
    },
    {
      label: (page * 8)?.toString(),
      value: page * 8,
    },
    {
      label: (page * 10)?.toString(),
      value: page * 10,
    },
  ];
  const maxLength = pagination.value.total < 100 ? pagination.value.total : 100;
  let opt = per_page_option;
  if (maxLength > 10) {
    opt = per_page_option.filter((p) => {
      return p.value <= maxLength;
    });
  }
  return [...new Set(opt)];
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

const changePage = () => {
  applyFilter(null, currentPage.value);
};

const filterData = ref({});

const applyFilter = (filterForm = null, isChangePage = false) => {
  if (!isChangePage) {
    currentPage.value = 1;
  }
  filterData.value.page = currentPage.value;
  filterData.value.per_page = perPage.value;

  if (filterOptions.value.tabs) {
    filterData.value[filterOptions.value.tabs.key] = filterTab.value;
  }
  if (filterOptions.value.search) {
    filterData.value[filterOptions.value.search.key] = queries.value.join();
  }
  if (filterForm) {
    filterData.value = { ...filterData.value, ...filterForm };
  }
  emit("update:filter", filterData.value);
};
</script>
<template>
  <div class="flex flex-col gap-3">
    <Table v-if="!loading" v-model="selectedRows" :options="tableOptions">
      <template #before>
        <slot name="before" />
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
              @update:model-value="applyFilter(null)"
            />
          </div>
          <div
            class="flex gap-3 absolute bg-oc-bg-light right-0"
            :class="{
              'w-fit': searchExpanded,
              'w-full': isSearchExpanded,
              'hidden md:flex': selectedRows.length > 0,
            }"
          >
            <FilterSearch
              v-if="filterOptions.search"
              :is-width-variant="!filterOptions.tabs"
              @add-query="addQuery"
              @toggle="isSearchExpanded = $event"
            />
            <FilterForm
              v-if="filterOptions.form"
              :id="id"
              :json-form="filterOptions.form ?? []"
              :values="props.filter"
              @apply-filter="applyFilter($event)"
            >
              <template #default="{ errors, values, jsonForm, updateForm }">
                <slot
                  name="custom-filter-form"
                  :errors="errors"
                  :values="values"
                  :json-form="jsonForm"
                  :update-filter="updateForm"
                ></slot>
              </template>
            </FilterForm>
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
      <template #after>
        <slot name="after" />
      </template>
    </Table>
    <div
      v-if="pagination.total > 0"
      class="flex gap-3 items-center m-3 md:mx-0"
    >
      <Pagination
        v-model="currentPage"
        class="justify-center"
        :max-page="pagination.last_page"
        total-visible="5"
        @update:model-value="changePage"
      />
      <div class="hidden md:flex items-center">
        <Select
          v-model="perPage"
          label="Item per page"
          is-inline-label
          :options="perPageOptions"
          @update:model-value="applyFilter(null)"
        />
      </div>
    </div>
  </div>
</template>
