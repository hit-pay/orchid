import { openBlock as t, createElementBlock as r, createElementVNode as a, normalizeClass as o, createBlock as c, unref as l, createCommentVNode as i, toDisplayString as m } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as s } from "./OcIcon-CJgBICxh.js";
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
const n = { class: "flex gap-x-2 relative items-center text-oc-text-500 cursor-pointer transition-all duration-300" }, S = {
  __name: "OcCriteria",
  props: {
    modelValue: Boolean,
    label: String
  },
  setup(e) {
    return (p, u) => (t(), r("div", n, [
      a("div", {
        class: o([
          "w-5 h-5 flex items-center justify-center rounded-full border transition-all duration-300",
          e.modelValue ? "bg-oc-success border-oc-success" : "border-oc-primary-100 bg-oc-primary-50"
        ])
      }, [
        e.modelValue ? (t(), c(l(s), {
          key: 0,
          name: "check-2",
          class: "w-[10px] h-[10px] text-oc-text-100"
        })) : i("", !0)
      ], 2),
      e.label ? (t(), r("span", {
        key: 0,
        class: o(e.modelValue ? "text-oc-success" : "text-oc-primary-300")
      }, m(e.label), 3)) : i("", !0)
    ]));
  }
};
export {
  S as _
};
