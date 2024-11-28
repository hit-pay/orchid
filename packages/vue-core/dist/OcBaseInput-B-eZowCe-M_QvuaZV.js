import { openBlock as t, createElementBlock as o, normalizeClass as c, createElementVNode as m, createTextVNode as a, toDisplayString as s, createCommentVNode as l, createBlock as x, unref as n, normalizeProps as g, mergeProps as d, withCtx as p, renderSlot as i, createVNode as f } from "vue";
import "dayjs";
import { m as u } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { M as b } from "./OcTooltip-HpelzfZG-w8_u6oS8-BWOI0gq2.js";
const k = { class: "flex flex-col gap-y-2 w-full" }, y = { class: "flex gap-x-1 items-center" }, h = {
  key: 0,
  class: "text-oc-error"
}, S = {
  key: 0,
  class: "px-3 py-2"
}, B = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, C = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, z = {
  __name: "OcBaseInput",
  props: {
    label: String,
    hint: String,
    errorMessage: String,
    isRequired: Boolean,
    labelIcon: String,
    tooltipText: String,
    tooltipOptions: Object,
    labelClass: String
  },
  setup(e) {
    return (r, T) => (t(), o("div", k, [
      e.label ? (t(), o("label", {
        key: 0,
        class: c(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        m("span", y, [
          a(s(e.label) + " ", 1),
          e.isRequired ? (t(), o("span", h, "*")) : l("", !0)
        ]),
        e.labelIcon ? (t(), x(n(b), g(d({ key: 0 }, e.tooltipOptions)), {
          popper: p(() => [
            i(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (t(), o("div", S, s(e.tooltipText), 1)) : l("", !0)
            ])
          ]),
          default: p(() => [
            f(n(u), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : l("", !0)
      ], 2)) : l("", !0),
      i(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (t(), o("div", B, [
        i(r.$slots, "hint", {}, () => [
          a(s(e.hint), 1)
        ])
      ])) : l("", !0),
      e.errorMessage ? (t(), o("div", C, s(e.errorMessage), 1)) : l("", !0)
    ]));
  }
};
export {
  z
};
