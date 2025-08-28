import OcOverviewPieChart from './OcOverviewPieChart.vue'
import dayjs from 'dayjs'
import { Button } from '@orchidui/core'

export default {
  component: OcOverviewPieChart,
  tags: ['autodocs']
}

export const overviewPieChart = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'purple']
    }
  },
  args: {   
      chartData: [
        { value: 1048, name: 'Cards', itemStyle: { color: '#356DFF' } },
        { value: 200, name: 'Paynow', itemStyle: { color: '#AEC5FF' } },
        { value: 100, name: 'Others', itemStyle: { color: '#86FFCC' } },
        
      ]
  },
  render: (args) => ({
    components: { OcOverviewPieChart },
    setup() {
      return { args }
    },
    template: `
          <div>
            <OcOverviewPieChart :chart-data="args.chartData" />
          </div>
        `
  })
}
