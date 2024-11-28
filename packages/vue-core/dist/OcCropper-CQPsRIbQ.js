import { ref as p, watch as S, nextTick as F, openBlock as i, createElementBlock as y, createElementVNode as d, createBlock as u, unref as o, Fragment as A, createVNode as c, createCommentVNode as r, withCtx as V } from "vue";
import "dayjs";
import { B as g, a as D, T as G } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as H } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as x } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
import { _ as J } from "./OcRadioGroup-B7tHlPSE.js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
import { Cropper as K } from "vue-advanced-cropper";
const M = { class: "flex flex-col gap-y-5" }, P = ["src"], Q = { class: "flex gap-x-1 justify-center relative" }, W = { class: "grid grid-cols-2 gap-4" }, fe = {
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
  setup(n, { emit: E }) {
    const v = n, h = E, k = p(), w = p(), s = p(""), C = p(!1), a = p(v.inputOptionValues ?? {});
    S(
      () => v.inputOptionValues,
      () => {
        a.value = v.inputOptionValues;
      },
      {
        deep: !0
      }
    ), S(
      () => v.img,
      (l) => {
        l && F(() => {
          try {
            const e = new URL(l);
            e.protocol === "http:" || e.protocol === "https:" ? s.value = `${l}?${Date.now()}` : s.value = l;
          } catch {
            s.value = l;
          }
        });
      },
      { immediate: !0 }
    );
    const N = () => {
      if (s.value && C.value) {
        const { canvas: l } = k.value.getResult();
        h("changeImage", l.toDataURL());
      }
      C.value = !0;
    }, O = (l) => {
      var e;
      return (e = k.value) == null ? void 0 : e.rotate(l);
    }, z = (l) => {
      var e;
      return (e = k.value) == null ? void 0 : e.zoom(l);
    }, j = () => {
      w.value.click();
    }, T = (l) => {
      if (l.target.files[0] / (1024 * 1024) > +v.maxSize)
        return l.preventDefault(), !1;
      s.value = URL.createObjectURL(l.target.files[0]);
    }, q = ({ imageSize: l, visibleArea: e }) => ({
      width: (e || l).width,
      height: (e || l).height
    }), f = (l, e) => {
      let m = a.value;
      m[l] = e, h("update:input-options", m);
    }, b = p(!!a.value.caption), U = p(!!a.value.lightbox);
    return (l, e) => {
      var m, $, L, I, R, B;
      return i(), y("div", M, [
        d("input", {
          id: "cropper-file-input",
          ref_key: "fileUploadEl",
          ref: w,
          accept: "image/*",
          type: "file",
          class: "hidden",
          onChange: T
        }, null, 544),
        s.value ? (i(), u(o(K), {
          key: 0,
          ref_key: "cropper",
          ref: k,
          class: "w-full h-[300px]",
          src: s.value,
          "resize-image": { wheel: !1 },
          "background-class": "cropper-background",
          "default-size": q,
          onChange: N
        }, null, 8, ["src"])) : (i(), y("img", {
          key: 1,
          class: "w-full",
          src: n.img
        }, null, 8, P)),
        d("div", Q, [
          s.value ? (i(), y(A, { key: 0 }, [
            c(o(g), {
              variant: "secondary",
              size: "small",
              "left-icon": "backward",
              onClick: e[0] || (e[0] = (t) => O(-90))
            }),
            c(o(g), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-out",
              onClick: e[1] || (e[1] = (t) => z(0.8))
            }),
            c(o(g), {
              variant: "secondary",
              size: "small",
              "left-icon": "zoom-in",
              onClick: e[2] || (e[2] = (t) => z(1.2))
            }),
            c(o(g), {
              variant: "secondary",
              size: "small",
              "left-icon": "forward",
              onClick: e[3] || (e[3] = (t) => O(90))
            })
          ], 64)) : r("", !0),
          n.isReplaceImage ? (i(), u(o(g), {
            key: 1,
            class: "absolute right-0",
            variant: "secondary",
            size: "small",
            label: "Replace image",
            "left-icon": "refresh",
            onClick: j
          })) : r("", !0)
        ]),
        d("div", W, [
          (m = n.inputOptions) != null && m.includes("description") ? (i(), u(o(x), {
            key: 0,
            modelValue: a.value.description,
            "onUpdate:modelValue": [
              e[4] || (e[4] = (t) => a.value.description = t),
              e[5] || (e[5] = (t) => f("description", t))
            ],
            label: "Describe Image",
            placeholder: ""
          }, null, 8, ["modelValue"])) : r("", !0),
          ($ = n.inputOptions) != null && $.includes("link") ? (i(), u(o(x), {
            key: 1,
            modelValue: a.value.link,
            "onUpdate:modelValue": [
              e[6] || (e[6] = (t) => a.value.link = t),
              e[7] || (e[7] = (t) => f("link", t))
            ],
            placeholder: "https://hitpayapp.com",
            label: "Link to"
          }, null, 8, ["modelValue"])) : r("", !0),
          d("div", null, [
            (L = n.inputOptions) != null && L.includes("caption") ? (i(), u(o(D), {
              key: 0,
              modelValue: b.value,
              "onUpdate:modelValue": e[8] || (e[8] = (t) => b.value = t),
              label: "Caption",
              class: "mb-4"
            }, null, 8, ["modelValue"])) : r("", !0),
            (I = n.inputOptions) != null && I.includes("caption") && b.value ? (i(), u(o(x), {
              key: 1,
              modelValue: a.value.caption,
              "onUpdate:modelValue": [
                e[9] || (e[9] = (t) => a.value.caption = t),
                e[10] || (e[10] = (t) => f("caption", t))
              ],
              class: "mb-4",
              placeholder: ""
            }, null, 8, ["modelValue"])) : r("", !0),
            (R = n.inputOptions) != null && R.includes("caption") && b.value ? (i(), u(o(J), {
              key: 2,
              "model-value": a.value.caption_variant,
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
              "onUpdate:modelValue": e[11] || (e[11] = (t) => f("caption_variant", t))
            }, null, 8, ["model-value"])) : r("", !0)
          ]),
          d("div", null, [
            (B = n.inputOptions) != null && B.includes("lightbox") ? (i(), u(o(D), {
              key: 0,
              modelValue: U.value,
              "onUpdate:modelValue": [
                e[12] || (e[12] = (t) => U.value = t),
                e[13] || (e[13] = (t) => f("lightbox", t))
              ],
              label: "Lightbox"
            }, {
              after: V(() => [
                c(o(G), {
                  position: "bottom",
                  distance: 10,
                  "popper-class": "bg-oc-bg-light min-w-[125px]"
                }, {
                  popper: V(() => e[14] || (e[14] = [
                    d("div", { class: "text-oc-text-400 text-sm px-3 py-2 font-medium text-center" }, " Show lightbox when click the image ", -1)
                  ])),
                  default: V(() => [
                    c(o(H), {
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
  fe as default
};
