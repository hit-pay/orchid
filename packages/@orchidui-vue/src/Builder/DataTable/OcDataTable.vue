<script setup>
import {
  Table,
  Pagination,
  Select,
  Tabs,
  FilterSearch,
  FilterSearchFor,
  FilterForm,
  Button,
  Dropdown,
} from "@/orchidui";
import { ref, computed } from "vue";

const props = defineProps({
  isLoading: Boolean,
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

const emit = defineEmits({
  "update:filter": [],
  "click:row": [],
});

const pagination = computed(() => {
  return props.options?.pagination;
});

const tableOptions = computed(() => {
  return props.options?.tableOptions;
});

const filterOptions = computed(() => {
  return props.options?.filterOptions;
});

const isDropdownOpened = ref(false);
const selectedRows = ref([]);
const filterTab = ref(props.filter[filterOptions.value?.tabs?.key]);
const currentPage = ref(props.filter.page);
const perPage = ref(props.filter.per_page);
const defaultQuery =
  props.filter[filterOptions.value?.search?.key]?.trim() ?? "";
const queries = ref(defaultQuery ? defaultQuery.split(",") : []);
const isSearchExpanded = ref(false);

const perPageOptions = computed(() => {
  let per_page_option = [
    {
      label: "5",
      value: 5,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "15",
      value: 15,
    },
    {
      label: "20",
      value: 20,
    },
    {
      label: "25",
      value: 25,
    },
    {
      label: "40",
      value: 40,
    },
    {
      label: "50",
      value: 50,
    },
    {
      label: "75",
      value: 75,
    },
    {
      label: "99",
      value: 99,
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

const addQuery = (query) => {
  if (!query.trim() || queries.value.includes(query)) return;
  if (!filterOptions.value) {
    queries.value = [query];
  } else {
    queries.value.push(query);
  }
  applyFilter();
};
const removeQuery = (query) => {
  queries.value = queries.value.filter((q) => q !== query);
  applyFilter();
};

const filterData = ref(props.filter ?? {});

const removeAllQueryFilter = () => {
  queries.value = [];
  filterData.value = {
    page: 1,
    per_page: perPage.value,
  };
  applyFilter();
};

const changePage = () => {
  applyFilter(null, currentPage.value);
};

const applyFilter = (filterForm = null, isChangePage = false) => {
  if (!isChangePage) {
    currentPage.value = 1;
  }
  filterData.value.page = currentPage.value;
  filterData.value.per_page = perPage.value;

  if (filterOptions.value?.tabs) {
    filterData.value[filterOptions.value.tabs.key] = filterTab.value;
  }
  if (filterOptions.value?.search) {
    filterData.value[filterOptions.value.search.key] = queries.value.join();
  }
  if (filterForm) {
    filterData.value = { ...filterData.value, ...filterForm };
  }
  emit("update:filter", filterData.value);
};

const displayFilterData = computed(() => {
  if (filterData.value) {
    let display = [];
    Object.keys(filterData.value).forEach((name) => {
      if (
        name !== "page" &&
        name !== "per_page" &&
        name !== filterOptions.value.tabs.key &&
        name !== filterOptions.value.search.key
      ) {
        const option = filterOptions.value.form.find((f) => f.name === name);
        if (filterData.value[name]) {
          display.push({
            label: `${option.props.label} : ${filterData.value[name]}`,
            name: name,
          });
        }
      }
    });
    return display;
  }
  return [];
});
</script>
<template>
  <div class="flex flex-col gap-3">
    <Table
      v-if="tableOptions"
      v-model="selectedRows"
      :options="tableOptions"
      :is-loading="isLoading"
      :loading-rows="perPage"
      @click:row="$emit('click:row', $event)"
    >
      <template #before>
        <slot name="before" />
        <div class="flex items-center m-5 relative min-h-[30px]">
          <template v-if="filterOptions">
            <div v-if="showBulkAction" class="flex gap-3 items-center">
              <slot name="bulk-actions" :selected-rows="selectedRows" />
            </div>
            <div v-else class="flex gap-3">
              <Tabs
                v-if="filterOptions?.tabs"
                v-model="filterTab"
                :tabs="filterOptions.tabs.options"
                :variant="'pills'"
                @update:model-value="applyFilter(null)"
              />
            </div>
          </template>
          <div
            class="flex gap-3 absolute bg-oc-bg-light right-0"
            :class="
              !filterOptions
                ? 'w-full justify-end'
                : isSearchExpanded
                ? 'md:w-fit w-full'
                : ''
            "
          >
            <FilterSearch
              v-if="filterOptions?.search"
              :is-search-only="!filterOptions.tabs"
              @add-query="addQuery"
              @toggle="isSearchExpanded = $event"
            />
            <Dropdown
              v-if="filterOptions?.form"
              v-model="isDropdownOpened"
              :distance="9"
            >
              <Button
                :is-active="isDropdownOpened"
                variant="secondary"
                left-icon="filter"
              />

              <template #menu>
                <FilterForm
                  v-if="isDropdownOpened"
                  :id="id"
                  :json-form="filterOptions.form ?? []"
                  :values="props.filter"
                  @apply-filter="applyFilter($event)"
                  @cancel="isDropdownOpened = false"
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
              </template>
            </Dropdown>
          </div>
        </div>
        <FilterSearchFor
          :filters="displayFilterData"
          :queries="queries"
          class="border-t border-oc-gray-200"
          @remove-query="removeQuery"
          @remove-all="removeAllQueryFilter"
          @remove-filter="applyFilter($event)"
        />
      </template>
      <template
        v-for="(header, key) in tableOptions?.headers"
        #[header.key]="{ data, item }"
        :key="key"
      >
        <slot :name="header.key" :data="data" :item="item"></slot>
      </template>
      <template #after>
        <slot name="after" />
      </template>
    </Table>
    <div
      v-if="pagination?.total > 0"
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
