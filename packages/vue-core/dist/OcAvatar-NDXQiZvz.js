import { computed as s, openBlock as r, createElementBlock as i, normalizeClass as n, normalizeStyle as c, renderSlot as d, createTextVNode as u } from "vue";
const f = {
  __name: "OcAvatar",
  props: {
    size: {
      type: Number,
      validator: (e) => [64, 48, 40, 32, 24].includes(e),
      default: 32
    },
    type: {
      type: String,
      default: "default",
      validator: (e) => ["business", "default", "image"].includes(e)
    }
  },
  setup(e) {
    const a = s(() => ({
      business: "bg-oc-accent-1 text-oc-text-100",
      default: "bg-oc-gray-800 text-oc-text-100",
      image: "text-oc-text-500",
      icon: "border-oc-gray-100"
    })), l = s(() => ({
      64: "text-[30px]",
      48: "text-xl",
      40: "text-lg",
      32: "text-base",
      24: "text-xs"
    }));
    return (o, t) => (r(), i("div", {
      class: n(["rounded-full border border-oc-gray-300 flex items-center font-bold justify-center", [a.value[e.type], l.value[e.size]]]),
      style: c({ width: `${e.size}px`, height: `${e.size}px` })
    }, [
      d(o.$slots, "default", {}, () => [
        t[0] || (t[0] = u("H"))
      ])
    ], 6));
  }
};
export {
  f as _
};
