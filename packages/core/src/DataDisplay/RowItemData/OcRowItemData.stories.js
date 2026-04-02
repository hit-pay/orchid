import { Theme, OcRowItemData } from '@/orchidui-core'

export default {
  component: OcRowItemData,
  tags: ['autodocs']
}

export const Default = {
  args: {
    items: [
      {
        label: 'Order ID',
        text: 'ORD-123456',
        isCopyButton: true
      },
      {
        label: 'Status',
        chip: {
          label: 'Completed',
          variant: 'success'
        }
      }
    ]
  },
  render: (args) => ({
    components: { Theme, OcRowItemData },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcRowItemData v-bind="args" />
      </Theme>
    `
  })
}

export const WithIcon = {
  args: {
    items: [
      {
        label: 'Transaction ID',
        text: 'TXN-789012',
        icon: {
          name: 'eye',
          width: 14,
          height: 14
        },
        tooltipContent: 'View details'
      },
      {
        label: 'Payment Method',
        text: 'Credit Card'
      }
    ]
  },
  render: (args) => ({
    components: { Theme, OcRowItemData },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcRowItemData v-bind="args" />
      </Theme>
    `
  })
}

export const WithChip = {
  args: {
    items: [
      {
        label: 'Invoice',
        text: 'INV-2024-001'
      },
      {
        label: 'Payment Status',
        chip: {
          label: 'Pending',
          variant: 'warning'
        }
      },
      {
        label: 'Due Date',
        text: '2024-02-15'
      }
    ]
  },
  render: (args) => ({
    components: { Theme, OcRowItemData },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcRowItemData v-bind="args" />
      </Theme>
    `
  })
}

export const SingleItem = {
  args: {
    items: [
      {
        label: 'Reference Number',
        text: 'REF-456789',
        isCopyButton: true
      }
    ]
  },
  render: (args) => ({
    components: { Theme, OcRowItemData },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcRowItemData v-bind="args" />
      </Theme>
    `
  })
}
