import { openBlock as r, createBlock as a, unref as e, normalizeProps as m, mergeProps as l, withCtx as i, createElementVNode as o, toDisplayString as n, createVNode as c, createElementBlock as p } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as s } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as d } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const x = { class: "rounded-full share-icon w-fit cursor-pointer text-oc-text-400 p-3 border border-gray-200" }, h = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, u = {
  key: 1,
  class: "px-3 share-icon border border-oc-gray-200 rounded-full w-fit py-[6px] flex items-center gap-x-2"
}, f = { class: "text-sm" }, E = {
  __name: "OcShareIcon",
  props: {
    text: String,
    icon: String,
    isOnlyIcon: Boolean,
    tooltipOptions: {
      type: Object
    }
  },
  setup(t) {
    return (g, y) => t.isOnlyIcon ? (r(), a(e(d), m(l({ key: 0 }, t.tooltipOptions)), {
      popper: i(() => [
        o("div", h, n(t.text), 1)
      ]),
      default: i(() => [
        o("div", x, [
          c(e(s), {
            name: t.icon,
            width: "20",
            height: "20"
          }, null, 8, ["name"])
        ])
      ]),
      _: 1
    }, 16)) : (r(), p("div", u, [
      c(e(s), {
        name: t.icon,
        width: "20",
        height: "20"
      }, null, 8, ["name"]),
      o("span", f, n(t.text), 1)
    ]));
  }
};
export {
  E as _
};
