import { defineComponent as V, ref as k, openBlock as o, createElementBlock as u, createElementVNode as m, toDisplayString as b, createBlock as r, unref as e, mergeProps as d, withCtx as i, createVNode as l, withModifiers as j, createCommentVNode as n, Fragment as v, renderList as w, renderSlot as f, normalizeClass as z, createSlots as S } from "vue";
import { a as T } from "./OcPrimaryActions-D0RDT8B2.js";
import "dayjs";
import { B, D as O, T as M } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as g } from "./OcIcon-CJgBICxh.js";
import { _ as D } from "./OcChip-5vbWMktM.js";
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
import { _ as x } from "./OcDropdownItem-CsRX3XmF.js";
import "@popperjs/core";
import { _ as N } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-IsqOGpEF.js";
import { _ as E } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { useWindowWidth as I } from "./composables/useWindowWidth.js";
const R = { class: "flex flex-col gap-y-3" }, U = { class: "flex items-center justify-between gap-x-3" }, W = { class: "text-xl leading-[24px] font-medium" }, q = {
  key: 0,
  class: "flex gap-x-6 text-sm text-oc-text-400 py-4 whitespace-nowrap items-center"
}, F = { class: "overflow-hidden text-ellipsis" }, L = /* @__PURE__ */ V({
  __name: "OcMobilePageTitle",
  props: {
    title: { type: String },
    description: { type: String },
    primaryButtonProps: Object,
    chipProps: Object,
    secondaryButtonProps: Object
  },
  setup(t) {
    const s = k(!1);
    return (p, a) => (o(), u("div", R, [
      m("div", U, [
        m("span", W, b(t.title), 1),
        t.primaryButtonProps || t.secondaryButtonProps ? (o(), r(e(B), d({
          key: 0,
          size: "small"
        }, t.primaryButtonProps, { "is-additional-area": "" }), {
          "additional-content": i(() => [
            l(e(O), {
              modelValue: s.value,
              "onUpdate:modelValue": a[0] || (a[0] = (c) => s.value = c),
              onClick: a[1] || (a[1] = j(() => {
              }, ["stop"]))
            }, {
              menu: i(() => {
                var c, h;
                return [
                  t.secondaryButtonProps ? (o(), r(e(x), {
                    key: 0,
                    text: (c = t.secondaryButtonProps) == null ? void 0 : c.label,
                    icon: (h = t.secondaryButtonProps) == null ? void 0 : h.leftIcon
                  }, null, 8, ["text", "icon"])) : n("", !0),
                  t.secondaryButtonProps && t.secondaryButtonProps.dropdownOptions ? (o(!0), u(v, { key: 1 }, w(t.secondaryButtonProps.dropdownOptions, (y) => (o(), r(e(x), d({
                    key: y.text,
                    ref_for: !0
                  }, y), null, 16))), 128)) : n("", !0)
                ];
              }),
              default: i(() => [
                l(e(g), {
                  width: "16",
                  height: "16",
                  class: "mx-auto",
                  name: "chevron-down"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 16)) : n("", !0)
      ]),
      t.description ? (o(), u("div", q, [
        m("span", F, b(t.description), 1),
        l(e(N), {
          class: "shrink-0",
          value: t.description
        }, {
          default: i(() => [
            l(e(g), {
              width: "16",
              height: "16",
              class: "cursor-pointer",
              name: "copy"
            })
          ]),
          _: 1
        }, 8, ["value"])
      ])) : n("", !0),
      f(p.$slots, "mobile-amount"),
      t.chipProps ? (o(), r(e(D), d({ key: 1 }, t.chipProps, { class: "self-start" }), null, 16)) : n("", !0)
    ]));
  }
}), A = { class: "md:pb-5 pb-4 flex flex-col" }, G = { class: "flex flex-col gap-y-3 pt-4 md:pt-5 px-5 md:px-10" }, bt = {
  __name: "OcPageTitle",
  props: {
    title: { type: String, required: !0 },
    description: { type: String, default: "" },
    titleClass: { type: String, default: "" },
    copyValue: { type: String, default: "" },
    primaryButtonProps: Object,
    secondaryButtonProps: Object,
    tooltipOptions: Object,
    chipProps: Object,
    isCopy: Boolean,
    isBack: { type: Boolean, default: !1 },
    isMobileCombineButtons: { type: Boolean, default: !1 }
  },
  emits: {
    changeTab: [],
    back: []
  },
  setup(t) {
    return (s, p) => (o(), u("div", A, [
      m("div", G, [
        t.isBack ? (o(), r(e(B), {
          key: 0,
          size: "small",
          "icon-class": "rotate-90",
          variant: "secondary",
          "is-transparent": "",
          label: "Back",
          "left-icon": "chevron-down",
          class: "self-start",
          onClick: p[0] || (p[0] = (a) => s.$emit("back"))
        })) : n("", !0),
        m("div", {
          class: z(["w-full gap-5", [t.isMobileCombineButtons ? "hidden md:flex" : "flex", t.titleClass]])
        }, [
          l(T, {
            title: t.title,
            description: t.description,
            "chip-props": t.chipProps,
            "copy-value": t.copyValue,
            "tooltip-options": t.tooltipOptions,
            "is-copy": t.isCopy,
            class: "flex-1"
          }, S({ _: 2 }, [
            s.$slots.title ? {
              name: "title",
              fn: i(() => [
                f(s.$slots, "title")
              ]),
              key: "0"
            } : void 0,
            s.$slots.description ? {
              name: "description",
              fn: i(() => [
                f(s.$slots, "description")
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["title", "description", "chip-props", "copy-value", "tooltip-options", "is-copy"]),
          f(s.$slots, "right", {}, () => [
            l(e(X), {
              class: "shrink-0",
              "primary-button-props": t.primaryButtonProps,
              "secondary-button-props": t.secondaryButtonProps
            }, null, 8, ["primary-button-props", "secondary-button-props"])
          ])
        ], 2),
        t.isMobileCombineButtons ? (o(), r(L, {
          key: 1,
          "secondary-button-props": t.secondaryButtonProps,
          "primary-button-props": t.primaryButtonProps,
          description: t.description,
          "chip-props": t.chipProps,
          title: t.title,
          class: "md:hidden"
        }, {
          "mobile-amount": i(() => [
            f(s.$slots, "mobile-amount")
          ]),
          _: 3
        }, 8, ["secondary-button-props", "primary-button-props", "description", "chip-props", "title"])) : n("", !0)
      ])
    ]));
  }
}, H = { class: "flex gap-x-3 items-center" }, J = {
  key: 0,
  class: "p-2"
}, K = { class: "px-3 py-[5px] whitespace-nowrap font-medium text-sm text-oc-text-400 flex gap-x-3 items-center" }, Q = {
  __name: "OcPageTitleRight",
  props: {
    primaryButtonProps: Object,
    secondaryButtonProps: Object
  },
  setup(t) {
    var c;
    const p = k(((c = t.secondaryButtonProps) == null ? void 0 : c.isDropdownOpened) ?? !1), { isMobile: a } = I();
    return (h, y) => (o(), u("div", H, [
      t.secondaryButtonProps ? (o(), r(e(O), {
        key: 0,
        modelValue: p.value,
        "onUpdate:modelValue": y[0] || (y[0] = (P) => p.value = P),
        distance: 10
      }, {
        menu: i(() => {
          var P;
          return [
            (P = t.secondaryButtonProps) != null && P.dropdownOptions ? (o(), u("div", J, [
              (o(!0), u(v, null, w(t.secondaryButtonProps.dropdownOptions, ($, C) => (o(), r(e(x), d({
                key: C,
                ref_for: !0
              }, $), null, 16))), 128))
            ])) : n("", !0)
          ];
        }),
        default: i(() => [
          l(e(B), d({
            size: e(a) ? "small" : "default"
          }, t.secondaryButtonProps), null, 16, ["size"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : n("", !0),
      t.primaryButtonProps && t.primaryButtonProps.tooltip ? (o(), r(e(M), {
        key: 1,
        position: "top",
        distance: 4,
        "arrow-hidden": ""
      }, {
        popper: i(() => [
          m("div", K, b(t.primaryButtonProps.tooltip), 1)
        ]),
        default: i(() => [
          l(e(B), d({
            size: e(a) ? "small" : "default"
          }, t.primaryButtonProps), null, 16, ["size"])
        ]),
        _: 1
      })) : t.primaryButtonProps ? (o(), r(e(B), d({
        key: 2,
        size: e(a) ? "small" : "default"
      }, t.primaryButtonProps), null, 16, ["size"])) : n("", !0)
    ]));
  }
}, X = /* @__PURE__ */ E(Q, [["__scopeId", "data-v-a7abfe33"]]);
export {
  X as P,
  bt as _
};
