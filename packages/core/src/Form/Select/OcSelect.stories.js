import { Select } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Select,
  tags: ['autodocs']
}

export const Basic = {
  description: 'Single-value select with label and hint. v-model receives the selected option value.',
  highlights: ['v-model — selected value (not the option object)', 'options — array of { label, value }', 'placeholder prop'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref(null)

const options = [
  { label: 'Indonesia', value: 'ID' },
  { label: 'Singapore', value: 'SG' },
  { label: 'Malaysia',  value: 'MY' }
]
</script>

<template>
  <div class="w-[300px] h-[250px]">
    <Select
      v-model="value"
      label="Country"
      hint="Select your country."
      placeholder="Select a country..."
      :options="options"
    />
  </div>
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const value = ref(null)
      const options = [
        { label: 'Indonesia', value: 'ID' },
        { label: 'Singapore', value: 'SG' },
        { label: 'Malaysia',  value: 'MY' }
      ]
      return { value, options }
    },
    template: `
      <div class="p-6 h-[250px]">
        <Select v-model="value" label="Country" placeholder="Select a country..." :options="options" />
      </div>
    `
  })
}

export const Filterable = {
  description: 'Searchable dropdown — shows a search input inside the menu. For async search, set is-asynchronous-search and listen to onSearchKeywords.',
  highlights: ['is-filterable — enables client-side search', 'is-asynchronous-search — disables client-side filter, emits onSearchKeywords instead', 'onSearchKeywords event — debounce and fetch in parent'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref(null)

const options = [
  { label: 'Australia', value: 'AU' },
  { label: 'Canada',    value: 'CA' },
  { label: 'France',    value: 'FR' },
  { label: 'Germany',   value: 'DE' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Japan',     value: 'JP' },
  { label: 'Singapore', value: 'SG' },
  { label: 'UK',        value: 'GB' },
  { label: 'USA',       value: 'US' }
]
</script>

<template>
  <div class="w-[300px] h-[350px]">
    <Select
      v-model="value"
      label="Country"
      placeholder="Search countries..."
      is-filterable
      :options="options"
    />
  </div>
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const value = ref(null)
      const options = [
        { label: 'Australia', value: 'AU' }, { label: 'Canada', value: 'CA' },
        { label: 'France', value: 'FR' }, { label: 'Germany', value: 'DE' },
        { label: 'Indonesia', value: 'ID' }, { label: 'Japan', value: 'JP' },
        { label: 'Singapore', value: 'SG' }, { label: 'UK', value: 'GB' }, { label: 'USA', value: 'US' }
      ]
      return { value, options }
    },
    template: `
      <div class="p-6 h-[350px]">
        <Select v-model="value" label="Country" placeholder="Search countries..." is-filterable :options="options" />
      </div>
    `
  })
}

export const MultiSelect = {
  description: 'Multi-value select. v-model is an array. Selected values appear as Chip tags.',
  highlights: ['multiple prop — enables multi-select', 'v-model is string[] | number[]', 'is-checkboxes — shows checkbox per option', 'max-option-allowed — limit selections'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const values = ref([])

const options = [
  { label: 'Design',      value: 'design' },
  { label: 'Engineering', value: 'eng' },
  { label: 'Marketing',   value: 'mkt' },
  { label: 'Sales',       value: 'sales' },
  { label: 'Support',     value: 'support' }
]
</script>

<template>
  <div class="w-[350px] h-[300px]">
    <Select
      v-model="values"
      label="Departments"
      placeholder="Select departments..."
      multiple
      is-filterable
      is-checkboxes
      :options="options"
    />
  </div>
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const values = ref([])
      const options = [
        { label: 'Design', value: 'design' }, { label: 'Engineering', value: 'eng' },
        { label: 'Marketing', value: 'mkt' }, { label: 'Sales', value: 'sales' },
        { label: 'Support', value: 'support' }
      ]
      return { values, options }
    },
    template: `
      <div class="p-6 h-[300px]">
        <Select v-model="values" label="Departments" placeholder="Select departments..." multiple is-filterable is-checkboxes :options="options" />
      </div>
    `
  })
}

export const GroupedOptions = {
  description: 'Options organized into labeled groups. Pass objects with { label, values: [...] } instead of flat options.',
  highlights: ['grouped format: { label: string, values: Option[] }', 'flat and grouped options can be mixed'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref(null)

// Mix flat options with grouped options
const options = [
  { label: 'Most Popular', value: 'popular' },
  {
    label: 'Southeast Asia',
    values: [
      { label: 'Indonesia', value: 'ID' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Malaysia',  value: 'MY' },
      { label: 'Thailand',  value: 'TH' }
    ]
  },
  {
    label: 'Europe',
    values: [
      { label: 'Germany', value: 'DE' },
      { label: 'France',  value: 'FR' },
      { label: 'UK',      value: 'GB' }
    ]
  }
]
</script>

<template>
  <div class="w-[300px] h-[400px]">
    <Select
      v-model="value"
      label="Region"
      placeholder="Select region..."
      is-filterable
      :options="options"
    />
  </div>
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const value = ref(null)
      const options = [
        { label: 'Most Popular', value: 'popular' },
        { label: 'Southeast Asia', values: [
          { label: 'Indonesia', value: 'ID' }, { label: 'Singapore', value: 'SG' },
          { label: 'Malaysia', value: 'MY' }
        ]},
        { label: 'Europe', values: [
          { label: 'Germany', value: 'DE' }, { label: 'France', value: 'FR' }
        ]}
      ]
      return { value, options }
    },
    template: `
      <div class="p-6 h-[400px]">
        <Select v-model="value" label="Region" placeholder="Select region..." is-filterable :options="options" />
      </div>
    `
  })
}

export const WithAddNew = {
  description: 'Shows an "Add new" button at the bottom of the dropdown. Emit addNew to open a creation flow.',
  highlights: ['is-add-new prop', 'addNew event — triggered on button click'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value   = ref(null)
const options = ref([
  { label: 'Category A', value: 'a' },
  { label: 'Category B', value: 'b' }
])

function onAddNew() {
  const name = prompt('New category name:')
  if (name) options.value.push({ label: name, value: name.toLowerCase() })
}
</script>

<template>
  <div class="w-[300px] h-[300px]">
    <Select
      v-model="value"
      label="Category"
      placeholder="Select or create..."
      is-add-new
      :options="options"
      @add-new="onAddNew"
    />
  </div>
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const value   = ref(null)
      const options = ref([
        { label: 'Category A', value: 'a' },
        { label: 'Category B', value: 'b' }
      ])
      const onAddNew = () => options.value.push({ label: `Category ${options.value.length + 1}`, value: `cat${options.value.length + 1}` })
      return { value, options, onAddNew }
    },
    template: `
      <div class="p-6 h-[300px]">
        <Select v-model="value" label="Category" placeholder="Select or create..." is-add-new :options="options" @add-new="onAddNew" />
      </div>
    `
  })
}
