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
            />
          </div>
        `,
  }),
};
