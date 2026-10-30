import { ref, onBeforeUnmount, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import { LegacyGridContainLabel } from 'echarts/features'
import { markRaw } from 'vue'

// ECharts 6 deprecated grid.containLabel; our charts rely on its exact layout
// (outerBounds lays out differently), so keep the legacy feature registered.
echarts.use(LegacyGridContainLabel)

export const useChart = (chartRef, options) => {
  const chart = ref()

  const renderChart = () => {
    if (chartRef.value) {
      chart.value = markRaw(echarts.init(chartRef.value))
      chart.value.setOption(options.value)
    }
  }

  const resizeChart = () => {
    if (chart.value) {
      chart.value.dispose()
    }
    renderChart()
  }

  onMounted(() => {
    renderChart()
    window.addEventListener('resize', resizeChart)
  })
  onBeforeUnmount(() => {
    if (chart.value) {
      chart.value.dispose()
    }

    window.removeEventListener('resize', resizeChart)
  })

  watch(
    () => options.value,
    (val) => {
      chart.value.setOption(val)
    },
    { deep: true }
  )

  return {
    chart
  }
}
