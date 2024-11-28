import { defineComponent as m, openBlock as t, createElementBlock as r, Fragment as y, renderList as s, createBlock as u, unref as d, mergeProps as o, createSlots as x, withCtx as v, renderSlot as f, normalizeClass as n, createElementVNode as h, createCommentVNode as c, toDisplayString as V } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as $ } from "./OcIcon-CJgBICxh.js";
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
import "@popperjs/core";
const k = { class: "flex gap-3 items-start md:flex-row flex-col" }, J = /* @__PURE__ */ m({
  __name: "OcVariants",
  props: {
    variants: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (i, p) => (t(), r("div", k, [
      (t(!0), r(y, null, s(e.variants, (l) => (t(), u(d(C), o({
        key: l.value,
        "is-active": l.value === e.modelValue,
        ref_for: !0
      }, l, {
        onClick: (g) => i.$emit("update:modelValue", l.isDisabled ? e.modelValue : l.value)
      }), x({ _: 2 }, [
        s(i.$slots, (g, a) => ({
          name: a,
          fn: v((b) => [
            f(i.$slots, a, o({ ref_for: !0 }, b))
          ])
        }))
      ]), 1040, ["is-active", "onClick"]))), 128))
    ]));
  }
}), S = { class: "flex items-center gap-x-3" }, C = /* @__PURE__ */ m({
  __name: "OcVariant",
  props: {
    icon: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    iconOptions: {
      type: Object,
      default: null
    },
    value: {
      type: [String, Number],
      default: ""
    }
  },
  setup(e) {
    return (i, p) => (t(), r("div", {
      class: n([
        "md:w-fit w-full py-3 px-4 border flex flex-col gap-y-2 rounded",
        e.isDisabled ? "bg-oc-gray-50 border-oc-gray-200" : e.isActive ? "border-oc-primary bg-oc-bg-light cursor-pointer" : "border-oc-gray-200 bg-oc-bg-light cursor-pointer"
      ])
    }, [
      h("div", S, [
        e.icon ? (t(), u(d($), o({
          key: 0,
          width: "18",
          height: "18",
          name: e.icon,
          class: e.isDisabled ? "text-oc-text-200" : e.isActive ? "" : "text-oc-text-400"
        }, e.iconOptions), null, 16, ["name", "class"])) : c("", !0),
        e.label ? (t(), r("span", {
          key: 1,
          class: n(e.isDisabled ? "text-oc-text-300" : e.isActive ? "font-medium" : "")
        }, V(e.label), 3)) : c("", !0)
      ]),
      f(i.$slots, `${e.value}-description`)
    ], 2));
  }
});
export {
  J as _,
  C as a
};
