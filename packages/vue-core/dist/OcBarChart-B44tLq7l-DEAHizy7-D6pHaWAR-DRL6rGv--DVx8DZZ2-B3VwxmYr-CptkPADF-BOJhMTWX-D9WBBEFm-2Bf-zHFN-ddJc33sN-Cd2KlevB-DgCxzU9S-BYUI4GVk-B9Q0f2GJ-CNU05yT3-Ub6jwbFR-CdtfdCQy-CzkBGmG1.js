import { computed as s, ref as p, openBlock as n, createElementBlock as m } from "vue";
import { m as c } from "./useChart-D7VZPAAA-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq.js";
import "echarts";
const h = {
  __name: "OcBarChart",
  props: {
    variant: {
      type: String,
      validator: (r) => ["primary", "purple"].includes(r)
    },
    showTooltip: Boolean,
    showLegend: Boolean,
    showGrid: Boolean,
    chartData: Array,
    labelData: Array,
    yAxisFormatter: Function,
    xAxisFormatter: Function,
    tooltipFormatter: Function,
    tooltipValueFormatter: Function
  },
  setup(r) {
    const t = r, a = {
      primary: "#2465DE",
      purple: "#B14AED"
    }, l = s(() => ({
      xAxis: {
        type: "category",
        data: t.labelData,
        axisTick: {
          show: !1
        },
        axisLabel: {
          color: "#9295A5",
          formatter: t.xAxisFormatter
        },
        axisLine: {
          lineStyle: {
            color: "#F2F2F4"
          }
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: !1
        },
        axisLabel: {
          color: "#9295A5",
          formatter: t.yAxisFormatter
        }
      },
      grid: {
        show: t.showGrid,
        right: "10px",
        left: 0,
        top: "10px",
        bottom: 0,
        containLabel: !0
      },
      legend: {
        show: t.showLegend
      },
      tooltip: {
        show: t.showTooltip,
        padding: 0,
        borderWidth: 0,
        borderRadius: 8,
        formatter: (o) => {
          if (t.tooltipFormatter)
            return t.tooltipFormatter(o);
          let e = o.value;
          return t.tooltipValueFormatter && (e = t.tooltipValueFormatter(e)), `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${o.name}
                </span>
            </div>
            <div class="text-oc-text font-medium text-[12px]">${e}</div>
        </div>

      `;
        }
      },
      series: [
        {
          data: t.chartData,
          type: "bar",
          smooth: !0,
          showSymbol: !1,
          itemStyle: {
            color: a[t.variant],
            opacity: 0.5,
            borderRadius: [4, 4, 0, 0]
            // Sets a 4pt radius for the top-left and top-right corners
          },
          emphasis: {
            itemStyle: {
              color: a[t.variant],
              opacity: 1,
              borderRadius: [4, 4, 0, 0]
              // Reapply the 4pt radius for emphasis states
            }
          }
        }
      ]
    })), i = p();
    return c(i, l), (o, e) => (n(), m("div", {
      ref_key: "barChart",
      ref: i,
      class: "w-full"
    }, null, 512));
  }
};
export {
  h as default
};
