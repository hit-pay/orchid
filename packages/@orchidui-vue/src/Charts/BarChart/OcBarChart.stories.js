import OcBarChart from "./OcBarChart.vue";

export default {
  component: OcBarChart,
  tags: ["autodocs"],
};

export const barChart = {
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "purple"],
    },
  },
  args: {
    variant: "primary",
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: [
      500, 730, 824, 1218.88, 2135, 1147, 760, 1150, 2130, 2324, 1218, 2135,
      1147,
    ],
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
      "NOV'23",
    ],
    yAxisFormatter: (value) => {
      return (value / 1000).toFixed(1) + "K";
    },
    tooltipCurrency: "SGD",
    dummyData: false,
  },
  render: (args) => ({
    components: { OcBarChart },
    setup() {
      return { args };
    },
    template: `
          <div>
            <OcBarChart
                class="h-[300px]"
                :variant="args.variant"
                :show-grid="args.showGrid"
                :show-tooltip="args.showTooltip"
                :show-legend="args.showLegend"
                :chart-data="args.chartData"
                :label-data="args.labelData"
                :tooltip-currency="args.tooltipCurrency"
                :y-axis-formatter="args.yAxisFormatter"
                :dummy-data="args.dummyData"
            />
          </div>
        `,
  }),
};
