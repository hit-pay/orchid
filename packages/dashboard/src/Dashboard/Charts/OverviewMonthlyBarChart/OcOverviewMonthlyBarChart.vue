<template>
  <div ref="barChart" class="w-full" />
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useChart } from '@/orchidui-dashboard/Dashboard/composables/useChart.js'
import dayjs from 'dayjs'

const props = defineProps({
  variant: {
    type: String,
    validator: (value) => ['primary', 'purple'].includes(value)
  },
  currency: String,
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
  labelData: Array,
  yAxisFormatter: Function,
  xAxisFormatter: Function,
  tooltipFormatter: Function,
  tooltipValueFormatter: Function
})

// Computed properties for better readability
const isMonth = computed(() => props.labelData.length === 30)
const maxValue = computed(() => Math.max(...props.chartData))
const maxIndex = computed(() => props.chartData.indexOf(maxValue.value))

// Utility functions
const formatCurrency = (value, currencyCode = 'SGD') => {
  const numValue = typeof value === 'number' ? value : Number(value)
  return numValue.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const formatDate = (date, isMonthly = false) => {
  return isMonthly
    ? dayjs(date).format('DD MMM').toUpperCase()
    : dayjs(date).format('ddd DD/MM').toUpperCase()
}

const getBarColor = (value) => {
  const sortedValues = [...props.chartData].sort((a, b) => b - a)
  if (value === sortedValues[0]) return '#4C8AFD'      // Max value
  if (value === sortedValues[1]) return '#80ACFE'      // Second max value
  return '#CCDEFE'                                      // Default color
}

// Chart options
const chartOptions = computed(() => ({
  xAxis: {
    data: (props.labelData || []).map(v => formatDate(v, isMonth.value)),
    splitLine: { show: false },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: '#9295A5',
      fontSize: 10,
      margin: 4,
      width: 70,
      interval: isMonth.value ? 3 : 0,
    }
  },

  tooltip: {
    trigger: 'axis',
    borderWidth: 0,
    padding: 0,
    axisPointer: {
      type: 'line',
      lineStyle: { color: '#2465DE' }
    },
    formatter: (params) => {
      const date = props.labelData[params[0].dataIndex]
      const formattedDate = dayjs(date).format('DD MMM YYYY')
      const value = params[0].value

      return `
        <div class="py-3 px-4">
          <div class="flex items-center gap-2">
            <span class="text-xs font-medium text-oc-text-300">${formattedDate}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-semibold text-oc-text font-reddit-mono">${ props.currency } ${formatCurrency(value)}</span>
          </div>
        </div>
      `
    }
  },

  legend: {},

  yAxis: {
    axisLabel: {
      align: 'center',
      fontSize: 10,
      color: '#9295A5',
      margin: 20,
      formatter: (value) => value ? `${(value / 1000).toFixed(1)}K` : value
    },
    splitLine: { show: false }
  },

  grid: {
    left: '0',
    right: '0',
    bottom: '0',
    top: '20',
    containLabel: true
  },
  animation: false,

  series: [{
    id: 'myBar',
    data: props.chartData,
    type: 'bar',
    barCategoryGap: 4,
    itemStyle: {
      borderRadius: isMonth.value ? [100, 100, 0, 0] : [4, 4, 0, 0],
      color: ({ value }) => getBarColor(value)
    },
    clip: true,
  }]
}))

// Weekend highlighting logic
const weekendIndexes = computed(() => {
  return (props.labelData || []).map((date, index) => {
      const day = dayjs(date).day()
      return day === 6 && index + 1 < props.labelData.length ? [index, index + 1] : null
    })
    .filter(Boolean)
})

const weekendMarkAreaStyle = {
  itemStyle: {
    color: {
      type: 'linear',
      x: 0, y: 0, x2: 0, y2: 1,
      colorStops: [
        { offset: 0, color: 'rgba(53, 109, 255, 0.08)' },
        { offset: 1, color: 'rgba(36, 93, 239, 0.01)' }
      ],
      global: false
    },
  }
}

// Chart instance
const barChart = ref()
const { chart } = useChart(barChart, chartOptions)

// Helper function to calculate mark area coordinates
const calculateMarkAreaCoordinates = (chartInstance, barIndexes, join = false) => {
  const series = chartInstance.getModel().getSeriesByType('bar')
  const seriesData = series?.map(s => s.getData())[0]
  const barCount = seriesData.count()
  const barCoordinates = []

  barIndexes.forEach(idx => {
    if (idx < barCount) {
      const layout = seriesData.getItemLayout(idx)
      barCoordinates.push([
        { x: layout.x - 2 },
        { x: layout.x + layout.width + 2 }
      ])
    }
  })

  if (join && barCoordinates.length > 0) {
    return [[
      { x: barCoordinates[0][0].x },
      { x: barCoordinates[barCoordinates.length - 1][1].x }
    ]]
  }

  return barCoordinates
}

// Apply weekend highlighting
const applyWeekendHighlighting = () => {
  if (!chart.value) return

  // Only apply weekend highlighting for monthly view
  if (isMonth.value) {
    const markAreaData = weekendIndexes.value?.map(indexes => 
      calculateMarkAreaCoordinates(chart.value, indexes, true).flat()
    )

    const markAreaOptions = {
      series: {
        id: 'myBar',
        markArea: {
          ...weekendMarkAreaStyle,
          data: markAreaData
        }
      }
    }

    chart.value.setOption(markAreaOptions)
  } else {
    // Remove markArea when not in monthly view
    const markAreaOptions = {
      series: {
        id: 'myBar',
        markArea: {
          data: []
        }
      }
    }

    chart.value.setOption(markAreaOptions)
  }
}

// Watch for chart changes and apply highlighting
watch([chart, isMonth], () => {
  if (chart.value) {
    applyWeekendHighlighting()
  }
})
</script>
