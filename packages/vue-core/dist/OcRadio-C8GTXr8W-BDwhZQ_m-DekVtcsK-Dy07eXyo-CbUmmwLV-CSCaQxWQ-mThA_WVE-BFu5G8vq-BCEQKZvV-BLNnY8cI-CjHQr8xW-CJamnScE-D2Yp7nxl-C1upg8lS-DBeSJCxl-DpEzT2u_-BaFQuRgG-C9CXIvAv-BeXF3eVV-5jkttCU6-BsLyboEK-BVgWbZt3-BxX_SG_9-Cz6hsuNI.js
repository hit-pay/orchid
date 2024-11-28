import { openBlock as o, createBlock as l, unref as t, normalizeClass as a, withCtx as n, createElementVNode as p, createElementBlock as s, createCommentVNode as r, renderSlot as c, toDisplayString as u, normalizeProps as g, mergeProps as x, createVNode as h } from "vue";
import "dayjs";
import { b as V, A as m, k as B } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
const k = ["id", "value", "checked", "name", "disabled"], y = ["for"], _ = {
  key: 0,
  class: "px-3 py-2 whitespace-nowrap"
}, I = {
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
  setup(e) {
    return (i, d) => (o(), l(t(V), {
      class: a(["radio-button inline-block relative cursor-pointer", e.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: n(() => [
        p("input", {
          id: e.groupName + e.id,
          value: e.modelValue,
          checked: e.checked,
          name: e.groupName,
          disabled: e.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: d[0] || (d[0] = (b) => i.$emit("update:modelValue", b.target.value))
        }, null, 40, k),
        p("label", {
          for: e.groupName + e.id,
          class: a(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": e.isDisabled,
            "bg-gray-200": e.isDisabled && e.isButtonVariant,
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": e.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": e.isButtonVariantWithRadio
          }])
        }, [
          !e.isButtonVariant || e.isButtonVariantWithRadio ? (o(), s("span", {
            key: 0,
            class: a(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              e.isDisabled || !e.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              e.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : r("", !0),
          e.icon ? (o(), l(t(m), {
            key: 1,
            class: a(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": e.isDisabled }]),
            name: e.icon
          }, null, 8, ["class", "name"])) : r("", !0),
          c(i.$slots, "default", {}, () => [
            e.label ? (o(), s("span", {
              key: 0,
              class: a({ "text-sm": !e.isButtonVariantWithRadio })
            }, u(e.label), 3)) : r("", !0)
          ]),
          e.labelIcon ? (o(), l(t(B), g(x({ key: 2 }, e.tooltipOptions)), {
            popper: n(() => [
              c(i.$slots, "tooltipText", {}, () => [
                e.tooltipText ? (o(), s("div", _, u(e.tooltipText), 1)) : r("", !0)
              ])
            ]),
            default: n(() => [
              h(t(m), {
                width: "16",
                height: "16",
                name: e.labelIcon,
                class: "text-oc-text-400"
              }, null, 8, ["name"])
            ]),
            _: 3
          }, 16)) : r("", !0)
        ], 10, y)
      ]),
      _: 3
    }, 8, ["class", "error-message", "hint"]));
  }
};
export {
  I as R
};
