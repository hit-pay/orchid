import { RadioGroup, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A group of radio buttons rendered from a data array. Manages selection state internally — use \`v-model\` to get/set the selected value.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String | — | v-model — value of the selected option |
| \`radio\` | Array | — | Options: \`[{ label, value, icon?, isDisabled?, tooltipText?, labelIcon? }]\` |
| \`groupName\` | String | — | HTML name shared by all inputs (required for single-select) |
| \`alignment\` | String | \`'vertical'\` | \`'vertical'\` or \`'horizontal'\` layout |
| \`label\` | String | — | Label shown above the group |
| \`hint\` | String | — | Helper text below the label |
| \`errorMessage\` | String | — | Error message below the group |
| \`wrapperClass\` | String | — | Extra CSS class on the options wrapper |
| \`isButtonVariant\` | Boolean | \`false\` | Render all options as bordered card buttons |
| \`isButtonVariantWithRadio\` | Boolean | \`false\` | Button cards with visible radio circles |
| \`isBlock\` | Boolean | \`false\` | Expand each option to full width |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`string\` | Selected option changed |
        `.trim()
      }
    }
  }
}

export const Playground = {
  argTypes: {
    alignment:   { control: 'select', options: ['vertical', 'horizontal'] },
    label:       { control: 'text' },
    hint:        { control: 'text' },
    errorMessage:{ control: 'text' },
    isButtonVariant:     { control: 'boolean' },
    isButtonVariantWithRadio: { control: 'boolean' },
    isBlock: { control: 'boolean' }
  },
  args: {
    alignment: 'vertical',
    label: 'Billing cycle',
    hint: 'Choose how you want to be billed.',
    errorMessage: '',
    isButtonVariant: false,
    isButtonVariantWithRadio: false,
    isBlock: false
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const selected = ref('monthly')
      const options = [
        { label: 'Monthly',  value: 'monthly' },
        { label: 'Yearly (save 20%)', value: 'yearly' },
        { label: 'Enterprise', value: 'enterprise', isDisabled: true }
      ]
      return { args, selected, options }
    },
    template: `
      <Theme class="p-6 w-[400px]">
        <RadioGroup
          v-model="selected"
          v-bind="args"
          group-name="playground-billing"
          :radio="options"
        />
        <p class="mt-3 text-sm text-oc-text-400">Selected: {{ selected }}</p>
      </Theme>
    `
  })
}

export const Vertical = {
  description: 'Default vertical layout. Options are stacked in a column.',
  highlights: ['radio — array of { label, value }', 'groupName — required for single-select', 'v-model — selected value'],
  code: `<script setup>
import { ref } from 'vue'
import { RadioGroup } from '@orchidui/core'

const selected = ref('card')

const paymentMethods = [
  { label: 'Credit / Debit card', value: 'card' },
  { label: 'PayNow',              value: 'paynow' },
  { label: 'Bank transfer',       value: 'bank' },
  { label: 'Cash on delivery',    value: 'cod', isDisabled: true }
]
</script>

<template>
  <RadioGroup
    v-model="selected"
    label="Payment method"
    hint="Select how the customer will pay."
    group-name="payment"
    :radio="paymentMethods"
    alignment="vertical"
  />
  <p class="mt-3 text-sm text-oc-text-400">Selected: {{ selected }}</p>
</template>`,
  render: () => ({
    components: { RadioGroup, Theme },
    setup() {
      const selected = ref('card')
      const paymentMethods = [
        { label: 'Credit / Debit card', value: 'card' },
        { label: 'PayNow',              value: 'paynow' },
        { label: 'Bank transfer',       value: 'bank' },
        { label: 'Cash on delivery',    value: 'cod', isDisabled: true }
      ]
      return { selected, paymentMethods }
    },
    template: `
      <Theme class="p-6 w-[360px]">
        <RadioGroup v-model="selected" label="Payment method" hint="Select how the customer will pay." group-name="payment" :radio="paymentMethods" alignment="vertical" />
        <p class="mt-3 text-sm text-oc-text-400">Selected: {{ selected }}</p>
      </Theme>
    `
  })
}

export const Horizontal = {
  description: 'Horizontal layout — options flow in a row. Useful for short option lists.',
  highlights: ['alignment="horizontal" — flex-row layout', 'wrap automatically for long lists'],
  code: `<script setup>
import { ref } from 'vue'
import { RadioGroup } from '@orchidui/core'

const size = ref('medium')

const sizes = [
  { label: 'Small',  value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large',  value: 'large' },
  { label: 'XL',     value: 'xl' }
]
</script>

<template>
  <RadioGroup
    v-model="size"
    label="Size"
    group-name="size"
    :radio="sizes"
    alignment="horizontal"
  />
</template>`,
  render: () => ({
    components: { RadioGroup, Theme },
    setup() {
      const size = ref('medium')
      const sizes = [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'XL', value: 'xl' }
      ]
      return { size, sizes }
    },
    template: `
      <Theme class="p-6">
        <RadioGroup v-model="size" label="Size" group-name="size" :radio="sizes" alignment="horizontal" />
        <p class="mt-3 text-sm text-oc-text-400">Size: {{ size }}</p>
      </Theme>
    `
  })
}

export const ButtonVariants = {
  description: 'Button-style radio group renders each option as a bordered card. Works best for short option lists.',
  highlights: ['isButtonVariant — bordered card style', 'icon — icon inside each card', 'alignment="horizontal" for side-by-side cards'],
  code: `<script setup>
import { ref } from 'vue'
import { RadioGroup } from '@orchidui/core'

const channel = ref('email')

const channels = [
  { label: 'Email',    value: 'email',    icon: 'email' },
  { label: 'SMS',      value: 'sms',      icon: 'phone' },
  { label: 'Facebook', value: 'facebook', icon: 'facebook' }
]
</script>

<template>
  <RadioGroup
    v-model="channel"
    label="Notification channel"
    group-name="channel"
    :radio="channels"
    alignment="horizontal"
    :is-button-variant="true"
  />
</template>`,
  render: () => ({
    components: { RadioGroup, Theme },
    setup() {
      const channel = ref('email')
      const channels = [
        { label: 'Email',    value: 'email',    icon: 'email' },
        { label: 'SMS',      value: 'sms',      icon: 'phone' },
        { label: 'Facebook', value: 'facebook', icon: 'facebook' }
      ]
      return { channel, channels }
    },
    template: `
      <Theme class="p-6">
        <RadioGroup v-model="channel" label="Notification channel" group-name="channel" :radio="channels" alignment="horizontal" :is-button-variant="true" />
        <p class="mt-3 text-sm text-oc-text-400">Channel: {{ channel }}</p>
      </Theme>
    `
  })
}

export const WithError = {
  description: 'Error state applied to the whole group.',
  highlights: ['errorMessage — shown below the group and applied to all radio buttons'],
  render: () => ({
    components: { RadioGroup, Theme },
    setup() {
      const selected = ref()
      const options = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' }
      ]
      return { selected, options }
    },
    template: `
      <Theme class="p-6 w-[300px]">
        <RadioGroup v-model="selected" label="Pick one" group-name="error-demo" :radio="options" error-message="Please select an option." />
      </Theme>
    `
  })
}
