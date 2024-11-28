import { ref as w, openBlock as e, createElementBlock as i, normalizeClass as V, createElementVNode as r, renderSlot as d, createTextVNode as k, toDisplayString as x, createCommentVNode as n, createVNode as m, unref as l, withCtx as u, createBlock as p, mergeProps as f, Fragment as y, renderList as v } from "vue";
import "dayjs";
import { D as O } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as g } from "./OcIcon-CJgBICxh.js";
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
import { _ as b } from "./OcDropdownItem-CsRX3XmF.js";
import "@popperjs/core";
import { _ as $ } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-IsqOGpEF.js";
const C = { key: 0 }, S = { class: "flex border-oc-gray-200 gap-x-9 justify-between p-5 items-start border-b sticky bg-oc-bg-light top-0" }, B = { class: "flex flex-col gap-y-1 max-w-[300px]" }, N = { class: "text-lg font-medium truncate" }, j = { class: "flex gap-3 items-center" }, D = {
  key: 0,
  class: "text-sm text-oc-text-300 truncate"
}, P = { class: "flex items-center gap-3" }, z = { class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text" }, E = { class: "p-2 border-b border-gray-200" }, F = {
  key: 0,
  class: "p-2"
}, et = {
  __name: "OcFloatContent",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    isClose: {
      type: Boolean,
      default: !0
    },
    title: String,
    description: String,
    dropdownOptions: {
      type: Object
    },
    dropdownProps: {
      type: Object,
      default: () => ({})
    },
    position: {
      type: String,
      validator: (t) => ["left", "right"].includes(t),
      default: "right"
    }
  },
  emits: ["update:model-value"],
  setup(t, { emit: L }) {
    const h = w(!1);
    return (s, a) => (e(), i("div", {
      class: V(["fixed top-0 bottom-0 shadow-xl bg-oc-bg-light transition-all h-full z-50 overflow-y-auto", {
        "right-0": t.modelValue && t.position === "right",
        "right-[-999px] w-0": !t.modelValue && t.position === "right",
        "left-0": t.modelValue && t.position === "left",
        "left-[-999px] w-0": !t.modelValue && t.position === "left"
      }])
    }, [
      t.modelValue ? (e(), i("div", C, [
        r("div", S, [
          d(s.$slots, "header", {}, () => [
            r("div", B, [
              r("span", N, [
                d(s.$slots, "title", {}, () => [
                  k(x(t.title), 1)
                ])
              ]),
              d(s.$slots, "description", {}, () => [
                r("div", j, [
                  t.description ? (e(), i("span", D, x(t.description), 1)) : n("", !0),
                  m(l($), {
                    value: t.description,
                    "tooltip-options": { strategy: "fixed" }
                  }, {
                    default: u(({ isShow: o }) => [
                      m(l(g), {
                        width: "14",
                        height: "14",
                        class: "cursor-pointer text-oc-text-400",
                        name: "copy"
                      })
                    ]),
                    _: 1
                  }, 8, ["value"])
                ])
              ])
            ]),
            r("div", P, [
              t.dropdownOptions ? (e(), p(l(O), f({
                key: 0,
                modelValue: h.value,
                "onUpdate:modelValue": a[0] || (a[0] = (o) => h.value = o),
                "popper-options": { strategy: "fixed" },
                placement: "bottom",
                class: "text-sm"
              }, t.dropdownProps), {
                menu: u(() => [
                  r("div", E, [
                    (e(!0), i(y, null, v(t.dropdownOptions.top, (o, c) => (e(), p(l(b), f({
                      key: c,
                      ref_for: !0
                    }, o), null, 16))), 128))
                  ]),
                  t.dropdownOptions.bottom ? (e(), i("div", F, [
                    (e(!0), i(y, null, v(t.dropdownOptions.bottom, (o, c) => (e(), p(l(b), f({
                      key: c,
                      ref_for: !0
                    }, o), null, 16))), 128))
                  ])) : n("", !0)
                ]),
                default: u(() => [
                  r("div", z, [
                    m(l(g), {
                      name: "dots-vertical",
                      width: "20",
                      height: "20"
                    })
                  ])
                ]),
                _: 1
              }, 16, ["modelValue"])) : n("", !0),
              t.isClose ? (e(), i("div", {
                key: 1,
                class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text",
                onClick: a[1] || (a[1] = (o) => s.$emit("update:model-value", !1))
              }, [
                m(l(g), {
                  name: "x",
                  width: "20",
                  height: "20"
                })
              ])) : n("", !0)
            ])
          ])
        ]),
        d(s.$slots, "bottom")
      ])) : n("", !0)
    ], 2));
  }
};
export {
  et as _
};
