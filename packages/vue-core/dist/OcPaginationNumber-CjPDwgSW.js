import { computed as g, openBlock as d, createElementBlock as s, createElementVNode as u, createVNode as r, unref as n, Fragment as h, renderList as z, createBlock as y, withCtx as v, createTextVNode as c, toDisplayString as x, normalizeClass as f, renderSlot as N } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as P } from "./OcIcon-CJgBICxh.js";
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
import "vue-draggable-next";
import "@popperjs/core";
const $ = { class: "w-full items-center flex relative" }, w = { class: "flex items-center gap-x-6" }, k = { class: "hidden md:flex items-center gap-x-3" }, B = { class: "md:hidden mx-[30px]" }, I = {
  __name: "OcPagination",
  props: {
    maxPage: {
      type: [String, Number],
      default: 1
    },
    totalVisible: {
      type: [String, Number],
      default: 1,
      validator: (e) => Number(e)
    },
    modelValue: {
      type: [String, Number],
      default: 1
    },
    isRounded: Boolean,
    size: String
  },
  emits: {
    "update:modelValue": []
  },
  setup(e) {
    const a = e, m = g(() => {
      let t = Number(a.totalVisible);
      if (t <= 3 && a.maxPage > t && (t = 3), a.maxPage <= t)
        return Array.from({ length: a.maxPage }, (l, i) => 1 + i);
      if (a.modelValue <= t - 1)
        return [
          ...Array.from({ length: Math.min(t - 1, a.maxPage) }, (l, i) => i + 1),
          "...",
          a.maxPage
        ];
      if (a.modelValue >= a.maxPage - (t - 2))
        return [
          1,
          "...",
          ...Array.from(
            { length: t - 1 },
            (l, i) => a.maxPage - (t - 2) + i
          )
        ];
      const o = a.modelValue - Math.floor((t - 2) / 2);
      return [
        1,
        "...",
        ...Array.from({ length: t - 2 }, (l, i) => o + i),
        "...",
        a.maxPage
      ];
    });
    return (t, o) => (d(), s("div", $, [
      u("div", w, [
        r(n(V), {
          disabled: e.modelValue <= 1,
          size: e.size,
          onClick: o[0] || (o[0] = (l) => e.modelValue > 1 ? t.$emit("update:modelValue", e.modelValue > 1 ? e.modelValue - 1 : e.modelValue) : "")
        }, null, 8, ["disabled", "size"]),
        u("div", k, [
          (d(!0), s(h, null, z(m.value, (l) => (d(), y(n(b), {
            key: l,
            size: e.size,
            "is-rounded": e.isRounded,
            active: l === e.modelValue,
            onClick: (i) => t.$emit("update:modelValue", l === "..." ? e.modelValue : l)
          }, {
            default: v(() => [
              c(x(l), 1)
            ]),
            _: 2
          }, 1032, ["size", "is-rounded", "active", "onClick"]))), 128))
        ]),
        u("div", B, [
          r(n(b), {
            size: e.size,
            "is-rounded": e.isRounded,
            active: !0
          }, {
            default: v(() => [
              c(x(e.modelValue), 1)
            ]),
            _: 1
          }, 8, ["size", "is-rounded"])
        ]),
        r(n(V), {
          "is-next": "",
          size: e.size,
          disabled: e.modelValue >= e.maxPage,
          onClick: o[1] || (o[1] = (l) => e.modelValue < e.maxPage ? t.$emit(
            "update:modelValue",
            e.modelValue < Number(e.maxPage) ? e.modelValue + 1 : Number(e.maxPage)
          ) : "")
        }, null, 8, ["size", "disabled"])
      ])
    ]));
  }
}, V = {
  __name: "OcPrevNext",
  props: {
    disabled: Boolean,
    isNext: Boolean,
    size: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const a = g(() => ({
      default: "px-1 py-3",
      small: "py-2 text-sm",
      big: "px-2 py-4 text-lg"
    }));
    return (m, t) => (d(), s("div", {
      class: f(["flex text-oc-text-400 items-center gap-x-1", [
        a.value[e.size],
        e.disabled ? "cursor-not-allowed opacity-60" : "hover:text-oc-text cursor-pointer",
        e.isNext ? "flex-row-reverse" : ""
      ]])
    }, [
      r(n(P), {
        width: "14",
        height: "14",
        class: f(e.isNext ? "-rotate-90" : "rotate-90"),
        name: "chevron-down"
      }, null, 8, ["class"]),
      c(" " + x(e.isNext ? "Next" : "Prev"), 1)
    ], 2));
  }
}, b = {
  __name: "OcPaginationNumber",
  props: {
    active: Boolean,
    isRounded: Boolean,
    size: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const a = g(() => ({
      default: "w-[36px]  h-[36px]",
      small: "w-[32px] text-sm h-[32px]",
      big: "w-[40px] text-lg h-[40px]"
    }));
    return (m, t) => (d(), s("div", {
      class: f(["flex items-center justify-center cursor-pointer py-3 px-1", [
        a.value[e.size],
        e.active ? "bg-oc-gray-100 text-oc-text" : "text-oc-text-400 hover:text-oc-text hover:bg-oc-gray-50",
        e.isRounded ? "rounded-full" : "rounded-sm"
      ]])
    }, [
      N(m.$slots, "default")
    ], 2));
  }
};
export {
  I as _,
  V as a,
  b
};
