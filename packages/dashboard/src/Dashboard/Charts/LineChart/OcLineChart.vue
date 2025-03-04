<template>
  <div ref="lineChart" class="w-full" />
</template>

<script setup>
import * as echarts from 'echarts'
import { computed, onMounted, ref } from 'vue'
import { useChart } from '@/orchidui-dashboard/Dashboard/composables/useChart.js'
const props = defineProps({
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
  labelData: Array,
  tooltipFormatter: Function,
  tooltipValueFormatter: Function
})
const markLineData = ref({
  index: 0,
  value: 0
})
const options = computed(() => ({
  xAxis: {
    type: 'category',
    data: props.labelData,
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#9295A5'
    },
    axisLine: {
      lineStyle: {
        color: '#F2F2F4'
      }
    },
    axisPointer: {
      show: true,
      label: {
        show: false,
        formatter: (params) => {
          const labelIndex = options.value.xAxis.data.indexOf(params.value)
          markLineData.value.index = params.value

          const dataValue = options.value.series[0].data[labelIndex]

          markLineData.value.value = dataValue?.value || dataValue
        }
      },
      lineStyle: {
        color: 'rgba(0,0,0,0)',
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      formatter: (value) => {
        let formatter = Intl.NumberFormat('en', { notation: 'compact' })
        return formatter.format(value)
      }
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
    trigger: 'axis',
    padding: 0,
    borderWidth: 0,
    borderRadius: 8,
    formatter: (series) => {
      const params = series[0]

      if (props.tooltipFormatter) {
        return props.tooltipFormatter(params)
      }

      let value = params.value

      if (props.tooltipValueFormatter) {
        value = props.tooltipValueFormatter(value)
      }

      let percentTemplate = `<div class="text-oc-text-400 text-sm font-medium flex items-center gap-x-1">
                 <div
                  class="w-0 h-0 rounded-xs border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent ${params.data?.percent < 0 ? 'border-t-[6px] border-t-oc-error' : 'border-b-[6px] border-b-oc-success'}"
                  ></div>
                  <div>${
                    params.data?.percent === 0 ? '-' : `${Math.abs(params.data?.percent)}%`
                  }</div>
                </div>`

      return `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${params.name}
                </span>
            </div>
            <div class="text-oc-text font-medium text-base flex items-center gap-x-3">
                ${value}
                ${!isNaN(params.data?.percent) ? percentTemplate : ''}
            </div>
        </div>

      `
    }
  },
  series: [
    {
      data: props.chartData,
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbol: 'circle',
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(36, 101, 222, 0.15)' // Start color
          },
          {
            offset: 1,
            color: 'rgba(36, 101, 222, 0)' // End color
          }
        ])
      },
      lineStyle: {
        color: '#2465DE'
      },
      markLine: {
        symbol: 'none',
        animation: false,
        data: [
          [
            {
              coord: [markLineData.value.index, 0]
            },
            {
              coord: [markLineData.value.index, markLineData.value.value]
            }
          ]
        ],
        silent: true
      }
    }
  ]
}))
const lineChart = ref()

const { chart } = useChart(lineChart, options)

onMounted(() => {
  chart.value.getZr().on('globalout', () => {
    markLineData.value.index = 0
    markLineData.value.value = 0
  })
})
</script>
