<script setup>
import { PieChart } from '@/orchidui-dashboard'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    default: '0'
  },
  chartData: {
    type: Array,
    default: () => []
  }
})
const chartOptions = computed(() => ({
  grid: {
    containLabel: false
  },
  series:
    [
      {
        name: 'Onboarding Progressbar',
        type: 'pie',
        emphasis: {
          disabled: true
        },
        avoidLabelOverlap: false,
        label: {
          color: '#000',
          fontWeight: 'bold',
          fontFamily: 'Inter',
          fontSize: '24',
          position: 'center',
          formatter: () => props.value + '%'
        },
        labelLine: {
          show: true
        },
        radius: ['60%', '100%'],
        data: props.chartData
      }
    ] || []
}))
</script>

<template>
  <div class="flex flex-col pt-10 px-7 gap-y-7 items-center">
    <PieChart
      class="w-[140px] bg-white rounded-full h-[140px]"
      :additional-options="chartOptions"
      :tooltip-formatter="() => null"
      :tooltip-value-formatter="() => null"
    />

    <div class="flex flex-col gap-y-4 text-center items-center">
      <span v-if="title" class="text-xl font-medium">{{ title }}</span>
      <slot name="description">
        <span v-if="description" class="text-sm text-oc-text-400">
          {{ description }}
        </span>
      </slot>
    </div>
  </div>
</template>
