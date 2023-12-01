import Chart from "./OcPieChart.vue";
import { PieChartOptions } from "../../data/ChartData.js";
import { ref } from "vue";
import { Select } from "@/orchidui";

export default {
  component: Chart,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: PieChartOptions,
  },
  render: (args) => ({
    components: { Chart, Select },
    setup() {
      const pieChart = ref();
      const days = [
        {
          label: "This month",
          value: "this_month",
        },
      ];
      const selectedDay = ref(days[0].value);
      const toggleLegend = (name) => {
        pieChart.value.toggleLegendName(name);
      };
      return { toggleLegend, args, pieChart, selectedDay, days };
    },
    template: `
          <div class="flex flex-col items-center justify-center">
            <div class="w-full flex items-center justify-between">
              <span class="text-lg font-medium">Payment by Methods</span>
              <Select class="!w-fit" v-model="selectedDay" :options="days"/>
            </div>
            <Chart ref="pieChart" class="h-[300px]" :options="args.options"/>
            <div class="flex gap-x-5">
              <div class="flex items-center gap-x-2" v-for="(item) in args.options.series[0].data" :key="item.name"
                   @click="toggleLegend(item.name)">
                <div class="w-3 h-3 rounded-full" :style="{background: item.itemStyle.color}"/>
                <img v-if="item.name" :src="item.name"/>
                <span v-else>Other</span>
              </div>
            </div>
          </div>
        `,
  }),
};
