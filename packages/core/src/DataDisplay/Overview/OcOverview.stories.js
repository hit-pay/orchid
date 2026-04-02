import { Theme, Overview, OverviewItem, Button } from '@/orchidui-core'

export default {
  component: OverviewItem,
  tags: ['autodocs']
}

export const Default = {
  args: {
    icon: 'circle',
    content: 'SGD 11,170.00',
    title: 'Total Revenue',
    info: true,
    percentValue: 10,
    isLoading: false,
    percentTooltip: 'Compared to last month',
    tooltip: 'Total revenue this period',
    iconProps: {
      class: 'text-oc-warning-500'
    }
  },
  render: (args) => ({
    components: { OverviewItem, Theme, Button },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3 p-10 w-[400px]">
        <OverviewItem v-bind="args">
          <template #footer>
            <div class="flex flex-col px-4 pb-4">
              <div class="mb-4 bg-oc-warning-50-tr p-2 text-sm text-oc-text-400 text-center rounded-sm">Minimum payout is SGD 1</div>
              <Button size="small" left-icon="circle">Payout funds</Button>
            </div>
          </template>
        </OverviewItem>
      </Theme>
    `
  })
}

export const OverviewGroup = {
  args: {
    title: '',
    items: [
      {
        title: 'Total revenue',
        content: 'SGD 11,170.00',
        icon: 'coins',
        variant: 'blue'
      },
      {
        title: 'This month',
        content: 'SGD 1,870.00',
        icon: 'coin',
        variant: 'accent'
      },
      {
        title: 'Completed',
        content: '20',
        icon: 'check',
        variant: 'green'
      },
      {
        title: 'Refunded',
        content: '3',
        icon: 'backward',
        variant: 'red'
      }
    ]
  },
  render: (args) => ({
    components: { Overview, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme class="items-center mb-3">
        <Overview v-bind="args" />
      </Theme>
    `
  })
}
