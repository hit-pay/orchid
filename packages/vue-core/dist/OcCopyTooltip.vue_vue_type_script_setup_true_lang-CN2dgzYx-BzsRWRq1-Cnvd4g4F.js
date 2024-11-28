import { defineComponent as l, openBlock as c, createBlock as s, unref as r, mergeProps as d, withCtx as i, createElementVNode as p, toDisplayString as m, renderSlot as f, createVNode as u } from "vue";
import "dayjs";
import { d as w } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { P as x } from "./OcTooltip-CbCuSC-i-BesS9FFw-CiDM-om2-BFt7BH9u.js";
const y = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, O = /* @__PURE__ */ l({
  __name: "OcCopyTooltip",
  props: {
    value: [String, Blob],
    tooltipText: {
      type: String,
      default: "Copied!"
    },
    tooltipOptions: Object
  },
  setup(e) {
    const a = async (t) => {
      try {
        t instanceof Blob ? await navigator.clipboard.write([
          new ClipboardItem({
            [t.type]: t
          })
        ]) : await navigator.clipboard.writeText(t);
      } catch (o) {
        console.error("Unable to copy text to clipboard. Error: ", o);
      }
    };
    return (t, o) => (c(), s(r(x), d({
      position: "top",
      "hide-after": 1500,
      "arrow-hidden": "",
      trigger: "click",
      distance: 20
    }, e.tooltipOptions), {
      popper: i(() => [
        p("div", y, m(e.tooltipText), 1)
      ]),
      default: i(({ isShow: n }) => [
        p("div", {
          onClick: o[0] || (o[0] = (b) => a(e.value))
        }, [
          f(t.$slots, "default", { isShow: n }, () => [
            u(r(w), {
              width: "14",
              height: "14",
              class: "cursor-pointer transition-all duration-500",
              name: "copy"
            })
          ])
        ])
      ]),
      _: 3
    }, 16));
  }
});
export {
  O as T
};
