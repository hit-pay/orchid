<script setup lang="ts">
import { Icon, ExpandingTableRow, Tooltip, Skeleton } from '@/orchidui-core'
import { ref, computed } from 'vue'

defineProps({
  row: Object,
  depth: {
    type: Number,
    default: 0
  },
  value: {
    type: [String, Number, Date, Object],
    default: 0
  },
  headers: {
    type: Array,
    default: () => []
  },
  important: {
    type: Boolean,
    default: false
  },
  isTotal: {
    type: Boolean,
    default: false
  },
  isAlternative: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isSticky: {
    type: Boolean,
    default: false
  },
  gridTemplateColumns: {
    type: String,
    default: '32px 200px repeat(${headers.length - 1}, minmax(150px, auto)) 32px'
  }
})

const isExpanded = ref(false)
const maxHeight = ref('0')
const childrenWrapper = ref()
const itemsCellRef = ref()
const truncatedHeaders = computed(() =>
  itemsCellRef.value?.map((el) => el.scrollWidth > el.clientWidth)
)
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
  if (isExpanded.value) {
    maxHeight.value = `${childrenWrapper.value.scrollHeight}px`
  } else {
    maxHeight.value = '0'
  }
}
</script>

<template>
  <div
    class="grid min-h-[58px] items-center border-b border-oc-gray-200 min-w-max relative"
    :style="{
      gridTemplateColumns
    }"
    :class="{
      'font-medium': important || isTotal,
      'bg-oc-gray-900 text-white': isTotal,
      'bg-oc-bg-dark': depth
    }"
  >
    <div
      class="w-9 flex items-center justify-center"
      :class="isSticky ? 'sticky left-0 h-full z-10 bg-white border-oc-gray-200' : ''"
      @click="toggleExpand"
    >
      <Icon
        v-if="row.children?.length"
        name="chevron-down"
        width="16"
        height="16"
        class="mx-auto transition-all duration-500"
        :class="isExpanded ? 'rotate-180' : ''"
      />
    </div>

    <template v-if="!isAlternative">
      <div
        class="px-4 py-3 whitespace-nowrap flex items-center gap-2"
        :class="isSticky ? 'sticky left-9 z-10 bg-white border-oc-gray-200' : ''"
      >
        {{ row.label }}
        <Tooltip>
          <Icon v-if="row.infoText" name="information" width="16" height="16" />
          <template #popper>
            <div class="rounded-xs text-sm font-medium text-oc-text-400 p-2">
              {{ row.infoText }}
            </div>
          </template>
        </Tooltip>
      </div>

      <div class="px-4 py-3 whitespace-nowrap">
        <slot :name="row.key" :value="value">
          {{ value }}
        </slot>
      </div>
    </template>

    <template v-else>
      <div
        v-for="(header, index) in headers"
        :key="header.key"
        class="px-4 py-3 whitespace-nowrap overflow-hidden text-ellipsis"
        :class="[
          header.itemClasses,
          isSticky && index === 0 ? 'sticky left-9 z-10 bg-white border-oc-gray-200' : ''
        ]"
      >
        <Skeleton v-if="isLoading" class="w-full h-5 rounded" />
        <slot v-else :name="header.key" :data="row?.[header?.key]" :item="row">
          {{ row?.[header?.key] }}
        </slot>
      </div>
    </template>

    <div class="w-9" />
  </div>

  <div
    v-if="row.children?.length"
    ref="childrenWrapper"
    class="transition-all overflow-hidden duration-500"
    :style="{ maxHeight: maxHeight }"
  >
    <ExpandingTableRow
      v-for="(child, i) in row.children"
      :key="i"
      :row="child"
      :important="child.important"
      :is-alternative="isAlternative"
      :is-loading="isLoading"
      :headers="headers"
      :value="value[child.key]"
      :depth="depth + 1"
      :is-sticky="isSticky"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </ExpandingTableRow>
  </div>
</template>
