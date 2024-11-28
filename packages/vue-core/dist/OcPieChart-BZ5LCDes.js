import { computed as _, ref as C, openBlock as t, createElementBlock as a, createElementVNode as i, Fragment as r, renderList as h, createBlock as f, unref as x, withCtx as y, normalizeClass as b, normalizeStyle as F, toDisplayString as s, createTextVNode as g, createCommentVNode as T } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as B } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as V } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
import { useChart as L } from "./composables/useChart.js";
const O = { class: "flex flex-col items-center" }, S = {
  key: 0,
  class: "flex gap-x-5"
}, A = ["onClick"], N = {
  key: 1,
  class: "text-sm font-medium text-oc-text-500"
}, $ = { class: "py-2 text-sm text-oc-text-400 font-medium px-3 w-max" }, J = {
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
  setup(c, { expose: w }) {
    const l = c, d = _(() => ({
      legend: {
        show: !1
      },
      tooltip: {
        show: l.showTooltip,
        padding: 0,
        formatter: (o) => {
          if (l.tooltipFormatter)
            return l.tooltipFormatter(o);
          let n = o.value;
          return l.tooltipValueFormatter && (n = l.tooltipValueFormatter(n)), `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${o.name}
                </span>
            </div>
            <div class="text-oc-text-500 font-medium text-base flex items-center gap-x-3">
                ${n}
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
          data: l.chartData,
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
        show: l.showGrid,
        right: 0,
        left: 0,
        top: "10px",
        bottom: 0,
        containLabel: !0
      },
      ...l.additionalOptions
    })), p = C(), { chart: v } = L(p, d), m = (o) => {
      v.value.dispatchAction({
        type: "legendToggleSelect",
        name: o.name
      }), o.hide = !o.hide;
    };
    return w({
      toggleLegendName: m
    }), (o, n) => (t(), a("div", O, [
      i("div", {
        ref_key: "pieChart",
        ref: p,
        class: "h-full w-full"
      }, null, 512),
      c.showLegend ? (t(), a("div", S, [
        (t(!0), a(r, null, h(d.value.series[0].data, (e) => (t(), f(x(V), {
          key: e.name,
          position: "top",
          class: "flex items-center",
          distance: 10
        }, {
          default: y(() => [
            i("div", {
              class: b(["flex items-center gap-x-2 cursor-pointer transition-opacity", { "opacity-30": e.hide }]),
              onClick: (u) => m(e)
            }, [
              i("div", {
                class: "w-3 h-3 rounded-full",
                style: F({ background: e.itemStyle.color })
              }, null, 4),
              e.icon ? (t(), f(x(B), {
                key: 0,
                name: e.icon,
                width: "32",
                height: "32"
              }, null, 8, ["name"])) : (t(), a("div", N, s(e.name), 1))
            ], 10, A)
          ]),
          popper: y(() => [
            i("div", $, [
              e.legendTooltip ? (t(), a(r, { key: 0 }, [
                Array.isArray(e.legendTooltip) ? (t(!0), a(r, { key: 0 }, h(e.legendTooltip, (u, k) => (t(), a("div", { key: k }, s(u), 1))), 128)) : (t(), a(r, { key: 1 }, [
                  g(s(e.legendTooltip), 1)
                ], 64))
              ], 64)) : (t(), a(r, { key: 1 }, [
                g(s(e.name), 1)
              ], 64))
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ])) : T("", !0)
    ]));
  }
};
export {
  J as default
};
