import { ref as s, onMounted as m, watch as v, openBlock as c, createElementBlock as y, createElementVNode as d, renderSlot as u, createBlock as k, Teleport as b, normalizeClass as O, normalizeStyle as g } from "vue";
import { createPopper as E } from "@popperjs/core";
const B = { class: "flex w-[inherit]" }, x = {
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
  setup(e, { expose: r }) {
    const n = s(), a = s(), o = s(), t = e, l = () => ({
      placement: t.placement,
      modifiers: [
        {
          name: "flip",
          enabled: t.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [t.skidding, t.distance]
          }
        }
      ],
      ...t.popperOptions || []
    }), f = (p) => {
      var i;
      return p && ((i = a.value) == null ? void 0 : i.contains(p));
    };
    return m(() => {
      o.value = E(n.value, a.value, l()), setTimeout(() => o.value.update(), 50);
    }), v(
      () => [t.popperOptions, t.placement, t.distance, t.skidding],
      () => {
        o.value.setOptions(l()), o.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: o,
      checkElementIsInsidePopper: f
    }), (p, i) => (c(), y("div", B, [
      d("div", {
        ref_key: "reference",
        ref: n,
        class: "w-[inherit] flex"
      }, [
        u(p.$slots, "default")
      ], 512),
      (c(), k(b, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        d("div", {
          ref_key: "popper",
          ref: a,
          class: O([e.popperClass, "z-[1005]"]),
          style: g(e.popperStyle)
        }, [
          u(p.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, T = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(n) {
      document.contains(n.target) && !(e === n.target || e.contains(n.target)) && r.value(n);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
};
export {
  T as i,
  x
};
