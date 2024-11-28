import { openBlock as i, createElementBlock as s, toDisplayString as r, createCommentVNode as l, createElementVNode as t, normalizeClass as c, Fragment as h, renderList as k, createBlock as f, unref as o, createSlots as u, withCtx as m, renderSlot as p, createVNode as d, createTextVNode as S } from "vue";
import "dayjs";
import { T as x } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as $ } from "./OcOverviewIcon-jCLuTU_N.js";
import { _ as g } from "./OcIcon-CJgBICxh.js";
import { S as w } from "./OcSkeleton-BdPTmGh0.js";
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
/* empty css                                                                    */
const B = { class: "flex gap-y-3 flex-col text-lg font-medium" }, b = { key: 0 }, ie = {
  __name: "OcOverview",
  props: {
    title: String,
    containerClass: String,
    items: Array,
    isLoading: Boolean
  },
  setup(e) {
    return (a, y) => (i(), s("div", B, [
      e.title ? (i(), s("span", b, r(e.title), 1)) : l("", !0),
      t("div", {
        class: c(["flex gap-x-5 items-start md:flex-row flex-col gap-y-3 md:gap-y-0", e.containerClass])
      }, [
        (i(!0), s(h, null, k(e.items, (n, v) => (i(), f(o(D), {
          key: v,
          title: n.title,
          class: c(["flex-1", n.class]),
          variant: n.variant,
          tooltip: n.tooltip,
          icon: n.icon,
          "is-loading": e.isLoading,
          content: n.content,
          info: n.info,
          "icon-height": n.iconHeight,
          "icon-width": n.iconWidth
        }, u({ _: 2 }, [
          n.isWarning ? {
            name: "warning",
            fn: m(() => [
              p(a.$slots, "warning")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["title", "class", "variant", "tooltip", "icon", "is-loading", "content", "info", "icon-height", "icon-width"]))), 128))
      ], 2)
    ]));
  }
}, V = {
  key: 0,
  class: "flex flex-col gap-y-3 min-w-[132px]"
}, T = { class: "flex flex-col gap-y-px font-medium overflow-hidden" }, C = { class: "flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300" }, N = { class: "uppercase" }, L = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium" }, O = { class: "flex items-center gap-x-2 overflow-hidden" }, W = {
  key: 0,
  class: "flex items-center gap-x-3 overflow-hidden"
}, H = { class: "truncate" }, E = { class: "flex items-center gap-x-1" }, z = { class: "text-oc-text-400 text-sm font-medium cursor-default" }, A = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium text-sm" }, D = {
  __name: "OcOverviewItem",
  props: {
    icon: String,
    variant: String,
    title: String,
    tooltip: String,
    percentTooltip: String,
    content: String,
    info: Boolean,
    isBig: Boolean,
    isTransparent: Boolean,
    isCard: Boolean,
    isLoading: Boolean,
    percentValue: Number,
    iconWidth: {
      type: String,
      default: "22"
    },
    iconHeight: {
      type: String,
      default: "22"
    }
  },
  setup(e) {
    return (a, y) => (i(), s("div", {
      class: c([e.isTransparent ? "p-3" : "border p-4 bg-oc-bg-light border-oc-gray-200 ", "flex flex-col gap-y-4 md:overflow-hidden w-full md:w-auto rounded"])
    }, [
      e.isLoading ? (i(), s("div", V, [
        d(o(w), { class: "w-[80%] h-[14px] rounded-sm" }),
        d(o(w), { class: "w-full h-[20px] rounded-sm" })
      ])) : (i(), s(h, { key: 1 }, [
        t("div", {
          class: c(["flex items-center", e.isBig ? "gap-x-[.75rem]" : "gap-x-3"])
        }, [
          e.icon ? (i(), f(o($), {
            key: 0,
            icon: e.icon,
            variant: e.variant,
            height: e.iconHeight,
            width: e.iconWidth
          }, null, 8, ["icon", "variant", "height", "width"])) : l("", !0),
          t("div", T, [
            t("div", C, [
              p(a.$slots, "title", {}, () => [
                t("span", N, r(e.title), 1)
              ]),
              d(o(x), {
                position: "top",
                "popper-options": { strategy: "fixed" },
                "popper-class": "rounded-sm"
              }, u({
                default: m(() => [
                  e.info ? (i(), f(o(g), {
                    key: 0,
                    width: "16",
                    height: "16",
                    class: "text-oc-text-400",
                    name: "information"
                  })) : l("", !0)
                ]),
                _: 2
              }, [
                e.tooltip ? {
                  name: "popper",
                  fn: m(() => [
                    t("div", L, r(e.tooltip), 1)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ]),
            t("div", O, [
              e.isCard ? (i(), f(o(g), {
                key: 0,
                width: "35",
                name: "payment-methods/visa"
              })) : l("", !0),
              t("span", {
                class: c([e.isBig ? "text-xl" : "", "truncate"])
              }, [
                p(a.$slots, "content", {}, () => [
                  isNaN(e.percentValue) ? (i(), s(h, { key: 1 }, [
                    S(r(e.content), 1)
                  ], 64)) : (i(), s("div", W, [
                    t("div", H, r(e.content), 1),
                    d(o(x), {
                      position: "top",
                      "popper-class": "rounded-sm",
                      "popper-options": { strategy: "fixed" }
                    }, u({
                      default: m(() => [
                        t("div", E, [
                          d(o(g), {
                            name: e.percentValue >= 0 ? "triangle-up" : "triangle-down",
                            class: c(e.percentValue >= 0 ? "text-oc-success-500" : "text-oc-error-500"),
                            width: "10",
                            height: "9"
                          }, null, 8, ["name", "class"]),
                          t("span", z, r(e.percentValue === 0 ? "-" : `${Math.abs(e.percentValue)}%`), 1)
                        ])
                      ]),
                      _: 2
                    }, [
                      e.percentTooltip ? {
                        name: "popper",
                        fn: m(() => [
                          t("div", A, r(e.percentTooltip), 1)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1024)
                  ]))
                ])
              ], 2)
            ]),
            a.$slots.transfer ? p(a.$slots, "transfer", { key: 0 }) : l("", !0)
          ])
        ], 2),
        a.$slots.warning ? p(a.$slots, "warning", { key: 0 }) : l("", !0)
      ], 64))
    ], 2));
  }
};
export {
  ie as _,
  D as a
};
