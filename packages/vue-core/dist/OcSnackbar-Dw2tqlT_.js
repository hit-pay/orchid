import { ref as p, computed as x, watch as z, nextTick as V, openBlock as t, createBlock as r, Transition as C, withCtx as j, withDirectives as F, createElementVNode as i, normalizeClass as d, unref as a, normalizeStyle as N, createElementBlock as o, Fragment as H, createVNode as b, createCommentVNode as s, renderSlot as O, toDisplayString as u, mergeProps as v, vShow as T } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as m } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as w } from "./OcButton-CgGNGzWP-CIpgruq1.js";
const W = {
  key: 0,
  class: "flex flex-col gap-y-4 w-full"
}, $ = { class: "flex flex-col gap-y-3" }, D = { class: "font-medium text-oc-text" }, E = { class: "text-oc-text-400" }, I = { class: "flex gap-x-3" }, L = {
  key: 0,
  class: "text-oc-text"
}, M = ["innerHTML"], Y = {
  __name: "OcSnackbar",
  props: {
    modelValue: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "default"
    },
    content: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "filled-check"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    dismissible: {
      type: Boolean,
      default: !1
    },
    isFloating: {
      type: Boolean,
      default: !1
    },
    isRawHtml: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "top-center"
    },
    transitionName: {
      type: String,
      default: "slide-from-top"
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    secondaryButton: {
      type: Object,
      default: () => null
    },
    primaryButton: {
      type: Object,
      default: () => null
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["default", "big", "small"].includes(e)
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const c = e, k = Object.freeze({
      default: "border-oc-success-200 bg-oc-success-50 text-oc-success-500",
      primary: "border-oc-primary-200 bg-oc-primary-50 text-oc-primary-500",
      error: "border-oc-error-200 bg-oc-error-50 text-oc-error-500",
      warning: "border-oc-warning-200 bg-oc-warning-50 text-oc-warning-500",
      gray: "border-oc-gray-300 bg-oc-gray-100 text-oc-gray-700"
    }), B = {
      "top-center": "top-4",
      "top-left": "top-4 left-4",
      "top-right": "top-4 right-4",
      "bottom-center": "bottom-4",
      "bottom-left": "bottom-4 left-4",
      "bottom-right": "bottom-4 right-4"
    }, S = {
      default: "bg-oc-success-100",
      primary: "bg-oc-primary-100",
      error: "bg-oc-error-100",
      warning: "bg-oc-warning-100",
      gray: "bg-oc-gray-200"
    }, f = p(), y = p(), l = x(() => c.size === "small"), n = x(() => c.size === "big");
    return z(
      () => c.modelValue,
      async () => {
        await V(), y.value = (document.body.clientWidth - f.value.clientWidth) / 2;
      }
    ), (g, h) => (t(), r(C, { name: e.transitionName }, {
      default: j(() => [
        F(i("div", {
          ref_key: "snackBar",
          ref: f,
          class: d([[
            a(k)[e.color],
            e.isFloating && B[e.position],
            {
              "!fixed z-[1004]": e.isFloating,
              "gap-x-2 py-3 px-4 items-center": l.value,
              "gap-x-5 pt-5 pb-6 px-5 items-start": n.value,
              "gap-x-4 py-4 px-5 items-center": !n.value && !l.value,
              "!pr-10": e.dismissible
            }
          ], "border rounded-lg flex shadow-sm snackbar relative"]),
          style: N(e.isFloating && e.position.includes("center") ? { left: y.value + "px" } : "")
        }, [
          e.showIcon ? (t(), o(H, { key: 0 }, [
            n.value ? (t(), o("div", {
              key: 0,
              class: d([S[e.color], "w-[48px] flex shrink-0 items-center justify-center h-[48px] rounded-full"])
            }, [
              b(a(m), {
                name: e.icon,
                class: "shrink-0",
                width: "24"
              }, null, 8, ["name"])
            ], 2)) : (t(), r(a(m), {
              key: 1,
              name: e.icon,
              class: "shrink-0",
              width: l.value ? "16" : "24",
              height: l.value ? "16" : "24"
            }, null, 8, ["name", "width", "height"]))
          ], 64)) : s("", !0),
          O(g.$slots, "default", {}, () => [
            n.value ? (t(), o("div", W, [
              i("div", $, [
                i("span", D, u(e.title), 1),
                i("span", E, u(e.description), 1)
              ]),
              i("div", I, [
                e.secondaryButton ? (t(), r(a(w), v({
                  key: 0,
                  variant: "secondary",
                  size: "small"
                }, e.secondaryButton), null, 16)) : s("", !0),
                e.primaryButton ? (t(), r(a(w), v({
                  key: 1,
                  size: "small"
                }, e.primaryButton), null, 16)) : s("", !0)
              ])
            ])) : (t(), o("div", {
              key: 1,
              class: d(["w-full flex items-center justify-between", l.value ? "text-sm" : ""])
            }, [
              e.isRawHtml ? (t(), o("span", {
                key: 1,
                class: "text-oc-text",
                innerHTML: e.content
              }, null, 8, M)) : (t(), o("span", L, u(e.content), 1))
            ], 2))
          ]),
          e.dismissible ? (t(), o("div", {
            key: 1,
            class: "cursor-pointer absolute top-4 right-4 text-oc-gray-800 opacity-25 hover:opacity-50",
            onClick: h[0] || (h[0] = (R) => g.$emit("update:modelValue", !1))
          }, [
            b(a(m), {
              name: "x-circle-filled",
              width: "20",
              height: "20"
            })
          ])) : s("", !0)
        ], 6), [
          [T, e.modelValue]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
};
export {
  Y as _
};
