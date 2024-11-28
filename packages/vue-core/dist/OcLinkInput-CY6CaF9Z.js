import { ref as p, computed as c, openBlock as o, createElementBlock as v, createBlock as L, unref as n, createCommentVNode as g, createVNode as f, withCtx as b, Fragment as O, renderList as C, createTextVNode as F, toDisplayString as q, createElementVNode as N, normalizeClass as $ } from "vue";
import "dayjs";
import { D as M } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as h } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as T } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const U = { class: "flex text-oc-text-400 items-center gap-x-2" }, P = {
  key: 0,
  class: "flex flex-col p-2 py-3 gap-2"
}, R = ["onClick"], ae = {
  __name: "OcLinkInput",
  props: {
    placeholder: String,
    hint: String,
    label: String,
    errorMessage: String,
    isInlineLabel: Boolean,
    isDisabled: Boolean,
    modelValue: String,
    type: String,
    title: String,
    links: {
      type: Array,
      default: () => []
    },
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
    isEdit: Boolean
  },
  emits: {
    "update:modelValue": [],
    "update:type": [],
    "update:title": []
  },
  setup(e, { emit: w }) {
    var V, x;
    const i = e, s = w, d = p(!1), r = p(i.type ?? ((x = (V = i.links) == null ? void 0 : V[0]) == null ? void 0 : x.value)), k = p(i.title ?? ""), u = c(
      () => i.links.find((t) => t.value === r.value) ?? {}
    ), m = c(() => u.value.preFill ?? ""), y = p(i.modelValue ? i.modelValue.replace(m.value, "") : ""), B = (t) => {
      var l;
      const a = (l = i.links.find((S) => S.value === t)) == null ? void 0 : l.preFill;
      s("update:modelValue", i.modelValue.replace(m.value, a)), r.value = t, s("update:type", t), d.value = !1;
    }, D = (t) => {
      y.value = t, s("update:modelValue", m.value + t), !i.isEdit && r.value !== "link" && s("update:title", t);
    }, E = c(() => u.value.placeholder ?? ""), I = c(() => r.value === "link");
    return (t, a) => (o(), v("div", null, [
      I.value || e.isEdit ? (o(), L(n(T), {
        key: 0,
        modelValue: k.value,
        "onUpdate:modelValue": [
          a[0] || (a[0] = (l) => k.value = l),
          a[1] || (a[1] = (l) => t.$emit("update:title", l))
        ],
        class: "mb-3",
        label: "Title",
        placeholder: "Title",
        "error-message": e.errorMessage ? " " : ""
      }, null, 8, ["modelValue", "error-message"])) : g("", !0),
      f(n(T), {
        placeholder: E.value,
        label: r.value === "link" ? "Link" : e.label,
        "error-message": e.errorMessage,
        "is-inline-label": e.isInlineLabel,
        disabled: e.isDisabled,
        hint: e.hint,
        "pre-fill": m.value,
        "model-value": y.value,
        "is-required": e.isRequired,
        "label-icon": e.labelIcon,
        "tooltip-text": e.tooltipText,
        "tooltip-options": e.tooltipOptions,
        "onUpdate:modelValue": D
      }, {
        trailing: b(() => [
          f(n(M), {
            modelValue: d.value,
            "onUpdate:modelValue": a[2] || (a[2] = (l) => d.value = l),
            distance: 10
          }, {
            menu: b(() => [
              e.isEdit ? g("", !0) : (o(), v("div", P, [
                (o(!0), v(O, null, C(e.links, (l) => (o(), v("div", {
                  key: l.value,
                  class: "flex rounded-sm items-center px-3 py-2 gap-x-3 cursor-pointer text-oc-text-400 hover:bg-gray-50",
                  onClick: (S) => B(l.value)
                }, [
                  f(n(h), {
                    width: "20",
                    height: "20",
                    name: l.icon
                  }, null, 8, ["name"]),
                  F(" " + q(l.label), 1)
                ], 8, R))), 128))
              ]))
            ]),
            default: b(() => [
              N("div", U, [
                u.value.icon ? (o(), L(n(h), {
                  key: 0,
                  width: "20",
                  height: "20",
                  name: u.value.icon
                }, null, 8, ["name"])) : g("", !0),
                f(n(h), {
                  width: "16",
                  height: "16",
                  class: $(["transition duration-300", d.value ? "-rotate-180" : ""]),
                  name: "chevron-down"
                }, null, 8, ["class"])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["placeholder", "label", "error-message", "is-inline-label", "disabled", "hint", "pre-fill", "model-value", "is-required", "label-icon", "tooltip-text", "tooltip-options"])
    ]));
  }
};
export {
  ae as _
};
