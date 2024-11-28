import { useAttrs as _, ref as S, computed as f, openBlock as r, createBlock as u, unref as c, createSlots as I, withCtx as B, createElementVNode as d, normalizeClass as y, createElementBlock as p, renderSlot as b, createCommentVNode as s, mergeProps as V, toDisplayString as $, withModifiers as M, Fragment as O, renderList as T } from "vue";
import "dayjs";
import { f as R, B as C } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { I as L } from "./OcRadio-C8GTXr8W-BDwhZQ_m-DekVtcsK-Dy07eXyo-CbUmmwLV-CSCaQxWQ-mThA_WVE-BFu5G8vq-BCEQKZvV-BLNnY8cI-CjHQr8xW-CJamnScE-D2Yp7nxl-C1upg8lS-DBeSJCxl-DpEzT2u_-BaFQuRgG-C9CXIvAv-BeXF3eVV-5jkttCU6-BsLyboEK-BVgWbZt3-BxX_SG_9.js";
const N = {
  key: 0,
  class: "border-r border-gray-200 pr-3 py-3"
}, P = { class: "flex flex-1 items-baseline gap-x-2" }, q = {
  key: 0,
  class: "text-oc-text-300"
}, E = { class: "flex items-center gap-x-1 w-full" }, F = {
  key: 0,
  class: "text-oc-text-300"
}, A = ["value", "readonly", "placeholder", "disabled", "autocomplete", "inputmode", "type"], J = {
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
  setup(e, { expose: h }) {
    const a = e, x = _(), m = S(), n = S(!1);
    h({
      focus: () => m.value.focus()
    });
    const g = S(!1), o = f(() => [
      {
        "shadow-[0_0_0_2px]": g.value && !a.isReadonly
      },
      !a.disabled && (a.errorMessage || a.hasError) ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
      a.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
      a.inputClass
    ]), v = f(() => {
      const { class: t, ...l } = x, i = {};
      return a.pattern && (i.pattern = a.pattern), { inputAttributes: i, ...l };
    }), k = f(() => a.inputType === "password");
    return (t, l) => (r(), u(c(R), {
      label: e.isInlineLabel ? "" : e.label,
      "label-class": e.labelClass,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, I({
      default: B(() => [
        d("div", {
          class: y(["rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer", o.value]),
          onClick: l[5] || (l[5] = (i) => {
            var w;
            return (w = t.$refs.inputRef) == null ? void 0 : w.focus();
          })
        }, [
          t.$slots.trailing ? (r(), p("div", N, [
            b(t.$slots, "trailing")
          ])) : s("", !0),
          b(t.$slots, "icon", {}, () => [
            e.icon ? (r(), u(c(C), V({
              key: 0,
              class: "w-5 h-5 text-oc-text-400",
              name: e.icon
            }, e.iconProps), null, 16, ["name"])) : s("", !0)
          ]),
          d("div", P, [
            e.isInlineLabel && e.label ? (r(), p("label", q, $(e.label) + ": ", 1)) : s("", !0),
            d("div", E, [
              e.preFill ? (r(), p("span", F, $(e.preFill), 1)) : s("", !0),
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
                type: k.value && n.value ? "text" : e.inputType,
                onFocus: l[0] || (l[0] = (i) => {
                  g.value = !0, t.$emit("focus", i);
                }),
                onBlur: l[1] || (l[1] = () => {
                  g.value = !1, t.$emit("blur");
                }),
                onInput: l[2] || (l[2] = (i) => t.$emit("update:modelValue", i.target.value)),
                onPaste: l[3] || (l[3] = (i) => t.$emit("paste"))
              }), null, 16, A)
            ])
          ]),
          t.$slots.leading || k.value ? (r(), p("div", {
            key: 1,
            class: y({
              "border-l border-gray-200 pl-3 py-3": e.hasLeadingSeparator
            })
          }, [
            t.$slots.leading ? s("", !0) : (r(), p("span", {
              key: 0,
              class: "text-oc-text-200",
              onClick: l[4] || (l[4] = M((i) => n.value = !n.value, ["prevent"]))
            }, [
              (r(), u(c(C), {
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
        fn: B(() => [
          b(t.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "label-class", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, Q = {
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
  setup(e, { emit: h }) {
    const a = h, x = f(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), m = (n) => {
      a("update:modelValue", n);
    };
    return (n, g) => (r(), u(c(R), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: B(() => [
        d("div", {
          class: y(["flex", [x.value[e.alignment], e.wrapperClass]])
        }, [
          (r(!0), p(O, null, T(e.radio, (o, v) => (r(), u(c(L), {
            id: o.value,
            key: v,
            class: y({ "!w-fit": !e.isBlock }),
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
  Q as K,
  J as U
};
