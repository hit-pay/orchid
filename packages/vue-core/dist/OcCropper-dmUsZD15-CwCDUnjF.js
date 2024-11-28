import { ref as g, watch as L, nextTick as F, openBlock as i, createElementBlock as h, createElementVNode as d, createBlock as r, unref as o, Fragment as j, createVNode as b, createCommentVNode as s, withCtx as f, computed as J, normalizeClass as v, renderList as G, renderSlot as M, toDisplayString as $, normalizeProps as Q, mergeProps as H } from "vue";
import "dayjs";
import { a as B, aU as T, m as K, z as X, aV as Y, aQ as W, aP as Z } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { J as _ } from "./OcInputOption-D9DTYAD7-BrCoHHb9-DvcS7u34.js";
import { M as ee } from "./OcTooltip-HpelzfZG-w8_u6oS8-BWOI0gq2.js";
import { Cropper as ae } from "vue-advanced-cropper";
const le = ["id", "value", "checked", "name", "disabled"], te = ["for"], oe = {
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
    return (m, p) => (i(), r(o(Y), {
      class: v(["radio-button inline-block relative cursor-pointer", e.isDisabled ? "disabled" : ""]),
      label: "",
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: f(() => [
        d("input", {
          id: e.groupName + e.id,
          value: e.modelValue,
          checked: e.checked,
          name: e.groupName,
          disabled: e.isDisabled,
          class: "radio-button__input absolute opacity-0 w-0 h-0",
          type: "radio",
          onInput: p[0] || (p[0] = (x) => m.$emit("update:modelValue", x.target.value))
        }, null, 40, le),
        d("label", {
          for: e.groupName + e.id,
          class: v(["radio-button__label flex gap-x-3 relative items-center cursor-pointer transition-all duration-300 text-oc-text-500", {
            "!text-oc-text-300": e.isDisabled,
            "bg-gray-200": e.isDisabled && e.isButtonVariant,
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "radio-button__label--button border-gray-200 border py-3 px-5 rounded": e.isButtonVariant,
            "!px-6 !py-5 !gap-x-4": e.isButtonVariantWithRadio
          }])
        }, [
          !e.isButtonVariant || e.isButtonVariantWithRadio ? (i(), h("span", {
            key: 0,
            class: v(["radio-button__custom w-5 h-5 rounded-full border transition-all duration-300", [
              e.isDisabled || !e.modelValue ? "border-oc-primary-200 bg-oc-primary-50" : "",
              e.errorMessage ? "!border-oc-error" : "border-oc-primary-200"
            ]])
          }, null, 2)) : s("", !0),
          e.icon ? (i(), r(o(W), {
            key: 1,
            class: v(["w-5 h-5 text-oc-text-500", { "!text-oc-text-300": e.isDisabled }]),
            name: e.icon
          }, null, 8, ["class", "name"])) : s("", !0),
          M(m.$slots, "default", {}, () => [
            e.label ? (i(), h("span", {
              key: 0,
              class: v({ "text-sm": !e.isButtonVariantWithRadio })
            }, $(e.label), 3)) : s("", !0)
          ]),
          e.labelIcon ? (i(), r(o(Z), Q(H({ key: 2 }, e.tooltipOptions)), {
            popper: f(() => [
              M(m.$slots, "tooltipText", {}, () => [
                e.tooltipText ? (i(), h("div", oe, $(e.tooltipText), 1)) : s("", !0)
              ])
            ]),
            default: f(() => [
              b(o(W), {
                width: "16",
                height: "16",
                name: e.labelIcon,
                class: "text-oc-text-400"
              }, null, 8, ["name"])
            ]),
            _: 3
          }, 16)) : s("", !0)
        ], 10, te)
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
    const p = m, x = J(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), k = (V) => {
      p("update:modelValue", V);
    };
    return (V, c) => (i(), r(o(X), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: f(() => [
        d("div", {
          class: v(["flex", [x.value[e.alignment], e.wrapperClass]])
        }, [
          (i(!0), h(j, null, G(e.radio, (u, n) => (i(), r(o(ie), {
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
}, re = { class: "flex flex-col gap-y-5" }, se = ["src"], ue = { class: "flex gap-x-1 justify-center relative" }, pe = { class: "grid grid-cols-2 gap-4" }, Ve = {
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
    const p = e, x = m, k = g(), V = g(), c = g(""), u = g(!1), n = g(p.inputOptionValues ?? {});
    L(
      () => p.inputOptionValues,
      () => {
        n.value = p.inputOptionValues;
      },
      {
        deep: !0
      }
    ), L(
      () => p.img,
      (t) => {
        t && F(() => {
          try {
            const a = new URL(t);
            a.protocol === "http:" || a.protocol === "https:" ? c.value = `${t}?${Date.now()}` : c.value = t;
          } catch {
            c.value = t;
          }
        });
      },
      { immediate: !0 }
    );
    const A = () => {
      if (c.value && u.value) {
        const { canvas: t } = k.value.getResult();
        x("changeImage", t.toDataURL());
      }
      u.value = !0;
    }, O = (t) => {
      var a;
      return (a = k.value) == null ? void 0 : a.rotate(t);
    }, z = (t) => {
      var a;
      return (a = k.value) == null ? void 0 : a.zoom(t);
    }, E = () => {
      V.value.click();
    }, P = (t) => {
      if (t.target.files[0] / (1024 * 1024) > +p.maxSize)
        return t.preventDefault(), !1;
      c.value = URL.createObjectURL(t.target.files[0]);
    }, q = ({ imageSize: t, visibleArea: a }) => ({
      width: (a || t).width,
      height: (a || t).height
    }), y = (t, a) => {
      let w = n.value;
      w[t] = a, x("update:input-options", w);
    }, S = g(!!n.value.caption), C = g(!!n.value.lightbox);
    return (t, a) => {
      var w, R, D, U, I, N;
      return i(), h("div", re, [
        d("input", {
          id: "cropper-file-input",
          ref_key: "fileUploadEl",
          ref: V,
          accept: "image/*",
          type: "file",
          class: "hidden",
          onChange: P
        }, null, 544),
        c.value ? (i(), r(o(ae), {
          key: 0,
          ref_key: "cropper",
          ref: k,
          class: "w-full h-[300px]",
          src: c.value,
          "resize-image": { wheel: !1 },
          "background-class": "cropper-background",
          "default-size": q,
          onChange: A
        }, null, 8, ["src"])) : (i(), h("img", {
          key: 1,
          class: "w-full",
          src: e.img
        }, null, 8, se)),
        d("div", ue, [
          c.value ? (i(), h(j, { key: 0 }, [
            b(o(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "backward",
              onClick: a[0] || (a[0] = (l) => O(-90))
            }),
            b(o(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-out",
              onClick: a[1] || (a[1] = (l) => z(0.8))
            }),
            b(o(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-in",
              onClick: a[2] || (a[2] = (l) => z(1.2))
            }),
            b(o(B), {
              variant: "secondary",
              size: "small",
              "left-icon": "forward",
              onClick: a[3] || (a[3] = (l) => O(90))
            })
          ], 64)) : s("", !0),
          e.isReplaceImage ? (i(), r(o(B), {
            key: 1,
            class: "absolute right-0",
            variant: "secondary",
            size: "small",
            label: "Replace image",
            "left-icon": "refresh",
            onClick: E
          })) : s("", !0)
        ]),
        d("div", pe, [
          (w = e.inputOptions) != null && w.includes("description") ? (i(), r(o(_), {
            key: 0,
            modelValue: n.value.description,
            "onUpdate:modelValue": [
              a[4] || (a[4] = (l) => n.value.description = l),
              a[5] || (a[5] = (l) => y("description", l))
            ],
            label: "Describe Image",
            placeholder: ""
          }, null, 8, ["modelValue"])) : s("", !0),
          (R = e.inputOptions) != null && R.includes("link") ? (i(), r(o(_), {
            key: 1,
            modelValue: n.value.link,
            "onUpdate:modelValue": [
              a[6] || (a[6] = (l) => n.value.link = l),
              a[7] || (a[7] = (l) => y("link", l))
            ],
            placeholder: "https://hitpayapp.com",
            label: "Link to"
          }, null, 8, ["modelValue"])) : s("", !0),
          d("div", null, [
            (D = e.inputOptions) != null && D.includes("caption") ? (i(), r(o(T), {
              key: 0,
              modelValue: S.value,
              "onUpdate:modelValue": a[8] || (a[8] = (l) => S.value = l),
              label: "Caption",
              class: "mb-4"
            }, null, 8, ["modelValue"])) : s("", !0),
            (U = e.inputOptions) != null && U.includes("caption") && S.value ? (i(), r(o(_), {
              key: 1,
              modelValue: n.value.caption,
              "onUpdate:modelValue": [
                a[9] || (a[9] = (l) => n.value.caption = l),
                a[10] || (a[10] = (l) => y("caption", l))
              ],
              class: "mb-4",
              placeholder: ""
            }, null, 8, ["modelValue"])) : s("", !0),
            (I = e.inputOptions) != null && I.includes("caption") && S.value ? (i(), r(o(ne), {
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
              "onUpdate:modelValue": a[11] || (a[11] = (l) => y("caption_variant", l))
            }, null, 8, ["model-value"])) : s("", !0)
          ]),
          d("div", null, [
            (N = e.inputOptions) != null && N.includes("lightbox") ? (i(), r(o(T), {
              key: 0,
              modelValue: C.value,
              "onUpdate:modelValue": [
                a[12] || (a[12] = (l) => C.value = l),
                a[13] || (a[13] = (l) => y("lightbox", l))
              ],
              label: "Lightbox"
            }, {
              after: f(() => [
                b(o(ee), {
                  position: "bottom",
                  distance: 10,
                  "popper-class": "bg-oc-bg-light min-w-[125px]"
                }, {
                  popper: f(() => a[14] || (a[14] = [
                    d("div", { class: "text-oc-text-400 text-sm px-3 py-2 font-medium text-center" }, " Show lightbox when click the image ", -1)
                  ])),
                  default: f(() => [
                    b(o(K), {
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
  Ve as default
};
