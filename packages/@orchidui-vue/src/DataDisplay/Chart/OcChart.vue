<template>
  <div ref="chart" class="w-full" />
</template>

<script setup lang="ts">
import * as echarts from "echarts";

import { onMounted, ref } from "vue";

const props = defineProps({
  options: Object,
});
const myChart = ref();
const chart = ref();

const toggleLegendName = (name) => {
  myChart.value.dispatchAction({
    type: "legendToggleSelect",
    name,
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
