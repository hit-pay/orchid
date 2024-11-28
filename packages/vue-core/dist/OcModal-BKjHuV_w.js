import { computed as C, ref as V, watch as S, onUnmounted as $, openBlock as o, createElementBlock as s, createElementVNode as i, normalizeClass as c, renderSlot as u, toDisplayString as v, createCommentVNode as a, createVNode as f, unref as p, mergeProps as b } from "vue";
import "dayjs";
import { B as g } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as z } from "./OcIcon-CJgBICxh.js";
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
const O = {
  key: 0,
  id: "modal-overlay-wrapper",
  class: "fixed w-screen z-[1007] top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
}, j = { class: "flex flex-col gap-y-1 overflow-hidden" }, P = { class: "text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap" }, E = {
  key: 0,
  class: "text-sm text-oc-text-300 text-ellipsis overflow-hidden whitespace-nowrap"
}, I = ["id"], X = {
  __name: "OcModal",
  props: {
    isBorderless: Boolean,
    footerClass: {
      type: String,
      default: "justify-end"
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    isCloseIcon: {
      type: Boolean,
      default: !0
    },
    cancelButtonProps: {
      type: Object,
      default: () => ({
        label: "Cancel",
        variant: "secondary"
      })
    },
    preventClose: {
      type: Boolean,
      default: !1
    },
    isHeaderVisible: {
      type: Boolean,
      default: !0
    },
    isFooterVisible: {
      type: Boolean,
      default: !0
    },
    modalId: {
      type: String,
      default: ""
    },
    confirmButtonProps: {
      type: Object,
      default: () => ({
        label: "OK",
        class: "min-w-[112px]"
      })
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["default", "medium", "small"].includes(e)
    }
  },
  emits: [
    "update:modelValue",
    "confirm",
    "cancel",
    "click:outside",
    "content-scroll"
  ],
  setup(e, { emit: w }) {
    const r = e, n = w, y = () => {
      r.preventClose || n("update:modelValue", !1);
    }, h = async () => {
      n("click:outside"), !r.persistent && r.modelValue && y();
    }, B = () => {
      n("cancel"), y();
    }, k = C(() => ({
      default: "max-w-[640px]",
      medium: "max-w-[480px]",
      small: "max-w-[320px]"
    })), d = V(), x = (t) => {
      var l;
      (l = d.value) == null || l.click();
    };
    return S(
      () => r.modelValue,
      () => {
        setTimeout(() => {
          var t;
          (t = d.value) == null || t.addEventListener("scroll", x);
        }, 100);
      }
    ), $(() => {
      var t;
      (t = d.value) == null || t.removeEventListener("scroll", x);
    }), (t, l) => e.modelValue ? (o(), s("div", O, [
      i("div", {
        class: "w-full h-full absolute top-0 left-0 z-[1007]",
        onClick: h
      }),
      i("div", {
        class: c(["z-[1008] shadow-normal w-[calc(100%-40px)] max-h-[96vh] bg-oc-bg-light rounded-xl flex flex-col", k.value[e.size]])
      }, [
        e.isHeaderVisible ? (o(), s("div", {
          key: 0,
          class: c(["flex bg-inherit border-oc-gray-200 gap-x-9 justify-between p-5 items-start rounded-t-xl", e.isBorderless ? "" : "border-b"])
        }, [
          u(t.$slots, "header", {}, () => [
            i("div", j, [
              i("span", P, v(e.title), 1),
              u(t.$slots, "description", {}, () => [
                e.description ? (o(), s("span", E, v(e.description), 1)) : a("", !0)
              ])
            ]),
            e.isCloseIcon ? (o(), s("div", {
              key: 0,
              class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text",
              onClick: l[0] || (l[0] = (m) => t.$emit("update:modelValue", !1))
            }, [
              f(p(z), {
                name: "x",
                width: "20",
                height: "20"
              })
            ])) : a("", !0)
          ])
        ], 2)) : a("", !0),
        i("div", {
          id: e.modalId,
          ref_key: "scrollArea",
          ref: d,
          class: c(["overflow-y-auto", [e.size === "small" ? "p-5" : "p-7", e.isBorderless ? "py-0" : ""]]),
          onScroll: l[1] || (l[1] = (m) => n("content-scroll", m))
        }, [
          u(t.$slots, "default")
        ], 42, I),
        e.isFooterVisible ? (o(), s("div", {
          key: 1,
          class: c(["px-5 py-6 border-oc-gray-200 flex gap-x-4", [
            e.footerClass,
            {
              "border-t": !e.isBorderless
            }
          ]])
        }, [
          u(t.$slots, "footer", {}, () => [
            f(p(g), b({
              label: "Cancel",
              variant: "secondary",
              class: "min-w-[112px]"
            }, e.cancelButtonProps, { onClick: B }), null, 16),
            f(p(g), b({
              label: "OK",
              class: "min-w-[112px]"
            }, e.confirmButtonProps, {
              onClick: l[2] || (l[2] = (m) => t.$emit("confirm"))
            }), null, 16)
          ])
        ], 2)) : a("", !0)
      ], 2)
    ])) : a("", !0);
  }
};
export {
  X as _
};
