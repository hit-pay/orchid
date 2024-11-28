import { openBlock as t, createBlock as l, unref as o, normalizeClass as a, withCtx as n, createElementVNode as u, createElementBlock as d, createCommentVNode as i, renderSlot as c, toDisplayString as m, normalizeProps as h, mergeProps as x, createVNode as B } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as b } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { z as V } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { q as y } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const f = ["id", "value", "checked", "name", "disabled"], k = ["for"], S = {
  key: 0,
  class: "px-3 py-2 whitespace-nowrap"
}, z = {
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
    return (r, s) => (t(), l(o(V), {
      class: a(["radio-button inline-block relative cursor-pointer", e.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: n(() => [
        u("input", {
          id: e.groupName + e.id,
          value: e.modelValue,
          checked: e.checked,
          name: e.groupName,
          disabled: e.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: s[0] || (s[0] = (g) => r.$emit("update:modelValue", g.target.value))
        }, null, 40, f),
        u("label", {
          for: e.groupName + e.id,
          class: a(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": e.isDisabled,
            "bg-gray-200": e.isDisabled && e.isButtonVariant,
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": e.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": e.isButtonVariantWithRadio
          }])
        }, [
          !e.isButtonVariant || e.isButtonVariantWithRadio ? (t(), d("span", {
            key: 0,
            class: a(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              e.isDisabled || !e.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              e.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : i("", !0),
          e.icon ? (t(), l(o(b), {
            key: 1,
            class: a(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": e.isDisabled }]),
            name: e.icon
          }, null, 8, ["class", "name"])) : i("", !0),
          c(r.$slots, "default", {}, () => [
            e.label ? (t(), d("span", {
              key: 0,
              class: a({ "text-sm": !e.isButtonVariantWithRadio })
            }, m(e.label), 3)) : i("", !0)
          ]),
          e.labelIcon ? (t(), l(o(y), h(x({ key: 2 }, e.tooltipOptions)), {
            popper: n(() => [
              c(r.$slots, "tooltipText", {}, () => [
                e.tooltipText ? (t(), d("div", S, m(e.tooltipText), 1)) : i("", !0)
              ])
            ]),
            default: n(() => [
              B(o(b), {
                width: "16",
                height: "16",
                name: e.labelIcon,
                class: "text-oc-text-400"
              }, null, 8, ["name"])
            ]),
            _: 3
          }, 16)) : i("", !0)
        ], 10, k)
      ]),
      _: 3
    }, 8, ["class", "error-message", "hint"]));
  }
};
export {
  z as _
};
