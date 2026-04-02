import { Steps, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Steps,
  tags: ['autodocs']
}

export const Default = {
  args: {
    steps: [
      { title: 'Personal Info' },
      { title: 'Business Details' },
      { title: 'Verification' }
    ]
  },
  render: (args) => ({
    components: { Steps, Theme },
    setup() {
      const currentStep = ref(0)
      return { args, currentStep }
    },
    template: `
      <Theme>
        <Steps v-model="currentStep" v-bind="args" />
      </Theme>
    `
  })
}
