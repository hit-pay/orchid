import { ref as u, computed as I, watch as q, openBlock as a, createBlock as f, unref as b, withCtx as h, createElementVNode as d, createElementBlock as x, toDisplayString as w, createCommentVNode as k, normalizeClass as O, renderSlot as C, Fragment as L, renderList as N, withKeys as A } from "vue";
import "dayjs";
import { _ as E } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as F } from "./OcIcon-CJgBICxh.js";
import { _ as $ } from "./OcChip-5vbWMktM.js";
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
const M = { class: "flex flex-1 items-baseline gap-x-2" }, j = {
  key: 0,
  class: "text-oc-text-300"
}, K = { class: "w-full flex flex-wrap gap-2" }, T = { key: 1 }, z = ["value", "readonly", "placeholder", "disabled"], se = {
  __name: "OcInputOption",
  props: {
    label: String,
    hint: String,
    errorMessage: String,
    placeholder: String,
    isInlineLabel: Boolean,
    isReadonly: Boolean,
    isDisabled: Boolean,
    modelValue: Array,
    maxVisibleOptions: {
      type: Number,
      default: 2
    },
    isRequired: {
      type: Boolean,
      default: !1
    },
    allowDuplicated: {
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
    }
  },
  emits: {
    "update:modelValue": [],
    "option-added": [],
    "option-removed": [],
    blur: []
  },
  setup(e, { expose: B, emit: R }) {
    const m = e, c = R, o = u([]), v = u(), g = u(""), s = u(!1), y = u(!1), p = I(() => s.value ? o.value : o.value.slice(0, m.maxVisibleOptions)), S = (t) => {
      o.value = o.value.filter((l) => l !== t), c("option-removed", t), c("update:modelValue", o.value);
    }, V = (t) => {
      if (!(t != null && t.trim()))
        return;
      const l = (t == null ? void 0 : t.split(",")) || [];
      l.forEach((n) => {
        var r;
        n != null && n.trim() && (!m.allowDuplicated && ((r = o.value) != null && r.includes(n)) || (o.value.push(n), c("option-added", n)));
      }), l.length && (g.value = "", c("update:modelValue", o.value));
    };
    return q(
      () => m.modelValue,
      () => {
        o.value = [...m.modelValue || []];
      },
      {
        immediate: !0,
        deep: !0
      }
    ), B({
      focus: () => v.value.focus()
    }), (t, l) => (a(), f(b(E), {
      label: e.isInlineLabel ? "" : e.label,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, {
      default: h(() => {
        var n, r;
        return [
          d("div", M, [
            e.isInlineLabel && e.label ? (a(), x("label", j, w(e.label) + ": ", 1)) : k("", !0),
            d("div", {
              class: "bg-oc-bg-light flex items-center gap-x-1 w-full",
              onClick: l[4] || (l[4] = (i) => v.value.focus())
            }, [
              d("div", {
                class: O(["border min-h-[36px] py-3 w-full px-3 flex justify-between items-center cursor-pointer gap-x-3 rounded", {
                  "border-oc-error": e.errorMessage && !e.isDisabled,
                  "pointer-events-none bg-oc-bg-dark": e.isDisabled
                }])
              }, [
                d("div", K, [
                  C(t.$slots, "default", {
                    options: p.value,
                    areAllOptionsVisible: s.value
                  }, () => [
                    (a(!0), x(L, null, N(p.value, (i, D) => (a(), f(b($), {
                      key: `${i}-${D}`,
                      closable: "",
                      label: i,
                      onRemove: (G) => S(i)
                    }, null, 8, ["label", "onRemove"]))), 128)),
                    o.value.length > e.maxVisibleOptions ? (a(), f(b($), {
                      key: 0,
                      variant: "gray",
                      onClick: l[0] || (l[0] = (i) => s.value = !s.value)
                    }, {
                      default: h(() => [
                        s.value ? (a(), f(b(F), {
                          key: 0,
                          name: "minus",
                          width: "12",
                          height: "12"
                        })) : (a(), x("span", T, w(`+${o.value.length - e.maxVisibleOptions}`), 1))
                      ]),
                      _: 1
                    })) : k("", !0)
                  ]),
                  d("input", {
                    ref_key: "inputRef",
                    ref: v,
                    type: "text",
                    value: g.value,
                    readonly: e.isReadonly,
                    placeholder: ((n = p.value) == null ? void 0 : n.length) === 0 ? e.placeholder : "",
                    disabled: e.isDisabled,
                    class: O(["h-7 flex-1 outline-none text-oc-text disabled:bg-transparent placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light", ((r = p.value) == null ? void 0 : r.length) === 0 ? "min-w-full" : "min-w-[80px]"]),
                    onFocus: l[1] || (l[1] = (i) => y.value = !0),
                    onBlur: l[2] || (l[2] = (i) => {
                      console.log("$event: ", i), y.value = !1, t.$emit("blur", i);
                    }),
                    onKeyup: l[3] || (l[3] = A((i) => V(i.target.value), ["enter"]))
                  }, null, 42, z)
                ])
              ], 2)
            ])
          ])
        ];
      }),
      _: 3
    }, 8, ["label", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
};
export {
  se as _
};
