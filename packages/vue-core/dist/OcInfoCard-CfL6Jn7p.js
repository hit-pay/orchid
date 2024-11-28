import { useSlots as x, openBlock as o, createElementBlock as i, normalizeClass as n, createElementVNode as a, toDisplayString as c, createBlock as u, unref as s, withCtx as m, createVNode as d, createCommentVNode as r, renderSlot as l } from "vue";
import "dayjs";
import { T as g } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as p } from "./OcIcon-CJgBICxh.js";
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
const b = { class: "uppercase" }, v = { class: "flex flex-col px-3 py-2 text-[12px] text-oc-text-400 font-medium text-sm" }, w = { class: "mb-auto" }, B = {
  key: 1,
  class: "absolute top-2 right-2 left-2 bottom-2 bg-white flex items-center justify-center"
}, F = {
  __name: "OcInfoCard",
  props: {
    isLoading: Boolean,
    title: String,
    titleIcon: String,
    titleIconTooltip: String,
    titleClass: Object,
    transparent: Boolean,
    hover: Boolean,
    shadow: Boolean,
    noData: Boolean,
    noDataDescription: String
  },
  setup(t) {
    const h = x(), f = (e) => !!h[e];
    return (e, S) => (o(), i("div", {
      class: n(["border border-gray-200 rounded p-5 flex flex-col grow transition relative", {
        "border-transparent": t.transparent,
        "hover:shadow": t.hover,
        shadow: t.shadow
      }])
    }, [
      t.title && !f("header") ? (o(), i("div", {
        key: 0,
        class: n(["flex items-start text-oc-text-400 font-medium text-[10px]", t.titleClass])
      }, [
        a("div", b, c(t.title), 1),
        t.titleIconTooltip ? (o(), u(s(g), {
          key: 0,
          "popper-class": "w-max bg-oc-bg",
          position: "top-start"
        }, {
          popper: m(() => [
            a("div", v, c(t.titleIconTooltip), 1)
          ]),
          default: m(() => [
            d(s(p), {
              class: "ml-[3px]",
              name: t.titleIcon,
              width: "16",
              height: "16"
            }, null, 8, ["name"])
          ]),
          _: 1
        })) : r("", !0)
      ], 2)) : r("", !0),
      l(e.$slots, "header"),
      a("div", w, [
        l(e.$slots, "default")
      ]),
      l(e.$slots, "footer"),
      t.isLoading ? (o(), i("div", B, [
        d(s(p), {
          name: "loading-2",
          width: "32",
          height: "32",
          class: "text-oc-text-400 motion-safe:animate-spin"
        })
      ])) : r("", !0)
    ], 2));
  }
};
export {
  F as _
};
