<template>
<div>
  <div class="border border-oc-gray-200 rounded-lg overflow-hidden">
    <div v-if="$slots.before" class="border-b border-oc-gray-200">
      <slot name="before" />
    </div>
  
  <div class="w-full" :class="{'overflow-auto': !isLoading}" ref="scrollContainerRef">
    <table ref="tableRef" class="w-full text-left text-[13px] border-oc-gray-200" style="table-layout: fixed;">
    <thead>
      <tr>
        <th v-if="isSelectable" class="p-0 bg-oc-gray-50 border-r border-oc-gray-200 sticky left-0 z-30">
          <div
            class="flex p-3 items-center min-h-[35px] border-b border-oc-text-200" 
          >
            <Checkbox class="items-center" :model-value="selectedRows.length === fields.length" @update:model-value="selectAllRows"/>
          </div>
        </th>

        <th 
          v-for="(header, index) in headers" 
          :key="header.key" 
          class="p-0 bg-oc-gray-50"
          :class="[isScrolledToLeft && !index ? 'shadow-left' : '', header.headerClass, getStickyClasses(header, header.key, true), header.key === 'actions' ? 'cursor-default' : 'cursor-pointer', isLoading ? 'pointer-events-none' : '']"
          @click="handleSort(header.key, $event)"
        >
          <div           
            class="px-5 py-3 truncate min-h-[34px] font-medium text-xs border-b border-oc-text-200 uppercase flex items-center gap-2 justify-between w-full" 
          >
            {{  header.label }}
            <Icon 
              v-if="header.key !== 'actions'"
              name="arrow-down" 
              width="14" 
              height="14" 
              :class="[
                'transition-transform duration-200',
                sortKey === header.key ? 'text-blue-500' : 'text-gray-400',
                sortKey === header.key && sortDirection === 'asc' ? 'scale-y-[-1]' : ''
              ]"
            />
          </div>
        </th>
      </tr>
    </thead>

    <tbody v-if="!isLoading">
      <tr v-for="(row, index) in sortedFields" :key="index" class="group/row" @click="$emit('click:row', row)">
        <td v-if="isSelectable" class="p-0 bg-oc-bg-light border-r border-oc-gray-200 sticky left-0 z-20" :class="index !== sortedFields.length - 1 ? 'border-b' : ''">
          <div           
            class="flex p-3 items-center min-h-[35px]" 
          >
            <Checkbox class="items-center" :model-value="selectedRows.some((r) => getRowKey(r) === getRowKey(field))" @update:model-value="selectRow(row)"/>
          </div>
        </td>
        <td
          v-for="(header, headerIndex) in headers"
          :key="header.key + index"
          class="p-0 bg-oc-bg-light"
          :class="[
            { 'border-b border-oc-gray-200': index !== sortedFields.length - 1 },
            getStickyClasses(header, header.key, false)
          ]"
        >
          <div 
            class="px-5 py-3 text-[13px] flex gap-2 items-center justify-between w-full" 
            :class="header.class"
          >
            <slot :name="header.key" :item="row" :data="row[header.key]">
              <div class="truncate"> {{ row[header.key] || 'N/A' }}</div>
            </slot>

             <CopyTooltip v-if="header.isCopy && row[header.key]" :value="row[header.key]" class="opacity-0 group-hover/row:opacity-100" />
          </div>
        </td>
      </tr>
    </tbody>

    <tbody v-else>
      <tr v-for="i in loadingRows" :key="i">
        <td v-for="j in headers.length" :key="j" class="p-0 bg-oc-bg-light">
          <div class="px-5 py-3" :class="{ 'border-b border-oc-gray-200': i !== loadingRows }">
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
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { Icon, CopyTooltip, Checkbox, Skeleton } from '@/orchidui-core'

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

const emit = defineEmits(['update:selected', 'row-click'])

const fields = computed(() => props.options?.fields ?? [])
const headers = computed(() => props.options?.headers ?? [])
const isSticky = computed(() => (props.options?.isSticky && !props.isLoading) ?? false)
const isSelectable = computed(() => (props.options?.isSelectable && !props.isLoading) ?? false)
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
  DEFAULT: 175,
  ACTIONS: 32,
}

let isDragging = false
let suppressClick = false

// Handle column sorting
const handleSort = (key, event) => {
  if (suppressClick) {
    suppressClick = false
    return
  }
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDirection.value = 'desc'
  }
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
  return (parseInt(padLeft) + parseInt(padRight))
}

const getStyleVal = (elm, css) => {
  return (window.getComputedStyle(elm, null).getPropertyValue(css))
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
    const newCurWidth = Math.max(175, curColWidth + diffX) // Minimum 150px width
    curCol.style.width = newCurWidth + 'px'
    curCol.style.minWidth = newCurWidth + 'px'
    
    // Don't modify the next column - let it keep its original width
    // This will make the table wider/narrower overall
  }
}

const handleMouseUp = () => {
  if (isDragging) {
    suppressClick = true
    setTimeout(() => { suppressClick = false }, 0)
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
    // If this is the selectable column, set width/minWidth to 32px and skip the rest
    if (isSelectable.value && i === 0) {
      cols[i].style.width = '32px';
      cols[i].style.minWidth = '32px';
      continue;
    }
    // Get the header for this column (headers is offset by 1 if isSelectable)
    const header = isSelectable.value ? headers.value[i - 1] : headers.value[i];
    // Set min width based on key
    const minWidth = header && header.key === 'actions' ? COLUMN_WIDTH.ACTIONS : COLUMN_WIDTH.DEFAULT

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
watch(headers, async () => {
  await nextTick()
  if (tableRef.value) {
    // Clear existing resize handles
    clearResizeHandles(tableRef.value)
    // Reinitialize with new columns
    resizableGrid(tableRef.value)
  }
}, { deep: true })

const getStickyClasses = (header, headerKey, isHeader = false) => {
  if (!isSticky.value) return ''
  
  const classes = []

  const indexOfHeader = headers.value.findIndex(h => h.key === headerKey)

  
  // Only sticky left - first column or explicit stickyLeft
  if (indexOfHeader === 0 || header.stickyLeft) {
    classes.push(`!sticky ${isSelectable.value ? 'left-8' : 'left-0'} ${isHeader ? 'z-30' : 'z-20'}`)
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

watch(() => fields.value.length, async () => {
  await nextTick()
  if(tableRef.value) {
    setTimeout(() => {
      resizableGrid(tableRef.value)
    }, 100)
  }
})
</script>

<style>
.shadow-left .shadow-line {
  box-shadow: 6px 0 8px -2px rgba(0, 0, 0, 0.15);
}
</style>
