import { Theme, CustomerCard } from '@/orchidui-core'

export default {
  component: CustomerCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Customer profile card used in transaction and order detail sidebars. Supports customer and beneficiary (bank transfer) data shapes, multiple size variants, and optional edit/close actions.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`customer\` | Object | — | Customer data (see shapes below) |
| \`variant\` | String | \`'small'\` | \`'small'\` · \`'big'\` · \`'float'\` |
| \`isHover\` | Boolean | \`false\` | Show edit button on hover |
| \`isEdit\` | Boolean | \`false\` | Show pencil edit button |
| \`isClosable\` | Boolean | \`false\` | Show × close icon |
| \`isBeneficiary\` | Boolean | \`false\` | Switch to bank/beneficiary data layout |

### Customer object shape

\`\`\`js
// Standard customer
{
  name: 'Alice Smith',
  email: 'alice@example.com',
  phone_number: '9123 4567',
  phone_number_country_code: '65',
  address: {
    street: '123 Main St',
    city: 'Singapore',
    state: '',
    postal_code: '018989',
    country: 'SG'
  }
}

// Beneficiary (isBeneficiary=true)
{
  name: 'Bob Jones',
  email: 'bob@example.com',
  currency: 'SGD',
  bank_name: 'DBS Bank',
  bank_account_number: '**** 1234'
}
\`\`\`

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`addCustomer\` | — | "Add customer" button clicked (empty state) |
| \`editCustomer\` | \`customer\` | Edit button clicked |
| \`closeCustomer\` | — | Close × icon clicked |

---

## Slots

| Slot | Description |
|------|-------------|
| \`#bottom\` | Extra content below the main card body |
| \`#leading\` | Content on the right side of the card |
        `.trim()
      }
    }
  }
}

const sampleCustomer = {
  name: 'Alex Turner',
  email: 'alex@arcticmonkey.io',
  phone_number: '8373 3739',
  phone_number_country_code: '65',
  address: {
    street: '123 Main Street',
    city: 'Pennsylvania',
    state: 'Pennsylvania',
    postal_code: '12345',
    country: 'USA'
  }
}

const sampleBeneficiary = {
  name: 'Alex Turner',
  currency: 'SGD',
  email: 'alex@arcticmonkey.io',
  phone_number: '+65 8373 3739 18',
  bank_name: 'DBS Bank',
  bank_account_number: '**** 1234'
}

export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'big', 'float']
    }
  },
  args: {
    variant: 'small',
    customer: sampleCustomer
  },
  render: (args) => ({
    components: { Theme, CustomerCard },
    setup() {
      return { args }
    },
    template: `
      <Theme class="p-6 w-[360px]">
        <CustomerCard v-bind="args" />
      </Theme>
    `
  })
}

export const SmallVariant = {
  description: 'Compact card showing name and email/phone only. Used in sidebar panels.',
  highlights: ['variant="small" — compact layout', 'shows name + email or phone'],
  code: `<script setup>
import { CustomerCard } from '@orchidui/core'

const customer = {
  name: 'Alice Smith',
  email: 'alice@example.com',
  phone_number: '9123 4567',
  phone_number_country_code: '65'
}
</script>

<template>
  <CustomerCard variant="small" :customer="customer" />
</template>`,
  render: () => ({
    components: { Theme, CustomerCard },
    setup: () => ({ customer: sampleCustomer }),
    template: `
      <Theme class="p-6 w-[360px]">
        <CustomerCard variant="small" :customer="customer" />
      </Theme>
    `
  })
}

export const BigVariant = {
  description: 'Expanded card with address and phone details. Used in transaction detail pages.',
  highlights: ['variant="big" — shows address + phone', 'variant="float" — same with drop shadow'],
  render: () => ({
    components: { Theme, CustomerCard },
    setup: () => ({ customer: sampleCustomer }),
    template: `
      <Theme class="p-6 w-[360px] flex flex-col gap-4">
        <CustomerCard variant="big" :customer="customer" />
        <CustomerCard variant="float" :customer="customer" />
      </Theme>
    `
  })
}

export const EmptyState = {
  description: 'When no customer is attached — shows an "Add customer" button.',
  highlights: ['customer prop undefined/null — shows empty state', 'addCustomer event — emitted when the button is clicked'],
  render: () => ({
    components: { Theme, CustomerCard },
    template: `
      <Theme class="p-6 w-[360px]">
        <CustomerCard variant="big" @add-customer="() => console.log('add customer')" />
      </Theme>
    `
  })
}

export const Beneficiary = {
  description: 'Bank beneficiary mode — shows currency, bank name, and account number.',
  highlights: ['isBeneficiary=true — switches data fields', 'customer.bank_name + bank_account_number displayed'],
  render: () => ({
    components: { Theme, CustomerCard },
    setup: () => ({ customer: sampleBeneficiary }),
    template: `
      <Theme class="p-6 w-[360px] flex flex-col gap-4">
        <CustomerCard variant="small" :is-beneficiary="true" :customer="customer" />
        <CustomerCard variant="big"   :is-beneficiary="true" :customer="customer" />
      </Theme>
    `
  })
}

export const WithActions = {
  description: 'Edit and close actions. isEdit shows a pencil button; isClosable shows an × icon.',
  highlights: ['isEdit — pencil button fires editCustomer event', 'isClosable — × icon fires closeCustomer event', 'isHover — edit button visible only on hover'],
  render: () => ({
    components: { Theme, CustomerCard },
    setup: () => ({ customer: sampleCustomer }),
    template: `
      <Theme class="p-6 w-[360px] flex flex-col gap-4">
        <CustomerCard variant="small" :customer="customer" :is-edit="true" :is-hover="true" @edit-customer="(c) => console.log('edit', c)" />
        <CustomerCard variant="small" :customer="customer" :is-closable="true" @close-customer="() => console.log('close')" />
      </Theme>
    `
  })
}

export const BigBeneficiary = {
  args: {
    variant: 'big',
    isBeneficiary: true,
    customer: sampleBeneficiary
  },
  render: (args) => ({
    components: { Theme, CustomerCard },
    setup() {
      return { args }
    },
    template: `
      <Theme class="p-6 w-[360px]">
        <CustomerCard v-bind="args" />
      </Theme>
    `
  })
}
