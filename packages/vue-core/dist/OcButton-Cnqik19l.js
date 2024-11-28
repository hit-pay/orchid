import { ref as S, computed as a, openBlock as o, createElementBlock as x, normalizeClass as r, createElementVNode as I, createBlock as h, unref as s, createCommentVNode as d, toDisplayString as p, renderSlot as g, withModifiers as B, createVNode as C } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as c } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { _ as T } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const E = ["disabled"], $ = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, L = {
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
    const t = e, l = S(!1), u = a(() => (t.leftIcon || t.rightIcon) && !t.label), y = a(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), f = a(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), b = a(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), w = a(
      () => !l.value && !t.isTransparent && !t.isDisabled && !t.isLoading && !t.isActive && f.value[t.variant]
    ), k = a(() => ({
      primary: t.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: t.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: t.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), z = a(() => ({
      default: t.isTransparent ? "py-3" : u.value ? "p-3" : "px-4 py-3",
      small: (t.isTransparent ? "" : u.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (t.isTransparent ? "py-3 " : u.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), A = a(() => t.isRoundedFull ? "rounded-full" : "rounded"), n = a(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (v, i) => (o(), x("div", {
      class: r(["flex overflow-hidden", [w.value, A.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      I("button", {
        class: r(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          k.value[e.variant],
          z.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: i[0] || (i[0] = (m) => l.value = !0),
        onMouseup: i[1] || (i[1] = (m) => l.value = !1),
        onMouseleave: i[2] || (i[2] = (m) => l.value = !1)
      }, [
        e.isLoading ? (o(), h(s(c), {
          key: 0,
          width: n.value[e.size],
          height: n.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : d("", !0),
        e.leftIcon && !e.isLoading ? (o(), h(s(c), {
          key: 1,
          width: n.value[e.size],
          class: r(e.iconClass),
          height: n.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : d("", !0),
        e.label ? (o(), x("span", $, p(e.label), 1)) : g(v.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (o(), h(s(c), {
          key: 4,
          width: n.value[e.size],
          height: n.value[e.size],
          name: e.rightIcon,
          class: r(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : d("", !0)
      ], 42, E),
      e.isAdditionalArea && !e.isTransparent ? (o(), x("div", {
        key: 0,
        class: r(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [y.value[e.size], e.variant]]),
        onClick: i[3] || (i[3] = B((m) => v.$emit("addition-click"), ["stop"]))
      }, [
        g(v.$slots, "additional-content", {}, () => [
          C(s(c), {
            name: e.additionalAreaIcon,
            class: r(b.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : d("", !0)
    ], 2));
  }
}, q = /* @__PURE__ */ T(L, [["__scopeId", "data-v-4356d06c"]]);
export {
  q as O
};
