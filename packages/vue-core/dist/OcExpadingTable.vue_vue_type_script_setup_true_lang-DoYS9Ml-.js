import { computed as S, ref as j, onMounted as te, openBlock as t, createElementBlock as a, normalizeClass as y, renderSlot as g, createCommentVNode as p, createElementVNode as b, createBlock as r, unref as s, Fragment as w, renderList as C, withCtx as $, createTextVNode as A, toDisplayString as T, createVNode as H, mergeProps as z, normalizeProps as le, guardReactiveProps as ie, withModifiers as ae, defineComponent as Y, normalizeStyle as U, createSlots as X } from "vue";
import G from "dayjs";
import { a as _, T as J } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { S as F } from "./OcSkeleton-BdPTmGh0.js";
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
import "@popperjs/core";
import { _ as I } from "./OcIcon-CJgBICxh.js";
import { _ as ne } from "./OcChip-5vbWMktM.js";
import { _ as se } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-IsqOGpEF.js";
/* empty css                                                                    */
const oe = {
  key: 0,
  class: "flex relative group/row md:p-0 py-3 w-full"
}, Ve = {
  __name: "OcTable",
  props: {
    options: {
      type: Object,
      required: !0
    },
    isLoading: Boolean,
    isBorderless: Boolean,
    loadingRows: {
      type: Number,
      default: 10
    },
    selected: {
      type: Array,
      required: !1
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    rowClass: [String, Function],
    isSticky: {
      type: Boolean,
      default: !1
    },
    isResponsive: {
      type: Boolean,
      default: !1
    },
    rowLink: String
  },
  emits: {
    "click:row": [],
    "update:selected": [],
    "hover:cell": []
  },
  setup(e, { emit: n }) {
    const l = e, f = n, x = S(() => l.options.isSelectable), h = S(() => l.options.isCursorPointer ?? !0), u = S(() => l.options.fields), d = S(() => l.options.headers), m = S(
      () => typeof l.rowKey == "function" ? l.rowKey : (c) => c[l.rowKey]
    ), k = S({
      get() {
        return l.selected || [];
      },
      set(c) {
        f("update:selected", c);
      }
    }), K = (c) => {
      k.value.find((i) => m.value(i) === m.value(c)) ? k.value = k.value.filter(
        (i) => m.value(i) !== m.value(c)
      ) : k.value = [...k.value, c];
    }, v = () => {
      const c = k.value.length === u.value.length;
      k.value = c ? [] : [...u.value];
    }, M = S(() => typeof l.rowClass == "function" ? (c, L) => l.rowClass(c, L) : () => l.rowClass), P = (c, L) => {
      !L.disableClickRow && L.key !== "actions" && f("click:row", {
        field: c,
        header: L
      });
    }, B = j(!0), O = j(!0), R = j(), W = () => {
      l.isSticky && (B.value = R.value.scrollLeft === 0, O.value = R.value.scrollLeft + R.value.clientWidth === R.value.scrollWidth);
    };
    return te(() => W()), (c, L) => (t(), a("div", {
      ref_key: "scrollTable",
      ref: R,
      class: y(["flex text-oc-text flex-col border-oc-gray-200 isolate z-10", [
        e.isSticky ? "overflow-x-auto" : "overflow-hidden",
        e.isResponsive ? "rounded" : "md:rounded",
        e.isBorderless ? "" : "border"
      ]]),
      onScroll: W
    }, [
      c.$slots.before ? (t(), a("div", {
        key: 0,
        class: y(["border-b border-oc-gray-200", {
          "sticky left-0": e.isSticky
        }])
      }, [
        g(c.$slots, "before")
      ], 2)) : p("", !0),
      g(c.$slots, "table-header", {
        fields: u.value,
        headers: d.value,
        isSelectable: x.value,
        isResponsive: e.isResponsive,
        selectAllRows: v
      }, () => [
        b("div", {
          class: y(["flex md:border-b-0 border-b border-oc-gray-200", e.isResponsive ? "w-full" : e.isSticky ? "w-max" : "flex-wrap md:flex-nowrap"])
        }, [
          x.value ? (t(), r(s(Q), {
            key: 0,
            "is-sticky": e.isSticky,
            class: y(["md:ml-0 md:border-b border-oc-gray-200 min-w-[32px]", [e.isSticky ? "shrink-0 sticky left-0 z-10" : "w-[40px] md:w-[5%]"]]),
            variant: "checkbox",
            "is-partial": k.value.length !== u.value.length && k.value.length > 0,
            "is-checked": k.value.length === u.value.length && k.value.length > 0,
            onSelectAll: v
          }, null, 8, ["is-sticky", "class", "is-partial", "is-checked"])) : p("", !0),
          (t(!0), a(w, null, C(d.value, (i) => (t(), r(s(Q), {
            key: i.key,
            text: i.label,
            "is-loading": e.isLoading,
            variant: i.headerVariant,
            "is-sticky": e.isSticky,
            class: y([[
              e.isSticky || e.isResponsive ? "flex md:min-h-auto" : "hidden md:flex",
              i.stickyLeft && x.value ? "left-[40px] md:left-[32px]" : "left-0",
              i.stickyRight ? "right-0" : "",
              typeof i.class == "function" ? i.class() : i.class,
              i.stickyLeft || i.stickyRight ? "sticky shrink-0 z-10" : "",
              i.stickyLeft && !B.value ? "shadow-right-sticky" : "",
              i.stickyRight && !O.value ? "shadow-left-sticky" : ""
            ], "md:border-b border-oc-gray-200"])
          }, {
            default: $(() => [
              g(c.$slots, `header-${i.key}`)
            ]),
            _: 2
          }, 1032, ["text", "is-loading", "variant", "is-sticky", "class"]))), 128))
        ], 2)
      ]),
      e.isLoading ? (t(!0), a(w, { key: 1 }, C(e.loadingRows, (i) => (t(), a("div", {
        key: i,
        class: y(["flex flex-wrap md:flex-nowrap group/row border-oc-gray-200 md:p-0 py-3", {
          "pl-[40px]": x.value,
          "border-b": e.isBorderless
        }])
      }, [
        x.value ? (t(), r(s(V), {
          key: 0,
          class: "opacity-0 flex justify-center absolute left-0 md:relative w-[5%]"
        })) : p("", !0),
        (t(!0), a(w, null, C(d.value, (E, o) => (t(), r(s(V), {
          key: `${o}-${i}`,
          class: y(E.class),
          "is-loading": "",
          "is-last": i === e.loadingRows
        }, null, 8, ["class", "is-last"]))), 128))
      ], 2))), 128)) : (t(), a(w, { key: 2 }, [
        g(c.$slots, "table-body", {
          fields: u.value,
          headers: d.value,
          isScrollOnEnd: O.value,
          onClickRow: P,
          isSelectable: x.value,
          isCursorPointer: h.value,
          isResponsive: e.isResponsive,
          isSticky: e.isSticky,
          rowLink: e.rowLink,
          calculateRowClass: M.value
        }, () => [
          (t(!0), a(w, null, C(u.value, (i, E) => (t(), a("div", {
            key: `${m.value(i)}-${E}`,
            class: y({
              "border-b": u.value.length !== E + 1,
              "w-max": e.isSticky
            })
          }, [
            b("div", {
              class: y(["flex relative group/row md:p-0 py-3 min-h-[58px]", [
                {
                  "pl-[40px]": x.value,
                  "cursor-pointer": h.value
                },
                e.isResponsive ? "w-full" : e.isSticky ? "w-max !p-0" : "flex-wrap md:flex-nowrap",
                M.value(i, E)
              ]])
            }, [
              x.value ? (t(), r(s(V), {
                key: 0,
                class: y(["flex border-oc-gray-200 justify-center left-0 min-w-[32px]", [
                  e.isSticky ? "shrink-0 z-10 left-0 sticky" : "md:relative absolute w-[40px] md:w-[5%]"
                ]]),
                "is-last": u.value.length === E + 1,
                "is-selected": k.value.some((o) => m.value(o) === m.value(i)),
                variant: "checkbox",
                onSelected: (o) => K(i),
                "onHover:field": L[0] || (L[0] = (o) => c.$emit("hover:cell", o))
              }, null, 8, ["is-last", "is-selected", "class", "onSelected"])) : p("", !0),
              (t(!0), a(w, null, C(d.value, (o, ee) => (t(), r(s(V), {
                key: `${ee}-${E}`,
                class: y(["flex border-oc-gray-200", [
                  typeof o.class == "function" ? o.class(i) : o.class,
                  o.stickyLeft && x.value ? "left-[40px] md:left-[32px]" : "left-0",
                  o.stickyRight ? "right-0" : "",
                  o.stickyLeft || o.stickyRight ? "shrink-0 sticky z-10" : "",
                  o.stickyLeft && !B.value ? "shadow-right-sticky" : "",
                  o.stickyRight && !O.value ? "shadow-left-sticky" : ""
                ]]),
                "is-last": u.value.length === E + 1,
                variant: o.variant,
                "is-copy": o.isCopy,
                "add-description-to-copy-clipboard": o.addDescriptionToCopyClipboard ?? !0,
                data: i[`${o.key}`] ?? "",
                content: {
                  important: o.important ?? !1,
                  title: i[`${o.title}`],
                  description: i[`${o.description}`],
                  href: i[`${o.href}`]
                },
                "chip-options": o.chipOptions,
                "image-class": o.imageClass,
                link: e.rowLink && i[e.rowLink] ? i[e.rowLink] : "",
                onClick: (q) => P(i, o),
                "onHover:field": L[1] || (L[1] = (q) => c.$emit("hover:cell", q))
              }, {
                default: $(() => [
                  c.$slots[o.key] ? g(c.$slots, o.key, {
                    key: 0,
                    item: i,
                    data: i[o.key],
                    index: E
                  }) : p("", !0)
                ]),
                _: 2
              }, 1032, ["is-last", "variant", "is-copy", "add-description-to-copy-clipboard", "data", "content", "chip-options", "class", "image-class", "link", "onClick"]))), 128))
            ], 2),
            c.$slots.extra ? (t(), a("div", oe, [
              g(c.$slots, "extra", {
                item: i,
                index: E
              })
            ])) : p("", !0)
          ], 2))), 128))
        ]),
        u.value.length ? p("", !0) : g(c.$slots, "empty", { key: 0 })
      ], 64)),
      g(c.$slots, "after")
    ], 34));
  }
}, re = { class: "mx-auto" }, Q = {
  __name: "OcTableHeader",
  props: {
    variant: {
      type: String,
      default: "text",
      validator: (e) => ["text", "checkbox"].includes(e)
    },
    text: String,
    isPartial: Boolean,
    isChecked: Boolean,
    isSticky: Boolean,
    isLoading: Boolean
  },
  emits: {
    selectAll: []
  },
  setup(e) {
    const n = {
      TEXT: "text",
      CHECKBOX: "checkbox"
    }, l = S(() => ({
      text: "px-4 py-3",
      checkbox: "p-4 md:p-3"
    }));
    return (f, x) => (t(), a("div", {
      class: y(["whitespace-nowrap text-start uppercase text-oc-text-400 leading-[18px] text-xs font-medium bg-oc-gray-50 flex items-center gap-3", l.value[e.variant]])
    }, [
      e.isLoading ? (t(), r(s(F), {
        key: 0,
        class: "rounded-full w-full overflow-hidden h-6"
      })) : (t(), a(w, { key: 1 }, [
        e.variant === n.TEXT ? g(f.$slots, "default", { key: 0 }, () => [
          A(T(e.text), 1)
        ]) : g(f.$slots, "default", { key: 1 }, () => [
          b("div", re, [
            H(s(_), {
              "model-value": e.isChecked,
              "is-partial": e.isPartial,
              "onUpdate:modelValue": x[0] || (x[0] = (h) => f.$emit("selectAll", h))
            }, null, 8, ["model-value", "is-partial"])
          ]),
          b("span", {
            class: y(["text-oc-text-500", e.isSticky ? "hidden" : "md:hidden"])
          }, "Select all", 2)
        ])
      ], 64))
    ], 2));
  }
}, ce = ["src"], V = {
  __name: "OcTableCell",
  props: {
    isSimple: Boolean,
    variant: {
      type: String,
      default: "default"
    },
    isLast: Boolean,
    isCopy: Boolean,
    addDescriptionToCopyClipboard: Boolean,
    isSelected: Boolean,
    data: [String, Number, Object, Array, Boolean],
    isLoading: Boolean,
    chipOptions: Object,
    content: {
      type: Object,
      default() {
        return {
          title: null,
          description: null
        };
      }
    },
    datetime: String,
    imageClass: {
      type: String,
      default: "h-full"
    },
    link: String
  },
  emits: {
    selected: [],
    copied: [],
    "click:field": [],
    "hover:field": []
  },
  setup(e) {
    const n = {
      CHECKBOX: "checkbox",
      CONTENT: "content",
      CHIP: "chip",
      DATETIME: "datetime",
      ICON: "icon",
      IMAGE: "image",
      EMPTY: "empty",
      DEFAULT: "default"
    }, l = e, f = S(() => l.data || l.content.title || l.content.description), x = S(() => {
      const u = l.chipOptions[l.data];
      return typeof u == "object" ? {
        label: u.label || l.data,
        ...u
      } : {
        label: l.data,
        variant: u
      };
    }), h = S(() => ({
      [n.CHECKBOX]: "md:px-2 px-4 min-w-[32px]",
      [n.ICON]: "md:px-2 px-4 min-w-[32px] ",
      [n.IMAGE]: "md:px-2 px-4 min-w-[32px]",
      [n.CONTENT]: "px-4",
      [n.CHIP]: "px-4",
      [n.DATETIME]: "px-4",
      [n.EMPTY]: "px-4 min-w-[48px]",
      [n.DEFAULT]: "px-4"
    }));
    return (u, d) => {
      var m;
      return t(), a("div", {
        class: y([[
          h.value[e.variant],
          {
            "flex items-center": e.isLoading,
            "md:px-4 px-3 py-1": e.variant !== n.CHECKBOX
          }
        ], "md:py-3 bg-oc-bg-light md:min-h-[58px] md:group-hover/row:bg-oc-gray-50 items-center"])
      }, [
        e.isLoading ? (t(), r(s(F), {
          key: 0,
          class: "rounded-full w-full overflow-hidden h-6"
        })) : (t(), a("div", {
          key: 1,
          class: y(["w-full flex", e.isCopy ? "justify-between" : "justify-start"]),
          onMouseover: d[1] || (d[1] = (k) => u.$emit("hover:field", l))
        }, [
          g(u.$slots, "default", {}, () => [
            e.variant === n.CHECKBOX ? (t(), r(s(_), {
              key: 0,
              "model-value": e.isSelected,
              class: y(["m-auto justify-center items-center", e.isSelected ? "flex" : e.isSimple ? "" : "md:hidden group-hover/row:flex"]),
              "onUpdate:modelValue": d[0] || (d[0] = (k) => u.$emit("selected"))
            }, null, 8, ["model-value", "class"])) : e.variant === n.ICON ? (t(), r(s(I), {
              key: 1,
              class: "w-6 h-6 mx-auto",
              name: e.data
            }, null, 8, ["name"])) : e.variant === n.IMAGE ? (t(), a(w, { key: 2 }, [
              e.data ? (t(), r(s(N), {
                key: 0,
                link: e.link,
                class: "h-[42px] min-w-[42px] rounded mx-auto"
              }, {
                default: $(() => [
                  b("img", {
                    class: y([e.imageClass, "h-full"]),
                    alt: "table-img",
                    src: e.data
                  }, null, 10, ce)
                ]),
                _: 1
              }, 8, ["link"])) : (t(), r(s(N), {
                key: 1,
                link: e.link,
                class: "h-[42px] mx-auto w-[42px] bg-oc-bg-dark flex items-center justify-center rounded"
              }, {
                default: $(() => [
                  H(s(I), {
                    width: "20",
                    height: "20",
                    name: "image"
                  })
                ]),
                _: 1
              }, 8, ["link"]))
            ], 64)) : e.variant === n.EMPTY ? (t(), r(s(N), {
              key: 3,
              link: e.link,
              class: "w-full h-full"
            }, {
              default: $(() => d[2] || (d[2] = [
                A("- ")
              ])),
              _: 1
            }, 8, ["link"])) : e.variant === n.DATETIME ? (t(), r(s(Z), {
              key: 4,
              title: s(G)(e.data).format("D MMM, YYYY"),
              description: s(G)(e.data).format("h:mm A"),
              link: e.link
            }, null, 8, ["title", "description", "link"])) : e.variant === n.CONTENT ? (t(), r(s(Z), z({ key: 5 }, e.content, { link: e.link }), null, 16, ["link"])) : e.variant === n.CHIP ? (t(), r(s(N), {
              key: 6,
              link: e.link
            }, {
              default: $(() => [
                H(s(ne), le(ie(x.value)), null, 16)
              ]),
              _: 1
            }, 8, ["link"])) : e.variant === n.DEFAULT ? (t(), r(s(N), {
              key: 7,
              link: e.link,
              class: "flex items-center w-full"
            }, {
              default: $(() => [
                A(T(e.data), 1)
              ]),
              _: 1
            }, 8, ["link"])) : (t(), r(s(N), {
              key: 8,
              link: e.link,
              class: "w-full h-full"
            }, {
              default: $(() => d[3] || (d[3] = [
                A("-")
              ])),
              _: 1
            }, 8, ["link"]))
          ]),
          e.isCopy && f.value ? (t(), r(s(se), {
            key: 0,
            value: (m = e.content) != null && m.title ? `${e.content.title}${e.content.description && l.addDescriptionToCopyClipboard ? `,${e.content.description}` : ""}` : e.data,
            "tooltip-options": {
              transitionName: "copy"
            }
          }, {
            default: $(() => [
              H(s(I), {
                class: "cursor-pointer w-5 h-5 group-hover/row:opacity-100 md:opacity-0 ml-2",
                name: "copy"
              })
            ]),
            _: 1
          }, 8, ["value"])) : p("", !0)
        ], 34))
      ], 2);
    };
  }
}, ue = ["href"], de = { key: 2 }, fe = { class: "overflow-hidden text-ellipsis text-oc-text-400 text-sm truncate" }, ye = { key: 0 }, Z = {
  __name: "OcTableCellContent",
  props: {
    important: Boolean,
    title: String,
    description: String,
    href: String,
    link: String
  },
  setup(e) {
    return (n, l) => (t(), r(s(N), {
      link: e.href ? "" : e.link,
      class: "flex flex-col gap-y-1 whitespace-nowrap overflow-hidden w-full"
    }, {
      default: $(() => [
        b("span", {
          class: y(["overflow-hidden text-ellipsis text-oc-text truncate", e.important ? "font-medium" : "font-regular"])
        }, [
          e.href ? (t(), a("a", {
            key: 0,
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, T(e.title), 9, ue)) : (t(), a(w, { key: 1 }, [
            A(T(e.title), 1)
          ], 64)),
          e.title ? p("", !0) : (t(), a("span", de, "-"))
        ], 2),
        b("span", fe, [
          g(n.$slots, "description", { description: e.description }, () => [
            A(T(e.description), 1)
          ]),
          e.description ? p("", !0) : (t(), a("span", ye, "-"))
        ])
      ]),
      _: 3
    }, 8, ["link"]));
  }
}, me = { key: 0 }, ve = ["href"], N = {
  __name: "OcTableLink",
  props: {
    link: String
  },
  setup(e) {
    return (n, l) => e.link ? (t(), a("a", {
      key: 1,
      href: e.link,
      style: { "'pointer-events": "none'" },
      onClick: l[0] || (l[0] = ae(() => {
      }, ["prevent"]))
    }, [
      g(n.$slots, "default")
    ], 8, ve)) : (t(), a("div", me, [
      g(n.$slots, "default")
    ]));
  }
}, ke = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, ge = { class: "truncate" }, we = { class: "py-1 px-2" }, D = /* @__PURE__ */ Y({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = j(!1), l = j("0"), f = j(), x = j(), h = S(
      () => {
        var d;
        return (d = x.value) == null ? void 0 : d.map((m) => m.scrollWidth > m.clientWidth);
      }
    ), u = () => {
      n.value = !n.value, n.value ? l.value = `${f.value.scrollHeight}px` : l.value = "0";
    };
    return (d, m) => {
      var k, K;
      return t(), a(w, null, [
        b("div", {
          class: y(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          b("div", {
            class: "w-9",
            onClick: u
          }, [
            (k = e.row.children) != null && k.length ? (t(), r(s(I), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: y(["mx-auto transition-all duration-500", n.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : p("", !0)
          ]),
          e.isAlternative ? (t(!0), a(w, { key: 1 }, C(e.headers, (v, M) => {
            var P;
            return t(), a("div", {
              key: v.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: x,
              class: y(["flex-1 truncate px-4", v.itemClasses])
            }, [
              e.isLoading ? (t(), r(s(F), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : g(d.$slots, v.key, {
                key: 1,
                data: (P = e.row) == null ? void 0 : P[v == null ? void 0 : v.key],
                item: e.row
              }, () => {
                var B, O;
                return [
                  (B = h.value) != null && B[M] ? (t(), r(s(J), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: $(() => {
                      var R;
                      return [
                        b("div", we, T((R = e.row) == null ? void 0 : R[v == null ? void 0 : v.key]), 1)
                      ];
                    }),
                    default: $(() => {
                      var R;
                      return [
                        b("div", ge, T((R = e.row) == null ? void 0 : R[v == null ? void 0 : v.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(w, { key: 1 }, [
                    A(T((O = e.row) == null ? void 0 : O[v == null ? void 0 : v.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(w, { key: 0 }, [
            b("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: U(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              A(T(e.row.label) + " ", 1),
              H(s(J), null, {
                popper: $(() => [
                  b("div", ke, T(e.row.infoText), 1)
                ]),
                default: $(() => [
                  e.row.infoText ? (t(), r(s(I), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : p("", !0)
                ]),
                _: 1
              })
            ], 4),
            b("div", {
              class: y(["flex-1 truncate", e.row.itemClasses])
            }, [
              g(d.$slots, e.row.key, { value: e.value }, () => [
                A(T(e.value), 1)
              ])
            ], 2)
          ], 64)),
          m[0] || (m[0] = b("div", { class: "w-9" }, null, -1))
        ], 2),
        (K = e.row.children) != null && K.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: f,
          class: "transition-all overflow-hidden duration-500",
          style: U({ maxHeight: l.value })
        }, [
          (t(!0), a(w, null, C(e.row.children, (v, M) => (t(), r(s(D), {
            key: M,
            row: v,
            important: v.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[v.key],
            depth: e.depth + 1
          }, X({ _: 2 }, [
            C(d.$slots, (P, B) => ({
              name: B,
              fn: $((O) => [
                g(d.$slots, B, z({ ref_for: !0 }, O))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : p("", !0)
      ], 64);
    };
  }
}), xe = { class: "flex bg-oc-gray-50 border-b border-oc-text-200 h-[34px]" }, he = /* @__PURE__ */ Y({
  __name: "OcExpandingHeaderRow",
  props: {
    headers: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    return (n, l) => (t(), a("div", xe, [
      l[0] || (l[0] = b("div", { class: "w-9" }, null, -1)),
      (t(!0), a(w, null, C(e.headers, (f) => (t(), a("div", {
        key: f.key,
        class: y(["py-3 px-4 flex-1 uppercase text-xs text-oc-text-400 font-medium", f.class])
      }, T(f.label), 3))), 128)),
      l[1] || (l[1] = b("div", { class: "w-9" }, null, -1))
    ]));
  }
}), be = { class: "flex flex-col border rounded w-full border-oc-gray-200 overflow-hidden" }, ze = /* @__PURE__ */ Y({
  __name: "OcExpadingTable",
  props: {
    total: {
      type: Number,
      default: 0
    },
    headers: {
      type: Array,
      required: !0
    },
    fields: {
      type: Object,
      required: !0
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    loadingRows: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const n = e, l = S(() => Object.fromEntries(n.headers.map((f) => [f.key, ""])));
    return (f, x) => (t(), a("div", be, [
      e.isAlternative ? (t(), a(w, { key: 0 }, [
        H(he, { headers: e.headers }, null, 8, ["headers"]),
        e.isLoading && !e.fields.length ? (t(!0), a(w, { key: 0 }, C(e.loadingRows, (h) => (t(), r(D, {
          key: h,
          "is-loading": "",
          "is-alternative": e.isAlternative,
          row: l.value,
          headers: e.headers
        }, null, 8, ["is-alternative", "row", "headers"]))), 128)) : (t(!0), a(w, { key: 1 }, C(e.fields, (h, u) => (t(), r(D, {
          key: u,
          row: h,
          headers: e.headers,
          "is-loading": e.isLoading,
          "is-alternative": e.isAlternative,
          important: h.important
        }, X({ _: 2 }, [
          C(f.$slots, (d, m) => ({
            name: m,
            fn: $((k) => [
              g(f.$slots, m, z({ ref_for: !0 }, k))
            ])
          }))
        ]), 1032, ["row", "headers", "is-loading", "is-alternative", "important"]))), 128))
      ], 64)) : (t(!0), a(w, { key: 1 }, C(e.headers, (h, u) => (t(), r(D, {
        key: u,
        row: h,
        headers: e.headers,
        "is-loading": e.isLoading,
        "is-alternative": e.isAlternative,
        value: e.fields[h.key],
        important: h.important
      }, X({ _: 2 }, [
        C(f.$slots, (d, m) => ({
          name: m,
          fn: $((k) => [
            g(f.$slots, m, z({ ref_for: !0 }, k))
          ])
        }))
      ]), 1032, ["row", "headers", "is-loading", "is-alternative", "value", "important"]))), 128)),
      g(f.$slots, "total", {}, () => [
        H(D, {
          "is-total": "",
          headers: e.headers,
          row: { label: "Total" },
          value: e.total
        }, null, 8, ["headers", "value"])
      ])
    ]));
  }
});
export {
  Ve as _,
  ze as a,
  Q as b,
  V as c,
  Z as d,
  N as e,
  D as f,
  he as g
};
