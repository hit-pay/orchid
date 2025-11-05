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
    labelData: ["2025-08-14","2025-08-15","2025-08-16","2025-08-17","2025-08-18","2025-08-19","2025-08-20","2025-08-21","2025-08-22","2025-08-23","2025-08-24","2025-08-25","2025-08-26","2025-08-27","2025-08-28","2025-08-29","2025-08-30","2025-08-31","2025-09-01","2025-09-02","2025-09-03","2025-09-04","2025-09-05","2025-09-06","2025-09-07","2025-09-08","2025-09-09","2025-09-10","2025-09-11","2025-09-12"],
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
                currency="HKD"
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
