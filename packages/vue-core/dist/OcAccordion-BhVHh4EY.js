import { ref as u, watch as b, onUpdated as p, openBlock as l, createElementBlock as y, normalizeClass as a, createElementVNode as n, renderSlot as s, createTextVNode as c, toDisplayString as m, createBlock as x, unref as f, createCommentVNode as h, nextTick as g } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as E } from "./OcIcon-CJgBICxh.js";
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
const U = {
  __name: "OcAccordion",
  props: {
    header: {
      type: String,
      default: ""
    },
    headerStyle: {
      type: String,
      default: ""
    },
    body: {
      type: String,
      default: ""
    },
    bodyStyle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "chevron-down"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    isAnimated: {
      type: Boolean,
      default: !0
    },
    isExpandable: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:isExpandable": []
  },
  setup(e) {
    const i = u(), o = e, r = async (t) => {
      await g(), i.value && (i.value.style.maxHeight = t ? "max-content" : "0");
    };
    return b(() => o.isExpandable, r), p(() => {
      r(o.isExpandable);
    }), (t, d) => (l(), y("div", {
      class: a(e.isDisabled && "opacity-60")
    }, [
      n("div", null, [
        n("div", {
          class: a(["border-oc-accent-1-50 py-3 text-sm border z-10 justify-between px-4 gap-x-3 flex hover:border-oc-gray-200 items-center w-full text-oc-text", [
            e.isExpandable ? "rounded-t border-oc-gray-200" : "rounded border-transparent",
            e.headerStyle
          ]]),
          onClick: d[0] || (d[0] = (v) => o.isDisabled ? null : t.$emit("update:isExpandable", !o.isExpandable))
        }, [
          s(t.$slots, "header", {}, () => [
            c(m(e.header), 1)
          ]),
          e.showIcon ? (l(), x(f(E), {
            key: 0,
            name: e.icon,
            class: a(["text-oc-text-400 w-4 h-4 shrink-0", [e.isExpandable && "-rotate-180", e.isAnimated && "transition-all duration-300"]])
          }, null, 8, ["name", "class"])) : h("", !0)
        ], 2),
        n("div", {
          ref_key: "upcomingAccordion",
          ref: i,
          class: a(["max-h-0", [e.isAnimated && "transition-all duration-300", !e.isExpandable && "overflow-hidden"]])
        }, [
          n("div", {
            class: a(["text-oc-text text-sm p-4 rounded-b z-0 border-x border-b", [e.isExpandable ? "border-oc-gray-200" : " border-transparent", e.bodyStyle]])
          }, [
            s(t.$slots, "body", {}, () => [
              c(m(e.body), 1)
            ])
          ], 2)
        ], 2)
      ])
    ], 2));
  }
};
export {
  U as _
};
