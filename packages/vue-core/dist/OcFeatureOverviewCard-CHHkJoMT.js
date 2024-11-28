import { openBlock as t, createElementBlock as i, createElementVNode as n, toDisplayString as s, createCommentVNode as a, Fragment as m, renderList as d, createBlock as p, unref as l, createVNode as u } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { _ as f } from "./OcIcon-CJgBICxh.js";
import { _ as v } from "./OcChip-5vbWMktM.js";
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
const x = { class: "send-money-initial-state relative border rounded" }, h = { class: "z-10 p-7 flex flex-col relative" }, y = { class: "text-xl font-medium mb-4" }, g = {
  key: 0,
  class: "text-oc-text-400 mb-10"
}, k = {
  key: 1,
  class: "flex gap-4 flex-wrap"
}, b = { class: "text-sm font-medium" }, w = {
  __name: "OcFeatureOverviewCard",
  props: {
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      default: ""
    },
    features: {
      type: Array,
      default: () => [],
      validator: (e) => e.every((o) => "title" in o && "icon" in o)
    }
  },
  setup(e) {
    return (o, O) => {
      var c;
      return t(), i("div", x, [
        n("div", h, [
          n("h2", y, s(e.title), 1),
          e.description ? (t(), i("p", g, s(e.description), 1)) : a("", !0),
          (c = e.features) != null && c.length ? (t(), i("div", k, [
            (t(!0), i(m, null, d(e.features, (r) => (t(), i("div", {
              key: r.title,
              class: "rounded bg-white flex flex-col gap-2 p-6 items-center justify-center relative"
            }, [
              r.comingSoon ? (t(), p(l(v), {
                key: 0,
                variant: "accent-2",
                label: "Coming soon",
                class: "absolute top-3 left-3"
              })) : a("", !0),
              u(l(f), {
                name: r.icon,
                height: "56",
                width: "56"
              }, null, 8, ["name"]),
              n("span", b, s(r.title), 1)
            ]))), 128))
          ])) : a("", !0)
        ])
      ]);
    };
  }
}, K = /* @__PURE__ */ _(w, [["__scopeId", "data-v-d658d1d3"]]);
export {
  K as O
};
