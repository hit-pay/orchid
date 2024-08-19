<script setup lang="ts">
import ExpandingTableRow from './OcExpadingTableRow.vue'
import ExpandingHeaderRow from './OcExpandingHeaderRow.vue'

defineProps({
  total: {
    type: Number,
    default: 0
  },
  headers: {
    type: Array,
    required: true
  },
  fields: {
    type: Object,
    required: true
  },
  isAlternative: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex flex-col border rounded w-full border-oc-gray-200 overflow-hidden">
    <template v-if="isAlternative">
      <ExpandingHeaderRow :headers="headers" />

      <ExpandingTableRow
        v-for="(row, i) in fields"
        :key="i"
        :row="row"
        :headers="headers"
        :is-alternative="isAlternative"
        :important="row.important"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </ExpandingTableRow>
    </template>
    <template v-else>
      <ExpandingTableRow
        v-for="(row, i) in headers"
        :key="i"
        :row="row"
        :headers="headers"
        :is-alternative="isAlternative"
        :value="fields[row.key]"
        :important="row.important"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </ExpandingTableRow>
    </template>
    <slot name="total">
      <ExpandingTableRow is-total :headers="headers" :row="{ label: 'Total' }" :value="total" />
    </slot>
  </div>
</template>
