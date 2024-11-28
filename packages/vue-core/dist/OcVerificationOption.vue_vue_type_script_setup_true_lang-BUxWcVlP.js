import { defineComponent as s, openBlock as t, createElementBlock as a, normalizeClass as m, createElementVNode as o, renderSlot as r, toDisplayString as p, createBlock as n, unref as l, normalizeProps as d, mergeProps as f, createCommentVNode as c } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as u } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as h } from "./OcChip-BiALeB1C-DzQgECL4.js";
const y = { class: "flex items-center" }, g = { class: "flex flex-1 items-center gap-x-3" }, x = { class: "font-medium text-lg" }, j = /* @__PURE__ */ s({
  __name: "OcVerificationOption",
  props: {
    title: {
      type: String,
      default: "Enter form manually"
    },
    chipOptions: {
      type: Object,
      default: null
    },
    icon: {
      type: String,
      default: "check-2"
    },
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (i, k) => (t(), a("div", {
      class: m(["rounded hover:bg-oc-gray-50 p-5 flex flex-col gap-y-3", e.isActive ? "border-2 border-oc-primary" : "border border-oc-gray-200"])
    }, [
      o("div", y, [
        o("div", g, [
          r(i.$slots, "title", {}, () => [
            o("span", x, p(e.title), 1)
          ]),
          e.chipOptions ? (t(), n(l(h), d(f({ key: 0 }, e.chipOptions)), null, 16)) : c("", !0)
        ]),
        e.isActive ? (t(), n(l(u), {
          key: 0,
          class: "shrink-0 text-oc-primary",
          name: e.icon,
          width: "18",
          height: "18"
        }, null, 8, ["name"])) : c("", !0)
      ]),
      r(i.$slots, "content")
    ], 2));
  }
});
export {
  j as _
};
