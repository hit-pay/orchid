import { BarRaceChart } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'

export default {
  component: BarRaceChart,
  tags: ['autodocs']
}

export const Default = {
  args: {
    variant: 'primary',
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: [62, 11, 8, 6, 5, 2],
    labelData: ['50%', '23%', '12%', '10%', '8%', '8%'],
    legendData: [
      'Running shoes',
      "Women's ribbed top",
      'Fleece sweatshirt',
      'Sportswear Tech Fleece',
      'Joggers',
      'Joggers'
    ]
  },
  render: (args) => ({
    components: { BarRaceChart, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <BarRaceChart class="h-[300px]" v-bind="args" />
      </Theme>
    `
  })
}
