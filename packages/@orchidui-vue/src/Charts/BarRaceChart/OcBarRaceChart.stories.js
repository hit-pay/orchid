import OcBarRaceChart from "./OcBarRaceChart.vue";

export default {
  component: OcBarRaceChart,
  tags: ["autodocs"],
};

export const Line = {
  args: {
    color: '#2465DE',
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: [
      62, 11, 8, 6, 5, 2
    ],
    labelData: [
      .5,
      .23,
      .12,
      .10,
      .08
    ],
  },
  render: (args) => ({
    components: { OcBarRaceChart },
    setup() {
      return { args };
    },
    template: `
          <div>
            <OcBarRaceChart
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
