import { Checkbox, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Single checkbox with label, hint, error, partial/indeterminate state, and a button card variant.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | Boolean | — | v-model — checked state |
| \`isPartial\` | Boolean | \`false\` | Indeterminate state (dash icon) — used for "select all" headers |
| \`isDisabled\` | Boolean | \`false\` | Disable the checkbox |
| \`label\` | String | — | Label text beside the checkbox |
| \`topLabel\` | String | — | Label shown above the checkbox (via BaseInput) |
| \`hint\` | String | — | Helper text below the checkbox |
| \`errorMessage\` | String | — | Error message below the checkbox |
| \`isButtonVariant\` | Boolean | \`false\` | Render as a bordered card button |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`boolean\` | Checked state toggled |

---

## Slots

| Slot | Description |
|------|-------------|
| \`#after\` | Extra content appended after the label inside the checkbox row |
        `.trim()
      }
    }
  }
}

export const Playground = {
  argTypes: {
    label:       { control: 'text' },
    topLabel:    { control: 'text' },
    hint:        { control: 'text' },
    errorMessage:{ control: 'text' },
    isDisabled:      { control: 'boolean' },
    isPartial:       { control: 'boolean' },
    isButtonVariant: { control: 'boolean' }
  },
  args: {
    label: 'Accept terms and conditions',
    topLabel: '',
    hint: 'You must accept before continuing.',
    errorMessage: '',
    isDisabled: false,
    isPartial: false,
    isButtonVariant: false
  },
  render: (args) => ({
    components: { Checkbox, Theme },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <Theme class="p-6">
        <Checkbox v-model="checked" v-bind="args" />
        <p class="mt-3 text-sm text-oc-text-400">Checked: {{ checked }}</p>
      </Theme>
    `
  })
}

export const Basic = {
  description: 'Single checkbox with v-model, label, and hint.',
  highlights: ['v-model — boolean checked state', 'label — text beside the checkbox', 'hint — helper text below'],
  code: `<script setup>
import { ref } from 'vue'
import { Checkbox } from '@orchidui/core'

const agreed = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2">
    <Checkbox
      v-model="agreed"
      label="I agree to the Terms of Service"
      hint="Required to create an account."
    />
    <p class="text-sm text-oc-text-400">Agreed: {{ agreed }}</p>
  </div>
</template>`,
  render: () => ({
    components: { Checkbox, Theme },
    setup() {
      const agreed = ref(false)
      return { agreed }
    },
    template: `
      <Theme class="p-6 flex flex-col gap-2">
        <Checkbox v-model="agreed" label="I agree to the Terms of Service" hint="Required to create an account." />
        <p class="text-sm text-oc-text-400">Agreed: {{ agreed }}</p>
      </Theme>
    `
  })
}

export const States = {
  description: 'All visual states: unchecked, checked, partial (indeterminate), disabled, and error.',
  highlights: ['isPartial — indeterminate/dash state for "select all" headers', 'isDisabled — non-interactive', 'errorMessage — red ring + error text'],
  render: () => ({
    components: { Checkbox, Theme },
    template: `
      <Theme class="p-6">
        <div class="grid grid-cols-4 gap-6 w-fit items-start">
          <div class="flex flex-col items-center gap-1">
            <Checkbox />
            <span class="text-xs text-oc-text-300">Unchecked</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Checkbox :model-value="true" />
            <span class="text-xs text-oc-text-300">Checked</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Checkbox is-partial />
            <span class="text-xs text-oc-text-300">Partial</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Checkbox error-message="Required" />
            <span class="text-xs text-oc-text-300">Error</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Checkbox disabled />
            <span class="text-xs text-oc-text-300">Disabled</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Checkbox :model-value="true" disabled />
            <span class="text-xs text-oc-text-300">Disabled checked</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Checkbox is-partial disabled />
            <span class="text-xs text-oc-text-300">Disabled partial</span>
          </div>
        </div>
      </Theme>
    `
  })
}

export const SelectAll = {
  description: 'Partial/indeterminate state for "select all" headers. Shows a dash when some (but not all) items are selected.',
  highlights: ['isPartial — true when some rows selected', ':model-value="allSelected" — true when all selected', 'clicking partial cycles to all-selected'],
  code: `<script setup>
import { ref, computed } from 'vue'
import { Checkbox } from '@orchidui/core'

const items = ref([
  { id: 1, name: 'Alice',   selected: false },
  { id: 2, name: 'Bob',     selected: false },
  { id: 3, name: 'Charlie', selected: false }
])

const allSelected  = computed(() => items.value.every(i => i.selected))
const someSelected = computed(() => items.value.some(i => i.selected) && !allSelected.value)

const toggleAll = () => {
  const next = !allSelected.value
  items.value.forEach(i => i.selected = next)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Checkbox
      :model-value="allSelected"
      :is-partial="someSelected"
      label="Select all"
      @update:model-value="toggleAll"
    />
    <Checkbox
      v-for="item in items"
      :key="item.id"
      v-model="item.selected"
      :label="item.name"
    />
  </div>
</template>`,
  render: () => ({
    components: { Checkbox, Theme },
    setup() {
      const items = ref([
        { id: 1, name: 'Alice',   selected: false },
        { id: 2, name: 'Bob',     selected: false },
        { id: 3, name: 'Charlie', selected: false }
      ])
      const allSelected  = () => items.value.every(i => i.selected)
      const someSelected = () => items.value.some(i => i.selected) && !allSelected()
      const toggleAll = () => {
        const next = !allSelected()
        items.value.forEach(i => (i.selected = next))
      }
      return { items, allSelected, someSelected, toggleAll }
    },
    template: `
      <Theme class="p-6 flex flex-col gap-2">
        <Checkbox
          :model-value="allSelected()"
          :is-partial="someSelected()"
          label="Select all"
          @update:model-value="toggleAll"
        />
        <div class="pl-6 flex flex-col gap-2">
          <Checkbox v-for="item in items" :key="item.id" v-model="item.selected" :label="item.name" />
        </div>
      </Theme>
    `
  })
}

export const ButtonVariant = {
  description: 'isButtonVariant renders the checkbox as a full-width bordered card.',
  highlights: ['isButtonVariant — bordered card layout', 'use #after slot for additional content inside the card'],
  render: () => ({
    components: { Checkbox, Theme },
    setup() {
      const email = ref(false)
      const sms   = ref(true)
      return { email, sms }
    },
    template: `
      <Theme class="p-6 flex flex-col gap-3 w-[300px]">
        <Checkbox v-model="email" label="Email notifications" :is-button-variant="true" />
        <Checkbox v-model="sms"   label="SMS notifications"   :is-button-variant="true" />
      </Theme>
    `
  })
}
