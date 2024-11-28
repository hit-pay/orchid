import { defineComponent as c, openBlock as e, createElementBlock as a, normalizeClass as i, createBlock as r, unref as o, createCommentVNode as n, createElementVNode as l, toDisplayString as m, mergeProps as s } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as h } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as g } from "./OcChip-D-MDc7mX-aGoqgxkI.js";
const C = /* @__PURE__ */ c({
  __name: "OcAuthenticationOption",
  props: {
    icon: String,
    width: String,
    height: String,
    iconClass: String,
    title: String,
    isActive: Boolean,
    chipProps: Object
  },
  setup(t) {
    return (d, p) => (e(), a("div", {
      class: i(["relative border rounded gap-x-3 flex justify-center items-center py-6 px-5 bg-oc-bg-light shadow-sm cursor-pointer hover:border-oc-primary duration-500", t.isActive ? "border-oc-primary" : "border-oc-gray-200"])
    }, [
      t.icon ? (e(), r(o(h), {
        key: 0,
        name: t.icon,
        width: t.width,
        height: t.height,
        class: i(t.iconClass)
      }, null, 8, ["name", "width", "height", "class"])) : n("", !0),
      l("span", null, m(t.title), 1),
      t.chipProps ? (e(), r(o(g), s({ key: 1 }, t.chipProps, { class: "absolute top-0 -translate-y-1/2 sm:right-9" }), null, 16)) : n("", !0)
    ], 2));
  }
});
export {
  C as _
};
