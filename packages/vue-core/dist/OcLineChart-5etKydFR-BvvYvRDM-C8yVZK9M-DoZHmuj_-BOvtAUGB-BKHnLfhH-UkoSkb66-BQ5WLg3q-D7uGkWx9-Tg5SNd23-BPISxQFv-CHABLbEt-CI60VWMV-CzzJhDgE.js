import { ref as u, computed as v, onMounted as b, openBlock as f, createElementBlock as h } from "vue";
import * as w from "echarts";
import { p as g } from "./useChart-D7VZPAAA-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK.js";
const L = {
  __name: "OcLineChart",
  props: {
    showTooltip: Boolean,
    showLegend: Boolean,
    showGrid: Boolean,
    chartData: Array,
    labelData: Array,
    tooltipFormatter: Function,
    tooltipValueFormatter: Function
  },
  setup(p) {
    const e = p, t = u({
      index: 0,
      value: 0
    }), i = v(() => ({
      xAxis: {
        type: "category",
        data: e.labelData,
        axisTick: {
          show: !1
        },
        axisLabel: {
          color: "#9295A5"
        },
        axisLine: {
          lineStyle: {
            color: "#F2F2F4"
          }
        },
        axisPointer: {
          show: !0,
          label: {
            show: !1,
            formatter: (o) => {
              const l = i.value.xAxis.data.indexOf(o.value);
              t.value.index = o.value;
              const r = i.value.series[0].data[l];
              t.value.value = (r == null ? void 0 : r.value) || r;
            }
          },
          lineStyle: {
            color: "rgba(0,0,0,0)",
            type: "dashed"
          }
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: !1
        },
        axisLabel: {
          formatter: (o) => Intl.NumberFormat("en", { notation: "compact" }).format(o)
        }
      },
      grid: {
        show: e.showGrid,
        right: 0,
        left: 0,
        top: "10px",
        bottom: 0,
        containLabel: !0
      },
      legend: {
        show: e.showLegend
      },
      tooltip: {
        show: e.showTooltip,
        trigger: "axis",
        padding: 0,
        borderWidth: 0,
        borderRadius: 8,
        formatter: (o) => {
          var l, r, d, c;
          const a = o[0];
          if (e.tooltipFormatter)
            return e.tooltipFormatter(a);
          let n = a.value;
          e.tooltipValueFormatter && (n = e.tooltipValueFormatter(n));
          let x = `<div class="text-oc-text-400 text-sm font-medium flex items-center gap-x-1">
                 <div
                  class="w-0 h-0 rounded-xs border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent ${((l = a.data) == null ? void 0 : l.percent) < 0 ? "border-t-[6px] border-t-oc-error" : "border-b-[6px] border-b-oc-success"}"
                  ></div>
                  <div>${((r = a.data) == null ? void 0 : r.percent) === 0 ? "-" : `${Math.abs((d = a.data) == null ? void 0 : d.percent)}%`}</div>
                </div>`;
          return `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${a.name}
                </span>
            </div>
            <div class="text-oc-text font-medium text-base flex items-center gap-x-3">
                ${n}
                ${isNaN((c = a.data) == null ? void 0 : c.percent) ? "" : x}
            </div>
        </div>

      `;
        }
      },
      series: [
        {
          data: e.chartData,
          type: "line",
          smooth: !0,
          showSymbol: !1,
          symbol: "circle",
          areaStyle: {
            color: new w.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(36, 101, 222, 0.15)"
                // Start color
              },
              {
                offset: 1,
                color: "rgba(36, 101, 222, 0)"
                // End color
              }
            ])
          },
          lineStyle: {
            color: "#2465DE"
          },
          markLine: {
            symbol: "none",
            animation: !1,
            data: [
              [
                {
                  coord: [t.value.index, 0]
                },
                {
                  coord: [t.value.index, t.value.value]
                }
              ]
            ],
            silent: !0
          }
        }
      ]
    })), s = u(), { chart: m } = g(s, i);
    return b(() => {
      m.value.getZr().on("globalout", () => {
        t.value.index = 0, t.value.value = 0;
      });
    }), (o, l) => (f(), h("div", {
      ref_key: "lineChart",
      ref: s,
      class: "w-full"
    }, null, 512));
  }
};
export {
  L as default
};
