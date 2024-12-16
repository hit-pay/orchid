import { ref, onBeforeUnmount, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import { markRaw } from 'vue'

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
