import { computed as l, openBlock as o, createElementBlock as n, normalizeClass as m, createElementVNode as e, createBlock as d, unref as u, mergeProps as p, createCommentVNode as r, toDisplayString as i, renderSlot as x } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as f } from "./OcIcon-CJgBICxh.js";
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
const g = { class: "flex items-center gap-x-3 p-3" }, v = { class: "md:text-base text-sm" }, b = {
  key: 0,
  class: "p-3 text-sm text-oc-text-300"
}, q = {
  __name: "OcDropdownItem",
  props: {
    variant: {
      type: String,
      default: "default"
    },
    icon: String,
    iconClasses: String,
    text: String,
    subText: String,
    pointed: Boolean,
    iconProps: Object
  },
  setup(t) {
    const a = l(() => ({
      default: "text-oc-text",
      destructive: "text-oc-error"
    }));
    return (c, s) => (o(), n("div", {
      class: m(["flex flex-col cursor-pointer rounded-sm hover:bg-oc-accent-1-50", a.value[t.variant]])
    }, [
      e("div", g, [
        t.icon ? (o(), d(u(f), p({
          key: 0,
          class: "w-5 h-5",
          name: t.icon
        }, t.iconProps, { class: t.iconClasses }), null, 16, ["name", "class"])) : r("", !0),
        e("span", v, i(t.text), 1),
        t.pointed ? x(c.$slots, "badge", { key: 1 }, () => [
          s[0] || (s[0] = e("div", { class: "w-[6px] aspect-square rounded-full bg-oc-error" }, null, -1))
        ]) : r("", !0)
      ]),
      t.subText ? (o(), n("div", b, [
        e("span", null, i(t.subText), 1)
      ])) : r("", !0)
    ], 2));
  }
};
export {
  q as _
};
