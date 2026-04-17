<script setup>
import ExpandingTableRow from './OcExpandingTableRow.vue'
import ExpandingHeaderRow from './OcExpandingHeaderRow.vue'
import { computed } from 'vue'

const props = defineProps({
  /** Numeric value shown in the total summary row at the bottom. */
  total: {
    type: Number,
    default: 0
  },
  /** Column header definitions — each with `key`, `label`, and optional `class` / `itemClasses`. */
  headers: {
    type: Array,
    required: true
  },
  /**
   * Row data. In `isAlternative` mode: an array of row objects keyed to header keys.
   * In default mode: a single object where keys match header keys (used for a key→value layout).
   */
  fields: {
    type: Object,
    required: true
  },
  /** Use multi-column grid layout (one row per record). Default is a two-column key/value layout. */
  isAlternative: {
    type: Boolean,
    default: false
  },
  /** Show skeleton rows while data is loading (only in `isAlternative` mode). */
  isLoading: {
    type: Boolean,
    default: false
  },
  /** Number of skeleton rows shown during loading. */
  loadingRows: {
    type: Number,
    default: 5
  },
  /** Pin the first column to the left when horizontal scroll is active. */
  isSticky: {
    type: Boolean,
    default: false
  },
  /** CSS `grid-template-columns` value applied to the table grid. */
  gridTemplateColumns: {
    type: String,
    default: '32px 200px repeat(${headers.length - 1}, minmax(150px, auto)) 32px'
  }
})
const emptyRow = computed(() => Object.fromEntries(props.headers.map((h) => [h.key, ''])))
</script>

<template>
  <div class="flex flex-col border rounded w-full border-oc-gray-200 overflow-auto">
    <template v-if="isAlternative">
      <ExpandingHeaderRow :headers="headers" :is-sticky="isSticky" :grid-template-columns="gridTemplateColumns" />

      <template v-if="isLoading && !fields.length">
        <ExpandingTableRow
          v-for="rowInd in loadingRows"
          :key="rowInd"
          is-loading
          :is-alternative="isAlternative"
          :row="emptyRow"
          :headers="headers"
          :is-sticky="isSticky"
          :grid-template-columns="gridTemplateColumns"
        />
      </template>
      <template v-else>
        <ExpandingTableRow
          v-for="(row, i) in fields"
          :key="i"
          :row="row"
          :headers="headers"
          :is-loading="isLoading"
          :is-alternative="isAlternative"
          :is-sticky="isSticky"
          :important="row.important"
          :grid-template-columns="gridTemplateColumns"
        >
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </ExpandingTableRow>
      </template>
    </template>
    <template v-else>
      <ExpandingTableRow
        v-for="(row, i) in headers"
        :key="i"
        :row="row"
        :headers="headers"
        :is-loading="isLoading"
        :is-alternative="isAlternative"
        :value="fields[row.key]"
        :is-sticky="isSticky"
        :important="row.important"
        :grid-template-columns="gridTemplateColumns"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </ExpandingTableRow>
    </template>
    <slot name="total">
      <ExpandingTableRow is-total :headers="headers" :row="{ label: 'Total' }" :value="total" :is-sticky="isSticky" :grid-template-columns="gridTemplateColumns" />
    </slot>
  </div>
</template>
