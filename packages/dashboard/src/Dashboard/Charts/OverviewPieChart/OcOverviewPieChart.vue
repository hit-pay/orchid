<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative w-[210px] h-[210px]">
    <div ref="pieChart" class="w-[210px] h-[210px]" />

    <!-- Custom center label overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <div class="text-center">
        <div class="text-oc-text-400">{{ centerLabel }}</div>
        <div class="text-lg font-semibold font-reddit-mono">{{ currency }} {{ formatCurrency(centerValue) }}</div>
      </div>
    </div>
  </div>

  <!-- Custom legend below the chart -->
  <div v-if="chartData && chartData.length > 0" class="mt-4 flex flex-wrap gap-3 justify-center">
    <div
      v-for="(item, index) in chartData"
      :key="index"
      class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div
        class="w-3 h-3 rounded-full"
        :style="{ backgroundColor: getLegendColor(index) }"
      ></div>
      <span class="text-sm">{{ item.name }}</span>
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import { useChart } from '@/orchidui-dashboard/Dashboard/composables/useChart.js'

const props = defineProps({
  chartData: Array,
  currency: String,
})

// Reactive state for center label
const centerLabel = ref('')
const centerValue = ref(0)

// Utility functions
const formatCurrency = (value) => {
  const numValue = typeof value === 'number' ? value : Number(value)
  return numValue.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

// Calculate percentage of a value against total
const formatPercentage = (value) => {
  const numValue = typeof value === 'number' ? value : Number(value)
  if (!totalValue.value) return 0
  return Math.round((numValue / totalValue.value) * 100)
}

// Calculate total value
const totalValue = computed(() => {
  if (!props.chartData || props.chartData.length === 0) return 0
  return props.chartData.reduce((sum, item) => sum + (item.value || 0), 0)
})

// Initialize center label with total
const initializeCenterLabel = () => {
  centerLabel.value = 'Total'
  centerValue.value = totalValue.value
}

// Chart options
const chartOptions = computed(() => ({
  series: [{
    id: 'overviewPieChart',
    data: props.chartData || [],
    type: 'pie',
    radius: ['80%', '100%'],
    avoidLabelOverlap: false,

    itemStyle: {
      borderRadius: 6,
      borderColor: '#fff',
      borderWidth: 2
    },
    animation: false,
    label: {
      show: false, // Hide default labels
    },
    labelLine: {
      show: false
    },
    // Emphasize hovered/active slice and blur others to gray
    emphasis: {
      scale: false,
      focus: 'self',
      label: { show: false }
    },
    blur: {
      itemStyle: {
        color: '#F2F2F4',
        opacity: 1,
      },
      label: { show: false }
    }
  }]
}))

// Chart instance
const pieChart = ref()
const { chart } = useChart(pieChart, chartOptions)

// Legend functions
const getLegendColor = (index) => props.chartData[index].itemStyle.color



// Initialize center label when chart is ready
watch(chart, async (newChart) => {
  if (newChart) {
    // Wait for next tick to ensure DOM is ready
    await nextTick()
    initializeCenterLabel()

    // Add mouse events for hover
    newChart.on('mouseover', 'series', (params) => {
      if (params.componentType === 'series' && params.seriesType === 'pie') {
        const hoveredName = params.name || 'Unknown'
        const hoveredValue = params.value || 0
        centerLabel.value = `${hoveredName} (${formatPercentage(hoveredValue)}%)`
        centerValue.value = params.value || 0
      }
    })

    newChart.on('mouseout', 'series', () => {
      // Reset to total when not hovering
      centerLabel.value = 'Total'
      centerValue.value = totalValue.value
    })
  }
})

// Watch for data changes to update total
watch(() => props.chartData, () => {
  if (chart.value) {
    initializeCenterLabel()
  }
}, { deep: true })
</script>
