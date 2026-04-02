import { Theme, InfoCard, Button, OverviewItem, Icon } from '@/orchidui-core'

export default {
  component: InfoCard,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Card Title',
    titleIcon: 'information',
    titleIconTooltip: 'Hello I am tooltip!',
    isLoading: false,
    transparent: false,
    hover: false,
    shadow: false,
    noData: false,
    noDataDescription: 'No items on the site yet'
  },
  render: (args) => ({
    components: { Theme, InfoCard, Button, OverviewItem, Icon },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <InfoCard v-bind="args">
          <template #header>
            <div class="flex items-center text-oc-warning">
              <Icon name="check" class="mr-2" />
              <div>Card Title Slot</div>
            </div>
          </template>
          <div class="my-7">
            <OverviewItem v-for="o in 4" :key="o" :title="'Item ' + o" icon="circle" class="mb-4" />
          </div>
          <template #footer>
            <Button variant="secondary">Button</Button>
          </template>
        </InfoCard>
      </Theme>
    `
  })
}
