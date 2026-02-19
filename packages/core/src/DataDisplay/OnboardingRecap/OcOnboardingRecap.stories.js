import { OcOnboardingRecap } from '@/orchidui-core'

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
        label: 'Type',
        value: 'Sole-proprietorship',
      },
      {
        label: 'Type',
        value: [
          'business-registration-certificate.pdf',
          'electricity-bill.jpg',
          'alex-id.jpg',
        ]
      },
    ]
  },
  render: (args) => ({
    components: { OcOnboardingRecap },
    setup() {
      return { args }
    },
    template: `
      <OcOnboardingRecap v-bind="args" />
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
        label: 'Type',
        value: 'Sole-proprietorship',
      },
      {
        label: 'Type',
        value: [
          'business-registration-certificate.pdf',
          'electricity-bill.jpg',
          'alex-id.jpg',
        ]
      },
    ]
  },
  render: (args) => ({
    components: { OcOnboardingRecap },
    setup() {
      return { args }
    },
    template: `
      <OcOnboardingRecap v-bind="args" />
    `
  })
}
