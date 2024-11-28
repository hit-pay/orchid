import { computed as k, ref as C, openBlock as t, createElementBlock as a, createElementVNode as n, Fragment as i, renderList as h, createBlock as f, unref as x, withCtx as y, normalizeClass as T, normalizeStyle as b, toDisplayString as s, createTextVNode as g, createCommentVNode as F } from "vue";
import "dayjs";
import { T as B } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as V } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
import { useChart as L } from "./composables/useChart.js";
const O = { class: "flex flex-col items-center" }, S = {
  key: 0,
  class: "flex gap-x-5"
}, $ = ["onClick"], A = {
  key: 1,
  class: "text-sm font-medium text-oc-text-500"
}, N = { class: "py-2 text-sm text-oc-text-400 font-medium px-3 w-max" }, Y = {
  __name: "OcPieChart",
  props: {
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
  },
  setup(p, { expose: w }) {
    const r = p, c = k(() => ({
      legend: {
        show: !1
      },
      tooltip: {
        show: r.showTooltip,
        padding: 0,
        formatter: (o) => {
          if (r.tooltipFormatter)
            return r.tooltipFormatter(o);
          let l = o.value;
          return r.tooltipValueFormatter && (l = r.tooltipValueFormatter(l)), `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${o.name}
                </span>
            </div>
            <div class="text-oc-text-500 font-medium text-base flex items-center gap-x-3">
                ${l}
                (${o.percent}%)
            </div>
        </div>

      `;
        }
      },
      series: [
        {
          name: "Payment by",
          type: "pie",
          radius: "80%",
          data: r.chartData,
          label: {
            show: !1
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ],
      grid: {
        show: r.showGrid,
        right: 0,
        left: 0,
        top: "10px",
        bottom: 0,
        containLabel: !0
      },
      ...r.additionalOptions
    })), d = C(), { chart: v } = L(d, c), m = (o) => {
      v.value.dispatchAction({
        type: "legendToggleSelect",
        name: o.name
      }), o.hide = !o.hide;
    };
    return w({
      toggleLegendName: m
    }), (o, l) => (t(), a("div", O, [
      n("div", {
        ref_key: "pieChart",
        ref: d,
        class: "h-full w-full"
      }, null, 512),
      p.showLegend ? (t(), a("div", S, [
        (t(!0), a(i, null, h(c.value.series[0].data, (e) => (t(), f(x(B), {
          key: e.name,
          position: "top",
          class: "flex items-center",
          distance: 10
        }, {
          default: y(() => [
            n("div", {
              class: T(["flex items-center gap-x-2 cursor-pointer transition-opacity", { "opacity-30": e.hide }]),
              onClick: (u) => m(e)
            }, [
              n("div", {
                class: "w-3 h-3 rounded-full",
                style: b({ background: e.itemStyle.color })
              }, null, 4),
              e.icon ? (t(), f(x(V), {
                key: 0,
                name: e.icon,
                width: "32",
                height: "32"
              }, null, 8, ["name"])) : (t(), a("div", A, s(e.name), 1))
            ], 10, $)
          ]),
          popper: y(() => [
            n("div", N, [
              e.legendTooltip ? (t(), a(i, { key: 0 }, [
                Array.isArray(e.legendTooltip) ? (t(!0), a(i, { key: 0 }, h(e.legendTooltip, (u, _) => (t(), a("div", { key: _ }, s(u), 1))), 128)) : (t(), a(i, { key: 1 }, [
                  g(s(e.legendTooltip), 1)
                ], 64))
              ], 64)) : (t(), a(i, { key: 1 }, [
                g(s(e.name), 1)
              ], 64))
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ])) : F("", !0)
    ]));
  }
};
export {
  Y as default
};
