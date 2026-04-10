import { DatePicker, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Date picker with a calendar dropdown. Supports single date, date range, format customization, min/max constraints, disabled dates, and quick-select shortcuts.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String\\|Date\\|Number\\|Array | — | v-model — formatted string (single) or \`[start, end]\` array (range) |
| \`type\` | String | \`'default'\` | \`'default'\` (single date) or \`'range'\` |
| \`dateFormat\` | String | \`'YYYY-MM-DD'\` | dayjs format string used for display, parsing, and emit |
| \`placeholder\` | String | \`'YYYY-MM-DD'\` | Placeholder text (single mode) |
| \`label\` | String | \`''\` | Label above the input |
| \`hint\` | String | \`''\` | Helper text below the label |
| \`errorMessage\` | String | \`''\` | Error message below the input |
| \`disabled\` | Boolean | \`false\` | Disable the picker |
| \`isRequired\` | Boolean | \`false\` | Show \`*\` next to the label |
| \`minDate\` | String\\|Date\\|Number | \`null\` | Earliest selectable date |
| \`maxDate\` | String\\|Date\\|Number | \`null\` | Latest selectable date |
| \`disabledDate\` | Function | \`() => false\` | \`(date) => boolean\` — return true to disable a date |
| \`disabledRange\` | Object | \`{ start: null, end: null }\` | Block out a continuous date range |
| \`isSplitInput\` | Boolean | \`true\` | Range mode: two separate inputs for start/end |
| \`minLabel\` | String | \`'From'\` | Range start input label |
| \`maxLabel\` | String | \`'To'\` | Range end input label |
| \`countCalendars\` | Number | \`2\` | Calendar months shown in range mode |
| \`shortcuts\` | Array | \`[]\` | Quick-select buttons: \`[{ label, range: [start, end] }]\` |
| \`isIndefinite\` | Boolean | \`false\` | Show an "Indefinite" toggle to clear the date |
| \`placement\` | String | \`'bottom-start'\` | Popper.js dropdown placement |
| \`ai\` | Boolean | \`false\` | AI-filled accent style |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`string \\| [string, string]\` | Date selected |
| \`resetCalendar\` | — | Calendar reset (indefinite toggle off) |
| \`error\` | — | Invalid date typed |
        `.trim()
      }
    }
  }
}

export const Playground = {
  argTypes: {
    type:       { control: 'select', options: ['default', 'range'] },
    dateFormat: { control: 'select', options: ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'DD MMM YYYY'] },
    label:       { control: 'text' },
    hint:        { control: 'text' },
    errorMessage:{ control: 'text' },
    disabled:    { control: 'boolean' },
    isRequired:  { control: 'boolean' },
    isIndefinite:{ control: 'boolean' }
  },
  args: {
    type: 'default',
    dateFormat: 'YYYY-MM-DD',
    label: 'Date',
    hint: 'Select a date.',
    errorMessage: '',
    disabled: false,
    isRequired: false,
    isIndefinite: false
  },
  render: (args) => ({
    components: { DatePicker, Theme },
    setup() {
      const date = ref(args.type === 'range' ? [] : '')
      return { args, date }
    },
    template: `
      <Theme class="p-6 h-[460px] w-[400px]">
        <DatePicker v-model="date" v-bind="args" :placeholder="args.dateFormat" />
        <p class="mt-4 text-sm text-oc-text-400">Value: {{ Array.isArray(date) ? (date.join(' → ') || '—') : (date || '—') }}</p>
      </Theme>
    `
  })
}

export const SingleDate = {
  description: 'Single date picker. v-model is a formatted string (default YYYY-MM-DD).',
  highlights: ['v-model — formatted string', 'dateFormat prop — default "YYYY-MM-DD"', 'update:modelValue event'],
  code: `<script setup>
import { ref } from 'vue'
import { DatePicker } from '@orchidui/core'

const date = ref('')
</script>

<template>
  <div class="w-[280px] h-[400px]">
    <DatePicker
      v-model="date"
      label="Date"
      hint="Select a date."
      placeholder="YYYY-MM-DD"
      date-format="YYYY-MM-DD"
    />
    <p class="mt-4 text-sm text-oc-text-400">Selected: {{ date || '—' }}</p>
  </div>
</template>`,
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref('')
      return { date }
    },
    template: `
      <div class="p-6 h-[420px]">
        <DatePicker v-model="date" label="Date" placeholder="YYYY-MM-DD" date-format="YYYY-MM-DD" />
      </div>
    `
  })
}

export const DateRange = {
  description: 'Range picker. v-model is an array [startDate, endDate]. isSplitInput shows two separate text inputs.',
  highlights: ['type="range"', 'v-model — [startString, endString]', 'isSplitInput — two separate inputs (default true for range)', 'minLabel / maxLabel — input labels'],
  code: `<script setup>
import { ref } from 'vue'
import { DatePicker } from '@orchidui/core'

const range = ref([])
</script>

<template>
  <div class="w-[360px] h-[500px]">
    <DatePicker
      v-model="range"
      type="range"
      label="Date range"
      hint="Select start and end date."
      date-format="YYYY-MM-DD"
      min-label="From"
      max-label="To"
    />
    <p class="mt-4 text-sm text-oc-text-400">
      From: {{ range[0] || '—' }} · To: {{ range[1] || '—' }}
    </p>
  </div>
</template>`,
  render: () => ({
    components: { DatePicker },
    setup() {
      const range = ref([])
      return { range }
    },
    template: `
      <div class="p-6 h-[520px]">
        <DatePicker v-model="range" type="range" label="Date range" date-format="YYYY-MM-DD" min-label="From" max-label="To" />
      </div>
    `
  })
}

export const WithConstraints = {
  description: 'Disable dates outside a valid range using minDate and maxDate.',
  highlights: ['minDate — earliest selectable date', 'maxDate — latest selectable date', 'disabledDate — function(date) => boolean for custom logic'],
  code: `<script setup>
import { ref } from 'vue'
import { DatePicker } from '@orchidui/core'

const date = ref('')

// Allow only the next 30 days
const today   = new Date().toISOString().slice(0, 10)
const in30Days = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
</script>

<template>
  <div class="w-[280px] h-[420px]">
    <DatePicker
      v-model="date"
      label="Delivery date"
      hint="Only the next 30 days are available."
      :min-date="today"
      :max-date="in30Days"
      date-format="YYYY-MM-DD"
    />
  </div>
</template>`,
  render: () => ({
    components: { DatePicker },
    setup() {
      const date     = ref('')
      const today    = new Date().toISOString().slice(0, 10)
      const in30Days = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
      return { date, today, in30Days }
    },
    template: `
      <div class="p-6 h-[420px]">
        <DatePicker v-model="date" label="Delivery date" hint="Only next 30 days." :min-date="today" :max-date="in30Days" date-format="YYYY-MM-DD" />
      </div>
    `
  })
}

export const WithShortcuts = {
  description: 'Quick-select shortcut buttons shown above the calendar for common date ranges.',
  highlights: ['shortcuts — array of { label, range: [start, end] }', 'type="range" — required for range shortcuts'],
  code: `<script setup>
import { ref } from 'vue'
import { DatePicker } from '@orchidui/core'

const range = ref([])

const today = new Date()
const fmt = (d) => d.toISOString().slice(0, 10)

const shortcuts = [
  {
    label: 'Last 7 days',
    range: [fmt(new Date(Date.now() - 6 * 86400000)), fmt(today)]
  },
  {
    label: 'Last 30 days',
    range: [fmt(new Date(Date.now() - 29 * 86400000)), fmt(today)]
  },
  {
    label: 'This month',
    range: [
      fmt(new Date(today.getFullYear(), today.getMonth(), 1)),
      fmt(new Date(today.getFullYear(), today.getMonth() + 1, 0))
    ]
  }
]
</script>

<template>
  <div class="w-[360px] h-[520px]">
    <DatePicker
      v-model="range"
      type="range"
      label="Report period"
      date-format="YYYY-MM-DD"
      :shortcuts="shortcuts"
    />
    <p class="mt-4 text-sm text-oc-text-400">
      From: {{ range[0] || '—' }} · To: {{ range[1] || '—' }}
    </p>
  </div>
</template>`,
  render: () => ({
    components: { DatePicker },
    setup() {
      const range = ref([])
      const today = new Date()
      const fmt = (d) => d.toISOString().slice(0, 10)
      const shortcuts = [
        { label: 'Last 7 days',  range: [fmt(new Date(Date.now() - 6 * 86400000)), fmt(today)] },
        { label: 'Last 30 days', range: [fmt(new Date(Date.now() - 29 * 86400000)), fmt(today)] },
        { label: 'This month',   range: [fmt(new Date(today.getFullYear(), today.getMonth(), 1)), fmt(new Date(today.getFullYear(), today.getMonth() + 1, 0))] }
      ]
      return { range, shortcuts }
    },
    template: `
      <div class="p-6 h-[540px]">
        <DatePicker v-model="range" type="range" label="Report period" date-format="YYYY-MM-DD" :shortcuts="shortcuts" />
        <p class="mt-4 text-sm text-oc-text-400">From: {{ range[0] || '—' }} · To: {{ range[1] || '—' }}</p>
      </div>
    `
  })
}

export const CustomFormat = {
  description: 'Change the date format string. The same format is used for display, input parsing, and the v-model value.',
  highlights: ['dateFormat — any dayjs format string', 'placeholder should match dateFormat', 'v-model value matches the format'],
  code: `<script setup>
import { ref } from 'vue'
import { DatePicker } from '@orchidui/core'

const date = ref('')
</script>

<template>
  <div class="w-[280px] h-[420px]">
    <DatePicker
      v-model="date"
      label="Date (DD/MM/YYYY)"
      placeholder="DD/MM/YYYY"
      date-format="DD/MM/YYYY"
    />
  </div>
</template>`,
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref('')
      return { date }
    },
    template: `
      <div class="p-6 h-[420px]">
        <DatePicker v-model="date" label="Date (DD/MM/YYYY)" placeholder="DD/MM/YYYY" date-format="DD/MM/YYYY" />
      </div>
    `
  })
}

export const DisabledState = {
  description: 'Disabled date picker — non-interactive with reduced opacity.',
  highlights: ['disabled prop'],
  code: `<script setup>
import { ref } from 'vue'
import { DatePicker } from '@orchidui/core'

const date = ref('2025-06-15')
</script>

<template>
  <div class="w-[280px]">
    <DatePicker
      v-model="date"
      label="Locked date"
      :disabled="true"
      date-format="YYYY-MM-DD"
    />
  </div>
</template>`,
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref('2025-06-15')
      return { date }
    },
    template: `
      <div class="p-6 w-[280px]">
        <DatePicker v-model="date" label="Locked date" :disabled="true" date-format="YYYY-MM-DD" />
      </div>
    `
  })
}
