import { ref as d, onMounted as V, openBlock as c, createElementBlock as g, createVNode as u, unref as o, withCtx as x, createElementVNode as S, createCommentVNode as h } from "vue";
import "dayjs";
import { _ as I } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as N } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
import { S as M } from "./OcSlider-Bsi-ckbP.js";
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const k = { class: "flex flex-col gap-y-2 oc-range-input" }, L = { class: "flex gap-x-3" }, B = {
  key: 0,
  class: "flex pt-4"
}, J = {
  __name: "OcRangeInput",
  props: {
    maxLimit: {
      type: [String, Number],
      default: 1e4
    },
    minLimit: {
      type: [String, Number],
      default: 0
    },
    minGap: {
      type: [String, Number],
      default: 0
    },
    modelValue: {
      type: [Array, String]
    },
    label: {
      type: String,
      default: "Amount"
    },
    hint: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: String,
      default: ""
    },
    onlyInput: Boolean
  },
  emits: {
    "update:modelValue": []
  },
  setup(t, { emit: b }) {
    var f, v;
    const m = t, p = b, e = d(((f = m.modelValue) == null ? void 0 : f[0]) ?? ""), l = d(((v = m.modelValue) == null ? void 0 : v[1]) ?? ""), r = d(), s = (a, i) => {
      isNaN(a) || (i === 1 ? l.value = Number(a) : e.value = Number(a), m.onlyInput ? (e.value > l.value && (l.value = e.value), l.value < e.value && (e.value = l.value), p("update:modelValue", [e.value, l.value])) : r.value.updateSlider([e.value, l.value]));
    }, y = (a) => {
      isNaN(a[0]) || isNaN(a[1]) || (e.value = Number(a[0]), l.value = Number(a[1]), p("update:modelValue", [Number(e.value), Number(l.value)]));
    };
    return V(() => {
      m.onlyInput || r.value.updateSlider();
    }), (a, i) => (c(), g("div", k, [
      u(o(I), {
        label: t.label,
        hint: t.hint,
        "error-message": t.errorMessage
      }, {
        default: x(() => [
          S("div", L, [
            u(o(N), {
              "model-value": e.value,
              label: "From",
              "is-inline-label": "",
              placeholder: "",
              "onUpdate:modelValue": i[0] || (i[0] = (n) => s(n, 0))
            }, null, 8, ["model-value"]),
            u(o(N), {
              "model-value": l.value,
              label: "To",
              "is-inline-label": "",
              placeholder: "",
              "onUpdate:modelValue": i[1] || (i[1] = (n) => s(n, 1))
            }, null, 8, ["model-value"])
          ]),
          t.onlyInput ? h("", !0) : (c(), g("div", B, [
            u(o(M), {
              ref_key: "slider",
              ref: r,
              type: "range",
              "max-limit": t.maxLimit,
              "min-limit": t.minLimit,
              "min-gap": t.minGap,
              "model-value": [Number(e.value), Number(l.value)],
              "onUpdate:modelValue": y
            }, null, 8, ["max-limit", "min-limit", "min-gap", "model-value"])
          ]))
        ]),
        _: 1
      }, 8, ["label", "hint", "error-message"])
    ]));
  }
};
export {
  J as _
};
