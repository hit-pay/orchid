import { OcOverviewPieChart } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'

export default {
  component: OcOverviewPieChart,
  tags: ['autodocs']
}

export const Default = {
  args: {
    currency: '',
    chartData: [
      { value: 1048, name: 'Cards', itemStyle: { color: '#356DFF' } },
      { value: 200, name: 'Paynow', itemStyle: { color: '#AEC5FF' } },
      { value: 100, name: 'Others', itemStyle: { color: '#86FFCC' } }
    ],
    tooltip: {
      show: false
    },
    showPercentInLabel: true,
    totalLabel: 'Total Customer'
  },
  render: (args) => ({
    components: { OcOverviewPieChart, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OcOverviewPieChart v-bind="args" />
      </Theme>
    `
  })
}
