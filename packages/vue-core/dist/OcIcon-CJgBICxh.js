import { ref as w, onMounted as h, watch as a, openBlock as d, createElementBlock as l } from "vue";
const u = ["width", "height", "viewBox"], g = {
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
  setup(s) {
    const t = s, o = w(null), c = (n) => {
      const e = document.createElement("div");
      e.innerHTML = n, e.querySelector("svg") && (e.querySelector("svg").removeAttribute("width"), e.querySelector("svg").removeAttribute("height"), o.value.innerHTML = e.innerHTML), e.remove();
    }, r = () => {
      let n = "";
      window.oc_icons && (n = JSON.parse(window.oc_icons).find((i) => i.name === t.name)), n ? o.value && c(n.svg) : fetch(`${t.path}/${t.name}.svg`).then((e) => e.status === 200 ? e.text() : "").then((e) => {
        if (e && o.value) {
          if (window.oc_icons) {
            let i = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...i,
              {
                name: t.name,
                svg: e
              }
            ]);
          }
          c(e);
        }
      });
    };
    return h(() => {
      r();
    }), a(
      () => t.name,
      () => {
        r();
      }
    ), (n, e) => (d(), l("svg", {
      ref_key: "iconRef",
      ref: o,
      width: `${t.width}px`,
      height: `${t.height}px`,
      viewBox: `0 0 ${t.width} ${t.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, u));
  }
};
export {
  g as _
};
