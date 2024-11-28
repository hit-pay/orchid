import { VerificationOption, RadioGroup } from '@/orchidui-core'
import singpassImage from './singpass.png'

export default {
  component: VerificationOption,
  tags: ['autodocs']
}
export const Default = {
  args: {
    title: 'Enter form manually',
    chipOptions: {
      label: '2 days verification',
      variant: 'warning',
      icon: 'time'
    }
  },
  render: (args) => ({
    components: { VerificationOption, RadioGroup },
    setup() {
      return { args, singpassImage }
    },
    template: `
          <div class="flex flex-col gap-y-6">
            <VerificationOption v-bind="args">
              <template #content>
                <div class="flex flex-col gap-y-3">
                  <div class="text-oc-text-400">Filling out the form may take some time. Verification needs
                    <span class="font-medium text-oc-text">2 working days.</span>
                  </div>

                  <div class="border-t border-oc-gray-100 pt-3">
                    <RadioGroup
                        :model-value="'yes'"
                        :radio="[
                           {
                               label: 'Yes',
                               value: 'yes'
                           },
                           {
                               label: 'No',
                               value: 'no'
                           }
                       ]"
                        label="Is your corporation with multiple layers of ownership?"
                        group-name="radio1"
                        alignment="horizontal"
                    />
                  </div>
                </div>
              </template>
            </VerificationOption>

            <VerificationOption v-bind="args" is-active>
              <template #title>
                <img :src="singpassImage" alt="singpass"/>
              </template>
              <template #content>
                <div class="text-oc-text-400">
                  Singpass enables you to retrieve your personal data from relevant government agencies to pre-fill the
                  relevant fields, making digital transaction faster and more convenient. <span
                    class="font-medium text-oc-text">Verification will be instant</span>.
                </div>
              </template>
            </VerificationOption>
          </div>
        `
  })
}
