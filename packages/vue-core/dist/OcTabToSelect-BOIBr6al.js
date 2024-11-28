import { openBlock as a, createElementBlock as r, renderSlot as c, createVNode as f, unref as d, createTextVNode as w, createElementVNode as m, createBlock as C, mergeProps as _, createCommentVNode as B, ref as x, computed as P, watch as H, onMounted as R, Fragment as v, renderList as y, normalizeClass as $, toDisplayString as g, withCtx as k, normalizeStyle as D } from "vue";
import { _ as b } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import "dayjs";
import { B as V, D as N } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as O } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
import { _ as j } from "./OcDropdownItem-CsRX3XmF.js";
const z = {}, L = { class: "bg-oc-bg px-3 md:px-[40px] border-b border-oc-gray-200 h-[68px] w-full flex items-center" };
function M(e, o) {
  return a(), r("div", L, [
    c(e.$slots, "default")
  ]);
}
const $e = /* @__PURE__ */ b(z, [["render", M]]), T = {}, U = { class: "px-3 md:px-[40px] border-b border-oc-gray-200 h-[68px] w-full flex items-center relative bg-oc-accent-1-600" };
function A(e, o) {
  return a(), r("div", U, [
    c(e.$slots, "default")
  ]);
}
const be = /* @__PURE__ */ b(T, [["render", A]]), F = {}, W = { class: "flex items-center gap-x-3 mr-auto" };
function q(e, o) {
  return a(), r("div", W, [
    c(e.$slots, "default")
  ]);
}
const he = /* @__PURE__ */ b(F, [["render", q]]), G = { class: "flex items-center" }, I = {
  key: 1,
  class: "text-oc-text-300 text-sm md:text-base"
}, _e = {
  __name: "OcHeaderCenter",
  props: {
    isSaved: Boolean
  },
  emits: ["back"],
  setup(e) {
    return (o, t) => (a(), r("div", G, [
      c(o.$slots, "default", {}, () => [
        c(o.$slots, "before"),
        e.isSaved ? (a(), r("span", {
          key: 0,
          class: "text-oc-text-100 flex items-center cursor-pointer",
          onClick: t[0] || (t[0] = (n) => o.$emit("back"))
        }, [
          f(d(O), {
            name: "chevron-down",
            class: "rotate-90"
          }),
          t[1] || (t[1] = w(" Back "))
        ])) : (a(), r("span", I, " Unsaved changes ")),
        c(o.$slots, "after")
      ])
    ]));
  }
}, J = { class: "flex items-center gap-x-7 ml-auto" }, K = { class: "flex gap-x-3" }, ye = {
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
    return (t, n) => (a(), r("div", J, [
      c(t.$slots, "default", {}, () => [
        c(t.$slots, "before"),
        m("div", K, [
          e.isSecondaryButtonVisible ? (a(), C(d(V), _({
            key: 0,
            class: "min-w-[100px]",
            variant: "secondary",
            label: "Cancel"
          }, e.secondaryProps, {
            onClick: n[0] || (n[0] = (i) => t.$emit("cancel"))
          }), null, 16)) : B("", !0),
          c(t.$slots, "primary-button", {}, () => [
            f(d(V), _({
              class: "min-w-[100px]",
              label: "Save"
            }, e.primaryProps, {
              onClick: n[1] || (n[1] = (i) => t.$emit("save"))
            }), null, 16)
          ])
        ]),
        c(t.$slots, "after")
      ])
    ]));
  }
}, Q = { class: "gap-x-7 hidden md:flex relative" }, X = ["onClick"], Y = { class: "p-3 font-medium text-oc-accent-1-500 flex items-center gap-2" }, Z = { class: "p-4 min-w-[220px] flex flex-col gap-y-3 border-b border-gray-200" }, ge = {
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
    const o = e, t = x(!1), n = P(() => o.menus.find((l) => l.value === o.modelValue)), i = x(), h = x([]), p = (l) => {
      if (!i.value) return;
      const u = (l == null ? void 0 : l.target) || h.value[o.menus.indexOf(n.value)];
      i.value.style.width = `${u.offsetWidth}px`, i.value.style.left = `${u.offsetLeft}px`;
    };
    return H(
      () => o.modelValue,
      () => p()
    ), R(() => p()), (l, u) => (a(), r(v, null, [
      m("div", Q, [
        (a(!0), r(v, null, y(e.menus, (s) => (a(), r("div", {
          key: s.value,
          ref_for: !0,
          ref_key: "menuRefs",
          ref: h,
          class: $(["h-[36px] z-10 px-7 transition-all flex items-center justify-center rounded-full text-oc-text-500 hover:text-oc-accent-1 cursor-pointer", [s.value === e.modelValue ? "font-medium !text-white" : ""]]),
          onClick: (S) => {
            p(S), l.$emit("changePath", s.path), l.$emit("update:modelValue", s.value);
          }
        }, g(s.label), 11, X))), 128)),
        m("div", {
          ref_key: "currentRef",
          ref: i,
          class: $([n.value.sidebarClass, "absolute transition-all duration-300 h-[36px] rounded-full min-w-[100px] bg-[var(--oc-sidebar-menu-active-icon-active)]"])
        }, null, 2)
      ]),
      f(d(N), {
        modelValue: t.value,
        "onUpdate:modelValue": u[0] || (u[0] = (s) => t.value = s),
        class: "flex md:hidden"
      }, {
        menu: k(() => [
          m("div", Z, [
            (a(!0), r(v, null, y(e.menus, (s) => (a(), C(d(j), {
              key: s.value,
              class: $(["px-5 py-3", [
                s.value === e.modelValue ? "!text-oc-accent-1 font-medium bg-oc-accent-1-50-tr" : "!text-oc-text-400"
              ]]),
              text: s.label,
              style: D({
                borderColor: n.value.color
              }),
              onClick: () => {
                l.$emit("changePath", s.path), l.$emit("update:modelValue", s.value);
              }
            }, null, 8, ["text", "style", "class", "onClick"]))), 128))
          ])
        ]),
        default: k(() => [
          m("div", Y, [
            w(g(n.value.label) + " ", 1),
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
  $e as O,
  _e as _,
  be as a,
  he as b,
  ye as c,
  ge as d
};
