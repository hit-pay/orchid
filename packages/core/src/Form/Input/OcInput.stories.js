import { Input, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Input,
  tags: ['autodocs'],
  kind: 'leaf',
  use_for: [
    'text input field',
    'password input with toggle',
    'search input',
    'numeric or decimal input',
    'input with currency prefix',
    'input with prefix or suffix slot'
  ],
  parameters: {
    docs: {
      description: {
        component: `
Single-line text input with label, hint, icon, prefix/suffix slots, and password toggle.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String\\|Number | \`''\` | v-model value |
| \`label\` | String | \`''\` | Label shown above the input |
| \`hint\` | String | \`''\` | Helper text below the label |
| \`placeholder\` | String | \`'Placeholder'\` | Placeholder text |
| \`icon\` | String | \`''\` | Icon name on the left side |
| \`iconProps\` | Object | \`{}\` | Extra attrs forwarded to Icon (width, height, etc.) |
| \`inputType\` | String | \`'text'\` | HTML input type — use \`'password'\` for the eye toggle |
| \`inputMode\` | String | \`'text'\` | Virtual keyboard hint: \`text\\|decimal\\|numeric\\|tel\\|search\\|email\\|url\` |
| \`preFill\` | String | \`''\` | Static text prefix before the value (e.g. \`'SGD'\`) |
| \`disabled\` | Boolean | \`false\` | Disable the input |
| \`isReadonly\` | Boolean | \`false\` | Non-editable without disabled appearance |
| \`isRequired\` | Boolean | \`false\` | Show \`*\` next to the label |
| \`isInlineLabel\` | Boolean | \`false\` | Label inside the input box before the value |
| \`errorMessage\` | String | \`''\` | Error text + red border |
| \`hasError\` | Boolean | \`false\` | Red border only (no message) |
| \`labelIcon\` | String | \`''\` | Icon name inside the label area |
| \`tooltipText\` | String | \`''\` | Tooltip on the label icon |
| \`tooltipOptions\` | Object | \`{}\` | Extra tooltip props |
| \`labelClass\` | String | \`''\` | CSS class on the label element |
| \`inputClass\` | String | \`''\` | CSS class on the input wrapper |
| \`trailingClass\` | String | \`''\` | CSS class on the #trailing slot wrapper |
| \`leadingClass\` | String | \`''\` | CSS class on the #leading slot wrapper |
| \`hasLeadingSeparator\` | Boolean | \`true\` | Separator line between #leading content and input |
| \`autocomplete\` | String | \`'one-time-code'\` | HTML autocomplete attribute |
| \`pattern\` | String | \`''\` | HTML pattern attribute |
| \`ai\` | Boolean | \`false\` | AI-filled accent style — clears on first focus |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`string\` | Input value changed |
| \`blur\` | — | Input lost focus |
| \`focus\` | \`FocusEvent\` | Input gained focus |
| \`paste\` | \`ClipboardEvent\` | Paste event |

---

## Slots

| Slot | Description |
|------|-------------|
| \`#trailing\` | Left prefix area (separated from input by a border-right line) |
| \`#icon\` | Override the icon area |
| \`#leading\` | Right suffix area (separated from input by a border-left line) |
| \`#hint\` | Custom hint content below the input |
| \`#right-label\` | Content to the right of the label |
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
    preFill:      { control: 'text' },
    icon:         { control: 'text' },
    inputType:    { control: 'select', options: ['text', 'password', 'email', 'number', 'tel', 'url'] },
    disabled:     { control: 'boolean' },
    isReadonly:   { control: 'boolean' },
    isRequired:   { control: 'boolean' },
    isInlineLabel:{ control: 'boolean' }
  },
  args: {
    label: 'Full name',
    hint: 'Enter your legal full name.',
    placeholder: 'Jane Doe',
    errorMessage: '',
    preFill: '',
    icon: '',
    inputType: 'text',
    disabled: false,
    isReadonly: false,
    isRequired: false,
    isInlineLabel: false
  },
  render: (args) => ({
    components: { Input, Theme },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <Theme class="p-6 w-[360px]">
        <Input v-model="value" v-bind="args" />
        <p class="mt-3 text-sm text-oc-text-400">Value: {{ value || '—' }}</p>
      </Theme>
    `
  })
}

export const Basic = {
  description: 'Standard text input with label, hint, placeholder, and v-model.',
  highlights: ['v-model — string | number value', 'label + hint props', 'errorMessage — shows error below input'],
  code: `<script setup>
import { ref } from 'vue'
import { Input } from '@orchidui/core'

const value = ref('')
</script>

<template>
  <Input
    v-model="value"
    label="Full name"
    hint="Enter your legal full name."
    placeholder="Jane Doe"
  />
</template>`,
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="p-6 w-[320px]">
        <Input v-model="value" label="Full name" hint="Enter your legal full name." placeholder="Jane Doe" />
      </div>
    `
  })
}

export const WithIcon = {
  description: 'Left-aligned icon inside the input box using the icon prop or #icon slot.',
  highlights: ['icon prop — icon name on the left', '#icon slot — custom icon element', 'iconProps — extra attrs forwarded to Icon'],
  code: `<script setup>
import { ref } from 'vue'
import { Input } from '@orchidui/core'

const email    = ref('')
const password = ref('')
const search   = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 w-[320px]">
    <Input v-model="email"    icon="mail"   label="Email"    placeholder="you@example.com" />
    <Input v-model="search"   icon="search" label="Search"   placeholder="Type to search..." />
    <Input v-model="password" label="Password" input-type="password" placeholder="••••••••" />
  </div>
</template>`,
  render: () => ({
    components: { Input },
    setup() {
      const email = ref(''); const search = ref(''); const password = ref('')
      return { email, search, password }
    },
    template: `
      <div class="p-6 flex flex-col gap-4 w-[320px]">
        <Input v-model="email"    icon="mail"   label="Email"    placeholder="you@example.com" />
        <Input v-model="search"   icon="search" label="Search"   placeholder="Type to search..." />
        <Input v-model="password" label="Password" input-type="password" placeholder="••••••••" />
      </div>
    `
  })
}

export const WithPrefixSuffix = {
  description: 'Trailing slot adds content before the text (left side with separator). Leading slot adds content after the text (right side).',
  highlights: ['#trailing slot — left prefix section', '#leading slot — right suffix section', 'has-leading-separator — toggles separator line', 'preFill prop — static text prefix'],
  code: `<script setup>
import { ref } from 'vue'
import { Input } from '@orchidui/core'

const amount   = ref('')
const username = ref('')
const domain   = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 w-[320px]">
    <!-- preFill: static text prefix -->
    <Input
      v-model="amount"
      label="Amount"
      placeholder="0.00"
      pre-fill="SGD"
    />

    <!-- #trailing slot: select prefix -->
    <Input v-model="username" label="Username" placeholder="your-handle">
      <template #trailing>
        <span class="text-sm text-oc-text-300">@</span>
      </template>
    </Input>

    <!-- #leading slot: domain suffix -->
    <Input v-model="domain" label="Subdomain" placeholder="mystore">
      <template #leading>
        <span class="text-sm text-oc-text-300">.hitpayapp.com</span>
      </template>
    </Input>
  </div>
</template>`,
  render: () => ({
    components: { Input },
    setup() {
      const amount = ref(''); const username = ref(''); const domain = ref('')
      return { amount, username, domain }
    },
    template: `
      <div class="p-6 flex flex-col gap-4 w-[320px]">
        <Input v-model="amount"   label="Amount"    placeholder="0.00"      pre-fill="SGD" />
        <Input v-model="username" label="Username"  placeholder="your-handle">
          <template #trailing><span class="text-sm text-oc-text-300">@</span></template>
        </Input>
        <Input v-model="domain"   label="Subdomain" placeholder="mystore">
          <template #leading><span class="text-sm text-oc-text-300">.hitpayapp.com</span></template>
        </Input>
      </div>
    `
  })
}

export const States = {
  description: 'All visual states: normal, disabled, error, readonly, and inline label.',
  highlights: ['disabled prop', 'errorMessage — red border + message below', 'isReadonly — non-editable but not grayed', 'isInlineLabel — label inside the input box'],
  code: `<script setup>
import { ref } from 'vue'
import { Input } from '@orchidui/core'

const normal   = ref('Editable value')
const disabled = ref('Cannot edit this')
const error    = ref('invalid@')
const readonly = ref('Read-only content')
const inline   = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 w-[320px]">
    <Input v-model="normal"   label="Normal" />
    <Input v-model="disabled" label="Disabled" :disabled="true" />
    <Input v-model="error"    label="Email" error-message="Please enter a valid email address." />
    <Input v-model="readonly" label="Reference ID" :is-readonly="true" />
    <Input v-model="inline"   label="Search" :is-inline-label="true" placeholder="Type..." />
  </div>
</template>`,
  render: () => ({
    components: { Input },
    setup() {
      const normal   = ref('Editable value')
      const disabled = ref('Cannot edit this')
      const error    = ref('invalid@')
      const readonly = ref('Read-only content')
      const inline   = ref('')
      return { normal, disabled, error, readonly, inline }
    },
    template: `
      <div class="p-6 flex flex-col gap-4 w-[320px]">
        <Input v-model="normal"   label="Normal" />
        <Input v-model="disabled" label="Disabled" :disabled="true" />
        <Input v-model="error"    label="Email" error-message="Please enter a valid email address." />
        <Input v-model="readonly" label="Reference ID" :is-readonly="true" />
        <Input v-model="inline"   label="Search" :is-inline-label="true" placeholder="Type..." />
      </div>
    `
  })
}

export const WithLabelTooltip = {
  description: 'Show a tooltip icon next to the label using labelIcon + tooltipText.',
  highlights: ['labelIcon — icon name next to the label', 'tooltipText — tooltip content on hover', 'isRequired — asterisk indicator'],
  code: `<script setup>
import { ref } from 'vue'
import { Input } from '@orchidui/core'

const apiKey = ref('')
const fee    = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 w-[320px]">
    <Input
      v-model="apiKey"
      label="API Key"
      label-icon="info-circle"
      tooltip-text="Found in your developer settings."
      placeholder="sk-..."
      :is-required="true"
    />
    <Input
      v-model="fee"
      label="Platform fee"
      label-icon="info-circle"
      tooltip-text="Percentage charged on every transaction."
      pre-fill="%"
      placeholder="0.00"
    />
  </div>
</template>`,
  render: () => ({
    components: { Input },
    setup() {
      const apiKey = ref('')
      const fee    = ref('')
      return { apiKey, fee }
    },
    template: `
      <div class="p-6 flex flex-col gap-4 w-[320px]">
        <Input v-model="apiKey" label="API Key" label-icon="info-circle" tooltip-text="Found in your developer settings." placeholder="sk-..." :is-required="true" />
        <Input v-model="fee"    label="Platform fee" label-icon="info-circle" tooltip-text="Percentage charged on every transaction." pre-fill="%" placeholder="0.00" />
      </div>
    `
  })
}

export const NumericInputModes = {
  description: 'Use inputMode to control the virtual keyboard on mobile. Use inputType for number spinners.',
  highlights: ['inputMode="numeric" — number-only keyboard (no spinner)', 'inputMode="decimal" — decimal keyboard', 'input-type="number" — native number spinner'],
  code: `<script setup>
import { ref } from 'vue'
import { Input } from '@orchidui/core'

const qty      = ref('')
const price    = ref('')
const phone    = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 w-[320px]">
    <Input v-model="qty"   label="Quantity"  input-mode="numeric" placeholder="0" />
    <Input v-model="price" label="Price"     input-mode="decimal" placeholder="0.00" pre-fill="SGD" />
    <Input v-model="phone" label="Phone"     input-mode="tel"     icon="phone" placeholder="+65 9123 4567" />
  </div>
</template>`,
  render: () => ({
    components: { Input },
    setup() {
      const qty   = ref('')
      const price = ref('')
      const phone = ref('')
      return { qty, price, phone }
    },
    template: `
      <div class="p-6 flex flex-col gap-4 w-[320px]">
        <Input v-model="qty"   label="Quantity" input-mode="numeric" placeholder="0" />
        <Input v-model="price" label="Price"    input-mode="decimal" placeholder="0.00" pre-fill="SGD" />
        <Input v-model="phone" label="Phone"    input-mode="tel" icon="phone" placeholder="+65 9123 4567" />
      </div>
    `
  })
}
