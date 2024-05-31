import { defineAsyncComponent } from "vue";
const BarChart = defineAsyncComponent(() => import("./OcBarChart.vue"));
export { BarChart };
