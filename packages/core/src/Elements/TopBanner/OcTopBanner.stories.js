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
      const onClick = () => {
        console.log('clicked')
      }

      return { args, onClick }
    },
    template: `
          <TopBanner :title="args.title" :button-label="args.buttonLabel" @click:button="onClick" />
        `
  })
}

export const ActionRequired = {
  args: {
    chipProps: {
      label: 'Action Required',
      variant: 'warning',
      class: 'shrink-0',
      icon: 'alert-fill'
    },
    titleClass: 'flex-1',
    rawHtml:
      'We will stop using <span class="underline font-medium">Cards (by Adyen)</span> soon. To prevent payment disruptions, complete your onboarding to the new payment method "Cards" by 21 Nov \'25.',
    buttonLabel: 'Complete now'
  },
  render: (args) => ({
    components: {
      TopBanner
    },
    setup() {
      const onClick = () => {
        console.log('clicked')
      }

      return { args, onClick }
    },
    template: `
          <TopBanner
            class="gap-5 w-full pl-5"
            title-class="flex-1 font-normal"
            :chip-props="args.chipProps"
            :raw-html="args.rawHtml"
            :button-label="args.buttonLabel"
            :secondary-button="{
              label: 'View guide',
              class: 'underline'
            }"
            @click:button="onClick"
          />
        `
  })
}
