import { computed as b, ref as F, openBlock as t, createElementBlock as a, createElementVNode as n, Fragment as l, renderList as f, createBlock as h, unref as x, withCtx as y, normalizeClass as C, normalizeStyle as T, toDisplayString as s, createTextVNode as g, createCommentVNode as B } from "vue";
import "dayjs";
import { h as $, $ as L } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { m as V } from "./useChart-D7VZPAAA-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq-CRMQQGuK-AMoaYUuq.js";
import "echarts";
const A = { class: "flex flex-col items-center" }, N = {
  key: 0,
  class: "flex gap-x-5"
}, O = ["onClick"], S = {
  key: 1,
  class: "text-sm font-medium text-oc-text-500"
}, _ = { class: "py-2 text-sm text-oc-text-400 font-medium px-3 w-max" }, I = {
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
  setup(m, { expose: w }) {
    const i = m, p = b(() => ({
      legend: {
        show: !1
      },
      tooltip: {
        show: i.showTooltip,
        padding: 0,
        formatter: (o) => {
          if (i.tooltipFormatter)
            return i.tooltipFormatter(o);
          let r = o.value;
          return i.tooltipValueFormatter && (r = i.tooltipValueFormatter(r)), `
        <div class="py-3 px-4 leading-normal">
            <div class="flex w-full justify-between items-center">
                <span class="uppercase text-[10px] font-medium">
                    ${o.name}
                </span>
            </div>
            <div class="text-oc-text-500 font-medium text-base flex items-center gap-x-3">
                ${r}
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
          data: i.chartData,
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
        show: i.showGrid,
        right: 0,
        left: 0,
        top: "10px",
        bottom: 0,
        containLabel: !0
      },
      ...i.additionalOptions
    })), d = F(), { chart: k } = V(d, p), c = (o) => {
      k.value.dispatchAction({
        type: "legendToggleSelect",
        name: o.name
      }), o.hide = !o.hide;
    };
    return w({
      toggleLegendName: c
    }), (o, r) => (t(), a("div", A, [
      n("div", {
        ref_key: "pieChart",
        ref: d,
        class: "h-full w-full"
      }, null, 512),
      m.showLegend ? (t(), a("div", N, [
        (t(!0), a(l, null, f(p.value.series[0].data, (e) => (t(), h(x($), {
          key: e.name,
          position: "top",
          class: "flex items-center",
          distance: 10
        }, {
          default: y(() => [
            n("div", {
              class: C(["flex items-center gap-x-2 cursor-pointer transition-opacity", { "opacity-30": e.hide }]),
              onClick: (u) => c(e)
            }, [
              n("div", {
                class: "w-3 h-3 rounded-full",
                style: T({ background: e.itemStyle.color })
              }, null, 4),
              e.icon ? (t(), h(x(L), {
                key: 0,
                name: e.icon,
                width: "32",
                height: "32"
              }, null, 8, ["name"])) : (t(), a("div", S, s(e.name), 1))
            ], 10, O)
          ]),
          popper: y(() => [
            n("div", _, [
              e.legendTooltip ? (t(), a(l, { key: 0 }, [
                Array.isArray(e.legendTooltip) ? (t(!0), a(l, { key: 0 }, f(e.legendTooltip, (u, v) => (t(), a("div", { key: v }, s(u), 1))), 128)) : (t(), a(l, { key: 1 }, [
                  g(s(e.legendTooltip), 1)
                ], 64))
              ], 64)) : (t(), a(l, { key: 1 }, [
                g(s(e.name), 1)
              ], 64))
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ])) : B("", !0)
    ]));
  }
};
export {
  I as default
};
