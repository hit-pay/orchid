var Se = Object.defineProperty;
var we = (s, p, m) => p in s ? Se(s, p, { enumerable: !0, configurable: !0, writable: !0, value: m }) : s[p] = m;
var H = (s, p, m) => we(s, typeof p != "symbol" ? p + "" : p, m);
import { computed as Qe, ref as u, onMounted as Ce, openBlock as d, createBlock as k, unref as o, withCtx as A, createElementVNode as n, normalizeClass as g, createElementBlock as h, Fragment as S, createVNode as r, createCommentVNode as v, renderList as Ve, toDisplayString as Y, createTextVNode as Ae, normalizeStyle as _ } from "vue";
import { Q as c, a as Te } from "./QuillEditor-CrreCLHw.js";
import { ColorPicker as $e } from "./ColorPicker.js";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as a } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { z as qe } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { K as ze } from "./OcSlider-DSFHUyqz-Dm0eXdQ5.js";
import { o as Le } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
const Ee = ["id"], Fe = { class: "flex items-center gap-x-3 px-5" }, Ie = { class: "flex items-center gap-x-5 cursor-pointer" }, Me = { class: "flex flex-col py-2 overflow-hidden" }, Ne = ["onClick"], Be = { class: "flex gap-x-3 items-center px-5" }, Ue = { class: "flex items-center gap-x-3 px-5" }, je = { class: "flex gap-x-3 items-center px-5" }, He = { class: "flex gap-x-3 items-center px-5" }, Re = { class: "flex items-center" }, De = { class: "grid cursor-pointer px-5" }, Pe = {
  key: 5,
  class: "flex gap-x-3 items-center px-5"
}, Oe = { class: "flex" }, We = { class: "mt-1 mx-2 cursor-pointer" }, at = {
  __name: "OcTextEditor",
  props: {
    /**
     * The font sizes of the editor.
     */
    fontSizes: { type: Array, required: !0 },
    /**
     * The initial font size of the editor. (if empty the first item of `fontSizes` will be used, needs to be a value of `fontSizes`)
     */
    initialFontSize: { type: String },
    modelValue: String,
    image: String,
    errorMessage: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    isRequired: {
      type: Boolean,
      default: !1
    },
    labelIcon: {
      type: String,
      default: ""
    },
    tooltipText: {
      type: String,
      default: ""
    },
    tooltipOptions: {
      type: Object,
      default: () => ({})
    },
    variant: {
      type: String,
      validator: (s) => ["default", "text-only"].includes(s),
      default: "default"
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "update:image"],
  setup(s, { emit: p }) {
    const m = s, T = p, ee = {
      default: [
        "changes",
        "font-size",
        "font-style",
        "link",
        "image",
        "quote",
        "media",
        "list",
        "alignment"
      ],
      "text-only": ["changes", "font-size", "font-style", "link", "quote", "list", "alignment"]
    }, f = Qe(() => ee[m.variant]), R = c.import("attributors/style/size");
    R.whitelist = m.fontSizes.map((t) => t.value), c.register(R, !0);
    const te = c.import("attributors/style/align");
    c.register(te, !0);
    const le = c.import("attributors/style/background");
    c.register(le, !0);
    const ie = c.import("attributors/style/color");
    c.register(ie, !0);
    const oe = c.import("attributors/style/direction");
    c.register(oe, !0);
    const ne = c.import("attributors/style/font");
    c.register(ne, !0);
    const se = c.import("blots/block/embed");
    class F extends se {
    }
    H(F, "blotName", "divider"), H(F, "tagName", "hr"), c.register(F);
    const ae = () => {
      if (l.value.getQuill().getSelection(!0)) {
        const e = l.value.getQuill().getSelection(!0);
        l.value.getQuill().insertText(e.index, `
`, c.sources.USER), l.value.getQuill().insertEmbed(e.index + 1, "divider", !0, c.sources.USER), l.value.getQuill().setSelection(e.index + 2, c.sources.SILENT);
      }
    }, $ = u(
      Math.random().toString(36).replace(/[^a-zA-Z]+/g, "")
    ), D = u(!1), P = u(!1), w = u(!1), Q = u(!1), C = u(!1), q = u(!1), I = u(!1), M = u(""), z = u(""), y = u(""), l = u(), O = u(!1), W = u(m.image), N = (t) => {
      D.value = l.value.getQuill().history.stack.undo.length > 0, P.value = l.value.getQuill().history.stack.redo.length > 0, w.value = l.value.getQuill().getFormat().bold, Q.value = l.value.getQuill().getFormat().italic, C.value = l.value.getQuill().getFormat().underline, I.value = l.value.getQuill().getFormat().blockquote, z.value = l.value.getQuill().getFormat().list, y.value = l.value.getQuill().getFormat().align;
      let e = document.createElement("div");
      e.innerHTML = t, O.value && (e.innerText ? T("update:modelValue", t || "") : T("update:modelValue", ""), e.remove());
    }, re = () => {
      l.value.getQuill().history.undo(), N(m.modelValue);
    }, ue = () => {
      l.value.getQuill().history.redo(), N(m.modelValue);
    }, ce = () => {
      var t;
      l.value.getQuill().format("bold", !w.value), (t = l.value.getQuill().getSelection()) != null && t.length || (w.value = !w.value);
    }, de = () => {
      var t;
      l.value.getQuill().format("italic", !Q.value), (t = l.value.getQuill().getSelection()) != null && t.length || (Q.value = !Q.value);
    }, ge = () => {
      var t;
      l.value.getQuill().format("underline", !C.value), (t = l.value.getQuill().getSelection()) != null && t.length || (C.value = !C.value);
    }, Z = (t) => {
      l.value.getQuill().format("size", t), M.value = t, q.value = !1;
    }, me = () => {
      const t = l.value.getQuill().getSelection();
      t && t.length > 0 && l.value.getQuill().theme.tooltip.edit();
    }, ve = () => {
      l.value.getQuill().format("blockquote", !I.value);
    }, xe = (t) => {
      const e = l.value.getQuill().getSelection();
      e && (l.value.getQuill().clipboard.dangerouslyPasteHTML(e.index, `<img src="${t}" />`), W.value = t, T("update:image", W.value));
    }, pe = () => {
      l.value.getQuill().getSelection() || l.value.getQuill().setSelection(l.value.getQuill().getLength() - 1);
      const t = document.createElement("input");
      t.type = "file", t.accept = "jpg,.jpeg,.png,.webp,.gif", t.onchange = () => {
        const e = t.files[0], i = new FileReader();
        i.onload = () => xe(i.result), i.readAsDataURL(e);
      }, t.click();
    }, K = (t) => /^data:image\/(png|jpg|jpeg|gif);base64,/.test(t), fe = (t) => {
      setTimeout(() => {
        var i;
        if (t) {
          const x = l.value.getHTML(), b = document.createElement("div");
          b.innerHTML = x;
          let E = b.getElementsByTagName("img");
          if (E && E.length > 0)
            for (let j = 0; j < E.length; j++) {
              const X = (i = E[j]) == null ? void 0 : i.getAttribute("src");
              K(X) && T("update:image", X);
            }
        }
      }, 100);
      const { items: e } = t.clipboardData;
      e.length && e[0].getAsString((i) => {
        K(i) && (l.value.getQuill().getSelection() || l.value.getQuill().setSelection(l.value.getQuill().getLength() - 1));
      });
    }, he = () => {
      l.value.getQuill().theme.tooltip.edit("video");
    }, G = (t) => {
      l.value.getQuill().format("list", t), z.value = t;
    }, L = (t = void 0) => {
      l.value.getQuill().format("align", t), y.value = t;
    }, V = u(""), ye = () => {
      l.value.getQuill().format("color", V.value);
    };
    Ce(() => {
      Z(m.initialFontSize || m.fontSizes[0].value), O.value = !0;
    });
    const B = u(100), J = u(!1), be = (t) => {
      var i, x;
      B.value = t;
      const e = (i = window.getSelection()) == null ? void 0 : i.focusNode;
      e && e.nodeName !== "#text" && (l.value.getQuill().format("width", `${B.value}%`), (x = e == null ? void 0 : e.querySelector("img")) == null || x.setAttribute("style", "margin:auto;display:block;"));
    }, U = (t = "left") => {
      var i, x;
      const e = (i = window.getSelection()) == null ? void 0 : i.focusNode;
      if (e && e.nodeName !== "#text") {
        let b = "float:left";
        t == "center" ? b = "" : t == "right" && (b = "float:right"), (x = e == null ? void 0 : e.querySelector("img")) == null || x.setAttribute("style", `margin:auto;display:block;${b}`);
      }
    }, ke = () => {
      var e;
      const t = (e = window.getSelection()) == null ? void 0 : e.focusNode;
      J.value = t.innerHTML && t.innerHTML.includes("<img");
    };
    return (t, e) => (d(), k(o(qe), {
      label: s.label,
      hint: s.hint,
      "error-message": s.errorMessage,
      "is-required": s.isRequired,
      "label-icon": s.labelIcon,
      "tooltip-text": s.tooltipText,
      "tooltip-options": s.tooltipOptions
    }, {
      default: A(() => [
        n("div", {
          class: g(["grid", { "has-error": s.errorMessage }]),
          onClick: ke
        }, [
          $.value ? (d(), k(o(Te), {
            key: 0,
            id: `#${$.value}`,
            ref_key: "quill",
            ref: l,
            content: s.modelValue,
            options: {
              bounds: `#${$.value}`
            },
            theme: "snow",
            "content-type": "html",
            class: "min-h-[200px]",
            placeholder: s.placeholder,
            "onUpdate:content": N,
            onPaste: fe
          }, {
            toolbar: A(() => [
              n("div", {
                id: $.value,
                class: "flex min-h-[36px] flex-wrap !py-2 !px-3 gap-y-2 rounded-t"
              }, [
                f.value.includes("changes") ? (d(), h(S, { key: 0 }, [
                  n("div", Fe, [
                    r(o(a), {
                      class: g(D.value ? "text-oc-text cursor-pointer" : "text-oc-text-300"),
                      width: "20",
                      height: "20",
                      name: "text-editor/undo",
                      onClick: re
                    }, null, 8, ["class"]),
                    r(o(a), {
                      class: g(P.value ? "text-oc-text cursor-pointer" : "text-oc-text-300"),
                      width: "20",
                      height: "20",
                      name: "text-editor/redo",
                      onClick: ue
                    }, null, 8, ["class"])
                  ]),
                  e[12] || (e[12] = n("div", { class: "border-l border-oc-gray-200" }, null, -1))
                ], 64)) : v("", !0),
                f.value.includes("font-size") ? (d(), h(S, { key: 1 }, [
                  r(o(Le), {
                    modelValue: q.value,
                    "onUpdate:modelValue": e[0] || (e[0] = (i) => q.value = i),
                    class: "px-5"
                  }, {
                    menu: A(() => [
                      n("div", Me, [
                        (d(!0), h(S, null, Ve(s.fontSizes, (i) => (d(), h("div", {
                          key: i.value,
                          class: g(["min-w-[120px] cursor-pointer py-2 px-3 hover:bg-oc-gray-50", M.value === i.value ? "font-medium" : ""]),
                          onClick: (x) => Z(i.value)
                        }, Y(i.label), 11, Ne))), 128))
                      ])
                    ]),
                    default: A(() => {
                      var i;
                      return [
                        n("div", Ie, [
                          Ae(Y((i = s.fontSizes.find((x) => x.value === M.value)) == null ? void 0 : i.label) + " ", 1),
                          r(o(a), {
                            width: "20",
                            height: "20",
                            name: "chevron-down",
                            class: g(["transition-all", q.value ? "rotate-180" : ""])
                          }, null, 8, ["class"])
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["modelValue"]),
                  e[13] || (e[13] = n("div", { class: "border-l border-oc-gray-200" }, null, -1))
                ], 64)) : v("", !0),
                f.value.includes("font-style") ? (d(), h(S, { key: 2 }, [
                  n("div", Be, [
                    r(o(a), {
                      class: g(["cursor-pointer", w.value ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/bold",
                      onClick: ce
                    }, null, 8, ["class"]),
                    r(o(a), {
                      class: g(["cursor-pointer", Q.value ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/italic",
                      onClick: de
                    }, null, 8, ["class"]),
                    r(o(a), {
                      class: g(["cursor-pointer", C.value ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/underline",
                      onClick: ge
                    }, null, 8, ["class"])
                  ]),
                  e[14] || (e[14] = n("div", { class: "border-l border-oc-gray-200" }, null, -1))
                ], 64)) : v("", !0),
                n("div", Ue, [
                  f.value.includes("link") ? (d(), k(o(a), {
                    key: 0,
                    class: "cursor-pointer",
                    width: "20",
                    height: "20",
                    name: "text-editor/link",
                    onClick: me
                  })) : v("", !0),
                  f.value.includes("image") ? (d(), k(o(a), {
                    key: 1,
                    class: "cursor-pointer",
                    width: "20",
                    height: "20",
                    name: "text-editor/image",
                    onClick: pe
                  })) : v("", !0),
                  f.value.includes("quote") ? (d(), k(o(a), {
                    key: 2,
                    class: g(["cursor-pointer", I.value ? "text-oc-text" : "text-oc-text-300"]),
                    width: "20",
                    height: "20",
                    name: "text-editor/quote",
                    onClick: ve
                  }, null, 8, ["class"])) : v("", !0),
                  f.value.includes("media") ? (d(), k(o(a), {
                    key: 3,
                    class: "cursor-pointer",
                    width: "20",
                    height: "20",
                    name: "text-editor/media",
                    onClick: he
                  })) : v("", !0)
                ]),
                f.value.includes("list") ? (d(), h(S, { key: 3 }, [
                  e[15] || (e[15] = n("div", { class: "border-l border-oc-gray-200" }, null, -1)),
                  n("div", je, [
                    r(o(a), {
                      class: g(["cursor-pointer", z.value === "bullet" ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/bullet",
                      onClick: e[1] || (e[1] = (i) => G("bullet"))
                    }, null, 8, ["class"]),
                    r(o(a), {
                      class: g(["cursor-pointer", z.value === "ordered" ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/number",
                      onClick: e[2] || (e[2] = (i) => G("ordered"))
                    }, null, 8, ["class"])
                  ])
                ], 64)) : v("", !0),
                f.value.includes("alignment") ? (d(), h(S, { key: 4 }, [
                  e[16] || (e[16] = n("div", { class: "border-l border-oc-gray-200" }, null, -1)),
                  n("div", He, [
                    r(o(a), {
                      class: g(["cursor-pointer", y.value ? "text-oc-text-300" : "text-oc-text"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/left",
                      onClick: e[3] || (e[3] = (i) => L())
                    }, null, 8, ["class"]),
                    r(o(a), {
                      class: g(["cursor-pointer", y.value === "center" ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/center",
                      onClick: e[4] || (e[4] = (i) => L("center"))
                    }, null, 8, ["class"]),
                    r(o(a), {
                      class: g(["cursor-pointer", y.value === "right" ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/right",
                      onClick: e[5] || (e[5] = (i) => L("right"))
                    }, null, 8, ["class"]),
                    r(o(a), {
                      class: g(["cursor-pointer", y.value === "justify" ? "text-oc-text" : "text-oc-text-300"]),
                      width: "20",
                      height: "20",
                      name: "text-editor/justify",
                      onClick: e[6] || (e[6] = (i) => L("justify"))
                    }, null, 8, ["class"])
                  ])
                ], 64)) : v("", !0),
                e[18] || (e[18] = n("div", { class: "border-l border-oc-gray-200" }, null, -1)),
                n("div", Re, [
                  r(o($e), {
                    modelValue: V.value,
                    "onUpdate:modelValue": [
                      e[7] || (e[7] = (i) => V.value = i),
                      ye
                    ],
                    "hide-input-color": ""
                  }, {
                    "picker-icon": A(() => [
                      n("div", De, [
                        n("div", {
                          style: _(`color:${V.value}`)
                        }, "A", 4),
                        n("div", {
                          class: "h-[5px] w-full rounded border",
                          style: _(`background:${V.value}`)
                        }, null, 4)
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                e[19] || (e[19] = n("div", { class: "border-l border-oc-gray-200" }, null, -1)),
                J.value ? (d(), h("div", Pe, [
                  r(o(ze), {
                    label: "Image width",
                    class: "w-[120px]",
                    "model-value": B.value,
                    "min-limit": 0,
                    "max-limit": 100,
                    "onUpdate:modelValue": be
                  }, null, 8, ["model-value"]),
                  n("div", Oe, [
                    r(o(a), {
                      class: "cursor-pointer",
                      width: "20",
                      height: "20",
                      name: "text-editor/left",
                      onClick: e[8] || (e[8] = (i) => U())
                    }),
                    r(o(a), {
                      class: "cursor-pointer",
                      width: "20",
                      height: "20",
                      name: "text-editor/center",
                      onClick: e[9] || (e[9] = (i) => U("center"))
                    }),
                    r(o(a), {
                      class: "cursor-pointer",
                      width: "20",
                      height: "20",
                      name: "text-editor/right",
                      onClick: e[10] || (e[10] = (i) => U("right"))
                    })
                  ])
                ])) : v("", !0),
                n("div", We, [
                  (d(), h("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 15 15",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    onClick: e[11] || (e[11] = (i) => ae())
                  }, e[17] || (e[17] = [
                    n("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z",
                      fill: "#000000"
                    }, null, -1)
                  ])))
                ])
              ], 8, Ee)
            ]),
            _: 1
          }, 8, ["id", "content", "options", "placeholder"])) : v("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
};
export {
  at as TextEditor
};
