import { OnboardingProductOption, Checklist, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: OnboardingProductOption,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'small']
    }
  },
  args: {
    productImageUrl: '/images/onboarding/product-images/invoice.svg',
    title: 'Account Setup',
    description: 'Complete your personal information and business',
    size: 'medium'
  },
  render: (args) => ({
    components: { OnboardingProductOption, Checklist, Theme },
    setup() {
      const selected = ref([])

      const toggle = (value, checked) => {
        if (checked) {
          selected.value = [...selected.value, value]
        } else {
          selected.value = selected.value.filter((v) => v !== value)
        }
      }

      return { args, selected, toggle }
    },
    template: `
      <Theme>
        <div class="w-full flex flex-col gap-y-4">
          <OnboardingProductOption v-bind="args">
            <div class="flex flex-col">
              <Checklist label="Account verification" completed :index="1" :action-button="{ label: 'Completed' }" />
              <Checklist label="Add bank account" active :index="2" :action-button="{ label: 'Continue' }" />
              <Checklist label="Configure payout" :index="3" :action-button="{ label: 'Setup' }" />
            </div>
          </OnboardingProductOption>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OnboardingProductOption
              :model-value="selected.includes('invoice')"
              product-image-url="/images/onboarding/product-images/invoice.svg"
              title="Invoicing"
              selectable
              description="Send professional invoices and get paid online."
              @update:model-value="(checked) => toggle('invoice', checked)"
            />
            <OnboardingProductOption
              :model-value="selected.includes('shopify')"
              product-image-url="/images/onboarding/product-images/shopify.svg"
              title="Shopify"
              selectable
              description="Connect your Shopify store and accept payments seamlessly."
              @update:model-value="(checked) => toggle('shopify', checked)"
            />
          </div>
        </div>
      </Theme>
    `
  })
}
