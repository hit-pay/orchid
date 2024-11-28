import { computed as c, openBlock as a, createElementBlock as m, normalizeClass as e, createElementVNode as l, createTextVNode as u, toDisplayString as i, createBlock as d, unref as r, withCtx as v, createVNode as f, createCommentVNode as g, renderSlot as x } from "vue";
import "dayjs";
import { m as y } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { T as h } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-CN2dgzYx-BzsRWRq1-Cnvd4g4F.js";
const z = {
  __name: "OcListDetail",
  props: {
    label: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "small",
      validator: (t) => ["small", "big"].includes(t)
    },
    alignment: {
      type: String,
      default: "horizontal",
      validator: (t) => ["horizontal", "vertical"].includes(t)
    },
    showCopyTooltip: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const n = t, o = c(() => n.alignment === "vertical");
    return (p, S) => (a(), m("div", {
      class: e(["flex gap-x-5 text-sm group", { "flex-col": o.value }])
    }, [
      l("div", {
        class: e(["flex gap-x-2 items-center shrink-0 text-oc-text-400", { "w-[80px]": t.variant === "small" && !o.value }])
      }, [
        u(i(t.label) + " ", 1),
        t.showCopyTooltip ? (a(), d(r(h), {
          key: 0,
          value: t.content
        }, {
          default: v(({ isShow: s }) => [
            f(r(y), {
              width: "14",
              height: "14",
              class: e(["cursor-pointer transition-all duration-500 group-hover:opacity-100", s ? "opacity-100" : "opacity-0"]),
              name: "copy"
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["value"])) : g("", !0)
      ], 2),
      l("div", {
        class: e({ "text-base font-medium": o.value })
      }, [
        x(p.$slots, "content", {}, () => [
          l("span", null, i(t.content), 1)
        ])
      ], 2)
    ], 2));
  }
};
export {
  z as D
};
