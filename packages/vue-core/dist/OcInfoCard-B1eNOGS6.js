import { useSlots as x, openBlock as o, createElementBlock as i, normalizeClass as r, createElementVNode as a, toDisplayString as c, createBlock as u, unref as s, withCtx as d, createVNode as m, createCommentVNode as l, renderSlot as n } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as h } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as g } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const b = { class: "uppercase" }, v = { class: "flex flex-col px-3 py-2 text-[12px] text-oc-text-400 font-medium text-sm" }, w = { class: "mb-auto" }, B = {
  key: 1,
  class: "absolute top-2 right-2 left-2 bottom-2 bg-white flex items-center justify-center"
}, j = {
  __name: "OcInfoCard",
  props: {
    isLoading: Boolean,
    title: String,
    titleIcon: String,
    titleIconTooltip: String,
    titleClass: Object,
    transparent: Boolean,
    hover: Boolean,
    shadow: Boolean,
    noData: Boolean,
    noDataDescription: String
  },
  setup(t) {
    const p = x(), f = (e) => !!p[e];
    return (e, S) => (o(), i("div", {
      class: r(["border border-gray-200 rounded p-5 flex flex-col grow transition relative", {
        "border-transparent": t.transparent,
        "hover:shadow": t.hover,
        shadow: t.shadow
      }])
    }, [
      t.title && !f("header") ? (o(), i("div", {
        key: 0,
        class: r(["flex items-start text-oc-text-400 font-medium text-[10px]", t.titleClass])
      }, [
        a("div", b, c(t.title), 1),
        t.titleIconTooltip ? (o(), u(s(g), {
          key: 0,
          "popper-class": "w-max bg-oc-bg",
          position: "top-start"
        }, {
          popper: d(() => [
            a("div", v, c(t.titleIconTooltip), 1)
          ]),
          default: d(() => [
            m(s(h), {
              class: "ml-[3px]",
              name: t.titleIcon,
              width: "16",
              height: "16"
            }, null, 8, ["name"])
          ]),
          _: 1
        })) : l("", !0)
      ], 2)) : l("", !0),
      n(e.$slots, "header"),
      a("div", w, [
        n(e.$slots, "default")
      ]),
      n(e.$slots, "footer"),
      t.isLoading ? (o(), i("div", B, [
        m(s(h), {
          name: "loading-2",
          width: "32",
          height: "32",
          class: "text-oc-text-400 motion-safe:animate-spin"
        })
      ])) : l("", !0)
    ], 2));
  }
};
export {
  j as _
};
