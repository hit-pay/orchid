import { _ as K } from "./OcDraggable--llAnAP0.js";
import { ref as x, openBlock as r, createBlock as m, unref as a, withCtx as n, createElementBlock as y, Fragment as C, renderList as $, normalizeClass as s, createElementVNode as o, createCommentVNode as b, renderSlot as u, toDisplayString as k, createVNode as f } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { o as M } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
import { q as S } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const B = ["onMouseleave", "onMouseover", "onClick"], L = { class: "flex justify-evenly w-full" }, N = { class: "flex w-full" }, U = { class: "ml-4 flex w-full" }, E = { class: "flex items-center flex-wrap w-full" }, O = ["href"], W = { class: "min-w-[120px]" }, j = { class: "truncate w-[200px]" }, q = { class: "flex items-center ml-4" }, z = { class: "flex w-full" }, Y = {
  __name: "OcDraggableList",
  props: {
    modelValue: Array,
    iconKey: {
      type: String,
      default: "icon"
    },
    isChildren: Boolean,
    childrenKey: {
      type: String,
      default: "children"
    },
    isLink: Boolean,
    linkKey: {
      type: String,
      default: "link"
    },
    isDisabled: Boolean,
    classes: {
      type: String,
      default: ""
    },
    titleWidth: String
  },
  emits: {
    "update:modelValue": [],
    "click:element": [],
    detectMove: null
  },
  setup(i, { emit: w }) {
    const D = w, l = x([]), v = x([]), V = (t, d) => {
      D("update:modelValue", t, d);
    };
    return (t, d) => (r(), m(a(K), {
      "model-value": i.modelValue,
      class: "grid gap-3",
      "onUpdate:modelValue": d[0] || (d[0] = (c, e) => V(c, e)),
      onDetectMove: d[1] || (d[1] = (c) => t.$emit("detectMove", c))
    }, {
      default: n(({ list: c }) => [
        (r(!0), y(C, null, $(c, (e, p) => (r(), y("div", {
          key: e.id,
          class: s([
            "group text-oc-text-500 p-4 flex flex-col w-full rounded border border-gray-200 cursor-pointer",
            e[i.childrenKey] ? "hover:shadow bg-oc-gray-50" : i.isChildren && !l.value[e.id] ? "bg-oc-accent-1-50" : i.classes ? i.classes : "hover:shadow bg-oc-accent-1-50 hover:bg-oc-gray-50"
          ]),
          onMouseleave: () => {
            v.value[e.id] = !1, l.value[e.id] = !1;
          },
          onMouseover: (h) => l.value[e.id] = !0,
          onClick: (h) => t.$emit("click:element", e)
        }, [
          o("div", L, [
            o("div", N, [
              o("div", {
                class: s(["px-2 flex items-center", !i.isDisabled && !e.isDisable ? "drag-el cursor-move" : ""])
              }, [
                !i.isDisabled && !e.isDisable ? (r(), m(a(g), {
                  key: 0,
                  name: "draggable",
                  class: s(
                    e[i.iconKey] ? i.isChildren && !l.value[e.id] ? "hidden" : "hidden group-hover:block" : i.isChildren && !l.value[e.id] ? "opacity-0" : "opacity-0 group-hover:opacity-100 "
                  )
                }, null, 8, ["class"])) : b("", !0),
                e[i.iconKey] ? (r(), m(a(g), {
                  key: 1,
                  name: e[i.iconKey],
                  class: s(
                    !i.isDisabled && !e.isDisable && l.value[e.id] ? "group-hover:hidden" : ""
                  )
                }, null, 8, ["name", "class"])) : b("", !0)
              ], 2),
              o("div", U, [
                o("div", E, [
                  u(t.$slots, "title", { item: e }, () => [
                    o("div", {
                      class: s(["truncate", i.titleWidth])
                    }, k(e.title), 3)
                  ]),
                  i.isLink && e[i.linkKey] && e.type === "link" ? (r(), y("a", {
                    key: 0,
                    href: e[i.linkKey],
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "w-full flex items-center text-oc-text-300 mt-2"
                  }, [
                    f(a(S), {
                      distance: "2",
                      position: "bottom-start",
                      "popper-class": "bg-oc-bg-light text-oc-text-500 p-4 rounded"
                    }, {
                      popper: n(() => [
                        o("div", W, k(e[i.linkKey]), 1)
                      ]),
                      default: n(() => [
                        f(a(g), {
                          width: "12",
                          height: "12",
                          class: "mr-2",
                          name: "link"
                        })
                      ]),
                      _: 2
                    }, 1024),
                    o("span", j, k(e[i.linkKey]), 1)
                  ], 8, O)) : b("", !0)
                ])
              ])
            ]),
            o("div", q, [
              u(t.$slots, "before-action", { item: e }),
              u(t.$slots, "action", { item: e }, () => [
                f(a(M), {
                  modelValue: v.value[e.id],
                  "onUpdate:modelValue": (h) => v.value[e.id] = h,
                  placement: "bottom-end",
                  class: s([
                    "cursor-pointer",
                    i.isChildren && !l.value[e.id] ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                  ])
                }, {
                  menu: n(() => [
                    u(t.$slots, "action-item", {
                      item: e,
                      index: p
                    })
                  ]),
                  default: n(() => [
                    o("div", {
                      class: s(["hover:bg-oc-gray-100 p-1 rounded", v.value[e.id] ? "bg-oc-gray-100" : ""])
                    }, [
                      f(a(g), { name: "dots-vertical" })
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "class"])
              ])
            ])
          ]),
          o("div", z, [
            u(t.$slots, "content", {
              item: e,
              index: p
            })
          ])
        ], 42, B))), 128))
      ]),
      _: 3
    }, 8, ["model-value"]));
  }
};
export {
  K as Draggable,
  Y as DraggableList
};
