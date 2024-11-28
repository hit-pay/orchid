import { computed as x, openBlock as s, createElementBlock as d, normalizeClass as u, createVNode as m, unref as r, createTextVNode as c, toDisplayString as f, renderSlot as y, createElementVNode as g, Fragment as V, renderList as z, createBlock as N, withCtx as v } from "vue";
import "dayjs";
import { m as P } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as p } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const h = {
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
    const t = x(() => ({
      default: "px-1 py-3",
      small: "py-2 text-sm",
      big: "px-2 py-4 text-lg"
    }));
    return (o, a) => (s(), d("div", {
      class: u(["flex text-oc-text-400 items-center gap-x-1", [
        t.value[e.size],
        e.disabled ? "cursor-not-allowed opacity-60" : "hover:text-oc-text cursor-pointer",
        e.isNext ? "flex-row-reverse" : ""
      ]])
    }, [
      m(r(P), {
        width: "14",
        height: "14",
        class: u(e.isNext ? "-rotate-90" : "rotate-90"),
        name: "chevron-down"
      }, null, 8, ["class"]),
      c(" " + f(e.isNext ? "Next" : "Prev"), 1)
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
    const t = x(() => ({
      default: "w-[36px]  h-[36px]",
      small: "w-[32px] text-sm h-[32px]",
      big: "w-[40px] text-lg h-[40px]"
    }));
    return (o, a) => (s(), d("div", {
      class: u(["flex items-center justify-center cursor-pointer py-3 px-1", [
        t.value[e.size],
        e.active ? "bg-oc-gray-100 text-oc-text" : "text-oc-text-400 hover:text-oc-text hover:bg-oc-gray-50",
        e.isRounded ? "rounded-full" : "rounded-sm"
      ]])
    }, [
      y(o.$slots, "default")
    ], 2));
  }
}, w = { class: "w-full items-center flex relative" }, B = { class: "flex items-center gap-x-6" }, S = { class: "hidden md:flex items-center gap-x-3" }, $ = { class: "md:hidden mx-[30px]" }, G = {
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
    const t = e, o = x(() => {
      let a = Number(t.totalVisible);
      if (a <= 3 && t.maxPage > a && (a = 3), t.maxPage <= a)
        return Array.from({ length: t.maxPage }, (l, i) => 1 + i);
      if (t.modelValue <= a - 1)
        return [
          ...Array.from({ length: Math.min(a - 1, t.maxPage) }, (l, i) => i + 1),
          "...",
          t.maxPage
        ];
      if (t.modelValue >= t.maxPage - (a - 2))
        return [
          1,
          "...",
          ...Array.from(
            { length: a - 1 },
            (l, i) => t.maxPage - (a - 2) + i
          )
        ];
      const n = t.modelValue - Math.floor((a - 2) / 2);
      return [
        1,
        "...",
        ...Array.from({ length: a - 2 }, (l, i) => n + i),
        "...",
        t.maxPage
      ];
    });
    return (a, n) => (s(), d("div", w, [
      g("div", B, [
        m(r(h), {
          disabled: e.modelValue <= 1,
          size: e.size,
          onClick: n[0] || (n[0] = (l) => e.modelValue > 1 ? a.$emit("update:modelValue", e.modelValue > 1 ? e.modelValue - 1 : e.modelValue) : "")
        }, null, 8, ["disabled", "size"]),
        g("div", S, [
          (s(!0), d(V, null, z(o.value, (l) => (s(), N(r(b), {
            key: l,
            size: e.size,
            "is-rounded": e.isRounded,
            active: l === e.modelValue,
            onClick: (i) => a.$emit("update:modelValue", l === "..." ? e.modelValue : l)
          }, {
            default: v(() => [
              c(f(l), 1)
            ]),
            _: 2
          }, 1032, ["size", "is-rounded", "active", "onClick"]))), 128))
        ]),
        g("div", $, [
          m(r(b), {
            size: e.size,
            "is-rounded": e.isRounded,
            active: !0
          }, {
            default: v(() => [
              c(f(e.modelValue), 1)
            ]),
            _: 1
          }, 8, ["size", "is-rounded"])
        ]),
        m(r(h), {
          "is-next": "",
          size: e.size,
          disabled: e.modelValue >= e.maxPage,
          onClick: n[1] || (n[1] = (l) => e.modelValue < e.maxPage ? a.$emit(
            "update:modelValue",
            e.modelValue < Number(e.maxPage) ? e.modelValue + 1 : Number(e.maxPage)
          ) : "")
        }, null, 8, ["size", "disabled"])
      ])
    ]));
  }
}, M = {
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
    const t = x(() => ({
      default: "px-1 py-3",
      small: "py-2 text-sm",
      big: "px-2 py-4 text-lg"
    }));
    return (o, a) => (s(), d("div", {
      class: u(["flex text-oc-text-400 items-center gap-x-1", [
        t.value[e.size],
        e.disabled ? "cursor-not-allowed opacity-60" : "hover:text-oc-text cursor-pointer",
        e.isNext ? "flex-row-reverse" : ""
      ]])
    }, [
      m(r(p), {
        width: "14",
        height: "14",
        class: u(e.isNext ? "-rotate-90" : "rotate-90"),
        name: "chevron-down"
      }, null, 8, ["class"]),
      c(" " + f(e.isNext ? "Next" : "Prev"), 1)
    ], 2));
  }
}, D = {
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
    const t = x(() => ({
      default: "w-[36px]  h-[36px]",
      small: "w-[32px] text-sm h-[32px]",
      big: "w-[40px] text-lg h-[40px]"
    }));
    return (o, a) => (s(), d("div", {
      class: u(["flex items-center justify-center cursor-pointer py-3 px-1", [
        t.value[e.size],
        e.active ? "bg-oc-gray-100 text-oc-text" : "text-oc-text-400 hover:text-oc-text hover:bg-oc-gray-50",
        e.isRounded ? "rounded-full" : "rounded-sm"
      ]])
    }, [
      y(o.$slots, "default")
    ], 2));
  }
};
export {
  G as _,
  M as a,
  D as b
};
