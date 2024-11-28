import { defineComponent as h, openBlock as e, createElementBlock as n, createVNode as m, unref as l, withCtx as i, createElementVNode as t, Fragment as a, renderList as p, toDisplayString as _, createBlock as c, mergeProps as f, renderSlot as y, createCommentVNode as w } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as V } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { o as k, n as g } from "./OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
const B = { class: "fixed bottom-[30px] right-[32px]" }, q = { class: "relative" }, M = {
  key: 0,
  class: "flex items-center justify-end"
}, P = { class: "w-[40px] flex text-white items-center bg-oc-text active:bg-oc-gray-800 justify-center aspect-square rounded-full cursor-pointer" }, S = { class: "min-w-[180px]" }, j = { class: "p-3" }, O = { class: "uppercase text-oc-text-400 text-xs font-medium" }, U = /* @__PURE__ */ h({
  __name: "OcSupportMenu",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "Have a question?"
    },
    info: {
      type: String,
      default: "We're ready to guide you through anything you need!"
    },
    confirmButtonProps: {
      type: Object,
      default: () => ({})
    },
    topMenu: {
      type: Array,
      default: () => []
    },
    bottomMenu: {
      type: Array,
      default: () => []
    },
    questionBtnProps: {
      type: Object,
      default: () => ({})
    },
    isPointed: Boolean
  },
  emits: ["update:modelValue"],
  setup(s) {
    const x = {
      arrowHidden: !0
    };
    return (d, o) => (e(), n("div", B, [
      m(l(k), {
        "model-value": s.modelValue,
        "popper-options": x,
        placement: "top-end",
        distance: 8,
        "onUpdate:modelValue": o[0] || (o[0] = (r) => d.$emit("update:modelValue", r))
      }, {
        menu: i(() => [
          t("div", S, [
            (e(!0), n(a, null, p(s.topMenu, (r, u) => (e(), n(a, { key: u }, [
              t("div", j, [
                t("span", O, _(r.title), 1)
              ]),
              (e(!0), n(a, null, p(r.items, (b, v) => (e(), c(l(g), f({
                key: v,
                class: "text-sm",
                ref_for: !0
              }, b), {
                badge: i(() => [
                  y(d.$slots, "badge")
                ]),
                _: 2
              }, 1040))), 128))
            ], 64))), 128)),
            o[2] || (o[2] = t("div", { class: "w-full border-t border-gray-200" }, null, -1)),
            (e(!0), n(a, null, p(s.bottomMenu, (r, u) => (e(), c(l(g), f({
              key: u,
              class: "text-sm",
              ref_for: !0
            }, r), {
              badge: i(() => [
                y(d.$slots, "badge")
              ]),
              _: 2
            }, 1040))), 128))
          ])
        ]),
        default: i(() => [
          t("div", q, [
            s.isPointed ? (e(), n("div", M, o[1] || (o[1] = [
              t("div", { class: "w-[6px] aspect-square rounded-full bg-oc-error" }, null, -1)
            ]))) : w("", !0),
            t("div", P, [
              m(l(V), {
                name: "question",
                width: "33",
                height: "33"
              })
            ])
          ])
        ]),
        _: 3
      }, 8, ["model-value"])
    ]));
  }
});
export {
  U as _
};
