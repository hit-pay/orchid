import { OnboardingAccordion, Theme } from '@/orchidui-core'

export default {
  component: OnboardingAccordion,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['completed', 'not_completed', 'current', 'partially_completed', 'pending', 'error']
    }
  },
  args: {
    title: 'Choose product type',
    description: 'Tell us what type of products you are selling',
    isBorder: false,
    variant: 'completed'
  },
  render: (args) => ({
    components: { OnboardingAccordion, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <div class="w-full flex flex-col gap-y-4">
          <OnboardingAccordion v-bind="args">
            <div class="p-10">Accordion body content</div>
          </OnboardingAccordion>
        </div>
      </Theme>
    `
  })
}
