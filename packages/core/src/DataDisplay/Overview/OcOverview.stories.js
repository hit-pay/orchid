import { Theme, Overview, OverviewItem, Button } from '@/orchidui-core'

export default {
  component: OverviewItem,
  tags: ['autodocs']
}
export const overviewItem = {
  args: {
    icon: 'circle',
    content: 'Content',
    title: 'Title',
    info: true,
    percentValue: 10,
    isLoading: false,
    percentTooltip: 'asd',
    tooltip: 'asd',
    iconProps: {
      class: 'text-oc-warning-500'
    }
  },
  render: (args) => ({
    components: { OverviewItem, Theme, Button },
    setup() {
      return {
        args
      }
    },
    template: `
          <Theme class="items-center mb-3 p-10 w-[400px]">
            <OverviewItem
                :icon="args.icon"
                :info="args.info"
                :content="args.content"
                :title="args.title"
                :percent-value="args.percentValue"
                :tooltip="args.tooltip"
                :is-loading="args.isLoading"
                :percent-tooltip="args.percentTooltip"
                :icon-props="args.iconProps"
            >
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
export const overview = {
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
      return {
        args
      }
    },
    template: `
          <Theme class="items-center mb-3">
            <Overview :items="args.items" :title="args.title"/>
          </Theme>
        `
  })
}
