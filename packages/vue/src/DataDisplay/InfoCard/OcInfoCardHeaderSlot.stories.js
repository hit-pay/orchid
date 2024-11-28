import { InfoCard, Button, OverviewItem, Icon } from '@orchidui/vue'

export default {
  component: InfoCard,
  tags: ['autodocs']
}

export const infoCardHeaderSlot = {
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
    components: { InfoCard, Button, OverviewItem, Icon },
    setup() {
      return {
        args
      }
    },
    template: `
          <InfoCard :title="args.title"
                :title-icon="args.titleIcon"
                :title-icon-tooltip="args.titleIconTooltip"
                :is-loading="args.isLoading"
                :transparent="args.transparent"
                :hover="args.hover"
                :shadow="args.shadow"
                :no-data="args.noData"
                :no-data-description="args.noDataDescription"
          >
            <template #header>
              <div class="flex items-center text-oc-warning">
                <Icon name="check" class="mr-2"/> 
                <div>Card Title Slot</div>
              </div>
            </template>

            <div class="my-7">
              <OverviewItem v-for="o in 4" :key="o" :title="'Item ' + o" icon="circle" class="mb-4"/>
            </div>
            
            <template #footer>
              <Button variant="secondary">Button</Button>
            </template>
          </InfoCard>
        `
  })
}
