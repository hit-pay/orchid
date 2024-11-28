import { computed as b, openBlock as t, createBlock as i, unref as l, withCtx as g, createElementVNode as o, normalizeClass as a, createCommentVNode as s, createElementBlock as y, toDisplayString as h, renderSlot as V } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as x } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { z as f } from "./OcBaseInput-ezd9ky5M-NyawiPzv.js";
const k = ["value", "checked", "disabled"], E = {
  __name: "OcCheckbox",
  props: {
    modelValue: Boolean,
    isPartial: Boolean,
    isDisabled: Boolean,
    label: String,
    topLabel: String,
    hint: String,
    errorMessage: String,
    isButtonVariant: Boolean
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: n }) {
    const r = e, c = n, d = b(() => [
      r.modelValue ? r.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : r.errorMessage ? "border-oc-error" : r.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      r.errorMessage && r.modelValue && !r.isDisabled ? "!bg-oc-error" : "",
      r.errorMessage && !r.isDisabled ? "!border-oc-error" : "",
      r.isPartial ? r.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), m = () => c("update:modelValue", r.isDisabled ? "" : !r.modelValue);
    return (u, B) => (t(), i(l(f), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: g(() => [
        o("label", {
          class: a(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          o("div", {
            class: a(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", d.value])
          }, [
            e.isPartial || e.modelValue ? (t(), i(l(x), {
              key: 0,
              class: a([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : s("", !0)
          ], 2),
          e.label ? (t(), y("span", {
            key: 0,
            class: a({ "text-sm": !e.isButtonVariant })
          }, h(e.label), 3)) : s("", !0),
          o("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: m
          }, null, 40, k),
          V(u.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
};
export {
  E as _
};
