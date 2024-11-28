import { computed as g, openBlock as n, createElementBlock as m, normalizeClass as i, createElementVNode as a, createVNode as f, unref as l, createBlock as c, createCommentVNode as s, toDisplayString as d, renderSlot as x } from "vue";
import "dayjs";
import { B as p } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as u } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const y = { class: "relative" }, A = {
  __name: "OcEmptyPage",
  props: {
    isButton: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    isUpgrade: {
      type: Boolean,
      default: !1
    },
    containerClass: {
      type: [Array, String],
      required: !1
    },
    upgradeLabel: {
      type: String,
      default: "Upgrade now"
    },
    addButtonLabel: {
      type: String,
      default: "Add new"
    },
    addButtonIcon: {
      type: String,
      default: "plus"
    },
    icon: {
      type: String,
      default: "document"
    },
    size: {
      type: String,
      validator: (e) => ["large", "default", "small"].includes(e),
      default: "default"
    },
    hideBadge: {
      type: Boolean,
      default: !1
    }
  },
  emits: "click:Button",
  setup(e) {
    const t = g(() => ({
      default: {
        icon: {
          container: "w-[64px]",
          size: "32"
        },
        badge: {
          class: "right-0 top-[2px]",
          size: "20"
        },
        containerInfo: "gap-y-3",
        box: "gap-y-7",
        title: "text-lg",
        description: ""
      },
      large: {
        icon: {
          container: "w-[128px]",
          size: "64"
        },
        badge: {
          class: "right-0 top-[2px]",
          size: "32"
        },
        containerInfo: "gap-y-3",
        box: "gap-y-7",
        title: "text-lg",
        description: ""
      },
      small: {
        icon: {
          container: "w-[48px]",
          size: "24"
        },
        badge: {
          class: "right-[-2px] top-[-2px]",
          size: "20"
        },
        containerInfo: "gap-y-1",
        box: "gap-y-5",
        title: "text-[14px] font-medium",
        description: "text-[12px]"
      }
    }));
    return (o, r) => (n(), m("div", {
      class: i(["flex flex-col items-center", t.value[e.size].box])
    }, [
      a("div", y, [
        a("div", {
          class: i(["flex justify-center border rounded-full items-center aspect-square", [
            e.containerClass ? e.containerClass : e.isUpgrade ? "text-oc-warning-600 border-oc-warning-300 bg-oc-warning-50" : "text-oc-text-400 border-oc-gray-200 bg-oc-gray-50",
            t.value[e.size].icon.container
          ]])
        }, [
          f(l(u), {
            name: e.icon,
            width: t.value[e.size].icon.size,
            height: t.value[e.size].icon.size
          }, null, 8, ["name", "width", "height"])
        ], 2),
        !e.isUpgrade && !e.hideBadge ? (n(), c(l(u), {
          key: 0,
          name: "exclamation",
          width: t.value[e.size].badge.size,
          height: t.value[e.size].badge.size,
          class: i(["absolute", t.value[e.size].badge.class])
        }, null, 8, ["width", "height", "class"])) : s("", !0)
      ]),
      a("div", {
        class: i(["flex flex-col items-center", t.value[e.size].containerInfo])
      }, [
        a("span", {
          class: i([t.value[e.size].title, "font-medium"])
        }, d(e.title), 3),
        x(o.$slots, "description", {}, () => [
          a("span", {
            class: i([t.value[e.size].description, "text-oc-text-400 text-center"])
          }, d(e.description), 3)
        ])
      ], 2),
      e.isButton ? (n(), c(l(p), {
        key: 0,
        label: e.isUpgrade ? e.upgradeLabel : e.addButtonLabel,
        "left-icon": e.isUpgrade ? "" : e.addButtonIcon,
        onClick: r[0] || (r[0] = (z) => o.$emit("click:Button"))
      }, null, 8, ["label", "left-icon"])) : s("", !0)
    ], 2));
  }
};
export {
  A as _
};
