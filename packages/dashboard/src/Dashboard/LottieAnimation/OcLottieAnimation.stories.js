import { LottieAnimation } from '@/orchidui-dashboard'

export default {
  component: LottieAnimation,
  tags: ['autodocs']
}

export const Default = {
  args: {
    path: '/json/lottie-animation/success_report.json',
    width: '200',
    height: '200',
    autoPlay: true,
  },
  render: (args) => ({
    components: { LottieAnimation },
    setup() {
      return { args }
    },
    template: `
      <LottieAnimation v-bind="args" />
    `
  })
}
