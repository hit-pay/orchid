import PieChart from "./OcPieChart.vue";

export default {
  component: PieChart,
  tags: ["autodocs"],
};

export const Line = {
  args: {
    showGrid: false,
    showTooltip: true,
    showLegend: true,
  },
  render: (args) => ({
    components: { PieChart },
    setup() {
      return { args };
    },
    template: `
          <div>
            <PieChart
                class="h-[300px]"
                :show-grid="args.showGrid"
                :show-tooltip="args.showTooltip"
                :show-legend="args.showLegend"
            />
          </div>
        `,
  }),
};
