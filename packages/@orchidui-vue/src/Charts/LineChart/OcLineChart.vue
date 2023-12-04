<template>
  <div ref="lineChart" class="w-full" />
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
});
const markLineData = ref({
  index: 0,
  value: 0,
});
const options = computed(() => ({
  xAxis: {
    type: "category",
    data: [
      "NOV'22",
      "DEC'22",
      "JAN'23",
      "FEB'23",
      "MAR'23",
      "MAY'23",
      "JUN'23",
      "JUL'23",
      "AUG'23",
      "SEP'23",
      "OCT'23",
      "NOV'23",
    ],
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
    axisPointer: {
      show: true,
      label: {
        show: false,
        formatter: (params) => {
          const labelIndex = options.value.xAxis.data.indexOf(params.value);
          markLineData.value.index = params.value;
          markLineData.value.value = options.value.series[0].data[labelIndex];
        },
      },
      lineStyle: {
        color: "rgba(0,0,0,0)",
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false,
    },
    axisLabel: {
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
    trigger: "axis",
    formatter: (params) => {
      const currentParams = params[0];
      return `
        <div class="flex flex-col">
            <div class="text-xs font-medium text-oc-text-300">
                ${currentParams.axisValueLabel}
            </div>
            <div class="flex flex-col items-center gap-x-3">
               <span class="font-medium">
                    ${(currentParams.value / 1000).toFixed(1) + "K"}
                </span>
               <span class="text-oc-text-400 text-sm font-medium">
                 <div
                  class="w-0 h-0 rounded-xs border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-oc-error"
                  />
                  11%
                </span>
            </div>
        </div>
      `;
    },
  },
  series: [
    {
      data: [
        500, 730, 824, 1218, 2135, 1147, 760, 1150, 2130, 2324, 1218, 2135,
        1147,
      ],
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(36, 101, 222, 0.15)", // Start color
          },
          {
            offset: 1,
            color: "rgba(36, 101, 222, 0)", // End color
          },
        ]),
      },
      lineStyle: {
        color: "#2465DE",
      },
      markLine: {
        symbol: "none",
        animation: false,
        data: [
          [
            {
              coord: [markLineData.value.index, 0],
            },
            {
              coord: [markLineData.value.index, markLineData.value.value],
            },
          ],
        ],
        silent: true,
      },
    },
  ],
}));
const myChart = ref();
const lineChart = ref();

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
  myChart.value = echarts.init(lineChart.value);
  myChart.value.setOption(options.value);
  myChart.value.getZr().on("globalout", () => {
    markLineData.value.index = 0;
    markLineData.value.value = 0;
  });
});
watch(
  () => options.value,
  (val) => {
    myChart.value.setOption(val);
  },
  { deep: true },
);
</script>
