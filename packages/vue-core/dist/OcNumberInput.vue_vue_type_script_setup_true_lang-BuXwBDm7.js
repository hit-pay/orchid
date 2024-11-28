import { defineComponent as f, openBlock as g, createBlock as x, unref as i, withCtx as V, createElementVNode as n, normalizeClass as r, createVNode as s } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { z as k } from "./OcBaseInput-ezd9ky5M-NyawiPzv.js";
import { q as u } from "./OcButton-CgGNGzWP-CIpgruq1.js";
const h = ["value"], D = /* @__PURE__ */ f({
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
    const l = e, o = m, d = () => o("update:modelValue", Number(l.modelValue) + 1), c = () => {
      Number(l.modelValue) > l.minValue && o("update:modelValue", Number(l.modelValue) - 1);
    }, b = (t) => {
      t.key >= "0" && t.key <= "9" || t.key === "Backspace" || t.preventDefault();
    };
    return (t, a) => (g(), x(i(k), {
      label: e.label,
      "tooltip-options": e.tooltipOptions,
      "error-message": e.errorMessage,
      hint: e.hint,
      "label-icon": e.labelIcon,
      "is-required": e.isRequired,
      "tooltip-text": e.tooltipText
    }, {
      default: V(() => [
        n("div", {
          class: r(["flex justify-between gap-x-3 h-[36px] items-center border rounded px-1", [
            e.inputClass,
            e.isDisabled ? "bg-oc-bg-dark" : "",
            e.errorMessage ? "border-oc-error" : "border-oc-gray-200"
          ]])
        }, [
          s(i(u), {
            variant: "secondary",
            class: "w-[28px] shrink-0 aspect-square",
            size: "small",
            "icon-class": "shrink-0",
            "is-disabled": e.isDisabled,
            "left-icon": "minus",
            onClick: c
          }, null, 8, ["is-disabled"]),
          n("input", {
            value: e.modelValue,
            class: r([e.modelValue ? "font-medium" : "text-oc-text-300", "outline-none text-center max-w-[calc(100%-76px)] bg-transparent"]),
            placeholder: "1",
            onKeydown: b,
            onInput: a[0] || (a[0] = (p) => t.$emit("update:modelValue", p.target.value))
          }, null, 42, h),
          s(i(u), {
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
  D as _
};
