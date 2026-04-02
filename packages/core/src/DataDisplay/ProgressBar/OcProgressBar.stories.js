import { Theme, ProgressBar } from '@/orchidui-core'

export default {
  component: ProgressBar,
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: '5 step progress bar',
    steps: 5,
    currentStep: 3
  },
  render: (args) => ({
    components: { Theme, ProgressBar },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-8">
          <ProgressBar
            label="2 step progress bar"
            :steps="2"
            :currentStep="1"
          />
          <ProgressBar v-bind="args" />
        </div>
      </Theme>
    `
  })
}
