import { openBlock as a, createBlock as r, unref as i, withCtx as n, createElementVNode as m, createVNode as d } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as s } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as p } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const c = { class: "w-[30px] h-[20px] flex items-center justify-center" }, j = {
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
    return (l, t) => (a(), r(i(p), {
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
      "onUpdate:modelValue": t[0] || (t[0] = (o) => l.$emit("update:modelValue", o))
    }, {
      icon: n(() => [
        m("div", c, [
          d(i(s), {
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
  j as _
};
