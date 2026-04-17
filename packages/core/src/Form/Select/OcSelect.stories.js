import { Select, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Select,
  tags: ['autodocs'],
  kind: 'leaf',
  use_for: [
    'dropdown selection field',
    'single select input',
    'multi select with checkboxes',
    'async search dropdown',
    'grouped options select',
    'filter field in forms'
  ],
  parameters: {
    docs: {
      description: {
        component: `
Select is a dropdown input that supports single value, multi-value, searchable, grouped options, async search, and inline label variants.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String\\|Number\\|Array | — | v-model value. Array when \`multiple\` is true |
| \`options\` | Array | — | Flat: \`[{ label, value }]\` or grouped: \`[{ label, values: [...] }]\` |
| \`label\` | String | — | Field label shown above the select |
| \`hint\` | String | — | Helper text shown below |
| \`placeholder\` | String | \`'Placeholder'\` | Text shown when no value is selected |
| \`icon\` | String | — | Icon name shown inside the trigger |
| \`errorMessage\` | String | — | Validation error text shown in red |
| \`multiple\` | Boolean | \`false\` | Enable multi-value selection |
| \`isFilterable\` | Boolean | \`false\` | Show a search input inside the dropdown |
| \`isAsynchronousSearch\` | Boolean | \`false\` | Disable client-side filtering; emits \`onSearchKeywords\` instead |
| \`isCheckboxes\` | Boolean | \`false\` | Show checkboxes next to options (multi-select UX) |
| \`isSelectAll\` | Boolean | \`false\` | Show a "Select all" checkbox (requires \`multiple\`) |
| \`isAddNew\` | Boolean | \`false\` | Show an "Add new" button at the bottom of the dropdown |
| \`isDisabled\` | Boolean | \`false\` | Disable the select |
| \`isReadonly\` | Boolean | \`false\` | Read-only (non-interactive) display |
| \`isLoading\` | Boolean | \`false\` | Show skeleton while options are loading |
| \`isInlineLabel\` | Boolean | \`false\` | Compact inline label inside the trigger (used in DataTable per-page) |
| \`isTransparent\` | Boolean | \`false\` | Remove border and background |
| \`isSlim\` | Boolean | \`false\` | Reduced height trigger |
| \`isClearable\` | Boolean | \`false\` | Show a clear (×) button when a value is selected |
| \`hideChevron\` | Boolean | \`false\` | Hide the dropdown arrow icon |
| \`maxOptionAllowed\` | Number | — | Maximum number of selections (multi-select only) |
| \`searchKeywords\` | String | — | External control of the search query |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | value | Selected value changed |
| \`onSearchKeywords\` | query | Emitted on search input change when \`isAsynchronousSearch\` is true |
| \`addNew\` | — | "Add new" button was clicked |
| \`cleared\` | — | Clear button was clicked |
| \`close\` | — | Dropdown closed |
| \`toggle\` | — | Dropdown opened or closed |
| \`loadMore\` | — | User scrolled to the bottom of the list |
| \`max-option-allowed-set\` | — | User tried to select more than \`maxOptionAllowed\` |
        `.trim()
      }
    }
  }
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    isDisabled:   { control: 'boolean' },
    isFilterable: { control: 'boolean' },
    isClearable:  { control: 'boolean' },
    isLoading:    { control: 'boolean' },
    multiple:     { control: 'boolean' },
    isCheckboxes: { control: 'boolean' },
    label:        { control: 'text' },
    hint:         { control: 'text' },
    placeholder:  { control: 'text' },
    errorMessage: { control: 'text' }
  },
  args: {
    isDisabled:   false,
    isFilterable: false,
    isClearable:  false,
    isLoading:    false,
    multiple:     false,
    isCheckboxes: false,
    label:        'Country',
    hint:         '',
    placeholder:  'Select a country...',
    errorMessage: ''
  },
  render: (args) => ({
    components: { Select, Theme },
    setup() {
      const value = ref(null)
      const options = [
        { label: 'Indonesia', value: 'ID' },
        { label: 'Singapore', value: 'SG' },
        { label: 'Malaysia',  value: 'MY' },
        { label: 'Thailand',  value: 'TH' },
        { label: 'Vietnam',   value: 'VN' }
      ]
      return { args, value, options }
    },
    template: `
      <Theme class="p-6 h-[320px]">
        <Select v-model="value" v-bind="args" :options="options" />
      </Theme>
    `
  })
}

// ── Basic ─────────────────────────────────────────────────────────────────────

export const Basic = {
  description: 'Single-value select with label and hint. v-model receives the selected option value (not the option object).',
  highlights: ['v-model — selected value (not the option object)', 'options — array of { label, value }', 'hint prop — helper text'],
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

// ── Filterable ────────────────────────────────────────────────────────────────

export const Filterable = {
  description: 'Searchable dropdown — shows a search input inside the menu. For async search, set is-asynchronous-search and listen to onSearchKeywords.',
  highlights: ['is-filterable — client-side search', 'is-asynchronous-search — disables client-side filter, emits onSearchKeywords', 'onSearchKeywords event — debounce and fetch in parent'],
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

// ── Multi-select ──────────────────────────────────────────────────────────────

export const MultiSelect = {
  description: 'Multi-value select. v-model is an array. Selected values appear as Chip tags. is-checkboxes shows a checkbox per option.',
  highlights: ['multiple — enables multi-select', 'v-model is string[]', 'is-checkboxes — checkbox UX', 'is-select-all — select/clear all button', 'max-option-allowed — cap selections'],
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
      is-select-all
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
        <Select v-model="values" label="Departments" placeholder="Select departments..." multiple is-filterable is-checkboxes is-select-all :options="options" />
      </div>
    `
  })
}

// ── Grouped Options ───────────────────────────────────────────────────────────

export const GroupedOptions = {
  description: 'Options organized into labeled groups. Pass objects with { label, values: [...] } instead of flat options. Flat and grouped can be mixed.',
  highlights: ['grouped format: { label: string, values: Option[] }', 'flat and grouped can be mixed in same array'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref(null)

const options = [
  { label: 'Most Popular', value: 'popular' },
  {
    label: 'Southeast Asia',
    values: [
      { label: 'Indonesia', value: 'ID' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Malaysia',  value: 'MY' }
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

// ── Async Search ──────────────────────────────────────────────────────────────

export const AsyncSearch = {
  description: 'Server-side search. Set is-asynchronous-search to disable client-side filtering. Listen to onSearchKeywords, debounce, then replace options with the server response.',
  highlights: ['is-asynchronous-search — disables client-side filter', 'onSearchKeywords event — (query: string)', 'is-loading — show skeleton while fetching', 'replace options ref after fetch'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value   = ref(null)
const options = ref([])
const isLoading = ref(false)

let timer = null
function onSearch(query) {
  isLoading.value = true
  clearTimeout(timer)
  timer = setTimeout(async () => {
    // Replace with real API call
    options.value = [
      { label: \`Result for "\${query}" 1\`, value: '1' },
      { label: \`Result for "\${query}" 2\`, value: '2' }
    ]
    isLoading.value = false
  }, 400)
}
</script>

<template>
  <div class="w-[320px] h-[280px]">
    <Select
      v-model="value"
      label="Search users"
      placeholder="Type to search..."
      is-filterable
      is-asynchronous-search
      :is-loading="isLoading"
      :options="options"
      @on-search-keywords="onSearch"
    />
  </div>
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const value     = ref(null)
      const options   = ref([])
      const isLoading = ref(false)
      let timer = null
      function onSearch(query) {
        if (!query) { options.value = []; return }
        isLoading.value = true
        clearTimeout(timer)
        timer = setTimeout(() => {
          options.value = [
            { label: `Result for "${query}" A`, value: '1' },
            { label: `Result for "${query}" B`, value: '2' },
            { label: `Result for "${query}" C`, value: '3' }
          ]
          isLoading.value = false
        }, 500)
      }
      return { value, options, isLoading, onSearch }
    },
    template: `
      <div class="p-6 h-[280px]">
        <Select v-model="value" label="Search users" placeholder="Type to search..." is-filterable is-asynchronous-search :is-loading="isLoading" :options="options" @on-search-keywords="onSearch" />
      </div>
    `
  })
}

// ── Disabled & States ─────────────────────────────────────────────────────────

export const States = {
  description: 'All interactive states: disabled, readonly, with error, and clearable.',
  highlights: ['is-disabled', 'is-readonly', 'errorMessage prop', 'is-clearable — shows × button'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const options = [
  { label: 'Singapore', value: 'SG' },
  { label: 'Malaysia',  value: 'MY' }
]
</script>

<template>
  <div class="flex flex-col gap-6 w-[300px] h-[600px]">
    <Select
      model-value="SG"
      label="Disabled"
      is-disabled
      :options="options"
    />
    <Select
      model-value="MY"
      label="Read-only"
      is-readonly
      :options="options"
    />
    <Select
      :model-value="null"
      label="With error"
      error-message="Please select a country."
      :options="options"
    />
    <Select
      model-value="SG"
      label="Clearable"
      is-clearable
      :options="options"
    />
  </div>
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const options = [
        { label: 'Singapore', value: 'SG' },
        { label: 'Malaysia',  value: 'MY' }
      ]
      const v = ref('SG')
      return { options, v }
    },
    template: `
      <div class="p-6 flex flex-col gap-6 w-[300px]">
        <Select model-value="SG"  label="Disabled"    is-disabled   :options="options" />
        <Select model-value="MY"  label="Read-only"   is-readonly   :options="options" />
        <Select :model-value="null" label="With error" error-message="Please select a country." :options="options" />
        <Select v-model="v"       label="Clearable"   is-clearable  :options="options" />
      </div>
    `
  })
}

// ── Inline Label ──────────────────────────────────────────────────────────────

export const InlineLabel = {
  description: 'Compact inline label inside the trigger — used in table toolbars (e.g. "10 per page").',
  highlights: ['is-inline-label — label sits inside the trigger', 'is-slim — reduced height', 'common in DataTable per-page dropdown'],
  code: `<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const perPage = ref(10)

const options = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 }
]
</script>

<template>
  <Select
    v-model="perPage"
    label="Per page"
    is-inline-label
    is-slim
    :options="options"
  />
</template>`,
  render: () => ({
    components: { Select },
    setup() {
      const perPage = ref(10)
      const options = [
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 },
        { label: '100', value: 100 }
      ]
      return { perPage, options }
    },
    template: `
      <div class="p-6">
        <Select v-model="perPage" label="Per page" is-inline-label is-slim :options="options" />
      </div>
    `
  })
}

// ── Add New ───────────────────────────────────────────────────────────────────

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
  const n = options.value.length + 1
  options.value.push({ label: \`Category \${n}\`, value: \`cat\${n}\` })
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
      const onAddNew = () => {
        const n = options.value.length + 1
        options.value.push({ label: `Category ${n}`, value: `cat${n}` })
      }
      return { value, options, onAddNew }
    },
    template: `
      <div class="p-6 h-[300px]">
        <Select v-model="value" label="Category" placeholder="Select or create..." is-add-new :options="options" @add-new="onAddNew" />
      </div>
    `
  })
}
