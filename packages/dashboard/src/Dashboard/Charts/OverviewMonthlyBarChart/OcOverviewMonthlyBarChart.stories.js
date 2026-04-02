import { OverviewMonthlyBarChart } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'

export default {
  component: OverviewMonthlyBarChart,
  tags: ['autodocs']
}

export const Default = {
  args: {
    variant: 'primary',
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: [1240, 980, 1750, 2100, 1630, 890, 2340, 1870, 1450, 2680, 1920, 760, 1580, 2230, 1340, 1090, 1960, 2410, 1720, 830, 2560, 1480, 1150, 1890, 2070, 1320, 940, 2180, 1660, 1430],
    labelData: [
      '2025-09-01', '2025-09-02', '2025-09-03', '2025-09-04', '2025-09-05',
      '2025-09-06', '2025-09-07', '2025-09-08', '2025-09-09', '2025-09-10',
      '2025-09-11', '2025-09-12', '2025-09-13', '2025-09-14', '2025-09-15',
      '2025-09-16', '2025-09-17', '2025-09-18', '2025-09-19', '2025-09-20',
      '2025-09-21', '2025-09-22', '2025-09-23', '2025-09-24', '2025-09-25',
      '2025-09-26', '2025-09-27', '2025-09-28', '2025-09-29', '2025-09-30'
    ],
    yAxisFormatter: (value) => {
      return (value / 1000).toFixed(1) + 'K'
    },
    tooltipCurrency: 'SGD',
    currency: 'SGD'
  },
  render: (args) => ({
    components: { OverviewMonthlyBarChart, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <OverviewMonthlyBarChart class="h-[300px] w-[530px]" v-bind="args" />
      </Theme>
    `
  })
}
