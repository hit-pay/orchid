<template>
  <div ref="barChart" class="w-full" />
</template>

<script setup>
import { computed, ref } from "vue";
import { useChart } from "@/orchidui/composables/useChart.js";

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
  tooltipValueFormatter: Function,
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
    right: "10px",
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
    borderRadius: 8,
    formatter: (params) => {
      if (props.tooltipFormatter) {
        return props.tooltipFormatter(params);
      }

      let value = params.value;

      if (props.tooltipValueFormatter) {
        value = props.tooltipValueFormatter(value);
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
        borderRadius: [4, 4, 0, 0], // Sets a 4pt radius for the top-left and top-right corners
      },
      emphasis: {
        itemStyle: {
          color: variants[props.variant],
          opacity: 1,
          borderRadius: [4, 4, 0, 0], // Reapply the 4pt radius for emphasis states
        },
      },
    },
  ],
}));
const barChart = ref();

useChart(barChart, options);
</script>
