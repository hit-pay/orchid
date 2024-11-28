import { defineComponent as a, openBlock as c, createBlock as s, unref as r, mergeProps as m, withCtx as i, createElementVNode as p, toDisplayString as d, renderSlot as f, createVNode as u } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as x } from "./OcTooltip-HpelzfZG-w8_u6oS8.js";
const y = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, _ = /* @__PURE__ */ a({
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
    const n = async (t) => {
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
    return (t, o) => (c(), s(r(x), m({
      position: "top",
      "hide-after": 1500,
      "arrow-hidden": "",
      trigger: "click",
      distance: 20
    }, e.tooltipOptions), {
      popper: i(() => [
        p("div", y, d(e.tooltipText), 1)
      ]),
      default: i(({ isShow: l }) => [
        p("div", {
          onClick: o[0] || (o[0] = (b) => n(e.value))
        }, [
          f(t.$slots, "default", { isShow: l }, () => [
            u(r(g), {
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
  _
};
