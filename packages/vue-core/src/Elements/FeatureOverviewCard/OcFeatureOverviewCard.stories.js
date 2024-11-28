import { Theme, FeatureOverviewCard } from '@orchidui/vue-core'

export default {
  component: FeatureOverviewCard,
  tags: ['autodocs']
}

export const featureOverviewCard = {
  argTypes: {},
  args: {
    title: 'Title',
    description: 'Description',
    features: [
      {
        title: 'Send Money Locally',
        icon: 'send'
      },
      {
        title: 'International Payments',
        icon: 'world-money',
        comingSoon: true
      },
      {
        title: 'Add Approvers',
        icon: 'stamp'
      },
      {
        title: 'Try Now',
        icon: 'bitcoin-growth'
      }
    ]
  },
  render: (args) => ({
    components: {
      Theme,
      FeatureOverviewCard
    },
    setup() {
      return { args }
    },
    template: `
          <Theme>
            <FeatureOverviewCard v-bind="args"/>
          </Theme>
        `
  })
}
