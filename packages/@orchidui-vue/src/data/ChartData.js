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
