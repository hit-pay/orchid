import { defineComponent as a, openBlock as t, createElementBlock as i, createElementVNode as o, createVNode as c, unref as n, toDisplayString as s, renderSlot as l, createBlock as m, mergeProps as u, createCommentVNode as p } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as d } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as f } from "./OcButton-CgGNGzWP-CIpgruq1.js";
const x = { class: "bg-oc-bg-light py-5 px-7 gap-x-7 flex items-center" }, h = { class: "flex-1 flex gap-x-4 items-center" }, g = {
  key: 0,
  class: "w-[24px] h-[24px] min-w-[24px] flex items-center text-white justify-center rounded-full bg-oc-primary"
}, y = {
  key: 1,
  class: "w-[24px] h-[24px] min-w-[24px] flex items-center justify-center border rounded-full text-oc-warning border-oc-warning"
}, b = {
  key: 2,
  class: "w-[24px] h-[24px] min-w-[24px] text-oc-text-300 text-sm font-medium flex items-center justify-center border rounded-full border-oc-gray-200"
}, w = { class: "flex flex-col gap-y-1" }, k = { class: "font-medium" }, _ = { class: "text-oc-text-300 text-sm" }, q = /* @__PURE__ */ a({
  __name: "OcOnboardingListItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    buttonOptions: {
      type: Object,
      default: () => ({})
    },
    status: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 1
    },
    isButtonVisible: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (r, v) => (t(), i("div", x, [
      o("div", h, [
        e.status === "completed" ? (t(), i("div", g, [
          c(n(d), {
            name: "check-2",
            width: "12",
            height: "12"
          })
        ])) : e.status === "pending" ? (t(), i("div", y, [
          c(n(d), {
            name: "time-filled",
            width: "18",
            height: "18"
          })
        ])) : (t(), i("div", b, s(e.number), 1)),
        o("div", w, [
          l(r.$slots, "default", {}, () => [
            o("span", k, s(e.title), 1),
            o("span", _, s(e.description), 1)
          ])
        ])
      ]),
      l(r.$slots, "action", {}, () => [
        e.isButtonVisible ? (t(), m(n(f), u({ key: 0 }, e.buttonOptions, { class: "shrink-0" }), null, 16)) : p("", !0)
      ])
    ]));
  }
});
export {
  q as _
};
