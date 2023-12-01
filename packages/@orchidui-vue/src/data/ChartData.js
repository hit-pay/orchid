import * as echarts from "echarts/core";

export const PieChartOptions = {
  legend: {
    show: false,
  },
  tooltip: {
    show: true,
    padding: 0,
    formatter: (params) => {
      return `
        <div class="py-2 px-4 flex flex-col gap-y-2">
            <div class="h-7 flex gap-x-3 w-full justify-between items-center">
                <span class="uppercase text-sm font-medium">
                    ${params.seriesName}
                </span>
                ${params.name ? '<img src="' + params.name + '" />' : "Other"}
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
      radius: "50%",
      data: [
        {
          value: 39.64,
          name: "./images/chart/stack_cards.png",
          itemStyle: { color: "#2465DE" },
        },
        {
          value: 22.21,
          name: "./images/chart/paynow.png",
          itemStyle: { color: "#B14AED" },
        },
        {
          value: 17.44,
          name: "./images/chart/atome.png",
          itemStyle: { color: "#F4B840" },
        },
        {
          value: 15.78,
          name: "./images/chart/fave.png",
          itemStyle: { color: "#FF6B6C" },
        },
        {
          value: 4.93,
          name: "",
          itemStyle: { color: "#E5E6EA" },
        },
      ],
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
};
export const LineChartOptions = {
  xAxis: {
    type: "category",
    data: [
      "NOV'22",
      "DEC'22",
      "JAN'23",
      "FEB'23",
      "MAR'23",
      "MAY'23",
      "JUN'23",
      "JUL'23",
      "AUG'23",
      "SEP'23",
      "OCT'23",
      "NOV'23",
    ],
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#9295A5",
    },
    axisLine: {
      lineStyle: {
        color: "#2465DE",
      },
    },
    axisPointer: {
      show: true,
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false,
    },
    axisLabel: {
      formatter: (value) => {
        return (value / 1000).toFixed(1) + "K";
      },
    },
  },
  grid: {
    show: false,
  },
  tooltip: {
    show: true,
    trigger: "axis",
    axisPointer: "y",
  },
  series: [
    {
      data: [
        500, 730, 824, 1218, 2135, 1147, 760, 1150, 2130, 2324, 1218, 2135,
        1147,
      ],
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(36, 101, 222, 0.05)", // Start color
          },
          {
            offset: 1,
            color: "rgba(36, 101, 222, 0)", // End color
          },
        ]),
      },
      lineStyle: {
        color: "#2465DE",
      },
    },
  ],
};
