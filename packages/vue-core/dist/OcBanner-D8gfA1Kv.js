import { openBlock as a, createBlock as i, Transition as f, withCtx as p, withDirectives as g, createElementVNode as t, normalizeClass as s, unref as r, createCommentVNode as l, renderSlot as c, toDisplayString as m, createTextVNode as y, vShow as b } from "vue";
import "dayjs";
import { B as x } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as h } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { _ as w } from "./OcIcon-CJgBICxh.js";
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
const v = { class: "flex items-center gap-3" }, B = { class: "text-oc-text-500" }, S = { class: "p-4 text-sm" }, k = {
  __name: "OcBanner",
  props: {
    modelValue: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "default"
    },
    content: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "filled-check"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    dismissible: {
      type: Boolean,
      default: !1
    },
    transitionName: {
      type: String,
      default: "slide-from-top"
    },
    title: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const d = Object.freeze({
      default: "bg-oc-success-50 text-oc-success-500",
      primary: "bg-oc-primary-50 text-oc-primary-500",
      error: "bg-oc-error-50 text-oc-error-500",
      warning: "bg-oc-warning-50 text-oc-warning-500",
      gray: "bg-oc-gray-100 text-oc-gray-700"
    }), u = Object.freeze({
      default: "border-oc-success-200",
      primary: "border-oc-primary-200",
      error: "border-oc-error-200",
      warning: "border-oc-warning-200",
      gray: "border-oc-gray-300"
    });
    return (o, n) => (a(), i(f, { name: e.transitionName }, {
      default: p(() => [
        g(t("div", {
          class: s([r(u)[e.color], "border rounded-lg banner relative overflow-hidden"])
        }, [
          t("div", {
            class: s(["flex flex-1 items-center justify-between gap-3 min-h-[34px] px-4 text-sm", r(d)[e.color]])
          }, [
            t("div", v, [
              e.showIcon ? (a(), i(r(w), {
                key: 0,
                name: e.icon,
                class: "shrink-0",
                width: "16",
                height: "16"
              }, null, 8, ["name"])) : l("", !0),
              c(o.$slots, "title", {}, () => [
                t("div", B, m(e.title), 1)
              ], !0)
            ]),
            e.dismissible ? (a(), i(r(x), {
              key: 0,
              variant: "secondary",
              "is-transparent": "",
              label: "Close",
              onClick: n[0] || (n[0] = (C) => o.$emit("update:modelValue", !1))
            })) : l("", !0)
          ], 2),
          t("div", S, [
            c(o.$slots, "default", {}, () => [
              y(m(e.content), 1)
            ], !0)
          ])
        ], 2), [
          [b, e.modelValue]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, L = /* @__PURE__ */ h(k, [["__scopeId", "data-v-d8517c87"]]);
export {
  L as O
};
