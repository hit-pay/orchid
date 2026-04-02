import { Theme, OcOnboardingRecap } from '@/orchidui-core'

export default {
  component: OcOnboardingRecap,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Business Information',
    subtitle: 'Your business details',
    state: 'completed',
    headerButton: {
      leftIcon: 'pencil',
      label: 'Edit'
    },
    items: [
      {
        label: 'Business Type',
        value: 'Sole-proprietorship'
      },
      {
        label: 'Documents',
        value: [
          'business-registration-certificate.pdf',
          'electricity-bill.jpg',
          'alex-id.jpg'
        ]
      }
    ]
  },
  render: (args) => ({
    components: { Theme, OcOnboardingRecap },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcOnboardingRecap v-bind="args" />
      </Theme>
    `
  })
}

export const NoHeader = {
  args: {
    title: 'Business Information',
    subtitle: 'Your business details',
    state: 'completed',
    noHeader: true,
    headerButton: {
      leftIcon: 'pencil',
      label: 'Edit'
    },
    items: [
      {
        label: 'Business Type',
        value: 'Sole-proprietorship'
      },
      {
        label: 'Documents',
        value: [
          'business-registration-certificate.pdf',
          'electricity-bill.jpg',
          'alex-id.jpg'
        ]
      }
    ]
  },
  render: (args) => ({
    components: { Theme, OcOnboardingRecap },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcOnboardingRecap v-bind="args" />
      </Theme>
    `
  })
}
