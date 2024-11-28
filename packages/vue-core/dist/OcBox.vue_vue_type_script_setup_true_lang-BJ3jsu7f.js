import { defineComponent as o, openBlock as n, createElementBlock as r, normalizeClass as c, createVNode as a, unref as s, createElementVNode as e, toDisplayString as i } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { X as l } from "./OcOverviewItem-bXigNVA7-DSzO56PR.js";
const m = { class: "flex flex-col text-center gap-y-3" }, d = { class: "text-lg font-medium" }, g = { class: "text-sm text-oc-text-400" }, B = /* @__PURE__ */ o({
  __name: "OcBox",
  props: {
    icon: String,
    width: String,
    height: String,
    variant: String,
    title: String,
    description: String,
    isActive: Boolean
  },
  setup(t) {
    return (h, x) => (n(), r("div", {
      class: c(["rounded py-7 px-5 border bg-oc-bg-light flex flex-col gap-y-5 items-center shadow-sm", t.isActive ? "border-oc-primary" : "border-oc-gray-200"])
    }, [
      a(s(l), {
        icon: t.icon,
        width: t.width,
        height: t.height,
        variant: t.variant
      }, null, 8, ["icon", "width", "height", "variant"]),
      e("div", m, [
        e("span", d, i(t.title), 1),
        e("span", g, i(t.description), 1)
      ])
    ], 2));
  }
});
export {
  B as _
};
