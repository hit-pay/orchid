import { ref as m, computed as p, openBlock as s, createElementBlock as n, createVNode as f, unref as c, withCtx as v, createElementVNode as l, Fragment as T, renderList as V, normalizeClass as k, createTextVNode as C, createBlock as D, createCommentVNode as z } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { q as b } from "./OcButton-Cnqik19l-BEVE67cg.js";
import { d as U } from "./OcInputOption-rY2kKCL8-Ce2jETq4.js";
import { o as J } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
import { EMOJI_LIST as r, EMOJI_CATEGORIES as P } from "./Form/EmojiPicker/conts/emoji.js";
import { _ as q } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const A = { class: "flex items-center justify-center rounded bg-oc-bg-dark h-[140px] relative w-full z-50" }, F = ["innerHTML"], G = { class: "p-4 w-[340px]" }, R = { class: "bg-oc-bg-dark p-4 rounded flex items-center justify-center" }, K = ["innerHTML"], Q = { class: "pt-3 pb-4" }, W = ["id", "innerHTML", "onClick"], X = {
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
    const g = a, L = E, d = m(!1), u = m(""), i = m(g.modelValue), h = m("grinning"), O = p(() => g.modelValue || r.sunglasses), w = p(
      () => i.value ? r[i.value] : r.sunglasses
    ), y = p(
      () => Object.entries(r).filter(([t]) => t.includes(u.value))
    ), j = p(() => Object.entries(P)), M = (t) => {
      i.value = t;
    }, _ = () => {
      d.value = !1, L("update:modelValue", r[i.value]);
    }, I = () => {
      d.value = !1, i.value = g.modelValue;
    }, H = () => {
      const t = Object.keys(r), e = Math.round(Math.random() * t.length);
      i.value = t[e], _();
    }, B = (t) => {
      t && (u.value = "");
    }, S = (t) => {
      const e = document.getElementById(`emoji-${t}`).offsetTop;
      document.getElementById("emojiList").scroll({ top: e, behavior: "smooth" }), h.value = t;
    }, N = (t) => {
      j.value.forEach(([e]) => {
        const o = document.getElementById(`emoji-${e}`).offsetTop;
        t.target.scrollTop >= o - 20 && (h.value = e);
      });
    };
    return (t, e) => (s(), n("div", A, [
      f(c(J), {
        modelValue: d.value,
        "onUpdate:modelValue": [
          e[1] || (e[1] = (o) => d.value = o),
          B
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
          e[4] || (e[4] = l("div", {
            class: "oc-arrow",
            "data-popper-arrow": ""
          }, null, -1)),
          l("div", G, [
            l("div", R, [
              l("div", {
                innerHTML: w.value,
                class: "flex items-center justify-center w-10 h-10 text-[40px]"
              }, null, 8, K)
            ]),
            l("div", Q, [
              f(c(U), {
                modelValue: u.value,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => u.value = o),
                placeholder: "Search",
                icon: "search"
              }, null, 8, ["modelValue"])
            ]),
            y.value.length ? (s(), n("div", {
              key: 0,
              id: "emojiList",
              class: "grid grid-cols-9 gap-3 max-h-[204px] overflow-y-auto overflow-x-hidden mt-3 mb-5 relative",
              onScroll: N
            }, [
              (s(!0), n(T, null, V(y.value, ([o, x]) => (s(), n("div", {
                id: `emoji-${o}`,
                key: o,
                innerHTML: x,
                class: "w-8 h-8 text-[24px] flex items-center justify-center cursor-pointer transition hover:bg-oc-gray-100 rounded",
                onClick: ($) => M(o)
              }, null, 8, W))), 128))
            ], 32)) : (s(), n("div", X, "No emoji found")),
            l("div", Y, [
              (s(!0), n(T, null, V(j.value, ([o, x]) => (s(), n("div", {
                key: o,
                innerHTML: x,
                class: k(["w-8 h-8 text-[24px] flex items-center justify-center cursor-pointer transition opacity-30 hover:opacity-100", {
                  "!opacity-100": o === h.value
                }]),
                onClick: ($) => S(o)
              }, null, 10, Z))), 128))
            ]),
            l("div", ee, [
              f(c(b), {
                variant: "secondary",
                onClick: I
              }, {
                default: v(() => e[2] || (e[2] = [
                  C("Cancel")
                ])),
                _: 1
              }),
              f(c(b), { onClick: _ }, {
                default: v(() => e[3] || (e[3] = [
                  C("Use this emoji")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        default: v(() => [
          l("div", {
            innerHTML: O.value,
            class: k(["flex items-center justify-center w-12 h-12 text-[40px] transition rounded", {
              "cursor-pointer hover:bg-oc-gray-200": !a.isDisabled
            }])
          }, null, 10, F)
        ]),
        _: 1
      }, 8, ["modelValue", "popper-options", "is-disabled"]),
      a.isDisabled ? z("", !0) : (s(), D(c(b), {
        key: 0,
        "left-icon": "shuffle",
        variant: "secondary",
        class: "absolute top-5 right-5",
        onClick: H
      }))
    ]));
  }
}, fe = /* @__PURE__ */ q(te, [["__scopeId", "data-v-072d35eb"]]);
export {
  fe as O
};
