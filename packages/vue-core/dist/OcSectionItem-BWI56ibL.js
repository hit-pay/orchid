import { computed as f, openBlock as t, createElementBlock as n, createElementVNode as l, normalizeClass as d, toDisplayString as s, createCommentVNode as r, createTextVNode as x, createVNode as h, unref as p, withCtx as g, createBlock as b, renderSlot as V, mergeProps as v } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as k } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { s as y } from "./_plugin-vue_export-helper-CHgC5LLL-BmOybl0N.js";
import { q as S } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const B = { class: "inline-flex items-center gap-3 h-fit" }, C = ["value", "checked"], w = `absolute top-0 left-0 bg-oc-primary-100 rounded-full cursor-pointer transition-all duration-300
 before:transition-all before:duration-300 before:absolute before:rounded-full before:bg-oc-bg-light`, z = {
  __name: "OcToggle",
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "default"
    },
    label: String
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: u }) {
    const o = e, c = u, a = () => c("update:modelValue", !o.modelValue), i = f(() => ({
      default: "w-[42px] h-7",
      small: "w-[26px] h-[15px]"
    })), m = f(() => ({
      default: "before:w-6 before:h-6 before:top-1 before:left-1",
      small: " before:w-4 before:h-4 before:top-[1.5px] before:left-[1.5px]"
    }));
    return (E, I) => (t(), n("div", B, [
      l("label", {
        class: d(["toggle-switch relative inline-block", [i.value[e.size], e.size, e.disabled ? "pointer-events-none opacity-60" : ""]])
      }, [
        l("input", {
          class: d(["toggle-input hidden", {
            "is-checked": e.modelValue
          }]),
          value: e.modelValue,
          checked: e.modelValue,
          type: "checkbox",
          onChange: a
        }, null, 42, C),
        l("span", {
          class: d(["toggle-label", [w, i.value[e.size], m.value[e.size]]])
        }, null, 2)
      ], 2),
      e.label ? (t(), n("div", {
        key: 0,
        class: "text-sm cursor-pointer",
        onClick: a
      }, s(e.label), 1)) : r("", !0)
    ]));
  }
}, M = /* @__PURE__ */ y(z, [["__scopeId", "data-v-0c0b0d12"]]), N = { class: "flex" }, T = { class: "flex flex-col gap-y-1 flex-1" }, O = { class: "font-medium gap-x-3 flex items-center" }, P = { class: "px-2 py-1 text-sm text-oc-text-400" }, $ = {
  key: 1,
  class: "text-sm text-oc-error flex items-center"
}, L = {
  __name: "OcSectionItem",
  props: {
    title: String,
    description: {
      type: String,
      default: ""
    },
    descriptionClass: {
      type: String,
      default: ""
    },
    icon: String,
    modelValue: {
      type: Boolean,
      default: !1
    },
    isToggle: Boolean,
    toggleProps: Object,
    popperMessage: String,
    errorMessage: String,
    defaultValue: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: u }) {
    const o = e, c = u;
    return o.defaultValue === !0 && (o.modelValue === null || o.modelValue === void 0) && c("update:modelValue", !0), (a, i) => (t(), n("div", N, [
      l("div", T, [
        l("div", O, [
          x(s(e.title) + " ", 1),
          h(p(S), {
            position: "top",
            distance: 4
          }, {
            popper: g(() => [
              l("div", P, s(e.popperMessage), 1)
            ]),
            default: g(() => [
              e.icon ? (t(), b(p(k), {
                key: 0,
                width: "16",
                height: "16",
                class: "text-oc-text-400 cursor-pointer",
                name: e.icon
              }, null, 8, ["name"])) : r("", !0)
            ]),
            _: 1
          })
        ]),
        e.description ? (t(), n("span", {
          key: 0,
          class: d(["text-oc-text-400 text-sm", e.descriptionClass])
        }, s(e.description), 3)) : r("", !0),
        e.errorMessage ? (t(), n("div", $, s(e.errorMessage), 1)) : r("", !0)
      ]),
      V(a.$slots, "actions", {}, () => [
        e.isToggle ? (t(), b(p(M), v({
          key: 0,
          "model-value": e.modelValue
        }, e.toggleProps, {
          "onUpdate:modelValue": i[0] || (i[0] = (m) => a.$emit("update:modelValue", m))
        }), null, 16, ["model-value"])) : r("", !0)
      ])
    ]));
  }
};
export {
  L as _
};
