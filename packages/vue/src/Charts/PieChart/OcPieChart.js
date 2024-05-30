import { defineAsyncComponent } from "vue";

const PieChart = defineAsyncComponent(() => import("./OcPieChart.vue"));
export { PieChart };
