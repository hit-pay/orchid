import { ref as r, onMounted as q, openBlock as f, createElementBlock as p, createElementVNode as o, Fragment as b, renderList as x, normalizeClass as k, toDisplayString as y } from "vue";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const $ = { class: "overflow-hidden flex items-center relative rounded shadow-normal w-fit px-3" }, N = { class: "before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]" }, F = ["onClick"], O = { class: "before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]" }, z = ["onClick"], Y = { class: "before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]" }, j = ["onClick"], G = {
  __name: "OcTimePopup",
  props: {
    modelValue: {
      type: [String, Date],
      default: () => /* @__PURE__ */ new Date()
    }
  },
  emits: ["update:modelValue"],
  setup(A, { expose: H, emit: B }) {
    const u = A, D = B, n = r(
      u.modelValue.getHours() <= 12 ? u.modelValue.getHours() : u.modelValue.getHours() - 12
    ), c = r(u.modelValue.getMinutes()), i = r(u.modelValue.getHours() >= 12 ? "PM" : "AM"), v = r(null), h = r(null), g = r(null), a = () => {
      const t = (m, _) => {
        m && _ && m.scrollTo({
          top: _.offsetTop - m.clientHeight / 2 + _.clientHeight / 2,
          behavior: "smooth"
        });
      }, s = v.value.querySelector(`.w-7:nth-child(${n.value})`), e = h.value.querySelector(
        `.w-7:nth-child(${c.value + 1})`
      ), l = g.value.querySelector(
        `.w-7:nth-child(${i.value === "AM" ? 1 : 2})`
      );
      t(v.value, s), t(h.value, e), t(g.value, l), D(
        "update:modelValue",
        new Date(
          (/* @__PURE__ */ new Date()).getFullYear(),
          (/* @__PURE__ */ new Date()).getMonth(),
          (/* @__PURE__ */ new Date()).getDate(),
          i.value === "AM" ? n.value === 12 ? 0 : n.value : n.value === 12 ? 12 : n.value + 12,
          c.value,
          0,
          0
        )
      );
    };
    q(a);
    const V = (t) => {
      n.value = t, a();
    }, E = (t) => {
      c.value = t, a();
    }, L = (t) => {
      i.value = t, a();
    }, d = r(null), w = r(null), M = r(null), C = r(null), P = () => {
      const t = d.value;
      w.value.forEach((e, l) => {
        Math.abs(e.getBoundingClientRect().top - t.getBoundingClientRect().top) < 12 && (n.value = l + 1, a());
      });
    }, S = () => {
      const t = d.value;
      M.value.forEach((e, l) => {
        Math.abs(e.getBoundingClientRect().top - t.getBoundingClientRect().top) < 12 && (c.value = l, a());
      });
    }, T = () => {
      const t = d.value;
      C.value.forEach((e, l) => {
        Math.abs(e.getBoundingClientRect().top - t.getBoundingClientRect().top) < 12 && (i.value = l === 0 ? "AM" : "PM", a());
      });
    };
    return H({
      updateActiveTime: a
    }), (t, s) => (f(), p("div", $, [
      o("div", {
        ref_key: "triggerBox",
        ref: d,
        class: "bg-oc-accent-1-50-tr border-y absolute h-7 left-0 right-0"
      }, null, 512),
      o("div", {
        ref_key: "hourList",
        ref: v,
        class: "w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar",
        onScrollend: P,
        onTouchend: P
      }, [
        o("ul", N, [
          (f(), p(b, null, x(12, (e) => o("li", {
            key: e,
            ref_for: !0,
            ref_key: "targetHour",
            ref: w,
            class: k(["w-7 cursor-pointer aspect-square leading-[24px] text-center", n.value === e ? "opacity-100" : "opacity-50"]),
            onClick: (l) => V(e)
          }, y(e.toString().padStart(2, "0")), 11, F)), 64))
        ])
      ], 544),
      s[0] || (s[0] = o("span", null, ":", -1)),
      o("div", {
        ref_key: "minutesList",
        ref: h,
        class: "w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar",
        onScrollend: S,
        onTouchend: S
      }, [
        o("ul", O, [
          (f(), p(b, null, x(60, (e) => o("li", {
            key: e,
            ref_for: !0,
            ref_key: "targetMinute",
            ref: M,
            class: k(["w-7 cursor-pointer aspect-square leading-[24px] text-center", c.value === e - 1 ? "opacity-100" : "opacity-50"]),
            onClick: (l) => E(e - 1)
          }, y((e - 1).toString().padStart(2, "0")), 11, z)), 64))
        ])
      ], 544),
      o("div", {
        ref_key: "periodList",
        ref: g,
        class: "w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar",
        onScrollend: T,
        onTouchend: T
      }, [
        o("ul", Y, [
          (f(), p(b, null, x(2, (e) => o("li", {
            key: e,
            ref_for: !0,
            ref_key: "targetPeriod",
            ref: C,
            class: k(["w-7 aspect-square cursor-pointer leading-[24px] text-center", i.value === (e === 1 ? "AM" : "PM") ? "opacity-100" : "opacity-50"]),
            onClick: (l) => L(e === 1 ? "AM" : "PM")
          }, y(e === 1 ? "AM" : "PM"), 11, j)), 64))
        ])
      ], 544)
    ]));
  }
}, Q = /* @__PURE__ */ R(G, [["__scopeId", "data-v-434f8eef"]]);
export {
  Q as default
};
