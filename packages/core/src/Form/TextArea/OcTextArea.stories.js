import { TextArea, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Multi-line text input with label, hint, error, auto-resize, and AI-assisted state.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String | — | v-model — textarea value |
| \`label\` | String | — | Label shown above the textarea |
| \`hint\` | String | — | Helper text below the label |
| \`placeholder\` | String | — | Placeholder text |
| \`errorMessage\` | String | — | Error message in red below the textarea |
| \`rows\` | Number | — | Number of visible text rows |
| \`autoResize\` | Boolean | \`false\` | Allow the user to resize vertically |
| \`isDisabled\` | Boolean | \`false\` | Disable the textarea |
| \`isRequired\` | Boolean | \`false\` | Show \`*\` next to the label |
| \`labelIcon\` | String | \`''\` | Icon name inside the label area |
| \`tooltipText\` | String | \`''\` | Tooltip on the label icon |
| \`tooltipOptions\` | Object | \`{}\` | Extra tooltip props |
| \`ai\` | Boolean | \`false\` | AI-filled accent style |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`string\` | Textarea value changed |
        `.trim()
      }
    }
  }
}

export const Playground = {
  argTypes: {
    label:        { control: 'text' },
    hint:         { control: 'text' },
    placeholder:  { control: 'text' },
    errorMessage: { control: 'text' },
    rows:         { control: 'number' },
    isDisabled:   { control: 'boolean' },
    isRequired:   { control: 'boolean' },
    autoResize:   { control: 'boolean' }
  },
  args: {
    label: 'Description',
    hint: 'Enter a detailed description.',
    placeholder: 'Type here...',
    errorMessage: '',
    rows: 5,
    isDisabled: false,
    isRequired: false,
    autoResize: false
  },
  render: (args) => ({
    components: { TextArea, Theme },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <Theme class="p-6 w-[400px]">
        <TextArea v-model="value" v-bind="args" />
        <p class="mt-3 text-sm text-oc-text-400">Length: {{ value.length }}</p>
      </Theme>
    `
  })
}

export const Basic = {
  description: 'Standard textarea with label, hint, placeholder, and v-model.',
  highlights: ['v-model — string value', 'rows — number of visible lines', 'label + hint for context'],
  code: `<script setup>
import { ref } from 'vue'
import { TextArea } from '@orchidui/core'

const notes = ref('')
</script>

<template>
  <div class="w-[400px]">
    <TextArea
      v-model="notes"
      label="Order notes"
      hint="Add any special instructions for this order."
      placeholder="e.g. Leave at the door."
      :rows="4"
    />
    <p class="mt-2 text-sm text-oc-text-400">{{ notes.length }} chars</p>
  </div>
</template>`,
  render: () => ({
    components: { TextArea, Theme },
    setup() {
      const notes = ref('')
      return { notes }
    },
    template: `
      <Theme class="p-6 w-[400px]">
        <TextArea v-model="notes" label="Order notes" hint="Add any special instructions." placeholder="e.g. Leave at the door." :rows="4" />
        <p class="mt-2 text-sm text-oc-text-400">{{ notes.length }} chars</p>
      </Theme>
    `
  })
}

export const States = {
  description: 'Normal, disabled, and error states.',
  highlights: ['isDisabled — non-interactive', 'errorMessage — red border + message below'],
  code: `<script setup>
import { ref } from 'vue'
import { TextArea } from '@orchidui/core'

const normal   = ref('')
const disabled = ref('This field is locked.')
const error    = ref('')
</script>

<template>
  <div class="flex flex-col gap-6 w-[400px]">
    <TextArea v-model="normal"   label="Normal"   placeholder="Type something..." :rows="3" />
    <TextArea v-model="disabled" label="Disabled" :is-disabled="true" :rows="3" />
    <TextArea v-model="error"    label="Notes"    error-message="This field is required." :rows="3" />
  </div>
</template>`,
  render: () => ({
    components: { TextArea, Theme },
    setup() {
      const normal   = ref('')
      const disabled = ref('This field is locked.')
      const error    = ref('')
      return { normal, disabled, error }
    },
    template: `
      <Theme class="p-6 flex flex-col gap-6 w-[400px]">
        <TextArea v-model="normal"   label="Normal"   placeholder="Type something..." :rows="3" />
        <TextArea v-model="disabled" label="Disabled" :is-disabled="true" :rows="3" />
        <TextArea v-model="error"    label="Notes"    error-message="This field is required." :rows="3" />
      </Theme>
    `
  })
}

export const Default = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    isDisabled: false,
    isRequired: false,
    errorMessage: '',
    rows: 5
  },
  render: (args) => ({
    components: { TextArea, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <TextArea v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}
