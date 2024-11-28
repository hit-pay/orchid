import { computed as V, ref as $, watch as z, onUnmounted as S, openBlock as n, createElementBlock as r, createElementVNode as l, normalizeClass as u, renderSlot as c, toDisplayString as h, createCommentVNode as d, createVNode as f, unref as m, mergeProps as w } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as k } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as g } from "./OcButton-CgGNGzWP-CIpgruq1.js";
const O = {
  key: 0,
  id: "modal-overlay-wrapper",
  class: "fixed w-screen z-[1007] top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
}, j = { class: "flex flex-col gap-y-1 overflow-hidden" }, P = { class: "text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap" }, I = {
  key: 0,
  class: "text-sm text-oc-text-300 text-ellipsis overflow-hidden whitespace-nowrap"
}, E = ["id"], J = {
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
  setup(e, { emit: y }) {
    const a = e, i = y, o = () => {
      a.preventClose || i("update:modelValue", !1);
    }, x = async () => {
      i("click:outside"), !a.persistent && a.modelValue && o();
    }, B = () => {
      i("cancel"), o();
    }, C = V(() => ({
      default: "max-w-[640px]",
      medium: "max-w-[480px]",
      small: "max-w-[320px]"
    })), p = $(), b = (t) => {
      var s;
      (s = p.value) == null || s.click();
    };
    return z(
      () => a.modelValue,
      () => {
        setTimeout(() => {
          var t;
          (t = p.value) == null || t.addEventListener("scroll", b);
        }, 100);
      }
    ), S(() => {
      var t;
      (t = p.value) == null || t.removeEventListener("scroll", b);
    }), (t, s) => e.modelValue ? (n(), r("div", O, [
      l("div", {
        class: "w-full h-full absolute top-0 left-0 z-[1007]",
        onClick: x
      }),
      l("div", {
        class: u(["z-[1008] shadow-normal w-[calc(100%-40px)] max-h-[96vh] bg-oc-bg-light rounded-xl flex flex-col", C.value[e.size]])
      }, [
        e.isHeaderVisible ? (n(), r("div", {
          key: 0,
          class: u(["flex bg-inherit border-oc-gray-200 gap-x-9 justify-between p-5 items-start rounded-t-xl", e.isBorderless ? "" : "border-b"])
        }, [
          c(t.$slots, "header", {}, () => [
            l("div", j, [
              l("span", P, h(e.title), 1),
              c(t.$slots, "description", {}, () => [
                e.description ? (n(), r("span", I, h(e.description), 1)) : d("", !0)
              ])
            ]),
            e.isCloseIcon ? (n(), r("div", {
              key: 0,
              class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text",
              onClick: s[0] || (s[0] = (v) => t.$emit("update:modelValue", !1))
            }, [
              f(m(k), {
                name: "x",
                width: "20",
                height: "20"
              })
            ])) : d("", !0)
          ])
        ], 2)) : d("", !0),
        l("div", {
          id: e.modalId,
          ref_key: "scrollArea",
          ref: p,
          class: u(["overflow-y-auto", [e.size === "small" ? "p-5" : "p-7", e.isBorderless ? "py-0" : ""]]),
          onScroll: s[1] || (s[1] = (v) => i("content-scroll", v))
        }, [
          c(t.$slots, "default")
        ], 42, E),
        e.isFooterVisible ? (n(), r("div", {
          key: 1,
          class: u(["px-5 py-6 border-oc-gray-200 flex gap-x-4", [
            e.footerClass,
            {
              "border-t": !e.isBorderless
            }
          ]])
        }, [
          c(t.$slots, "footer", {}, () => [
            f(m(g), w({
              label: "Cancel",
              variant: "secondary",
              class: "min-w-[112px]"
            }, e.cancelButtonProps, { onClick: B }), null, 16),
            f(m(g), w({
              label: "OK",
              class: "min-w-[112px]"
            }, e.confirmButtonProps, {
              onClick: s[2] || (s[2] = (v) => t.$emit("confirm"))
            }), null, 16)
          ])
        ], 2)) : d("", !0)
      ], 2)
    ])) : d("", !0);
  }
}, M = {
  key: 0,
  class: "fixed w-screen z-[1007] bg-white top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
}, N = { class: "w-[calc(100%-40px)] h-[calc(100%-40px)]" }, A = { class: "modal-body p-9" }, Q = {
  __name: "OcModalPage",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    isCloseIconVisible: {
      type: Boolean,
      default: !0
    },
    isBackButtonVisible: {
      type: Boolean,
      default: !1
    },
    preventClose: {
      type: Boolean,
      default: !1
    },
    contentClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "back", "click:outside"],
  setup(e, { emit: y }) {
    const a = y;
    return (i, o) => e.modelValue ? (n(), r("div", M, [
      l("div", N, [
        c(i.$slots, "top"),
        l("div", {
          class: u(["relative z-[1008] shadow-normal max-w-[1440px] bg-[linear-gradient(180deg,_rgba(229,_238,_255,_0.5)_0%,_rgba(229,_238,_255,_0)_77.75%)] rounded-xl flex flex-col overflow-y-auto mx-auto", e.contentClass])
        }, [
          e.isBackButtonVisible ? (n(), r("div", {
            key: 0,
            class: "py-3 px-4 rounded cursor-pointer text-oc-gray-400 hover:bg-gray-100 hover:text-oc-text absolute top-5 left-5",
            onClick: o[0] || (o[0] = (x) => a("back"))
          }, [
            f(m(g), {
              variant: "secondary",
              "is-transparent": "",
              label: "Back",
              "left-icon": "chevron-left"
            })
          ])) : d("", !0),
          l("div", {
            class: "flex gap-3 py-3 px-4 rounded cursor-pointer text-oc-gray-400 hover:bg-gray-100 hover:text-oc-text absolute top-5 right-5",
            onClick: o[1] || (o[1] = (x) => a("update:model-value", !1))
          }, [
            f(m(k), {
              name: "x",
              width: "18",
              height: "18"
            }),
            o[2] || (o[2] = l("span", null, "Close", -1))
          ]),
          l("div", A, [
            c(i.$slots, "default")
          ])
        ], 2)
      ])
    ])) : d("", !0);
  }
};
export {
  J as _,
  Q as a
};
