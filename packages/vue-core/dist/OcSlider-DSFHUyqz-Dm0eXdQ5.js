import { ref as x, onMounted as G, openBlock as m, createElementBlock as o, createElementVNode as v, toDisplayString as p, createCommentVNode as y, normalizeClass as z, normalizeStyle as w, renderSlot as $, createTextVNode as I } from "vue";
import { s as B } from "./_plugin-vue_export-helper-CHgC5LLL-BmOybl0N.js";
const C = { class: "w-full flex flex-wrap" }, E = {
  key: 0,
  class: "w-full text-sm flex items-center gap-x-3 font-medium text-oc-text-400 mb-2"
}, O = { class: "flex gap-x-1 items-center" }, T = ["min", "max", "value"], j = ["min", "max", "value"], A = { class: "absolute bottom-0 left-0" }, D = { class: "absolute bottom-0 right-0" }, M = {
  key: 1,
  class: "border border-oc-gray-200 rounded-lg ml-auto w-[11%] flex items-center -mt-4 justify-center"
}, q = {
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
  setup(e, { expose: N, emit: S }) {
    const l = e, _ = S, t = x(), i = x(), f = x(), n = x(0), c = x(0), b = () => {
      var a, u;
      l.type === "range" && parseInt((a = i.value) == null ? void 0 : a.value) - parseInt((u = t.value) == null ? void 0 : u.value) <= l.minGap && (t.value.value = parseInt(i.value.value) - l.minGap), g();
    }, k = () => {
      var a, u, r;
      parseInt((a = i.value) == null ? void 0 : a.value) - parseInt((u = t.value) == null ? void 0 : u.value) <= l.minGap && (i.value.value = parseInt((r = t.value) == null ? void 0 : r.value) + l.minGap), g();
    }, g = (a = !1) => {
      var u, r, d, s;
      n.value = (((u = t.value) == null ? void 0 : u.value) - l.minLimit) / (l.maxLimit - l.minLimit) * 100, c.value = l.type === "range" ? (((r = i.value) == null ? void 0 : r.value) - l.minLimit) / (l.maxLimit - l.minLimit) * 100 : 0, f.value.style.background = l.type === "range" ? `linear-gradient(to right, var(--oc-gray-100) ${n.value}% , var(--oc-primary-500) ${n.value}% , var(--oc-primary-500) ${c.value}%, var(--oc-gray-100) ${c.value}%)` : `linear-gradient(to right, var(--oc-primary-500) ${n.value}%, var(--oc-gray-100) ${n.value}%)`, a || _(
        "update:modelValue",
        l.type === "range" ? [(d = t.value) == null ? void 0 : d.value, (s = i.value) == null ? void 0 : s.value] : t.value.value
      );
    }, L = (a) => {
      a && a[0] && a[1] && l.type === "range" ? (t.value.value = Number(a[0]), i.value.value = Number(a[1]), b(), l.type === "range" && k()) : g(!0);
    };
    return N({
      updateSlider: L
    }), G(() => L()), (a, u) => {
      var r, d, s, V, h;
      return m(), o("div", C, [
        e.label ? (m(), o("label", E, [
          v("span", O, p(e.label), 1)
        ])) : y("", !0),
        v("div", {
          class: z(["relative h-[33px]", {
            "w-full": e.variant === "default",
            "w-[85%]": e.variant === "right"
          }])
        }, [
          v("div", {
            ref_key: "sliderTrack",
            ref: f,
            class: "rounded-full h-3 absolute m-auto top-0 w-full group"
          }, null, 512),
          v("input", {
            ref_key: "sliderOne",
            ref: t,
            type: "range",
            min: e.minLimit,
            max: e.maxLimit,
            value: e.type === "range" ? (r = e.modelValue) == null ? void 0 : r[0] : e.modelValue,
            onInput: b
          }, null, 40, T),
          e.type === "range" ? (m(), o("input", {
            key: 0,
            ref_key: "sliderTwo",
            ref: i,
            type: "range",
            min: e.minLimit,
            max: e.maxLimit,
            value: (d = e.modelValue) == null ? void 0 : d[1],
            onInput: k
          }, null, 40, j)) : y("", !0),
          e.variant === "default" ? (m(), o("div", {
            key: 1,
            class: "group-hover:block absolute top-[1rem] z-[1] -translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]",
            style: w(`left: ${n.value}%`)
          }, p(e.type === "range" ? (s = e.modelValue) == null ? void 0 : s[0] : e.modelValue), 5)) : y("", !0),
          e.type === "range" ? (m(), o("div", {
            key: 2,
            class: "group-hover:block absolute top-[1rem] z-[1] translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]",
            style: w(`right: ${100 - c.value}%`)
          }, p((V = e.modelValue) == null ? void 0 : V[1]), 5)) : y("", !0),
          v("span", A, [
            $(a.$slots, "min-limit-label", {}, () => [
              I(p(e.minLimit), 1)
            ], !0)
          ]),
          v("span", D, [
            $(a.$slots, "max-limit-label", {}, () => [
              I(p(e.maxLimit), 1)
            ], !0)
          ])
        ], 2),
        e.variant === "right" ? (m(), o("div", M, p(e.type === "range" ? (h = e.modelValue) == null ? void 0 : h[0] : e.modelValue), 1)) : y("", !0)
      ]);
    };
  }
}, H = /* @__PURE__ */ B(q, [["__scopeId", "data-v-43a77a49"]]);
export {
  H as K
};
