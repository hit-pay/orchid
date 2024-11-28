import { ref as a, onMounted as m, watch as y, openBlock as i, createElementBlock as v, createElementVNode as d, renderSlot as c, createBlock as b, Teleport as k, normalizeClass as O, normalizeStyle as S } from "vue";
import { createPopper as B } from "@popperjs/core";
const g = { class: "flex w-[inherit]" }, x = {
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
  setup(l, { expose: u }) {
    const s = a(), o = a(), t = a(), e = l, n = () => ({
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
      var r;
      return p && ((r = o.value) == null ? void 0 : r.contains(p));
    };
    return m(() => {
      t.value = B(s.value, o.value, n()), setTimeout(() => t.value.update(), 50);
    }), y(
      () => [e.popperOptions, e.placement, e.distance, e.skidding],
      () => {
        t.value.setOptions(n()), t.value.update();
      },
      { deep: !0 }
    ), u({
      popperInstance: t,
      checkElementIsInsidePopper: f
    }), (p, r) => (i(), v("div", g, [
      d("div", {
        ref_key: "reference",
        ref: s,
        class: "w-[inherit] flex"
      }, [
        c(p.$slots, "default")
      ], 512),
      (i(), b(k, {
        to: "body",
        disabled: !l.isAttachToBody
      }, [
        d("div", {
          ref_key: "popper",
          ref: o,
          class: O([l.popperClass, "z-[1005]"]),
          style: S(l.popperStyle)
        }, [
          c(p.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
};
export {
  x as P
};
