import { Theme, ListDetail } from '@/orchidui-core'

export default {
  component: ListDetail,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'big']
    },
    alignment: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  },
  args: {
    variant: 'small',
    label: 'Email',
    content: 'alex@arcticmonkey.io',
    alignment: 'horizontal'
  },
  render: (args) => ({
    components: { Theme, ListDetail },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <ListDetail v-bind="args" />
      </Theme>
    `
  })
}

export const Vertical = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'big']
    },
    alignment: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  },
  args: {
    variant: 'big',
    label: 'Alex Turner',
    content: 'alex@arcticmonkey.io',
    alignment: 'vertical'
  },
  render: (args) => ({
    components: { Theme, ListDetail },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <ListDetail v-bind="args" />
      </Theme>
    `
  })
}

export const UsingSlot = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'big']
    },
    alignment: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  },
  args: {
    variant: 'big',
    label: 'Alex Turner',
    alignment: 'vertical'
  },
  render: (args) => ({
    components: { Theme, ListDetail },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <ListDetail v-bind="args">
          <template #content><span>alex@arcticmonkey.io</span></template>
        </ListDetail>
      </Theme>
    `
  })
}
