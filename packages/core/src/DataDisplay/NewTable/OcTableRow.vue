<template>
   <tr class="group/row">
        <td v-if="isExpand" class="p-0 border-r border-oc-gray-200 sticky left-0 z-20" 
        data-expand-column
        :class="[
          index !== sortedFields.length - 1 ? 'border-b' : '',
          isChild ? 'bg-oc-bg-dark' : 'bg-oc-bg-light'
        ]">
          <div           
            class="flex justify-center items-center min-h-[35px]" 
          >
            <Icon v-if="row?.children?.length" name="chevron-down" width="16" height="16" @click="toggleChildren" />
          </div>
        </td>
        <td 
          v-if="isSelectable" 
          class="p-0 border-r border-oc-gray-200 sticky z-20" 
          :class="[
            isExpand ? 'left-[31px]' : 'left-0',
            index !== sortedFields.length - 1 ? 'border-b' : '',
            isChild ? 'bg-oc-bg-dark' : 'bg-oc-bg-light'
          ]"
          data-checkbox-column
        >
          <div           
            class="flex p-3 items-center min-h-[35px]" 
          >
            <Checkbox class="items-center" :model-value="selectedRows.some((r) => getRowKey(r) === getRowKey(row))" @update:model-value="selectRow(row)"/>
          </div>
        </td>
        <td
          v-for="(header, headerIndex) in headers"
          :key="header.key + index"
          class="p-0"
          :class="[
            { 'border-b border-oc-gray-200': index !== sortedFields.length - 1 },
            isChild ? 'bg-oc-bg-dark' : 'bg-oc-bg-light',
            isChild && !headerIndex ? '!pl-4' : '',
            getStickyClasses(header, header.key, false)
          ]"
        >
          <div 
            class="px-5 py-3 text-[13px] flex gap-2 items-center justify-between w-full" 
            :class="[header.class, getStyleVariants(header)]"
          >
            <slot :name="header.key" :item="row" :data="row[header.key]">
              <div class="truncate"> {{ row[header.key] || 'N/A' }}</div>
            </slot>

             <CopyTooltip v-if="header.isCopy && row[header.key]" :value="row[header.key]" class="opacity-0 group-hover/row:opacity-100" />
          </div>
        </td>
      </tr>

      <template v-if="row?.children?.length && isChildrenVisible">
        <OcTableRow
          v-for="(childRow, childIndex) in row.children" 
          :key="getRowKey(childRow)"
          :row="childRow" 
          :headers="headers" 
          :index="childIndex"
          :parentRowKey="getRowKey(row)"
          :isExpand="isExpand"
          :isSelectable="isSelectable"
          isChild
          :sortedFields="sortedFields"
          :selectedRows="selectedRows"
          :getRowKey="getRowKey"
          :selectRow="selectRow"
          :getStickyClasses="getStickyClasses"
         />
      </template>
</template>

<script setup>
import { CopyTooltip, Icon, Checkbox } from '@/orchidui-core'
import { ref } from 'vue'

const props = defineProps({
  headers:{
    type: Array,
    default: () => []
  },
  row: {
    type: Object,
    default: () => {}
  },
  index: {
    type: Number,
    default: 0
  },
  isExpand: {
    type: Boolean,
    default: false
  },
  isSelectable: {
    type: Boolean,
    default: false
  },
  sortedFields: {
    type: Array,
    default: () => []
  },
  selectedRows: {
    type: Array,
    default: () => []
  },
  getRowKey: {
    type: Function,
    default: (row) => row?.id
  },
  selectRow: {
    type: Function,
    default: (row) => row?.id
  },
  getStickyClasses: {
    type: Function,
    default: () => ''
  },
  isChild: {
    type: Boolean,
    default: false
  },
  parentRowKey: {
    type: [String, Number],
    default: null
  },
})

const emit = defineEmits(['toggleChildren'])

const getStyleVariants = (header) => {
  return {
    'font-reddit-mono': header.variant === 'data',
    'font-reddit-mono font-semibold': header.variant === 'amount',
    'text-oc-text-400': header.variant === 'secondary',
  }
}

const isChildrenVisible = ref(false)

const toggleChildren = () => {
  isChildrenVisible.value = !isChildrenVisible.value
  emit('toggleChildren')
}
</script>
