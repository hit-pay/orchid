import { openBlock as t, createElementBlock as r, createElementVNode as a, normalizeClass as o, createBlock as l, unref as i, createCommentVNode as c, toDisplayString as s } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as n } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const m = { class: "flex gap-x-2 relative items-center text-oc-text-500 cursor-pointer transition-all duration-300" }, h = {
  __name: "OcCriteria",
  props: {
    modelValue: Boolean,
    label: String
  },
  setup(e) {
    return (u, d) => (t(), r("div", m, [
      a("div", {
        class: o([
          "w-5 h-5 flex items-center justify-center rounded-full border transition-all duration-300",
          e.modelValue ? "bg-oc-success border-oc-success" : "border-oc-primary-100 bg-oc-primary-50"
        ])
      }, [
        e.modelValue ? (t(), l(i(n), {
          key: 0,
          name: "check-2",
          class: "w-[10px] h-[10px] text-oc-text-100"
        })) : c("", !0)
      ], 2),
      e.label ? (t(), r("span", {
        key: 0,
        class: o(e.modelValue ? "text-oc-success" : "text-oc-primary-300")
      }, s(e.label), 3)) : c("", !0)
    ]));
  }
};
export {
  h as _
};
