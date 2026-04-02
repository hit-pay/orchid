import { Theme, InfoCard, Button, OverviewItem } from '@/orchidui-core'

export default {
  component: InfoCard,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Payment Overview',
    titleIcon: 'information',
    titleIconTooltip: 'Summary of recent payment activity',
    isLoading: false,
    transparent: false,
    hover: true,
    shadow: false,
    noData: false,
    noDataDescription: 'No items on the site yet'
  },
  render: (args) => ({
    components: { Theme, InfoCard, Button, OverviewItem },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <InfoCard v-bind="args">
          <div class="my-7">
            <OverviewItem v-for="o in 4" :key="o" :title="'Item ' + o" icon="circle" class="mb-4" />
          </div>
          <template #footer>
            <Button>View All</Button>
          </template>
        </InfoCard>
      </Theme>
    `
  })
}
