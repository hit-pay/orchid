import { OcOverviewPieChart } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'

export default {
  component: OcOverviewPieChart,
  tags: ['autodocs']
}

export const Default = {
  args: {
    currency: 'SGD',
    chartData: [
      { value: 1048, name: 'Cards', itemStyle: { color: '#356DFF' } },
      { value: 200, name: 'Paynow', itemStyle: { color: '#AEC5FF' } },
      { value: 100, name: 'Others', itemStyle: { color: '#86FFCC' } }
    ],
    tooltip: {
      show: true,
      trigger: 'item',
      padding: 0,
      formatter: (params) => `
        <div class="py-3 px-4 leading-normal">
          <div class="uppercase text-[10px] font-medium text-oc-text-400">
            ${params.name}
          </div>
          <div class="text-oc-text-500 font-medium text-base">
            SGD ${Number(params.value).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
            (${params.percent}%)
          </div>
        </div>
      `
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
