import { defineComponent as c, openBlock as i, createElementBlock as m, normalizeClass as e, createBlock as r, unref as o, createCommentVNode as n, createElementVNode as a, toDisplayString as s, mergeProps as l } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as p } from "./OcIcon-CJgBICxh.js";
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
const V = /* @__PURE__ */ c({
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
    return (g, d) => (i(), m("div", {
      class: e(["relative border rounded gap-x-3 flex justify-center items-center py-6 px-5 bg-oc-bg-light shadow-sm cursor-pointer hover:border-oc-primary duration-500", t.isActive ? "border-oc-primary" : "border-oc-gray-200"])
    }, [
      t.icon ? (i(), r(o(p), {
        key: 0,
        name: t.icon,
        width: t.width,
        height: t.height,
        class: e(t.iconClass)
      }, null, 8, ["name", "width", "height", "class"])) : n("", !0),
      a("span", null, s(t.title), 1),
      t.chipProps ? (i(), r(o(h), l({ key: 1 }, t.chipProps, { class: "absolute top-0 -translate-y-1/2 sm:right-9" }), null, 16)) : n("", !0)
    ], 2));
  }
});
export {
  V as _
};
