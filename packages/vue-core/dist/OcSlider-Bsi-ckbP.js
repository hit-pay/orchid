import { ref as f, onMounted as G, openBlock as m, createElementBlock as o, createElementVNode as s, toDisplayString as d, createCommentVNode as x, normalizeClass as z, normalizeStyle as V, renderSlot as S, createTextVNode as $ } from "vue";
/* empty css                                                                  */
import { _ as O } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const C = { class: "w-full flex flex-wrap" }, B = {
  key: 0,
  class: "w-full text-sm flex items-center gap-x-3 font-medium text-oc-text-400 mb-2"
}, E = { class: "flex gap-x-1 items-center" }, j = ["min", "max", "value"], A = ["min", "max", "value"], D = { class: "absolute bottom-0 left-0" }, M = { class: "absolute bottom-0 right-0" }, q = {
  key: 1,
  class: "border border-oc-gray-200 rounded-lg ml-auto w-[11%] flex items-center -mt-4 justify-center"
}, F = {
  __name: "OcSlider",
  props: {
    maxLimit: {
      type: Number,
      default: 100
    },
    minLimit: {
      type: Number,
      default: 0
    },
    minGap: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "default"
    },
    modelValue: {
      type: [Array, Number, String],
      default: 0
    },
    label: String,
    variant: {
      type: String,
      default: "default"
    }
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { expose: I, emit: N }) {
    const t = e, T = N, l = f(), n = f(), p = f(), u = f(0), y = f(0), b = () => {
      var a, i;
      t.type === "range" && parseInt((a = n.value) == null ? void 0 : a.value) - parseInt((i = l.value) == null ? void 0 : i.value) <= t.minGap && (l.value.value = parseInt(n.value.value) - t.minGap), g();
    }, h = () => {
      var a, i, r;
      parseInt((a = n.value) == null ? void 0 : a.value) - parseInt((i = l.value) == null ? void 0 : i.value) <= t.minGap && (n.value.value = parseInt((r = l.value) == null ? void 0 : r.value) + t.minGap), g();
    }, g = (a = !1) => {
      var i, r, c, v;
      u.value = (((i = l.value) == null ? void 0 : i.value) - t.minLimit) / (t.maxLimit - t.minLimit) * 100, y.value = t.type === "range" ? (((r = n.value) == null ? void 0 : r.value) - t.minLimit) / (t.maxLimit - t.minLimit) * 100 : 0, p.value.style.background = t.type === "range" ? `linear-gradient(to right, var(--oc-gray-100) ${u.value}% , var(--oc-primary-500) ${u.value}% , var(--oc-primary-500) ${y.value}%, var(--oc-gray-100) ${y.value}%)` : `linear-gradient(to right, var(--oc-primary-500) ${u.value}%, var(--oc-gray-100) ${u.value}%)`, a || T(
        "update:modelValue",
        t.type === "range" ? [(c = l.value) == null ? void 0 : c.value, (v = n.value) == null ? void 0 : v.value] : l.value.value
      );
    }, k = (a) => {
      a && a[0] && a[1] && t.type === "range" ? (l.value.value = Number(a[0]), n.value.value = Number(a[1]), b(), t.type === "range" && h()) : g(!0);
    };
    return I({
      updateSlider: k
    }), G(() => k()), (a, i) => {
      var r, c, v, w, L;
      return m(), o("div", C, [
        e.label ? (m(), o("label", B, [
          s("span", E, d(e.label), 1)
        ])) : x("", !0),
        s("div", {
          class: z(["relative h-[33px]", {
            "w-full": e.variant === "default",
            "w-[85%]": e.variant === "right"
          }])
        }, [
          s("div", {
            ref_key: "sliderTrack",
            ref: p,
            class: "rounded-full h-3 absolute m-auto top-0 w-full group"
          }, null, 512),
          s("input", {
            ref_key: "sliderOne",
            ref: l,
            type: "range",
            min: e.minLimit,
            max: e.maxLimit,
            value: e.type === "range" ? (r = e.modelValue) == null ? void 0 : r[0] : e.modelValue,
            onInput: b
          }, null, 40, j),
          e.type === "range" ? (m(), o("input", {
            key: 0,
            ref_key: "sliderTwo",
            ref: n,
            type: "range",
            min: e.minLimit,
            max: e.maxLimit,
            value: (c = e.modelValue) == null ? void 0 : c[1],
            onInput: h
          }, null, 40, A)) : x("", !0),
          e.variant === "default" ? (m(), o("div", {
            key: 1,
            class: "group-hover:block absolute top-[1rem] z-[1] -translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]",
            style: V(`left: ${u.value}%`)
          }, d(e.type === "range" ? (v = e.modelValue) == null ? void 0 : v[0] : e.modelValue), 5)) : x("", !0),
          e.type === "range" ? (m(), o("div", {
            key: 2,
            class: "group-hover:block absolute top-[1rem] z-[1] translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]",
            style: V(`right: ${100 - y.value}%`)
          }, d((w = e.modelValue) == null ? void 0 : w[1]), 5)) : x("", !0),
          s("span", D, [
            S(a.$slots, "min-limit-label", {}, () => [
              $(d(e.minLimit), 1)
            ], !0)
          ]),
          s("span", M, [
            S(a.$slots, "max-limit-label", {}, () => [
              $(d(e.maxLimit), 1)
            ], !0)
          ])
        ], 2),
        e.variant === "right" ? (m(), o("div", q, d(e.type === "range" ? (L = e.modelValue) == null ? void 0 : L[0] : e.modelValue), 1)) : x("", !0)
      ]);
    };
  }
}, P = /* @__PURE__ */ O(F, [["__scopeId", "data-v-43a77a49"]]);
export {
  P as S
};
