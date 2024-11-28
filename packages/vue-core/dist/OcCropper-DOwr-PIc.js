import { computed as G, openBlock as i, createBlock as r, unref as l, withCtx as f, createElementVNode as c, normalizeClass as v, createElementBlock as x, Fragment as j, renderList as H, createCommentVNode as s, renderSlot as N, toDisplayString as M, normalizeProps as J, mergeProps as K, createVNode as b, ref as g, watch as T, nextTick as Q } from "vue";
import "dayjs";
import { z as X, f as W } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as Y } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as B } from "./OcButton-Cnqik19l-BEVE67cg.js";
import { E } from "./OcCheckbox-CPEV7kEq-UN7b0C93.js";
import { d as z } from "./OcInputOption-rY2kKCL8-Ce2jETq4.js";
import { z as Z } from "./OcBaseInput-ezd9ky5M-NyawiPzv-DsD_1lit.js";
import { P as _ } from "./OcTooltip-DBif_2H1-B-R8nPrI-BM5y6FC0-BiGpbzD8.js";
import { q as ee } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
import { Cropper as te } from "vue-advanced-cropper";
const oe = ["id", "value", "checked", "name", "disabled"], ae = ["for"], le = {
  key: 0,
  class: "px-3 py-2 whitespace-nowrap"
}, ie = {
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
    return (m, p) => (i(), r(l(X), {
      class: v(["radio-button inline-block relative cursor-pointer", e.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: f(() => [
        c("input", {
          id: e.groupName + e.id,
          value: e.modelValue,
          checked: e.checked,
          name: e.groupName,
          disabled: e.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: p[0] || (p[0] = (h) => m.$emit("update:modelValue", h.target.value))
        }, null, 40, oe),
        c("label", {
          for: e.groupName + e.id,
          class: v(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": e.isDisabled,
            "bg-gray-200": e.isDisabled && e.isButtonVariant,
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": e.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": e.isButtonVariantWithRadio
          }])
        }, [
          !e.isButtonVariant || e.isButtonVariantWithRadio ? (i(), x("span", {
            key: 0,
            class: v(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              e.isDisabled || !e.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              e.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : s("", !0),
          e.icon ? (i(), r(l(W), {
            key: 1,
            class: v(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": e.isDisabled }]),
            name: e.icon
          }, null, 8, ["class", "name"])) : s("", !0),
          N(m.$slots, "default", {}, () => [
            e.label ? (i(), x("span", {
              key: 0,
              class: v({ "text-sm": !e.isButtonVariantWithRadio })
            }, M(e.label), 3)) : s("", !0)
          ]),
          e.labelIcon ? (i(), r(l(_), J(K({ key: 2 }, e.tooltipOptions)), {
            popper: f(() => [
              N(m.$slots, "tooltipText", {}, () => [
                e.tooltipText ? (i(), x("div", le, M(e.tooltipText), 1)) : s("", !0)
              ])
            ]),
            default: f(() => [
              b(l(W), {
                width: "16",
                height: "16",
                name: e.labelIcon,
                class: "text-oc-text-400"
              }, null, 8, ["name"])
            ]),
            _: 3
          }, 16)) : s("", !0)
        ], 10, ae)
      ]),
      _: 3
    }, 8, ["class", "error-message", "hint"]));
  }
}, ne = {
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
  setup(e, { emit: m }) {
    const p = m, h = G(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), k = (y) => {
      p("update:modelValue", y);
    };
    return (y, d) => (i(), r(l(Z), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: f(() => [
        c("div", {
          class: v(["flex", [h.value[e.alignment], e.wrapperClass]])
        }, [
          (i(!0), x(j, null, H(e.radio, (u, n) => (i(), r(l(ie), {
            id: u.value,
            key: n,
            class: v({ "!w-fit": !e.isBlock }),
            "model-value": u.value,
            label: u.label,
            icon: u.icon,
            "is-error": !!e.errorMessage,
            checked: u.value === e.modelValue,
            "is-disabled": !!u.isDisabled,
            "group-name": e.groupName,
            "tooltip-text": u.tooltipText,
            "label-icon": u.labelIcon,
            "tooltip-options": u.tooltipOptions,
            "is-button-variant": e.isButtonVariant,
            "is-button-variant-with-radio": e.isButtonVariantWithRadio,
            "onUpdate:modelValue": k
          }, null, 8, ["id", "class", "model-value", "label", "icon", "is-error", "checked", "is-disabled", "group-name", "tooltip-text", "label-icon", "tooltip-options", "is-button-variant", "is-button-variant-with-radio"]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint"]));
  }
}, re = { class: "flex flex-col gap-y-5" }, se = ["src"], ue = { class: "flex gap-x-1 justify-center relative" }, pe = { class: "grid grid-cols-2 gap-4" }, ze = {
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
  setup(e, { emit: m }) {
    const p = e, h = m, k = g(), y = g(), d = g(""), u = g(!1), n = g(p.inputOptionValues ?? {});
    T(
      () => p.inputOptionValues,
      () => {
        n.value = p.inputOptionValues;
      },
      {
        deep: !0
      }
    ), T(
      () => p.img,
      (a) => {
        a && Q(() => {
          try {
            const t = new URL(a);
            t.protocol === "http:" || t.protocol === "https:" ? d.value = `${a}?${Date.now()}` : d.value = a;
          } catch {
            d.value = a;
          }
        });
      },
      { immediate: !0 }
    );
    const q = () => {
      if (d.value && u.value) {
        const { canvas: a } = k.value.getResult();
        h("changeImage", a.toDataURL());
      }
      u.value = !0;
    }, O = (a) => {
      var t;
      return (t = k.value) == null ? void 0 : t.rotate(a);
    }, C = (a) => {
      var t;
      return (t = k.value) == null ? void 0 : t.zoom(a);
    }, P = () => {
      y.value.click();
    }, A = (a) => {
      if (a.target.files[0] / (1024 * 1024) > +p.maxSize)
        return a.preventDefault(), !1;
      d.value = URL.createObjectURL(a.target.files[0]);
    }, F = ({ imageSize: a, visibleArea: t }) => ({
      width: (t || a).width,
      height: (t || a).height
    }), w = (a, t) => {
      let V = n.value;
      V[a] = t, h("update:input-options", V);
    }, S = g(!!n.value.caption), R = g(!!n.value.lightbox);
    return (a, t) => {
      var V, I, U, D, $, L;
      return i(), x("div", re, [
        c("input", {
          id: "cropper-file-input",
          ref_key: "fileUploadEl",
          ref: y,
          accept: "image/*",
          type: "file",
          class: "hidden",
          onChange: A
        }, null, 544),
        d.value ? (i(), r(l(te), {
          key: 0,
          ref_key: "cropper",
          ref: k,
          class: "w-full h-[300px]",
          src: d.value,
          "resize-image": { wheel: !1 },
          "background-class": "cropper-background",
          "default-size": F,
          onChange: q
        }, null, 8, ["src"])) : (i(), x("img", {
          key: 1,
          class: "w-full",
          src: e.img
        }, null, 8, se)),
        c("div", ue, [
          d.value ? (i(), x(j, { key: 0 }, [
            b(l(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "backward",
              onClick: t[0] || (t[0] = (o) => O(-90))
            }),
            b(l(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-out",
              onClick: t[1] || (t[1] = (o) => C(0.8))
            }),
            b(l(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-in",
              onClick: t[2] || (t[2] = (o) => C(1.2))
            }),
            b(l(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "forward",
              onClick: t[3] || (t[3] = (o) => O(90))
            })
          ], 64)) : s("", !0),
          e.isReplaceImage ? (i(), r(l(B), {
            key: 1,
            class: "absolute right-0",
            variant: "secondary",
            size: "small",
            label: "Replace image",
            "left-icon": "refresh",
            onClick: P
          })) : s("", !0)
        ]),
        c("div", pe, [
          (V = e.inputOptions) != null && V.includes("description") ? (i(), r(l(z), {
            key: 0,
            modelValue: n.value.description,
            "onUpdate:modelValue": [
              t[4] || (t[4] = (o) => n.value.description = o),
              t[5] || (t[5] = (o) => w("description", o))
            ],
            label: "Describe Image",
            placeholder: ""
          }, null, 8, ["modelValue"])) : s("", !0),
          (I = e.inputOptions) != null && I.includes("link") ? (i(), r(l(z), {
            key: 1,
            modelValue: n.value.link,
            "onUpdate:modelValue": [
              t[6] || (t[6] = (o) => n.value.link = o),
              t[7] || (t[7] = (o) => w("link", o))
            ],
            placeholder: "https://hitpayapp.com",
            label: "Link to"
          }, null, 8, ["modelValue"])) : s("", !0),
          c("div", null, [
            (U = e.inputOptions) != null && U.includes("caption") ? (i(), r(l(E), {
              key: 0,
              modelValue: S.value,
              "onUpdate:modelValue": t[8] || (t[8] = (o) => S.value = o),
              label: "Caption",
              class: "mb-4"
            }, null, 8, ["modelValue"])) : s("", !0),
            (D = e.inputOptions) != null && D.includes("caption") && S.value ? (i(), r(l(z), {
              key: 1,
              modelValue: n.value.caption,
              "onUpdate:modelValue": [
                t[9] || (t[9] = (o) => n.value.caption = o),
                t[10] || (t[10] = (o) => w("caption", o))
              ],
              class: "mb-4",
              placeholder: ""
            }, null, 8, ["modelValue"])) : s("", !0),
            ($ = e.inputOptions) != null && $.includes("caption") && S.value ? (i(), r(l(ne), {
              key: 2,
              "model-value": n.value.caption_variant,
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
              "onUpdate:modelValue": t[11] || (t[11] = (o) => w("caption_variant", o))
            }, null, 8, ["model-value"])) : s("", !0)
          ]),
          c("div", null, [
            (L = e.inputOptions) != null && L.includes("lightbox") ? (i(), r(l(E), {
              key: 0,
              modelValue: R.value,
              "onUpdate:modelValue": [
                t[12] || (t[12] = (o) => R.value = o),
                t[13] || (t[13] = (o) => w("lightbox", o))
              ],
              label: "Lightbox"
            }, {
              after: f(() => [
                b(l(ee), {
                  position: "bottom",
                  distance: 10,
                  "popper-class": "bg-oc-bg-light min-w-[125px]"
                }, {
                  popper: f(() => t[14] || (t[14] = [
                    c("div", { class: "text-oc-text-400 text-sm px-3 py-2 font-medium text-center" }, " Show lightbox when click the image ", -1)
                  ])),
                  default: f(() => [
                    b(l(Y), {
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
            }, 8, ["modelValue"])) : s("", !0)
          ])
        ])
      ]);
    };
  }
};
export {
  ze as default
};
