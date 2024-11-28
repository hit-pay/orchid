import { openBlock as e, createBlock as l, unref as o, normalizeClass as i, withCtx as n, createElementVNode as u, createElementBlock as d, createCommentVNode as a, renderSlot as m, toDisplayString as c, normalizeProps as h, mergeProps as x, createVNode as B } from "vue";
import "dayjs";
import { _ as V, T as y } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as b } from "./OcIcon-CJgBICxh.js";
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
const f = ["id", "value", "checked", "name", "disabled"], k = ["for"], S = {
  key: 0,
  class: "px-3 py-2 whitespace-nowrap"
}, q = {
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
    return (r, s) => (e(), l(o(V), {
      class: i(["radio-button inline-block relative cursor-pointer", t.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": t.errorMessage,
      hint: t.hint
    }, {
      default: n(() => [
        u("input", {
          id: t.groupName + t.id,
          value: t.modelValue,
          checked: t.checked,
          name: t.groupName,
          disabled: t.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: s[0] || (s[0] = (g) => r.$emit("update:modelValue", g.target.value))
        }, null, 40, f),
        u("label", {
          for: t.groupName + t.id,
          class: i(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": t.isDisabled,
            "bg-gray-200": t.isDisabled && t.isButtonVariant,
            "!border-oc-error": t.errorMessage && t.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": t.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": t.isButtonVariantWithRadio
          }])
        }, [
          !t.isButtonVariant || t.isButtonVariantWithRadio ? (e(), d("span", {
            key: 0,
            class: i(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              t.isDisabled || !t.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              t.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : a("", !0),
          t.icon ? (e(), l(o(b), {
            key: 1,
            class: i(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": t.isDisabled }]),
            name: t.icon
          }, null, 8, ["class", "name"])) : a("", !0),
          m(r.$slots, "default", {}, () => [
            t.label ? (e(), d("span", {
              key: 0,
              class: i({ "text-sm": !t.isButtonVariantWithRadio })
            }, c(t.label), 3)) : a("", !0)
          ]),
          t.labelIcon ? (e(), l(o(y), h(x({ key: 2 }, t.tooltipOptions)), {
            popper: n(() => [
              m(r.$slots, "tooltipText", {}, () => [
                t.tooltipText ? (e(), d("div", S, c(t.tooltipText), 1)) : a("", !0)
              ])
            ]),
            default: n(() => [
              B(o(b), {
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
  q as _
};
