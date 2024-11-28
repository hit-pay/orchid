import { ref as h, computed as g, onMounted as B, watch as $, openBlock as n, createElementBlock as s, normalizeClass as u, createVNode as A, unref as S, withModifiers as I, createCommentVNode as x, createElementVNode as p, Fragment as O, renderList as P, renderSlot as M, toDisplayString as y, nextTick as q } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as j } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const E = ["onClick"], H = {
  key: 0,
  class: "bg-oc-error rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-white px-4"
}, T = 100, z = 35, Y = {
  __name: "OcTabs",
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "pills"].includes(e)
    },
    tabs: Array,
    modelValue: [String, Array],
    maxCount: Number,
    isArrows: Boolean,
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical"].includes(e)
    }
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: d }) {
    const l = e, m = h(0), f = h(0), v = h(), N = d, w = g(() => l.tabs.findIndex((a) => a.value === l.modelValue)), i = g(() => l.variant === "pills"), r = g(() => l.direction === "vertical"), b = () => {
      r.value ? f.value = Math.round(v.value.clientHeight / z) : f.value = Math.round(v.value.clientWidth / T);
    }, V = (a) => {
      var c;
      const o = a === "left" ? --w.value : ++w.value, t = (c = l.tabs[o]) == null ? void 0 : c.value;
      t !== void 0 && N("update:modelValue", t);
    }, k = () => {
      const a = l.tabs.findIndex((o) => o.value === l.modelValue);
      a > -1 && q(() => {
        var t;
        b(), m.value = a;
        const o = {};
        r.value ? o.top = a * z : o.left = a * T, (t = v.value) == null || t.scroll({
          ...o,
          behavior: "smooth"
        });
      });
    };
    return B(() => {
      b(), l.isArrows && k();
    }), $(
      () => l.tabs,
      () => {
        b();
      },
      {
        deep: !0
      }
    ), $(
      () => l.modelValue,
      () => {
        k();
      }
    ), (a, o) => (n(), s("div", {
      id: "test",
      ref_key: "tabsContainer",
      ref: v,
      class: u(["flex normal-case", {
        "gap-x-2": i.value,
        "border-b border-oc-gray-200": !i.value,
        "overflow-hidden relative": e.isArrows,
        "flex-col max-h-full": r.value,
        "gap-y-2": i.value && r.value
      }])
    }, [
      m.value > 0 && e.isArrows ? (n(), s("div", {
        key: 0,
        class: u(["sticky top-0 bottom-0 left-0 z-[1] flex items-center bg-white", { "pb-4": !i.value, "justify-center": r.value }])
      }, [
        A(S(j), {
          name: r.value ? "chevron-up" : "chevron-left",
          width: "16",
          height: "16",
          class: "text-oc-text-400 cursor-pointer hover:text-oc-text-500",
          onClick: o[0] || (o[0] = I((t) => V("left"), ["prevent"]))
        }, null, 8, ["name"])
      ], 2)) : x("", !0),
      p("div", {
        class: u(["flex items-center", { "flex-col": r.value }])
      }, [
        (n(!0), s(O, null, P(e.tabs, (t) => {
          var c, C;
          return n(), s("div", {
            key: t.value,
            class: u(["relative cursor-pointer min-w-[48px] gap-x-3 items-center flex justify-center text-sm hover:text-oc-text-500", [
              t.class,
              i.value ? "py-2 px-3 rounded" : "px-4 pb-3 border-b-2 -mb-[1px]",
              ((c = e.modelValue) == null ? void 0 : c.toString()) === ((C = t.value) == null ? void 0 : C.toString()) ? i.value ? "bg-oc-gray-200 text-oc-text-500" : "border-oc-primary-500 font-medium text-oc-text-500" : i.value ? "text-oc-text-400" : "border-transparent text-oc-text-400",
              e.isArrows ? "!justify-normal !min-w-[100px]" : "",
              r.value ? "!justify-start w-full py-3 px-5" : "",
              r.value && e.isArrows ? "!min-h-[35px]" : ""
            ]]),
            onClick: (D) => a.$emit("update:modelValue", t.value)
          }, [
            M(a.$slots, t.value, {}, () => [
              p("div", {
                class: u({ truncate: e.isArrows })
              }, y(t.label), 3),
              t.count ? (n(), s("div", H, y(t.count > e.maxCount ? `${e.maxCount}+` : t.count), 1)) : x("", !0)
            ])
          ], 10, E);
        }), 128))
      ], 2),
      f.value + m.value < e.tabs.length && e.isArrows ? (n(), s("div", {
        key: 1,
        class: u(["sticky top-0 bottom-0 right-0 flex items-center bg-white", {
          "pb-4": !i.value,
          "justify-center": r.value
        }])
      }, [
        A(S(j), {
          name: r.value ? "chevron-down" : "chevron-right",
          width: "16",
          height: "16",
          class: "text-oc-text-400 cursor-pointer hover:text-oc-text-500",
          onClick: o[1] || (o[1] = (t) => V("right"))
        }, null, 8, ["name"])
      ], 2)) : x("", !0)
    ], 2));
  }
}, L = ["src"], W = { class: "shrink-0" }, Z = {
  __name: "OcPaymentTab",
  props: {
    tab: {
      type: Object,
      required: !0
    },
    modelValue: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (d, l) => (n(), s("div", {
      class: u(["flex items-center rounded-sm cursor-pointer text-sm p-3 gap-x-3 border h-[40px] border-oc-gray-200", { "border-oc-primary border-2 font-medium": e.modelValue === e.tab.value }]),
      onClick: l[0] || (l[0] = (m) => d.$emit("update:modelValue", e.tab.value))
    }, [
      M(d.$slots, "logo", {}, () => [
        e.tab.logo ? (n(), s("img", {
          key: 0,
          src: e.tab.logo,
          alt: "logo"
        }, null, 8, L)) : x("", !0)
      ]),
      p("div", W, y(e.tab.label), 1)
    ], 2));
  }
};
export {
  Y as _,
  Z as a
};
