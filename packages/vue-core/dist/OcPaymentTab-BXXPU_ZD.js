import { ref as p, computed as h, onMounted as B, watch as C, openBlock as n, createElementBlock as s, normalizeClass as u, createVNode as A, unref as S, withModifiers as I, createCommentVNode as x, createElementVNode as g, Fragment as O, renderList as P, renderSlot as M, toDisplayString as y, nextTick as q } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as j } from "./OcIcon-CJgBICxh.js";
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
const E = ["onClick"], H = {
  key: 0,
  class: "bg-oc-error rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-white px-4"
}, T = 100, z = 35, ae = {
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
    const o = e, m = p(0), f = p(0), v = p(), N = d, w = h(() => o.tabs.findIndex((a) => a.value === o.modelValue)), i = h(() => o.variant === "pills"), r = h(() => o.direction === "vertical"), b = () => {
      r.value ? f.value = Math.round(v.value.clientHeight / z) : f.value = Math.round(v.value.clientWidth / T);
    }, V = (a) => {
      var c;
      const l = a === "left" ? --w.value : ++w.value, t = (c = o.tabs[l]) == null ? void 0 : c.value;
      t !== void 0 && N("update:modelValue", t);
    }, k = () => {
      const a = o.tabs.findIndex((l) => l.value === o.modelValue);
      a > -1 && q(() => {
        var t;
        b(), m.value = a;
        const l = {};
        r.value ? l.top = a * z : l.left = a * T, (t = v.value) == null || t.scroll({
          ...l,
          behavior: "smooth"
        });
      });
    };
    return B(() => {
      b(), o.isArrows && k();
    }), C(
      () => o.tabs,
      () => {
        b();
      },
      {
        deep: !0
      }
    ), C(
      () => o.modelValue,
      () => {
        k();
      }
    ), (a, l) => (n(), s("div", {
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
          onClick: l[0] || (l[0] = I((t) => V("left"), ["prevent"]))
        }, null, 8, ["name"])
      ], 2)) : x("", !0),
      g("div", {
        class: u(["flex items-center", { "flex-col": r.value }])
      }, [
        (n(!0), s(O, null, P(e.tabs, (t) => {
          var c, $;
          return n(), s("div", {
            key: t.value,
            class: u(["relative cursor-pointer min-w-[48px] gap-x-3 items-center flex justify-center text-sm hover:text-oc-text-500", [
              t.class,
              i.value ? "py-2 px-3 rounded" : "px-4 pb-3 border-b-2 -mb-[1px]",
              ((c = e.modelValue) == null ? void 0 : c.toString()) === (($ = t.value) == null ? void 0 : $.toString()) ? i.value ? "bg-oc-gray-200 text-oc-text-500" : "border-oc-primary-500 font-medium text-oc-text-500" : i.value ? "text-oc-text-400" : "border-transparent text-oc-text-400",
              e.isArrows ? "!justify-normal !min-w-[100px]" : "",
              r.value ? "!justify-start w-full py-3 px-5" : "",
              r.value && e.isArrows ? "!min-h-[35px]" : ""
            ]]),
            onClick: (D) => a.$emit("update:modelValue", t.value)
          }, [
            M(a.$slots, t.value, {}, () => [
              g("div", {
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
          onClick: l[1] || (l[1] = (t) => V("right"))
        }, null, 8, ["name"])
      ], 2)) : x("", !0)
    ], 2));
  }
}, L = ["src"], W = { class: "shrink-0" }, ie = {
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
    return (d, o) => (n(), s("div", {
      class: u(["flex items-center rounded-sm cursor-pointer text-sm p-3 gap-x-3 border h-[40px] border-oc-gray-200", { "border-oc-primary border-2 font-medium": e.modelValue === e.tab.value }]),
      onClick: o[0] || (o[0] = (m) => d.$emit("update:modelValue", e.tab.value))
    }, [
      M(d.$slots, "logo", {}, () => [
        e.tab.logo ? (n(), s("img", {
          key: 0,
          src: e.tab.logo,
          alt: "logo"
        }, null, 8, L)) : x("", !0)
      ]),
      g("div", W, y(e.tab.label), 1)
    ], 2));
  }
};
export {
  ae as _,
  ie as a
};
