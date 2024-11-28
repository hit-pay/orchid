import { useAttrs as R, ref as c, computed as f, openBlock as i, createBlock as m, unref as y, createSlots as P, withCtx as v, createElementVNode as d, normalizeClass as x, createElementBlock as r, renderSlot as u, createCommentVNode as s, mergeProps as S, toDisplayString as $, withModifiers as V } from "vue";
import "dayjs";
import { _ as M } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as k } from "./OcIcon-CJgBICxh.js";
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
const F = {
  key: 0,
  class: "border-r border-gray-200 pr-3 py-3"
}, L = { class: "flex flex-1 items-baseline gap-x-2" }, O = {
  key: 0,
  class: "text-oc-text-300"
}, T = { class: "flex items-center gap-x-1 w-full" }, q = {
  key: 0,
  class: "text-oc-text-300"
}, E = ["value", "readonly", "placeholder", "disabled", "autocomplete", "inputmode", "type"], ee = {
  __name: "OcInput",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    errorMessage: {
      type: String,
      default: ""
    },
    iconProps: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    isInlineLabel: {
      type: Boolean,
      default: !1
    },
    isReadonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    icon: {
      type: String,
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    autocomplete: {
      type: String,
      default: "one-time-code"
    },
    preFill: {
      type: String,
      default: ""
    },
    hasError: {
      type: Boolean,
      default: !1
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
    hasLeadingSeparator: {
      type: Boolean,
      default: !0
    },
    inputMode: {
      type: String,
      validator: (e) => ["text", "decimal", "numeric", "tel", "search", "email", "url"].includes(e),
      default: "text"
    },
    pattern: {
      type: String,
      default: ""
    },
    labelClass: {
      type: String,
      default: ""
    },
    inputClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "blur", "focus", "paste"],
  setup(e, { expose: w }) {
    const a = e, B = R(), b = c(), n = c(!1);
    w({
      focus: () => b.value.focus()
    });
    const p = c(!1), C = f(() => [
      {
        "shadow-[0_0_0_2px]": p.value && !a.isReadonly
      },
      !a.disabled && (a.errorMessage || a.hasError) ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
      a.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
      a.inputClass
    ]), I = f(() => {
      const { class: t, ...l } = B, o = {};
      return a.pattern && (o.pattern = a.pattern), { inputAttributes: o, ...l };
    }), g = f(() => a.inputType === "password");
    return (t, l) => (i(), m(y(M), {
      label: e.isInlineLabel ? "" : e.label,
      "label-class": e.labelClass,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, P({
      default: v(() => [
        d("div", {
          class: x(["rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer", C.value]),
          onClick: l[5] || (l[5] = (o) => {
            var h;
            return (h = t.$refs.inputRef) == null ? void 0 : h.focus();
          })
        }, [
          t.$slots.trailing ? (i(), r("div", F, [
            u(t.$slots, "trailing")
          ])) : s("", !0),
          u(t.$slots, "icon", {}, () => [
            e.icon ? (i(), m(y(k), S({
              key: 0,
              class: "w-5 h-5 text-oc-text-400",
              name: e.icon
            }, e.iconProps), null, 16, ["name"])) : s("", !0)
          ]),
          d("div", L, [
            e.isInlineLabel && e.label ? (i(), r("label", O, $(e.label) + ": ", 1)) : s("", !0),
            d("div", T, [
              e.preFill ? (i(), r("span", q, $(e.preFill), 1)) : s("", !0),
              d("input", S({
                ref_key: "inputRef",
                ref: b,
                value: e.modelValue,
                readonly: e.isReadonly,
                placeholder: e.placeholder,
                disabled: e.disabled,
                autocomplete: e.autocomplete,
                inputmode: e.inputMode,
                class: "h-7 outline-none md:text-base text-lg w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              }, I.value, {
                type: g.value && n.value ? "text" : e.inputType,
                onFocus: l[0] || (l[0] = (o) => {
                  p.value = !0, t.$emit("focus", o);
                }),
                onBlur: l[1] || (l[1] = () => {
                  p.value = !1, t.$emit("blur");
                }),
                onInput: l[2] || (l[2] = (o) => t.$emit("update:modelValue", o.target.value)),
                onPaste: l[3] || (l[3] = (o) => t.$emit("paste"))
              }), null, 16, E)
            ])
          ]),
          t.$slots.leading || g.value ? (i(), r("div", {
            key: 1,
            class: x({
              "border-l border-gray-200 pl-3 py-3": e.hasLeadingSeparator
            })
          }, [
            t.$slots.leading ? s("", !0) : (i(), r("span", {
              key: 0,
              class: "text-oc-text-200",
              onClick: l[4] || (l[4] = V((o) => n.value = !n.value, ["prevent"]))
            }, [
              (i(), m(y(k), {
                key: n.value,
                name: n.value ? "eye-open" : "eye-close",
                width: "16",
                height: "16"
              }, null, 8, ["name"]))
            ])),
            u(t.$slots, "leading")
          ], 2)) : s("", !0)
        ], 2)
      ]),
      _: 2
    }, [
      t.$slots.hint ? {
        name: "hint",
        fn: v(() => [
          u(t.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "label-class", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
};
export {
  ee as _
};
