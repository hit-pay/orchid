import { defineAsyncComponent } from "vue";
const BarRaceChart = defineAsyncComponent(() => import("./OcBarRaceChart.vue"));
export { BarRaceChart };
