import { Input } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Input,
  tags: ['autodocs']
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
