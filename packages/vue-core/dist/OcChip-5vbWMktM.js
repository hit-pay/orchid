import { computed as m, openBlock as c, createElementBlock as d, normalizeClass as o, renderSlot as k, createElementVNode as r, createBlock as i, unref as a, withCtx as g, toDisplayString as u, createVNode as h, mergeProps as f, createCommentVNode as b, withModifiers as y } from "vue";
import "dayjs";
import { T as w } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as n } from "./OcIcon-CJgBICxh.js";
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
const v = { class: "flex gap-3 items-center" }, S = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, H = {
  __name: "OcChip",
  props: {
    variant: {
      type: String,
      default: ""
    },
    label: String,
    icon: String,
    iconSize: String,
    iconTooltip: String,
    closable: Boolean,
    shouldTruncateChip: Boolean,
    iconProps: Object
  },
  emits: {
    remove: []
  },
  setup(t) {
    const s = t, x = m(() => {
      let e = "";
      switch (s.variant) {
        case "accent-1":
          e = "bg-oc-accent-1-50 text-oc-accent-1 ";
          break;
        case "accent-2":
          e = "bg-oc-accent-2-50 text-oc-accent-2 ";
          break;
        case "accent-3":
          e = "bg-oc-accent-3-50 text-oc-accent-3 ";
          break;
        case "success":
          e = "bg-oc-success-50 text-oc-success ";
          break;
        case "warning":
          e = "bg-oc-warning-50 text-oc-warning ";
          break;
        case "error":
          e = "bg-oc-error-50 text-oc-error ";
          break;
        case "gray":
          e = "bg-oc-gray-100 text-oc-gray-700 ";
          break;
        case "light-red":
          e = "bg-oc-accent-3-50 text-oc-accent-3";
          break;
        default:
          e = "bg-oc-primary-50 text-oc-primary ";
          break;
      }
      return e;
    }), p = m(() => {
      let e = "";
      switch (s.variant) {
        case "accent-1":
          e = "text-oc-accent-1-300";
          break;
        case "accent-2":
          e = "text-oc-accent-2-300";
          break;
        case "accent-3":
          e = "text-oc-accent-3-300";
          break;
        case "success":
          e = "text-oc-success-300 ";
          break;
        case "warning":
          e = "text-oc-warning-300 ";
          break;
        case "error":
          e = "text-oc-error-300 ";
          break;
        case "gray":
          e = "text-oc-gray-400 ";
          break;
        case "light-red":
          e = "text-oc-error ";
          break;
        default:
          e = "text-oc-primary-300 ";
          break;
      }
      return e;
    });
    return (e, l) => (c(), d("span", {
      class: o(["rounded-full flex items-center gap-x-3 py-1 px-3 text-sm leading-[20px]", x.value])
    }, [
      k(e.$slots, "default", {}, () => [
        r("div", v, [
          t.iconTooltip && t.icon ? (c(), i(a(w), {
            key: 0,
            position: "top",
            distance: 10
          }, {
            popper: g(() => [
              r("div", S, u(t.iconTooltip), 1)
            ]),
            default: g(() => [
              h(a(n), f({
                width: "18",
                height: "18",
                name: t.icon
              }, t.iconProps), null, 16, ["name"])
            ]),
            _: 1
          })) : t.icon ? (c(), i(a(n), {
            key: 1,
            width: t.iconSize ?? 18,
            height: t.iconSize ?? 18,
            name: t.icon
          }, null, 8, ["width", "height", "name"])) : b("", !0),
          r("div", {
            class: o({
              "truncate max-w-[180px]": t.shouldTruncateChip
            })
          }, u(t.label), 3)
        ])
      ]),
      t.closable ? (c(), i(a(n), {
        key: 0,
        width: "18",
        height: "18",
        class: o([p.value, "cursor-pointer"]),
        name: "filled-x-circle",
        onClick: l[0] || (l[0] = y((C) => e.$emit("remove"), ["stop"]))
      }, null, 8, ["class"])) : b("", !0)
    ], 2));
  }
};
export {
  H as _
};
