<template>
  <div class="flex flex-col items-center">
    <div ref="pieChart" class="h-full w-full" />

    <!--  Here we are using custom legend with toggleLegendName(name) for saving logic of buttons  -->
    <div v-if="showLegend" class="flex gap-x-5">
      <Tooltip
        v-for="item in options.series[0].data"
        :key="item.name"
        position="top"
        class="flex items-center"
        :distance="10"
      >
        <template #default>
          <div
            class="flex items-center gap-x-2 cursor-pointer transition-opacity"
            :class="{ 'opacity-30': item.hide }"
            @click="toggleLegendName(item)"
          >
            <div class="w-3 h-3 rounded-full" :style="{ background: item.itemStyle.color }" />
            <Icon v-if="item.icon" :name="item.icon" width="32" height="32" />
            <div v-else class="text-sm font-medium text-oc-text-500">
              {{ item.name }}
            </div>
          </div>
        </template>
        <template #popper>
          <div class="py-2 text-sm text-oc-text-400 font-medium px-3 w-max">
            <template v-if="item.legendTooltip">
              <template v-if="Array.isArray(item.legendTooltip)">
                <div v-for="(text, i) in item.legendTooltip" :key="i">
                  {{ text }}
                </div>
              </template>
              <template v-else>{{ item.legendTooltip }}</template>
            </template>
            <template v-else>
              {{ item.name }}
            </template>
          </div>
        </template>
      </Tooltip>
    </div>
  </div>
</template>

<script setup>
import { Tooltip, Icon } from '@/orchidui'
import { computed, ref } from 'vue'
import { useChart } from '@/orchidui/composables/useChart.js'

const props = defineProps({
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
  tooltipFormatter: Function,
  tooltipValueFormatter: Function,
  additionalOptions: {
    type: Object,
    default: () => ({})
  }
})

const options = computed(() => ({
  legend: {
    show: false
  },
  tooltip: {
    show: props.showTooltip,
    padding: 0,
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
            <div class="text-oc-text-500 font-medium text-base flex items-center gap-x-3">
                ${value}
                (${params.percent}%)
            </div>
        </div>

      `
    }
  },
  series: [
    {
      name: 'Payment by',
      type: 'pie',
      radius: '80%',
      data: props.chartData,
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ],
  grid: {
    show: props.showGrid,
    right: 0,
    left: 0,
    top: '10px',
    bottom: 0,
    containLabel: true
  },
  ...props.additionalOptions
}))
const pieChart = ref()

const { chart } = useChart(pieChart, options)

const toggleLegendName = (item) => {
  chart.value.dispatchAction({
    type: 'legendToggleSelect',
    name: item.name
  })

  item.hide = !item.hide
}

defineExpose({
  toggleLegendName
})
</script>
