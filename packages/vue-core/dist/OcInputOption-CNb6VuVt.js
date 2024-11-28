import { useAttrs as D, ref as f, computed as O, openBlock as n, createBlock as v, unref as x, createSlots as P, withCtx as B, createElementVNode as c, normalizeClass as R, createElementBlock as b, renderSlot as w, createCommentVNode as p, mergeProps as q, toDisplayString as I, withModifiers as T, watch as A, Fragment as j, renderList as E, withKeys as N } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as C } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { z as M } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { j as L } from "./OcChip-BiALeB1C-DzQgECL4.js";
const z = {
  key: 0,
  class: "border-r border-gray-200 pr-3 py-3"
}, K = { class: "flex flex-1 items-baseline gap-x-2" }, G = {
  key: 0,
  class: "text-oc-text-300"
}, H = { class: "flex items-center gap-x-1 w-full" }, J = {
  key: 0,
  class: "text-oc-text-300"
}, Q = ["value", "readonly", "placeholder", "disabled", "autocomplete", "inputmode", "type"], de = {
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
  setup(e, { expose: V }) {
    const s = e, h = D(), m = f(), l = f(!1);
    V({
      focus: () => m.value.focus()
    });
    const y = f(!1), k = O(() => [
      {
        "shadow-[0_0_0_2px]": y.value && !s.isReadonly
      },
      !s.disabled && (s.errorMessage || s.hasError) ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
      s.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
      s.inputClass
    ]), g = O(() => {
      const { class: t, ...o } = h, r = {};
      return s.pattern && (r.pattern = s.pattern), { inputAttributes: r, ...o };
    }), $ = O(() => s.inputType === "password");
    return (t, o) => (n(), v(x(M), {
      label: e.isInlineLabel ? "" : e.label,
      "label-class": e.labelClass,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, P({
      default: B(() => [
        c("div", {
          class: R(["rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer", k.value]),
          onClick: o[5] || (o[5] = (r) => {
            var i;
            return (i = t.$refs.inputRef) == null ? void 0 : i.focus();
          })
        }, [
          t.$slots.trailing ? (n(), b("div", z, [
            w(t.$slots, "trailing")
          ])) : p("", !0),
          w(t.$slots, "icon", {}, () => [
            e.icon ? (n(), v(x(C), q({
              key: 0,
              class: "w-5 h-5 text-oc-text-400",
              name: e.icon
            }, e.iconProps), null, 16, ["name"])) : p("", !0)
          ]),
          c("div", K, [
            e.isInlineLabel && e.label ? (n(), b("label", G, I(e.label) + ": ", 1)) : p("", !0),
            c("div", H, [
              e.preFill ? (n(), b("span", J, I(e.preFill), 1)) : p("", !0),
              c("input", q({
                ref_key: "inputRef",
                ref: m,
                value: e.modelValue,
                readonly: e.isReadonly,
                placeholder: e.placeholder,
                disabled: e.disabled,
                autocomplete: e.autocomplete,
                inputmode: e.inputMode,
                class: "h-7 outline-none md:text-base text-lg w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              }, g.value, {
                type: $.value && l.value ? "text" : e.inputType,
                onFocus: o[0] || (o[0] = (r) => {
                  y.value = !0, t.$emit("focus", r);
                }),
                onBlur: o[1] || (o[1] = () => {
                  y.value = !1, t.$emit("blur");
                }),
                onInput: o[2] || (o[2] = (r) => t.$emit("update:modelValue", r.target.value)),
                onPaste: o[3] || (o[3] = (r) => t.$emit("paste"))
              }), null, 16, Q)
            ])
          ]),
          t.$slots.leading || $.value ? (n(), b("div", {
            key: 1,
            class: R({
              "border-l border-gray-200 pl-3 py-3": e.hasLeadingSeparator
            })
          }, [
            t.$slots.leading ? p("", !0) : (n(), b("span", {
              key: 0,
              class: "text-oc-text-200",
              onClick: o[4] || (o[4] = T((r) => l.value = !l.value, ["prevent"]))
            }, [
              (n(), v(x(C), {
                key: l.value,
                name: l.value ? "eye-open" : "eye-close",
                width: "16",
                height: "16"
              }, null, 8, ["name"]))
            ])),
            w(t.$slots, "leading")
          ], 2)) : p("", !0)
        ], 2)
      ]),
      _: 2
    }, [
      t.$slots.hint ? {
        name: "hint",
        fn: B(() => [
          w(t.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "label-class", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, U = { class: "flex flex-1 items-baseline gap-x-2" }, W = {
  key: 0,
  class: "text-oc-text-300"
}, X = { class: "w-full flex flex-wrap gap-2" }, Y = { key: 1 }, Z = ["value", "readonly", "placeholder", "disabled"], ce = {
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
  setup(e, { expose: V, emit: s }) {
    const h = e, m = s, l = f([]), y = f(), k = f(""), g = f(!1), $ = f(!1), t = O(() => g.value ? l.value : l.value.slice(0, h.maxVisibleOptions)), o = (i) => {
      l.value = l.value.filter((a) => a !== i), m("option-removed", i), m("update:modelValue", l.value);
    }, r = (i) => {
      if (!(i != null && i.trim()))
        return;
      const a = (i == null ? void 0 : i.split(",")) || [];
      a.forEach((d) => {
        var S;
        d != null && d.trim() && (!h.allowDuplicated && ((S = l.value) != null && S.includes(d)) || (l.value.push(d), m("option-added", d)));
      }), a.length && (k.value = "", m("update:modelValue", l.value));
    };
    return A(
      () => h.modelValue,
      () => {
        l.value = [...h.modelValue || []];
      },
      {
        immediate: !0,
        deep: !0
      }
    ), V({
      focus: () => y.value.focus()
    }), (i, a) => (n(), v(x(M), {
      label: e.isInlineLabel ? "" : e.label,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, {
      default: B(() => {
        var d, S;
        return [
          c("div", U, [
            e.isInlineLabel && e.label ? (n(), b("label", W, I(e.label) + ": ", 1)) : p("", !0),
            c("div", {
              class: "bg-oc-bg-light flex items-center gap-x-1 w-full",
              onClick: a[4] || (a[4] = (u) => y.value.focus())
            }, [
              c("div", {
                class: R(["border min-h-[36px] py-3 w-full px-3 flex justify-between items-center cursor-pointer gap-x-3 rounded", {
                  "border-oc-error": e.errorMessage && !e.isDisabled,
                  "pointer-events-none bg-oc-bg-dark": e.isDisabled
                }])
              }, [
                c("div", X, [
                  w(i.$slots, "default", {
                    options: t.value,
                    areAllOptionsVisible: g.value
                  }, () => [
                    (n(!0), b(j, null, E(t.value, (u, F) => (n(), v(x(L), {
                      key: `${u}-${F}`,
                      closable: "",
                      label: u,
                      onRemove: (_) => o(u)
                    }, null, 8, ["label", "onRemove"]))), 128)),
                    l.value.length > e.maxVisibleOptions ? (n(), v(x(L), {
                      key: 0,
                      variant: "gray",
                      onClick: a[0] || (a[0] = (u) => g.value = !g.value)
                    }, {
                      default: B(() => [
                        g.value ? (n(), v(x(C), {
                          key: 0,
                          name: "minus",
                          width: "12",
                          height: "12"
                        })) : (n(), b("span", Y, I(`+${l.value.length - e.maxVisibleOptions}`), 1))
                      ]),
                      _: 1
                    })) : p("", !0)
                  ]),
                  c("input", {
                    ref_key: "inputRef",
                    ref: y,
                    type: "text",
                    value: k.value,
                    readonly: e.isReadonly,
                    placeholder: ((d = t.value) == null ? void 0 : d.length) === 0 ? e.placeholder : "",
                    disabled: e.isDisabled,
                    class: R(["h-7 flex-1 outline-none text-oc-text disabled:bg-transparent placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light", ((S = t.value) == null ? void 0 : S.length) === 0 ? "min-w-full" : "min-w-[80px]"]),
                    onFocus: a[1] || (a[1] = (u) => $.value = !0),
                    onBlur: a[2] || (a[2] = (u) => {
                      console.log("$event: ", u), $.value = !1, i.$emit("blur", u);
                    }),
                    onKeyup: a[3] || (a[3] = N((u) => r(u.target.value), ["enter"]))
                  }, null, 42, Z)
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
  de as _,
  ce as a
};
