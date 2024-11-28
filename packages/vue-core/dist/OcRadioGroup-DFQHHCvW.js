import { openBlock as a, createBlock as n, unref as i, normalizeClass as o, withCtx as d, createElementVNode as m, createElementBlock as u, createCommentVNode as l, renderSlot as b, toDisplayString as g, normalizeProps as V, mergeProps as f, createVNode as y, computed as k, Fragment as v, renderList as S } from "vue";
import "dayjs";
import { m as h } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { z as w } from "./OcBaseInput-ezd9ky5M-NyawiPzv.js";
import { z as N } from "./OcBaseInput-Bc5AUiVI-CDGfnnZp-CyqZk-kF.js";
import { M as D } from "./OcTooltip-DBif_2H1-B-R8nPrI-BM5y6FC0.js";
const z = ["id", "value", "checked", "name", "disabled"], M = ["for"], R = {
  key: 0,
  class: "px-3 py-2 whitespace-nowrap"
}, C = {
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
    return (r, s) => (a(), n(i(N), {
      class: o(["radio-button inline-block relative cursor-pointer", t.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": t.errorMessage,
      hint: t.hint
    }, {
      default: d(() => [
        m("input", {
          id: t.groupName + t.id,
          value: t.modelValue,
          checked: t.checked,
          name: t.groupName,
          disabled: t.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: s[0] || (s[0] = (c) => r.$emit("update:modelValue", c.target.value))
        }, null, 40, z),
        m("label", {
          for: t.groupName + t.id,
          class: o(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": t.isDisabled,
            "bg-gray-200": t.isDisabled && t.isButtonVariant,
            "!border-oc-error": t.errorMessage && t.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": t.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": t.isButtonVariantWithRadio
          }])
        }, [
          !t.isButtonVariant || t.isButtonVariantWithRadio ? (a(), u("span", {
            key: 0,
            class: o(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              t.isDisabled || !t.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              t.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : l("", !0),
          t.icon ? (a(), n(i(h), {
            key: 1,
            class: o(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": t.isDisabled }]),
            name: t.icon
          }, null, 8, ["class", "name"])) : l("", !0),
          b(r.$slots, "default", {}, () => [
            t.label ? (a(), u("span", {
              key: 0,
              class: o({ "text-sm": !t.isButtonVariantWithRadio })
            }, g(t.label), 3)) : l("", !0)
          ]),
          t.labelIcon ? (a(), n(i(D), V(f({ key: 2 }, t.tooltipOptions)), {
            popper: d(() => [
              b(r.$slots, "tooltipText", {}, () => [
                t.tooltipText ? (a(), u("div", R, g(t.tooltipText), 1)) : l("", !0)
              ])
            ]),
            default: d(() => [
              y(i(h), {
                width: "16",
                height: "16",
                name: t.labelIcon,
                class: "text-oc-text-400"
              }, null, 8, ["name"])
            ]),
            _: 3
          }, 16)) : l("", !0)
        ], 10, M)
      ]),
      _: 3
    }, 8, ["class", "error-message", "hint"]));
  }
}, L = {
  __name: "OcRadioGroup",
  props: {
    alignment: {
      type: String,
      default: "vertical"
    },
    radio: Array,
    label: String,
    wrapperClass: String,
    groupName: String,
    errorMessage: String,
    hint: String,
    modelValue: String,
    isButtonVariant: Boolean,
    isButtonVariantWithRadio: Boolean,
    isBlock: Boolean
  },
  emits: {
    "update:modelValue": []
  },
  setup(t, { emit: r }) {
    const s = r, c = k(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), x = (p) => {
      s("update:modelValue", p);
    };
    return (p, I) => (a(), n(i(w), {
      label: t.label,
      "error-message": t.errorMessage,
      hint: t.hint
    }, {
      default: d(() => [
        m("div", {
          class: o(["flex", [c.value[t.alignment], t.wrapperClass]])
        }, [
          (a(!0), u(v, null, S(t.radio, (e, B) => (a(), n(i(C), {
            id: e.value,
            key: B,
            class: o({ "!w-fit": !t.isBlock }),
            "model-value": e.value,
            label: e.label,
            icon: e.icon,
            "is-error": !!t.errorMessage,
            checked: e.value === t.modelValue,
            "is-disabled": !!e.isDisabled,
            "group-name": t.groupName,
            "tooltip-text": e.tooltipText,
            "label-icon": e.labelIcon,
            "tooltip-options": e.tooltipOptions,
            "is-button-variant": t.isButtonVariant,
            "is-button-variant-with-radio": t.isButtonVariantWithRadio,
            "onUpdate:modelValue": x
          }, null, 8, ["id", "class", "model-value", "label", "icon", "is-error", "checked", "is-disabled", "group-name", "tooltip-text", "label-icon", "tooltip-options", "is-button-variant", "is-button-variant-with-radio"]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint"]));
  }
};
export {
  L as _
};
