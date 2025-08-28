import OcOverviewMonthlyBarChart from './OcOverviewMonthlyBarChart.vue'
import dayjs from 'dayjs'
import { Button } from '@orchidui/core'

export default {
  component: OcOverviewMonthlyBarChart,
  tags: ['autodocs']
}

export const overviewMonthlyBarChart = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'purple']
    }
  },
  args: {
    variant: 'primary',
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: Array.from({ length: 30 }, (_, i) => Math.random() * 2000),
    labelData: Array.from({ length: 30 }, (_, i) => dayjs().subtract(29 - i, 'day').toISOString()),
    yAxisFormatter: (value) => {
      return (value / 1000).toFixed(1) + 'K'
    },
    tooltipCurrency: 'SGD'
  },
  render: (args) => ({
    components: { OcOverviewMonthlyBarChart, Button },
    setup() {
      const handleMonth = () => {
        args.labelData = Array.from({ length: 30 }, (_, i) => dayjs().subtract(29 - i, 'day').toISOString())
        args.chartData = Array.from({ length: 30 }, (_, i) => Math.random() * 2000)
      }
      const handleWeek = () => {
        args.labelData = Array.from({ length: 7 }, (_, i) => dayjs().subtract(6 - i, 'day').toISOString())
        args.chartData = Array.from({ length: 7 }, (_, i) => Math.random() * 2000)
      }
      return { args, handleMonth, handleWeek }
    },
    template: `
          <div>
          <div class="flex items-center gap-2">
            <Button @click="handleMonth" class="mr-2">Month</Button>
            <Button @click="handleWeek">Week</Button>
          </div>
            <OcOverviewMonthlyBarChart
                class="h-[300px] w-[530px]"
                :variant="args.variant"
                :show-grid="args.showGrid"
                :show-tooltip="args.showTooltip"
                :show-legend="args.showLegend"
                :chart-data="args.chartData"
                :label-data="args.labelData"
                :tooltip-currency="args.tooltipCurrency"
                :y-axis-formatter="args.yAxisFormatter"
            />
          </div>
        `
  })
}
