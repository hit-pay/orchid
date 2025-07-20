<template>
  <div>
    <div class="border border-oc-gray-200 rounded-lg overflow-hidden">
      <div v-if="$slots.before" class="border-b border-oc-gray-200">
        <slot name="before" />
      </div>

      <div ref="scrollContainerRef" class="w-full" :class="{ 'overflow-auto': !isLoading }">
        <table
          ref="tableRef"
          class="w-full text-left text-[13px] border-oc-gray-200"
          style="table-layout: fixed"
        >
          <thead>
            <tr>
              <th
                v-if="isExpand"
                class="p-0 bg-oc-gray-50 border-r border-oc-gray-200 sticky left-0 z-30"
                data-expand-column
              >
                <div class="flex p-3 items-center min-h-[35px] border-b border-oc-text-200"></div>
              </th>
              <th
                v-if="isSelectable"
                class="p-0 bg-oc-gray-50 border-r border-oc-gray-200 sticky z-30"
                :class="isExpand ? 'left-[31px]' : 'left-0'"
                data-checkbox-column
              >
                <div class="flex p-3 items-center min-h-[35px] border-b border-oc-text-200">
                  <Checkbox
                    class="items-center"
                    :model-value="selectedRows.length === fields.length"
                    @update:model-value="selectAllRows"
                  />
                </div>
              </th>

              <th
                v-for="(header, index) in headers"
                :key="header.key"
                class="p-0 bg-oc-gray-50"
                :class="[
                  isScrolledToLeft && !index ? 'shadow-left' : '',
                  header.headerClass,
                  getStickyClasses(header, header.key, true),
                  header.key === 'actions' ? 'cursor-default' : 'cursor-pointer',
                  isLoading ? 'pointer-events-none' : ''
                ]"
                @click="handleSort(header.key, $event)"
              >
                <div
                  class="px-5 py-3 truncate min-h-[34px] font-medium text-xs border-b border-oc-text-200 uppercase flex items-center gap-2 justify-between w-full"
                  :class="{ 'h-[inherit]': header.key === 'actions' }"
                >
                  {{ header.label }}
                  <!-- <Icon
                    v-if="header.key !== 'actions'"
                    name="arrow-down"
                    width="14"
                    height="14"
                    :class="[
                      'transition-transform duration-200',
                      sortKey === header.key ? 'text-blue-500' : 'text-gray-400',
                      sortKey === header.key && sortDirection === 'asc' ? 'scale-y-[-1]' : ''
                    ]"
                  /> -->
                </div>
              </th>
            </tr>
          </thead>

          <tbody v-if="!isLoading">
            <OcTableRow
              v-for="(row, index) in sortedFields"
              :key="getRowKey(row)"
              :headers="headers"
              :row="row"
              :index="index"
              :is-expand="isExpand"
              :is-selectable="isSelectable"
              :sorted-fields="sortedFields"
              :selected-rows="selectedRows"
              :select-row="selectRow"
              :get-row-key="getRowKey"
              :get-sticky-classes="getStickyClasses"
              @toggle-children="recreateResizeHandles"
            >
              <template v-for="name in Object.keys($slots)" #[name]="slotData">
                <slot :name="name" v-bind="slotData" />
              </template>
            </OcTableRow>
          </tbody>

          <tbody v-else>
            <tr v-for="i in loadingRows" :key="i">
              <td v-for="j in headers.length" :key="j" class="p-0 bg-oc-bg-light">
                <div
                  class="px-5 py-3"
                  :class="{ 'border-b border-oc-gray-200': i !== loadingRows }"
                >
                  <Skeleton class="w-full h-6 rounded" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <slot v-if="!fields.length" name="empty" />
      </div>
    </div>
    <slot name="after" />
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { Icon, Checkbox, Skeleton } from '@/orchidui-core'
import OcTableRow from './OcTableRow.vue'

const props = defineProps({
  options: {
    type: Object,
    required: true
  },
  rowKey: {
    type: [String, Function],
    default: 'id'
  },
  selected: {
    type: Array,
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  loadingRows: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits(['update:selected', 'click:row'])

const fields = computed(() => (!props.isLoading ? props.options?.fields : []))
const headers = computed(() => props.options?.headers ?? [])
const isSticky = computed(() => (!props.isLoading ? props.options?.isSticky : false))
const isSelectable = computed(() => (!props.isLoading ? props.options?.isSelectable : false))
const isExpand = computed(() => (props.options?.isExpand && !props?.isLoading) ?? false)

const getRowKey = computed(() =>
  typeof props.rowKey === 'function' ? props.rowKey : (row) => row[props.rowKey]
)
const selectedRows = computed({
  get() {
    return props.selected || []
  },
  set(rows) {
    emit('update:selected', rows)
  }
})

// Sorting state
const sortKey = ref(null)
const sortDirection = ref('desc') // 'asc' or 'desc'

// Sorted fields computed property
const sortedFields = computed(() => {
  if (!sortKey.value) {
    return fields.value
  }

  const sorted = [...fields.value].sort((a, b) => {
    const aVal = a[sortKey.value]
    const bVal = b[sortKey.value]

    // Handle different data types
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDirection.value === 'asc' ? aVal - bVal : bVal - aVal
    }

    // Handle strings
    const aStr = String(aVal || '').toLowerCase()
    const bStr = String(bVal || '').toLowerCase()

    if (sortDirection.value === 'asc') {
      return aStr.localeCompare(bStr)
    } else {
      return bStr.localeCompare(aStr)
    }
  })

  return sorted
})

const COLUMN_WIDTH = {
  DEFAULT: 125,
  ACTIONS: 32
}

let isDragging = false
let suppressClick = false

// Handle column sorting
const handleSort = (key, event) => {
  if (suppressClick) {
    suppressClick = false
    return
  }
  // hide sortable feature
  // if (sortKey.value === key) {
  //   sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  // } else {
  //   sortKey.value = key
  //   sortDirection.value = 'desc'
  // }
}

const tableRef = ref(null)
const scrollContainerRef = ref(null)
let curCol = null
let nxtCol = null
let pageX = null
let curColWidth = null
let nxtColWidth = null
const isScrolledToLeft = ref(true)

const createDiv = (height, columnElement) => {
  // Remove any existing resize handle with data-resize-handle="true"
  const existingHandle = columnElement.querySelector('div[data-resize-handle="true"]')
  if (existingHandle) {
    columnElement.removeChild(existingHandle)
  }

  const div = document.createElement('div')
  div.classList.add('shadow-line')
  div.style.top = '0'
  div.style.right = '0'
  div.style.width = '8px'
  div.style.position = 'absolute'
  div.style.cursor = 'col-resize'
  div.style.userSelect = 'none'
  div.style.height = height + 'px'
  div.style.borderRight = '1px solid var(--oc-gray-200)'
  div.setAttribute('data-resize-handle', 'true')
  return div
}

const paddingDiff = (col) => {
  if (getStyleVal(col, 'box-sizing') == 'border-box') {
    return 0
  }

  const padLeft = getStyleVal(col, 'padding-left')
  const padRight = getStyleVal(col, 'padding-right')
  return parseInt(padLeft) + parseInt(padRight)
}

const getStyleVal = (elm, css) => {
  return window.getComputedStyle(elm, null).getPropertyValue(css)
}

const setListeners = (div) => {
  div.addEventListener('mousedown', function (e) {
    e.preventDefault()
    e.stopPropagation()

    curCol = e.target.parentElement
    nxtCol = curCol.nextElementSibling

    const table = tableRef.value
    const scrollLeft = table ? table.scrollLeft : 0

    pageX = e.pageX + scrollLeft

    const padding = paddingDiff(curCol)

    curColWidth = curCol.offsetWidth - padding
    if (nxtCol) {
      nxtColWidth = nxtCol.offsetWidth - padding
    }
  })

  // Prevent header click (sort) when clicking the resize handle
  div.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
  })

  div.addEventListener('mouseover', function (e) {
    e.target.style.borderColor = 'var(--oc-gray-500)'
  })

  div.addEventListener('mouseout', function (e) {
    e.target.style.borderColor = 'var(--oc-gray-200)'
  })
}

const handleMouseMove = (e) => {
  if (curCol) {
    isDragging = true
    // Get the table element to calculate scroll offset
    const table = tableRef.value
    const scrollLeft = table ? table.scrollLeft : 0

    // Adjust for horizontal scroll
    const adjustedPageX = e.pageX + scrollLeft
    const diffX = adjustedPageX - pageX

    // Only change the width of the current column
    const newCurWidth = Math.max(125, curColWidth + diffX) // Minimum 125px width
    curCol.style.width = newCurWidth + 'px'
    curCol.style.minWidth = newCurWidth + 'px'

    // Don't modify the next column - let it keep its original width
    // This will make the table wider/narrower overall
  }
}

const handleMouseUp = () => {
  if (isDragging) {
    suppressClick = true
    setTimeout(() => {
      suppressClick = false
    }, 0)
  }
  isDragging = false
  curCol = undefined
  nxtCol = undefined
  pageX = undefined
  nxtColWidth = undefined
  curColWidth = undefined
}

const clearResizeHandles = (table) => {
  if (!table) return

  const row = table.getElementsByTagName('tr')[0]
  const cols = row ? row.children : undefined
  if (!cols) return

  for (let i = 0; i < cols.length; i++) {
    const resizeHandle = cols[i].querySelector('div[style*="cursor: col-resize"]')
    if (resizeHandle) {
      cols[i].removeChild(resizeHandle)
    }
    // Reset position style
    cols[i].style.position = ''
  }
}

const resizableGrid = (table) => {
  const row = table.getElementsByTagName('tr')[0]
  const cols = row ? row.children : undefined
  if (!cols) {
    return
  }

  const tableHeight = table.offsetHeight
  const tableWidth = table.offsetWidth
  const colWidth = Math.max(COLUMN_WIDTH.DEFAULT, Math.floor(tableWidth / cols.length)) // Minimum DEFAULT px

  for (let i = 0; i < cols.length; i++) {
    // Check if this column has data-checkbox-column or data-expand-column attribute
    const isCheckboxColumn = cols[i].hasAttribute('data-checkbox-column')
    const isExpandColumn = cols[i].hasAttribute('data-expand-column')

    if (isCheckboxColumn || isExpandColumn) {
      cols[i].style.width = '32px'
      cols[i].style.minWidth = '32px'
      continue
    }

    // Get the header for this column (headers is offset by the number of utility columns)
    let headerIndex = i
    if (isExpand.value) headerIndex--
    if (isSelectable.value) headerIndex--

    const header = headers.value[headerIndex]
    // Set min width based on key
    const minWidth =
      header && header.key === 'actions' ? COLUMN_WIDTH.ACTIONS : COLUMN_WIDTH.DEFAULT

    // Set initial width for each column
    if (header && header.key !== 'actions') {
      cols[i].style.width = colWidth + 'px'
    }
    cols[i].style.minWidth = minWidth + 'px'

    // Skip adding resize handle to the last column
    if (i < cols.length - 1) {
      const div = createDiv(tableHeight, cols[i])
      if (div) {
        cols[i].appendChild(div)

        // Only set position relative if not sticky
        const isStickyCol = isSticky.value && (i === 0 || i === cols.length - 1)
        if (!isStickyCol) {
          cols[i].style.position = 'relative'
        }

        setListeners(div)
      }
    }
  }
}

const handleScroll = () => {
  if (scrollContainerRef.value.scrollLeft > 0) {
    isScrolledToLeft.value = true
  } else {
    isScrolledToLeft.value = false
  }
}

const recreateResizeHandles = async () => {
  await nextTick()
  if (tableRef.value) {
    clearResizeHandles(tableRef.value)
    resizableGrid(tableRef.value)
  }
}

onMounted(async () => {
  // Wait for Vue to finish rendering
  await nextTick()

  // Add a small delay to ensure table is fully rendered
  setTimeout(() => {
    if (tableRef.value) {
      resizableGrid(tableRef.value)
      scrollContainerRef.value.addEventListener('scroll', handleScroll)
      handleScroll()
    } else {
    }
  }, 100)

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})

// Watch for header changes to reinitialize resize handles
watch(
  () => [headers.value, fields.value, props.isLoading],
  () => {
    recreateResizeHandles()
  },
  { deep: true }
)

const getStickyClasses = (header, headerKey, isHeader = false) => {
  if (!isSticky.value) return ''

  const classes = []

  const indexOfHeader = headers.value.findIndex((h) => h.key === headerKey)

  // Only sticky left - first column or explicit stickyLeft
  if (indexOfHeader === 0 || header.stickyLeft) {
    // Calculate the left position based on expand and selectable columns
    let leftPosition = 'left-0'

    if (isExpand.value && isSelectable.value) {
      // Both: first data column should be at left-62 (32px + 32px)
      leftPosition = 'left-[62px]'
    } else if (isExpand.value || isSelectable.value) {
      // Only one of them: first data column should be at left-31 (32px)
      leftPosition = 'left-[31px]'
    }

    classes.push(`!sticky ${leftPosition} ${isHeader ? 'z-30' : 'z-20'}`)
  }

  return classes.join(' ')
}

const selectRow = (row) => {
  const selectingRow = selectedRows.value.find((r) => getRowKey.value(r) === getRowKey.value(row))

  if (selectingRow) {
    selectedRows.value = selectedRows.value.filter(
      (r) => getRowKey.value(r) !== getRowKey.value(row)
    )
  } else {
    selectedRows.value = [...selectedRows.value, row]
  }
}

const selectAllRows = () => {
  const allRowsSelected = selectedRows.value.length === fields.value.length

  selectedRows.value = allRowsSelected ? [] : [...fields.value]
}
</script>

<style>
.shadow-left .shadow-line {
  box-shadow: 6px 0 8px -2px rgba(0, 0, 0, 0.15);
}
</style>
