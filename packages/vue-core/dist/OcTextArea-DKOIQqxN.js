import { ref as s, openBlock as d, createBlock as u, unref as m, withCtx as p, createElementVNode as c, normalizeClass as b } from "vue";
import "dayjs";
import { _ as g } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
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
const h = ["disabled", "value", "rows", "placeholder"], f = "18px", N = {
  __name: "OcTextArea",
  props: {
    placeholder: String,
    label: String,
    errorMessage: String,
    hint: String,
    modelValue: String,
    rows: Number,
    autoResize: Boolean,
    isDisabled: Boolean,
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
  setup(e, { emit: l }) {
    const i = l, o = s(!1), a = (r) => {
      const t = r.target;
      t && (t.style.height = f, t.style.height = t.scrollHeight + "px", i("update:modelValue", t.value));
    };
    return (r, t) => (d(), u(m(g), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, {
      default: p(() => [
        c("textarea", {
          class: b(["outline-none p-3 min-h-[120px] rounded border resize-none disabled:bg-oc-bg-dark", [
            o.value ? "shadow-[0_0_0_2px]" : "",
            e.errorMessage ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200"
          ]]),
          disabled: e.isDisabled,
          value: e.modelValue,
          rows: e.rows,
          placeholder: e.placeholder,
          onInput: a,
          onFocus: t[0] || (t[0] = (n) => o.value = !0),
          onBlur: t[1] || (t[1] = (n) => o.value = !1)
        }, null, 42, h)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
};
export {
  N as _
};
