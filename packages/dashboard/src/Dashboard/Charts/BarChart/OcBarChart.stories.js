import { BarChart } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'

export default {
  component: BarChart,
  tags: ['autodocs']
}

export const Default = {
  args: {
    variant: 'primary',
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: [500, 730, 824, 1218.88, 2135, 1147, 760, 1150, 2130, 2324, 1218, 2135, 1147],
    labelData: [
      "NOV'22",
      "DEC'22",
      "JAN'23",
      "FEB'23",
      "MAR'23",
      "MAY'23",
      "JUN'23",
      "JUL'23",
      "AUG'23",
      "SEP'23",
      "OCT'23",
      "NOV'23"
    ],
    yAxisFormatter: (value) => {
      return (value / 1000).toFixed(1) + 'K'
    },
    tooltipCurrency: 'SGD'
  },
  render: (args) => ({
    components: { BarChart, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <BarChart class="h-[300px]" v-bind="args" />
      </Theme>
    `
  })
}
