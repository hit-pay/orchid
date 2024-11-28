import { ref as d, onMounted as V, openBlock as c, createElementBlock as g, createVNode as m, unref as o, withCtx as x, createElementVNode as S, createCommentVNode as h } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { z as I } from "./OcBaseInput-ezd9ky5M-NyawiPzv.js";
import { d as N } from "./OcInputOption-D9DTYAD7-BrCoHHb9.js";
import { K as M } from "./OcSlider-DSFHUyqz-Dm0eXdQ5.js";
const k = { class: "flex flex-col gap-y-2 oc-range-input" }, L = { class: "flex gap-x-3" }, B = {
  key: 0,
  class: "flex pt-4"
}, O = {
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
    var v, f;
    const i = t, s = b, e = d(((v = i.modelValue) == null ? void 0 : v[0]) ?? ""), l = d(((f = i.modelValue) == null ? void 0 : f[1]) ?? ""), n = d(), p = (a, u) => {
      isNaN(a) || (u === 1 ? l.value = Number(a) : e.value = Number(a), i.onlyInput ? (e.value > l.value && (l.value = e.value), l.value < e.value && (e.value = l.value), s("update:modelValue", [e.value, l.value])) : n.value.updateSlider([e.value, l.value]));
    }, y = (a) => {
      isNaN(a[0]) || isNaN(a[1]) || (e.value = Number(a[0]), l.value = Number(a[1]), s("update:modelValue", [Number(e.value), Number(l.value)]));
    };
    return V(() => {
      i.onlyInput || n.value.updateSlider();
    }), (a, u) => (c(), g("div", k, [
      m(o(I), {
        label: t.label,
        hint: t.hint,
        "error-message": t.errorMessage
      }, {
        default: x(() => [
          S("div", L, [
            m(o(N), {
              "model-value": e.value,
              label: "From",
              "is-inline-label": "",
              placeholder: "",
              "onUpdate:modelValue": u[0] || (u[0] = (r) => p(r, 0))
            }, null, 8, ["model-value"]),
            m(o(N), {
              "model-value": l.value,
              label: "To",
              "is-inline-label": "",
              placeholder: "",
              "onUpdate:modelValue": u[1] || (u[1] = (r) => p(r, 1))
            }, null, 8, ["model-value"])
          ]),
          t.onlyInput ? h("", !0) : (c(), g("div", B, [
            m(o(M), {
              ref_key: "slider",
              ref: n,
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
  O as _
};
