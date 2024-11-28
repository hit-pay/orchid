import { computed as d, ref as h, openBlock as i, createElementBlock as s, createElementVNode as l, Fragment as m, renderList as u, toDisplayString as f } from "vue";
import { useChart as x } from "./composables/useChart.js";
const y = { class: "grid grid-cols-2" }, v = { class: "pt-4 pb-7 flex flex-col h-[100%]" }, b = { class: "text-[14px] flex flex-1 items-center justify-start pr-2" }, g = { class: "truncate" }, _ = {
  __name: "OcBarRaceChart",
  props: {
    variant: {
      type: String,
      validator: (a) => ["primary", "purple"].includes(a)
    },
    showTooltip: Boolean,
    showLegend: Boolean,
    showGrid: Boolean,
    chartData: Array,
    labelData: Array,
    legendData: Array,
    yAxisFormatter: Function,
    tooltipFormatter: Function,
    tooltipValueFormatter: Function
  },
  setup(a) {
    const t = a, r = {
      primary: "#2465DE",
      purple: "#B14AED"
    }, c = d(() => ({
      xAxis: {
        show: !1,
        type: "value"
      },
      yAxis: {
        inverse: !0,
        data: t.labelData,
        type: "category",
        axisLine: {
          show: !1
        },
        axisTick: {
          show: !1
        },
        splitLine: {
          show: !1
        },
        axisLabel: {
          color: "#03102F",
          fontWeight: 500,
          formatter: t.yAxisFormatter,
          fontSize: 14
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
        padding: 0,
        borderWidth: 0,
        formatter: (e) => {
          if (t.tooltipFormatter)
            return t.tooltipFormatter(e);
          let o = e.value;
          return t.tooltipValueFormatter && (o = t.tooltipValueFormatter(o)), `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${e.name}
                </span>
            </div>
            <div class="text-oc-text font-medium text-[12px]">${o}</div>
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
          label: {
            show: !0,
            position: "insideLeft",
            color: "#03102F",
            opacity: 1,
            align: "left",
            padding: [0, 0],
            fontWeight: 300,
            fontSize: 12
          },
          barGap: 0,
          itemStyle: {
            color: r[t.variant],
            opacity: 0.2,
            borderRadius: [0, 4, 4, 0]
          },
          emphasis: {
            itemStyle: {
              color: r[t.variant]
            }
          }
        },
        {
          data: t.chartData.map((e) => Math.max(...t.chartData) * 2e-3),
          type: "bar",
          smooth: !0,
          showSymbol: !1,
          label: {
            show: !1
          },
          barGap: "-100%",
          itemStyle: {
            color: r[t.variant]
          }
        }
      ]
    })), n = h();
    return x(n, c), (e, o) => (i(), s("div", y, [
      l("div", v, [
        (i(!0), s(m, null, u(a.legendData, (p) => (i(), s("div", b, [
          l("div", g, f(p), 1)
        ]))), 256))
      ]),
      l("div", {
        ref_key: "barRaceChart",
        ref: n,
        class: "h-full"
      }, null, 512)
    ]));
  }
};
export {
  _ as default
};
