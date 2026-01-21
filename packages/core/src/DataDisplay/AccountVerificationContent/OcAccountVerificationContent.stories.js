import { OcAccountVerificationContent, OcOnboardingRecap } from '@/orchidui-core'

export default {
  component: OcAccountVerificationContent,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Review & submit',
    subtitle: 'Review all information before submitting your verification',
    footerClasses: 'justify-between',
    buttons: [
      {
        label: 'Cancel',
        variant: 'secondary',
      },
      {
        label: 'Submit',
        variant: 'primary'
      }
    ]
  },
  render: (args) => ({
    components: { OcAccountVerificationContent, OcOnboardingRecap },
    setup() {
      return { args }
    },
    template: `
      <OcAccountVerificationContent v-bind="args">
        <OcOnboardingRecap
          title="Business Information"
          state="completed"
          :header-button="{ leftIcon: 'pencil', label: 'Edit' }"
          :items="[
            { label: 'Business Name', value: 'Acme Corporation' },
            { label: 'Registration Number', value: 'REG-123456789' },
            { label: 'Business Type', value: 'Private Limited Company' },
            { label: 'Documents', value: ['business-registration.pdf', 'tax-certificate.pdf'] }
          ]"
        />
      </OcAccountVerificationContent>
    `
  })
}
