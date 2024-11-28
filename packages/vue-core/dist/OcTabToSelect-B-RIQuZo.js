import { openBlock as a, createElementBlock as n, renderSlot as c, createVNode as f, unref as d, createTextVNode as w, createElementVNode as m, createBlock as C, mergeProps as y, createCommentVNode as P, ref as x, computed as B, watch as H, onMounted as R, Fragment as v, renderList as _, normalizeClass as b, toDisplayString as g, withCtx as k, normalizeStyle as N } from "vue";
import { _ as $ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as O } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as V } from "./OcButton-CgGNGzWP-CIpgruq1.js";
import { o as j, n as z } from "./OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
const L = {}, M = { class: "bg-oc-bg px-3 md:px-[40px] border-b border-oc-gray-200 h-[68px] w-full flex items-center" };
function T(e, o) {
  return a(), n("div", M, [
    c(e.$slots, "default")
  ]);
}
const de = /* @__PURE__ */ $(L, [["render", T]]), D = {}, U = { class: "px-3 md:px-[40px] border-b border-oc-gray-200 h-[68px] w-full flex items-center relative bg-oc-accent-1-600" };
function q(e, o) {
  return a(), n("div", U, [
    c(e.$slots, "default")
  ]);
}
const ue = /* @__PURE__ */ $(D, [["render", q]]), A = {}, F = { class: "flex items-center gap-x-3 mr-auto" };
function W(e, o) {
  return a(), n("div", F, [
    c(e.$slots, "default")
  ]);
}
const me = /* @__PURE__ */ $(A, [["render", W]]), G = { class: "flex items-center" }, I = {
  key: 1,
  class: "text-oc-text-300 text-sm md:text-base"
}, fe = {
  __name: "OcHeaderCenter",
  props: {
    isSaved: Boolean
  },
  emits: ["back"],
  setup(e) {
    return (o, t) => (a(), n("div", G, [
      c(o.$slots, "default", {}, () => [
        c(o.$slots, "before"),
        e.isSaved ? (a(), n("span", {
          key: 0,
          class: "text-oc-text-100 flex items-center cursor-pointer",
          onClick: t[0] || (t[0] = (r) => o.$emit("back"))
        }, [
          f(d(O), {
            name: "chevron-down",
            class: "rotate-90"
          }),
          t[1] || (t[1] = w(" Back "))
        ])) : (a(), n("span", I, " Unsaved changes ")),
        c(o.$slots, "after")
      ])
    ]));
  }
}, J = { class: "flex items-center gap-x-7 ml-auto" }, K = { class: "flex gap-x-3" }, pe = {
  __name: "OcHeaderRight",
  props: {
    primaryProps: {
      type: Object
    },
    secondaryProps: {
      type: Object
    },
    isSecondaryButtonVisible: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["save", "cancel", "addition-click", "dropdown-action"],
  setup(e, { emit: o }) {
    return (t, r) => (a(), n("div", J, [
      c(t.$slots, "default", {}, () => [
        c(t.$slots, "before"),
        m("div", K, [
          e.isSecondaryButtonVisible ? (a(), C(d(V), y({
            key: 0,
            class: "min-w-[100px]",
            variant: "secondary",
            label: "Cancel"
          }, e.secondaryProps, {
            onClick: r[0] || (r[0] = (i) => t.$emit("cancel"))
          }), null, 16)) : P("", !0),
          c(t.$slots, "primary-button", {}, () => [
            f(d(V), y({
              class: "min-w-[100px]",
              label: "Save"
            }, e.primaryProps, {
              onClick: r[1] || (r[1] = (i) => t.$emit("save"))
            }), null, 16)
          ])
        ]),
        c(t.$slots, "after")
      ])
    ]));
  }
}, Q = { class: "gap-x-7 hidden md:flex relative" }, X = ["onClick"], Y = { class: "p-3 font-medium text-oc-accent-1-500 flex items-center gap-2" }, Z = { class: "p-4 min-w-[220px] flex flex-col gap-y-3 border-b border-gray-200" }, xe = {
  __name: "OcTabToSelect",
  props: {
    menus: Array,
    modelValue: String
  },
  emits: {
    changePath: [],
    "update:modelValue": []
  },
  setup(e) {
    const o = e, t = x(!1), r = B(() => o.menus.find((l) => l.value === o.modelValue)), i = x(), h = x([]), p = (l) => {
      if (!i.value) return;
      const u = (l == null ? void 0 : l.target) || h.value[o.menus.indexOf(r.value)];
      i.value.style.width = `${u.offsetWidth}px`, i.value.style.left = `${u.offsetLeft}px`;
    };
    return H(
      () => o.modelValue,
      () => p()
    ), R(() => p()), (l, u) => (a(), n(v, null, [
      m("div", Q, [
        (a(!0), n(v, null, _(e.menus, (s) => (a(), n("div", {
          key: s.value,
          ref_for: !0,
          ref_key: "menuRefs",
          ref: h,
          class: b(["h-[36px] z-10 px-7 transition-all flex items-center justify-center rounded-full text-oc-text-500 hover:text-oc-accent-1 cursor-pointer", [s.value === e.modelValue ? "font-medium !text-white" : ""]]),
          onClick: (S) => {
            p(S), l.$emit("changePath", s.path), l.$emit("update:modelValue", s.value);
          }
        }, g(s.label), 11, X))), 128)),
        m("div", {
          ref_key: "currentRef",
          ref: i,
          class: b([r.value.sidebarClass, "absolute transition-all duration-300 h-[36px] rounded-full min-w-[100px] bg-[var(--oc-sidebar-menu-active-icon-active)]"])
        }, null, 2)
      ]),
      f(d(j), {
        modelValue: t.value,
        "onUpdate:modelValue": u[0] || (u[0] = (s) => t.value = s),
        class: "flex md:hidden"
      }, {
        menu: k(() => [
          m("div", Z, [
            (a(!0), n(v, null, _(e.menus, (s) => (a(), C(d(z), {
              key: s.value,
              class: b(["px-5 py-3", [
                s.value === e.modelValue ? "!text-oc-accent-1 font-medium bg-oc-accent-1-50-tr" : "!text-oc-text-400"
              ]]),
              text: s.label,
              style: N({
                borderColor: r.value.color
              }),
              onClick: () => {
                l.$emit("changePath", s.path), l.$emit("update:modelValue", s.value);
              }
            }, null, 8, ["text", "style", "class", "onClick"]))), 128))
          ])
        ]),
        default: k(() => [
          m("div", Y, [
            w(g(r.value.label) + " ", 1),
            f(d(O), {
              name: "chevron-down",
              width: "20",
              height: "20"
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
};
export {
  de as O,
  fe as _,
  ue as a,
  me as b,
  pe as c,
  xe as d
};
