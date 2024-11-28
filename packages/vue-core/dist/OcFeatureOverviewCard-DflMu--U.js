import { openBlock as t, createElementBlock as i, createElementVNode as n, toDisplayString as s, createCommentVNode as a, Fragment as d, renderList as m, createBlock as p, unref as l, createVNode as u } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as f } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as v } from "./OcChip-BiALeB1C-DzQgECL4.js";
import { _ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const x = { class: "send-money-initial-state relative border rounded" }, h = { class: "z-10 p-7 flex flex-col relative" }, g = { class: "text-xl font-medium mb-4" }, y = {
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
          n("h2", g, s(e.title), 1),
          e.description ? (t(), i("p", y, s(e.description), 1)) : a("", !0),
          (c = e.features) != null && c.length ? (t(), i("div", k, [
            (t(!0), i(d, null, m(e.features, (r) => (t(), i("div", {
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
}, A = /* @__PURE__ */ _(w, [["__scopeId", "data-v-a65ec1a9"]]);
export {
  A as O
};
