import { DatePicker } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: DatePicker,
  tags: ['autodocs']
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
