import OnboardingAccordion from './OnboardingAccordion.vue'

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
    description: 'Tell us what type of products your are selling',
    isBorder: false,
    variant: 'completed'
  },
  render: (args) => ({
    components: { OnboardingAccordion },
    setup() {
      return { args }
    },
    template: `
          <div class="w-full flex flex-col gap-y-4">
            <OnboardingAccordion
                :title="args.title"
                :description="args.description"
                :isBorder="args.isBorder"
                :variant="args.variant"
            >
              <div class="p-10">Tested body</div>
            </OnboardingAccordion>
            <OnboardingAccordion
                :title="args.title"
                :description="args.description"
                :isBorder="args.isBorder"
                :variant="'error'"
            >
              <div class="p-10">Tested body</div>
            </OnboardingAccordion>
            <OnboardingAccordion
                :title="args.title"
                :description="args.description"
                :isBorder="args.isBorder"
                :variant="'pending'"
            >
              <div class="p-10">Tested body</div>
            </OnboardingAccordion>
            <OnboardingAccordion
                :title="args.title"
                :description="args.description"
                :isBorder="args.isBorder"
                :variant="'not_completed'"
            >
              <div class="p-10">Tested body</div>
            </OnboardingAccordion>
            <OnboardingAccordion
                :title="args.title"
                :description="args.description"
                :isBorder="args.isBorder"
                :variant="'current'"
            >
              <div class="p-10">Tested body</div>
            </OnboardingAccordion>
            <OnboardingAccordion
                :title="args.title"
                :description="args.description"
                :isBorder="args.isBorder"
                :variant="'partially_completed'"
            >
              <div class="p-10">Tested body</div>
            </OnboardingAccordion>
          </div>
        `
  })
}
