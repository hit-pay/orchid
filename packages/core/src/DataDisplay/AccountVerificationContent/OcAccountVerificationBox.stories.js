import { OcAccountVerificationBox, Chip } from '@/orchidui-core'
export default {
  components: { Chip },
  component: OcAccountVerificationBox,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Upload documents',
    icon: 'upload',
    description: 'Manually upload your business registration and identity documents.',
    chips: [
      {
        label: '3 documents required',
        type: 'transparent',
        variant: 'gray',
        icon: 'document',
      },
    ],
  },
  render: (args) => ({
    components: { OcAccountVerificationBox },
    setup() {
      return { args }
    },
    template: `
      <OcAccountVerificationBox v-bind="args" />
    `
  })
}

export const HeaderSlot = {
  args: {
    description: 'For Singapore users. Instant verification with auto-filled information.',
    active: true,
    chips: [
      {
        label: 'Instant verification',
        type: 'transparent',
        variant: 'success',
        icon: 'document',
      },
      {
        label: 'Secure',
        type: 'transparent',
        variant: 'success',
        icon: 'information',
      },
    ],
  },
  render: (args) => ({
    components: { OcAccountVerificationBox, Chip },
    setup() {
      return { args }
    },
    template: `
      <OcAccountVerificationBox v-bind="args">
        <template #title>
          <img src="/images/singpass.png" alt="singpass"/>
          <Chip class="ml-auto" variant="dark-blue" label="Recommended" />
        </template>
      </OcAccountVerificationBox>
    `
  })
}
