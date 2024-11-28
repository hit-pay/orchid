import { defineComponent as o, openBlock as t, createElementBlock as r, createElementVNode as c, toDisplayString as n, createBlock as i, unref as s, mergeProps as p, createCommentVNode as l } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { j as a } from "./OcChip-BiALeB1C-DzQgECL4.js";
const m = { class: "w-screen relative h-[40px] bg-oc-accent-3 flex items-center justify-center text-white" }, u = { class: "text-sm" }, P = /* @__PURE__ */ o({
  __name: "OcSandboxBanner",
  props: {
    title: {
      type: String,
      default: ""
    },
    chipProps: {
      type: Object,
      default: () => null
    }
  },
  setup(e) {
    return (f, d) => (t(), r("div", m, [
      c("span", u, n(e.title), 1),
      e.chipProps ? (t(), i(s(a), p({
        key: 0,
        class: "absolute left-[40px]"
      }, e.chipProps), null, 16)) : l("", !0)
    ]));
  }
});
export {
  P as _
};
