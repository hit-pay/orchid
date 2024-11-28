import { openBlock as i, createBlock as s, unref as e, normalizeProps as p, mergeProps as a, withCtx as r, createElementVNode as o, toDisplayString as n, createVNode as c, createElementBlock as l } from "vue";
import "dayjs";
import { T as d } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as m } from "./OcIcon-CJgBICxh.js";
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
const x = { class: "rounded-full share-icon w-fit cursor-pointer text-oc-text-400 p-3 border border-gray-200" }, h = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, f = {
  key: 1,
  class: "px-3 share-icon border border-oc-gray-200 rounded-full w-fit py-[6px] flex items-center gap-x-2"
}, u = { class: "text-sm" }, C = {
  __name: "OcShareIcon",
  props: {
    text: String,
    icon: String,
    isOnlyIcon: Boolean,
    tooltipOptions: {
      type: Object
    }
  },
  setup(t) {
    return (y, g) => t.isOnlyIcon ? (i(), s(e(d), p(a({ key: 0 }, t.tooltipOptions)), {
      popper: r(() => [
        o("div", h, n(t.text), 1)
      ]),
      default: r(() => [
        o("div", x, [
          c(e(m), {
            name: t.icon,
            width: "20",
            height: "20"
          }, null, 8, ["name"])
        ])
      ]),
      _: 1
    }, 16)) : (i(), l("div", f, [
      c(e(m), {
        name: t.icon,
        width: "20",
        height: "20"
      }, null, 8, ["name"]),
      o("span", u, n(t.text), 1)
    ]));
  }
};
export {
  C as _
};
