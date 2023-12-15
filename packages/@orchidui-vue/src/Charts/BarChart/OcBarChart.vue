<template>
  <div ref="barChart" class="w-full" />
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { computed, onMounted, ref, watch } from "vue";
import { Tooltip } from "@/orchidui";

const props = defineProps({
  color: String,
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
  labelData: Array,
});
const markLineData = ref({
  index: 0,
  value: 0,
});
const options = computed(() => ({
  xAxis: {
    type: "category",
    data: props.labelData,
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#9295A5",
    },
    axisLine: {
      lineStyle: {
        color: "#F2F2F4",
      },
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false,
    },
    axisLabel: {
      color: "#9295A5",
      formatter: (value) => {
        return (value / 1000).toFixed(1) + "K";
      },
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
            <div class="text-oc-text font-medium text-[12px]">${currency.format(
              params.value,
            )}</div>
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
      itemStyle: {
        color: props.color,
        opacity: 0.5,
      },
      emphasis: {
        itemStyle: {
          color: props.color,
          opacity: 1,
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
