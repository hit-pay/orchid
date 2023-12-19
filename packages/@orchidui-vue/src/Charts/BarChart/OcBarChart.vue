<template>
  <div ref="barChart" class="w-full" />
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  variant: {
    type: String,
    validator: (value) => ["primary", "purple"].includes(value),
  },
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
  labelData: Array,
  yAxisFormatter: Function,
  xAxisFormatter: Function,
  tooltipFormatter: Function,
  tooltipCurrency: String,
});

const variants = {
  primary: "#2465DE",
  purple: "#B14AED",
};

const options = computed(() => ({
  xAxis: {
    type: "category",
    data: props.labelData,
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#9295A5",
      formatter: props.xAxisFormatter,
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
      formatter: props.yAxisFormatter,
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
      if (props.tooltipFormatter) {
        return props.tooltipFormatter(params);
      }

      let value = params.value;

      if (props.tooltipCurrency) {
        const currency = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: props.tooltipCurrency,
        });

        value = currency.format(params.value);
      }

      return `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${params.name}
                </span>
            </div>
            <div class="text-oc-text font-medium text-[12px]">${value}</div>
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
        color: variants[props.variant],
        opacity: 0.5,
      },
      emphasis: {
        itemStyle: {
          color: variants[props.variant],
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
onUnmounted(() => {
  if (myChart.value) {
    myChart.value.dispose();
  }
});
watch(
  () => options.value,
  (val) => {
    myChart.value.setOption(val);
  },
  { deep: true },
);
</script>
