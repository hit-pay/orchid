import OcBarRaceChart from "./OcBarRaceChart.vue";

export default {
  component: OcBarRaceChart,
  tags: ["autodocs"],
};

export const barRace = {
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
    chartData: [62, 11, 8, 6, 5, 2],
    labelData: ["50%", "23%", "12%", "10%", "8%", "8%"],
    legendData: [
      "Running shoes",
      "Women's ribbed top",
      "Fleece sweatshirt",
      "Sportswear Tech Fleece",
      "Joggers",
      "Joggers",
    ],
    dummyData: false,
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
                :variant="args.variant"
                :show-grid="args.showGrid"
                :show-tooltip="args.showTooltip"
                :show-legend="args.showLegend"
                :chart-data="args.chartData"
                :label-data="args.labelData"
                :legend-data="args.legendData"
                :dummy-Data="args.dummyData"
            />
          </div>
        `,
  }),
};
