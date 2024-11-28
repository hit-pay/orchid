import { ref as s, openBlock as n, createBlock as V, unref as f, withCtx as S, createVNode as g, computed as z, watch as O, onUnmounted as I, createElementBlock as d, createElementVNode as u, normalizeClass as v, renderSlot as y, toDisplayString as k, createCommentVNode as m, mergeProps as C } from "vue";
import "dayjs";
import { a7 as _, a8 as B } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import j from "./OcCropper-S4lR2tNS-CpBKNWQF-CtXeQmJa-Bk4uqneH-Bc_Rtpll-l8PtGtvu-pcg6jcmZ-CK564aTW-D_DQbp2q-dcu3fD_z-BAt4DCX1-BRNcJS7k.js";
import "vue-advanced-cropper";
const E = {
  key: 0,
  id: "modal-overlay-wrapper",
  class: "fixed w-screen z-[1007] top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
}, P = { class: "flex flex-col gap-y-1 overflow-hidden" }, $ = { class: "text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap" }, N = {
  key: 0,
  class: "text-sm text-oc-text-300 text-ellipsis overflow-hidden whitespace-nowrap"
}, F = ["id"], L = {
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
  setup(e, { emit: b }) {
    const i = e, l = b, x = () => {
      i.preventClose || l("update:modelValue", !1);
    }, r = async () => {
      l("click:outside"), !i.persistent && i.modelValue && x();
    }, p = () => {
      l("cancel"), x();
    }, h = z(() => ({
      default: "max-w-[640px]",
      medium: "max-w-[480px]",
      small: "max-w-[320px]"
    })), c = s(), a = (t) => {
      var o;
      (o = c.value) == null || o.click();
    };
    return O(
      () => i.modelValue,
      () => {
        setTimeout(() => {
          var t;
          (t = c.value) == null || t.addEventListener("scroll", a);
        }, 100);
      }
    ), I(() => {
      var t;
      (t = c.value) == null || t.removeEventListener("scroll", a);
    }), (t, o) => e.modelValue ? (n(), d("div", E, [
      u("div", {
        class: "w-full h-full absolute top-0 left-0 z-[1007]",
        onClick: r
      }),
      u("div", {
        class: v(["z-[1008] shadow-normal w-[calc(100%-40px)] max-h-[96vh] bg-oc-bg-light rounded-xl flex flex-col", h.value[e.size]])
      }, [
        e.isHeaderVisible ? (n(), d("div", {
          key: 0,
          class: v(["flex bg-inherit border-oc-gray-200 gap-x-9 justify-between p-5 items-start rounded-t-xl", e.isBorderless ? "" : "border-b"])
        }, [
          y(t.$slots, "header", {}, () => [
            u("div", P, [
              u("span", $, k(e.title), 1),
              y(t.$slots, "description", {}, () => [
                e.description ? (n(), d("span", N, k(e.description), 1)) : m("", !0)
              ])
            ]),
            e.isCloseIcon ? (n(), d("div", {
              key: 0,
              class: "p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text",
              onClick: o[0] || (o[0] = (w) => t.$emit("update:modelValue", !1))
            }, [
              g(f(_), {
                name: "x",
                width: "20",
                height: "20"
              })
            ])) : m("", !0)
          ])
        ], 2)) : m("", !0),
        u("div", {
          id: e.modalId,
          ref_key: "scrollArea",
          ref: c,
          class: v(["overflow-y-auto", [e.size === "small" ? "p-5" : "p-7", e.isBorderless ? "py-0" : ""]]),
          onScroll: o[1] || (o[1] = (w) => l("content-scroll", w))
        }, [
          y(t.$slots, "default")
        ], 42, F),
        e.isFooterVisible ? (n(), d("div", {
          key: 1,
          class: v(["px-5 py-6 border-oc-gray-200 flex gap-x-4", [
            e.footerClass,
            {
              "border-t": !e.isBorderless
            }
          ]])
        }, [
          y(t.$slots, "footer", {}, () => [
            g(f(B), C({
              label: "Cancel",
              variant: "secondary",
              class: "min-w-[112px]"
            }, e.cancelButtonProps, { onClick: p }), null, 16),
            g(f(B), C({
              label: "OK",
              class: "min-w-[112px]"
            }, e.confirmButtonProps, {
              onClick: o[2] || (o[2] = (w) => t.$emit("confirm"))
            }), null, 16)
          ])
        ], 2)) : m("", !0)
      ], 2)
    ])) : m("", !0);
  }
}, q = {
  __name: "OcModalCropper",
  props: {
    inputOptions: Array,
    inputOptionValues: Object,
    img: String,
    maxSize: [String, Number]
  },
  emits: ["changeImage", "close", "update:input-options"],
  setup(e, { emit: b }) {
    const i = e, l = b;
    s(), s();
    const x = {
      onClick: () => l("close")
    }, r = s(), p = s(i.link), h = s({
      label: "Save",
      onClick: () => {
        p.value && l("update:input-options", p.value), r.value ? l("changeImage", r.value) : l("close");
      }
    });
    return (c, a) => (n(), V(f(L), {
      title: "Edit Image",
      "is-close-icon": "",
      "cancel-button-props": x,
      "confirm-button-props": h.value
    }, {
      default: S(() => [
        g(f(j), {
          "input-options": e.inputOptions,
          "input-option-values": e.inputOptionValues,
          img: e.img,
          "max-size": e.maxSize,
          onChangeImage: a[0] || (a[0] = (t) => r.value = t),
          "onUpdate:inputOptions": a[1] || (a[1] = (t) => p.value = t)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  q as default
};
