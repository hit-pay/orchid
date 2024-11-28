import { ref as r, onMounted as N, openBlock as m, createElementBlock as b, createElementVNode as u, Fragment as S, renderList as V, normalizeClass as T, toDisplayString as C, defineAsyncComponent as F, watch as j, createBlock as O, unref as y, withCtx as q, createCommentVNode as z, createVNode as I } from "vue";
import { _ as U } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import $ from "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { d as Y } from "./OcInputOption-D9DTYAD7-BrCoHHb9.js";
import { o as G } from "./OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
const J = { class: "overflow-hidden flex items-center relative rounded shadow-normal w-fit px-3" }, K = { class: "before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]" }, Q = ["onClick"], W = { class: "before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]" }, X = ["onClick"], Z = { class: "before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]" }, ee = ["onClick"], te = {
  __name: "OcTimePopup",
  props: {
    modelValue: {
      type: [String, Date],
      default: () => /* @__PURE__ */ new Date()
    }
  },
  emits: ["update:modelValue"],
  setup(o, { expose: x, emit: k }) {
    const p = o, g = k, n = r(
      p.modelValue.getHours() <= 12 ? p.modelValue.getHours() : p.modelValue.getHours() - 12
    ), d = r(p.modelValue.getMinutes()), a = r(p.modelValue.getHours() >= 12 ? "PM" : "AM"), v = r(null), i = r(null), s = r(null), l = () => {
      const t = (w, M) => {
        w && M && w.scrollTo({
          top: M.offsetTop - w.clientHeight / 2 + M.clientHeight / 2,
          behavior: "smooth"
        });
      }, f = v.value.querySelector(`.w-7:nth-child(${n.value})`), e = i.value.querySelector(
        `.w-7:nth-child(${d.value + 1})`
      ), c = s.value.querySelector(
        `.w-7:nth-child(${a.value === "AM" ? 1 : 2})`
      );
      t(v.value, f), t(i.value, e), t(s.value, c), g(
        "update:modelValue",
        new Date(
          (/* @__PURE__ */ new Date()).getFullYear(),
          (/* @__PURE__ */ new Date()).getMonth(),
          (/* @__PURE__ */ new Date()).getDate(),
          a.value === "AM" ? n.value === 12 ? 0 : n.value : n.value === 12 ? 12 : n.value + 12,
          d.value,
          0,
          0
        )
      );
    };
    N(l);
    const E = (t) => {
      n.value = t, l();
    }, R = (t) => {
      d.value = t, l();
    }, L = (t) => {
      a.value = t, l();
    }, h = r(null), P = r(null), A = r(null), D = r(null), _ = () => {
      const t = h.value;
      P.value.forEach((e, c) => {
        Math.abs(e.getBoundingClientRect().top - t.getBoundingClientRect().top) < 12 && (n.value = c + 1, l());
      });
    }, B = () => {
      const t = h.value;
      A.value.forEach((e, c) => {
        Math.abs(e.getBoundingClientRect().top - t.getBoundingClientRect().top) < 12 && (d.value = c, l());
      });
    }, H = () => {
      const t = h.value;
      D.value.forEach((e, c) => {
        Math.abs(e.getBoundingClientRect().top - t.getBoundingClientRect().top) < 12 && (a.value = c === 0 ? "AM" : "PM", l());
      });
    };
    return x({
      updateActiveTime: l
    }), (t, f) => (m(), b("div", J, [
      u("div", {
        ref_key: "triggerBox",
        ref: h,
        class: "bg-oc-accent-1-50-tr border-y absolute h-7 left-0 right-0"
      }, null, 512),
      u("div", {
        ref_key: "hourList",
        ref: v,
        class: "w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar",
        onScrollend: _,
        onTouchend: _
      }, [
        u("ul", K, [
          (m(), b(S, null, V(12, (e) => u("li", {
            key: e,
            ref_for: !0,
            ref_key: "targetHour",
            ref: P,
            class: T(["w-7 cursor-pointer aspect-square leading-[24px] text-center", n.value === e ? "opacity-100" : "opacity-50"]),
            onClick: (c) => E(e)
          }, C(e.toString().padStart(2, "0")), 11, Q)), 64))
        ])
      ], 544),
      f[0] || (f[0] = u("span", null, ":", -1)),
      u("div", {
        ref_key: "minutesList",
        ref: i,
        class: "w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar",
        onScrollend: B,
        onTouchend: B
      }, [
        u("ul", W, [
          (m(), b(S, null, V(60, (e) => u("li", {
            key: e,
            ref_for: !0,
            ref_key: "targetMinute",
            ref: A,
            class: T(["w-7 cursor-pointer aspect-square leading-[24px] text-center", d.value === e - 1 ? "opacity-100" : "opacity-50"]),
            onClick: (c) => R(e - 1)
          }, C((e - 1).toString().padStart(2, "0")), 11, X)), 64))
        ])
      ], 544),
      u("div", {
        ref_key: "periodList",
        ref: s,
        class: "w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar",
        onScrollend: H,
        onTouchend: H
      }, [
        u("ul", Z, [
          (m(), b(S, null, V(2, (e) => u("li", {
            key: e,
            ref_for: !0,
            ref_key: "targetPeriod",
            ref: D,
            class: T(["w-7 aspect-square cursor-pointer leading-[24px] text-center", a.value === (e === 1 ? "AM" : "PM") ? "opacity-100" : "opacity-50"]),
            onClick: (c) => L(e === 1 ? "AM" : "PM")
          }, C(e === 1 ? "AM" : "PM"), 11, ee)), 64))
        ])
      ], 544)
    ]));
  }
}, oe = /* @__PURE__ */ U(te, [["__scopeId", "data-v-434f8eef"]]), le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" })), me = {
  __name: "OcTimePicker",
  props: {
    modelValue: [String, Date],
    label: String,
    hint: String,
    icon: {
      type: String,
      default: "time"
    },
    preFill: String,
    placeholder: String,
    errorMessage: String,
    isRequired: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
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
  setup(o, { emit: x }) {
    const k = x, p = F(
      () => Promise.resolve().then(() => le)
    ), g = r(), n = r(!1), d = o, a = r(d.modelValue), v = () => {
      k("update:modelValue", a.value), setTimeout(() => {
        var i;
        return (i = g.value) == null ? void 0 : i.updateActiveTime();
      }, 300);
    };
    return j(
      () => d.modelValue,
      (i) => {
        a.value = i != "" ? i : $().toDate();
      },
      { immediate: !0 }
    ), (i, s) => (m(), O(y(G), {
      modelValue: n.value,
      "onUpdate:modelValue": [
        s[2] || (s[2] = (l) => n.value = l),
        v
      ],
      "menu-classes": "min-w-fit",
      distance: 10,
      "is-disabled": o.isDisabled
    }, {
      menu: q(() => [
        n.value ? (m(), O(y(p), {
          key: 0,
          ref_key: "popup",
          ref: g,
          modelValue: a.value,
          "onUpdate:modelValue": [
            s[0] || (s[0] = (l) => a.value = l),
            s[1] || (s[1] = (l) => i.$emit("update:modelValue", l))
          ]
        }, null, 8, ["modelValue"])) : z("", !0)
      ]),
      default: q(() => [
        I(y(Y), {
          icon: o.icon,
          "error-message": o.errorMessage,
          label: o.label,
          hint: o.hint,
          "pre-fill": o.preFill,
          placeholder: o.placeholder,
          "model-value": y($)(a.value).format("hh:mm A"),
          "is-required": o.isRequired,
          "label-icon": o.labelIcon,
          "tooltip-text": o.tooltipText,
          "tooltip-options": o.tooltipOptions,
          "is-readonly": !0,
          disabled: o.isDisabled
        }, null, 8, ["icon", "error-message", "label", "hint", "pre-fill", "placeholder", "model-value", "is-required", "label-icon", "tooltip-text", "tooltip-options", "disabled"])
      ]),
      _: 1
    }, 8, ["modelValue", "is-disabled"]));
  }
};
export {
  oe as O,
  me as _
};
