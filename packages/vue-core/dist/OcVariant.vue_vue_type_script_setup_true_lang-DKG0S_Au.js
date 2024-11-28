import { defineComponent as c, openBlock as t, createElementBlock as i, normalizeClass as o, createElementVNode as g, createBlock as n, unref as d, mergeProps as r, createCommentVNode as s, toDisplayString as p, renderSlot as u, Fragment as v, renderList as b, createSlots as h, withCtx as $ } from "vue";
import "dayjs";
import { m as k } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as A } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const D = { class: "flex items-center gap-x-3" }, S = /* @__PURE__ */ c({
  __name: "OcVariant",
  props: {
    icon: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    iconOptions: {
      type: Object,
      default: null
    },
    value: {
      type: [String, Number],
      default: ""
    }
  },
  setup(e) {
    return (l, m) => (t(), i("div", {
      class: o([
        "md:w-fit w-full py-3 px-4 border flex flex-col gap-y-2 rounded",
        e.isDisabled ? "bg-oc-gray-50 border-oc-gray-200" : e.isActive ? "border-oc-primary bg-oc-bg-light cursor-pointer" : "border-oc-gray-200 bg-oc-bg-light cursor-pointer"
      ])
    }, [
      g("div", D, [
        e.icon ? (t(), n(d(k), r({
          key: 0,
          width: "18",
          height: "18",
          name: e.icon,
          class: e.isDisabled ? "text-oc-text-200" : e.isActive ? "" : "text-oc-text-400"
        }, e.iconOptions), null, 16, ["name", "class"])) : s("", !0),
        e.label ? (t(), i("span", {
          key: 1,
          class: o(e.isDisabled ? "text-oc-text-300" : e.isActive ? "font-medium" : "")
        }, p(e.label), 3)) : s("", !0)
      ]),
      u(l.$slots, `${e.value}-description`)
    ], 2));
  }
}), V = { class: "flex gap-3 items-start md:flex-row flex-col" }, F = /* @__PURE__ */ c({
  __name: "OcVariants",
  props: {
    variants: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (l, m) => (t(), i("div", V, [
      (t(!0), i(v, null, b(e.variants, (a) => (t(), n(d(S), r({
        key: a.value,
        "is-active": a.value === e.modelValue,
        ref_for: !0
      }, a, {
        onClick: (y) => l.$emit("update:modelValue", a.isDisabled ? e.modelValue : a.value)
      }), h({ _: 2 }, [
        b(l.$slots, (y, f) => ({
          name: f,
          fn: $((x) => [
            u(l.$slots, f, r({ ref_for: !0 }, x))
          ])
        }))
      ]), 1040, ["is-active", "onClick"]))), 128))
    ]));
  }
}), O = { class: "flex items-center gap-x-3" }, L = /* @__PURE__ */ c({
  __name: "OcVariant",
  props: {
    icon: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    iconOptions: {
      type: Object,
      default: null
    },
    value: {
      type: [String, Number],
      default: ""
    }
  },
  setup(e) {
    return (l, m) => (t(), i("div", {
      class: o([
        "md:w-fit w-full py-3 px-4 border flex flex-col gap-y-2 rounded",
        e.isDisabled ? "bg-oc-gray-50 border-oc-gray-200" : e.isActive ? "border-oc-primary bg-oc-bg-light cursor-pointer" : "border-oc-gray-200 bg-oc-bg-light cursor-pointer"
      ])
    }, [
      g("div", O, [
        e.icon ? (t(), n(d(A), r({
          key: 0,
          width: "18",
          height: "18",
          name: e.icon,
          class: e.isDisabled ? "text-oc-text-200" : e.isActive ? "" : "text-oc-text-400"
        }, e.iconOptions), null, 16, ["name", "class"])) : s("", !0),
        e.label ? (t(), i("span", {
          key: 1,
          class: o(e.isDisabled ? "text-oc-text-300" : e.isActive ? "font-medium" : "")
        }, p(e.label), 3)) : s("", !0)
      ]),
      u(l.$slots, `${e.value}-description`)
    ], 2));
  }
});
export {
  F as _,
  L as a
};
