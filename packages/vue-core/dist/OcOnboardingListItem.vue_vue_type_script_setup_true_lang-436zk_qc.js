import { defineComponent as a, openBlock as e, createElementBlock as i, createElementVNode as o, createVNode as c, unref as n, toDisplayString as s, renderSlot as l, createBlock as d, mergeProps as p, createCommentVNode as u } from "vue";
import "dayjs";
import { B as f } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
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
const x = { class: "bg-oc-bg-light py-5 px-7 gap-x-7 flex items-center" }, h = { class: "flex-1 flex gap-x-4 items-center" }, g = {
  key: 0,
  class: "w-[24px] h-[24px] min-w-[24px] flex items-center text-white justify-center rounded-full bg-oc-primary"
}, y = {
  key: 1,
  class: "w-[24px] h-[24px] min-w-[24px] flex items-center justify-center border rounded-full text-oc-warning border-oc-warning"
}, b = {
  key: 2,
  class: "w-[24px] h-[24px] min-w-[24px] text-oc-text-300 text-sm font-medium flex items-center justify-center border rounded-full border-oc-gray-200"
}, _ = { class: "flex flex-col gap-y-1" }, w = { class: "font-medium" }, k = { class: "text-oc-text-300 text-sm" }, F = /* @__PURE__ */ a({
  __name: "OcOnboardingListItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    buttonOptions: {
      type: Object,
      default: () => ({})
    },
    status: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 1
    },
    isButtonVisible: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    return (r, B) => (e(), i("div", x, [
      o("div", h, [
        t.status === "completed" ? (e(), i("div", g, [
          c(n(m), {
            name: "check-2",
            width: "12",
            height: "12"
          })
        ])) : t.status === "pending" ? (e(), i("div", y, [
          c(n(m), {
            name: "time-filled",
            width: "18",
            height: "18"
          })
        ])) : (e(), i("div", b, s(t.number), 1)),
        o("div", _, [
          l(r.$slots, "default", {}, () => [
            o("span", w, s(t.title), 1),
            o("span", k, s(t.description), 1)
          ])
        ])
      ]),
      l(r.$slots, "action", {}, () => [
        t.isButtonVisible ? (e(), d(n(f), p({ key: 0 }, t.buttonOptions, { class: "shrink-0" }), null, 16)) : u("", !0)
      ])
    ]));
  }
});
export {
  F as _
};
