import { ref as s, onMounted as w, watch as a, openBlock as g, createElementBlock as u } from "vue";
const d = ["width", "height", "viewBox"], m = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(c) {
    const t = c, i = s(null), o = (n) => {
      const e = document.createElement("div");
      e.innerHTML = n, e.querySelector("svg") && (e.querySelector("svg").removeAttribute("width"), e.querySelector("svg").removeAttribute("height"), i.value.innerHTML = e.innerHTML), e.remove();
    }, r = () => {
      let n = "";
      window.oc_icons && (n = JSON.parse(window.oc_icons).find((e) => e.name === t.name)), n ? i.value && o(n.svg) : fetch(`${t.path}/${t.name}.svg`).then((e) => e.status === 200 ? e.text() : "").then((e) => {
        if (e && i.value) {
          if (window.oc_icons) {
            let h = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...h,
              {
                name: t.name,
                svg: e
              }
            ]);
          }
          o(e);
        }
      });
    };
    return w(() => {
      r();
    }), a(
      () => t.name,
      () => {
        r();
      }
    ), (n, e) => (g(), u("svg", {
      ref_key: "iconRef",
      ref: i,
      width: `${t.width}px`,
      height: `${t.height}px`,
      viewBox: `0 0 ${t.width} ${t.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, d));
  }
};
export {
  m as g
};
