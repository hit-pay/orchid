import { defineComponent as l, openBlock as c, createBlock as s, unref as i, mergeProps as d, withCtx as r, createElementVNode as p, toDisplayString as m, renderSlot as f, createVNode as u } from "vue";
import "dayjs";
import { m as w } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { M as x } from "./OcTooltip-HpelzfZG-w8_u6oS8-BWOI0gq2.js";
const y = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, T = /* @__PURE__ */ l({
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
    return (t, o) => (c(), s(i(x), d({
      position: "top",
      "hide-after": 1500,
      "arrow-hidden": "",
      trigger: "click",
      distance: 20
    }, e.tooltipOptions), {
      popper: r(() => [
        p("div", y, m(e.tooltipText), 1)
      ]),
      default: r(({ isShow: n }) => [
        p("div", {
          onClick: o[0] || (o[0] = (b) => a(e.value))
        }, [
          f(t.$slots, "default", { isShow: n }, () => [
            u(i(w), {
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
  T as _
};
