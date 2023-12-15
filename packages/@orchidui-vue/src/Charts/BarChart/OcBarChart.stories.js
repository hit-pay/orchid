import BarChart from "./OcBarChart.vue";

export default {
  component: BarChart,
  tags: ["autodocs"],
};

export const Line = {
  args: {
    color: "#B14AED",
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
  },
  render: (args) => ({
    components: { BarChart },
    setup() {
      return { args };
    },
    template: `
          <div>
            <BarChart
                class="h-[300px]"
                :color="args.color"
                :show-grid="args.showGrid"
                :show-tooltip="args.showTooltip"
                :show-legend="args.showLegend"
                :chart-data="args.chartData"
                :label-data="args.labelData"
            />
          </div>
        `,
  }),
};
