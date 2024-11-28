import { computed as C, ref as V, watch as S, onUnmounted as z, openBlock as o, createElementBlock as a, createElementVNode as s, normalizeClass as c, renderSlot as p, toDisplayString as v, createCommentVNode as r, createVNode as m, unref as f, mergeProps as b } from "vue";
import "dayjs";
import { m as j, q as g } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
const O = {
  key: 0,
  id: "modal-overlay-wrapper",
  class: "fixed w-screen z-[1007] top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
}, P = { class: "flex flex-col gap-y-1 overflow-hidden" }, $ = { class: "text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap" }, E = {
  key: 0,
  class: "text-sm text-oc-text-300 text-ellipsis overflow-hidden whitespace-nowrap"
}, I = ["id"], A = {
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
    const i = e, n = w, x = () => {
      i.preventClose || n("update:modelValue", !1);
    }, h = async () => {
      n("click:outside"), !i.persistent && i.modelValue && x();
    }, B = () => {
      n("cancel"), x();
    }, k = C(() => ({
      default: "max-w-[640px]",
      medium: "max-w-[480px]",
      small: "max-w-[320px]"
    })), d = V(), y = (l) => {
      var t;
      (t = d.value) == null || t.click();
    };
    return S(
      () => i.modelValue,
      () => {
        setTimeout(() => {
          var l;
          (l = d.value) == null || l.addEventListener("scroll", y);
        }, 100);
      }
    ), z(() => {
      var l;
      (l = d.value) == null || l.removeEventListener("scroll", y);
    }), (l, t) => e.modelValue ? (o(), a("div", O, [
      s("div", {
        class: "w-full h-full absolute top-0 left-0 z-[1007]",
        onClick: h
      }),
      s("div", {
        class: c(["z-[1008] shadow-normal w-[calc(100%-40px)] max-h-[96vh] bg-oc-bg-light rounded-xl flex flex-col", k.value[e.size]])
      }, [
        e.isHeaderVisible ? (o(), a("div", {
          key: 0,
          class: c(["flex bg-inherit border-oc-gray-200 gap-x-9 justify-between p-5 items-start rounded-t-xl", e.isBorderless ? "" : "border-b"])
        }, [
          p(l.$slots, "header", {}, () => [
            s("div", P, [
              s("span", $, v(e.title), 1),
              p(l.$slots, "description", {}, () => [
                e.description ? (o(), a("span", E, v(e.description), 1)) : r("", !0)
              ])
            ]),
            e.isCloseIcon ? (o(), a("div", {
              key: 0,
              class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text",
              onClick: t[0] || (t[0] = (u) => l.$emit("update:modelValue", !1))
            }, [
              m(f(j), {
                name: "x",
                width: "20",
                height: "20"
              })
            ])) : r("", !0)
          ])
        ], 2)) : r("", !0),
        s("div", {
          id: e.modalId,
          ref_key: "scrollArea",
          ref: d,
          class: c(["overflow-y-auto", [e.size === "small" ? "p-5" : "p-7", e.isBorderless ? "py-0" : ""]]),
          onScroll: t[1] || (t[1] = (u) => n("content-scroll", u))
        }, [
          p(l.$slots, "default")
        ], 42, I),
        e.isFooterVisible ? (o(), a("div", {
          key: 1,
          class: c(["px-5 py-6 border-oc-gray-200 flex gap-x-4", [
            e.footerClass,
            {
              "border-t": !e.isBorderless
            }
          ]])
        }, [
          p(l.$slots, "footer", {}, () => [
            m(f(g), b({
              label: "Cancel",
              variant: "secondary",
              class: "min-w-[112px]"
            }, e.cancelButtonProps, { onClick: B }), null, 16),
            m(f(g), b({
              label: "OK",
              class: "min-w-[112px]"
            }, e.confirmButtonProps, {
              onClick: t[2] || (t[2] = (u) => l.$emit("confirm"))
            }), null, 16)
          ])
        ], 2)) : r("", !0)
      ], 2)
    ])) : r("", !0);
  }
};
export {
  A as J
};
