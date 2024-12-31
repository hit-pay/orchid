import {
  OcSection,
  Theme as OcTheme,
  ListItem as OcListItem,
  OverviewIcon as OverviewIcon,
  Button as OcButton,
  Icon as OcIcon,
  OcOnboardingListItem,
} from '@/orchidui-core'

export default {
  component: OcSection,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Get in touch',
  },
  render: (args) => ({
    components: {
      OcSection,
      OcListItem,
      OverviewIcon,
      OcButton,
      OcIcon,
      OcOnboardingListItem,
      OcTheme,
    },
    setup() {
      return { args }
    },
    template: `
      <OcTheme colorMode="light" class="p-10">
        <OcSection :title="args.title">
          <OcListItem
            type="general"
            :is-dropdown-actions-visible="false"
            :is-disabled="true"
            class="!opacity-100"
          >
            <template #title>
              <OverviewIcon icon="chat" />
            </template>
  
            <div>
              <div class="font-medium">Live chat</div>
              <div class="mt-2 text-sm">Get instant help from our support team.</div>
              
              <div class="flex mt-4 text-sm">
                <div class="w-[16px] h-[16px] rounded-full bg-oc-accent-1-100 p-2 flex justify-center items-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#002771"/>
                  </svg>
                </div>
                
                <div class="ml-3">
                  <span class="text-oc-text-500 font-medium">Off-hours</span>
                  <span class="ml-2 text-oc-text-400">~1 hr response time</span>
                </div>
              </div>
              
              <div class="flex mt-5">
                <OcButton size="small" variant="secondary" label="Start chat"/>
              </div>
            </div>
          </OcListItem>
        </OcSection>
        
        <OcSection
          title="Resource"
          class="mt-8"
        >
          <div class="grid grid-cols-2 gap-5">
            <OcOnboardingListItem
              class="rounded border border-gray-200 max-w-[420px]"
              is-button-visible
              :number="null"
              title="Product Guides"
              description="Explore HitPay with our user-friendly docs."
              :button-options="{
                rightIcon: 'external-link',
                isTransparent: true,
                label: 'Learn more',
              }"
            />

            <OcOnboardingListItem
              class="rounded border border-gray-200 max-w-[420px]"
              is-button-visible
              :number="null"
              title="Pricing"
              description="Explore pricing – no fees, pay per transaction."
              :button-options="{
                rightIcon: 'external-link',
                isTransparent: true,
                label: 'Learn more',
              }"
            />
          </div>
        </OcSection>
      </OcTheme>
    `
  })
}
