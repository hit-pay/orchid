import { openBlock as r, createElementBlock as s, createElementVNode as t, renderSlot as i, normalizeClass as u, createVNode as n, unref as p, createCommentVNode as d } from "vue";
import "dayjs";
import { B as f } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as x } from "./OcIcon-CJgBICxh.js";
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
const g = {
  key: 0,
  class: "fixed w-screen z-[1007] bg-white top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
}, v = { class: "w-[calc(100%-40px)] h-[calc(100%-40px)]" }, y = { class: "modal-body p-9" }, O = {
  __name: "OcModalPage",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    isCloseIconVisible: {
      type: Boolean,
      default: !0
    },
    isBackButtonVisible: {
      type: Boolean,
      default: !1
    },
    preventClose: {
      type: Boolean,
      default: !1
    },
    contentClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "back", "click:outside"],
  setup(o, { emit: m }) {
    const l = m;
    return (a, e) => o.modelValue ? (r(), s("div", g, [
      t("div", v, [
        i(a.$slots, "top"),
        t("div", {
          class: u(["relative z-[1008] shadow-normal max-w-[1440px] bg-[linear-gradient(180deg,_rgba(229,_238,_255,_0.5)_0%,_rgba(229,_238,_255,_0)_77.75%)] rounded-xl flex flex-col overflow-y-auto mx-auto", o.contentClass])
        }, [
          o.isBackButtonVisible ? (r(), s("div", {
            key: 0,
            class: "py-3 px-4 rounded cursor-pointer text-oc-gray-400 hover:bg-gray-100 hover:text-oc-text absolute top-5 left-5",
            onClick: e[0] || (e[0] = (c) => l("back"))
          }, [
            n(p(f), {
              variant: "secondary",
              "is-transparent": "",
              label: "Back",
              "left-icon": "chevron-left"
            })
          ])) : d("", !0),
          t("div", {
            class: "flex gap-3 py-3 px-4 rounded cursor-pointer text-oc-gray-400 hover:bg-gray-100 hover:text-oc-text absolute top-5 right-5",
            onClick: e[1] || (e[1] = (c) => l("update:model-value", !1))
          }, [
            n(p(x), {
              name: "x",
              width: "18",
              height: "18"
            }),
            e[2] || (e[2] = t("span", null, "Close", -1))
          ]),
          t("div", y, [
            i(a.$slots, "default")
          ])
        ], 2)
      ])
    ])) : d("", !0);
  }
};
export {
  O as _
};
