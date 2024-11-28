import { openBlock as t, createElementBlock as o, normalizeClass as m, createElementVNode as x, createTextVNode as n, toDisplayString as s, createCommentVNode as l, createBlock as d, unref as a, normalizeProps as u, mergeProps as g, withCtx as c, renderSlot as i, createVNode as h } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as f } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as b } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const p = { class: "flex flex-col gap-y-2 w-full" }, k = { class: "flex gap-x-1 items-center" }, y = {
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
    return (r, T) => (t(), o("div", p, [
      e.label ? (t(), o("label", {
        key: 0,
        class: m(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        x("span", k, [
          n(s(e.label) + " ", 1),
          e.isRequired ? (t(), o("span", y, "*")) : l("", !0)
        ]),
        e.labelIcon ? (t(), d(a(b), u(g({ key: 0 }, e.tooltipOptions)), {
          popper: c(() => [
            i(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (t(), o("div", S, s(e.tooltipText), 1)) : l("", !0)
            ])
          ]),
          default: c(() => [
            h(a(f), {
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
          n(s(e.hint), 1)
        ])
      ])) : l("", !0),
      e.errorMessage ? (t(), o("div", C, s(e.errorMessage), 1)) : l("", !0)
    ]));
  }
};
export {
  z as _
};
