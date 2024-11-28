import { computed as p, openBlock as t, createElementBlock as d, normalizeClass as r, renderSlot as k, createElementVNode as o, createBlock as n, unref as a, withCtx as m, toDisplayString as g, createVNode as h, mergeProps as f, createCommentVNode as x, withModifiers as y } from "vue";
import "dayjs";
import { m as i } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { M as w } from "./OcTooltip-HpelzfZG-w8_u6oS8-BWOI0gq2.js";
const v = { class: "flex gap-3 items-center" }, S = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, E = {
  __name: "OcChip",
  props: {
    variant: {
      type: String,
      default: ""
    },
    label: String,
    icon: String,
    iconSize: String,
    iconTooltip: String,
    closable: Boolean,
    shouldTruncateChip: Boolean,
    iconProps: Object
  },
  emits: {
    remove: []
  },
  setup(c) {
    const s = c, b = p(() => {
      let e = "";
      switch (s.variant) {
        case "accent-1":
          e = "bg-oc-accent-1-50 text-oc-accent-1 ";
          break;
        case "accent-2":
          e = "bg-oc-accent-2-50 text-oc-accent-2 ";
          break;
        case "accent-3":
          e = "bg-oc-accent-3-50 text-oc-accent-3 ";
          break;
        case "success":
          e = "bg-oc-success-50 text-oc-success ";
          break;
        case "warning":
          e = "bg-oc-warning-50 text-oc-warning ";
          break;
        case "error":
          e = "bg-oc-error-50 text-oc-error ";
          break;
        case "gray":
          e = "bg-oc-gray-100 text-oc-gray-700 ";
          break;
        case "light-red":
          e = "bg-oc-accent-3-50 text-oc-accent-3";
          break;
        default:
          e = "bg-oc-primary-50 text-oc-primary ";
          break;
      }
      return e;
    }), u = p(() => {
      let e = "";
      switch (s.variant) {
        case "accent-1":
          e = "text-oc-accent-1-300";
          break;
        case "accent-2":
          e = "text-oc-accent-2-300";
          break;
        case "accent-3":
          e = "text-oc-accent-3-300";
          break;
        case "success":
          e = "text-oc-success-300 ";
          break;
        case "warning":
          e = "text-oc-warning-300 ";
          break;
        case "error":
          e = "text-oc-error-300 ";
          break;
        case "gray":
          e = "text-oc-gray-400 ";
          break;
        case "light-red":
          e = "text-oc-error ";
          break;
        default:
          e = "text-oc-primary-300 ";
          break;
      }
      return e;
    });
    return (e, l) => (t(), d("span", {
      class: r(["rounded-full flex items-center gap-x-3 py-1 px-3 text-sm leading-[20px]", b.value])
    }, [
      k(e.$slots, "default", {}, () => [
        o("div", v, [
          c.iconTooltip && c.icon ? (t(), n(a(w), {
            key: 0,
            position: "top",
            distance: 10
          }, {
            popper: m(() => [
              o("div", S, g(c.iconTooltip), 1)
            ]),
            default: m(() => [
              h(a(i), f({
                width: "18",
                height: "18",
                name: c.icon
              }, c.iconProps), null, 16, ["name"])
            ]),
            _: 1
          })) : c.icon ? (t(), n(a(i), {
            key: 1,
            width: c.iconSize ?? 18,
            height: c.iconSize ?? 18,
            name: c.icon
          }, null, 8, ["width", "height", "name"])) : x("", !0),
          o("div", {
            class: r({
              "truncate max-w-[180px]": c.shouldTruncateChip
            })
          }, g(c.label), 3)
        ])
      ]),
      c.closable ? (t(), n(a(i), {
        key: 0,
        width: "18",
        height: "18",
        class: r([u.value, "cursor-pointer"]),
        name: "filled-x-circle",
        onClick: l[0] || (l[0] = y((C) => e.$emit("remove"), ["stop"]))
      }, null, 8, ["class"])) : x("", !0)
    ], 2));
  }
};
export {
  E as j
};
