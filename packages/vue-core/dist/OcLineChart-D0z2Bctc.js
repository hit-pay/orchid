import { ref as p, computed as f, onMounted as v, openBlock as b, createElementBlock as h } from "vue";
import * as w from "echarts";
import { useChart as g } from "./composables/useChart.js";
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
  setup(u) {
    const t = u, o = p({
      index: 0,
      value: 0
    }), l = f(() => ({
      xAxis: {
        type: "category",
        data: t.labelData,
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
            formatter: (r) => {
              const e = l.value.xAxis.data.indexOf(r.value);
              o.value.index = r.value;
              const a = l.value.series[0].data[e];
              o.value.value = (a == null ? void 0 : a.value) || a;
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
          formatter: (r) => Intl.NumberFormat("en", { notation: "compact" }).format(r)
        }
      },
      grid: {
        show: t.showGrid,
        right: 0,
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
        trigger: "axis",
        padding: 0,
        borderWidth: 0,
        borderRadius: 8,
        formatter: (r) => {
          var n, i, c, d;
          const e = r[0];
          if (t.tooltipFormatter)
            return t.tooltipFormatter(e);
          let a = e.value;
          t.tooltipValueFormatter && (a = t.tooltipValueFormatter(a));
          let x = `<div class="text-oc-text-400 text-sm font-medium flex items-center gap-x-1">
                 <div
                  class="w-0 h-0 rounded-xs border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent ${((n = e.data) == null ? void 0 : n.percent) < 0 ? "border-t-[6px] border-t-oc-error" : "border-b-[6px] border-b-oc-success"}"
                  ></div>
                  <div>${((i = e.data) == null ? void 0 : i.percent) === 0 ? "-" : `${Math.abs((c = e.data) == null ? void 0 : c.percent)}%`}</div>
                </div>`;
          return `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${e.name}
                </span>
            </div>
            <div class="text-oc-text font-medium text-base flex items-center gap-x-3">
                ${a}
                ${isNaN((d = e.data) == null ? void 0 : d.percent) ? "" : x}
            </div>
        </div>

      `;
        }
      },
      series: [
        {
          data: t.chartData,
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
                  coord: [o.value.index, 0]
                },
                {
                  coord: [o.value.index, o.value.value]
                }
              ]
            ],
            silent: !0
          }
        }
      ]
    })), s = p(), { chart: m } = g(s, l);
    return v(() => {
      m.value.getZr().on("globalout", () => {
        o.value.index = 0, o.value.value = 0;
      });
    }), (r, e) => (b(), h("div", {
      ref_key: "lineChart",
      ref: s,
      class: "w-full"
    }, null, 512));
  }
};
export {
  L as default
};
