import { ref as y, watch as A, nextTick as Y, openBlock as l, createElementBlock as b, createElementVNode as g, createBlock as p, unref as o, Fragment as G, createVNode as w, createCommentVNode as r, withCtx as V, useAttrs as K, computed as I, createSlots as Q, normalizeClass as k, renderSlot as B, mergeProps as M, toDisplayString as D, withModifiers as X, renderList as Z, normalizeProps as ee } from "vue";
import "dayjs";
import { as as C, at as E, aq as te, ar as le, au as H, am as W, ap as ae, ah as F, ag as oe } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { Cropper as ie } from "vue-advanced-cropper";
const ne = {
  key: 0,
  class: "border-r border-gray-200 pr-3 py-3"
}, re = { class: "flex flex-1 items-baseline gap-x-2" }, se = {
  key: 0,
  class: "text-oc-text-300"
}, ue = { class: "flex items-center gap-x-1 w-full" }, pe = {
  key: 0,
  class: "text-oc-text-300"
}, de = ["value", "readonly", "placeholder", "disabled", "autocomplete", "inputmode", "type"], N = {
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
  setup(e, { expose: f }) {
    const n = e, S = K(), x = y(), v = y(!1);
    f({
      focus: () => x.value.focus()
    });
    const m = y(!1), c = I(() => [
      {
        "shadow-[0_0_0_2px]": m.value && !n.isReadonly
      },
      !n.disabled && (n.errorMessage || n.hasError) ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
      n.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
      n.inputClass
    ]), d = I(() => {
      const { class: s, ...u } = S, h = {};
      return n.pattern && (h.pattern = n.pattern), { inputAttributes: h, ...u };
    }), R = I(() => n.inputType === "password");
    return (s, u) => (l(), p(o(H), {
      label: e.isInlineLabel ? "" : e.label,
      "label-class": e.labelClass,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, Q({
      default: V(() => [
        g("div", {
          class: k(["rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer", c.value]),
          onClick: u[5] || (u[5] = (h) => {
            var $;
            return ($ = s.$refs.inputRef) == null ? void 0 : $.focus();
          })
        }, [
          s.$slots.trailing ? (l(), b("div", ne, [
            B(s.$slots, "trailing")
          ])) : r("", !0),
          B(s.$slots, "icon", {}, () => [
            e.icon ? (l(), p(o(W), M({
              key: 0,
              class: "w-5 h-5 text-oc-text-400",
              name: e.icon
            }, e.iconProps), null, 16, ["name"])) : r("", !0)
          ]),
          g("div", re, [
            e.isInlineLabel && e.label ? (l(), b("label", se, D(e.label) + ": ", 1)) : r("", !0),
            g("div", ue, [
              e.preFill ? (l(), b("span", pe, D(e.preFill), 1)) : r("", !0),
              g("input", M({
                ref_key: "inputRef",
                ref: x,
                value: e.modelValue,
                readonly: e.isReadonly,
                placeholder: e.placeholder,
                disabled: e.disabled,
                autocomplete: e.autocomplete,
                inputmode: e.inputMode,
                class: "h-7 outline-none md:text-base text-lg w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              }, d.value, {
                type: R.value && v.value ? "text" : e.inputType,
                onFocus: u[0] || (u[0] = (h) => {
                  m.value = !0, s.$emit("focus", h);
                }),
                onBlur: u[1] || (u[1] = () => {
                  m.value = !1, s.$emit("blur");
                }),
                onInput: u[2] || (u[2] = (h) => s.$emit("update:modelValue", h.target.value)),
                onPaste: u[3] || (u[3] = (h) => s.$emit("paste"))
              }), null, 16, de)
            ])
          ]),
          s.$slots.leading || R.value ? (l(), b("div", {
            key: 1,
            class: k({
              "border-l border-gray-200 pl-3 py-3": e.hasLeadingSeparator
            })
          }, [
            s.$slots.leading ? r("", !0) : (l(), b("span", {
              key: 0,
              class: "text-oc-text-200",
              onClick: u[4] || (u[4] = X((h) => v.value = !v.value, ["prevent"]))
            }, [
              (l(), p(o(W), {
                key: v.value,
                name: v.value ? "eye-open" : "eye-close",
                width: "16",
                height: "16"
              }, null, 8, ["name"]))
            ])),
            B(s.$slots, "leading")
          ], 2)) : r("", !0)
        ], 2)
      ]),
      _: 2
    }, [
      s.$slots.hint ? {
        name: "hint",
        fn: V(() => [
          B(s.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "label-class", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, ce = ["id", "value", "checked", "name", "disabled"], me = ["for"], ge = {
  key: 0,
  class: "px-3 py-2 whitespace-nowrap"
}, be = {
  __name: "OcRadio",
  props: {
    modelValue: [String, Boolean],
    isDisabled: Boolean,
    checked: Boolean,
    label: String,
    id: [String, Number],
    groupName: String,
    errorMessage: String,
    hint: String,
    tooltipText: String,
    labelIcon: String,
    tooltipOptions: Object,
    isButtonVariant: Boolean,
    isButtonVariantWithRadio: Boolean,
    icon: String
  },
  emits: {
    "update:modelValue": []
  },
  setup(e) {
    return (f, n) => (l(), p(o(ae), {
      class: k(["radio-button inline-block relative cursor-pointer", e.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: V(() => [
        g("input", {
          id: e.groupName + e.id,
          value: e.modelValue,
          checked: e.checked,
          name: e.groupName,
          disabled: e.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: n[0] || (n[0] = (S) => f.$emit("update:modelValue", S.target.value))
        }, null, 40, ce),
        g("label", {
          for: e.groupName + e.id,
          class: k(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": e.isDisabled,
            "bg-gray-200": e.isDisabled && e.isButtonVariant,
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": e.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": e.isButtonVariantWithRadio
          }])
        }, [
          !e.isButtonVariant || e.isButtonVariantWithRadio ? (l(), b("span", {
            key: 0,
            class: k(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              e.isDisabled || !e.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              e.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : r("", !0),
          e.icon ? (l(), p(o(F), {
            key: 1,
            class: k(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": e.isDisabled }]),
            name: e.icon
          }, null, 8, ["class", "name"])) : r("", !0),
          B(f.$slots, "default", {}, () => [
            e.label ? (l(), b("span", {
              key: 0,
              class: k({ "text-sm": !e.isButtonVariantWithRadio })
            }, D(e.label), 3)) : r("", !0)
          ]),
          e.labelIcon ? (l(), p(o(oe), ee(M({ key: 2 }, e.tooltipOptions)), {
            popper: V(() => [
              B(f.$slots, "tooltipText", {}, () => [
                e.tooltipText ? (l(), b("div", ge, D(e.tooltipText), 1)) : r("", !0)
              ])
            ]),
            default: V(() => [
              w(o(F), {
                width: "16",
                height: "16",
                name: e.labelIcon,
                class: "text-oc-text-400"
              }, null, 8, ["name"])
            ]),
            _: 3
          }, 16)) : r("", !0)
        ], 10, me)
      ]),
      _: 3
    }, 8, ["class", "error-message", "hint"]));
  }
}, ve = {
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
  setup(e, { emit: f }) {
    const n = f, S = I(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), x = (v) => {
      n("update:modelValue", v);
    };
    return (v, m) => (l(), p(o(H), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: V(() => [
        g("div", {
          class: k(["flex", [S.value[e.alignment], e.wrapperClass]])
        }, [
          (l(!0), b(G, null, Z(e.radio, (c, d) => (l(), p(o(be), {
            id: c.value,
            key: d,
            class: k({ "!w-fit": !e.isBlock }),
            "model-value": c.value,
            label: c.label,
            icon: c.icon,
            "is-error": !!e.errorMessage,
            checked: c.value === e.modelValue,
            "is-disabled": !!c.isDisabled,
            "group-name": e.groupName,
            "tooltip-text": c.tooltipText,
            "label-icon": c.labelIcon,
            "tooltip-options": c.tooltipOptions,
            "is-button-variant": e.isButtonVariant,
            "is-button-variant-with-radio": e.isButtonVariantWithRadio,
            "onUpdate:modelValue": x
          }, null, 8, ["id", "class", "model-value", "label", "icon", "is-error", "checked", "is-disabled", "group-name", "tooltip-text", "label-icon", "tooltip-options", "is-button-variant", "is-button-variant-with-radio"]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint"]));
  }
}, he = { class: "flex flex-col gap-y-5" }, ye = ["src"], fe = { class: "flex gap-x-1 justify-center relative" }, xe = { class: "grid grid-cols-2 gap-4" }, Re = {
  __name: "OcCropper",
  props: {
    inputOptions: Array,
    inputOptionValues: Object,
    img: String,
    maxSize: [String, Number],
    isReplaceImage: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["changeImage", "update:input-options"],
  setup(e, { emit: f }) {
    const n = e, S = f, x = y(), v = y(), m = y(""), c = y(!1), d = y(n.inputOptionValues ?? {});
    A(
      () => n.inputOptionValues,
      () => {
        d.value = n.inputOptionValues;
      },
      {
        deep: !0
      }
    ), A(
      () => n.img,
      (i) => {
        i && Y(() => {
          try {
            const t = new URL(i);
            t.protocol === "http:" || t.protocol === "https:" ? m.value = `${i}?${Date.now()}` : m.value = i;
          } catch {
            m.value = i;
          }
        });
      },
      { immediate: !0 }
    );
    const R = () => {
      if (m.value && c.value) {
        const { canvas: i } = x.value.getResult();
        S("changeImage", i.toDataURL());
      }
      c.value = !0;
    }, s = (i) => {
      var t;
      return (t = x.value) == null ? void 0 : t.rotate(i);
    }, u = (i) => {
      var t;
      return (t = x.value) == null ? void 0 : t.zoom(i);
    }, h = () => {
      v.value.click();
    }, $ = (i) => {
      if (i.target.files[0] / (1024 * 1024) > +n.maxSize)
        return i.preventDefault(), !1;
      m.value = URL.createObjectURL(i.target.files[0]);
    }, J = ({ imageSize: i, visibleArea: t }) => ({
      width: (t || i).width,
      height: (t || i).height
    }), _ = (i, t) => {
      let O = d.value;
      O[i] = t, S("update:input-options", O);
    }, z = y(!!d.value.caption), U = y(!!d.value.lightbox);
    return (i, t) => {
      var O, L, T, P, j, q;
      return l(), b("div", he, [
        g("input", {
          id: "cropper-file-input",
          ref_key: "fileUploadEl",
          ref: v,
          accept: "image/*",
          type: "file",
          class: "hidden",
          onChange: $
        }, null, 544),
        m.value ? (l(), p(o(ie), {
          key: 0,
          ref_key: "cropper",
          ref: x,
          class: "w-full h-[300px]",
          src: m.value,
          "resize-image": { wheel: !1 },
          "background-class": "cropper-background",
          "default-size": J,
          onChange: R
        }, null, 8, ["src"])) : (l(), b("img", {
          key: 1,
          class: "w-full",
          src: e.img
        }, null, 8, ye)),
        g("div", fe, [
          m.value ? (l(), b(G, { key: 0 }, [
            w(o(C), {
              variant: "secondary",
              size: "small",
              "left-icon": "backward",
              onClick: t[0] || (t[0] = (a) => s(-90))
            }),
            w(o(C), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-out",
              onClick: t[1] || (t[1] = (a) => u(0.8))
            }),
            w(o(C), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-in",
              onClick: t[2] || (t[2] = (a) => u(1.2))
            }),
            w(o(C), {
              variant: "secondary",
              size: "small",
              "left-icon": "forward",
              onClick: t[3] || (t[3] = (a) => s(90))
            })
          ], 64)) : r("", !0),
          e.isReplaceImage ? (l(), p(o(C), {
            key: 1,
            class: "absolute right-0",
            variant: "secondary",
            size: "small",
            label: "Replace image",
            "left-icon": "refresh",
            onClick: h
          })) : r("", !0)
        ]),
        g("div", xe, [
          (O = e.inputOptions) != null && O.includes("description") ? (l(), p(o(N), {
            key: 0,
            modelValue: d.value.description,
            "onUpdate:modelValue": [
              t[4] || (t[4] = (a) => d.value.description = a),
              t[5] || (t[5] = (a) => _("description", a))
            ],
            label: "Describe Image",
            placeholder: ""
          }, null, 8, ["modelValue"])) : r("", !0),
          (L = e.inputOptions) != null && L.includes("link") ? (l(), p(o(N), {
            key: 1,
            modelValue: d.value.link,
            "onUpdate:modelValue": [
              t[6] || (t[6] = (a) => d.value.link = a),
              t[7] || (t[7] = (a) => _("link", a))
            ],
            placeholder: "https://hitpayapp.com",
            label: "Link to"
          }, null, 8, ["modelValue"])) : r("", !0),
          g("div", null, [
            (T = e.inputOptions) != null && T.includes("caption") ? (l(), p(o(E), {
              key: 0,
              modelValue: z.value,
              "onUpdate:modelValue": t[8] || (t[8] = (a) => z.value = a),
              label: "Caption",
              class: "mb-4"
            }, null, 8, ["modelValue"])) : r("", !0),
            (P = e.inputOptions) != null && P.includes("caption") && z.value ? (l(), p(o(N), {
              key: 1,
              modelValue: d.value.caption,
              "onUpdate:modelValue": [
                t[9] || (t[9] = (a) => d.value.caption = a),
                t[10] || (t[10] = (a) => _("caption", a))
              ],
              class: "mb-4",
              placeholder: ""
            }, null, 8, ["modelValue"])) : r("", !0),
            (j = e.inputOptions) != null && j.includes("caption") && z.value ? (l(), p(o(ve), {
              key: 2,
              "model-value": d.value.caption_variant,
              "group-name": "caption_variant",
              alignment: "horizontal",
              radio: [
                {
                  value: "hover",
                  label: "Show on hover"
                },
                {
                  value: "bottom",
                  label: "Show on bottom"
                }
              ],
              label: "Caption position",
              "onUpdate:modelValue": t[11] || (t[11] = (a) => _("caption_variant", a))
            }, null, 8, ["model-value"])) : r("", !0)
          ]),
          g("div", null, [
            (q = e.inputOptions) != null && q.includes("lightbox") ? (l(), p(o(E), {
              key: 0,
              modelValue: U.value,
              "onUpdate:modelValue": [
                t[12] || (t[12] = (a) => U.value = a),
                t[13] || (t[13] = (a) => _("lightbox", a))
              ],
              label: "Lightbox"
            }, {
              after: V(() => [
                w(o(te), {
                  position: "bottom",
                  distance: 10,
                  "popper-class": "bg-oc-bg-light min-w-[125px]"
                }, {
                  popper: V(() => t[14] || (t[14] = [
                    g("div", { class: "text-oc-text-400 text-sm px-3 py-2 font-medium text-center" }, " Show lightbox when click the image ", -1)
                  ])),
                  default: V(() => [
                    w(o(le), {
                      name: "question-mark",
                      width: "16",
                      height: "16",
                      class: "text-oc-accent-1-500"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])) : r("", !0)
          ])
        ])
      ]);
    };
  }
};
export {
  Re as default
};
