import { defineComponent as s, computed as c, openBlock as e, createElementBlock as o, createVNode as d, unref as p, createElementVNode as m, toDisplayString as r, createCommentVNode as i, renderSlot as u } from "vue";
import "./Charts/LineChart/OcLineChart.js";
import { PieChart as f } from "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
const h = { class: "flex flex-col pt-10 px-7 gap-y-7 items-center" }, x = { class: "flex flex-col gap-y-4 text-center items-center" }, g = {
  key: 0,
  class: "text-xl font-medium"
}, b = {
  key: 0,
  class: "text-sm text-oc-text-400"
}, N = /* @__PURE__ */ s({
  __name: "OcOnboardingProgressbar",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: "0"
    },
    chartData: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const a = t, n = c(() => ({
      grid: {
        containLabel: !1
      },
      series: [
        {
          name: "Onboarding Progressbar",
          type: "pie",
          emphasis: {
            disabled: !0
          },
          avoidLabelOverlap: !1,
          label: {
            color: "#000",
            fontWeight: "bold",
            fontFamily: "Inter",
            fontSize: "24",
            position: "center",
            formatter: () => a.value + "%"
          },
          labelLine: {
            show: !0
          },
          radius: ["60%", "100%"],
          data: a.chartData
        }
      ]
    }));
    return (l, y) => (e(), o("div", h, [
      d(p(f), {
        class: "w-[140px] bg-white rounded-full h-[140px]",
        "additional-options": n.value,
        "tooltip-formatter": () => null,
        "tooltip-value-formatter": () => null
      }, null, 8, ["additional-options"]),
      m("div", x, [
        t.title ? (e(), o("span", g, r(t.title), 1)) : i("", !0),
        u(l.$slots, "description", {}, () => [
          t.description ? (e(), o("span", b, r(t.description), 1)) : i("", !0)
        ])
      ])
    ]));
  }
});
export {
  N as _
};
