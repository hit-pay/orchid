import { InfoCard, Button, OverviewItem } from '@orchidui/vue'

export default {
  component: InfoCard,
  tags: ['autodocs']
}

export const infoCard = {
  args: {
    title: 'Card Title',
    titleIcon: 'information',
    titleIconTooltip: 'Hello I am tooltip!',
    isLoading: false,
    transparent: false,
    hover: true,
    shadow: false,
    noData: false,
    noDataDescription: 'No items on the site yet'
  },
  render: (args) => ({
    components: { InfoCard, Button, OverviewItem },
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

            <div class="my-7">
              <OverviewItem v-for="o in 4" :key="o" :title="'Item ' + o" icon="circle" class="mb-4"/>
            </div>
            
            <template #footer>
              <Button>Button</Button>
            </template>
          </InfoCard>
        `
  })
}
