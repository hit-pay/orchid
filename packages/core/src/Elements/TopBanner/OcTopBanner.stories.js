import TopBanner from './OcTopBanner.vue'

export default {
  component: TopBanner,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title:
      'To start accepting recurring payments, please activate a payment method that supports it.',
    buttonLabel: 'Activate payment method'
  },
  render: (args) => ({
    components: {
      TopBanner
    },
    setup() {
      return { args }
    },
    template: `
          <TopBanner :title="args.title" :button-label="args.buttonLabel"/>
        `
  })
}
