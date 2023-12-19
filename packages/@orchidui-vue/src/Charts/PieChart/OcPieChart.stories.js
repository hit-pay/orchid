import PieChart from "./OcPieChart.vue";

export default {
  component: PieChart,
  tags: ["autodocs"],
};

export const pieChart = {
  args: {
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    chartData: [
      {
        value: 39.64,
        name: "stack_cards",
        itemStyle: { color: "#2465DE" },
      },
      {
        value: 22.21,
        name: "paynow",
        itemStyle: { color: "#B14AED" },
      },
      {
        value: 17.44,
        name: "atome",
        itemStyle: { color: "#F4B840" },
      },
      {
        value: 15.78,
        name: "fave",
        itemStyle: { color: "#FF6B6C" },
      },
      {
        value: 4.93,
        name: "",
        itemStyle: { color: "#E5E6EA" },
      },
    ],
    dummyData: false,
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
                :chart-data="args.chartData"
                :dummy-data="args.dummyData"
            />
          </div>
        `,
  }),
};
