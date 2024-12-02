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
  Dropdown
} from '@/orchidui'
import { ref, computed, onMounted } from 'vue'
import dayjs from 'dayjs'
import ColumnEdit from '@/orchidui/Builder/DataTable/ColumnEdit.vue'
import {
  formatHeadersToLocalStorage,
  setInLocalStorage,
  getFromLocalStorage,
  formatHeadersFromLocalStorage
} from './utils/editColumnsUtils.js'

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
    type: String,
    Function,
    default: 'id'
  },
  rowLink: String
})

const emit = defineEmits({
  'update:selected': [],
  'update:filter': [],
  'click:row': [],
  'filter-fields-changed': [],
  'filter-removed': [],
  'search-query-changed': [],
  'hover:cell': []
})

const paginationOption = computed(() => props.options?.pagination)

const cursorOption = computed(() => props.options?.cursor)
const modifiedTableHeaders = ref()

const tableOptions = computed(() =>  props.options?.tableOptions)
const editedTableOptions = computed(() => ({
  ...tableOptions.value,
  headers: modifiedTableHeaders.value ? modifiedTableHeaders.value.filter((h) => isColumnActive(h.key)) : tableOptions.value?.headers.filter((h) => isColumnActive(h.key))
}))
const filterOptions = computed(() => props.options?.filterOptions)

const hidePerPageDropdown = computed(() => props.options?.hidePerPageDropdown)

const isLastPage = computed(() => paginationOption.value?.last_page === 1)

const isDropdownOpened = ref(false)
const filterTab = ref(props.filter[filterOptions.value?.tabs?.key])
const currentPage = ref(props.filter.page)
const perPage = ref(
  filterOptions.value?.per_page?.key
    ? props.filter[filterOptions.value?.per_page?.key]
    : props.filter.per_page
)
const defaultQuery = props.filter[filterOptions.value?.search?.key]?.trim() ?? ''
const queries = ref(defaultQuery ? defaultQuery.split(',') : [])
const isSearchExpanded = ref(false)

const customPerPageOptions = computed(() =>
  props.options?.perPageOptions?.map(
    (perPage) =>
      ({
        label: `${perPage}`,
        value: perPage
      }) ?? null
  )
)

const perPageOptions = computed(() => {
  let default_per_page_option = [
    {
      label: '10',
      value: 10
    },
    {
      label: '15',
      value: 15
    },
    {
      label: '20',
      value: 20
    },
    {
      label: '25',
      value: 25
    },
    {
      label: '40',
      value: 40
    },
    {
      label: '50',
      value: 50
    },
    {
      label: '75',
      value: 75
    },
    {
      label: '99',
      value: 99
    }
  ]
  let opt = customPerPageOptions.value ?? default_per_page_option
  if (paginationOption.value) {
    const maxLength = paginationOption.value.total < 100 ? paginationOption.value.total : 100
    if (maxLength > 10) {
      opt = opt.filter((p) => {
        return p.value <= maxLength
      })
    }
  }
  return [...new Set(opt)]
})

const showBulkAction = computed(() => {
  return props.selected?.length > 0
})

const addQuery = (query) => {
  if (!query.trim() || queries.value.includes(query)) return
  if (!filterOptions.value) {
    queries.value = [query]
  } else {
    queries.value.push(query)
  }
  applyFilter()
  emit('search-query-changed', query)
}
const removeQuery = (query) => {
  queries.value = queries.value.filter((q) => q !== query)
  applyFilter()
}
const defaultFilterData = props.filter
if (!defaultFilterData && paginationOption) {
  defaultFilterData.page = 1
} else if (!defaultFilterData && cursorOption) {
  defaultFilterData.cursor = ''
}
const filterData = ref(defaultFilterData)

const removeAllQueryFilter = () => {
  queries.value = []

  const defaultFilters = {}

  if (filterOptions.value) {
    defaultFilterData.page = 1
  } else {
    defaultFilterData.cursor = ''
  }

  if (filterOptions.value?.per_page?.key) {
    defaultFilters[filterOptions.value?.per_page?.key] = perPage.value
  } else {
    defaultFilters.per_page = perPage.value
  }
  if (filterOptions.value?.tabs?.key) {
    filterTab.value = ''
  } else {
    filterTab.value = ''
  }

  filterData.value = defaultFilters

  applyFilter()
}

const changePage = () => {
  applyFilter(null, currentPage.value)
}

const applyFilter = (filterForm = null, isChangePage = false, changeCursor = '') => {
  if (paginationOption.value && !isChangePage) {
    currentPage.value = 1
  }
  if (paginationOption.value) {
    filterData.value.page = currentPage.value
  } else {
    filterData.value.cursor = changeCursor
  }

  if (filterOptions.value?.per_page) {
    filterData.value[filterOptions.value.per_page.key] = perPage.value
  } else {
    filterData.value.per_page = perPage.value
  }

  if (filterOptions.value?.tabs) {
    filterData.value[filterOptions.value.tabs.key] = filterTab.value
  }
  if (filterOptions.value?.search) {
    filterData.value[filterOptions.value.search.key] = queries.value.join()
  }

  if (filterForm) {
    isDropdownOpened.value = false
    filterData.value = { ...filterData.value, ...filterForm }
    Object.keys(filterData.value).forEach((key) => {
      if (Array.isArray(filterData.value[key]) && filterData.value[key].length === 0) {
        delete filterData.value[key]
      }
    })
  }
  emit('update:filter', filterData.value)
}

const removeFilter = (filter, field) => {
  applyFilter(filter)
  emit('filter-removed', field)
}

const getFilterNames = (filterNames) => {
  let names = []
  filterNames.forEach((name) => {
    names.push(name.key)
  })
  return names
}

const displayFilterData = computed(() => {
  if (filterData.value) {
    let display = []

    Object.keys(filterData.value).forEach((name) => {
      let filterTabKey = filterOptions.value?.tabs?.key
      const filterSearchKey = filterOptions.value?.search?.key
      const filterPerPageKey = filterOptions.value?.per_page?.key ?? 'per_page'

      filterOptions.value.form?.find((f) => {
        if (f.name === filterTabKey) {
          filterTabKey = ''
        }
      })

      if (
        name !== 'page' &&
        name !== 'cursor' &&
        name !== filterPerPageKey &&
        name !== filterTabKey &&
        name !== filterSearchKey
      ) {
        let isMultiNames = null
        let option = filterOptions.value.form?.find((f) => {
          if (typeof f.name === 'object') {
            let isSelectedOption = false
            f.name.forEach((formName) => {
              if (formName.key === name) {
                isSelectedOption = true
                isMultiNames = getFilterNames(f.name)
              }
            })
            return isSelectedOption
          } else {
            return f.name === name
          }
        })

        let optionLabel = ''

        if (option && filterData.value[name]) {
          if (typeof option.name === 'object') {
            option.name?.forEach((formName) => {
              if (optionLabel) {
                optionLabel += ' - '
              }
              optionLabel += filterData.value[formName.key]
            })
          } else {
            optionLabel = filterData.value[name]
          }

          if (option.props.options) {
            const selectedValuesInArray = option.props.multiple
              ? filterData.value[name]
              : [filterData.value[name]]

            optionLabel = selectedValuesInArray
              .map(
                (selectedValue) =>
                  option.props.options.find(({ value }) => value === selectedValue)?.label
              )
              .join(', ')
          }

          if (option.type === 'RangeInput') {
            if (Array.isArray(filterData.value[name])) {
              optionLabel =
                filterData.value[name][0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                ' - ' +
                filterData.value[name][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
          }

          if (option.type === 'DatePicker') {
            if (option?.props?.type === 'range' && option.name && option.name[1]) {
              const startDate = dayjs(filterData.value[option.name[0].key]).format('MM/DD/YYYY')
              const endDate = dayjs(filterData.value[option.name[1].key]).format('MM/DD/YYYY')

              optionLabel = startDate === endDate ? startDate : startDate + ' - ' + endDate
            } else optionLabel = dayjs(filterData.value[option.name]).format('MM/DD/YYYY')
          }

          let label = `${option?.props?.label} : ${optionLabel}`
          if (option && option.name && typeof option.name === 'object') {
            const exist = display.find((f) => f.name === isMultiNames[0])
            if (exist) {
              label = ``
            }
          }

          display.push({
            label: label,
            name: name,
            multiNames: isMultiNames
          })
        }
      }
    })
    return display
  }
  return []
})
const isColumnActive = (headerKey) =>
  filterData.value?.[filterOptions.value?.columnEdit?.key]?.active?.find((h) => h.key === headerKey)
    ?.isActive ?? true

const updateOrder = ({ fixedHeaders, activeHeaders, isOnMount }) => {
  filterData.value[filterOptions.value?.columnEdit?.key].fixed = fixedHeaders
  filterData.value[filterOptions.value?.columnEdit?.key].active = activeHeaders
  modifiedTableHeaders.value = [...fixedHeaders, ...activeHeaders]
  if (!isOnMount) {
    const data = formatHeadersToLocalStorage(fixedHeaders, activeHeaders)
    setInLocalStorage(filterOptions.value.columnEdit.localStorageKey, data)
  }
}
const setOrderedHeaders = () => {
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
      modifiedTableHeaders.value = [...fixed, ...active]
    }
  }
}

onMounted(() => {
  setOrderedHeaders()
})
</script>
<template>
  <div class="flex flex-col gap-9 relative">
    <Table
      v-if="tableOptions"
      :selected="selected"
      :row-key="rowKey"
      :options="editedTableOptions"
      :is-loading="isLoading"
      :loading-rows="perPage"
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
          <div v-if="showBulkAction" class="flex gap-5 items-center absolute left-5">
            <slot name="bulk-actions" :selected-rows="selected" />
          </div>
          <div v-else class="flex gap-3 absolute left-5">
            <Tabs
              v-if="filterOptions?.tabs"
              v-model="filterTab"
              :tabs="filterOptions.tabs.options"
              :variant="'pills'"
              @update:model-value="applyFilter(null)"
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
                @add-query="addQuery"
                @toggle="isSearchExpanded = $event"
              />
              <Dropdown
                v-if="filterOptions?.form"
                v-model="isDropdownOpened"
                :distance="9"
                placement="bottom-end"
                is-attach-to-body
              >
                <Button :is-active="isDropdownOpened" variant="secondary" left-icon="filter" />

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
              <ColumnEdit
                v-if="filterOptions.columnEdit"
                :options="filterData.columnEdit"
                :headers="tableOptions?.headers || []"
                :local-key="filterOptions.columnEdit.localStorageKey"
                @update-order="updateOrder"
              />
            </div>
          </slot>
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
      <template #table-header="slotProps">
        <slot name="table-header" v-bind="slotProps"></slot>
      </template>
      <template #table-body="slotProps">
        <slot name="table-body" v-bind="slotProps"></slot>
      </template>
    </Table>
    <slot name="before-pagination"></slot>
    <div
      v-if="paginationOption || cursorOption"
      class="flex gap-3 items-center"
      :class="paginationOption && paginationOption.last_page === 1 ? 'justify-end' : ''"
    >
      <Pagination
        v-if="paginationOption && !isLastPage"
        v-model="currentPage"
        class="justify-center"
        :max-page="paginationOption.last_page"
        :strategy="paginationOption.strategy"
        total-visible="5"
        @update:model-value="changePage"
      />
      <div v-if="cursorOption" class="flex w-full gap-5 md:justify-start justify-center">
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
      <div v-if="!hidePerPageDropdown" class="hidden md:flex items-center">
        <Select
          v-model="perPage"
          label="Item per page"
          is-inline-label
          :popper-options="{ placement: 'auto' }"
          :options="perPageOptions"
          @update:model-value="applyFilter(null)"
        />
      </div>
    </div>
  </div>
</template>
