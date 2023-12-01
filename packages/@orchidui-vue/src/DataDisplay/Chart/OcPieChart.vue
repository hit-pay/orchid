<template>
  <div ref="chart" class="w-full" />
</template>

<script setup lang="ts">
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from "echarts/core";
// Import bar charts, all suffixed with Chart
import { PieChart } from "echarts/charts";
// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TransformComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
// Features like Universal Transition and Label Layout
import { UniversalTransition } from "echarts/features";
// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers";
import { onMounted, ref } from "vue";

echarts.use([
  PieChart,
  TransformComponent,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  TooltipComponent,
]);
const props = defineProps({
  options: Object,
});
const myChart = ref();
const chart = ref();

const toggleLegendName = (name) => {
  myChart.value.dispatchAction({
    type: "legendToggleSelect",
    name, // the name of the series you want to toggle
  });
};

defineExpose({
  toggleLegendName,
});

onMounted(() => {
  myChart.value = echarts.init(chart.value);

  myChart.value.setOption(props.options);
});
</script>
