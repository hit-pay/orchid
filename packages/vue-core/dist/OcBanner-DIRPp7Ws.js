import { openBlock as a, createBlock as i, Transition as f, withCtx as g, withDirectives as p, createElementVNode as t, normalizeClass as s, unref as r, createCommentVNode as l, renderSlot as c, toDisplayString as d, createTextVNode as y, vShow as b } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as x } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as h } from "./OcButton-Cnqik19l-BEVE67cg.js";
import { _ as w } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const v = { class: "flex items-center gap-3" }, S = { class: "text-oc-text-500" }, k = { class: "p-4 text-sm" }, B = {
  __name: "OcBanner",
  props: {
    modelValue: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "default"
    },
    content: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "filled-check"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    dismissible: {
      type: Boolean,
      default: !1
    },
    transitionName: {
      type: String,
      default: "slide-from-top"
    },
    title: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const m = Object.freeze({
      default: "bg-oc-success-50 text-oc-success-500",
      primary: "bg-oc-primary-50 text-oc-primary-500",
      error: "bg-oc-error-50 text-oc-error-500",
      warning: "bg-oc-warning-50 text-oc-warning-500",
      gray: "bg-oc-gray-100 text-oc-gray-700"
    }), u = Object.freeze({
      default: "border-oc-success-200",
      primary: "border-oc-primary-200",
      error: "border-oc-error-200",
      warning: "border-oc-warning-200",
      gray: "border-oc-gray-300"
    });
    return (o, n) => (a(), i(f, { name: e.transitionName }, {
      default: g(() => [
        p(t("div", {
          class: s([r(u)[e.color], "border rounded-lg banner relative overflow-hidden"])
        }, [
          t("div", {
            class: s(["flex flex-1 items-center justify-between gap-3 min-h-[34px] px-4 text-sm", r(m)[e.color]])
          }, [
            t("div", v, [
              e.showIcon ? (a(), i(r(x), {
                key: 0,
                name: e.icon,
                class: "shrink-0",
                width: "16",
                height: "16"
              }, null, 8, ["name"])) : l("", !0),
              c(o.$slots, "title", {}, () => [
                t("div", S, d(e.title), 1)
              ], !0)
            ]),
            e.dismissible ? (a(), i(r(h), {
              key: 0,
              variant: "secondary",
              "is-transparent": "",
              label: "Close",
              onClick: n[0] || (n[0] = (C) => o.$emit("update:modelValue", !1))
            })) : l("", !0)
          ], 2),
          t("div", k, [
            c(o.$slots, "default", {}, () => [
              y(d(e.content), 1)
            ], !0)
          ])
        ], 2), [
          [b, e.modelValue]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, E = /* @__PURE__ */ w(B, [["__scopeId", "data-v-61abcf56"]]);
export {
  E as O
};
