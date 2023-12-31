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
        @click="toggleLegendName(item.name)"
      >
        <template #default>
          <div
            class="flex items-center gap-x-2 cursor-pointer"
            :class="!legendSelected[item.name] && 'grayscale'"
          >
            <div
              class="w-3 h-3 rounded-full"
              :style="{ background: item.itemStyle.color }"
            />
            <img
              v-if="item.name"
              :src="legendImages[item.name]"
              class="max-h-7"
            />
            <span v-else>Other</span>
          </div>
        </template>
        <template #popper>
          <div
            class="py-2 text-sm text-oc-text-400 font-medium px-3 max-w-[217px]"
          >
            {{ legendTooltipText[item.name] }}
          </div>
        </template>
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from "@/orchidui";
import { computed, onMounted, ref } from "vue";
import { useChart } from "@/orchidui/composables/useChart.js";

const props = defineProps({
  showTooltip: Boolean,
  showLegend: Boolean,
  showGrid: Boolean,
  chartData: Array,
});
const legendSelected = ref({
  stack_cards: true,
  paynow: true,
  atome: true,
  fave: true,
});
const legendImages = {
  stack_cards: "/images/chart/stack_cards.png",
  paynow: "/images/chart/paynow.png",
  atome: "/images/chart/atome.png",
  fave: "/images/chart/fave.png",
};
const legendTooltipText = {
  stack_cards:
    "Visa, Mastercard and American Express (Including Apple Pay and Google Pay)",
  paynow: "Paynow",
  atome: "Atome",
  fave: "Fave",
};
const options = computed(() => ({
  legend: {
    show: false,
  },
  tooltip: {
    show: props.showTooltip,
    padding: 0,
    formatter: (params) => {
      return `
        <div class="py-2 px-4 flex flex-col gap-y-2">
            <div class="h-7 flex gap-x-3 w-full justify-between items-center">
                <span class="uppercase text-sm font-medium">
                    ${params.seriesName}
                </span>
                ${
                  params.name
                    ? '<img src="' +
                      legendImages[params.name] +
                      '" class="max-h-7" />'
                    : "Other"
                }
            </div>
            <div class="text-oc-text font-medium text-base">SGD${
              params.value
            } (${params.percent})</div>
        </div>

      `;
    },
  },
  series: [
    {
      name: "Payment by",
      type: "pie",
      radius: "80%",
      data: props.chartData,
      label: {
        show: false,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
  grid: {
    show: props.showGrid,
    right: 0,
    left: 0,
    top: "10px",
    bottom: 0,
    containLabel: true,
  },
}));
const pieChart = ref();

const { chart } = useChart(pieChart, options);

const toggleLegendName = (name) => {
  chart.value.dispatchAction({
    type: "legendToggleSelect",
    name,
  });
};

defineExpose({
  toggleLegendName,
});

onMounted(() => {
  chart.value.on(
    "legendselectchanged",
    (params) => (legendSelected.value = params.selected),
  );
});
</script>
