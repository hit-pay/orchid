import { ref as n, onMounted as m, watch as y, openBlock as i, createElementBlock as b, createElementVNode as c, renderSlot as d, createBlock as v, Teleport as k, normalizeClass as O, normalizeStyle as h } from "vue";
import { createPopper as B } from "@popperjs/core";
const S = { class: "flex w-[inherit]" }, P = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(o, { expose: u }) {
    const a = n(), r = n(), t = n(), e = o, l = () => ({
      placement: e.placement,
      modifiers: [
        {
          name: "flip",
          enabled: e.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [e.skidding, e.distance]
          }
        }
      ],
      ...e.popperOptions || []
    }), f = (p) => {
      var s;
      return p && ((s = r.value) == null ? void 0 : s.contains(p));
    };
    return m(() => {
      t.value = B(a.value, r.value, l()), setTimeout(() => t.value.update(), 50);
    }), y(
      () => [e.popperOptions, e.placement, e.distance, e.skidding],
      () => {
        t.value.setOptions(l()), t.value.update();
      },
      { deep: !0 }
    ), u({
      popperInstance: t,
      checkElementIsInsidePopper: f
    }), (p, s) => (i(), b("div", S, [
      c("div", {
        ref_key: "reference",
        ref: a,
        class: "w-[inherit] flex"
      }, [
        d(p.$slots, "default")
      ], 512),
      (i(), v(k, {
        to: "body",
        disabled: !o.isAttachToBody
      }, [
        c("div", {
          ref_key: "popper",
          ref: r,
          class: O([o.popperClass, "z-[1005]"]),
          style: h(o.popperStyle)
        }, [
          d(p.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
};
export {
  P as _
};
