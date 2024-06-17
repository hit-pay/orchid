import { OnboardingProgressbar } from '@/orchidui'

export default {
  component: OnboardingProgressbar,
  tags: ['autodocs']
}
const ChartData = [
  { value: 60, name: 'Primary', itemStyle: { color: '#2465DE' } },
  { value: 20, name: 'Warning', itemStyle: { color: '#FFD47D' } },
  { value: 20, name: 'Empty', itemStyle: { color: '#F8F9FC' } }
]
export const Default = {
  args: {
    value: 50,
    title: '⌛️ We’re verifying your account!',
    description: '',
    chartData: ChartData
  },
  render: (args) => ({
    components: { OnboardingProgressbar },
    setup() {
      return { args }
    },
    template: `
          <OnboardingProgressbar v-bind="args">
            <template #description>
            <span class="text-sm text-oc-text-400">
        It usually takes
        <span class="font-medium text-oc-text">2 work days</span>
        . We will let you know once it’s done.
      </span>
            </template>
          </OnboardingProgressbar>
        `
  })
}
