import { computed as w, openBlock as i, createElementBlock as r, normalizeClass as l, createVNode as c, unref as o, Fragment as m, createElementVNode as e, createBlock as u, createCommentVNode as p, renderSlot as d, toDisplayString as s, createSlots as f, withCtx as g, createTextVNode as B, renderList as _ } from "vue";
import "dayjs";
import { f as h, aQ as V, m as y } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { _ as v } from "./OcSkeleton-BgoOR1qd-pnPSK-aY-DsKe9Qwj-TM5tBGpw.js";
import { P as b } from "./OcTooltip-DBif_2H1-B-R8nPrI-BM5y6FC0-BiGpbzD8.js";
import { s as S } from "./OcSkeleton-BgoOR1qd-pnPSK-aY-D2UjEfe5.js";
import { M as k } from "./OcTooltip-HpelzfZG-w8_u6oS8-BWOI0gq2.js";
const O = {
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
  setup(t) {
    const n = w(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (x, a) => (i(), r("div", {
      class: l(["rounded-full p-3 flex items-center justify-center aspect-square", n.value[t.variant]])
    }, [
      c(o(V), {
        name: t.icon,
        width: t.width,
        height: t.height
      }, null, 8, ["name", "width", "height"])
    ], 2));
  }
}, T = {
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
  setup(t) {
    const n = w(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (x, a) => (i(), r("div", {
      class: l(["rounded-full p-3 flex items-center justify-center aspect-square", n.value[t.variant]])
    }, [
      c(o(h), {
        name: t.icon,
        width: t.width,
        height: t.height
      }, null, 8, ["name", "width", "height"])
    ], 2));
  }
}, N = {
  key: 0,
  class: "flex flex-col gap-y-3 min-w-[132px]"
}, C = { class: "flex flex-col gap-y-px font-medium overflow-hidden" }, L = { class: "flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300" }, W = { class: "uppercase" }, H = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium" }, I = { class: "flex items-center gap-x-2 overflow-hidden" }, j = {
  key: 0,
  class: "flex items-center gap-x-3 overflow-hidden"
}, q = { class: "truncate" }, E = { class: "flex items-center gap-x-1" }, M = { class: "text-oc-text-400 text-sm font-medium cursor-default" }, z = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium text-sm" }, A = {
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
  setup(t) {
    return (n, x) => (i(), r("div", {
      class: l([t.isTransparent ? "p-3" : "border p-4 bg-oc-bg-light border-oc-gray-200 ", "flex flex-col gap-y-4 md:overflow-hidden w-full md:w-auto rounded"])
    }, [
      t.isLoading ? (i(), r("div", N, [
        c(o(v), { class: "w-[80%] h-[14px] rounded-sm" }),
        c(o(v), { class: "w-full h-[20px] rounded-sm" })
      ])) : (i(), r(m, { key: 1 }, [
        e("div", {
          class: l(["flex items-center", t.isBig ? "gap-x-[.75rem]" : "gap-x-3"])
        }, [
          t.icon ? (i(), u(o(O), {
            key: 0,
            icon: t.icon,
            variant: t.variant,
            height: t.iconHeight,
            width: t.iconWidth
          }, null, 8, ["icon", "variant", "height", "width"])) : p("", !0),
          e("div", C, [
            e("div", L, [
              d(n.$slots, "title", {}, () => [
                e("span", W, s(t.title), 1)
              ]),
              c(o(b), {
                position: "top",
                "popper-options": { strategy: "fixed" },
                "popper-class": "rounded-sm"
              }, f({
                default: g(() => [
                  t.info ? (i(), u(o(h), {
                    key: 0,
                    width: "16",
                    height: "16",
                    class: "text-oc-text-400",
                    name: "information"
                  })) : p("", !0)
                ]),
                _: 2
              }, [
                t.tooltip ? {
                  name: "popper",
                  fn: g(() => [
                    e("div", H, s(t.tooltip), 1)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ]),
            e("div", I, [
              t.isCard ? (i(), u(o(h), {
                key: 0,
                width: "35",
                name: "payment-methods/visa"
              })) : p("", !0),
              e("span", {
                class: l([t.isBig ? "text-xl" : "", "truncate"])
              }, [
                d(n.$slots, "content", {}, () => [
                  isNaN(t.percentValue) ? (i(), r(m, { key: 1 }, [
                    B(s(t.content), 1)
                  ], 64)) : (i(), r("div", j, [
                    e("div", q, s(t.content), 1),
                    c(o(b), {
                      position: "top",
                      "popper-class": "rounded-sm",
                      "popper-options": { strategy: "fixed" }
                    }, f({
                      default: g(() => [
                        e("div", E, [
                          c(o(h), {
                            name: t.percentValue >= 0 ? "triangle-up" : "triangle-down",
                            class: l(t.percentValue >= 0 ? "text-oc-success-500" : "text-oc-error-500"),
                            width: "10",
                            height: "9"
                          }, null, 8, ["name", "class"]),
                          e("span", M, s(t.percentValue === 0 ? "-" : `${Math.abs(t.percentValue)}%`), 1)
                        ])
                      ]),
                      _: 2
                    }, [
                      t.percentTooltip ? {
                        name: "popper",
                        fn: g(() => [
                          e("div", z, s(t.percentTooltip), 1)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1024)
                  ]))
                ])
              ], 2)
            ]),
            n.$slots.transfer ? d(n.$slots, "transfer", { key: 0 }) : p("", !0)
          ])
        ], 2),
        n.$slots.warning ? d(n.$slots, "warning", { key: 0 }) : p("", !0)
      ], 64))
    ], 2));
  }
}, J = { class: "flex gap-y-3 flex-col text-lg font-medium" }, Q = { key: 0 }, gt = {
  __name: "OcOverview",
  props: {
    title: String,
    containerClass: String,
    items: Array,
    isLoading: Boolean
  },
  setup(t) {
    return (n, x) => (i(), r("div", J, [
      t.title ? (i(), r("span", Q, s(t.title), 1)) : p("", !0),
      e("div", {
        class: l(["flex gap-x-5 items-start md:flex-row flex-col gap-y-3 md:gap-y-0", t.containerClass])
      }, [
        (i(!0), r(m, null, _(t.items, (a, $) => (i(), u(o(A), {
          key: $,
          title: a.title,
          class: l(["flex-1", a.class]),
          variant: a.variant,
          tooltip: a.tooltip,
          icon: a.icon,
          "is-loading": t.isLoading,
          content: a.content,
          info: a.info,
          "icon-height": a.iconHeight,
          "icon-width": a.iconWidth
        }, f({ _: 2 }, [
          a.isWarning ? {
            name: "warning",
            fn: g(() => [
              d(n.$slots, "warning")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["title", "class", "variant", "tooltip", "icon", "is-loading", "content", "info", "icon-height", "icon-width"]))), 128))
      ], 2)
    ]));
  }
}, ut = {
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
  setup(t) {
    const n = w(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (x, a) => (i(), r("div", {
      class: l(["rounded-full p-3 flex items-center justify-center aspect-square", n.value[t.variant]])
    }, [
      c(o(y), {
        name: t.icon,
        width: t.width,
        height: t.height
      }, null, 8, ["name", "width", "height"])
    ], 2));
  }
}, R = {
  key: 0,
  class: "flex flex-col gap-y-3 min-w-[132px]"
}, U = { class: "flex flex-col gap-y-px font-medium overflow-hidden" }, Z = { class: "flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300" }, D = { class: "uppercase" }, F = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium" }, G = { class: "flex items-center gap-x-2 overflow-hidden" }, K = {
  key: 0,
  class: "flex items-center gap-x-3 overflow-hidden"
}, P = { class: "truncate" }, X = { class: "flex items-center gap-x-1" }, Y = { class: "text-oc-text-400 text-sm font-medium cursor-default" }, tt = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium text-sm" }, xt = {
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
  setup(t) {
    return (n, x) => (i(), r("div", {
      class: l([t.isTransparent ? "p-3" : "border p-4 bg-oc-bg-light border-oc-gray-200 ", "flex flex-col gap-y-4 md:overflow-hidden w-full md:w-auto rounded"])
    }, [
      t.isLoading ? (i(), r("div", R, [
        c(o(S), { class: "w-[80%] h-[14px] rounded-sm" }),
        c(o(S), { class: "w-full h-[20px] rounded-sm" })
      ])) : (i(), r(m, { key: 1 }, [
        e("div", {
          class: l(["flex items-center", t.isBig ? "gap-x-[.75rem]" : "gap-x-3"])
        }, [
          t.icon ? (i(), u(o(T), {
            key: 0,
            icon: t.icon,
            variant: t.variant,
            height: t.iconHeight,
            width: t.iconWidth
          }, null, 8, ["icon", "variant", "height", "width"])) : p("", !0),
          e("div", U, [
            e("div", Z, [
              d(n.$slots, "title", {}, () => [
                e("span", D, s(t.title), 1)
              ]),
              c(o(k), {
                position: "top",
                "popper-options": { strategy: "fixed" },
                "popper-class": "rounded-sm"
              }, f({
                default: g(() => [
                  t.info ? (i(), u(o(y), {
                    key: 0,
                    width: "16",
                    height: "16",
                    class: "text-oc-text-400",
                    name: "information"
                  })) : p("", !0)
                ]),
                _: 2
              }, [
                t.tooltip ? {
                  name: "popper",
                  fn: g(() => [
                    e("div", F, s(t.tooltip), 1)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ]),
            e("div", G, [
              t.isCard ? (i(), u(o(y), {
                key: 0,
                width: "35",
                name: "payment-methods/visa"
              })) : p("", !0),
              e("span", {
                class: l([t.isBig ? "text-xl" : "", "truncate"])
              }, [
                d(n.$slots, "content", {}, () => [
                  isNaN(t.percentValue) ? (i(), r(m, { key: 1 }, [
                    B(s(t.content), 1)
                  ], 64)) : (i(), r("div", K, [
                    e("div", P, s(t.content), 1),
                    c(o(k), {
                      position: "top",
                      "popper-class": "rounded-sm",
                      "popper-options": { strategy: "fixed" }
                    }, f({
                      default: g(() => [
                        e("div", X, [
                          c(o(y), {
                            name: t.percentValue >= 0 ? "triangle-up" : "triangle-down",
                            class: l(t.percentValue >= 0 ? "text-oc-success-500" : "text-oc-error-500"),
                            width: "10",
                            height: "9"
                          }, null, 8, ["name", "class"]),
                          e("span", Y, s(t.percentValue === 0 ? "-" : `${Math.abs(t.percentValue)}%`), 1)
                        ])
                      ]),
                      _: 2
                    }, [
                      t.percentTooltip ? {
                        name: "popper",
                        fn: g(() => [
                          e("div", tt, s(t.percentTooltip), 1)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1024)
                  ]))
                ])
              ], 2)
            ]),
            n.$slots.transfer ? d(n.$slots, "transfer", { key: 0 }) : p("", !0)
          ])
        ], 2),
        n.$slots.warning ? d(n.$slots, "warning", { key: 0 }) : p("", !0)
      ], 64))
    ], 2));
  }
};
export {
  gt as R,
  ut as U,
  xt as Z
};
