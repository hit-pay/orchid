<script setup>
import {
  FilterSearch,
  FilterSearchFor,
  FilterForm,
  Table,
  Pagination,
  PrevNext,
  Select,
  Tabs,
  Button,
  Dropdown,
} from '@/orchidui-core'
import { useDataTable } from './useDataTable.js'
import { ref, computed, onMounted, watch } from 'vue'
import ColumnEdit from './ColumnEdit.vue'

import {
  formatHeadersToLocalStorage,
  setInLocalStorage,
  getFromLocalStorage,
  formatHeadersFromLocalStorage
} from './utils/editColumnsUtils.js'

import {
  formatFilterDisplay,
  clearAllFilters as clearAllFiltersUtil
} from './utils/filterUtils.js'

import {
  getItemsPerPageOptions,
  formatCustomItemsPerPageOptions
} from './utils/paginationUtils.js'

import {
  saveFilterToLocalStorage as saveFilterToLocalStorageUtil,
  getFilterFromLocalStorage as getFilterFromLocalStorageUtil
} from './utils/storageUtils.js'

const props = defineProps({
  isLoading: Boolean,
  id: {
    type: String,
    required: true
  },
  options: {
    type: Object,
    required: true
  },
  filter: {
    type: Object,
    required: true
  },
  selected: {
    type: Array,
    required: false
  },
  rowClass: String,
  rowKey: {
    type: [String, Function],
    default: 'id'
  },
  rowLink: String,
  localDb: {
    type: Object,
    required: false
  },
})

const emit = defineEmits({
  'update:selected': [],
  'update:filter': [],
  'click:row': [],
  'filter-fields-changed': [],
  'filter-removed': [],
  'filter-open': [],
  'search-query-changed': [],
  'hover:cell': [],
  'columns-changed': [],
  'on-table-ready': []
})



const cursorOption = computed(() => props.options?.cursor)
const tableHeaders = ref()

const tableOptions = computed(() => props.options?.tableOptions)

const isLocalData = computed(() => props.localDb !== undefined)
const {
  localData,
    paginationData,
    isLoading: isLocalDataLoading,
    
    // Methods
    bulkPutLocalData,
    bulkDeleteLocalData,  
    getLocalDataUpdatedAt,
    getLocalDataIds,
    syncLocalData,
    sortByData,
    // toggleSort,

    // Setters
    setFilter,
    setSortBy,
} = useDataTable({
  name: props.localDb?.table_name,
  localDb: props.localDb?.db,
  options: props.localDb?.options,
})

watch(() => props.options?.pagination, (newVal) => {
  if(!isLocalData.value) {
    paginationData.value = newVal
  }
}, { deep: true, immediate: true })

if(isLocalData.value) {

  watch(() => props.filter, () => {
    setFilter(props.filter)
  }, { deep: true, immediate: true })

  watch(() => props.sortBy, () => {
    setSortBy(props.sortBy)
  }, { deep: true, immediate: true })

}


const processedTableOptions = computed(() => {
  const newTableOptions = {
    ...tableOptions.value,
    headers: tableHeaders.value
      ? tableHeaders.value
          .map((header) => {
            header.class = tableOptions.value?.headers.find((h) => h.key === header.key)?.class ?? ''
            return header
          })
          .filter((h) => h.isActive)
      : tableOptions.value?.headers.filter((h) => isColumnActive(h.key))
  }
  if(isLocalData.value) {
      newTableOptions.fields = localData.value
  }
  return newTableOptions
})
const filterOptions = computed(() => props.options?.filterOptions)

const hidePerPageDropdown = computed(() => props.options?.hidePerPageDropdown)

const isLastPage = computed(() => paginationData.value?.last_page === 1)

const isFilterDropdownOpen = ref(false)
const activeFilterTab = ref(props.filter[filterOptions.value?.tabs?.key])
const currentPage = ref(props.filter.page)
const itemsPerPage = ref(
  filterOptions.value?.per_page?.key
    ? props.filter[filterOptions.value?.per_page?.key]
    : props.filter.per_page
)
const defaultSearchQuery = props.filter[filterOptions.value?.search?.key]?.trim() ?? ''
const searchQueries = ref(defaultSearchQuery ? defaultSearchQuery.split(',') : [])
const isSearchExpanded = ref(false)

const customItemsPerPageOptions = computed(() =>
  formatCustomItemsPerPageOptions(props.options?.perPageOptions)
)

const itemsPerPageOptions = computed(() => {
  return getItemsPerPageOptions(customItemsPerPageOptions.value, paginationData.value)
})

const hasSelectedItems = computed(() => {
  return props.selected?.length > 0
})

const addSearchQuery = (query) => {
  if (!query.trim() || (!filterData.value.selectedSearchOption && searchQueries.value.includes(query)))
    return
  searchQueries.value = [query]
  applyFilter()
  emit('search-query-changed', query)
}

const removeSearchQuery = (query) => {
  searchQueries.value = searchQueries.value.filter((q) => q !== query)
  applyFilter()
}

const defaultFilterData = props.filter
if (!defaultFilterData && paginationData.value) {
  defaultFilterData.page = 1
} else if (!defaultFilterData && cursorOption) {
  defaultFilterData.cursor = ''
}
const filterData = ref(defaultFilterData)

const displayFilterData = computed(() => {
  return formatFilterDisplay(filterData.value, filterOptions.value)
})

const isColumnActive = (headerKey) =>
  filterData.value?.[filterOptions.value?.columnEdit?.key]?.active?.find((h) => h.key === headerKey)
    ?.isActive ?? true

const updateColumnOrder = ({ fixedHeaders, activeHeaders, isOnMount }) => {
  if (!filterData.value[filterOptions.value?.columnEdit?.key]) {
    filterData.value[filterOptions.value?.columnEdit?.key] = {}
  }
  filterData.value[filterOptions.value?.columnEdit?.key].fixed = fixedHeaders
  filterData.value[filterOptions.value?.columnEdit?.key].active = activeHeaders
  tableHeaders.value = [...fixedHeaders, ...activeHeaders]
  if (!isOnMount) {
    const data = formatHeadersToLocalStorage(fixedHeaders, activeHeaders)
    setInLocalStorage(filterOptions.value.columnEdit.localStorageKey, data)
  }
  emit('columns-changed', activeHeaders)
}

const initializeColumnOrder = () => {
  if (filterOptions.value?.columnEdit?.localStorageKey) {
    const columnEdit = getFromLocalStorage(filterOptions.value.columnEdit.localStorageKey)
    if (columnEdit) {
      const { fixed, active } = formatHeadersFromLocalStorage(
        columnEdit,
        tableOptions.value.headers,
        filterOptions.value.columnEdit.localStorageKey
      )

      filterData.value[filterOptions.value?.columnEdit?.key].fixed = fixed
      filterData.value[filterOptions.value?.columnEdit?.key].active = active
      tableHeaders.value = [...fixed, ...active]
    }
  }
}

const changeSearchKey = (value) => {
  filterData.value.selectedSearchOption = value
}

const clearAllFilters = () => {
  searchQueries.value = []
  activeFilterTab.value = ''
  filterData.value = clearAllFiltersUtil(filterData.value, filterOptions.value, itemsPerPage.value, activeFilterTab.value)
  applyFilter()
}

const handlePageChange = () => {
  applyFilter(null, currentPage.value)
}

const saveFilterToLocalStorage = () => {
  saveFilterToLocalStorageUtil(props.id, filterData.value)
}

const getFilterFromLocalStorage = () => {
  return getFilterFromLocalStorageUtil(props.id)
}
const updateFilterTimeout = ref(null)
const applyFilter = (
  filterFormData = null,
  isChangePage = false,
  changeCursor = '',
  isOnMount = false,
  isChangeTab = false
) => {
  if (paginationData.value && !isChangePage) {
    currentPage.value = 1
  }
  if (paginationData.value) {
    filterData.value.page = currentPage.value
  } else {
    filterData.value.cursor = changeCursor
  }

  if (filterOptions.value?.per_page) {
    filterData.value[filterOptions.value.per_page.key] = itemsPerPage.value
  } else {
    filterData.value.per_page = itemsPerPage.value
  }

  if (filterOptions.value?.tabs && isChangeTab) {
    filterData.value[filterOptions.value.tabs.key] = activeFilterTab.value
  }
  if (filterOptions.value?.search) {
    if (filterOptions.value.search?.options?.length) {
      Object.keys(filterData.value).forEach((key) => {
        if (filterOptions.value.search.options?.map((option) => option.value).includes(key)) {
          delete filterData.value[key]
        }
      })
      filterData.value[
        filterData.value?.selectedSearchOption ||
          filterOptions.value.search?.options?.[0]?.value ||
          filterOptions.value.search.key
      ] = searchQueries.value.join()
    } else {
      filterData.value[filterOptions.value.search.key] = searchQueries.value.join()
    }
  }

  if (filterFormData) {
    isFilterDropdownOpen.value = false
    filterData.value = { ...filterData.value, ...filterFormData }
    Object.keys(filterData.value).forEach((key) => {
      if (Array.isArray(filterData.value[key]) && filterData.value[key].length === 0) {
        delete filterData.value[key]
      }
    })
  }

  let filterTabKey = filterOptions.value?.tabs?.key
  if (filterTabKey && activeFilterTab.value !== filterData.value[filterTabKey]) {
    const selectedTab = filterOptions.value.tabs?.options?.find(
      (option) => option.value?.toString() === filterData.value[filterTabKey]?.toString()
    )
    if (selectedTab?.value) {
      activeFilterTab.value = selectedTab.value
      applyFilter()
      return false
    }
  }

  saveFilterToLocalStorage()

  clearTimeout(updateFilterTimeout.value)
  updateFilterTimeout.value = setTimeout(() => {
    emit('update:filter', filterData.value, isOnMount)
  }, 100)
}

const removeFilter = (filter, field) => {
  if (field === filterOptions.value.tabs.key || field === 'tabs') {
    activeFilterTab.value = ''
  }
  applyFilter(filter)
  emit('filter-removed', field)
}

onMounted(() => {
  initializeColumnOrder()
  const filterFromLocalStorage = getFilterFromLocalStorage()
  if (filterFromLocalStorage) {
    filterData.value = JSON.parse(filterFromLocalStorage)
    activeFilterTab.value =
      activeFilterTab.value ||
      filterData.value?.tabs ||
      filterData.value?.[filterOptions.value?.tabs?.key]

    if (filterData.value?.selectedSearchOption) {
      addSearchQuery(filterData.value[filterData.value?.selectedSearchOption])
    }
    currentPage.value = filterData.value?.page || 1

    applyFilter(null, true, filterData.value.cursor, true)
  }
  emit('on-table-ready')
})


const tableIsLoading = computed(() => {
  return props.isLoading || isLocalDataLoading.value
})

defineExpose({
  paginationData,
  tableIsLoading,
  bulkPutLocalData,
  bulkDeleteLocalData,  
  getLocalDataUpdatedAt,
  getLocalDataIds,
  syncLocalData,
  sortByData,
})

</script>
<template>
  <div class="relative flex flex-col gap-9">
    <Table
      v-if="processedTableOptions"
      :selected="selected"
      :row-key="rowKey"
      :options="processedTableOptions"
      :is-loading="tableIsLoading"
      :loading-rows="itemsPerPage"
      :row-class="rowClass"
      :row-link="rowLink"
      :is-sticky="tableOptions.isSticky"
      :is-borderless="tableOptions.isBorderless"
      @update:selected="$emit('update:selected', $event)"
      @click:row="$emit('click:row', $event)"
      @hover:cell="$emit('hover:cell', $event)"
    >
      <template
        v-if="$slots.before || filterOptions?.search || filterOptions?.form || filterOptions?.tabs"
        #before
      >
        <slot name="before" />
        <div
          v-if="filterOptions?.search || filterOptions?.form || filterOptions?.tabs"
          class="flex items-center px-4 min-h-[52px]"
        >
          <div v-if="hasSelectedItems" class="absolute flex items-center gap-5 left-5">
            <slot name="bulk-actions" :selected-rows="selected" />
          </div>
          <div v-else class="absolute flex gap-3 left-5">
            <Tabs
              v-if="filterOptions?.tabs"
              v-model="activeFilterTab"
              :is-disabled="tableIsLoading"
              :tabs="filterOptions.tabs.options"
              :variant="'pills'"
              @update:model-value="applyFilter(null, false, '', false, true)"
            />
          </div>

          <slot name="filter-options">
            <div
              v-if="filterOptions?.search || filterOptions?.form || filterOptions?.columnEdit"
              class="flex gap-3 absolute ml-auto bg-oc-bg-light right-4 max-w-[calc(100%-24px)]"
              :class="
                !filterOptions ? 'w-full justify-end' : isSearchExpanded ? 'md:w-fit w-full' : ''
              "
            >
              <FilterSearch
                v-if="filterOptions?.search"
                :is-search-only="!filterOptions.tabs || filterOptions.isSearchOnly"
                :search-options="filterOptions.search?.options ?? []"
                :selected-option="
                  (filterData?.selectedSearchOption || filterOptions.search?.options?.[0]?.value) ??
                  'keywords'
                "
                @add-query="addSearchQuery"
                @toggle="isSearchExpanded = $event"
                @change-search-key="changeSearchKey"
              />
              <Dropdown
                v-if="filterOptions?.form"
                v-model="isFilterDropdownOpen"
                :distance="9"
                placement="bottom-end"
                is-attach-to-body
                @update:model-value="$emit('filter-open', $event)"
              >
                <Button :is-active="isFilterDropdownOpen" variant="secondary" left-icon="filter" />

                <template #menu>
                  <FilterForm
                    v-if="isFilterDropdownOpen"
                    :id="id"
                    :json-form="filterOptions.form ?? []"
                    :grid="filterOptions.grid ?? null"
                    :values="props.filter"
                    :actions="filterOptions.actions"
                    @apply-filter="applyFilter($event)"
                    @filter-fields-changed="emit('filter-fields-changed', $event)"
                    @cancel="isFilterDropdownOpen = false"
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
              <ColumnEdit
                v-if="filterOptions.columnEdit"
                :options="filterData.columnEdit"
                :headers="tableOptions?.headers || []"
                :local-key="filterOptions.columnEdit.localStorageKey"
                @update-order="updateColumnOrder"
              />
            </div>
          </slot>
        </div>
        <FilterSearchFor
          :filters="displayFilterData"
          :queries="searchQueries"
          class="border-t border-oc-gray-200"
          @remove-query="removeSearchQuery"
          @remove-all="clearAllFilters"
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
      <template #table-header="slotProps">
        <slot name="table-header" v-bind="slotProps"></slot>
      </template>
      <template #table-body="slotProps">
        <slot name="table-body" v-bind="slotProps"></slot>
      </template>
    </Table>
    <slot name="before-pagination"></slot>
    <div
      v-if="paginationData || cursorOption"
      class="flex items-center gap-3"
      :class="paginationData && paginationData.last_page === 1 ? 'justify-end' : ''"
    >
      <Pagination
        v-if="paginationData && !isLastPage"
        v-model="currentPage"
        class="justify-center"
        :max-page="paginationData.last_page"
        :strategy="paginationData.strategy"
        total-visible="5"
        @update:model-value="handlePageChange"
      />
      <div v-if="cursorOption" class="flex justify-center w-full gap-5 md:justify-start">
        <PrevNext
          :disabled="!cursorOption.prev"
          @click="cursorOption.prev ? applyFilter(null, false, cursorOption.prev) : null"
        />
        <PrevNext
          :disabled="!cursorOption.next"
          is-next
          @click="cursorOption.next ? applyFilter(null, false, cursorOption.next) : null"
        />
      </div>
      <div v-if="!hidePerPageDropdown" class="items-center hidden md:flex">
        <Select
          v-model="itemsPerPage"
          label="Item per page"
          is-inline-label
          :popper-options="{ placement: 'auto' }"
          :options="itemsPerPageOptions"
          @update:model-value="applyFilter(null)"
        />
      </div>
    </div>
  </div>
</template>