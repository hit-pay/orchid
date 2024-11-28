import { computed as w, openBlock as i, createElementBlock as r, normalizeClass as l, createVNode as c, unref as o, Fragment as m, createElementVNode as t, createBlock as x, createCommentVNode as p, renderSlot as d, toDisplayString as s, createSlots as f, withCtx as g, createTextVNode as B, renderList as _ } from "vue";
import "dayjs";
import { d as h, aL as V, m as y } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { _ as v } from "./OcSkeleton-BgoOR1qd-pnPSK-aY-CfoZctec-ClI9e3AL.js";
import { P as b } from "./OcTooltip-CbCuSC-i-BesS9FFw-CiDM-om2-BFt7BH9u.js";
import { s as S } from "./OcSkeleton-BgoOR1qd-pnPSK-aY-DsKe9Qwj.js";
import { M as k } from "./OcTooltip-DBif_2H1-B-R8nPrI-BM5y6FC0.js";
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
  setup(e) {
    const n = w(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (u, a) => (i(), r("div", {
      class: l(["rounded-full p-3 flex items-center justify-center aspect-square", n.value[e.variant]])
    }, [
      c(o(V), {
        name: e.icon,
        width: e.width,
        height: e.height
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
  setup(e) {
    const n = w(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (u, a) => (i(), r("div", {
      class: l(["rounded-full p-3 flex items-center justify-center aspect-square", n.value[e.variant]])
    }, [
      c(o(h), {
        name: e.icon,
        width: e.width,
        height: e.height
      }, null, 8, ["name", "width", "height"])
    ], 2));
  }
}, N = {
  key: 0,
  class: "flex flex-col gap-y-3 min-w-[132px]"
}, C = { class: "flex flex-col gap-y-px font-medium overflow-hidden" }, L = { class: "flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300" }, W = { class: "uppercase" }, H = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium" }, I = { class: "flex items-center gap-x-2 overflow-hidden" }, j = {
  key: 0,
  class: "flex items-center gap-x-3 overflow-hidden"
}, q = { class: "truncate" }, E = { class: "flex items-center gap-x-1" }, M = { class: "text-oc-text-400 text-sm font-medium cursor-default" }, P = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium text-sm" }, z = {
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
    return (n, u) => (i(), r("div", {
      class: l([e.isTransparent ? "p-3" : "border p-4 bg-oc-bg-light border-oc-gray-200 ", "flex flex-col gap-y-4 md:overflow-hidden w-full md:w-auto rounded"])
    }, [
      e.isLoading ? (i(), r("div", N, [
        c(o(v), { class: "w-[80%] h-[14px] rounded-sm" }),
        c(o(v), { class: "w-full h-[20px] rounded-sm" })
      ])) : (i(), r(m, { key: 1 }, [
        t("div", {
          class: l(["flex items-center", e.isBig ? "gap-x-[.75rem]" : "gap-x-3"])
        }, [
          e.icon ? (i(), x(o(O), {
            key: 0,
            icon: e.icon,
            variant: e.variant,
            height: e.iconHeight,
            width: e.iconWidth
          }, null, 8, ["icon", "variant", "height", "width"])) : p("", !0),
          t("div", C, [
            t("div", L, [
              d(n.$slots, "title", {}, () => [
                t("span", W, s(e.title), 1)
              ]),
              c(o(b), {
                position: "top",
                "popper-options": { strategy: "fixed" },
                "popper-class": "rounded-sm"
              }, f({
                default: g(() => [
                  e.info ? (i(), x(o(h), {
                    key: 0,
                    width: "16",
                    height: "16",
                    class: "text-oc-text-400",
                    name: "information"
                  })) : p("", !0)
                ]),
                _: 2
              }, [
                e.tooltip ? {
                  name: "popper",
                  fn: g(() => [
                    t("div", H, s(e.tooltip), 1)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ]),
            t("div", I, [
              e.isCard ? (i(), x(o(h), {
                key: 0,
                width: "35",
                name: "payment-methods/visa"
              })) : p("", !0),
              t("span", {
                class: l([e.isBig ? "text-xl" : "", "truncate"])
              }, [
                d(n.$slots, "content", {}, () => [
                  isNaN(e.percentValue) ? (i(), r(m, { key: 1 }, [
                    B(s(e.content), 1)
                  ], 64)) : (i(), r("div", j, [
                    t("div", q, s(e.content), 1),
                    c(o(b), {
                      position: "top",
                      "popper-class": "rounded-sm",
                      "popper-options": { strategy: "fixed" }
                    }, f({
                      default: g(() => [
                        t("div", E, [
                          c(o(h), {
                            name: e.percentValue >= 0 ? "triangle-up" : "triangle-down",
                            class: l(e.percentValue >= 0 ? "text-oc-success-500" : "text-oc-error-500"),
                            width: "10",
                            height: "9"
                          }, null, 8, ["name", "class"]),
                          t("span", M, s(e.percentValue === 0 ? "-" : `${Math.abs(e.percentValue)}%`), 1)
                        ])
                      ]),
                      _: 2
                    }, [
                      e.percentTooltip ? {
                        name: "popper",
                        fn: g(() => [
                          t("div", P, s(e.percentTooltip), 1)
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
}, D = { class: "flex gap-y-3 flex-col text-lg font-medium" }, F = { key: 0 }, ge = {
  __name: "OcOverview",
  props: {
    title: String,
    containerClass: String,
    items: Array,
    isLoading: Boolean
  },
  setup(e) {
    return (n, u) => (i(), r("div", D, [
      e.title ? (i(), r("span", F, s(e.title), 1)) : p("", !0),
      t("div", {
        class: l(["flex gap-x-5 items-start md:flex-row flex-col gap-y-3 md:gap-y-0", e.containerClass])
      }, [
        (i(!0), r(m, null, _(e.items, (a, $) => (i(), x(o(z), {
          key: $,
          title: a.title,
          class: l(["flex-1", a.class]),
          variant: a.variant,
          tooltip: a.tooltip,
          icon: a.icon,
          "is-loading": e.isLoading,
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
}, xe = {
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
    const n = w(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (u, a) => (i(), r("div", {
      class: l(["rounded-full p-3 flex items-center justify-center aspect-square", n.value[e.variant]])
    }, [
      c(o(y), {
        name: e.icon,
        width: e.width,
        height: e.height
      }, null, 8, ["name", "width", "height"])
    ], 2));
  }
}, U = {
  key: 0,
  class: "flex flex-col gap-y-3 min-w-[132px]"
}, X = { class: "flex flex-col gap-y-px font-medium overflow-hidden" }, Y = { class: "flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300" }, A = { class: "uppercase" }, J = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium" }, K = { class: "flex items-center gap-x-2 overflow-hidden" }, Q = {
  key: 0,
  class: "flex items-center gap-x-3 overflow-hidden"
}, R = { class: "truncate" }, Z = { class: "flex items-center gap-x-1" }, G = { class: "text-oc-text-400 text-sm font-medium cursor-default" }, ee = { class: "px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium text-sm" }, ue = {
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
    return (n, u) => (i(), r("div", {
      class: l([e.isTransparent ? "p-3" : "border p-4 bg-oc-bg-light border-oc-gray-200 ", "flex flex-col gap-y-4 md:overflow-hidden w-full md:w-auto rounded"])
    }, [
      e.isLoading ? (i(), r("div", U, [
        c(o(S), { class: "w-[80%] h-[14px] rounded-sm" }),
        c(o(S), { class: "w-full h-[20px] rounded-sm" })
      ])) : (i(), r(m, { key: 1 }, [
        t("div", {
          class: l(["flex items-center", e.isBig ? "gap-x-[.75rem]" : "gap-x-3"])
        }, [
          e.icon ? (i(), x(o(T), {
            key: 0,
            icon: e.icon,
            variant: e.variant,
            height: e.iconHeight,
            width: e.iconWidth
          }, null, 8, ["icon", "variant", "height", "width"])) : p("", !0),
          t("div", X, [
            t("div", Y, [
              d(n.$slots, "title", {}, () => [
                t("span", A, s(e.title), 1)
              ]),
              c(o(k), {
                position: "top",
                "popper-options": { strategy: "fixed" },
                "popper-class": "rounded-sm"
              }, f({
                default: g(() => [
                  e.info ? (i(), x(o(y), {
                    key: 0,
                    width: "16",
                    height: "16",
                    class: "text-oc-text-400",
                    name: "information"
                  })) : p("", !0)
                ]),
                _: 2
              }, [
                e.tooltip ? {
                  name: "popper",
                  fn: g(() => [
                    t("div", J, s(e.tooltip), 1)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ]),
            t("div", K, [
              e.isCard ? (i(), x(o(y), {
                key: 0,
                width: "35",
                name: "payment-methods/visa"
              })) : p("", !0),
              t("span", {
                class: l([e.isBig ? "text-xl" : "", "truncate"])
              }, [
                d(n.$slots, "content", {}, () => [
                  isNaN(e.percentValue) ? (i(), r(m, { key: 1 }, [
                    B(s(e.content), 1)
                  ], 64)) : (i(), r("div", Q, [
                    t("div", R, s(e.content), 1),
                    c(o(k), {
                      position: "top",
                      "popper-class": "rounded-sm",
                      "popper-options": { strategy: "fixed" }
                    }, f({
                      default: g(() => [
                        t("div", Z, [
                          c(o(y), {
                            name: e.percentValue >= 0 ? "triangle-up" : "triangle-down",
                            class: l(e.percentValue >= 0 ? "text-oc-success-500" : "text-oc-error-500"),
                            width: "10",
                            height: "9"
                          }, null, 8, ["name", "class"]),
                          t("span", G, s(e.percentValue === 0 ? "-" : `${Math.abs(e.percentValue)}%`), 1)
                        ])
                      ]),
                      _: 2
                    }, [
                      e.percentTooltip ? {
                        name: "popper",
                        fn: g(() => [
                          t("div", ee, s(e.percentTooltip), 1)
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
  ge as R,
  xe as X,
  ue as Y
};
