import { computed as b, openBlock as o, createBlock as t, unref as l, withCtx as u, createElementVNode as i, normalizeClass as a, createCommentVNode as s, createElementBlock as g, toDisplayString as y, renderSlot as h } from "vue";
import "dayjs";
import { m as V } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { z as x } from "./OcBaseInput-ezd9ky5M-NyawiPzv-DsD_1lit.js";
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
  setup(r, { emit: n }) {
    const e = r, d = n, c = b(() => [
      e.modelValue ? e.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : e.errorMessage ? "border-oc-error" : e.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      e.errorMessage && e.modelValue && !e.isDisabled ? "!bg-oc-error" : "",
      e.errorMessage && !e.isDisabled ? "!border-oc-error" : "",
      e.isPartial ? e.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), m = () => d("update:modelValue", e.isDisabled ? "" : !e.modelValue);
    return (p, B) => (o(), t(l(x), {
      class: "w-fit",
      label: r.topLabel,
      hint: r.hint,
      "error-message": r.errorMessage
    }, {
      default: u(() => [
        i("label", {
          class: a(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": r.errorMessage && r.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": r.isButtonVariant,
            "border-oc-primary-500": r.modelValue
          }])
        }, [
          i("div", {
            class: a(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", c.value])
          }, [
            r.isPartial || r.modelValue ? (o(), t(l(V), {
              key: 0,
              class: a([
                "w-4 h-4",
                r.isPartial ? r.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: r.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : s("", !0)
          ], 2),
          r.label ? (o(), g("span", {
            key: 0,
            class: a({ "text-sm": !r.isButtonVariant })
          }, y(r.label), 3)) : s("", !0),
          i("input", {
            value: r.modelValue,
            type: "checkbox",
            checked: r.modelValue,
            class: "h-0 w-0 hidden",
            disabled: r.isDisabled,
            onChange: m
          }, null, 40, k),
          h(p.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
};
export {
  E
};
