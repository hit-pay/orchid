import { Select, Theme } from '@/orchidui-core'
import { ref } from 'vue'
import BasicExample from './examples/Basic.vue'
import BasicRaw from './examples/Basic.vue?raw'
import FilterableExample from './examples/Filterable.vue'
import FilterableRaw from './examples/Filterable.vue?raw'
import MultiSelectExample from './examples/MultiSelect.vue'
import MultiSelectRaw from './examples/MultiSelect.vue?raw'
import GroupedOptionsExample from './examples/GroupedOptions.vue'
import GroupedOptionsRaw from './examples/GroupedOptions.vue?raw'
import AsyncSearchExample from './examples/AsyncSearch.vue'
import AsyncSearchRaw from './examples/AsyncSearch.vue?raw'
import StatesExample from './examples/States.vue'
import StatesRaw from './examples/States.vue?raw'
import InlineLabelExample from './examples/InlineLabel.vue'
import InlineLabelRaw from './examples/InlineLabel.vue?raw'
import WithAddNewExample from './examples/WithAddNew.vue'
import WithAddNewRaw from './examples/WithAddNew.vue?raw'
import CustomWidthExample from './examples/CustomWidth.vue'
import CustomWidthRaw from './examples/CustomWidth.vue?raw'
import CustomPlacementExample from './examples/CustomPlacement.vue'
import CustomPlacementRaw from './examples/CustomPlacement.vue?raw'

export default {
  component: Select,
  tags: ['autodocs'],
  kind: 'leaf',
  description: 'Dropdown input for single or multi-value selection with search, grouping, and async options.',
  keywords: ['select', 'dropdown', 'option', 'filter', 'multi-select'],
  use_for: [
    'dropdown selection field',
    'single select input',
    'multi select with checkboxes',
    'async search dropdown',
    'grouped options select',
    'filter field in forms'
  ],
  understand_with: ['FormBuilder', 'DataTable', 'FilterForm', 'Chip', 'Dropdown', 'Option']
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
    placement:    {
      control: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'left', 'right'],
      description: 'Popper placement — bottom-start = bottom-left'
    },
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
    placement:    'bottom-end',
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

export const Basic = {
  description: 'Single-value select with label and hint. v-model receives the selected option value (not the option object).',
  highlights: ['v-model — selected value (not the option object)', 'options — array of { label, value }', 'hint prop — helper text'],
  code: BasicRaw,
  render: () => ({
    components: { BasicExample },
    template: `<div class="p-6"><BasicExample /></div>`
  })
}

export const Filterable = {
  description: 'Searchable dropdown — shows a search input inside the menu. For async search, set is-asynchronous-search and listen to onSearchKeywords.',
  highlights: ['is-filterable — client-side search', 'is-asynchronous-search — disables client-side filter, emits onSearchKeywords', 'onSearchKeywords event — debounce and fetch in parent'],
  code: FilterableRaw,
  render: () => ({
    components: { FilterableExample },
    template: `<div class="p-6"><FilterableExample /></div>`
  })
}

export const MultiSelect = {
  description: 'Multi-value select. v-model is an array. Selected values appear as Chip tags. is-checkboxes shows a checkbox per option.',
  highlights: ['multiple — enables multi-select', 'v-model is string[]', 'is-checkboxes — checkbox UX', 'is-select-all — select/clear all button', 'max-option-allowed — cap selections'],
  code: MultiSelectRaw,
  render: () => ({
    components: { MultiSelectExample },
    template: `<div class="p-6"><MultiSelectExample /></div>`
  })
}

export const GroupedOptions = {
  description: 'Options organized into labeled groups. Pass objects with { label, values: [...] } instead of flat options. Flat and grouped can be mixed.',
  highlights: ['grouped format: { label: string, values: Option[] }', 'flat and grouped can be mixed in same array'],
  code: GroupedOptionsRaw,
  render: () => ({
    components: { GroupedOptionsExample },
    template: `<div class="p-6"><GroupedOptionsExample /></div>`
  })
}

export const AsyncSearch = {
  description: 'Server-side search. Set is-asynchronous-search to disable client-side filtering. Listen to onSearchKeywords, debounce, then replace options with the server response.',
  highlights: ['is-asynchronous-search — disables client-side filter', 'onSearchKeywords event — (query: string)', 'is-loading — show skeleton while fetching', 'replace options ref after fetch'],
  code: AsyncSearchRaw,
  render: () => ({
    components: { AsyncSearchExample },
    template: `<div class="p-6"><AsyncSearchExample /></div>`
  })
}

export const States = {
  description: 'All interactive states: disabled, readonly, with error, and clearable.',
  highlights: ['is-disabled', 'is-readonly', 'errorMessage prop', 'is-clearable — shows × button'],
  code: StatesRaw,
  render: () => ({
    components: { StatesExample },
    template: `<div class="p-6"><StatesExample /></div>`
  })
}

export const InlineLabel = {
  description: 'Compact inline label inside the trigger — used in table toolbars (e.g. "10 per page").',
  highlights: ['is-inline-label — label sits inside the trigger', 'is-slim — reduced height', 'common in DataTable per-page dropdown'],
  code: InlineLabelRaw,
  render: () => ({
    components: { InlineLabelExample },
    template: `<div class="p-6"><InlineLabelExample /></div>`
  })
}

export const WithAddNew = {
  description: 'Shows an "Add new" button at the bottom of the dropdown. Emit addNew to open a creation flow.',
  highlights: ['is-add-new prop', 'addNew event — triggered on button click'],
  code: WithAddNewRaw,
  render: () => ({
    components: { WithAddNewExample },
    template: `<div class="p-6"><WithAddNewExample /></div>`
  })
}

export const CustomWidth = {
  description: 'Pass popperStyle to override the dropdown width when the menu should be wider or narrower than the trigger.',
  highlights: ['popperStyle — inline styles on the dropdown menu', "e.g. { width: '500px' }", 'menu defaults to the trigger width when popperStyle has no width'],
  code: CustomWidthRaw,
  render: () => ({
    components: { CustomWidthExample },
    template: `<div class="p-6"><CustomWidthExample /></div>`
  })
}

export const CustomPlacement = {
  description: 'Control where the dropdown opens relative to the trigger. Use bottom-start for bottom-left alignment.',
  highlights: ['placement — Popper.js placement string', 'bottom-start — bottom-left', 'bottom-end — bottom-right (default)'],
  code: CustomPlacementRaw,
  render: () => ({
    components: { CustomPlacementExample },
    template: `<div class="p-6"><CustomPlacementExample /></div>`
  })
}
