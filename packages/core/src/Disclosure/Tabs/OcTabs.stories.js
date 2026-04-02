import { Tabs, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Tabs,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills']
    }
  },
  args: {
    variant: 'default',
    tabs: [
      { label: 'Overview', value: 'overview' },
      { label: 'Transactions', value: 'transactions' },
      { label: 'Settings', value: 'settings' },
      { label: 'Reports', value: 'reports' }
    ]
  },
  render: (args) => ({
    components: { Tabs, Theme },
    setup() {
      const activeTab = ref('overview')
      return { args, activeTab }
    },
    template: `
      <Theme>
        <Tabs v-model="activeTab" v-bind="args" />
      </Theme>
    `
  })
}
