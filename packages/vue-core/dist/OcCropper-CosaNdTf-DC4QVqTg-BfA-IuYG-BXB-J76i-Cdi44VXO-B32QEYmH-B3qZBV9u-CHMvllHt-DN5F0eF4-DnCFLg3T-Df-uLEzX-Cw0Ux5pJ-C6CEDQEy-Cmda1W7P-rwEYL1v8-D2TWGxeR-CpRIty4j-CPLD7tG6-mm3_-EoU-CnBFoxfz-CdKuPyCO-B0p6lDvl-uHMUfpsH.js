import { ref as c, watch as I, nextTick as K, openBlock as i, createElementBlock as b, createElementVNode as m, createBlock as r, unref as t, Fragment as q, createVNode as s, createCommentVNode as p, withCtx as y } from "vue";
import "dayjs";
import { c as h, e as j, b as F, B as H } from "./Cropper-Qy54pgCV.js";
import { U as x, K as J } from "./OcRadioGroup-55qW3h1q-vUnqQg0t-D2Cy6q6G-B1BFhFhM-Bj5QFVCi-BoHTOSZM-DexD99er-DLZvIVEp-X9yvKp_y-DK_nHfmE-CM5Q_jJg-C3nLwy_v-ArXxkLDs-BnAuxZQQ-DtUj7VJf-CAmWiQuM-xyxDb97m-qnIojfvx-6LRhk12f-gwv7FXUM-CQSZgr0J-DThn6BgA-BNzBmfu4.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { Cropper as M } from "vue-advanced-cropper";
const T = { class: "flex flex-col gap-y-5" }, X = ["src"], Z = { class: "flex gap-x-1 justify-center relative" }, G = { class: "grid grid-cols-2 gap-4" }, P = /* @__PURE__ */ m("div", { class: "text-oc-text-400 text-sm px-3 py-2 font-medium text-center" }, " Show lightbox when click the image ", -1), ne = {
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
  setup(n, { emit: D }) {
    const d = n, V = D, f = c(), w = c(), u = c(""), z = c(!1), o = c(d.inputOptionValues ?? {});
    I(
      () => d.inputOptionValues,
      () => {
        o.value = d.inputOptionValues;
      },
      {
        deep: !0
      }
    ), I(
      () => d.img,
      (a) => {
        a && K(() => {
          try {
            const e = new URL(a);
            e.protocol === "http:" || e.protocol === "https:" ? u.value = `${a}?${Date.now()}` : u.value = a;
          } catch {
            u.value = a;
          }
        });
      },
      { immediate: !0 }
    );
    const E = () => {
      if (u.value && z.value) {
        const { canvas: a } = f.value.getResult();
        V("changeImage", a.toDataURL());
      }
      z.value = !0;
    }, O = (a) => {
      var e;
      return (e = f.value) == null ? void 0 : e.rotate(a);
    }, C = (a) => {
      var e;
      return (e = f.value) == null ? void 0 : e.zoom(a);
    }, N = () => {
      w.value.click();
    }, $ = (a) => {
      if (a.target.files[0] / (1024 * 1024) > +d.maxSize)
        return a.preventDefault(), !1;
      u.value = URL.createObjectURL(a.target.files[0]);
    }, A = ({ imageSize: a, visibleArea: e }) => ({
      width: (e || a).width,
      height: (e || a).height
    }), v = (a, e) => {
      let g = o.value;
      g[a] = e, V("update:input-options", g);
    }, k = c(!!o.value.caption), U = c(!!o.value.lightbox);
    return (a, e) => {
      var g, _, R, S, L, B;
      return i(), b("div", T, [
        m("input", {
          id: "cropper-file-input",
          ref_key: "fileUploadEl",
          ref: w,
          accept: "image/*",
          type: "file",
          class: "hidden",
          onChange: $
        }, null, 544),
        u.value ? (i(), r(t(M), {
          key: 0,
          ref_key: "cropper",
          ref: f,
          class: "w-full h-[300px]",
          src: u.value,
          "resize-image": { wheel: !1 },
          "background-class": "cropper-background",
          "default-size": A,
          onChange: E
        }, null, 8, ["src"])) : (i(), b("img", {
          key: 1,
          class: "w-full",
          src: n.img
        }, null, 8, X)),
        m("div", Z, [
          u.value ? (i(), b(q, { key: 0 }, [
            s(t(h), {
              variant: "secondary",
              size: "small",
              "left-icon": "backward",
              onClick: e[0] || (e[0] = (l) => O(-90))
            }),
            s(t(h), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-out",
              onClick: e[1] || (e[1] = (l) => C(0.8))
            }),
            s(t(h), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-in",
              onClick: e[2] || (e[2] = (l) => C(1.2))
            }),
            s(t(h), {
              variant: "secondary",
              size: "small",
              "left-icon": "forward",
              onClick: e[3] || (e[3] = (l) => O(90))
            })
          ], 64)) : p("", !0),
          n.isReplaceImage ? (i(), r(t(h), {
            key: 1,
            class: "absolute right-0",
            variant: "secondary",
            size: "small",
            label: "Replace image",
            "left-icon": "refresh",
            onClick: N
          })) : p("", !0)
        ]),
        m("div", G, [
          (g = n.inputOptions) != null && g.includes("description") ? (i(), r(t(x), {
            key: 0,
            modelValue: o.value.description,
            "onUpdate:modelValue": [
              e[4] || (e[4] = (l) => o.value.description = l),
              e[5] || (e[5] = (l) => v("description", l))
            ],
            label: "Describe Image",
            placeholder: ""
          }, null, 8, ["modelValue"])) : p("", !0),
          (_ = n.inputOptions) != null && _.includes("link") ? (i(), r(t(x), {
            key: 1,
            modelValue: o.value.link,
            "onUpdate:modelValue": [
              e[6] || (e[6] = (l) => o.value.link = l),
              e[7] || (e[7] = (l) => v("link", l))
            ],
            placeholder: "https://hitpayapp.com",
            label: "Link to"
          }, null, 8, ["modelValue"])) : p("", !0),
          m("div", null, [
            (R = n.inputOptions) != null && R.includes("caption") ? (i(), r(t(j), {
              key: 0,
              modelValue: k.value,
              "onUpdate:modelValue": e[8] || (e[8] = (l) => k.value = l),
              label: "Caption",
              class: "mb-4"
            }, null, 8, ["modelValue"])) : p("", !0),
            (S = n.inputOptions) != null && S.includes("caption") && k.value ? (i(), r(t(x), {
              key: 1,
              modelValue: o.value.caption,
              "onUpdate:modelValue": [
                e[9] || (e[9] = (l) => o.value.caption = l),
                e[10] || (e[10] = (l) => v("caption", l))
              ],
              class: "mb-4",
              placeholder: ""
            }, null, 8, ["modelValue"])) : p("", !0),
            (L = n.inputOptions) != null && L.includes("caption") && k.value ? (i(), r(t(J), {
              key: 2,
              "model-value": o.value.caption_variant,
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
              "onUpdate:modelValue": e[11] || (e[11] = (l) => v("caption_variant", l))
            }, null, 8, ["model-value"])) : p("", !0)
          ]),
          m("div", null, [
            (B = n.inputOptions) != null && B.includes("lightbox") ? (i(), r(t(j), {
              key: 0,
              modelValue: U.value,
              "onUpdate:modelValue": [
                e[12] || (e[12] = (l) => U.value = l),
                e[13] || (e[13] = (l) => v("lightbox", l))
              ],
              label: "Lightbox"
            }, {
              after: y(() => [
                s(t(F), {
                  position: "bottom",
                  distance: 10,
                  "popper-class": "bg-oc-bg-light min-w-[125px]"
                }, {
                  popper: y(() => [
                    P
                  ]),
                  default: y(() => [
                    s(t(H), {
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
            }, 8, ["modelValue"])) : p("", !0)
          ])
        ])
      ]);
    };
  }
};
export {
  ne as default
};
