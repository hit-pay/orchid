<template>
  <div ref="barChart" class="w-full" />
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  color: String,
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
  labelData: Array,
});

const options = computed(() => ({
  xAxis: {
    show: false,
    type: "value",
  },
  yAxis: {
    inverse: true,
    data: props.labelData,
    type: "category",
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      color: "#03102F",
      fontWeight: 500,
    },
  },
  grid: {
    show: props.showGrid,
    right: 0,
    left: 0,
    top: "10px",
    bottom: 0,
    containLabel: true,
  },
  legend: {
    show: props.showLegend,
  },
  tooltip: {
    show: props.showTooltip,
    padding: 0,
    borderWidth: 0,
    formatter: (params) => {
      const currency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "SGD",
      });

      return `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${params.name}
                </span>
            </div>
            <div class="text-oc-text font-medium text-[12px]">${params.value}</div>
        </div>

      `;
    },
  },
  series: [
    {
      data: props.chartData,
      type: "bar",
      smooth: true,
      showSymbol: false,
      label: {
        show: true,
        position: "insideLeft",
        color: "#03102F",
        opacity: 1,
        align: "left",
        padding: [0, 8],
        fontWeight: 300,
      },
      // barMaxWidth: 22,
      barGap: 0,
      itemStyle: {
        color: props.color,
        opacity: 0.2,
        borderRadius: [0, 4, 4, 0],
      },
      emphasis: {
        itemStyle: {
          color: props.color,
        },
      },
    },
    {
      data: props.chartData.map(
        (i) => Math.max(...(props.chartData as number[])) * 0.002,
      ),
      type: "bar",
      smooth: true,
      showSymbol: false,
      label: {
        show: false,
      },
      barGap: "-100%",
      itemStyle: {
        color: props.color,
      },
      emphasis: {
        itemStyle: {
          color: props.color,
        },
      },
    },
  ],
}));
const myChart = ref();
const barChart = ref();

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
  myChart.value = echarts.init(barChart.value);
  myChart.value.setOption(options.value);
});
watch(
  () => options.value,
  (val) => {
    myChart.value.setOption(val);
  },
  { deep: true },
);
</script>
