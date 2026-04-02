import { Theme, OcOnboardingListItem } from '@/orchidui-core'

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
      label: 'Verify',
      status: '',
      number: 1
    }
  },
  render: (args) => ({
    components: { Theme, OcOnboardingListItem },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcOnboardingListItem v-bind="args" />
        <OcOnboardingListItem v-bind="args" status="pending" />
        <OcOnboardingListItem v-bind="args" status="completed" />
      </Theme>
    `
  })
}
