import { defineComponent as f, openBlock as g, createBlock as x, unref as l, withCtx as V, createElementVNode as r, normalizeClass as n, createVNode as s } from "vue";
import "dayjs";
import { _ as k, B as u } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
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
const h = ["value"], R = /* @__PURE__ */ f({
  __name: "OcNumberInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    minValue: {
      type: Number,
      default: 1
    },
    label: String,
    errorMessage: String,
    isDisabled: Boolean,
    tooltipOptions: Object,
    hint: String,
    labelIcon: String,
    isRequired: Boolean,
    tooltipText: String,
    inputClass: [String, Array, Object]
  },
  emits: ["update:modelValue"],
  setup(e, { emit: m }) {
    const i = e, o = m, d = () => o("update:modelValue", Number(i.modelValue) + 1), c = () => {
      Number(i.modelValue) > i.minValue && o("update:modelValue", Number(i.modelValue) - 1);
    }, p = (t) => {
      t.key >= "0" && t.key <= "9" || t.key === "Backspace" || t.preventDefault();
    };
    return (t, a) => (g(), x(l(k), {
      label: e.label,
      "tooltip-options": e.tooltipOptions,
      "error-message": e.errorMessage,
      hint: e.hint,
      "label-icon": e.labelIcon,
      "is-required": e.isRequired,
      "tooltip-text": e.tooltipText
    }, {
      default: V(() => [
        r("div", {
          class: n(["flex justify-between gap-x-3 h-[36px] items-center border rounded px-1", [
            e.inputClass,
            e.isDisabled ? "bg-oc-bg-dark" : "",
            e.errorMessage ? "border-oc-error" : "border-oc-gray-200"
          ]])
        }, [
          s(l(u), {
            variant: "secondary",
            class: "w-[28px] shrink-0 aspect-square",
            size: "small",
            "icon-class": "shrink-0",
            "is-disabled": e.isDisabled,
            "left-icon": "minus",
            onClick: c
          }, null, 8, ["is-disabled"]),
          r("input", {
            value: e.modelValue,
            class: n([e.modelValue ? "font-medium" : "text-oc-text-300", "outline-none text-center max-w-[calc(100%-76px)] bg-transparent"]),
            placeholder: "1",
            onKeydown: p,
            onInput: a[0] || (a[0] = (b) => t.$emit("update:modelValue", b.target.value))
          }, null, 42, h),
          s(l(u), {
            variant: "secondary",
            class: "w-[28px] shrink-0 aspect-square",
            size: "small",
            "icon-class": "shrink-0",
            "is-disabled": e.isDisabled,
            "left-icon": "plus",
            onClick: d
          }, null, 8, ["is-disabled"])
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "tooltip-options", "error-message", "hint", "label-icon", "is-required", "tooltip-text"]));
  }
});
export {
  R as _
};
