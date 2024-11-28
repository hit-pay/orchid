import { ref as h, watch as q, nextTick as H, openBlock as a, createElementBlock as y, createElementVNode as b, createBlock as m, unref as i, Fragment as G, createVNode as k, createCommentVNode as d, withCtx as V, useAttrs as K, computed as $, createSlots as Q, normalizeClass as I, renderSlot as z, mergeProps as A, toDisplayString as E, withModifiers as X, renderList as Y } from "vue";
import "dayjs";
import { l as O, h as F, J as Z, g as ee, f as J, B as P } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { I as te } from "./OcRadio-C8GTXr8W-BDwhZQ_m-DekVtcsK-Dy07eXyo-CbUmmwLV-CSCaQxWQ-mThA_WVE-BFu5G8vq-BCEQKZvV-BLNnY8cI-CjHQr8xW-CJamnScE-D2Yp7nxl-C1upg8lS-DBeSJCxl-DpEzT2u_-BaFQuRgG-C9CXIvAv-BeXF3eVV-5jkttCU6-BsLyboEK-BVgWbZt3-BxX_SG_9.js";
import { Cropper as le } from "vue-advanced-cropper";
const ae = {
  key: 0,
  class: "border-r border-gray-200 pr-3 py-3"
}, oe = { class: "flex flex-1 items-baseline gap-x-2" }, ie = {
  key: 0,
  class: "text-oc-text-300"
}, ne = { class: "flex items-center gap-x-1 w-full" }, re = {
  key: 0,
  class: "text-oc-text-300"
}, se = ["value", "readonly", "placeholder", "disabled", "autocomplete", "inputmode", "type"], L = {
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
  setup(e, { expose: S }) {
    const n = e, x = K(), f = h(), g = h(!1);
    S({
      focus: () => f.value.focus()
    });
    const c = h(!1), p = $(() => [
      {
        "shadow-[0_0_0_2px]": c.value && !n.isReadonly
      },
      !n.disabled && (n.errorMessage || n.hasError) ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
      n.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
      n.inputClass
    ]), u = $(() => {
      const { class: r, ...s } = x, v = {};
      return n.pattern && (v.pattern = n.pattern), { inputAttributes: v, ...s };
    }), C = $(() => n.inputType === "password");
    return (r, s) => (a(), m(i(J), {
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
        b("div", {
          class: I(["rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer", p.value]),
          onClick: s[5] || (s[5] = (v) => {
            var _;
            return (_ = r.$refs.inputRef) == null ? void 0 : _.focus();
          })
        }, [
          r.$slots.trailing ? (a(), y("div", ae, [
            z(r.$slots, "trailing")
          ])) : d("", !0),
          z(r.$slots, "icon", {}, () => [
            e.icon ? (a(), m(i(P), A({
              key: 0,
              class: "w-5 h-5 text-oc-text-400",
              name: e.icon
            }, e.iconProps), null, 16, ["name"])) : d("", !0)
          ]),
          b("div", oe, [
            e.isInlineLabel && e.label ? (a(), y("label", ie, E(e.label) + ": ", 1)) : d("", !0),
            b("div", ne, [
              e.preFill ? (a(), y("span", re, E(e.preFill), 1)) : d("", !0),
              b("input", A({
                ref_key: "inputRef",
                ref: f,
                value: e.modelValue,
                readonly: e.isReadonly,
                placeholder: e.placeholder,
                disabled: e.disabled,
                autocomplete: e.autocomplete,
                inputmode: e.inputMode,
                class: "h-7 outline-none md:text-base text-lg w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              }, u.value, {
                type: C.value && g.value ? "text" : e.inputType,
                onFocus: s[0] || (s[0] = (v) => {
                  c.value = !0, r.$emit("focus", v);
                }),
                onBlur: s[1] || (s[1] = () => {
                  c.value = !1, r.$emit("blur");
                }),
                onInput: s[2] || (s[2] = (v) => r.$emit("update:modelValue", v.target.value)),
                onPaste: s[3] || (s[3] = (v) => r.$emit("paste"))
              }), null, 16, se)
            ])
          ]),
          r.$slots.leading || C.value ? (a(), y("div", {
            key: 1,
            class: I({
              "border-l border-gray-200 pl-3 py-3": e.hasLeadingSeparator
            })
          }, [
            r.$slots.leading ? d("", !0) : (a(), y("span", {
              key: 0,
              class: "text-oc-text-200",
              onClick: s[4] || (s[4] = X((v) => g.value = !g.value, ["prevent"]))
            }, [
              (a(), m(i(P), {
                key: g.value,
                name: g.value ? "eye-open" : "eye-close",
                width: "16",
                height: "16"
              }, null, 8, ["name"]))
            ])),
            z(r.$slots, "leading")
          ], 2)) : d("", !0)
        ], 2)
      ]),
      _: 2
    }, [
      r.$slots.hint ? {
        name: "hint",
        fn: V(() => [
          z(r.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "label-class", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, ue = {
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
  setup(e, { emit: S }) {
    const n = S, x = $(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), f = (g) => {
      n("update:modelValue", g);
    };
    return (g, c) => (a(), m(i(J), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: V(() => [
        b("div", {
          class: I(["flex", [x.value[e.alignment], e.wrapperClass]])
        }, [
          (a(!0), y(G, null, Y(e.radio, (p, u) => (a(), m(i(te), {
            id: p.value,
            key: u,
            class: I({ "!w-fit": !e.isBlock }),
            "model-value": p.value,
            label: p.label,
            icon: p.icon,
            "is-error": !!e.errorMessage,
            checked: p.value === e.modelValue,
            "is-disabled": !!p.isDisabled,
            "group-name": e.groupName,
            "tooltip-text": p.tooltipText,
            "label-icon": p.labelIcon,
            "tooltip-options": p.tooltipOptions,
            "is-button-variant": e.isButtonVariant,
            "is-button-variant-with-radio": e.isButtonVariantWithRadio,
            "onUpdate:modelValue": f
          }, null, 8, ["id", "class", "model-value", "label", "icon", "is-error", "checked", "is-disabled", "group-name", "tooltip-text", "label-icon", "tooltip-options", "is-button-variant", "is-button-variant-with-radio"]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint"]));
  }
}, pe = { class: "flex flex-col gap-y-5" }, de = ["src"], ce = { class: "flex gap-x-1 justify-center relative" }, me = { class: "grid grid-cols-2 gap-4" }, ge = /* @__PURE__ */ b("div", { class: "text-oc-text-400 text-sm px-3 py-2 font-medium text-center" }, " Show lightbox when click the image ", -1), we = {
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
  setup(e, { emit: S }) {
    const n = e, x = S, f = h(), g = h(), c = h(""), p = h(!1), u = h(n.inputOptionValues ?? {});
    q(
      () => n.inputOptionValues,
      () => {
        u.value = n.inputOptionValues;
      },
      {
        deep: !0
      }
    ), q(
      () => n.img,
      (o) => {
        o && H(() => {
          try {
            const t = new URL(o);
            t.protocol === "http:" || t.protocol === "https:" ? c.value = `${o}?${Date.now()}` : c.value = o;
          } catch {
            c.value = o;
          }
        });
      },
      { immediate: !0 }
    );
    const C = () => {
      if (c.value && p.value) {
        const { canvas: o } = f.value.getResult();
        x("changeImage", o.toDataURL());
      }
      p.value = !0;
    }, r = (o) => {
      var t;
      return (t = f.value) == null ? void 0 : t.rotate(o);
    }, s = (o) => {
      var t;
      return (t = f.value) == null ? void 0 : t.zoom(o);
    }, v = () => {
      g.value.click();
    }, _ = (o) => {
      if (o.target.files[0] / (1024 * 1024) > +n.maxSize)
        return o.preventDefault(), !1;
      c.value = URL.createObjectURL(o.target.files[0]);
    }, W = ({ imageSize: o, visibleArea: t }) => ({
      width: (t || o).width,
      height: (t || o).height
    }), w = (o, t) => {
      let B = u.value;
      B[o] = t, x("update:input-options", B);
    }, R = h(!!u.value.caption), U = h(!!u.value.lightbox);
    return (o, t) => {
      var B, M, T, N, D, j;
      return a(), y("div", pe, [
        b("input", {
          id: "cropper-file-input",
          ref_key: "fileUploadEl",
          ref: g,
          accept: "image/*",
          type: "file",
          class: "hidden",
          onChange: _
        }, null, 544),
        c.value ? (a(), m(i(le), {
          key: 0,
          ref_key: "cropper",
          ref: f,
          class: "w-full h-[300px]",
          src: c.value,
          "resize-image": { wheel: !1 },
          "background-class": "cropper-background",
          "default-size": W,
          onChange: C
        }, null, 8, ["src"])) : (a(), y("img", {
          key: 1,
          class: "w-full",
          src: e.img
        }, null, 8, de)),
        b("div", ce, [
          c.value ? (a(), y(G, { key: 0 }, [
            k(i(O), {
              variant: "secondary",
              size: "small",
              "left-icon": "backward",
              onClick: t[0] || (t[0] = (l) => r(-90))
            }),
            k(i(O), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-out",
              onClick: t[1] || (t[1] = (l) => s(0.8))
            }),
            k(i(O), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-in",
              onClick: t[2] || (t[2] = (l) => s(1.2))
            }),
            k(i(O), {
              variant: "secondary",
              size: "small",
              "left-icon": "forward",
              onClick: t[3] || (t[3] = (l) => r(90))
            })
          ], 64)) : d("", !0),
          e.isReplaceImage ? (a(), m(i(O), {
            key: 1,
            class: "absolute right-0",
            variant: "secondary",
            size: "small",
            label: "Replace image",
            "left-icon": "refresh",
            onClick: v
          })) : d("", !0)
        ]),
        b("div", me, [
          (B = e.inputOptions) != null && B.includes("description") ? (a(), m(i(L), {
            key: 0,
            modelValue: u.value.description,
            "onUpdate:modelValue": [
              t[4] || (t[4] = (l) => u.value.description = l),
              t[5] || (t[5] = (l) => w("description", l))
            ],
            label: "Describe Image",
            placeholder: ""
          }, null, 8, ["modelValue"])) : d("", !0),
          (M = e.inputOptions) != null && M.includes("link") ? (a(), m(i(L), {
            key: 1,
            modelValue: u.value.link,
            "onUpdate:modelValue": [
              t[6] || (t[6] = (l) => u.value.link = l),
              t[7] || (t[7] = (l) => w("link", l))
            ],
            placeholder: "https://hitpayapp.com",
            label: "Link to"
          }, null, 8, ["modelValue"])) : d("", !0),
          b("div", null, [
            (T = e.inputOptions) != null && T.includes("caption") ? (a(), m(i(F), {
              key: 0,
              modelValue: R.value,
              "onUpdate:modelValue": t[8] || (t[8] = (l) => R.value = l),
              label: "Caption",
              class: "mb-4"
            }, null, 8, ["modelValue"])) : d("", !0),
            (N = e.inputOptions) != null && N.includes("caption") && R.value ? (a(), m(i(L), {
              key: 1,
              modelValue: u.value.caption,
              "onUpdate:modelValue": [
                t[9] || (t[9] = (l) => u.value.caption = l),
                t[10] || (t[10] = (l) => w("caption", l))
              ],
              class: "mb-4",
              placeholder: ""
            }, null, 8, ["modelValue"])) : d("", !0),
            (D = e.inputOptions) != null && D.includes("caption") && R.value ? (a(), m(i(ue), {
              key: 2,
              "model-value": u.value.caption_variant,
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
              "onUpdate:modelValue": t[11] || (t[11] = (l) => w("caption_variant", l))
            }, null, 8, ["model-value"])) : d("", !0)
          ]),
          b("div", null, [
            (j = e.inputOptions) != null && j.includes("lightbox") ? (a(), m(i(F), {
              key: 0,
              modelValue: U.value,
              "onUpdate:modelValue": [
                t[12] || (t[12] = (l) => U.value = l),
                t[13] || (t[13] = (l) => w("lightbox", l))
              ],
              label: "Lightbox"
            }, {
              after: V(() => [
                k(i(Z), {
                  position: "bottom",
                  distance: 10,
                  "popper-class": "bg-oc-bg-light min-w-[125px]"
                }, {
                  popper: V(() => [
                    ge
                  ]),
                  default: V(() => [
                    k(i(ee), {
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
            }, 8, ["modelValue"])) : d("", !0)
          ])
        ])
      ]);
    };
  }
};
export {
  we as default
};
