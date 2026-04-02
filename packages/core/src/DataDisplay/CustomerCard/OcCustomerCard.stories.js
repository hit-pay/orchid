import { Theme, CustomerCard } from '@/orchidui-core'

export default {
  component: CustomerCard,
  tags: ['autodocs']
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
    customer: {
      name: 'Alex Turner',
      email: 'alex_turner@arcticmonkey.io',
      phone_number: '8373 3739 18',
      phone_number_country_code: '65',
      address: {
        street: '123 Main Street',
        city: 'Pennsylvania',
        state: 'Pennsylvania',
        postal_code: '12345',
        country: 'USA'
      }
    }
  },
  render: (args) => ({
    components: { Theme, CustomerCard },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard v-bind="args" />
      </Theme>
    `
  })
}

export const BigVariant = {
  args: {
    variant: 'big',
    customer: {
      name: 'Alex Turner',
      email: 'alex@arcticmonkey.io',
      phone_number: '65 8373 3739 18',
      address: {
        street: '123 Main Street',
        city: 'Pennsylvania',
        state: 'Pennsylvania',
        postal_code: '12345',
        country: 'USA'
      }
    }
  },
  render: (args) => ({
    components: { Theme, CustomerCard },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard v-bind="args" />
      </Theme>
    `
  })
}

export const Beneficiary = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'big']
    }
  },
  args: {
    variant: 'small',
    isBeneficiary: true,
    customer: {
      name: 'Alex Turner',
      currency: 'SGD',
      email: 'alex@arcticmonkey.io',
      phone_number: '+65 8373 3739 18',
      bank_name: 'DBS Bank',
      bank_account_number: '**** 1234'
    }
  },
  render: (args) => ({
    components: { Theme, CustomerCard },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard v-bind="args" />
      </Theme>
    `
  })
}

export const BigBeneficiary = {
  args: {
    variant: 'big',
    isBeneficiary: true,
    customer: {
      name: 'Alex Turner',
      currency: 'SGD',
      email: 'alex@arcticmonkey.io',
      bank_name: 'DBS Bank',
      bank_account_number: '**** 1234'
    }
  },
  render: (args) => ({
    components: { Theme, CustomerCard },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard v-bind="args" />
      </Theme>
    `
  })
}

export const Closable = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'big']
    }
  },
  args: {
    variant: 'small',
    isBeneficiary: true,
    isClosable: true,
    customer: {
      name: 'Alex Turner',
      currency: 'SGD',
      email: 'alex@arcticmonkey.io',
      phone_number: '+65 8373 3739 18',
      bank_name: 'DBS Bank',
      bank_account_number: '**** 1234'
    }
  },
  render: (args) => ({
    components: { Theme, CustomerCard },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard v-bind="args" />
      </Theme>
    `
  })
}
