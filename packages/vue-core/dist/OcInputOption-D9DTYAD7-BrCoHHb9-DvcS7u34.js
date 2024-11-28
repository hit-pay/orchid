import { useAttrs as R, ref as c, computed as y, openBlock as r, createBlock as f, unref as b, createSlots as _, withCtx as h, createElementVNode as p, normalizeClass as v, createElementBlock as n, renderSlot as d, createCommentVNode as i, mergeProps as S, toDisplayString as k, withModifiers as L } from "vue";
import "dayjs";
import { z as M, f as $ } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
const O = {
  key: 0,
  class: "border-r border-gray-200 pr-3 py-3"
}, P = { class: "flex flex-1 items-baseline gap-x-2" }, T = {
  key: 0,
  class: "text-oc-text-300"
}, V = { class: "flex items-center gap-x-1 w-full" }, q = {
  key: 0,
  class: "text-oc-text-300"
}, z = ["value", "readonly", "placeholder", "disabled", "autocomplete", "inputmode", "type"], G = {
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
  setup(e, { expose: B }) {
    const a = e, w = R(), m = c(), s = c(!1);
    B({
      focus: () => m.value.focus()
    });
    const u = c(!1), C = y(() => [
      {
        "shadow-[0_0_0_2px]": u.value && !a.isReadonly
      },
      !a.disabled && (a.errorMessage || a.hasError) ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
      a.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
      a.inputClass
    ]), I = y(() => {
      const { class: t, ...l } = w, o = {};
      return a.pattern && (o.pattern = a.pattern), { inputAttributes: o, ...l };
    }), g = y(() => a.inputType === "password");
    return (t, l) => (r(), f(b(M), {
      label: e.isInlineLabel ? "" : e.label,
      "label-class": e.labelClass,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, _({
      default: h(() => [
        p("div", {
          class: v(["rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer", C.value]),
          onClick: l[5] || (l[5] = (o) => {
            var x;
            return (x = t.$refs.inputRef) == null ? void 0 : x.focus();
          })
        }, [
          t.$slots.trailing ? (r(), n("div", O, [
            d(t.$slots, "trailing")
          ])) : i("", !0),
          d(t.$slots, "icon", {}, () => [
            e.icon ? (r(), f(b($), S({
              key: 0,
              class: "w-5 h-5 text-oc-text-400",
              name: e.icon
            }, e.iconProps), null, 16, ["name"])) : i("", !0)
          ]),
          p("div", P, [
            e.isInlineLabel && e.label ? (r(), n("label", T, k(e.label) + ": ", 1)) : i("", !0),
            p("div", V, [
              e.preFill ? (r(), n("span", q, k(e.preFill), 1)) : i("", !0),
              p("input", S({
                ref_key: "inputRef",
                ref: m,
                value: e.modelValue,
                readonly: e.isReadonly,
                placeholder: e.placeholder,
                disabled: e.disabled,
                autocomplete: e.autocomplete,
                inputmode: e.inputMode,
                class: "h-7 outline-none md:text-base text-lg w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              }, I.value, {
                type: g.value && s.value ? "text" : e.inputType,
                onFocus: l[0] || (l[0] = (o) => {
                  u.value = !0, t.$emit("focus", o);
                }),
                onBlur: l[1] || (l[1] = () => {
                  u.value = !1, t.$emit("blur");
                }),
                onInput: l[2] || (l[2] = (o) => t.$emit("update:modelValue", o.target.value)),
                onPaste: l[3] || (l[3] = (o) => t.$emit("paste"))
              }), null, 16, z)
            ])
          ]),
          t.$slots.leading || g.value ? (r(), n("div", {
            key: 1,
            class: v({
              "border-l border-gray-200 pl-3 py-3": e.hasLeadingSeparator
            })
          }, [
            t.$slots.leading ? i("", !0) : (r(), n("span", {
              key: 0,
              class: "text-oc-text-200",
              onClick: l[4] || (l[4] = L((o) => s.value = !s.value, ["prevent"]))
            }, [
              (r(), f(b($), {
                key: s.value,
                name: s.value ? "eye-open" : "eye-close",
                width: "16",
                height: "16"
              }, null, 8, ["name"]))
            ])),
            d(t.$slots, "leading")
          ], 2)) : i("", !0)
        ], 2)
      ]),
      _: 2
    }, [
      t.$slots.hint ? {
        name: "hint",
        fn: h(() => [
          d(t.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "label-class", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
};
export {
  G as J
};
