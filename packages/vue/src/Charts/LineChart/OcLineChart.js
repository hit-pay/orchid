import { defineAsyncComponent } from 'vue'
const LineChart = defineAsyncComponent(() => import('./OcLineChart.vue'))
export { LineChart }
