import { Calendar, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Inline calendar component for selecting a single date or a date range. Unlike DatePicker, Calendar renders as a visible panel (not inside a dropdown).

> Note: For a dropdown-based date picker with a text input, use **DatePicker** instead.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String\\|Date\\|Number\\|Array | \`null\` | v-model — single date string or \`[start, end]\` array for range |
| \`type\` | String | \`'default'\` | \`'default'\` (single) or \`'range'\` |
| \`minDate\` | String\\|Date\\|Number | \`null\` | Earliest selectable date |
| \`maxDate\` | String\\|Date\\|Number | \`null\` | Latest selectable date |
| \`disabledDate\` | Function | \`() => false\` | \`(date) => boolean\` — return true to disable a date |
| \`position\` | String | \`'floating'\` | Layout position hint |
| \`isIndefinite\` | Boolean | \`false\` | Show an "Indefinite" checkbox |
| \`inDefiniteLabel\` | String | \`'Indefinite'\` | Label for the indefinite checkbox |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`string \\| [string, string]\` | Date selected |
| \`reset-calendar\` | — | Calendar reset |
| \`update:isIndefinite\` | \`boolean\` | Indefinite toggle changed |
        `.trim()
      }
    }
  }
}

export const Playground = {
  argTypes: {
    type: { control: 'select', options: ['default', 'range'] }
  },
  args: {
    type: 'default'
  },
  render: (args) => ({
    components: { Calendar, Theme },
    setup() {
      const value = ref(args.type === 'range' ? [] : '')
      return { args, value }
    },
    template: `
      <Theme class="p-6">
        <Calendar v-model="value" v-bind="args" />
        <p class="mt-4 text-sm text-oc-text-400">Value: {{ Array.isArray(value) ? (value.join(' → ') || '—') : (value || '—') }}</p>
      </Theme>
    `
  })
}

export const SingleDate = {
  description: 'Inline single-date calendar. v-model is a Date object or formatted string.',
  highlights: ['type="default" — single date selection', 'v-model — selected date', 'minDate / maxDate — restrict selectable range'],
  code: `<script setup>
import { ref } from 'vue'
import { Calendar } from '@orchidui/core'

const date = ref('')
</script>

<template>
  <div>
    <Calendar v-model="date" />
    <p class="mt-3 text-sm text-oc-text-400">Selected: {{ date || '—' }}</p>
  </div>
</template>`,
  render: () => ({
    components: { Calendar, Theme },
    setup() {
      const date = ref('')
      return { date }
    },
    template: `
      <Theme class="p-6">
        <Calendar v-model="date" />
        <p class="mt-4 text-sm text-oc-text-400">Selected: {{ date || '—' }}</p>
      </Theme>
    `
  })
}

export const DateRange = {
  description: 'Range calendar — select start and end date. v-model is [startDate, endDate].',
  highlights: ['type="range" — range selection mode', 'v-model — [startDate, endDate] array'],
  code: `<script setup>
import { ref } from 'vue'
import { Calendar } from '@orchidui/core'

const range = ref([])
</script>

<template>
  <div>
    <Calendar v-model="range" type="range" />
    <p class="mt-3 text-sm text-oc-text-400">
      From: {{ range[0] || '—' }} · To: {{ range[1] || '—' }}
    </p>
  </div>
</template>`,
  render: () => ({
    components: { Calendar, Theme },
    setup() {
      const range = ref([])
      return { range }
    },
    template: `
      <Theme class="p-6">
        <Calendar v-model="range" type="range" />
        <p class="mt-4 text-sm text-oc-text-400">From: {{ range[0] || '—' }} · To: {{ range[1] || '—' }}</p>
      </Theme>
    `
  })
}

export const WithConstraints = {
  description: 'Restrict selectable dates using minDate and maxDate.',
  highlights: ['minDate — earliest selectable', 'maxDate — latest selectable'],
  render: () => ({
    components: { Calendar, Theme },
    setup() {
      const date     = ref('')
      const today    = new Date().toISOString().slice(0, 10)
      const in30Days = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
      return { date, today, in30Days }
    },
    template: `
      <Theme class="p-6">
        <p class="text-sm text-oc-text-400 mb-3">Only next 30 days selectable</p>
        <Calendar v-model="date" :min-date="today" :max-date="in30Days" />
        <p class="mt-4 text-sm text-oc-text-400">Selected: {{ date || '—' }}</p>
      </Theme>
    `
  })
}

export const Default = {
  args: {
    isRange: false,
    isMultiple: false,
    disabledDates: [],
    minDate: '',
    maxDate: ''
  },
  render: (args) => ({
    components: { Calendar, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <Calendar v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}
