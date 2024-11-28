import { defineComponent as Re, ref as j, onMounted as re, openBlock as r, createBlock as D, unref as i, withCtx as P, createElementVNode as U, createElementBlock as $, createVNode as B, mergeProps as ke, Fragment as J, renderList as ae, normalizeClass as te, toDisplayString as he, createCommentVNode as F, computed as A, createSlots as Me, renderSlot as Y, normalizeProps as xe, guardReactiveProps as we, withKeys as Ne, nextTick as qe } from "vue";
import { Dropdown as Se, Icon as $e, Checkbox as ze, Button as W, Table as He, Tabs as Ge, Pagination as Je, PrevNext as Oe, Select as We, Input as Xe, TableHeader as Ze, Chip as se, FormBuilder as _e } from "@orchidui/vue-core";
import oe from "dayjs";
import { VueDraggableNext as Fe } from "vue-draggable-next";
import { getFromLocalStorage as je, formatHeadersFromLocalStorage as Ve, formatHeadersToLocalStorage as el, setInLocalStorage as ll } from "./Builder/DataTable/utils/editColumnsUtils.js";
const al = { class: "p-5 gap-y-4 text-sm flex w-[250px] flex-col" }, tl = {
  key: 0,
  class: "gap-y-2 flex flex-col border-b pb-3 border-oc-gray-200"
}, sl = { class: "gap-y-2 flex flex-col" }, ol = {
  key: 0,
  class: "flex items-center bg-white justify-between h-[26px]"
}, rl = { class: "flex items-center w-full gap-x-3" }, ul = { class: "truncate w-full max-w-[160px]" }, nl = /* @__PURE__ */ Re({
  __name: "ColumnEdit",
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    headers: {
      type: Array,
      default: () => []
    },
    localKey: {
      type: String,
      default: ""
    }
  },
  emits: ["change-active", "onMoved", "update-order"],
  setup(y, { emit: T }) {
    const g = T, c = y, s = j([]), v = j([]), p = j(!1), n = (a = !1) => {
      v.value = v.value.map((f) => ({
        ...f,
        isActive: !0
      })), g("update-order", {
        fixedHeaders: v.value,
        activeHeaders: s.value,
        isOnMount: a
      });
    }, o = {
      handle: ".drag-el",
      filter: ".is-disabled",
      group: "headers",
      animation: 500,
      forceFallback: !1,
      move: (a) => a.to.dataset.activeHeaders ? !0 : !!a.draggedContext.futureIndex,
      "onUpdate:modelValue": () => n()
    };
    return re(() => {
      const a = je(c.localKey), { fixed: f, active: x } = Ve(a, c.headers, c.localKey);
      v.value = f || c.headers.slice(0, 1), s.value = x || c.headers.slice(1).map((S) => {
        var m, k, C;
        return {
          ...S,
          isActive: ((C = (k = (m = c.options) == null ? void 0 : m.active) == null ? void 0 : k.find((G) => G.key === S.key)) == null ? void 0 : C.isActive) ?? !0
        };
      }), n(!0);
    }), (a, f) => (r(), D(i(Se), {
      modelValue: p.value,
      "onUpdate:modelValue": f[3] || (f[3] = (x) => p.value = x),
      class: "h-[36px]",
      "is-attach-to-body": ""
    }, {
      menu: P(() => [
        U("div", al, [
          v.value.length ? (r(), $("div", tl, [
            f[4] || (f[4] = U("span", { class: "text-oc-text-400 font-medium" }, "Fixed columns", -1)),
            B(i(Fe), ke({
              key: "key",
              modelValue: v.value,
              "onUpdate:modelValue": f[0] || (f[0] = (x) => v.value = x)
            }, o), {
              default: P(() => [
                (r(!0), $(J, null, ae(v.value, (x, S) => (r(), $("div", {
                  key: x.key,
                  class: te(["flex items-center justify-between h-[26px]", S ? "" : "is-disabled"])
                }, [
                  U("span", null, he(x.label), 1),
                  S ? (r(), D(i($e), {
                    key: 0,
                    width: "18",
                    height: "18",
                    class: "text-oc-text-400 drag-el cursor-move",
                    name: "draggable"
                  })) : F("", !0)
                ], 2))), 128))
              ]),
              _: 1
            }, 16, ["modelValue"])
          ])) : F("", !0),
          U("div", sl, [
            f[5] || (f[5] = U("span", { class: "text-oc-text-400 font-medium" }, "Active columns", -1)),
            B(i(Fe), ke({
              key: "key",
              modelValue: s.value,
              "onUpdate:modelValue": f[2] || (f[2] = (x) => s.value = x)
            }, o, { "data-active-headers": "true" }), {
              default: P(() => [
                (r(!0), $(J, null, ae(s.value, (x) => (r(), $(J, {
                  key: x.key
                }, [
                  x.key !== "actions" ? (r(), $("div", ol, [
                    U("div", rl, [
                      B(i(ze), {
                        modelValue: x.isActive,
                        "onUpdate:modelValue": [
                          (S) => x.isActive = S,
                          f[1] || (f[1] = (S) => n())
                        ],
                        class: "!w-fit"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      U("div", ul, he(x.label), 1)
                    ]),
                    s.value.length > 1 ? (r(), D(i($e), {
                      key: 0,
                      width: "18",
                      height: "18",
                      class: "text-oc-text-400 drag-el cursor-move",
                      name: "draggable"
                    })) : F("", !0)
                  ])) : F("", !0)
                ], 64))), 128))
              ]),
              _: 1
            }, 16, ["modelValue"])
          ])
        ])
      ]),
      default: P(() => [
        B(i(W), {
          label: "Edit Column",
          "left-icon": "setting",
          variant: "secondary"
        })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), il = { class: "flex flex-col gap-9 relative" }, dl = {
  key: 0,
  class: "flex items-center px-4 min-h-[52px]"
}, vl = {
  key: 0,
  class: "flex gap-5 items-center absolute left-5"
}, cl = {
  key: 1,
  class: "flex gap-3 absolute left-5"
}, pl = {
  key: 1,
  class: "flex w-full gap-5 md:justify-start justify-center"
}, fl = {
  key: 2,
  class: "hidden md:flex items-center"
}, Vl = {
  __name: "OcDataTable",
  props: {
    isLoading: Boolean,
    id: {
      type: String,
      required: !0
    },
    options: {
      type: Object,
      required: !0
    },
    filter: {
      type: Object,
      required: !0
    },
    selected: {
      type: Array,
      required: !1
    },
    rowClass: String,
    rowKey: {
      type: String,
      Function,
      default: "id"
    },
    rowLink: String
  },
  emits: {
    "update:selected": [],
    "update:filter": [],
    "click:row": [],
    "filter-fields-changed": [],
    "filter-removed": [],
    "search-query-changed": [],
    "hover:cell": []
  },
  setup(y, { emit: T }) {
    var ie, de, ve, ce, pe, fe, me, ye, ge;
    const g = y, c = T, s = A(() => {
      var l;
      return (l = g.options) == null ? void 0 : l.pagination;
    }), v = A(() => {
      var l;
      return (l = g.options) == null ? void 0 : l.cursor;
    }), p = j(), n = A(() => {
      var l;
      return (l = g.options) == null ? void 0 : l.tableOptions;
    }), o = A(() => {
      var l;
      return {
        ...n.value,
        headers: p.value ? p.value.filter((e) => ne(e.key)) : (l = n.value) == null ? void 0 : l.headers.filter((e) => ne(e.key))
      };
    }), a = A(() => {
      var l;
      return (l = g.options) == null ? void 0 : l.filterOptions;
    }), f = A(() => {
      var l;
      return (l = g.options) == null ? void 0 : l.hidePerPageDropdown;
    }), x = A(() => {
      var l;
      return ((l = s.value) == null ? void 0 : l.last_page) === 1;
    }), S = j(!1), m = j(g.filter[(de = (ie = a.value) == null ? void 0 : ie.tabs) == null ? void 0 : de.key]), k = j(g.filter.page), C = j(
      (ce = (ve = a.value) == null ? void 0 : ve.per_page) != null && ce.key ? g.filter[(fe = (pe = a.value) == null ? void 0 : pe.per_page) == null ? void 0 : fe.key] : g.filter.per_page
    ), G = ((ge = g.filter[(ye = (me = a.value) == null ? void 0 : me.search) == null ? void 0 : ye.key]) == null ? void 0 : ge.trim()) ?? "", M = j(G ? G.split(",") : []), ue = j(!1), Ee = A(
      () => {
        var l, e;
        return (e = (l = g.options) == null ? void 0 : l.perPageOptions) == null ? void 0 : e.map(
          (d) => ({
            label: `${d}`,
            value: d
          })
        );
      }
    ), Ce = A(() => {
      let l = [
        {
          label: "10",
          value: 10
        },
        {
          label: "15",
          value: 15
        },
        {
          label: "20",
          value: 20
        },
        {
          label: "25",
          value: 25
        },
        {
          label: "40",
          value: 40
        },
        {
          label: "50",
          value: 50
        },
        {
          label: "75",
          value: 75
        },
        {
          label: "99",
          value: 99
        }
      ], e = Ee.value ?? l;
      if (s.value) {
        const d = s.value.total < 100 ? s.value.total : 100;
        d > 10 && (e = e.filter((h) => h.value <= d));
      }
      return [...new Set(e)];
    }), Ae = A(() => {
      var l;
      return ((l = g.selected) == null ? void 0 : l.length) > 0;
    }), De = (l) => {
      !l.trim() || M.value.includes(l) || (a.value ? M.value.push(l) : M.value = [l], I(), c("search-query-changed", l));
    }, Pe = (l) => {
      M.value = M.value.filter((e) => e !== l), I();
    }, z = g.filter;
    !z && s ? z.page = 1 : !z && v && (z.cursor = "");
    const u = j(z), Be = () => {
      var e, d, h, O, w, t, V, K;
      M.value = [];
      const l = {};
      a.value ? z.page = 1 : z.cursor = "", (d = (e = a.value) == null ? void 0 : e.per_page) != null && d.key ? l[(O = (h = a.value) == null ? void 0 : h.per_page) == null ? void 0 : O.key] = C.value : l.per_page = C.value, (t = (w = a.value) == null ? void 0 : w.tabs) != null && t.key ? l[(K = (V = a.value) == null ? void 0 : V.tabs) == null ? void 0 : K.key] = m.value : l.tabs = m.value, u.value = l, I();
    }, Ke = () => {
      I(null, k.value);
    }, I = (l = null, e = !1, d = "") => {
      var h, O, w;
      s.value && !e && (k.value = 1), s.value ? u.value.page = k.value : u.value.cursor = d, (h = a.value) != null && h.per_page ? u.value[a.value.per_page.key] = C.value : u.value.per_page = C.value, (O = a.value) != null && O.tabs && (u.value[a.value.tabs.key] = m.value), (w = a.value) != null && w.search && (u.value[a.value.search.key] = M.value.join()), l && (S.value = !1, u.value = { ...u.value, ...l }, Object.keys(u.value).forEach((t) => {
        Array.isArray(u.value[t]) && u.value[t].length === 0 && delete u.value[t];
      })), c("update:filter", u.value);
    }, Ue = (l, e) => {
      I(l), c("filter-removed", e);
    }, Le = (l) => {
      let e = [];
      return l.forEach((d) => {
        e.push(d.key);
      }), e;
    }, Ye = A(() => {
      if (u.value) {
        let l = [];
        return Object.keys(u.value).forEach((e) => {
          var w, t, V, K, H, N, X, Z, _, ee, le;
          let d = (t = (w = a.value) == null ? void 0 : w.tabs) == null ? void 0 : t.key;
          const h = (K = (V = a.value) == null ? void 0 : V.search) == null ? void 0 : K.key, O = ((N = (H = a.value) == null ? void 0 : H.per_page) == null ? void 0 : N.key) ?? "per_page";
          if ((X = a.value.form) == null || X.find((E) => {
            E.name === d && (d = "");
          }), e !== "page" && e !== "cursor" && e !== O && e !== d && e !== h) {
            let E = null, b = (Z = a.value.form) == null ? void 0 : Z.find((R) => {
              if (typeof R.name == "object") {
                let Q = !1;
                return R.name.forEach((q) => {
                  q.key === e && (Q = !0, E = Le(R.name));
                }), Q;
              } else
                return R.name === e;
            }), L = "";
            if (b && u.value[e]) {
              if (typeof b.name == "object" ? (_ = b.name) == null || _.forEach((Q) => {
                L && (L += " - "), L += u.value[Q.key];
              }) : L = u.value[e], b.props.options && (L = (b.props.multiple ? u.value[e] : [u.value[e]]).map(
                (q) => {
                  var be;
                  return (be = b.props.options.find(({ value: Te }) => Te === q)) == null ? void 0 : be.label;
                }
              ).join(", ")), b.type === "RangeInput" && Array.isArray(u.value[e]) && (L = u.value[e][0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " - " + u.value[e][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), b.type === "DatePicker")
                if (((ee = b == null ? void 0 : b.props) == null ? void 0 : ee.type) === "range" && b.name && b.name[1]) {
                  const Q = oe(u.value[b.name[0].key]).format("MM/DD/YYYY"), q = oe(u.value[b.name[1].key]).format("MM/DD/YYYY");
                  L = Q === q ? Q : Q + " - " + q;
                } else L = oe(u.value[b.name]).format("MM/DD/YYYY");
              let R = `${(le = b == null ? void 0 : b.props) == null ? void 0 : le.label} : ${L}`;
              b && b.name && typeof b.name == "object" && l.find((q) => q.name === E[0]) && (R = ""), l.push({
                label: R,
                name: e,
                multiNames: E
              });
            }
          }
        }), l;
      }
      return [];
    }), ne = (l) => {
      var e, d, h, O, w, t;
      return ((t = (w = (O = (h = u.value) == null ? void 0 : h[(d = (e = a.value) == null ? void 0 : e.columnEdit) == null ? void 0 : d.key]) == null ? void 0 : O.active) == null ? void 0 : w.find((V) => V.key === l)) == null ? void 0 : t.isActive) ?? !0;
    }, Ie = ({ fixedHeaders: l, activeHeaders: e, isOnMount: d }) => {
      var h, O, w, t;
      if (u.value[(O = (h = a.value) == null ? void 0 : h.columnEdit) == null ? void 0 : O.key].fixed = l, u.value[(t = (w = a.value) == null ? void 0 : w.columnEdit) == null ? void 0 : t.key].active = e, p.value = [...l, ...e], !d) {
        const V = el(l, e);
        ll(a.value.columnEdit.localStorageKey, V);
      }
    }, Qe = () => {
      var l, e, d, h, O, w;
      if ((e = (l = a.value) == null ? void 0 : l.columnEdit) != null && e.localStorageKey) {
        const t = je(a.value.columnEdit.localStorageKey);
        if (t) {
          const { fixed: V, active: K } = Ve(
            t,
            n.value.headers,
            a.value.columnEdit.localStorageKey
          );
          u.value[(h = (d = a.value) == null ? void 0 : d.columnEdit) == null ? void 0 : h.key].fixed = V, u.value[(w = (O = a.value) == null ? void 0 : O.columnEdit) == null ? void 0 : w.key].active = K, p.value = [...V, ...K];
        }
      }
    };
    return re(() => {
      Qe();
    }), (l, e) => {
      var d, h, O, w;
      return r(), $("div", il, [
        n.value ? (r(), D(i(He), {
          key: 0,
          selected: y.selected,
          "row-key": y.rowKey,
          options: o.value,
          "is-loading": y.isLoading,
          "loading-rows": C.value,
          "row-class": y.rowClass,
          "row-link": y.rowLink,
          "is-sticky": n.value.isSticky,
          "is-borderless": n.value.isBorderless,
          "onUpdate:selected": e[7] || (e[7] = (t) => l.$emit("update:selected", t)),
          "onClick:row": e[8] || (e[8] = (t) => l.$emit("click:row", t)),
          "onHover:cell": e[9] || (e[9] = (t) => l.$emit("hover:cell", t))
        }, Me({
          after: P(() => [
            Y(l.$slots, "after")
          ]),
          empty: P(() => [
            Y(l.$slots, "empty")
          ]),
          "table-header": P((t) => [
            Y(l.$slots, "table-header", xe(we(t)))
          ]),
          "table-body": P((t) => [
            Y(l.$slots, "table-body", xe(we(t)))
          ]),
          _: 2
        }, [
          l.$slots.before || (d = a.value) != null && d.search || (h = a.value) != null && h.form || (O = a.value) != null && O.tabs ? {
            name: "before",
            fn: P(() => {
              var t, V, K, H;
              return [
                Y(l.$slots, "before"),
                (t = a.value) != null && t.search || (V = a.value) != null && V.form || (K = a.value) != null && K.tabs ? (r(), $("div", dl, [
                  Ae.value ? (r(), $("div", vl, [
                    Y(l.$slots, "bulk-actions", { selectedRows: y.selected })
                  ])) : (r(), $("div", cl, [
                    (H = a.value) != null && H.tabs ? (r(), D(i(Ge), {
                      key: 0,
                      modelValue: m.value,
                      "onUpdate:modelValue": [
                        e[0] || (e[0] = (N) => m.value = N),
                        e[1] || (e[1] = (N) => I(null))
                      ],
                      tabs: a.value.tabs.options,
                      variant: "pills"
                    }, null, 8, ["modelValue", "tabs"])) : F("", !0)
                  ])),
                  Y(l.$slots, "filter-options", {}, () => {
                    var N, X, Z, _, ee, le;
                    return [
                      (N = a.value) != null && N.search || (X = a.value) != null && X.form || (Z = a.value) != null && Z.columnEdit ? (r(), $("div", {
                        key: 0,
                        class: te([
                          "flex gap-3 absolute ml-auto bg-oc-bg-light right-4 max-w-[calc(100%-24px)]",
                          a.value ? ue.value ? "md:w-fit w-full" : "" : "w-full justify-end"
                        ])
                      }, [
                        (_ = a.value) != null && _.search ? (r(), D(i(yl), {
                          key: 0,
                          "is-search-only": !a.value.tabs || a.value.isSearchOnly,
                          onAddQuery: De,
                          onToggle: e[2] || (e[2] = (E) => ue.value = E)
                        }, null, 8, ["is-search-only"])) : F("", !0),
                        (ee = a.value) != null && ee.form ? (r(), D(i(Se), {
                          key: 1,
                          modelValue: S.value,
                          "onUpdate:modelValue": e[6] || (e[6] = (E) => S.value = E),
                          distance: 9,
                          placement: "bottom-end",
                          "is-attach-to-body": ""
                        }, {
                          menu: P(() => [
                            S.value ? (r(), D(i(wl), {
                              key: 0,
                              id: y.id,
                              "json-form": a.value.form ?? [],
                              grid: a.value.grid ?? null,
                              values: g.filter,
                              actions: a.value.actions,
                              onApplyFilter: e[3] || (e[3] = (E) => I(E)),
                              onFilterFieldsChanged: e[4] || (e[4] = (E) => c("filter-fields-changed", E)),
                              onCancel: e[5] || (e[5] = (E) => S.value = !1)
                            }, {
                              default: P(({ errors: E, values: b, jsonForm: L, updateForm: R }) => [
                                Y(l.$slots, "custom-filter-form", {
                                  errors: E,
                                  values: b,
                                  jsonForm: L,
                                  updateFilter: R
                                })
                              ]),
                              _: 3
                            }, 8, ["id", "json-form", "grid", "values", "actions"])) : F("", !0)
                          ]),
                          default: P(() => [
                            B(i(W), {
                              "is-active": S.value,
                              variant: "secondary",
                              "left-icon": "filter"
                            }, null, 8, ["is-active"])
                          ]),
                          _: 3
                        }, 8, ["modelValue"])) : F("", !0),
                        a.value.columnEdit ? (r(), D(nl, {
                          key: 2,
                          options: u.value.columnEdit,
                          headers: ((le = n.value) == null ? void 0 : le.headers) || [],
                          "local-key": a.value.columnEdit.localStorageKey,
                          onUpdateOrder: Ie
                        }, null, 8, ["options", "headers", "local-key"])) : F("", !0)
                      ], 2)) : F("", !0)
                    ];
                  })
                ])) : F("", !0),
                B(i(bl), {
                  filters: Ye.value,
                  queries: M.value,
                  class: "border-t border-oc-gray-200",
                  onRemoveQuery: Pe,
                  onRemoveAll: Be,
                  onRemoveFilter: Ue
                }, null, 8, ["filters", "queries"])
              ];
            }),
            key: "0"
          } : void 0,
          ae((w = n.value) == null ? void 0 : w.headers, (t, V) => ({
            name: t.key,
            fn: P(({ data: K, item: H }) => [
              Y(l.$slots, t.key, {
                data: K,
                item: H
              })
            ])
          }))
        ]), 1032, ["selected", "row-key", "options", "is-loading", "loading-rows", "row-class", "row-link", "is-sticky", "is-borderless"])) : F("", !0),
        Y(l.$slots, "before-pagination"),
        s.value || v.value ? (r(), $("div", {
          key: 1,
          class: te(["flex gap-3 items-center", s.value && s.value.last_page === 1 ? "justify-end" : ""])
        }, [
          s.value && !x.value ? (r(), D(i(Je), {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": [
              e[10] || (e[10] = (t) => k.value = t),
              Ke
            ],
            class: "justify-center",
            "max-page": s.value.last_page,
            strategy: s.value.strategy,
            "total-visible": "5"
          }, null, 8, ["modelValue", "max-page", "strategy"])) : F("", !0),
          v.value ? (r(), $("div", pl, [
            B(i(Oe), {
              disabled: !v.value.prev,
              onClick: e[11] || (e[11] = (t) => v.value.prev ? I(null, !1, v.value.prev) : null)
            }, null, 8, ["disabled"]),
            B(i(Oe), {
              disabled: !v.value.next,
              "is-next": "",
              onClick: e[12] || (e[12] = (t) => v.value.next ? I(null, !1, v.value.next) : null)
            }, null, 8, ["disabled"])
          ])) : F("", !0),
          f.value ? F("", !0) : (r(), $("div", fl, [
            B(i(We), {
              modelValue: C.value,
              "onUpdate:modelValue": [
                e[13] || (e[13] = (t) => C.value = t),
                e[14] || (e[14] = (t) => I(null))
              ],
              label: "Item per page",
              "is-inline-label": "",
              "popper-options": { placement: "auto" },
              options: Ce.value
            }, null, 8, ["modelValue", "options"])
          ]))
        ], 2)) : F("", !0)
      ]);
    };
  }
}, ml = { class: "flex gap-x-4" }, yl = {
  __name: "OcFilterSearch",
  props: {
    isSearchOnly: Boolean
  },
  emits: {
    addQuery: [],
    toggle: []
  },
  setup(y, { emit: T }) {
    const g = T, c = j(!1), s = j(""), v = j(), p = async () => {
      c.value = !0, g("toggle", c), await qe(), v.value.focus();
    };
    return (n, o) => (r(), $(J, null, [
      U("div", {
        class: te(["w-full", c.value || y.isSearchOnly ? "" : "absolute max-w-0 overflow-hidden"])
      }, [
        U("div", ml, [
          B(i(Xe), {
            ref_key: "searchInput",
            ref: v,
            modelValue: s.value,
            "onUpdate:modelValue": o[0] || (o[0] = (a) => s.value = a),
            placeholder: "Search something here",
            class: "md:min-w-[310px]",
            icon: "search",
            onKeyup: o[1] || (o[1] = Ne(
              () => {
                n.$emit("addQuery", s.value), s.value = "";
              },
              ["enter"]
            ))
          }, null, 8, ["modelValue"]),
          y.isSearchOnly ? (r(), D(i(W), {
            key: 0,
            label: "Search",
            variant: "secondary",
            class: "shrink-0",
            onClick: o[2] || (o[2] = () => {
              n.$emit("addQuery", s.value), s.value = "";
            })
          })) : (r(), $("span", {
            key: 1,
            class: "py-3 text-base cursor-pointer flex normal-case items-center font-medium text-oc-text-400",
            onClick: o[3] || (o[3] = () => {
              c.value = !1, n.$emit("toggle", c.value), s.value = "";
            })
          }, " Clear "))
        ])
      ], 2),
      y.isSearchOnly ? F("", !0) : (r(), $("div", {
        key: 0,
        class: te(c.value ? "max-w-0 overflow-hidden" : "")
      }, [
        c.value ? F("", !0) : (r(), D(i(W), {
          key: 0,
          variant: "secondary",
          "left-icon": "search",
          onClick: p
        }))
      ], 2))
    ], 64));
  }
}, gl = { class: "flex gap-1 items-center normal-case flex-wrap" }, bl = {
  __name: "OcFilterSearchFor",
  props: {
    filters: Object,
    queries: Object
  },
  emits: {
    removeQuery: [],
    removeFilter: [],
    removeAll: []
  },
  setup(y, { emit: T }) {
    const g = y, c = T, s = A(() => {
      var n;
      let p = [];
      return (n = g.filters) == null || n.forEach((o) => {
        if (o.multiNames) {
          const a = p.find((f) => f.name === o.multiNames[0]);
          a ? a.label = a.label + o.label : p.push(o);
        } else
          p.push(o);
      }), p;
    }), v = (p, n) => {
      let o = {};
      o[p] = "", n ? n.forEach((a) => {
        let f = {};
        f[a] = "", c("removeFilter", f, a);
      }) : c("removeFilter", o, p);
    };
    return (p, n) => s.value.length > 0 || y.queries.length > 0 ? (r(), D(i(Ze), {
      key: 0,
      class: "!w-full !justify-start !bg-oc-bg-light"
    }, {
      default: P(() => [
        U("div", gl, [
          n[1] || (n[1] = U("span", { class: "pr-2 text-sm font-medium text-oc-text" }, "Search for:", -1)),
          (r(!0), $(J, null, ae(y.queries, (o) => (r(), D(i(se), {
            key: o,
            variant: "accent-1",
            closable: "",
            label: o,
            onRemove: (a) => p.$emit("removeQuery", o)
          }, null, 8, ["label", "onRemove"]))), 128)),
          (r(!0), $(J, null, ae(s.value, (o) => (r(), D(i(se), {
            key: o.name,
            variant: "accent-1",
            closable: "",
            label: o.label,
            onRemove: (a) => v(o.name, o.multiNames)
          }, null, 8, ["label", "onRemove"]))), 128)),
          B(i(se), {
            variant: "gray",
            class: "cursor-pointer",
            label: "Clear all",
            onClick: n[0] || (n[0] = (o) => p.$emit("removeAll"))
          })
        ])
      ]),
      _: 1
    })) : F("", !0);
  }
}, kl = { class: "flex w-[326px] flex-col gap-y-5" }, hl = { class: "max-h-[500px] overflow-y-auto p-5" }, xl = { class: "flex gap-x-5 px-5 pb-5" }, wl = {
  __name: "OcFilterForm",
  props: {
    id: {
      type: String,
      required: !0
    },
    jsonForm: {
      type: Array
    },
    values: {
      type: Object
    },
    actions: {
      type: Object
    },
    grid: {
      type: Object,
      default: null
    }
  },
  emits: ["applyFilter", "cancel", "filter-fields-changed"],
  setup(y, { emit: T }) {
    const g = y, c = T, s = j({}), v = j({}), p = j([]), n = (m) => {
      p.value.findIndex((C) => C === m) >= 0 || p.value.push(m);
    }, o = (m, k = null) => {
      typeof m.name == "object" ? m.name.forEach((C, G) => {
        s.value[C.key] = k[G];
      }) : s.value[m.name] = k, n(m.name);
    }, a = A(() => Object.values(s.value).length > 0), f = A(() => {
      var m, k;
      return ((k = (m = g.actions) == null ? void 0 : m.applyButton) == null ? void 0 : k.label) || "Apply";
    }), x = A(() => {
      var m, k;
      return ((k = (m = g.actions) == null ? void 0 : m.cancelButton) == null ? void 0 : k.label) || "Cancel";
    });
    re(() => {
      s.value = { ...g.values };
    });
    const S = () => {
      c("applyFilter", s.value), c("filter-fields-changed", p.value), p.value = [];
    };
    return (m, k) => (r(), $("div", kl, [
      Y(m.$slots, "default", {
        errors: v.value,
        values: s.value,
        jsonForm: y.jsonForm,
        updateForm: o
      }, () => [
        U("div", hl, [
          B(i(_e), {
            id: `filter-form-${y.id}`,
            class: "grid gap-5",
            errors: v.value,
            values: s.value,
            "json-form": y.jsonForm,
            grid: y.grid ?? null,
            onOnUpdate: o
          }, null, 8, ["id", "errors", "values", "json-form", "grid"])
        ])
      ]),
      U("div", xl, [
        B(i(W), {
          class: "w-full",
          variant: "secondary",
          label: x.value,
          onClick: k[0] || (k[0] = (C) => m.$emit("cancel"))
        }, null, 8, ["label"]),
        B(i(W), {
          class: "w-full",
          "is-disabled": !a.value,
          label: f.value,
          onClick: S
        }, null, 8, ["is-disabled", "label"])
      ])
    ]));
  }
};
export {
  Vl as _,
  yl as a,
  bl as b,
  wl as c
};
