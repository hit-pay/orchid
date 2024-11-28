import { defineComponent as v, openBlock as e, createElementBlock as s, createVNode as m, unref as n, withCtx as l, createElementVNode as t, Fragment as a, renderList as p, toDisplayString as h, createBlock as c, mergeProps as f, renderSlot as y, createCommentVNode as w } from "vue";
import "dayjs";
import { D as V } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as k } from "./OcIcon-CJgBICxh.js";
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
import { _ as g } from "./OcDropdownItem-CsRX3XmF.js";
import "@popperjs/core";
const B = { class: "fixed bottom-[30px] right-[32px]" }, q = { class: "relative" }, M = {
  key: 0,
  class: "flex items-center justify-end"
}, P = { class: "w-[40px] flex text-white items-center bg-oc-text active:bg-oc-gray-800 justify-center aspect-square rounded-full cursor-pointer" }, S = { class: "min-w-[180px]" }, $ = { class: "p-3" }, j = { class: "uppercase text-oc-text-400 text-xs font-medium" }, R = /* @__PURE__ */ v({
  __name: "OcSupportMenu",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "Have a question?"
    },
    info: {
      type: String,
      default: "We're ready to guide you through anything you need!"
    },
    confirmButtonProps: {
      type: Object,
      default: () => ({})
    },
    topMenu: {
      type: Array,
      default: () => []
    },
    bottomMenu: {
      type: Array,
      default: () => []
    },
    questionBtnProps: {
      type: Object,
      default: () => ({})
    },
    isPointed: Boolean
  },
  emits: ["update:modelValue"],
  setup(i) {
    const _ = {
      arrowHidden: !0
    };
    return (d, o) => (e(), s("div", B, [
      m(n(V), {
        "model-value": i.modelValue,
        "popper-options": _,
        placement: "top-end",
        distance: 8,
        "onUpdate:modelValue": o[0] || (o[0] = (r) => d.$emit("update:modelValue", r))
      }, {
        menu: l(() => [
          t("div", S, [
            (e(!0), s(a, null, p(i.topMenu, (r, u) => (e(), s(a, { key: u }, [
              t("div", $, [
                t("span", j, h(r.title), 1)
              ]),
              (e(!0), s(a, null, p(r.items, (x, b) => (e(), c(n(g), f({
                key: b,
                class: "text-sm",
                ref_for: !0
              }, x), {
                badge: l(() => [
                  y(d.$slots, "badge")
                ]),
                _: 2
              }, 1040))), 128))
            ], 64))), 128)),
            o[2] || (o[2] = t("div", { class: "w-full border-t border-gray-200" }, null, -1)),
            (e(!0), s(a, null, p(i.bottomMenu, (r, u) => (e(), c(n(g), f({
              key: u,
              class: "text-sm",
              ref_for: !0
            }, r), {
              badge: l(() => [
                y(d.$slots, "badge")
              ]),
              _: 2
            }, 1040))), 128))
          ])
        ]),
        default: l(() => [
          t("div", q, [
            i.isPointed ? (e(), s("div", M, o[1] || (o[1] = [
              t("div", { class: "w-[6px] aspect-square rounded-full bg-oc-error" }, null, -1)
            ]))) : w("", !0),
            t("div", P, [
              m(n(k), {
                name: "question",
                width: "33",
                height: "33"
              })
            ])
          ])
        ]),
        _: 3
      }, 8, ["model-value"])
    ]));
  }
});
export {
  R as _
};
