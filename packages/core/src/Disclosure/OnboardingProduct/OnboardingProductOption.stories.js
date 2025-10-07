import { OnboardingProductOption, Checklist } from '@/orchidui-core'
export default {
  component: OnboardingProductOption,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    productImageUrl: {
      control: 'text',
    },

    title: {
      control: 'text',
    },

    description: {
      control: 'text',
    },

    size: {
      control: 'options',
      options: ['medium', 'small'],
    },
  },
  args: {
    productImageUrl: "/icons/onboarding/product-images/invoice.svg",
    title: 'Account Setup',
    description: 'Complete your personal information and business',
    size: 'medium',
  },
  render: (args) => ({
    components: { OnboardingProductOption, Checklist },
    setup() {
      return { args }
    },
    template: `
          <div class="w-full flex flex-col gap-y-4">
            <OnboardingProductOption
              product-image-url="/images/onboarding/product-images/invoice.svg"
              title="Account Setup"
              description="Complete your personal information and business"
              class="md:col-span-2"
              size="medium"
            >
              <div class="flex flex-col">
                <Checklist
                  label="Account verifications"
                  completed
                  :index="1"
                  :action-button="{ label: 'Completed' }"
                />
                <Checklist
                  label="Add bank account"
                  active
                  :index="2"
                  :action-button="{ label: 'Continue' }"
                />
                <Checklist
                  label="Add bank account"
                  active
                  index="3"
                  :action-button="{ label: 'Setup' }"
                />
              </div>
            </OnboardingProductOption>
            
            <div class="grid grid-cols-1 md:grid-cols-[repeat(4,1fr)] gap-4 justify-center">
              <OnboardingProductOption
                product-image-url="/images/onboarding/product-images/invoice.svg"
                title="Invoicing"
                selectable
                description="Send professional invoices and get paid online. Track payments, send reminders, and offer flexible payment options."
                class="md:col-span-2"
              />
              <OnboardingProductOption
                product-image-url="/images/onboarding/product-images/shopify.svg"
                title="Invoicing"
                selectable
                description="Send professional invoices and get paid online. Track payments, send reminders, and offer flexible payment options."
                class="md:col-span-2"
              />
              <OnboardingProductOption
                product-image-url="/images/onboarding/product-images/invoice.svg"
                title="Invoicing"
                selectable
                description="Send professional invoices and get paid online. Track payments, send reminders, and offer flexible payment options."
                class="md:col-span-2 md:col-start-2"
              />
            </div>
          </div>
        `
  })
}
