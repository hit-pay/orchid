import { ref as k, watch as _, openBlock as $, createBlock as F, unref as U, withKeys as Ue, createElementBlock as C, createVNode as D, withCtx as K, createTextVNode as Z, inject as se, createElementVNode as w, normalizeClass as J, normalizeStyle as W, onMounted as Ne, createCommentVNode as H, computed as lt, reactive as Le, provide as oe, nextTick as at, Fragment as Re, renderList as Be, withDirectives as nt, vShow as rt } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { d as ie } from "./OcInputOption-D9DTYAD7-BrCoHHb9.js";
import { F as ot } from "./OcGroupOptions-C_AhqALp-CahgBN6V.js";
import { g as st } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { K as fe } from "./OcSlider-DSFHUyqz-Dm0eXdQ5.js";
import { hslToRgb as He, hsl2Hex as De, rgb2Hex as Ee, rgbaToHex8 as it, hexToRgb as be, rgbToHue as ce, rgbToHsl as Xe, hex8ToRgba as ut, parseRgba as dt, parseRgb as ct } from "./Form/ColorPicker/components/converters.js";
const pt = {
  __name: "InputHex",
  props: {
    modelValue: {
      type: String
    }
  },
  emits: {
    "update:modelValue": []
  },
  setup(i, { emit: V }) {
    const c = i, f = V, s = k(""), I = (u) => {
      s.value = u, s.value = `#${u.replace(/#/g, "")}`;
    }, b = () => {
      let u = s.value;
      if (u === c.modelValue) return;
      if (!/^#[0-9a-fA-F]+$/.test(u)) {
        s.value = c.modelValue;
        return;
      }
      let a = u.replace(/#/g, "");
      switch (a.length) {
        case 0:
          a = c.modelValue.replace("#", "");
          break;
        case 1:
        case 2:
          a = a.repeat(3);
          break;
        case 4:
        case 5:
          a = a.slice(0, 3);
          break;
        case 3:
        case 6:
          break;
        default:
          a = a.slice(0, 6);
      }
      s.value = `#${a.toUpperCase()}`, f("update:modelValue", s.value);
    };
    return _(
      () => c.modelValue,
      (u, a) => {
        u !== a && (s.value = u);
      },
      { immediate: !0 }
    ), (u, a) => ($(), F(U(ie), {
      class: "w-[158px]",
      placeholder: "#FFFFFF",
      "model-value": s.value,
      "onUpdate:modelValue": I,
      onBlur: b,
      onKeyup: Ue(b, ["enter"])
    }, null, 8, ["model-value"]));
  }
}, gt = { class: "grid grid-cols-3 gap-3" }, Me = {
  __name: "InputRgbHsl",
  props: {
    inputType: {
      default: "RGB",
      type: String
    },
    rgbValue: {
      type: Object
    },
    hslValue: {
      type: Object
    }
  },
  emits: {
    "update-rgb-value": [],
    "update-hsl-value": []
  },
  setup(i, { emit: V }) {
    const c = i, f = V, s = k({
      r: 0,
      g: 0,
      b: 0
    }), I = k(), b = k(), u = k(), a = (S, y) => {
      var N, B, Y;
      let x = 255;
      if (c.inputType == "HSL" && (x = 100, S == "r" && (x = 360)), !isNaN(parseInt(y))) {
        if (S == "r") {
          let E = parseInt(y);
          E <= x && (s.value.r = E, c.inputType == "RGB" ? M("r") : j()), (N = I.value) == null || N.focus();
        } else if (S == "g") {
          let E = parseInt(y);
          E <= x && (s.value.g = E, c.inputType == "RGB" ? M("g") : j()), (B = b.value) == null || B.focus();
        } else if (S == "b") {
          let E = parseInt(y);
          E <= x && (s.value.b = E, c.inputType == "RGB" ? M("b") : j()), (Y = u.value) == null || Y.focus();
        }
      }
    }, M = (S) => {
      f("update-rgb-value", {
        type: S,
        value: {
          r: parseInt(s.value.r),
          g: parseInt(s.value.g),
          b: parseInt(s.value.b)
        }
      });
    }, j = () => {
      f("update-hsl-value", {
        h: parseInt(s.value.r),
        s: parseInt(s.value.g),
        l: parseInt(s.value.b)
      });
    };
    return c.inputType === "RGB" ? _(
      () => c.rgbValue,
      (S, y) => {
        S !== y && (s.value = S);
      },
      { immediate: !0, deep: !0 }
    ) : _(
      () => c.hslValue,
      (S) => {
        s.value = {
          r: S.h,
          g: S.s,
          b: S.l
        };
      },
      { immediate: !0, deep: !0 }
    ), (S, y) => ($(), C("div", gt, [
      D(U(ie), {
        ref_key: "rInputEl",
        ref: I,
        "model-value": s.value.r,
        placeholder: "100",
        "onUpdate:modelValue": y[0] || (y[0] = (x) => a("r", x))
      }, null, 8, ["model-value"]),
      D(U(ie), {
        ref_key: "gInputEl",
        ref: b,
        "model-value": s.value.g,
        placeholder: "100",
        "onUpdate:modelValue": y[1] || (y[1] = (x) => a("g", x))
      }, null, 8, ["model-value"]),
      D(U(ie), {
        ref_key: "bInputEl",
        ref: u,
        "model-value": s.value.b,
        placeholder: "100",
        "onUpdate:modelValue": y[2] || (y[2] = (x) => a("b", x))
      }, null, 8, ["model-value"])
    ]));
  }
}, vt = {
  __name: "InputOpacity",
  props: {
    modelValue: {
      type: Number
    }
  },
  emits: {
    "update:modelValue": []
  },
  setup(i, { emit: V }) {
    const c = i, f = V, s = k(""), I = (u) => {
      s.value = u;
    }, b = () => {
      let u = parseInt(s.value);
      u && u <= 100 ? f("update:modelValue", u) : s.value = c.modelValue;
    };
    return _(
      () => c.modelValue,
      (u, a) => {
        u !== a && (s.value = u);
      },
      { immediate: !0 }
    ), (u, a) => ($(), F(U(ie), {
      class: "w-[75px]",
      placeholder: "100",
      "model-value": s.value,
      "onUpdate:modelValue": I,
      onBlur: b,
      onKeyup: Ue(b, ["enter"])
    }, {
      leading: K(() => a[0] || (a[0] = [
        Z("%")
      ])),
      _: 1
    }, 8, ["model-value"]));
  }
}, mt = {
  __name: "SelectColorFormat",
  props: {
    modelValue: { default: "RGB", type: String }
  },
  emits: ["update:model-value"],
  setup(i, { emit: V }) {
    const f = k(i.modelValue), s = V, I = (b) => {
      f.value = b, s("update:model-value", b);
    };
    return (b, u) => ($(), F(U(ot), {
      class: "!w-[80px]",
      "model-value": f.value,
      options: [
        {
          label: "HEX",
          value: "HEX"
        },
        {
          label: "RGB",
          value: "RGB"
        },
        {
          label: "HSL",
          value: "HSL"
        }
      ],
      "onUpdate:modelValue": I
    }, null, 8, ["model-value"]));
  }
}, ft = { class: "opacity-bar" }, bt = { class: "picker-opacity-slider opacity-bar-background" }, yt = ["value"], ht = {
  __name: "SliderOpacity",
  props: {
    modelValue: { default: 0, type: Number }
  },
  emits: ["update:modelValue", "onInput"],
  setup(i, { emit: V }) {
    const c = se("opacitySlider"), f = V, s = (I) => {
      f("update:modelValue", parseInt(I.target.value)), f("onInput", I);
    };
    return (I, b) => ($(), C("div", ft, [
      w("div", bt, [
        w("input", {
          ref_key: "opacitySlider",
          ref: c,
          value: i.modelValue,
          class: "opacity__slider",
          type: "range",
          min: "0",
          max: "100",
          onInput: s
        }, null, 40, yt)
      ])
    ]));
  }
}, $t = {
  __name: "SliderGradient",
  props: {
    gradientType: String
  },
  emits: ["onAddColor", "onMouseDown", "onDeleteColor"],
  setup(i, { emit: V }) {
    const c = se("gradientBar"), f = k(), s = V, I = (y) => {
      y.preventDefault();
    }, b = k("left:0"), u = k(!1), a = (y) => {
      s("onMouseDown", y);
    }, M = () => {
      let y = f.value.querySelector(".select");
      b.value = y == null ? void 0 : y.getAttribute("style");
    }, j = () => {
      var x;
      M(), (((x = f.value.querySelectorAll(".gradient-handle")) == null ? void 0 : x.length) ?? 2) > 2 ? u.value = !0 : u.value = !1;
    }, S = (y) => {
      u.value = !1, s("onAddColor", y);
    };
    return (y, x) => ($(), C("div", {
      ref_key: "gradientSlider",
      ref: f,
      class: "relative h-[40px]",
      onClick: j
    }, [
      w("button", {
        type: "button",
        class: J(["absolute top-[-18px] text-oc-accent-3 rounded-[4px] border-2 border-oc-gray-200 p-2 bg-oc-bg-light", u.value ? "" : "!hidden"]),
        style: W(b.value),
        onClick: x[0] || (x[0] = (N) => y.$emit("onDeleteColor"))
      }, [
        D(U(st), {
          name: "bin",
          width: "14",
          height: "14"
        })
      ], 6),
      w("div", {
        class: J(["gradient-bar", {
          "mt-[20px]": i.gradientType === "linear",
          "mt-[12px]": i.gradientType === "radial"
        }]),
        onMousedown: a,
        onDragstart: I
      }, [
        w("div", {
          ref_key: "gradientBar",
          ref: c,
          class: "gradient-container",
          onDblclick: S
        }, null, 544)
      ], 34)
    ], 512));
  }
}, xt = { class: "picker-hue" }, kt = ["value"], It = {
  __name: "SliderHue",
  props: {
    modelValue: { default: 0, type: Number }
  },
  emits: ["update:modelValue", "onInput", "onChange"],
  setup(i, { emit: V }) {
    const c = V, f = (s) => {
      c("update:modelValue", parseFloat(s.target.value)), c("onInput", s);
    };
    return (s, I) => ($(), C("div", xt, [
      w("input", {
        value: i.modelValue,
        class: "picker-hue-range-slider",
        type: "range",
        min: "0",
        max: "360",
        step: "0.1",
        onInput: f,
        onChange: I[0] || (I[0] = (b) => s.$emit("onChange", b))
      }, null, 40, kt)
    ]));
  }
}, wt = { class: "px-2 mt-2" }, Vt = {
  key: 1,
  class: "grid grid-cols-2 gap-4 px-1"
}, Ct = {
  __name: "GradientSettings",
  props: {
    mode: {
      default: "gradient",
      type: String
    },
    gradientType: { default: "linear", type: String },
    angle: { default: 90, type: Number },
    percentageX: { default: 50, type: Number },
    percentageY: { default: 50, type: Number }
  },
  emits: ["update:angle", "update:percentageX", "update:percentageY", "onInput"],
  setup(i, { emit: V }) {
    const c = k(!1), f = k(!1);
    Ne(() => {
      c.value = !0, f.value = !0;
    });
    const s = V, I = (b, u) => {
      let a = parseInt(b);
      switch (u) {
        case "angle":
          b > 360 ? a = 360 : b < 0 && (a = 0), s("update:angle", a), s("onInput");
          break;
        case "percentageX":
          b > 100 ? a = 100 : b < 0 && (a = 0), s("update:percentageX", a), s("onInput");
          break;
        case "percentageY":
          b > 100 ? a = 100 : b < 0 && (a = 0), s("update:percentageY", a), s("onInput");
          break;
      }
    };
    return (b, u) => ($(), C("div", wt, [
      i.gradientType == "linear" && c.value ? ($(), F(U(fe), {
        key: 0,
        label: "Angle",
        "model-value": i.angle,
        "min-limit": 0,
        "max-limit": 360,
        "onUpdate:modelValue": u[0] || (u[0] = (a) => I(a, "angle"))
      }, {
        "min-limit-label": K(() => u[3] || (u[3] = [
          Z("0 ")
        ])),
        "max-limit-label": K(() => u[4] || (u[4] = [
          Z("360"),
          w("span", null, "°", -1)
        ])),
        _: 1
      }, 8, ["model-value"])) : H("", !0),
      i.gradientType == "radial" && f.value ? ($(), C("div", Vt, [
        D(U(fe), {
          label: "Position X",
          "model-value": i.percentageX,
          "min-limit": 0,
          "max-limit": 100,
          "onUpdate:modelValue": u[1] || (u[1] = (a) => I(a, "percentageX"))
        }, {
          "min-limit-label": K(() => u[5] || (u[5] = [
            Z("0")
          ])),
          "max-limit-label": K(() => u[6] || (u[6] = [
            Z("100%")
          ])),
          _: 1
        }, 8, ["model-value"]),
        D(U(fe), {
          label: "Position Y",
          "model-value": i.percentageY,
          "min-limit": 0,
          "max-limit": 100,
          "onUpdate:modelValue": u[2] || (u[2] = (a) => I(a, "percentageY"))
        }, {
          "min-limit-label": K(() => u[7] || (u[7] = [
            Z("0")
          ])),
          "max-limit-label": K(() => u[8] || (u[8] = [
            Z("100%")
          ])),
          _: 1
        }, 8, ["model-value"])
      ])) : H("", !0)
    ]));
  }
}, St = {
  __name: "PickerWrap",
  emits: ["onMouseDown"],
  setup(i) {
    const V = se("canvas"), c = se("pickerWrap"), f = se("pickerPointer"), s = (I) => {
      I.preventDefault();
    };
    return (I, b) => ($(), C("div", {
      ref_key: "pickerWrap",
      ref: c,
      class: "cp-picker-wrap",
      onMousedown: b[0] || (b[0] = (u) => I.$emit("onMouseDown", u)),
      onDragstart: s
    }, [
      w("canvas", {
        ref_key: "canvas",
        ref: V,
        class: "colour-area"
      }, null, 512),
      b[1] || (b[1] = w("div", { class: "colour-area-mask" }, null, -1)),
      w("div", {
        ref_key: "pickerPointer",
        ref: f,
        class: "colour-area-point-circle"
      }, null, 512)
    ], 544));
  }
}, Tt = { class: "w-full flex justify-center" }, Lt = {
  key: 1,
  width: "28",
  height: "28",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Rt = {
  __name: "ColorType",
  props: {
    variant: String,
    mode: {
      default: "gradient",
      type: String
    },
    gradientType: { default: "linear", type: String },
    iconClasses: {
      default: () => ({
        linear: "",
        radial: ""
      }),
      type: Object
    },
    modelValue: String
  },
  emits: ["onChangeMode"],
  setup(i) {
    return (V, c) => ($(), C("div", Tt, [
      w("button", {
        type: "button",
        class: J(i.mode == "solid" ? "active" : ""),
        style: { padding: "7px" },
        onClick: c[0] || (c[0] = (f) => V.$emit("onChangeMode", "solid"))
      }, [
        i.modelValue && i.mode == "solid" ? ($(), C("div", {
          key: 0,
          class: "w-[28px] h-[28px] rounded-full border",
          style: W(`background:${i.modelValue}`)
        }, null, 4)) : ($(), C("svg", Lt, c[3] || (c[3] = [
          w("g", { opacity: "0.5" }, [
            w("path", {
              d: "M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z",
              fill: "#03102F"
            })
          ], -1)
        ])))
      ], 2),
      w("button", {
        type: "button",
        class: J(i.gradientType == "linear" && i.mode != "solid" ? "active" : ""),
        style: W(`${i.iconClasses.linear ? "" : "padding: 7px;"}`),
        onClick: c[1] || (c[1] = (f) => V.$emit("onChangeMode", "linear"))
      }, [
        w("div", {
          class: "w-[28px] h-[28px] rounded-full border",
          style: W(
            i.modelValue && i.gradientType == "linear" && i.mode != "solid" ? `background:${i.modelValue}` : `
          background: linear-gradient(
            180deg,
            #03102f 0%,
            rgba(3, 16, 47, 0) 100%
          );
        `
          )
        }, null, 4)
      ], 6),
      w("button", {
        type: "button",
        class: J(i.gradientType == "radial" && i.mode != "solid" ? "active" : ""),
        style: W(`${i.iconClasses.radial ? "" : "padding: 6px;"}`),
        onClick: c[2] || (c[2] = (f) => V.$emit("onChangeMode", "radial"))
      }, [
        w("div", {
          class: "w-[28px] h-[28px] rounded-full border",
          style: W(
            i.modelValue && i.gradientType == "radial" && i.mode != "solid" ? `background:${i.modelValue}` : "background: radial-gradient(circle at 50% 50%, rgb(255, 255, 255) 0%, rgb(3, 16, 47) 100%);"
          )
        }, null, 4)
      ], 6)
    ]));
  }
}, Bt = ["cp-theme"], Ht = {
  key: 0,
  class: "flex justify-end border-b h-[46px] relative mt-[-5px] mb-5"
}, Dt = {
  key: 1,
  class: "grid items-center mb-5"
}, Et = { key: 2 }, Xt = { key: 0 }, Mt = { class: "ck-cp-local-color-conatiner" }, Ut = ["onClick"], Nt = { class: "flex items-center gap-2" }, Ot = { id: "ck-cp-target-background" }, Gt = { class: "flex gap-3" }, Ft = {
  key: 0,
  class: "w-full flex gap-3"
}, Yt = {
  key: 4,
  class: "ck-cp-local-color-conatiner"
}, Pt = ["onClick"], ll = {
  __name: "VueColorPicker",
  props: {
    modelValue: {
      default: "",
      type: String
    },
    type: { default: "HEX8", type: String },
    inputType: { default: "HEX", type: String },
    theme: { default: "light", type: String },
    showColorList: { default: !0, type: Boolean },
    showEyeDrop: { default: !0, type: Boolean },
    showAlpha: { default: !0, type: Boolean },
    showInputMenu: { default: !0, type: Boolean },
    showInputSet: { default: !0, type: Boolean },
    disabled: { default: !1, type: Boolean },
    iconClasses: {
      default: () => ({
        linear: "",
        radial: "",
        ruler: "",
        eyeDroper: "",
        inputMenu: "",
        save: "",
        delete: ""
      }),
      type: Object
    },
    presetColors: Array,
    variant: {
      type: String,
      default: "solid"
    },
    lastUsedColors: Array
  },
  emits: ["update:modelValue", "last-used-pick"],
  setup(i, { emit: V }) {
    const c = i, f = k(c.variant == "gradient" ? "gradient" : "solid"), s = k(null), I = V, b = k(c.modelValue), u = (t) => {
      b.value = t, Y.value && I("update:modelValue", t);
    }, a = k([
      { id: 1, r: 68, g: 71, b: 119, a: 100, percent: 0, hue: 0, select: !0 },
      { id: 2, r: 0, g: 0, b: 255, a: 100, percent: 100, hue: 0, select: !1 }
    ]), M = k(c.lastUsedColors);
    _(
      () => c.lastUsedColors,
      () => {
        M.value = c.lastUsedColors;
      },
      {
        deep: !0
      }
    );
    const j = lt(() => c.variant !== "gradient" ? M.value.filter((t) => !t.includes("linear") && !t.includes("radial")) : M.value), S = k(!1), y = k("linear"), x = Le({
      angle: 90,
      percentageX: 50,
      percentageY: 50
    }), N = k(""), B = k(c.inputType), Y = k(!1), E = k(), ue = k(), z = k(), O = k(), h = k(), L = Le({
      h: 0,
      s: 0,
      l: 0
    });
    oe("gradientBar", ue), oe("canvas", z), oe("pickerWrap", O), oe("pickerPointer", h), oe("opacitySlider", E);
    let ee = 0, te = 0, ye = 0, he = 0, le = 0, ae = 0;
    const Oe = (t) => {
      !O.value || !h.value || (le = O.value.offsetHeight - h.value.offsetHeight, ae = O.value.offsetWidth - h.value.offsetWidth, ye = t.clientX - t.target.getBoundingClientRect().left, he = t.clientY - t.target.getBoundingClientRect().top, ee = ye - h.value.offsetWidth / 2, te = he - h.value.offsetHeight / 2, h.value.style.left = `${ee}px`, h.value.style.top = `${te}px`, pe(!1), Q(), window.addEventListener("mousemove", $e), window.addEventListener("mouseup", xe));
    }, $e = (t) => {
      t.preventDefault();
      const e = O.value.getBoundingClientRect(), l = t.clientX - e.left - h.value.offsetWidth / 2, n = t.clientY - e.top - h.value.offsetHeight / 2;
      l >= 0 && l <= ae ? (ee = l, h.value.style.left = `${l}px`) : 0 > l ? (ee = 0, h.value.style.left = "0px") : l > ae && (ee = ae, h.value.style.left = `${ae}px`), n >= 0 && n <= le ? (te = n, h.value.style.top = `${n}px`) : 0 > n ? (te = 0, h.value.style.top = "0px") : n > le && (te = le, h.value.style.top = `${le}px`), pe(!1), Q();
    }, xe = () => {
      window.removeEventListener("mousemove", $e), window.removeEventListener("mouseup", xe);
    }, pe = (t) => {
      if (!t) {
        let e = Ge();
        const l = He(P.value, e.s, e.l);
        if (l) {
          if (Y.value) {
            let n = a.value.find((r) => r.select == !0);
            n && (n.r = l.r, n.g = l.g, n.b = l.b);
          }
          q(), R();
        }
      }
    }, P = k(0), ge = async (t) => {
      const { rgb: e } = De(P.value, 100, 50);
      Se(e), setTimeout(() => {
        pe(t), Q();
      }, 0);
    }, Ge = () => {
      let t = { s: 0, l: 0 }, e = O.value.offsetWidth - h.value.offsetWidth, l = O.value.offsetHeight - h.value.offsetHeight, n = parseInt(h.value.style.left), o = 1 - parseInt(h.value.style.top) / l, p = n / e;
      return t.l = o / 2 * (2 - p), t.s = o * p / (1 - Math.abs(2 * t.l - 1)), Number.isNaN(t.s) && (t.s = t.l), t.l = t.l > 1 ? 1 : t.l, t.s = t.s > 1 ? 1 : t.s, t;
    }, ne = () => {
      const t = a.value.find((e) => e.select == !0);
      if (t) {
        const { l: e, s: l } = Xe(t.r, t.g, t.b);
        let n = e, r = l;
        Number.isNaN(r) && (r = n);
        let o = { x: 0, y: 0 }, p = O.value.offsetWidth - h.value.offsetWidth, m = O.value.offsetHeight - h.value.offsetHeight;
        const [g, d] = 2 * n - 1 < 0 ? [
          p * 2 * r / (1 + r),
          m * (1 - n * (1 + r))
        ] : [
          -p * 2 * (n - 1) * r / (n + r - n * r),
          m * (n - 1) * (r - 1)
        ];
        return o.x = g, o.y = d, o;
      } else
        return null;
    }, Fe = () => {
      const t = a.value.find((e) => e.select == !0);
      t && (t.hue = P.value);
    }, A = k(100), ke = (t) => {
      if (c.showAlpha) {
        const e = a.value.find((l) => l.select == !0);
        e && (e.a = parseInt(t), R());
      }
    }, Ye = (t) => {
      var l, n, r, o;
      const e = (n = (l = s.value) == null ? void 0 : l.querySelector(".gradient-handle-content")) == null ? void 0 : n.getBoundingClientRect();
      return t === 0 ? "0px" : t === 100 && e ? `${(((r = ue.value) == null ? void 0 : r.offsetWidth) || 0) - (e.width || 0)}px` : `${(((o = ue.value) == null ? void 0 : o.offsetWidth) || 0) * (t / 100) - ((e == null ? void 0 : e.width) || 0) / 2}px`;
    };
    let T = null, X = null;
    const Ie = (t) => {
      var n, r;
      const l = t.target.offsetParent;
      if ((n = l == null ? void 0 : l.id) != null && n.includes("clr-gb-")) {
        const o = l.id.replace("clr-gb-", "");
        X = l;
        const p = a.value.find((m) => m.select == !0);
        if (p && p.id != o) {
          const m = (r = s.value) == null ? void 0 : r.querySelector(".gradient-handle.select");
          m == null || m.classList.remove("select"), l.classList.add("select");
          const g = a.value.findIndex((d) => d.select == !0);
          for (let d = 0; d < a.value.length; d++) {
            const v = a.value[d];
            if (v.id == o) {
              g != -1 && (a.value[g].select = !1), a.value[d].select = !0, A.value = v.a, re(v.r, v.g, v.b, v.hue, !0), q(), Q();
              break;
            }
          }
        }
        window.addEventListener("mousemove", we), window.addEventListener("mouseup", Pe);
      }
    }, Pe = () => {
      window.removeEventListener("mousemove", we), window.removeEventListener("mouseup", Ie);
    }, we = (t) => {
      var o, p;
      t.preventDefault();
      const e = (p = (o = s.value) == null ? void 0 : o.querySelector(".gradient-handle-content")) == null ? void 0 : p.getBoundingClientRect(), l = T == null ? void 0 : T.getBoundingClientRect(), n = l.width - (e == null ? void 0 : e.width);
      let r = t.clientX - (l.left || 0) - ((e == null ? void 0 : e.width) || 0) / 2;
      if (r < 0 ? r = 0 : r > n && (r = n), X) {
        X.style.left = `${r}px`;
        const m = parseFloat((r / ((l == null ? void 0 : l.width) - (e == null ? void 0 : e.width)) * 100).toFixed(0)), g = a.value.find(
          (d) => d.id == (X == null ? void 0 : X.id.replace("clr-gb-", ""))
        );
        g && (g.percent = m), R();
      }
    }, Ae = (t) => {
      var m, g;
      const e = T == null ? void 0 : T.getBoundingClientRect(), l = Math.round((t.clientX - ((e == null ? void 0 : e.left) || 0)) / ((e == null ? void 0 : e.width) || 1) * 100), n = a.value.findIndex((d) => d.select == !0), r = a.value[n], o = {
        id: Date.now(),
        r: r.r,
        g: r.g,
        b: r.b,
        a: r.a,
        percent: l,
        hue: r.hue,
        select: !0
      };
      a.value[n].select = !1;
      const p = (m = s.value) == null ? void 0 : m.querySelector(".gradient-handle.select");
      p == null || p.classList.remove("select"), a.value = [...a.value, o], Ce(o), X = (g = s.value) == null ? void 0 : g.querySelector(`#clr-gb-${o.id}`), R();
    }, Ve = (t) => {
      if (t.r == 0 && t.g == 0 && t.b == 0)
        return !0;
      if (t.r == 255 && t.g == 255 && t.b == 255)
        return !0;
      {
        const e = z.value.getContext("2d", { willReadFrequently: !0 }), l = z.value.width, n = z.value.height, r = e.getImageData(0, 0, l, n).data, o = t.r, p = t.g, m = t.b;
        for (let g = 0; g < n; g++)
          for (let d = 0; d < l; d++) {
            const v = (g * l + d) * 4, G = r[v], et = r[v + 1], tt = r[v + 2];
            if (G === o && et === p && tt === m)
              return !0;
          }
        return !1;
      }
    }, re = (t, e, l, n, r) => {
      setTimeout(() => {
        if (Ve({ r: t, g: e, b: l })) {
          let o = ne();
          o && (h.value.style.left = `${o.x}px`, h.value.style.top = `${o.y}px`);
        } else {
          let o = ne();
          o && (h.value.style.left = `${o.x}px`, h.value.style.top = `${o.y}px`), P.value = n, ge(r);
        }
      }, 0);
    }, ve = () => {
      a.value.forEach((l) => Ce(l)), qe();
      const t = a.value[0];
      P.value = t.hue, ge(!0);
      let e = ne();
      e && (h.value.style.left = `${e.x}px`, h.value.style.top = `${e.y}px`), q(), R();
    }, Ce = (t) => {
      if (f.value == "gradient") {
        let e = document.createElement("div");
        e.id = `clr-gb-${t.id}`, e.classList.add("gradient-handle"), e.style.left = Ye(t.percent);
        let l = document.createElement("div");
        l.classList.add("gradient-handle-content"), t.select == !0 && e.classList.add("select"), e.appendChild(l), T && T.appendChild(e);
      }
    }, Se = (t) => {
      const e = z.value.getContext("2d", { willReadFrequently: !0 }), l = z.value.width, n = z.value.height;
      e.fillStyle = `rgb(${t[0]},${t[1]},${t[2]})`, e.fillRect(0, 0, l, n);
      let r = e.createLinearGradient(0, 0, l - 12, 0);
      r.addColorStop(0, "rgb(255,255,255)"), r.addColorStop(1, "rgba(255,255,255,0)"), e.fillStyle = r, e.fillRect(0, 0, l, n);
      let o = e.createLinearGradient(0, 0, 0, n);
      o.addColorStop(0, "rgba(0,0,0,0)"), o.addColorStop(1, "rgb(0,0,0)"), e.fillStyle = o, e.fillRect(0, 0, l, n);
    }, q = () => {
      if (c.showAlpha) {
        let t = a.value.find((e) => e.select == !0);
        t && (E.value.style.background = ` linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(${t.r}, ${t.g}, ${t.b}, 100) 97%)`);
      }
    }, R = () => {
      var t;
      if (f.value == "gradient") {
        a.value.sort((r, o) => r.percent - o.percent);
        let e = "linear-gradient(90deg, ", l;
        if (y.value == "linear") {
          l = `linear-gradient(${x.angle}deg, `;
          for (let r = 0; r < a.value.length; r++) {
            const { r: o, g: p, b: m, a: g, percent: d } = a.value[r];
            a.value.length - 1 == r ? (e = e + `rgba(${o},${p},${m},${g / 100}) ${d}%)`, l = l + `rgba(${o},${p},${m},${g / 100}) ${d}%)`) : (e = e + `rgba(${o},${p},${m},${g / 100}) ${d}%, `, l = l + `rgba(${o},${p},${m},${g / 100}) ${d}%, `);
          }
        } else {
          l = `radial-gradient(circle at ${x.percentageX}% ${x.percentageY}%, `;
          for (let r = 0; r < a.value.length; r++) {
            const { r: o, g: p, b: m, a: g, percent: d } = a.value[r];
            a.value.length - 1 == r ? (e = e + `rgba(${o},${p},${m},${g / 100}) ${d}%)`, l = l + `rgba(${o},${p},${m},${g / 100}) ${d}%)`) : (e = e + `rgba(${o},${p},${m},${g / 100}) ${d}%, `, l = l + `rgba(${o},${p},${m},${g / 100}) ${d}%, `);
          }
        }
        ue.value.style.backgroundImage = e;
        let n = (t = s.value) == null ? void 0 : t.querySelector("#ck-cp-target-background");
        n && (n.style.backgroundImage = l, Y.value && u(n.style.backgroundImage));
      } else {
        const { r: e, g: l, b: n, a: r } = a.value[0];
        let o = "";
        switch (c.type) {
          case "HEX8":
            o = it(e, l, n, r / 100);
            break;
          case "RGBA":
            o = `rgba(${e},${l},${n},${r / 100})`;
            break;
          case "RGB":
            o = `rgb(${e},${l},${n})`;
            break;
          case "HEX":
            o = Ee(e, l, n);
            break;
        }
        u(o);
      }
    }, qe = () => {
      a.value.forEach((t) => {
        t.hue = ce(t.r, t.g, t.b);
      });
    }, We = (t) => {
      y.value = t, R();
    }, je = () => {
      var t, e;
      if (a.value.length > 2) {
        const l = a.value.findIndex((n) => n.select == !0);
        if (l !== -1) {
          const n = a.value[l].id;
          a.value.splice(l, 1);
          const r = (t = s.value) == null ? void 0 : t.querySelector(`#clr-gb-${n}`);
          r == null || r.remove();
          const o = a.value[0];
          o && (o.select = !0, X = (e = s.value) == null ? void 0 : e.querySelector(`#clr-gb-${o.id}`), X == null || X.classList.add("select"), re(o.r, o.g, o.b, o.hue, !1), Q(), R());
        }
      }
    }, ze = () => {
      var l;
      const t = (l = s.value) == null ? void 0 : l.querySelector("#cp-btn-eyedropper");
      t == null || t.classList.add("active"), new EyeDropper().open().then((n) => {
        const { sRGBHex: r } = n, o = a.value.find((m) => m.select == !0), p = be(r);
        if (p) {
          const m = ce(p.r, p.g, p.b);
          if (o && (o.hue = m, o.r = p.r, o.g = p.g, o.b = p.b), Ve(p)) {
            const g = ne();
            g && (h.value.style.left = `${g.x}px`, h.value.style.top = `${g.y}px`);
          } else {
            P.value = m;
            const { rgb: g } = De(m, 100, 50);
            Se(g);
            const d = ne();
            d && (h.value.style.left = `${d.x}px`, h.value.style.top = `${d.y}px`);
          }
          Q(), q(), R(), t == null || t.classList.remove("active");
        }
      }).catch(() => {
        t == null || t.classList.remove("active");
      });
    }, Ke = (t) => {
      const { value: e, type: l } = t;
      if (l != "a") {
        const n = a.value.find((r) => r.select == !0);
        if (n) {
          n.r = parseInt(e.r), n.g = parseInt(e.g), n.b = parseInt(e.b);
          const r = ce(n.r, n.g, n.b);
          n.hue = r, re(n.r, n.g, n.b, n.hue, !0), R(), q();
        }
      } else
        A.value = e, R(), q();
    }, Ze = (t) => {
      L.h = t.h, L.s = t.s, L.l = t.l;
      const e = a.value.find((l) => l.select == !0);
      if (e && !Number.isNaN(L.h) && !Number.isNaN(L.s) && !Number.isNaN(L.l)) {
        const { r: l, g: n, b: r } = He(L.h, L.s / 100, L.l / 100);
        e.hue = L.h, e.r = l, e.g = n, e.b = r, re(e.r, e.g, e.b, e.hue, !0), R(), q();
      }
    }, Je = () => {
      if (N.value) {
        const t = be(N.value);
        if (t) {
          const e = ce(t.r, t.g, t.b), l = a.value.find((n) => n.select == !0);
          l && (l.r = t.r, l.g = t.g, l.b = t.b, l.hue = e, re(t.r, t.g, t.b, l.hue, !0), R(), q(), de(B.value));
        }
      }
    }, Q = () => {
      const t = a.value.find((e) => e.select == !0);
      t && (N.value = Ee(t.r, t.g, t.b).toUpperCase()), de(B.value);
    }, Te = (t) => {
      I("last-used-pick", t);
    };
    window.EyeDropper && (S.value = !0);
    const Qe = (t = "") => {
      if (f.value == "gradient") {
        let e = t.includes("linear") ? "linear" : "radial", l = [];
        if (y.value = e, e == "linear") {
          let n = /^linear-gradient\((.*)\)$/, r = t.replace(";", "").trim().match(n), o = /,\s*(?![^()]*\))/;
          if (r) {
            let p = r[1].split(o);
            for (let m = 0; m < p.length; m++) {
              const g = p[m];
              let d = {
                id: m,
                r: 0,
                g: 0,
                b: 0,
                a: 100,
                percent: 100,
                hue: 0,
                select: !1
              };
              if (g.includes("deg"))
                x.angle = parseInt(g.replace("deg", ""));
              else if (g.includes("rgba")) {
                let v = g.trim().replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                v = v.filter((G) => G.trim() !== ""), d.r = parseInt(v[0]), d.g = parseInt(v[1]), d.b = parseInt(v[2]), d.a = parseFloat(v[3]) * 100, d.percent = parseInt(v[4]), l.push(d);
              } else if (g.includes("rgb")) {
                let v = g.trim().replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                v = v.filter((G) => G.trim() !== ""), d.r = parseInt(v[0]), d.g = parseInt(v[1]), d.b = parseInt(v[2]), d.percent = parseInt(v[3]), l.push(d);
              }
            }
          }
        } else {
          let n = /^radial-gradient\((.*)\)$/, r = t.replace(";", "").trim().match(n), o = /,\s*(?![^()]*\))/;
          if (r) {
            let p = r[1].split(o);
            for (let m = 0; m < p.length; m++) {
              const g = p[m];
              let d = {
                id: m,
                r: 0,
                g: 0,
                b: 0,
                a: 100,
                percent: 100,
                hue: 0,
                select: !1
              };
              if (g.includes("circle at")) {
                let v = g.replace("circle at ", "").replace(" ", "").replace(/%/g, " ").trim().split(" ");
                x.percentageX = parseInt(v[0]), x.percentageY = parseInt(v[1]);
              } else if (g.includes("rgba")) {
                let v = g.replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                v = v.filter((G) => G.trim() !== ""), d.r = parseInt(v[0]), d.g = parseInt(v[1]), d.b = parseInt(v[2]), d.a = parseFloat(v[3]) * 100, d.percent = parseInt(v[4]), l.push(d);
              } else if (g.includes("rgb")) {
                let v = g.replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                v = v.filter((G) => G.trim() !== ""), d.r = parseInt(v[0]), d.g = parseInt(v[1]), d.b = parseInt(v[2]), d.percent = parseInt(v[3]), l.push(d);
              }
            }
          }
        }
        l.length > 1 && (a.value = l, a.value[0].select = !0, A.value = a.value[0].a);
      } else if (t) {
        let e = {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
        if (t.includes("#"))
          if (t.length >= 8)
            e = ut(t);
          else {
            let l = be(t);
            l ? (e.a = 1, e.r = l.r, e.g = l.g, e.b = l.b) : e = null;
          }
        else if (t.includes("rgb"))
          if (t.includes("rgba"))
            e = dt(t);
          else {
            let l = ct(t);
            l ? (e.a = 1, e.r = l.r, e.g = l.g, e.b = l.b) : e = null;
          }
        e && (a.value[0].r = e.r, a.value[0].b = e.b, a.value[0].g = e.g, a.value[0].a = parseInt((e.a * 100).toFixed(0)), A.value = a.value[0].a, a.value[0].hue = 0);
      }
    }, de = (t) => {
      const e = a.value.find((l) => l.select == !0);
      if (e) {
        switch (t) {
          case "RGB":
            break;
          case "HSL": {
            const { h: l, s: n, l: r } = Xe(e.r, e.g, e.b);
            L.h = Math.round(l), L.s = Math.round(n * 100), L.l = Math.round(r * 100);
            break;
          }
        }
        B.value = t;
      }
    }, me = (t) => {
      t && Qe(t), ve();
    };
    _(
      () => c.modelValue,
      (t, e) => {
        t !== e && t !== b.value && (a.value.forEach((l) => {
          const n = T == null ? void 0 : T.querySelector(`#clr-gb-${l.id}`);
          n == null || n.remove();
        }), me(t));
      }
    );
    const _e = (t) => {
      a.value.forEach((e) => {
        const l = T == null ? void 0 : T.querySelector(`#clr-gb-${e.id}`);
        l == null || l.remove();
      }), t !== "solid" ? (f.value = "gradient", setTimeout(() => {
        var e;
        T = (e = s.value) == null ? void 0 : e.querySelector(".gradient-bar"), We(t), ve();
      }, 200)) : t === "solid" && (f.value = "solid", a.value = a.value.map((e) => (e.select = !1, e)), a.value[0].select = !0, setTimeout(() => {
        me(c.modelValue);
      }, 200));
    };
    return Ne(() => {
      var t;
      f.value = c.modelValue.includes("linear") || c.modelValue.includes("radial") ? "gradient" : "solid", f.value == "gradient" && (T = (t = s.value) == null ? void 0 : t.querySelector(".gradient-bar")), me(c.modelValue), de(B.value), at(() => {
        Y.value = !0;
      });
    }), (t, e) => ($(), C("div", {
      ref_key: "pickerTemplateRef",
      ref: s,
      class: J(["ck-cp-container", i.disabled ? "ck-cp-disabled " : ""]),
      "cp-theme": i.theme
    }, [
      i.variant == "gradient" ? ($(), C("div", Ht, [
        D(Rt, {
          class: "mr-auto",
          variant: i.variant,
          mode: f.value,
          "model-value": i.modelValue,
          iconClasses: i.iconClasses,
          gradientType: y.value,
          onOnChangeMode: _e
        }, null, 8, ["variant", "mode", "model-value", "iconClasses", "gradientType"])
      ])) : H("", !0),
      f.value == "gradient" && i.variant == "gradient" ? ($(), C("div", Dt, [
        D($t, {
          gradientType: y.value,
          onOnAddColor: Ae,
          onOnMouseDown: Ie,
          onOnDeleteColor: je
        }, null, 8, ["gradientType"]),
        D(Ct, {
          percentageY: x.percentageY,
          "onUpdate:percentageY": e[0] || (e[0] = (l) => x.percentageY = l),
          angle: x.angle,
          "onUpdate:angle": e[1] || (e[1] = (l) => x.angle = l),
          percentageX: x.percentageX,
          "onUpdate:percentageX": e[2] || (e[2] = (l) => x.percentageX = l),
          inputType: B.value,
          mode: f.value,
          gradientType: y.value,
          onOnInput: R
        }, null, 8, ["percentageY", "angle", "percentageX", "inputType", "mode", "gradientType"])
      ])) : ($(), C("div", Et, [
        i.presetColors ? ($(), C("div", Xt, [
          e[10] || (e[10] = w("div", { class: "text-oc-text-400 text-sm my-3 font-medium" }, "Choose color", -1)),
          w("div", Mt, [
            ($(!0), C(Re, null, Be(i.presetColors, (l) => ($(), C("div", {
              key: `color-${l}`,
              class: "ck-cp-color-item !w-[32px] !h-[32px]",
              style: W(`background:${l}`),
              onClick: (n) => Te(l)
            }, null, 12, Ut))), 128))
          ])
        ])) : H("", !0)
      ])),
      D(St, { onOnMouseDown: Oe }),
      w("div", Nt, [
        D(It, {
          class: J(S.value ? "max-w-[90%]" : ""),
          modelValue: P.value,
          "onUpdate:modelValue": e[3] || (e[3] = (l) => P.value = l),
          onOnInput: e[4] || (e[4] = (l) => ge(!1)),
          onOnChange: Fe
        }, null, 8, ["class", "modelValue"]),
        S.value ? ($(), C("button", {
          key: 0,
          id: "cp-btn-eyedropper",
          type: "button",
          class: "cp-btn",
          style: { padding: "7px" },
          onClick: ze
        }, e[11] || (e[11] = [
          w("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 32 32"
          }, [
            w("path", { d: "M21.35 1.825l-6.344 6.35-0.588-0.588c-0.781-0.781-2.050-0.781-2.831 0s-0.781 2.050 0 2.831l10 10c0.781 0.781 2.050 0.781 2.831 0s0.781-2.050 0-2.831l-0.587-0.587 6.344-6.35c2.438-2.438 2.438-6.388 0-8.819s-6.387-2.438-8.819 0zM3.462 20.206c-0.938 0.938-1.462 2.212-1.462 3.538v2.65l-1.663 2.494c-0.531 0.794-0.425 1.85 0.25 2.525s1.731 0.781 2.525 0.25l2.494-1.663h2.65c1.325 0 2.6-0.525 3.537-1.462l7.544-7.544-2.831-2.831-7.544 7.544c-0.188 0.188-0.444 0.294-0.706 0.294h-2.256v-2.256c0-0.262 0.106-0.519 0.294-0.706l7.544-7.544-2.831-2.831-7.544 7.544z" })
          ], -1)
        ]))) : H("", !0)
      ]),
      i.showAlpha ? ($(), F(ht, {
        key: 3,
        modelValue: A.value,
        "onUpdate:modelValue": e[5] || (e[5] = (l) => A.value = l),
        onOnInput: e[6] || (e[6] = (l) => ke(l.target.value))
      }, null, 8, ["modelValue"])) : H("", !0),
      nt(w("div", Ot, null, 512), [
        [rt, !1]
      ]),
      w("div", Gt, [
        D(mt, {
          "model-value": B.value,
          "onUpdate:modelValue": de
        }, null, 8, ["model-value"]),
        Y.value && i.showInputSet ? ($(), C("div", Ft, [
          B.value == "HEX" ? ($(), F(pt, {
            key: 0,
            modelValue: N.value,
            "onUpdate:modelValue": [
              e[7] || (e[7] = (l) => N.value = l),
              Je
            ]
          }, null, 8, ["modelValue"])) : H("", !0),
          B.value == "RGB" ? ($(), F(Me, {
            key: 1,
            "rgb-value": a.value.find((l) => l.select == !0),
            onUpdateRgbValue: Ke
          }, null, 8, ["rgb-value"])) : H("", !0),
          B.value == "HSL" ? ($(), F(Me, {
            key: 2,
            "input-type": "HSL",
            "hsl-value": L,
            onUpdateHslValue: Ze
          }, null, 8, ["hsl-value"])) : H("", !0),
          i.showAlpha ? ($(), F(vt, {
            key: 3,
            modelValue: A.value,
            "onUpdate:modelValue": [
              e[8] || (e[8] = (l) => A.value = l),
              e[9] || (e[9] = (l) => ke(l))
            ]
          }, null, 8, ["modelValue"])) : H("", !0)
        ])) : H("", !0)
      ]),
      e[12] || (e[12] = w("div", { class: "text-oc-text-400 text-sm my-3 font-medium font-inter" }, "Last used", -1)),
      M.value.length > 0 && i.showColorList ? ($(), C("div", Yt, [
        ($(!0), C(Re, null, Be(j.value, (l) => ($(), C("div", {
          key: `color-${l}`,
          class: "ck-cp-color-item !w-[32px] !h-[32px]",
          style: W(`background:${l}`),
          onClick: (n) => Te(l)
        }, null, 12, Pt))), 128))
      ])) : H("", !0)
    ], 10, Bt));
  }
};
export {
  ll as default
};
