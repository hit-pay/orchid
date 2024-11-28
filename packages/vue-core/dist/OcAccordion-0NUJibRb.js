import { ref as u, watch as b, onUpdated as y, openBlock as l, createElementBlock as x, normalizeClass as a, createElementVNode as o, renderSlot as s, createTextVNode as c, toDisplayString as m, createBlock as f, unref as p, createCommentVNode as g, nextTick as h } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as E } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const C = {
  __name: "OcAccordion",
  props: {
    header: {
      type: String,
      default: ""
    },
    headerStyle: {
      type: String,
      default: ""
    },
    body: {
      type: String,
      default: ""
    },
    bodyStyle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "chevron-down"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    isAnimated: {
      type: Boolean,
      default: !0
    },
    isExpandable: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:isExpandable": []
  },
  setup(e) {
    const d = u(), n = e, r = async (t) => {
      await h(), d.value && (d.value.style.maxHeight = t ? "max-content" : "0");
    };
    return b(() => n.isExpandable, r), y(() => {
      r(n.isExpandable);
    }), (t, i) => (l(), x("div", {
      class: a(e.isDisabled && "opacity-60")
    }, [
      o("div", null, [
        o("div", {
          class: a(["border-oc-accent-1-50 py-3 text-sm border z-10 justify-between px-4 gap-x-3 flex hover:border-oc-gray-200 items-center w-full text-oc-text", [
            e.isExpandable ? "rounded-t border-oc-gray-200" : "rounded border-transparent",
            e.headerStyle
          ]]),
          onClick: i[0] || (i[0] = (v) => n.isDisabled ? null : t.$emit("update:isExpandable", !n.isExpandable))
        }, [
          s(t.$slots, "header", {}, () => [
            c(m(e.header), 1)
          ]),
          e.showIcon ? (l(), f(p(E), {
            key: 0,
            name: e.icon,
            class: a(["text-oc-text-400 w-4 h-4 shrink-0", [e.isExpandable && "-rotate-180", e.isAnimated && "transition-all duration-300"]])
          }, null, 8, ["name", "class"])) : g("", !0)
        ], 2),
        o("div", {
          ref_key: "upcomingAccordion",
          ref: d,
          class: a(["max-h-0", [e.isAnimated && "transition-all duration-300", !e.isExpandable && "overflow-hidden"]])
        }, [
          o("div", {
            class: a(["text-oc-text text-sm p-4 rounded-b z-0 border-x border-b", [e.isExpandable ? "border-oc-gray-200" : " border-transparent", e.bodyStyle]])
          }, [
            s(t.$slots, "body", {}, () => [
              c(m(e.body), 1)
            ])
          ], 2)
        ], 2)
      ])
    ], 2));
  }
};
export {
  C as _
};
