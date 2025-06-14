<template>
  <div class="grid grid-cols-2">
    <div class="pt-4 pb-7 flex flex-col h-[100%]">
      <div
        v-for="item in legendData"
        class="text-[14px] flex flex-1 items-center justify-start pr-2 gap-3"
      >
        <slot name="legend-item" :data="item">
          <div class="truncate">{{ item }}</div>
        </slot>
      </div>
    </div>
    <div ref="barRaceChart" class="h-full" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useChart } from '@/orchidui-dashboard/Dashboard/composables/useChart.js'

const props = defineProps({
  variant: {
    type: String,
    validator: (value) => ['primary', 'purple'].includes(value)
  },
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
  labelData: Array,
  legendData: Array,
  yAxisFormatter: Function,
  tooltipFormatter: Function,
  tooltipValueFormatter: Function
})

const variants = {
  primary: '#2465DE',
  purple: '#B14AED'
}

const options = computed(() => ({
  xAxis: {
    show: false,
    type: 'value'
  },
  yAxis: {
    inverse: true,
    data: props.labelData,
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      color: '#03102F',
      fontWeight: 500,
      formatter: props.yAxisFormatter,
      fontSize: 14
    }
  },
  grid: {
    show: props.showGrid,
    right: 0,
    left: 0,
    top: '10px',
    bottom: 0,
    containLabel: true
  },
  legend: {
    show: props.showLegend
  },
  tooltip: {
    show: props.showTooltip,
    padding: 0,
    borderWidth: 0,
    formatter: (params) => {
      if (props.tooltipFormatter) {
        return props.tooltipFormatter(params)
      }

      let value = params.value

      if (props.tooltipValueFormatter) {
        value = props.tooltipValueFormatter(value)
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

      `
    }
  },
  series: [
    {
      data: props.chartData,
      type: 'bar',
      smooth: true,
      showSymbol: false,
      label: {
        show: true,
        position: 'insideLeft',
        color: '#03102F',
        opacity: 1,
        align: 'left',
        padding: [0, 0],
        fontWeight: 300,
        fontSize: 12
      },
      barGap: 0,
      itemStyle: {
        color: variants[props.variant],
        opacity: 0.2,
        borderRadius: [0, 4, 4, 0]
      },
      emphasis: {
        itemStyle: {
          color: variants[props.variant]
        }
      }
    },
    {
      data: props.chartData.map((i) => Math.max(...props.chartData) * 0.002),
      type: 'bar',
      smooth: true,
      showSymbol: false,
      label: {
        show: false
      },
      barGap: '-100%',
      itemStyle: {
        color: variants[props.variant]
      }
    }
  ]
}))
const barRaceChart = ref()

useChart(barRaceChart, options)
</script>
