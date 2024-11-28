import { ref as A, computed as a, openBlock as o, createElementBlock as v, normalizeClass as n, createElementVNode as z, createBlock as x, unref as s, createCommentVNode as d, toDisplayString as I, renderSlot as h, withModifiers as B, createVNode as E } from "vue";
import "dayjs";
import { m as c } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { s as S } from "./_plugin-vue_export-helper-CHgC5LLL-BmOybl0N.js";
const T = ["disabled"], L = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, C = {
  __name: "OcButton",
  props: {
    label: String,
    isDisabled: Boolean,
    isLoading: Boolean,
    leftIcon: String,
    iconClass: [Array, String],
    additionalAreaIcon: String,
    isAdditionalArea: Boolean,
    rightIcon: String,
    isActive: Boolean,
    isTransparent: Boolean,
    isRoundedFull: Boolean,
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  emits: ["addition-click"],
  setup(e) {
    const t = e, l = A(!1), p = a(() => (t.leftIcon || t.rightIcon) && !t.label), g = a(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), y = a(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), b = a(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), f = a(
      () => !l.value && !t.isTransparent && !t.isDisabled && !t.isLoading && !t.isActive && y.value[t.variant]
    ), w = a(() => ({
      primary: t.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: t.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: t.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), k = a(() => ({
      default: t.isTransparent ? "py-3" : p.value ? "p-3" : "px-4 py-3",
      small: (t.isTransparent ? "" : p.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (t.isTransparent ? "py-3 " : p.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), _ = a(() => t.isRoundedFull ? "rounded-full" : "rounded"), i = a(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (u, r) => (o(), v("div", {
      class: n(["flex overflow-hidden", [f.value, _.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      z("button", {
        class: n(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          w.value[e.variant],
          k.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: r[0] || (r[0] = (m) => l.value = !0),
        onMouseup: r[1] || (r[1] = (m) => l.value = !1),
        onMouseleave: r[2] || (r[2] = (m) => l.value = !1)
      }, [
        e.isLoading ? (o(), x(s(c), {
          key: 0,
          width: i.value[e.size],
          height: i.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : d("", !0),
        e.leftIcon && !e.isLoading ? (o(), x(s(c), {
          key: 1,
          width: i.value[e.size],
          class: n(e.iconClass),
          height: i.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : d("", !0),
        e.label ? (o(), v("span", L, I(e.label), 1)) : h(u.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (o(), x(s(c), {
          key: 4,
          width: i.value[e.size],
          height: i.value[e.size],
          name: e.rightIcon,
          class: n(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : d("", !0)
      ], 42, T),
      e.isAdditionalArea && !e.isTransparent ? (o(), v("div", {
        key: 0,
        class: n(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [g.value[e.size], e.variant]]),
        onClick: r[3] || (r[3] = B((m) => u.$emit("addition-click"), ["stop"]))
      }, [
        h(u.$slots, "additional-content", {}, () => [
          E(s(c), {
            name: e.additionalAreaIcon,
            class: n(b.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : d("", !0)
    ], 2));
  }
}, q = /* @__PURE__ */ S(C, [["__scopeId", "data-v-4356d06c"]]);
export {
  q
};
