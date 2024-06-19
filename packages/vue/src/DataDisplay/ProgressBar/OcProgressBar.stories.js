import { Theme, ProgressBar } from '@/orchidui'

export default {
  component: ProgressBar,
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    components: { Theme, ProgressBar },
    setup() {},
    template: `
      <Theme colorMode="light">
        <div class="flex flex-col gap-8">
          <ProgressBar
            label="2 step progress bar"
            :steps="2"
            :currentStep="1"
          />

          <ProgressBar
            label="5 step progress bar"
            :steps="5"
            :currentStep="3"
          />
        </div>
      </Theme>
    `
  })
}
