import { ref as w, openBlock as e, createElementBlock as i, normalizeClass as V, createElementVNode as l, renderSlot as d, createTextVNode as k, toDisplayString as x, createCommentVNode as n, createVNode as c, unref as r, withCtx as u, createBlock as p, mergeProps as f, Fragment as y, renderList as v } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { o as O, n as b } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
import { _ as C } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-DXxdsDSQ-Cq3XmOXN.js";
const S = { key: 0 }, $ = { class: "flex border-oc-gray-200 gap-x-9 justify-between p-5 items-start border-b sticky bg-oc-bg-light top-0" }, B = { class: "flex flex-col gap-y-1 max-w-[300px]" }, N = { class: "text-lg font-medium truncate" }, j = { class: "flex gap-3 items-center" }, P = {
  key: 0,
  class: "text-sm text-oc-text-300 truncate"
}, z = { class: "flex items-center gap-3" }, E = { class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text" }, F = { class: "p-2 border-b border-gray-200" }, D = {
  key: 0,
  class: "p-2"
}, Q = {
  __name: "OcFloatContent",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    isClose: {
      type: Boolean,
      default: !0
    },
    title: String,
    description: String,
    dropdownOptions: {
      type: Object
    },
    dropdownProps: {
      type: Object,
      default: () => ({})
    },
    position: {
      type: String,
      validator: (t) => ["left", "right"].includes(t),
      default: "right"
    }
  },
  emits: ["update:model-value"],
  setup(t, { emit: L }) {
    const h = w(!1);
    return (s, a) => (e(), i("div", {
      class: V(["fixed top-0 bottom-0 shadow-xl bg-oc-bg-light transition-all h-full z-50 overflow-y-auto", {
        "right-0": t.modelValue && t.position === "right",
        "right-[-999px] w-0": !t.modelValue && t.position === "right",
        "left-0": t.modelValue && t.position === "left",
        "left-[-999px] w-0": !t.modelValue && t.position === "left"
      }])
    }, [
      t.modelValue ? (e(), i("div", S, [
        l("div", $, [
          d(s.$slots, "header", {}, () => [
            l("div", B, [
              l("span", N, [
                d(s.$slots, "title", {}, () => [
                  k(x(t.title), 1)
                ])
              ]),
              d(s.$slots, "description", {}, () => [
                l("div", j, [
                  t.description ? (e(), i("span", P, x(t.description), 1)) : n("", !0),
                  c(r(C), {
                    value: t.description,
                    "tooltip-options": { strategy: "fixed" }
                  }, {
                    default: u(({ isShow: o }) => [
                      c(r(g), {
                        width: "14",
                        height: "14",
                        class: "cursor-pointer text-oc-text-400",
                        name: "copy"
                      })
                    ]),
                    _: 1
                  }, 8, ["value"])
                ])
              ])
            ]),
            l("div", z, [
              t.dropdownOptions ? (e(), p(r(O), f({
                key: 0,
                modelValue: h.value,
                "onUpdate:modelValue": a[0] || (a[0] = (o) => h.value = o),
                "popper-options": { strategy: "fixed" },
                placement: "bottom",
                class: "text-sm"
              }, t.dropdownProps), {
                menu: u(() => [
                  l("div", F, [
                    (e(!0), i(y, null, v(t.dropdownOptions.top, (o, m) => (e(), p(r(b), f({
                      key: m,
                      ref_for: !0
                    }, o), null, 16))), 128))
                  ]),
                  t.dropdownOptions.bottom ? (e(), i("div", D, [
                    (e(!0), i(y, null, v(t.dropdownOptions.bottom, (o, m) => (e(), p(r(b), f({
                      key: m,
                      ref_for: !0
                    }, o), null, 16))), 128))
                  ])) : n("", !0)
                ]),
                default: u(() => [
                  l("div", E, [
                    c(r(g), {
                      name: "dots-vertical",
                      width: "20",
                      height: "20"
                    })
                  ])
                ]),
                _: 1
              }, 16, ["modelValue"])) : n("", !0),
              t.isClose ? (e(), i("div", {
                key: 1,
                class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text",
                onClick: a[1] || (a[1] = (o) => s.$emit("update:model-value", !1))
              }, [
                c(r(g), {
                  name: "x",
                  width: "20",
                  height: "20"
                })
              ])) : n("", !0)
            ])
          ])
        ]),
        d(s.$slots, "bottom")
      ])) : n("", !0)
    ], 2));
  }
};
export {
  Q as _
};
