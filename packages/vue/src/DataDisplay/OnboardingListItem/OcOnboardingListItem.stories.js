import { OcOnboardingListItem } from '@/orchidui'

export default {
  component: OcOnboardingListItem,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Business verification',
    description: 'We need to verify your business to get started',
    buttonOptions: {
      variant: 'secondary',
      label: 'Verifiying',
      status: '',
      number: 1
    }
  },
  render: (args) => ({
    components: { OcOnboardingListItem },
    setup() {
      return { args }
    },
    template: `
          <OcOnboardingListItem
              v-bind="args"
          />
          <OcOnboardingListItem
              v-bind="args"
              status="pending"
          />
          <OcOnboardingListItem
              v-bind="args"
              status="completed"
          />
        `
  })
}
