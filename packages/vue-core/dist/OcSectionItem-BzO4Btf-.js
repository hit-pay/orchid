import { openBlock as t, createElementBlock as r, createElementVNode as s, createTextVNode as f, toDisplayString as o, createVNode as x, unref as a, withCtx as d, createBlock as c, createCommentVNode as i, normalizeClass as V, renderSlot as y, mergeProps as S } from "vue";
import "dayjs";
import { T as h } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as k } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
import { T as v } from "./OcToggle-C0wTjM_Y.js";
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const T = { class: "flex" }, B = { class: "flex flex-col gap-y-1 flex-1" }, C = { class: "font-medium gap-x-3 flex items-center" }, M = { class: "px-2 py-1 text-sm text-oc-text-400" }, N = {
  key: 1,
  class: "text-sm text-oc-error flex items-center"
}, J = {
  __name: "OcSectionItem",
  props: {
    title: String,
    description: {
      type: String,
      default: ""
    },
    descriptionClass: {
      type: String,
      default: ""
    },
    icon: String,
    modelValue: {
      type: Boolean,
      default: !1
    },
    isToggle: Boolean,
    toggleProps: Object,
    popperMessage: String,
    errorMessage: String,
    defaultValue: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: u }) {
    const l = e, p = u;
    return l.defaultValue === !0 && (l.modelValue === null || l.modelValue === void 0) && p("update:modelValue", !0), (n, m) => (t(), r("div", T, [
      s("div", B, [
        s("div", C, [
          f(o(e.title) + " ", 1),
          x(a(h), {
            position: "top",
            distance: 4
          }, {
            popper: d(() => [
              s("div", M, o(e.popperMessage), 1)
            ]),
            default: d(() => [
              e.icon ? (t(), c(a(k), {
                key: 0,
                width: "16",
                height: "16",
                class: "text-oc-text-400 cursor-pointer",
                name: e.icon
              }, null, 8, ["name"])) : i("", !0)
            ]),
            _: 1
          })
        ]),
        e.description ? (t(), r("span", {
          key: 0,
          class: V(["text-oc-text-400 text-sm", e.descriptionClass])
        }, o(e.description), 3)) : i("", !0),
        e.errorMessage ? (t(), r("div", N, o(e.errorMessage), 1)) : i("", !0)
      ]),
      y(n.$slots, "actions", {}, () => [
        e.isToggle ? (t(), c(a(v), S({
          key: 0,
          "model-value": e.modelValue
        }, e.toggleProps, {
          "onUpdate:modelValue": m[0] || (m[0] = (g) => n.$emit("update:modelValue", g))
        }), null, 16, ["model-value"])) : i("", !0)
      ])
    ]));
  }
};
export {
  J as _
};
