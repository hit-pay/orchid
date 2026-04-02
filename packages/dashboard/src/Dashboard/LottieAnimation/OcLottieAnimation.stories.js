import { LottieAnimation } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'

export default {
  component: LottieAnimation,
  tags: ['autodocs']
}

export const Default = {
  args: {
    path: '/json/lottie-animation/success_report.json',
    width: '200',
    height: '200',
    autoPlay: true
  },
  render: (args) => ({
    components: { LottieAnimation, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <LottieAnimation v-bind="args" />
      </Theme>
    `
  })
}
