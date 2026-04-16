import { Radio, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Single radio button. Use inside a \`RadioGroup\` for a complete option set, or use standalone with a shared \`groupName\` for custom layouts.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String\\|Boolean | — | The value this radio represents — emitted on select |
| \`checked\` | Boolean | — | Controlled checked state (used internally by RadioGroup) |
| \`groupName\` | String | — | HTML name attribute (required for single-select within a group) |
| \`id\` | String\\|Number | — | Unique id combined with groupName for the input element |
| \`label\` | String | — | Label text next to the radio |
| \`hint\` | String | — | Helper text below the radio |
| \`errorMessage\` | String | — | Error message below the radio |
| \`isDisabled\` | Boolean | \`false\` | Disable the radio |
| \`isButtonVariant\` | Boolean | \`false\` | Render as a bordered card button |
| \`isButtonVariantWithRadio\` | Boolean | \`false\` | Button card with the radio circle visible |
| \`icon\` | String | — | Icon name before the label |
| \`labelIcon\` | String | — | Icon inside the label area (tooltip trigger) |
| \`tooltipText\` | String | — | Tooltip shown on labelIcon hover |
| \`tooltipOptions\` | Object | — | Extra props forwarded to Tooltip |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`string\` | Radio selected — emits the modelValue of this radio |

---

## Slots

| Slot | Description |
|------|-------------|
| \`default\` | Custom label content (replaces label prop) |
| \`#tooltipText\` | Custom tooltip content (replaces tooltipText prop) |
        `.trim()
      }
    }
  }
}

export const Playground = {
  argTypes: {
    label:       { control: 'text' },
    hint:        { control: 'text' },
    errorMessage:{ control: 'text' },
    icon:        { control: 'text' },
    isDisabled:          { control: 'boolean' },
    isButtonVariant:     { control: 'boolean' },
    isButtonVariantWithRadio: { control: 'boolean' }
  },
  args: {
    label: 'Option A',
    hint: '',
    errorMessage: '',
    icon: '',
    isDisabled: false,
    isButtonVariant: false,
    isButtonVariantWithRadio: false
  },
  render: (args) => ({
    components: { Radio, Theme },
    setup() {
      const selected = ref('a')
      return { args, selected }
    },
    template: `
      <Theme class="p-6 flex flex-col gap-3">
        <Radio v-bind="args" model-value="a" :checked="selected === 'a'" group-name="playground" :id="1" @update:model-value="selected = $event" />
        <Radio v-bind="args" model-value="b" :checked="selected === 'b'" label="Option B" group-name="playground" :id="2" @update:model-value="selected = $event" />
        <p class="text-sm text-oc-text-400 mt-2">Selected: {{ selected }}</p>
      </Theme>
    `
  })
}

export const Basic = {
  description: 'Standard radio buttons grouped by groupName. Only one can be selected at a time.',
  highlights: ['groupName — groups radios for single-select', 'v-model — the value of the selected option', ':checked="selected === item.value" — controlled state'],
  code: `<script setup>
import { ref } from 'vue'
import { Radio } from '@orchidui/core'

const selected = ref('monthly')

const plans = [
  { label: 'Monthly billing', value: 'monthly' },
  { label: 'Yearly billing (save 20%)', value: 'yearly' },
  { label: 'Enterprise', value: 'enterprise' }
]
</script>

<template>
  <div class="flex flex-col gap-3">
    <Radio
      v-for="plan in plans"
      :key="plan.value"
      :model-value="plan.value"
      :label="plan.label"
      :checked="selected === plan.value"
      group-name="billing"
      @update:model-value="selected = $event"
    />
    <p class="text-sm text-oc-text-400">Selected: {{ selected }}</p>
  </div>
</template>`,
  render: () => ({
    components: { Radio, Theme },
    setup() {
      const selected = ref('monthly')
      const plans = [
        { label: 'Monthly billing', value: 'monthly' },
        { label: 'Yearly billing (save 20%)', value: 'yearly' },
        { label: 'Enterprise', value: 'enterprise' }
      ]
      return { selected, plans }
    },
    template: `
      <Theme class="p-6 flex flex-col gap-3">
        <Radio
          v-for="plan in plans"
          :key="plan.value"
          :model-value="plan.value"
          :label="plan.label"
          :checked="selected === plan.value"
          group-name="billing"
          @update:model-value="selected = $event"
        />
        <p class="text-sm text-oc-text-400">Selected: {{ selected }}</p>
      </Theme>
    `
  })
}

export const States = {
  description: 'All visual states: unchecked, checked, disabled unchecked, disabled checked, and error.',
  highlights: ['isDisabled — non-interactive', 'errorMessage — red ring + message below'],
  render: () => ({
    components: { Radio, Theme },
    template: `
      <Theme class="p-6">
        <div class="grid grid-cols-3 w-fit gap-6">
          <Radio :model-value="false" label="Unchecked" group-name="states" :id="1" />
          <Radio :model-value="true"  label="Checked"   group-name="states" :id="2" :checked="true" />
          <Radio :model-value="false" label="Error"     group-name="states" :id="3" error-message="Required" />
          <Radio :model-value="false" label="Disabled"       group-name="states" :id="4" is-disabled />
          <Radio :model-value="true"  label="Disabled checked" group-name="states" :id="5" is-disabled :checked="true" />
        </div>
      </Theme>
    `
  })
}

export const ButtonVariant = {
  description: 'Button-style radios render as bordered card options. Add icon for visual context.',
  highlights: ['isButtonVariant — renders as a bordered card', 'icon — icon before the label', 'isButtonVariantWithRadio — shows the radio circle inside the card'],
  code: `<script setup>
import { ref } from 'vue'
import { Radio } from '@orchidui/core'

const channel = ref('email')

const channels = [
  { label: 'Email', value: 'email', icon: 'email' },
  { label: 'SMS', value: 'sms', icon: 'phone' },
  { label: 'Facebook', value: 'facebook', icon: 'facebook' }
]
</script>

<template>
  <div class="flex gap-3">
    <Radio
      v-for="(c, i) in channels"
      :key="c.value"
      :id="i"
      :model-value="c.value"
      :label="c.label"
      :icon="c.icon"
      :checked="channel === c.value"
      group-name="channel"
      :is-button-variant="true"
      @update:model-value="channel = $event"
    />
  </div>
</template>`,
  render: () => ({
    components: { Radio, Theme },
    setup() {
      const channel = ref('email')
      const channels = [
        { label: 'Email', value: 'email', icon: 'email' },
        { label: 'SMS', value: 'sms', icon: 'phone' },
        { label: 'Facebook', value: 'facebook', icon: 'facebook' }
      ]
      return { channel, channels }
    },
    template: `
      <Theme class="p-6 flex gap-3">
        <Radio
          v-for="(c, i) in channels"
          :key="c.value"
          :id="i"
          :model-value="c.value"
          :label="c.label"
          :icon="c.icon"
          :checked="channel === c.value"
          group-name="channel"
          :is-button-variant="true"
          @update:model-value="channel = $event"
        />
      </Theme>
    `
  })
}
