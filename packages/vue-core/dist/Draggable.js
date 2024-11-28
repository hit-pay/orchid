import { _ as K } from "./OcDraggable-CvV_Pgrx.js";
import { ref as x, openBlock as d, createBlock as h, unref as a, withCtx as n, createElementBlock as y, Fragment as $, renderList as C, normalizeClass as s, createElementVNode as o, createCommentVNode as p, renderSlot as u, toDisplayString as b, createVNode as m } from "vue";
import "dayjs";
import { T as M, D as S } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as f } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "@popperjs/core";
const B = ["onMouseleave", "onMouseover", "onClick"], L = { class: "flex justify-evenly w-full" }, N = { class: "flex w-full" }, U = { class: "ml-4 flex w-full" }, E = { class: "flex items-center flex-wrap w-full" }, O = ["href"], T = { class: "min-w-[120px]" }, W = { class: "truncate w-[200px]" }, j = { class: "flex items-center ml-4" }, z = { class: "flex w-full" }, oe = {
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
    const D = w, l = x([]), v = x([]), V = (t, r) => {
      D("update:modelValue", t, r);
    };
    return (t, r) => (d(), h(a(K), {
      "model-value": i.modelValue,
      class: "grid gap-3",
      "onUpdate:modelValue": r[0] || (r[0] = (c, e) => V(c, e)),
      onDetectMove: r[1] || (r[1] = (c) => t.$emit("detectMove", c))
    }, {
      default: n(({ list: c }) => [
        (d(!0), y($, null, C(c, (e, k) => (d(), y("div", {
          key: e.id,
          class: s([
            "group text-oc-text-500 p-4 flex flex-col w-full rounded border border-gray-200 cursor-pointer",
            e[i.childrenKey] ? "hover:shadow bg-oc-gray-50" : i.isChildren && !l.value[e.id] ? "bg-oc-accent-1-50" : i.classes ? i.classes : "hover:shadow bg-oc-accent-1-50 hover:bg-oc-gray-50"
          ]),
          onMouseleave: () => {
            v.value[e.id] = !1, l.value[e.id] = !1;
          },
          onMouseover: (g) => l.value[e.id] = !0,
          onClick: (g) => t.$emit("click:element", e)
        }, [
          o("div", L, [
            o("div", N, [
              o("div", {
                class: s(["px-2 flex items-center", !i.isDisabled && !e.isDisable ? "drag-el cursor-move" : ""])
              }, [
                !i.isDisabled && !e.isDisable ? (d(), h(a(f), {
                  key: 0,
                  name: "draggable",
                  class: s(
                    e[i.iconKey] ? i.isChildren && !l.value[e.id] ? "hidden" : "hidden group-hover:block" : i.isChildren && !l.value[e.id] ? "opacity-0" : "opacity-0 group-hover:opacity-100 "
                  )
                }, null, 8, ["class"])) : p("", !0),
                e[i.iconKey] ? (d(), h(a(f), {
                  key: 1,
                  name: e[i.iconKey],
                  class: s(
                    !i.isDisabled && !e.isDisable && l.value[e.id] ? "group-hover:hidden" : ""
                  )
                }, null, 8, ["name", "class"])) : p("", !0)
              ], 2),
              o("div", U, [
                o("div", E, [
                  u(t.$slots, "title", { item: e }, () => [
                    o("div", {
                      class: s(["truncate", i.titleWidth])
                    }, b(e.title), 3)
                  ]),
                  i.isLink && e[i.linkKey] && e.type === "link" ? (d(), y("a", {
                    key: 0,
                    href: e[i.linkKey],
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "w-full flex items-center text-oc-text-300 mt-2"
                  }, [
                    m(a(M), {
                      distance: "2",
                      position: "bottom-start",
                      "popper-class": "bg-oc-bg-light text-oc-text-500 p-4 rounded"
                    }, {
                      popper: n(() => [
                        o("div", T, b(e[i.linkKey]), 1)
                      ]),
                      default: n(() => [
                        m(a(f), {
                          width: "12",
                          height: "12",
                          class: "mr-2",
                          name: "link"
                        })
                      ]),
                      _: 2
                    }, 1024),
                    o("span", W, b(e[i.linkKey]), 1)
                  ], 8, O)) : p("", !0)
                ])
              ])
            ]),
            o("div", j, [
              u(t.$slots, "before-action", { item: e }),
              u(t.$slots, "action", { item: e }, () => [
                m(a(S), {
                  modelValue: v.value[e.id],
                  "onUpdate:modelValue": (g) => v.value[e.id] = g,
                  placement: "bottom-end",
                  class: s([
                    "cursor-pointer",
                    i.isChildren && !l.value[e.id] ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                  ])
                }, {
                  menu: n(() => [
                    u(t.$slots, "action-item", {
                      item: e,
                      index: k
                    })
                  ]),
                  default: n(() => [
                    o("div", {
                      class: s(["hover:bg-oc-gray-100 p-1 rounded", v.value[e.id] ? "bg-oc-gray-100" : ""])
                    }, [
                      m(a(f), { name: "dots-vertical" })
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
              index: k
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
  oe as DraggableList
};
