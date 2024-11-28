import { defineComponent as o, openBlock as e, createElementBlock as r, createElementVNode as i, toDisplayString as p, createBlock as c, unref as m, mergeProps as n, createCommentVNode as s } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as a } from "./OcChip-5vbWMktM.js";
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
const l = { class: "w-screen relative h-[40px] bg-oc-accent-3 flex items-center justify-center text-white" }, f = { class: "text-sm" }, O = /* @__PURE__ */ o({
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
  setup(t) {
    return (u, _) => (e(), r("div", l, [
      i("span", f, p(t.title), 1),
      t.chipProps ? (e(), c(m(a), n({
        key: 0,
        class: "absolute left-[40px]"
      }, t.chipProps), null, 16)) : s("", !0)
    ]));
  }
});
export {
  O as _
};
