<template>
  <div class="border border-oc-gray-200 rounded-lg overflow-hidden">
    <div v-if="$slots.before">
      <slot name="before" />
    </div>
  
  <div class="w-full overflow-auto" ref="scrollContainerRef">
    <table ref="tableRef" class="w-full text-left text-[13px] border-oc-gray-200" style="table-layout: fixed;">
    <thead>
      <tr>
        <th 
          v-for="(header, index) in headers" 
          :key="header.key" 
          class="p-0 bg-oc-gray-50 cursor-pointer"
          :class="getStickyClasses(header, index, true)"
          @click="handleSort(header.key, $event)"
        >
          <div           
            class="px-5 py-3 font-medium text-xs border-b border-oc-text-200 uppercase flex items-center gap-2 justify-between w-full" 
            :class="{ 'border-l': index === headers.length - 1 && isScrolledRight }"
          >
            {{  header.label }}
            <Icon 
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

    <tbody>
      <tr v-for="(row, index) in sortedFields" :key="index" class="group">
        <td
          v-for="(header, headerIndex) in headers"
          :key="header.key + index"
          class="p-0 bg-oc-bg-light"
          :class="[
            { 'border-b border-oc-gray-200': index !== sortedFields.length - 1 },
            getStickyClasses(header, headerIndex, false)
          ]"
        >
          <div 
            class="px-5 py-3 text-[13px] flex gap-2 items-center justify-between w-full" 
            :class="[
              header.class,
              { 'border-l': headerIndex === headers.length - 1 && isScrolledRight }
            ]"
          >
            <slot :name="header.key" :item="row" :data="row[header.key]">
              <div class="truncate"> {{ row[header.key] || 'N/A' }}</div>
              <CopyTooltip v-if="header.isCopy" :value="row[header.key]" class="opacity-0 group-hover:opacity-100" />
            </slot>
          </div>
        </td>
      </tr>
    </tbody>
    
  </table>
  </div>
</div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { Icon, CopyTooltip } from '@/orchidui-core'

const props = defineProps({
  options: {
    type: Object,
    required: true
  },
})

const fields = computed(() => props.options.fields)
const headers = computed(() => props.options.headers)
const isSticky = computed(() => props.options.isSticky)

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

// Add at the top of <script setup>
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
const isScrolledRight = ref(false)
const isScrolledLeft = ref(false)

const handleScroll = () => {
  if (scrollContainerRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.value
    const maxScrollLeft = scrollWidth - clientWidth
    
    // Show border when scrolled, hide only when last column reaches right edge
    isScrolledRight.value = scrollLeft < maxScrollLeft
    isScrolledLeft.value = scrollLeft === 0
  }
}

const createDiv = (height) => {
  const div = document.createElement('div')
  div.style.top = '0'
  div.style.right = '0'
  div.style.width = '8px'
  div.style.position = 'absolute'
  div.style.cursor = 'col-resize'
  div.style.userSelect = 'none'
  div.style.height = height - 1 + 'px'
  div.style.borderRight = '1px solid var(--oc-gray-200)'
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
    console.log('Mouse down on resize handle')
    e.preventDefault()
    e.stopPropagation()
    
    curCol = e.target.parentElement
    nxtCol = curCol.nextElementSibling
    
    console.log('curCol', curCol)
    console.log('nxtCol', nxtCol)
    
    const table = tableRef.value
    const scrollLeft = table ? table.scrollLeft : 0
    
    pageX = e.pageX + scrollLeft
    
    const padding = paddingDiff(curCol)
    
    curColWidth = curCol.offsetWidth - padding
    if (nxtCol) {
      nxtColWidth = nxtCol.offsetWidth - padding
    }
    
    console.log('Resize started:', { curColWidth, nxtColWidth, pageX })
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
  console.log('Initializing resizable grid')
  const row = table.getElementsByTagName('tr')[0]
  const cols = row ? row.children : undefined
  if (!cols) {
    console.log('No columns found')
    return
  }
  
  console.log('Found columns:', cols.length)
  
  const tableHeight = table.offsetHeight
  const tableWidth = table.offsetWidth
  const colWidth = Math.max(175, Math.floor(tableWidth / cols.length)) // Minimum 150px
  
  for (let i = 0; i < cols.length; i++) {
    // Set initial width for each column
    cols[i].style.width = colWidth + 'px'
    cols[i].style.minWidth = '175px' // Set minimum width to 150px
    
    // Skip adding resize handle to the last column
    if (i < cols.length - 1) {
      const div = createDiv(tableHeight)
      cols[i].appendChild(div)
      
      // Only set position relative if not sticky
      const isStickyCol = isSticky.value && (i === 0 || i === cols.length - 1)
      if (!isStickyCol) {
        cols[i].style.position = 'relative'
      }
      
      setListeners(div)
      console.log('Added resize handle to column', i)
    }
  }
}

onMounted(async () => {
  // Wait for Vue to finish rendering
  await nextTick()
  
  // Add a small delay to ensure table is fully rendered
  setTimeout(() => {
    if (tableRef.value) {
      console.log('Table ref found, initializing resize') // Debug
      resizableGrid(tableRef.value)
      handleScroll()
    } else {
      console.log('Table ref not found') // Debug
    }
    
    // Add scroll event listener to the scroll container
    if (scrollContainerRef.value) {
      scrollContainerRef.value.addEventListener('scroll', handleScroll)
    }
  }, 100)
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  if (scrollContainerRef.value) {
    scrollContainerRef.value.removeEventListener('scroll', handleScroll)
  }
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

const getStickyClasses = (header, index, isHeader = false) => {
  if (!isSticky.value) return ''
  
  const classes = []
  
  // Check for stickyLeft property on first column or explicit stickyLeft
  if (index === 0 || header.stickyLeft) {
    classes.push(`sticky left-0 ${isHeader ? 'z-30' : 'z-20'}`)
  }
  
  // Check for stickyRight property on last column or explicit stickyRight
  if (index === headers.value.length - 1 || header.stickyRight) {
    classes.push(`sticky right-0 ${isHeader ? 'z-[31]' : 'z-[21]'}`)
  }
  
  return classes.join(' ')
}
</script>

<style scoped>
/* Sticky column shadows and styling */
.sticky.left-0 {
  box-shadow: 2px 0 4px -2px rgba(0, 0, 0, 0.1);
}

.sticky.right-0 {
  box-shadow: -2px 0 4px -2px rgba(0, 0, 0, 0.1);
}
</style>

