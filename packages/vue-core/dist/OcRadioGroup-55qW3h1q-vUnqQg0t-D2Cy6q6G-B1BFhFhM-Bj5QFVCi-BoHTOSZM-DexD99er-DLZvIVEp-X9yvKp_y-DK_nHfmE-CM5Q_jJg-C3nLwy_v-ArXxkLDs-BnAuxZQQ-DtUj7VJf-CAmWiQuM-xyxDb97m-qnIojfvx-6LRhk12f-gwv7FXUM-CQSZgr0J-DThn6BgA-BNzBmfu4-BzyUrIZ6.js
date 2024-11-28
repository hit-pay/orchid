import { useAttrs as _, ref as S, computed as y, openBlock as i, createBlock as u, unref as c, createSlots as M, withCtx as k, createElementVNode as d, normalizeClass as f, createElementBlock as p, renderSlot as b, createCommentVNode as s, mergeProps as V, toDisplayString as $, withModifiers as I, Fragment as O, renderList as A } from "vue";
import "dayjs";
import { b as R, A as C } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { R as F } from "./OcRadio-C8GTXr8W-BDwhZQ_m-DekVtcsK-Dy07eXyo-CbUmmwLV-CSCaQxWQ-mThA_WVE-BFu5G8vq-BCEQKZvV-BLNnY8cI-CjHQr8xW-CJamnScE-D2Yp7nxl-C1upg8lS-DBeSJCxl-DpEzT2u_-BaFQuRgG-C9CXIvAv-BeXF3eVV-5jkttCU6-BsLyboEK-BVgWbZt3-BxX_SG_9-Cz6hsuNI.js";
const L = {
  key: 0,
  class: "border-r border-gray-200 pr-3 py-3"
}, N = { class: "flex flex-1 items-baseline gap-x-2" }, P = {
  key: 0,
  class: "text-oc-text-300"
}, T = { class: "flex items-center gap-x-1 w-full" }, q = {
  key: 0,
  class: "text-oc-text-300"
}, E = ["value", "readonly", "placeholder", "disabled", "autocomplete", "inputmode", "type"], H = {
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
  setup(e, { expose: x }) {
    const a = e, h = _(), m = S(), n = S(!1);
    x({
      focus: () => m.value.focus()
    });
    const g = S(!1), o = y(() => [
      {
        "shadow-[0_0_0_2px]": g.value && !a.isReadonly
      },
      !a.disabled && (a.errorMessage || a.hasError) ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
      a.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
      a.inputClass
    ]), v = y(() => {
      const { class: t, ...l } = h, r = {};
      return a.pattern && (r.pattern = a.pattern), { inputAttributes: r, ...l };
    }), B = y(() => a.inputType === "password");
    return (t, l) => (i(), u(c(R), {
      label: e.isInlineLabel ? "" : e.label,
      "label-class": e.labelClass,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, M({
      default: k(() => [
        d("div", {
          class: f(["rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer", o.value]),
          onClick: l[5] || (l[5] = (r) => {
            var w;
            return (w = t.$refs.inputRef) == null ? void 0 : w.focus();
          })
        }, [
          t.$slots.trailing ? (i(), p("div", L, [
            b(t.$slots, "trailing")
          ])) : s("", !0),
          b(t.$slots, "icon", {}, () => [
            e.icon ? (i(), u(c(C), V({
              key: 0,
              class: "w-5 h-5 text-oc-text-400",
              name: e.icon
            }, e.iconProps), null, 16, ["name"])) : s("", !0)
          ]),
          d("div", N, [
            e.isInlineLabel && e.label ? (i(), p("label", P, $(e.label) + ": ", 1)) : s("", !0),
            d("div", T, [
              e.preFill ? (i(), p("span", q, $(e.preFill), 1)) : s("", !0),
              d("input", V({
                ref_key: "inputRef",
                ref: m,
                value: e.modelValue,
                readonly: e.isReadonly,
                placeholder: e.placeholder,
                disabled: e.disabled,
                autocomplete: e.autocomplete,
                inputmode: e.inputMode,
                class: "h-7 outline-none md:text-base text-lg w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              }, v.value, {
                type: B.value && n.value ? "text" : e.inputType,
                onFocus: l[0] || (l[0] = (r) => {
                  g.value = !0, t.$emit("focus", r);
                }),
                onBlur: l[1] || (l[1] = () => {
                  g.value = !1, t.$emit("blur");
                }),
                onInput: l[2] || (l[2] = (r) => t.$emit("update:modelValue", r.target.value)),
                onPaste: l[3] || (l[3] = (r) => t.$emit("paste"))
              }), null, 16, E)
            ])
          ]),
          t.$slots.leading || B.value ? (i(), p("div", {
            key: 1,
            class: f({
              "border-l border-gray-200 pl-3 py-3": e.hasLeadingSeparator
            })
          }, [
            t.$slots.leading ? s("", !0) : (i(), p("span", {
              key: 0,
              class: "text-oc-text-200",
              onClick: l[4] || (l[4] = I((r) => n.value = !n.value, ["prevent"]))
            }, [
              (i(), u(c(C), {
                key: n.value,
                name: n.value ? "eye-open" : "eye-close",
                width: "16",
                height: "16"
              }, null, 8, ["name"]))
            ])),
            b(t.$slots, "leading")
          ], 2)) : s("", !0)
        ], 2)
      ]),
      _: 2
    }, [
      t.$slots.hint ? {
        name: "hint",
        fn: k(() => [
          b(t.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "label-class", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, K = {
  __name: "OcRadioGroup",
  props: {
    alignment: {
      type: String,
      default: "vertical"
    },
    radio: Array,
    label: String,
    wrapperClass: String,
    groupName: String,
    errorMessage: String,
    hint: String,
    modelValue: String,
    isButtonVariant: Boolean,
    isButtonVariantWithRadio: Boolean,
    isBlock: Boolean
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: x }) {
    const a = x, h = y(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), m = (n) => {
      a("update:modelValue", n);
    };
    return (n, g) => (i(), u(c(R), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: k(() => [
        d("div", {
          class: f(["flex", [h.value[e.alignment], e.wrapperClass]])
        }, [
          (i(!0), p(O, null, A(e.radio, (o, v) => (i(), u(c(F), {
            id: o.value,
            key: v,
            class: f({ "!w-fit": !e.isBlock }),
            "model-value": o.value,
            label: o.label,
            icon: o.icon,
            "is-error": !!e.errorMessage,
            checked: o.value === e.modelValue,
            "is-disabled": !!o.isDisabled,
            "group-name": e.groupName,
            "tooltip-text": o.tooltipText,
            "label-icon": o.labelIcon,
            "tooltip-options": o.tooltipOptions,
            "is-button-variant": e.isButtonVariant,
            "is-button-variant-with-radio": e.isButtonVariantWithRadio,
            "onUpdate:modelValue": m
          }, null, 8, ["id", "class", "model-value", "label", "icon", "is-error", "checked", "is-disabled", "group-name", "tooltip-text", "label-icon", "tooltip-options", "is-button-variant", "is-button-variant-with-radio"]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint"]));
  }
};
export {
  H as J,
  K as Q
};
