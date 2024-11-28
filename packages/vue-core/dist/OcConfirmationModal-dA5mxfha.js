import { openBlock as s, createElementBlock as r, normalizeClass as d, createVNode as g, unref as v, createCommentVNode as y, createElementVNode as m, renderSlot as b, computed as u, createBlock as S, withCtx as f, createSlots as B } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
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
import { _ as L } from "./OcModal-BKjHuV_w.js";
import { _ as $ } from "./OcIcon-CJgBICxh.js";
import "@popperjs/core";
const h = { class: "text-center" }, w = ["innerHTML"], x = {
  __name: "OcConfirmation",
  props: {
    description: String,
    iconClass: String,
    variant: {
      type: String,
      default: "delete"
    },
    hideIcon: {
      type: Boolean,
      default: !1
    },
    icon: String,
    contentClass: String
  },
  setup(e) {
    const o = {
      delete: "bin",
      warning: "alert",
      success: "check-2",
      question: "question-mark"
    }, t = {
      delete: "text-oc-error bg-oc-error-50-tr",
      warning: "text-oc-warning-600 bg-oc-warning-50-tr",
      success: "text-oc-success bg-oc-success-50-tr",
      question: "text-oc-accent-1 bg-oc-accent-1-50-tr"
    };
    return (i, l) => (s(), r("div", {
      class: d(["flex flex-col gap-y-4 items-center", e.contentClass])
    }, [
      e.hideIcon ? y("", !0) : (s(), r("div", {
        key: 0,
        class: d(["w-[48px] aspect-square rounded-full flex items-center justify-center", [t[e.variant], e.iconClass]])
      }, [
        g(v($), {
          name: e.icon ?? o[e.variant]
        }, null, 8, ["name"])
      ], 2)),
      m("div", h, [
        b(i.$slots, "description", {}, () => [
          m("span", { innerHTML: e.description }, null, 8, w)
        ])
      ])
    ], 2));
  }
}, F = {
  __name: "OcConfirmationModal",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "Are you sure?"
    },
    iconClass: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "delete"
    },
    icon: String,
    labelConfirm: String,
    labelCancel: String,
    isLoading: {
      type: Boolean,
      default: !1
    },
    hideIcon: {
      type: Boolean,
      default: !1
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    contentClass: String,
    confirmButtonProps: Object
  },
  emits: ["confirm", "cancel", "update:model-value"],
  setup(e, { emit: o }) {
    const t = e, i = o, l = u(() => ({
      delete: {},
      warning: {},
      success: {
        class: "hidden"
      },
      question: {
        label: "No"
      }
    })), c = u(() => ({
      delete: {
        label: "Delete",
        variant: "destructive",
        isLoading: t.isLoading ?? !1
      },
      warning: {
        label: "Delete",
        variant: "destructive",
        isLoading: t.isLoading ?? !1
      },
      success: {
        isLoading: t.isLoading ?? !1
      },
      question: {
        label: "Yes",
        isLoading: t.isLoading ?? !1
      }
    })), p = (n) => {
      i("update:model-value", n), i("cancel");
    };
    return (n, a) => (s(), S(v(L), {
      size: "small",
      "model-value": e.modelValue,
      title: e.title,
      "is-borderless": "",
      persistent: e.persistent,
      "cancel-button-props": e.labelCancel ? {
        ...l.value[e.variant],
        label: e.labelCancel
      } : l.value[e.variant],
      "confirm-button-props": {
        ...e.labelConfirm ? {
          ...c.value[e.variant],
          label: e.labelConfirm
        } : c.value[e.variant],
        ...e.confirmButtonProps
      },
      "footer-class": "justify-center",
      "onUpdate:modelValue": p,
      onConfirm: a[0] || (a[0] = (C) => n.$emit("confirm")),
      onCancel: a[1] || (a[1] = (C) => n.$emit("cancel"))
    }, {
      default: f(() => [
        g(x, {
          "icon-class": e.iconClass,
          variant: e.variant,
          description: e.description,
          "content-class": e.contentClass,
          icon: e.icon,
          "hide-icon": e.hideIcon
        }, B({ _: 2 }, [
          n.$slots.description ? {
            name: "description",
            fn: f(() => [
              b(n.$slots, "description")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["icon-class", "variant", "description", "content-class", "icon", "hide-icon"])
      ]),
      _: 3
    }, 8, ["model-value", "title", "persistent", "cancel-button-props", "confirm-button-props"]));
  }
};
export {
  F as _
};
