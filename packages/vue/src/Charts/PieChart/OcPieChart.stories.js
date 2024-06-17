import PieChart from './OcPieChart.vue'

export default {
  component: PieChart,
  tags: ['autodocs']
}

export const Line = {
  args: {
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: [
      {
        value: 3900.64,
        name: 'Shopify',
        icon: 'plugins/api_shopify',
        itemStyle: { color: '#9BC34B' }
      },
      {
        value: 2200.21,
        name: 'Link',
        icon: 'plugins/link',
        itemStyle: { color: '#2465DE' }
      },
      {
        value: 1700.44,
        name: 'Invoice',
        icon: 'plugins/invoice',
        itemStyle: { color: '#B14AED' }
      },
      {
        value: 1500.78,
        name: 'Recurring billing',
        icon: 'plugins/recurring_billing',
        itemStyle: { color: '#F4B840' }
      },
      {
        value: 400.93,
        name: 'Others',
        legendTooltip: ['Online Store (1.5%)', 'Google Form (0.3%)'],
        itemStyle: { color: '#E5E6EA' }
      }
    ],
    tooltipCurrency: 'SGD'
  },
  render: (args) => ({
    components: { PieChart },
    setup() {
      return { args }
    },
    template: `
          <div>
            <PieChart
                class="h-[300px]"
                :show-grid="args.showGrid"
                :show-tooltip="args.showTooltip"
                :show-legend="args.showLegend"
                :chart-data="args.chartData"
                :tooltip-currency="args.tooltipCurrency"
            />
          </div>
        `
  })
}
