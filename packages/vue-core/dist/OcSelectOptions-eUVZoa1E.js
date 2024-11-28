import { computed as h, openBlock as r, createBlock as m, unref as n, withCtx as p, createElementVNode as c, normalizeClass as l, createElementBlock as i, Fragment as g, renderList as v, createVNode as k, renderSlot as V, createCommentVNode as u, toDisplayString as x } from "vue";
import "dayjs";
import { _ as w } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as b } from "./OcIcon-CJgBICxh.js";
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
const C = {
  key: 0,
  class: "flex gap-3 border border-oc-gray-200 p-3 rounded cursor-pointer"
}, B = ["onClick"], T = ["src"], O = {
  key: 0,
  class: "flex text-sm text-oc-text-400 mt-2"
}, P = {
  __name: "OcSelectOptions",
  props: {
    variant: {
      type: String,
      default: "grid"
    },
    optionType: {
      type: String,
      default: "text"
      // text, icon, image
    },
    label: String,
    hint: String,
    errorMessage: String,
    placeholder: String,
    isDisabled: Boolean,
    borderless: Boolean,
    options: Array,
    modelValue: [Array, String, Number],
    isRequired: {
      type: Boolean,
      default: !1
    },
    labelIcon: {
      type: String,
      default: ""
    },
    tooltipText: {
      type: String,
      default: ""
    },
    tooltipOptions: {
      type: Object,
      default: () => ({})
    },
    class: String
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: y }) {
    const d = e, S = y, s = (a) => {
      S("update:modelValue", a);
    }, o = h(() => d.variant === "grid");
    return (a, $) => (r(), m(n(w), {
      label: e.label,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, {
      default: p(() => [
        c("div", {
          class: l(["gap-3", [
            d.class,
            o.value ? "grid-cols-3" : e.variant === "list2" ? "grid-cols-2" : "",
            {
              "w-full grid": e.optionType !== "icon",
              "flex flex-row ": e.optionType === "icon"
            }
          ]])
        }, [
          e.optionType === "icon" ? (r(), i("div", C, [
            (r(!0), i(g, null, v(e.options, (t) => (r(), i("div", {
              key: t.value,
              class: l(["p-1", {
                "bg-oc-gray-200 rounded-sm": t.value.toString() === e.modelValue.toString()
              }])
            }, [
              k(n(b), {
                name: t.icon_name,
                onClick: (f) => s(t.value)
              }, null, 8, ["name", "onClick"])
            ], 2))), 128))
          ])) : (r(!0), i(g, { key: 1 }, v(e.options, (t) => (r(), i("div", {
            key: t.value,
            class: l(["cursor-pointer group items-start", {
              "flex border border-oc-gray-200 p-3 rounded hover:shadow": !o.value,
              "border-2 border-oc-primary": !o.value && t.value.toString() === e.modelValue.toString(),
              "!border-0 hover:bg-oc-accent-1-50 flex": e.borderless
            }]),
            onClick: (f) => s(t.value)
          }, [
            V(a.$slots, "option", {
              option: t,
              selected: t.value.toString() === e.modelValue.toString()
            }, () => [
              t.preview ? (r(), i("img", {
                key: 0,
                class: l(["group-hover:shadow rounded", {
                  "border-2 border-oc-primary": o.value && t.value.toString() === e.modelValue.toString(),
                  "border border-oc-gray-200": o.value && t.value.toString() !== e.modelValue.toString() || !o.value,
                  "w-full": o.value,
                  "w-[50px]": !o.value
                }]),
                src: t.preview
              }, null, 10, T)) : u("", !0),
              c("div", {
                class: l(["mt-2", [o.value ? "text-center" : "px-3", e.borderless ? "flex-1" : ""]])
              }, [
                c("span", {
                  class: l(["font-medium text-oc-text-400 group-hover:text-oc-text-500", {
                    "text-sm ": o.value,
                    "text-oc-text-400 group-hover:text-oc-text-500": o.value && t.value.toString() !== e.modelValue.toString(),
                    "text-oc-text-500": o.value && t.value.toString() === e.modelValue.toString()
                  }])
                }, x(t.label), 3),
                t.description ? (r(), i("div", O, x(t.description), 1)) : u("", !0)
              ], 2),
              e.borderless ? (r(), m(n(b), {
                key: 1,
                width: "16",
                height: "16",
                name: "check-2",
                class: l(["text-oc-primary", t.value.toString() === e.modelValue.toString() ? "opacity-100" : "opacity-0"])
              }, null, 8, ["class"])) : u("", !0)
            ])
          ], 10, B))), 128))
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
};
export {
  P as _
};
