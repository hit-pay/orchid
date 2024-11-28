import { openBlock as t, createElementBlock as s, toDisplayString as c, createCommentVNode as l, createElementVNode as n, normalizeClass as r, Fragment as f, renderList as b, createBlock as h, unref as a, createSlots as x, withCtx as g, renderSlot as u, computed as k, createVNode as d, createTextVNode as S } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { Z as B, U as $ } from "./OcOverviewItem-CKLpa3DD-cNh--ktu.js";
import { g as m } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { l as w } from "./OcSkeleton-BgoOR1qd-pnPSK-aY.js";
import { q as y } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const V = { class: "flex gap-y-3 flex-col text-lg font-medium" }, C = { key: 0 }, R = {
  __name: "OcOverview",
  props: {
    title: String,
    containerClass: String,
    items: Array,
    isLoading: Boolean
  },
  setup(e) {
    return (o, p) => (t(), s("div", V, [
      e.title ? (t(), s("span", C, c(e.title), 1)) : l("", !0),
      n("div", {
        class: r(["flex gap-x-5 items-start md:flex-row flex-col gap-y-3 md:gap-y-0", e.containerClass])
      }, [
        (t(!0), s(f, null, b(e.items, (i, v) => (t(), h(a(B), {
          key: v,
          title: i.title,
          class: r(["flex-1", i.class]),
          variant: i.variant,
          tooltip: i.tooltip,
          icon: i.icon,
          "is-loading": e.isLoading,
          content: i.content,
          info: i.info,
          "icon-height": i.iconHeight,
          "icon-width": i.iconWidth
        }, x({ _: 2 }, [
          i.isWarning ? {
            name: "warning",
            fn: g(() => [
              u(o.$slots, "warning")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["title", "class", "variant", "tooltip", "icon", "is-loading", "content", "info", "icon-height", "icon-width"]))), 128))
      ], 2)
    ]));
  }
}, X = {
  __name: "OcOverviewIcon",
  props: {
    icon: {
      type: String,
      default: "circle"
    },
    variant: {
      type: String,
      default: "blue"
    },
    width: {
      type: String,
      default: "22"
    },
    height: {
      type: String,
      default: "22"
    }
  },
  setup(e) {
    const o = k(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (p, i) => (t(), s("div", {
      class: r(["rounded-full p-3 flex items-center justify-center aspect-square", o.value[e.variant]])
    }, [
      d(a(m), {
        name: e.icon,
        width: e.width,
        height: e.height
      }, null, 8, ["name", "width", "height"])
    ], 2));
  }
}, N = {
  key: 0,
  class: "flex flex-col gap-y-3 min-w-[132px]"
}, O = { class: "flex flex-col gap-y-px font-medium overflow-hidden" }, T = { class: "flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300" }, L = { class: "uppercase" }, W = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium" }, H = { class: "flex items-center gap-x-2 overflow-hidden" }, q = {
  key: 0,
  class: "flex items-center gap-x-3 overflow-hidden"
}, E = { class: "truncate" }, I = { class: "flex items-center gap-x-1" }, j = { class: "text-oc-text-400 text-sm font-medium cursor-default" }, z = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium text-sm" }, Y = {
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
    return (o, p) => (t(), s("div", {
      class: r([e.isTransparent ? "p-3" : "border p-4 bg-oc-bg-light border-oc-gray-200 ", "flex flex-col gap-y-4 md:overflow-hidden w-full md:w-auto rounded"])
    }, [
      e.isLoading ? (t(), s("div", N, [
        d(a(w), { class: "w-[80%] h-[14px] rounded-sm" }),
        d(a(w), { class: "w-full h-[20px] rounded-sm" })
      ])) : (t(), s(f, { key: 1 }, [
        n("div", {
          class: r(["flex items-center", e.isBig ? "gap-x-[.75rem]" : "gap-x-3"])
        }, [
          e.icon ? (t(), h(a($), {
            key: 0,
            icon: e.icon,
            variant: e.variant,
            height: e.iconHeight,
            width: e.iconWidth
          }, null, 8, ["icon", "variant", "height", "width"])) : l("", !0),
          n("div", O, [
            n("div", T, [
              u(o.$slots, "title", {}, () => [
                n("span", L, c(e.title), 1)
              ]),
              d(a(y), {
                position: "top",
                "popper-options": { strategy: "fixed" },
                "popper-class": "rounded-sm"
              }, x({
                default: g(() => [
                  e.info ? (t(), h(a(m), {
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
                  fn: g(() => [
                    n("div", W, c(e.tooltip), 1)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ]),
            n("div", H, [
              e.isCard ? (t(), h(a(m), {
                key: 0,
                width: "35",
                name: "payment-methods/visa"
              })) : l("", !0),
              n("span", {
                class: r([e.isBig ? "text-xl" : "", "truncate"])
              }, [
                u(o.$slots, "content", {}, () => [
                  isNaN(e.percentValue) ? (t(), s(f, { key: 1 }, [
                    S(c(e.content), 1)
                  ], 64)) : (t(), s("div", q, [
                    n("div", E, c(e.content), 1),
                    d(a(y), {
                      position: "top",
                      "popper-class": "rounded-sm",
                      "popper-options": { strategy: "fixed" }
                    }, x({
                      default: g(() => [
                        n("div", I, [
                          d(a(m), {
                            name: e.percentValue >= 0 ? "triangle-up" : "triangle-down",
                            class: r(e.percentValue >= 0 ? "text-oc-success-500" : "text-oc-error-500"),
                            width: "10",
                            height: "9"
                          }, null, 8, ["name", "class"]),
                          n("span", j, c(e.percentValue === 0 ? "-" : `${Math.abs(e.percentValue)}%`), 1)
                        ])
                      ]),
                      _: 2
                    }, [
                      e.percentTooltip ? {
                        name: "popper",
                        fn: g(() => [
                          n("div", z, c(e.percentTooltip), 1)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1024)
                  ]))
                ])
              ], 2)
            ]),
            o.$slots.transfer ? u(o.$slots, "transfer", { key: 0 }) : l("", !0)
          ])
        ], 2),
        o.$slots.warning ? u(o.$slots, "warning", { key: 0 }) : l("", !0)
      ], 64))
    ], 2));
  }
};
export {
  R as _,
  X as a,
  Y as b
};
