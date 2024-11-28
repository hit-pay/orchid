import { ref as m, computed as p, openBlock as s, createElementBlock as n, createVNode as f, unref as c, withCtx as v, createElementVNode as i, Fragment as T, renderList as V, normalizeClass as k, createTextVNode as C, createBlock as N, createCommentVNode as z } from "vue";
import "dayjs";
import { D as U, B as b } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as J } from "./_plugin-vue_export-helper-CHgC5LLL.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as P } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
import { EMOJI_LIST as r, EMOJI_CATEGORIES as A } from "./Form/EmojiPicker/conts/emoji.js";
const F = { class: "flex items-center justify-center rounded bg-oc-bg-dark h-[140px] relative w-full z-50" }, G = ["innerHTML"], R = { class: "p-4 w-[340px]" }, q = { class: "bg-oc-bg-dark p-4 rounded flex items-center justify-center" }, K = ["innerHTML"], Q = { class: "pt-3 pb-4" }, W = ["id", "innerHTML", "onClick"], X = {
  key: 1,
  class: "text-oc-text-400 text-center p-3"
}, Y = { class: "border-t border-b py-3 grid grid-cols-9 gap-3" }, Z = ["innerHTML", "onClick"], ee = { class: "grid grid-cols-2 gap-5 mt-6" }, te = {
  __name: "OcEmojiPicker",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    isDisabled: Boolean,
    popperOptions: Object
  },
  emits: {
    "update:modelValue": []
  },
  setup(a, { emit: E }) {
    const g = a, L = E, d = m(!1), u = m(""), l = m(g.modelValue), h = m("grinning"), w = p(() => g.modelValue || r.sunglasses), O = p(
      () => l.value ? r[l.value] : r.sunglasses
    ), _ = p(
      () => Object.entries(r).filter(([t]) => t.includes(u.value))
    ), y = p(() => Object.entries(A)), M = (t) => {
      l.value = t;
    }, j = () => {
      d.value = !1, L("update:modelValue", r[l.value]);
    }, B = () => {
      d.value = !1, l.value = g.modelValue;
    }, I = () => {
      const t = Object.keys(r), e = Math.round(Math.random() * t.length);
      l.value = t[e], j();
    }, H = (t) => {
      t && (u.value = "");
    }, D = (t) => {
      const e = document.getElementById(`emoji-${t}`).offsetTop;
      document.getElementById("emojiList").scroll({ top: e, behavior: "smooth" }), h.value = t;
    }, S = (t) => {
      y.value.forEach(([e]) => {
        const o = document.getElementById(`emoji-${e}`).offsetTop;
        t.target.scrollTop >= o - 20 && (h.value = e);
      });
    };
    return (t, e) => (s(), n("div", F, [
      f(c(U), {
        modelValue: d.value,
        "onUpdate:modelValue": [
          e[1] || (e[1] = (o) => d.value = o),
          H
        ],
        "max-menu-height": 600,
        class: "!w-auto z-50",
        "popper-options": {
          ...a.popperOptions
        },
        distance: 26,
        "is-disabled": a.isDisabled,
        placement: "bottom"
      }, {
        menu: v(() => [
          e[4] || (e[4] = i("div", {
            class: "oc-arrow",
            "data-popper-arrow": ""
          }, null, -1)),
          i("div", R, [
            i("div", q, [
              i("div", {
                innerHTML: O.value,
                class: "flex items-center justify-center w-10 h-10 text-[40px]"
              }, null, 8, K)
            ]),
            i("div", Q, [
              f(c(P), {
                modelValue: u.value,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => u.value = o),
                placeholder: "Search",
                icon: "search"
              }, null, 8, ["modelValue"])
            ]),
            _.value.length ? (s(), n("div", {
              key: 0,
              id: "emojiList",
              class: "grid grid-cols-9 gap-3 max-h-[204px] overflow-y-auto overflow-x-hidden mt-3 mb-5 relative",
              onScroll: S
            }, [
              (s(!0), n(T, null, V(_.value, ([o, x]) => (s(), n("div", {
                id: `emoji-${o}`,
                key: o,
                innerHTML: x,
                class: "w-8 h-8 text-[24px] flex items-center justify-center cursor-pointer transition hover:bg-oc-gray-100 rounded",
                onClick: ($) => M(o)
              }, null, 8, W))), 128))
            ], 32)) : (s(), n("div", X, "No emoji found")),
            i("div", Y, [
              (s(!0), n(T, null, V(y.value, ([o, x]) => (s(), n("div", {
                key: o,
                innerHTML: x,
                class: k(["w-8 h-8 text-[24px] flex items-center justify-center cursor-pointer transition opacity-30 hover:opacity-100", {
                  "!opacity-100": o === h.value
                }]),
                onClick: ($) => D(o)
              }, null, 10, Z))), 128))
            ]),
            i("div", ee, [
              f(c(b), {
                variant: "secondary",
                onClick: B
              }, {
                default: v(() => e[2] || (e[2] = [
                  C("Cancel")
                ])),
                _: 1
              }),
              f(c(b), { onClick: j }, {
                default: v(() => e[3] || (e[3] = [
                  C("Use this emoji")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        default: v(() => [
          i("div", {
            innerHTML: w.value,
            class: k(["flex items-center justify-center w-12 h-12 text-[40px] transition rounded", {
              "cursor-pointer hover:bg-oc-gray-200": !a.isDisabled
            }])
          }, null, 10, G)
        ]),
        _: 1
      }, 8, ["modelValue", "popper-options", "is-disabled"]),
      a.isDisabled ? z("", !0) : (s(), N(c(b), {
        key: 0,
        "left-icon": "shuffle",
        variant: "secondary",
        class: "absolute top-5 right-5",
        onClick: I
      }))
    ]));
  }
}, _e = /* @__PURE__ */ J(te, [["__scopeId", "data-v-6a3c86cb"]]);
export {
  _e as O
};
