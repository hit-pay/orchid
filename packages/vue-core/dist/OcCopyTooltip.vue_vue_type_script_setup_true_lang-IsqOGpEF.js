import { defineComponent as l, openBlock as m, createBlock as c, unref as e, mergeProps as s, withCtx as r, createElementVNode as p, toDisplayString as d, renderSlot as f, createVNode as u } from "vue";
import "dayjs";
import { T as x } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as y } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const b = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, I = /* @__PURE__ */ l({
  __name: "OcCopyTooltip",
  props: {
    value: [String, Blob],
    tooltipText: {
      type: String,
      default: "Copied!"
    },
    tooltipOptions: Object
  },
  setup(i) {
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
    return (t, o) => (m(), c(e(x), s({
      position: "top",
      "hide-after": 1500,
      "arrow-hidden": "",
      trigger: "click",
      distance: 20
    }, i.tooltipOptions), {
      popper: r(() => [
        p("div", b, d(i.tooltipText), 1)
      ]),
      default: r(({ isShow: a }) => [
        p("div", {
          onClick: o[0] || (o[0] = (g) => n(i.value))
        }, [
          f(t.$slots, "default", { isShow: a }, () => [
            u(e(y), {
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
  I as _
};
