import { computed as g, openBlock as n, createElementBlock as m, normalizeClass as i, createElementVNode as a, createVNode as f, unref as l, createBlock as s, createCommentVNode as d, toDisplayString as r, renderSlot as x } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as u } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as y } from "./OcButton-Cnqik19l-BEVE67cg.js";
const z = { class: "relative" }, U = {
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
    return (o, c) => (n(), m("div", {
      class: i(["flex flex-col items-center", t.value[e.size].box])
    }, [
      a("div", z, [
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
        !e.isUpgrade && !e.hideBadge ? (n(), s(l(u), {
          key: 0,
          name: "exclamation",
          width: t.value[e.size].badge.size,
          height: t.value[e.size].badge.size,
          class: i(["absolute", t.value[e.size].badge.class])
        }, null, 8, ["width", "height", "class"])) : d("", !0)
      ]),
      a("div", {
        class: i(["flex flex-col items-center", t.value[e.size].containerInfo])
      }, [
        a("span", {
          class: i([t.value[e.size].title, "font-medium"])
        }, r(e.title), 3),
        x(o.$slots, "description", {}, () => [
          a("span", {
            class: i([t.value[e.size].description, "text-oc-text-400 text-center"])
          }, r(e.description), 3)
        ])
      ], 2),
      e.isButton ? (n(), s(l(y), {
        key: 0,
        label: e.isUpgrade ? e.upgradeLabel : e.addButtonLabel,
        "left-icon": e.isUpgrade ? "" : e.addButtonIcon,
        onClick: c[0] || (c[0] = (b) => o.$emit("click:Button"))
      }, null, 8, ["label", "left-icon"])) : d("", !0)
    ], 2));
  }
};
export {
  U as _
};
