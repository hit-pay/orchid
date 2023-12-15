<script setup>
import {
  Table,
  Pagination,
  PrevNext,
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
  selected: {
    type: Array,
    required: false,
  },
  rowKey: {
    type: String,
    Function,
    default: "id",
  },
});

const emit = defineEmits({
  "update:selected": [],
  "update:filter": [],
  "click:row": [],
  "filter-fields-changed": [],
  "filter-removed": [],
  "search-query-changed": [],
});

const paginationOption = computed(() => {
  return props.options?.pagination;
});

const cursorOption = computed(() => {
  return props.options?.cursor;
});

const tableOptions = computed(() => {
  return props.options?.tableOptions;
});

const filterOptions = computed(() => {
  return props.options?.filterOptions;
});

const isDropdownOpened = ref(false);
const filterTab = ref(props.filter[filterOptions.value?.tabs?.key]);
const currentPage = ref(props.filter.page);
const perPage = ref(
  filterOptions.value?.per_page?.key
    ? props.filter[filterOptions.value?.per_page?.key]
    : props.filter.per_page
);
const defaultQuery =
  props.filter[filterOptions.value?.search?.key]?.trim() ?? "";
const queries = ref(defaultQuery ? defaultQuery.split(",") : []);
const isSearchExpanded = ref(false);

const perPageOptions = computed(() => {
  let per_page_option = [
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
  let opt = per_page_option;
  if (paginationOption.value) {
    const maxLength =
      paginationOption.value.total < 100 ? paginationOption.value.total : 100;
    if (maxLength > 10) {
      opt = per_page_option.filter((p) => {
        return p.value <= maxLength;
      });
    }
  }
  return [...new Set(opt)];
});

const showBulkAction = computed(() => {
  return props.selected?.length > 0;
});

const addQuery = (query) => {
  if (!query.trim() || queries.value.includes(query)) return;
  if (!filterOptions.value) {
    queries.value = [query];
  } else {
    queries.value.push(query);
  }
  applyFilter();
  emit("search-query-changed", query);
};
const removeQuery = (query) => {
  queries.value = queries.value.filter((q) => q !== query);
  applyFilter();
};
const defaultFilterData = props.filter;
if (!defaultFilterData && paginationOption) {
  defaultFilterData.page = 1;
} else if (!defaultFilterData && cursorOption) {
  defaultFilterData.cursor = "";
}
const filterData = ref(defaultFilterData);

const removeAllQueryFilter = () => {
  queries.value = [];

  const defaultFilters = {};

  if (filterOptions.value) {
    defaultFilterData.page = 1;
  } else {
    defaultFilterData.cursor = "";
  }

  if (filterOptions.value?.per_page?.key) {
    defaultFilters[filterOptions.value?.per_page?.key] = perPage.value;
  } else {
    defaultFilters.per_page = perPage.value;
  }
  if (filterOptions.value?.tabs?.key) {
    defaultFilters[filterOptions.value?.tabs?.key] = filterTab.value;
  } else {
    defaultFilters.tabs = filterTab.value;
  }

  filterData.value = defaultFilters;

  applyFilter();
};

const changePage = () => {
  applyFilter(null, currentPage.value);
};

const applyFilter = (
  filterForm = null,
  isChangePage = false,
  changeCursor = ""
) => {
  if (paginationOption.value && !isChangePage) {
    currentPage.value = 1;
  }
  if (paginationOption.value) {
    filterData.value.page = currentPage.value;
  } else {
    filterData.value.cursor = changeCursor;
  }

  if (filterOptions.value?.per_page) {
    filterData.value[filterOptions.value.per_page.key] = perPage.value;
  } else {
    filterData.value.per_page = perPage.value;
  }

  if (filterOptions.value?.tabs) {
    filterData.value[filterOptions.value.tabs.key] = filterTab.value;
  }
  if (filterOptions.value?.search) {
    filterData.value[filterOptions.value.search.key] = queries.value.join();
  }

  if (filterForm) {
    isDropdownOpened.value = false;
    filterData.value = { ...filterData.value, ...filterForm };
  }
  emit("update:filter", filterData.value);
};

const removeFilter = (filter, field) => {
  applyFilter(filter);
  emit("filter-removed", field);
};

const displayFilterData = computed(() => {
  if (filterData.value) {
    let display = [];

    Object.keys(filterData.value).forEach((name) => {
      const filterTabKey = filterOptions.value?.tabs?.key;
      const filterSearchKey = filterOptions.value?.search?.key;
      const filterPerPageKey = filterOptions.value?.per_page?.key ?? "per_page";
      if (
        name !== "page" &&
        name !== "cursor" &&
        name !== filterPerPageKey &&
        name !== filterTabKey &&
        name !== filterSearchKey
      ) {
        let option = filterOptions.value.form?.find((f) => {
          if (typeof f.name === "object") {
            let isSelectedOption = false;
            f.name.forEach((formName) => {
              if (formName.key === name) {
                isSelectedOption = true;
              }
            });
            return isSelectedOption;
          } else {
            return f.name === name;
          }
        });
        if (filterData.value[name]) {
          let optionLabel = filterData.value[name];

          if (option?.props.options) {
            const selectedValuesInArray = option.props.multiple
              ? filterData.value[name]
              : [filterData.value[name]];

            optionLabel = selectedValuesInArray
              .map(
                (selectedValue) =>
                  option.props.options.find(
                    ({ value }) => value === selectedValue
                  ).label
              )
              .join(", ");
          }

          display.push({
            label: `${option?.props.label} : ${optionLabel}`,
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
  <div class="flex flex-col gap-9 relative">
    <Table
      v-if="tableOptions"
      :selected="selected"
      :row-key="rowKey"
      :options="tableOptions"
      :is-loading="isLoading"
      :loading-rows="perPage"
      :is-sticky="tableOptions.isSticky"
      class="min-h-[70vh]"
      @update:selected="$emit('update:selected', $event)"
      @click:row="$emit('click:row', $event)"
    >
      <template #before>
        <slot name="before" />
        <div class="flex items-center px-4 min-h-[52px]">
          <template v-if="filterOptions">
            <div v-if="showBulkAction" class="flex gap-5 items-center">
              <slot name="bulk-actions" :selected-rows="selected" />
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
            class="flex gap-3 absolute md:relative ml-auto bg-oc-bg-light right-4"
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
              placement="bottom-end"
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
                  :grid="filterOptions.grid ?? null"
                  :values="props.filter"
                  :actions="filterOptions.actions"
                  @apply-filter="applyFilter($event)"
                  @filter-fields-changed="emit('filter-fields-changed', $event)"
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
          @remove-filter="removeFilter"
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
      <template #empty>
        <slot name="empty" />
      </template>
    </Table>
    <div class="flex gap-3 items-center">
      <Pagination
        v-if="paginationOption"
        v-model="currentPage"
        class="justify-center"
        :max-page="paginationOption.last_page"
        total-visible="5"
        @update:model-value="changePage"
      />
      <div v-if="cursorOption" class="flex w-full gap-5">
        <PrevNext
          :disabled="!cursorOption.prev"
          @click="applyFilter(null, false, cursorOption.prev)"
        />
        <PrevNext
          :disabled="!cursorOption.next"
          is-next
          @click="applyFilter(null, false, cursorOption.next)"
        />
      </div>
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
