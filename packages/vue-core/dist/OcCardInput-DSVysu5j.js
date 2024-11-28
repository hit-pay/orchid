import { openBlock as a, createBlock as n, unref as l, withCtx as r, createElementVNode as d, createVNode as m } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as s } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { d as u } from "./OcInputOption-rY2kKCL8-Ce2jETq4.js";
const c = { class: "w-[30px] h-[20px] flex items-center justify-center" }, B = {
  __name: "OcCardInput",
  props: {
    placeholder: String,
    hint: String,
    label: String,
    errorMessage: String,
    cardType: String,
    isInlineLabel: Boolean,
    isDisabled: Boolean,
    modelValue: String,
    isRequired: {
      type: Boolean,
      default: !1
    },
    labelIcon: {
      type: String,
      default: ""
    },
    tooltipText: {
      type: String,
      default: ""
    },
    tooltipOptions: {
      type: Object,
      default: () => ({})
    }
  },
  emits: {
    "update:modelValue": []
  },
  setup(e) {
    return (i, t) => (a(), n(l(u), {
      placeholder: e.placeholder,
      label: e.label,
      "error-message": e.errorMessage,
      "is-inline-label": e.isInlineLabel,
      disabled: e.isDisabled,
      hint: e.hint,
      "model-value": e.modelValue,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => i.$emit("update:modelValue", o))
    }, {
      icon: r(() => [
        d("div", c, [
          m(l(s), {
            name: `payment-methods/${e.cardType}`,
            width: "20",
            height: "12"
          }, null, 8, ["name"])
        ])
      ]),
      _: 1
    }, 8, ["placeholder", "label", "error-message", "is-inline-label", "disabled", "hint", "model-value", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
};
export {
  B as _
};
