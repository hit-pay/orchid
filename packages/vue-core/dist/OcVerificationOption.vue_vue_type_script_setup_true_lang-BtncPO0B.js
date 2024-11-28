import { defineComponent as l, openBlock as t, createElementBlock as s, normalizeClass as a, createElementVNode as o, renderSlot as r, toDisplayString as p, createBlock as n, unref as m, normalizeProps as d, mergeProps as f, createCommentVNode as c } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as u } from "./OcIcon-CJgBICxh.js";
import { _ as h } from "./OcChip-5vbWMktM.js";
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
const y = { class: "flex items-center" }, g = { class: "flex flex-1 items-center gap-x-3" }, x = { class: "font-medium text-lg" }, q = /* @__PURE__ */ l({
  __name: "OcVerificationOption",
  props: {
    title: {
      type: String,
      default: "Enter form manually"
    },
    chipOptions: {
      type: Object,
      default: null
    },
    icon: {
      type: String,
      default: "check-2"
    },
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (i, k) => (t(), s("div", {
      class: a(["rounded hover:bg-oc-gray-50 p-5 flex flex-col gap-y-3", e.isActive ? "border-2 border-oc-primary" : "border border-oc-gray-200"])
    }, [
      o("div", y, [
        o("div", g, [
          r(i.$slots, "title", {}, () => [
            o("span", x, p(e.title), 1)
          ]),
          e.chipOptions ? (t(), n(m(h), d(f({ key: 0 }, e.chipOptions)), null, 16)) : c("", !0)
        ]),
        e.isActive ? (t(), n(m(u), {
          key: 0,
          class: "shrink-0 text-oc-primary",
          name: e.icon,
          width: "18",
          height: "18"
        }, null, 8, ["name"])) : c("", !0)
      ]),
      r(i.$slots, "content")
    ], 2));
  }
});
export {
  q as _
};
