import { openBlock as o, createBlock as l, unref as r, normalizeClass as e, withCtx as n, createElementVNode as p, createElementBlock as s, createCommentVNode as a, renderSlot as c, toDisplayString as u, normalizeProps as g, mergeProps as x, createVNode as h } from "vue";
import "dayjs";
import { f as B, B as m, b as y } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
const V = ["id", "value", "checked", "name", "disabled"], k = ["for"], _ = {
  key: 0,
  class: "px-3 py-2 whitespace-nowrap"
}, R = {
  __name: "OcRadio",
  props: {
    modelValue: [String, Boolean],
    isDisabled: Boolean,
    checked: Boolean,
    label: String,
    id: [String, Number],
    groupName: String,
    errorMessage: String,
    hint: String,
    tooltipText: String,
    labelIcon: String,
    tooltipOptions: Object,
    isButtonVariant: Boolean,
    isButtonVariantWithRadio: Boolean,
    icon: String
  },
  emits: {
    "update:modelValue": []
  },
  setup(t) {
    return (i, d) => (o(), l(r(B), {
      class: e(["radio-button inline-block relative cursor-pointer", t.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": t.errorMessage,
      hint: t.hint
    }, {
      default: n(() => [
        p("input", {
          id: t.groupName + t.id,
          value: t.modelValue,
          checked: t.checked,
          name: t.groupName,
          disabled: t.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: d[0] || (d[0] = (b) => i.$emit("update:modelValue", b.target.value))
        }, null, 40, V),
        p("label", {
          for: t.groupName + t.id,
          class: e(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": t.isDisabled,
            "bg-gray-200": t.isDisabled && t.isButtonVariant,
            "!border-oc-error": t.errorMessage && t.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": t.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": t.isButtonVariantWithRadio
          }])
        }, [
          !t.isButtonVariant || t.isButtonVariantWithRadio ? (o(), s("span", {
            key: 0,
            class: e(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              t.isDisabled || !t.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              t.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : a("", !0),
          t.icon ? (o(), l(r(m), {
            key: 1,
            class: e(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": t.isDisabled }]),
            name: t.icon
          }, null, 8, ["class", "name"])) : a("", !0),
          c(i.$slots, "default", {}, () => [
            t.label ? (o(), s("span", {
              key: 0,
              class: e({ "text-sm": !t.isButtonVariantWithRadio })
            }, u(t.label), 3)) : a("", !0)
          ]),
          t.labelIcon ? (o(), l(r(y), g(x({ key: 2 }, t.tooltipOptions)), {
            popper: n(() => [
              c(i.$slots, "tooltipText", {}, () => [
                t.tooltipText ? (o(), s("div", _, u(t.tooltipText), 1)) : a("", !0)
              ])
            ]),
            default: n(() => [
              h(r(m), {
                width: "16",
                height: "16",
                name: t.labelIcon,
                class: "text-oc-text-400"
              }, null, 8, ["name"])
            ]),
            _: 3
          }, 16)) : a("", !0)
        ], 10, k)
      ]),
      _: 3
    }, 8, ["class", "error-message", "hint"]));
  }
};
export {
  R as I
};
