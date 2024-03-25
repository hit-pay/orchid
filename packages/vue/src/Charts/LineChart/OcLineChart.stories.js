import LineChart from "./OcLineChart.vue";

export default {
  component: LineChart,
  tags: ["autodocs"],
};

export const Line = {
  args: {
    showGrid: false,
    showTooltip: true,
    showLegend: false,
    chartData: [
      { value: 500, percent: 0 },
      { value: 730, percent: 0 },
      { value: 824, percent: 10 },
      { value: 1218, percent: -50 },
      { value: 2135 },
      { value: 1147, percent: -32 },
      { value: 760, percent: 0 },
      { value: 1150, percent: -3 },
      { value: 2130, percent: 4 },
      { value: 2324, percent: -5 },
      { value: 1218, percent: 6 },
      { value: 2135, percent: -34 },
      { value: 1147, percent: 7 },
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
    tooltipValueFormatter: (value) => {
      const currency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "sgd",
        maximumFractionDigits: 2,
      });

      return currency.format(value);
    },
  },
  render: (args) => ({
    components: { LineChart },
    setup() {
      return { args };
    },
    template: `
          <div>
            <LineChart
                class="h-[300px]"
                :show-grid="args.showGrid"
                :show-tooltip="args.showTooltip"
                :show-legend="args.showLegend"
                :chart-data="args.chartData"
                :label-data="args.labelData"
                :tooltip-value-formatter="args.tooltipValueFormatter"
            />
          </div>
        `,
  }),
};
