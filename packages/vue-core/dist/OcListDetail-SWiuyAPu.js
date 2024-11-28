import { computed as s, openBlock as i, createElementBlock as p, normalizeClass as e, createElementVNode as a, createTextVNode as u, toDisplayString as l, createBlock as d, unref as r, withCtx as f, createVNode as v, createCommentVNode as g, renderSlot as x } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as y } from "./OcIcon-CJgBICxh.js";
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
import { _ as h } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-IsqOGpEF.js";
const A = {
  __name: "OcListDetail",
  props: {
    label: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "small",
      validator: (t) => ["small", "big"].includes(t)
    },
    alignment: {
      type: String,
      default: "horizontal",
      validator: (t) => ["horizontal", "vertical"].includes(t)
    },
    showCopyTooltip: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const n = t, o = s(() => n.alignment === "vertical");
    return (c, S) => (i(), p("div", {
      class: e(["flex gap-x-5 text-sm group", { "flex-col": o.value }])
    }, [
      a("div", {
        class: e(["flex gap-x-2 items-center shrink-0 text-oc-text-400", { "w-[80px]": t.variant === "small" && !o.value }])
      }, [
        u(l(t.label) + " ", 1),
        t.showCopyTooltip ? (i(), d(r(h), {
          key: 0,
          value: t.content
        }, {
          default: f(({ isShow: m }) => [
            v(r(y), {
              width: "14",
              height: "14",
              class: e(["cursor-pointer transition-all duration-500 group-hover:opacity-100", m ? "opacity-100" : "opacity-0"]),
              name: "copy"
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["value"])) : g("", !0)
      ], 2),
      a("div", {
        class: e({ "text-base font-medium": o.value })
      }, [
        x(c.$slots, "content", {}, () => [
          a("span", null, l(t.content), 1)
        ])
      ], 2)
    ], 2));
  }
};
export {
  A as _
};
