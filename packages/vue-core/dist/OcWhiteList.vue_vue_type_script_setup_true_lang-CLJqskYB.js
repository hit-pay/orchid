import { defineComponent as a, openBlock as l, createElementBlock as m, createElementVNode as t, renderSlot as s, createTextVNode as p, toDisplayString as r, createBlock as d, unref as n, normalizeProps as f, mergeProps as c, createCommentVNode as u, createVNode as g } from "vue";
import "dayjs";
import { B as x } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as h } from "./OcTag.vue_vue_type_script_setup_true_lang-D19lw-8Y.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const y = { class: "flex justify-center pt-[75px] items-start backdrop-blur-sm" }, _ = { class: "bg-white relative z-10 rounded pb-3 max-w-[320px] w-[96vw] shadow" }, b = { class: "flex flex-col gap-y-7 p-5" }, v = { class: "min-w-[142px] pt-7 flex justify-center items-center" }, w = ["src"], j = { class: "flex text-center flex-col gap-y-3" }, O = { class: "text-lg flex justify-center gap-x-3 items-center font-medium" }, P = { class: "text-oc-text-400" }, k = { class: "py-6 px-5 flex items-center justify-center" }, G = /* @__PURE__ */ a({
  __name: "OcWhiteList",
  props: {
    buttonProps: {
      type: Object,
      default: () => ({})
    },
    tagOptions: {
      type: Object,
      default: () => null
    },
    title: String,
    imagePath: String,
    description: String
  },
  setup(e) {
    return (o, i) => (l(), m("div", y, [
      i[0] || (i[0] = t("div", { class: "absolute w-full h-full top-0 left-0 bg-oc-gray-50 opacity-80" }, null, -1)),
      t("div", _, [
        t("div", b, [
          s(o.$slots, "logo", {}, () => [
            t("div", v, [
              t("img", {
                src: e.imagePath,
                alt: "logo"
              }, null, 8, w)
            ])
          ]),
          t("div", j, [
            t("div", O, [
              p(r(e.title) + " ", 1),
              e.tagOptions ? (l(), d(n(h), f(c({ key: 0 }, e.tagOptions)), null, 16)) : u("", !0)
            ]),
            t("span", P, r(e.description), 1)
          ]),
          s(o.$slots, "bottom")
        ]),
        t("div", k, [
          s(o.$slots, "footer", {}, () => [
            g(n(x), c({
              label: "Request Access",
              class: "w-fit"
            }, e.buttonProps), null, 16)
          ])
        ])
      ])
    ]));
  }
});
export {
  G as _
};
