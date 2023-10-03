import {
  d as g,
  o as a,
  c as i,
  r as u,
  n as C,
  a as x,
  t as L,
  _ as m,
  b as $,
  w as v,
  T as ce,
  e as f,
  u as De,
  i as Ee,
  f as ue,
  g as P,
  h as I,
  j as K,
  k as c,
  l as r,
  p as H,
  m as z,
  q as j,
  s as W,
  v as le,
  x as q,
  y as te,
  z as de,
  A as we,
  B as Fe,
  C as R,
  F as T,
  D as A,
  E as _e,
  G as Y,
  H as h,
  I as U,
  J as Le,
  K as se,
  L as Z,
  M as ne,
  N as Oe,
  O as Ge,
  P as Se,
  Q as Ue,
  R as je,
  S as ye,
  U as Ke,
  V as qe,
  W as Me,
  X as Ne,
  Y as Re,
  Z as We,
  $ as Ye,
  a0 as Je,
} from "./framework.7f6db421.js";
const Xe = g({
  __name: "VPBadge",
  props: { text: {}, type: { default: "tip" } },
  setup(s) {
    return (e, t) => (
      a(),
      i(
        "span",
        { class: C(["VPBadge", e.type]) },
        [u(e.$slots, "default", {}, () => [x(L(e.text), 1)], !0)],
        2,
      )
    );
  },
});
const Ze = m(Xe, [["__scopeId", "data-v-ea5b2908"]]),
  Qe = { key: 0, class: "VPBackdrop" },
  et = g({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(s) {
      return (e, t) => (
        a(),
        $(
          ce,
          { name: "fade" },
          {
            default: v(() => [e.show ? (a(), i("div", Qe)) : f("", !0)]),
            _: 1,
          },
        )
      );
    },
  });
const tt = m(et, [["__scopeId", "data-v-54a304ca"]]),
  V = De;
function st(s, e) {
  let t,
    n = !1;
  return () => {
    t && clearTimeout(t),
      n
        ? (t = setTimeout(s, e))
        : (s(), (n = !0) && setTimeout(() => (n = !1), e));
  };
}
function re(s) {
  return /^\//.test(s) ? s : `/${s}`;
}
function J(s) {
  if (Ee(s)) return s;
  const { site: e } = V(),
    { pathname: t, search: n, hash: o } = new URL(s, "http://a.com"),
    l =
      t.endsWith("/") || t.endsWith(".html")
        ? s
        : s.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${t.replace(
              /(\.md)?$/,
              e.value.cleanUrls ? "" : ".html",
            )}${n}${o}`,
          );
  return ue(l);
}
function X({ removeCurrent: s = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: n, page: o, theme: l } = V(),
    d = P(() => {
      var _, b;
      return {
        label: (_ = t.value.locales[n.value]) == null ? void 0 : _.label,
        link:
          ((b = t.value.locales[n.value]) == null ? void 0 : b.link) ||
          (n.value === "root" ? "/" : `/${n.value}/`),
      };
    });
  return {
    localeLinks: P(() =>
      Object.entries(t.value.locales).flatMap(([_, b]) =>
        s && d.value.label === b.label
          ? []
          : {
              text: b.label,
              link: nt(
                b.link || (_ === "root" ? "/" : `/${_}/`),
                l.value.i18nRouting !== !1 && e,
                o.value.relativePath.slice(d.value.link.length - 1),
                !t.value.cleanUrls,
              ),
            },
      ),
    ),
    currentLang: d,
  };
}
function nt(s, e, t, n) {
  return e
    ? s.replace(/\/$/, "") +
        re(
          t
            .replace(/(^|\/)index\.md$/, "$1")
            .replace(/\.md$/, n ? ".html" : ""),
        )
    : s;
}
const ot = (s) => (H("data-v-b9c0c15a"), (s = s()), z(), s),
  at = { class: "NotFound" },
  lt = { class: "code" },
  rt = { class: "title" },
  it = ot(() => c("div", { class: "divider" }, null, -1)),
  ct = { class: "quote" },
  ut = { class: "action" },
  dt = ["href", "aria-label"],
  _t = g({
    __name: "NotFound",
    setup(s) {
      const { site: e, theme: t } = V(),
        { localeLinks: n } = X({ removeCurrent: !1 }),
        o = I("/");
      return (
        K(() => {
          var d;
          const l = window.location.pathname
            .replace(e.value.base, "")
            .replace(/(^.*?\/).*$/, "/$1");
          n.value.length &&
            (o.value =
              ((d = n.value.find(({ link: p }) => p.startsWith(l))) == null
                ? void 0
                : d.link) || n.value[0].link);
        }),
        (l, d) => {
          var p, _, b, w, S;
          return (
            a(),
            i("div", at, [
              c(
                "p",
                lt,
                L(((p = r(t).notFound) == null ? void 0 : p.code) ?? "404"),
                1,
              ),
              c(
                "h1",
                rt,
                L(
                  ((_ = r(t).notFound) == null ? void 0 : _.title) ??
                    "PAGE NOT FOUND",
                ),
                1,
              ),
              it,
              c(
                "blockquote",
                ct,
                L(
                  ((b = r(t).notFound) == null ? void 0 : b.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              c("div", ut, [
                c(
                  "a",
                  {
                    class: "link",
                    href: r(ue)(o.value),
                    "aria-label":
                      ((w = r(t).notFound) == null ? void 0 : w.linkLabel) ??
                      "go to home",
                  },
                  L(
                    ((S = r(t).notFound) == null ? void 0 : S.linkText) ??
                      "Take me home",
                  ),
                  9,
                  dt,
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const vt = m(_t, [["__scopeId", "data-v-b9c0c15a"]]);
function Ie(s, e) {
  if (Array.isArray(s)) return Q(s);
  if (s == null) return [];
  e = re(e);
  const t = Object.keys(s)
      .sort((o, l) => l.split("/").length - o.split("/").length)
      .find((o) => e.startsWith(re(o))),
    n = t ? s[t] : [];
  return Array.isArray(n) ? Q(n) : Q(n.items, n.base);
}
function pt(s) {
  const e = [];
  let t = 0;
  for (const n in s) {
    const o = s[n];
    if (o.items) {
      t = e.push(o);
      continue;
    }
    e[t] || e.push({ items: [] }), e[t].items.push(o);
  }
  return e;
}
function ht(s) {
  const e = [];
  function t(n) {
    for (const o of n)
      o.text &&
        o.link &&
        e.push({ text: o.text, link: o.link, docFooterText: o.docFooterText }),
        o.items && t(o.items);
  }
  return t(s), e;
}
function ie(s, e) {
  return Array.isArray(e)
    ? e.some((t) => ie(s, t))
    : j(s, e.link)
    ? !0
    : e.items
    ? ie(s, e.items)
    : !1;
}
function Q(s, e) {
  return [...s].map((t) => {
    const n = { ...t },
      o = n.base || e;
    return (
      o && n.link && (n.link = o + n.link),
      n.items && (n.items = Q(n.items, o)),
      n
    );
  });
}
function F() {
  const { frontmatter: s, page: e, theme: t } = V(),
    n = le("(min-width: 960px)"),
    o = I(!1),
    l = P(() => {
      const N = t.value.sidebar,
        y = e.value.relativePath;
      return N ? Ie(N, y) : [];
    }),
    d = I(l.value);
  q(l, (N, y) => {
    JSON.stringify(N) !== JSON.stringify(y) && (d.value = l.value);
  });
  const p = P(
      () =>
        s.value.sidebar !== !1 &&
        d.value.length > 0 &&
        s.value.layout !== "home",
    ),
    _ = P(() =>
      b
        ? s.value.aside == null
          ? t.value.aside === "left"
          : s.value.aside === "left"
        : !1,
    ),
    b = P(() =>
      s.value.layout === "home"
        ? !1
        : s.value.aside != null
        ? !!s.value.aside
        : t.value.aside !== !1,
    ),
    w = P(() => p.value && n.value),
    S = P(() => (p.value ? pt(d.value) : []));
  function B() {
    o.value = !0;
  }
  function k() {
    o.value = !1;
  }
  function M() {
    o.value ? k() : B();
  }
  return {
    isOpen: o,
    sidebar: d,
    sidebarGroups: S,
    hasSidebar: p,
    hasAside: b,
    leftAside: _,
    isSidebarEnabled: w,
    open: B,
    close: k,
    toggle: M,
  };
}
function ft(s, e) {
  let t;
  te(() => {
    t = s.value ? document.activeElement : void 0;
  }),
    K(() => {
      window.addEventListener("keyup", n);
    }),
    de(() => {
      window.removeEventListener("keyup", n);
    });
  function n(o) {
    o.key === "Escape" && s.value && (e(), t == null || t.focus());
  }
}
const Te = I(W ? location.hash : "");
W &&
  window.addEventListener("hashchange", () => {
    Te.value = location.hash;
  });
function mt(s) {
  const { page: e } = V(),
    t = I(!1),
    n = P(() => s.value.collapsed != null),
    o = P(() => !!s.value.link),
    l = I(!1),
    d = () => {
      l.value = j(e.value.relativePath, s.value.link);
    };
  q([e, s, Te], d), K(d);
  const p = P(() =>
      l.value
        ? !0
        : s.value.items
        ? ie(e.value.relativePath, s.value.items)
        : !1,
    ),
    _ = P(() => !!(s.value.items && s.value.items.length));
  te(() => {
    t.value = !!(n.value && s.value.collapsed);
  }),
    we(() => {
      (l.value || p.value) && (t.value = !1);
    });
  function b() {
    n.value && (t.value = !t.value);
  }
  return {
    collapsed: t,
    collapsible: n,
    isLink: o,
    isActiveLink: l,
    hasActiveLink: p,
    hasChildren: _,
    toggle: b,
  };
}
function gt() {
  const { hasSidebar: s } = F(),
    e = le("(min-width: 960px)"),
    t = le("(min-width: 1280px)");
  return {
    isAsideEnabled: P(() =>
      !t.value && !e.value ? !1 : s.value ? t.value : e.value,
    ),
  };
}
const bt = 71;
function ve(s) {
  return (
    (typeof s.outline == "object" &&
      !Array.isArray(s.outline) &&
      s.outline.label) ||
    s.outlineTitle ||
    "On this page"
  );
}
function pe(s) {
  const e = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const n = Number(t.tagName[1]);
      return { title: $t(t), link: "#" + t.id, level: n };
    });
  return kt(e, s);
}
function $t(s) {
  let e = "";
  for (const t of s.childNodes)
    if (t.nodeType === 1) {
      if (
        t.classList.contains("VPBadge") ||
        t.classList.contains("header-anchor")
      )
        continue;
      e += t.textContent;
    } else t.nodeType === 3 && (e += t.textContent);
  return e.trim();
}
function kt(s, e) {
  if (e === !1) return [];
  const t = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2,
    [n, o] = typeof t == "number" ? [t, t] : t === "deep" ? [2, 6] : t;
  s = s.filter((d) => d.level >= n && d.level <= o);
  const l = [];
  e: for (let d = 0; d < s.length; d++) {
    const p = s[d];
    if (d === 0) l.push(p);
    else {
      for (let _ = d - 1; _ >= 0; _--) {
        const b = s[_];
        if (b.level < p.level) {
          (b.children || (b.children = [])).push(p);
          continue e;
        }
      }
      l.push(p);
    }
  }
  return l;
}
function yt(s, e) {
  const { isAsideEnabled: t } = gt(),
    n = st(l, 100);
  let o = null;
  K(() => {
    requestAnimationFrame(l), window.addEventListener("scroll", n);
  }),
    Fe(() => {
      d(location.hash);
    }),
    de(() => {
      window.removeEventListener("scroll", n);
    });
  function l() {
    if (!t.value) return;
    const p = [].slice.call(s.value.querySelectorAll(".outline-link")),
      _ = [].slice
        .call(document.querySelectorAll(".content .header-anchor"))
        .filter((k) =>
          p.some((M) => M.hash === k.hash && k.offsetParent !== null),
        ),
      b = window.scrollY,
      w = window.innerHeight,
      S = document.body.offsetHeight,
      B = Math.abs(b + w - S) < 1;
    if (_.length && B) {
      d(_[_.length - 1].hash);
      return;
    }
    for (let k = 0; k < _.length; k++) {
      const M = _[k],
        N = _[k + 1],
        [y, D] = Pt(k, M, N);
      if (y) {
        d(D);
        return;
      }
    }
  }
  function d(p) {
    o && o.classList.remove("active"),
      p == null
        ? (o = null)
        : (o = s.value.querySelector(`a[href="${decodeURIComponent(p)}"]`));
    const _ = o;
    _
      ? (_.classList.add("active"),
        (e.value.style.top = _.offsetTop + 33 + "px"),
        (e.value.style.opacity = "1"))
      : ((e.value.style.top = "33px"), (e.value.style.opacity = "0"));
  }
}
function Pe(s) {
  return s.parentElement.offsetTop - bt;
}
function Pt(s, e, t) {
  const n = window.scrollY;
  return s === 0 && n === 0
    ? [!0, null]
    : n < Pe(e)
    ? [!1, null]
    : !t || n < Pe(t)
    ? [!0, e.hash]
    : [!1, null];
}
const Vt = ["href", "title"],
  wt = g({
    __name: "VPDocOutlineItem",
    props: { headers: {}, root: { type: Boolean } },
    setup(s) {
      function e({ target: t }) {
        const n = t.href.split("#")[1],
          o = document.getElementById(decodeURIComponent(n));
        o == null || o.focus({ preventScroll: !0 });
      }
      return (t, n) => {
        const o = R("VPDocOutlineItem", !0);
        return (
          a(),
          i(
            "ul",
            { class: C(t.root ? "root" : "nested") },
            [
              (a(!0),
              i(
                T,
                null,
                A(
                  t.headers,
                  ({ children: l, link: d, title: p }) => (
                    a(),
                    i("li", null, [
                      c(
                        "a",
                        {
                          class: "outline-link",
                          href: d,
                          onClick: e,
                          title: p,
                        },
                        L(p),
                        9,
                        Vt,
                      ),
                      l != null && l.length
                        ? (a(),
                          $(o, { key: 0, headers: l }, null, 8, ["headers"]))
                        : f("", !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        );
      };
    },
  });
const he = m(wt, [["__scopeId", "data-v-463da30f"]]),
  Lt = (s) => (H("data-v-3a6c4994"), (s = s()), z(), s),
  St = { class: "content" },
  Mt = { class: "outline-title", role: "heading", "aria-level": "2" },
  Nt = { "aria-labelledby": "doc-outline-aria-label" },
  It = Lt(() =>
    c(
      "span",
      { class: "visually-hidden", id: "doc-outline-aria-label" },
      " Table of Contents for current page ",
      -1,
    ),
  ),
  Tt = g({
    __name: "VPDocAsideOutline",
    setup(s) {
      const { frontmatter: e, theme: t } = V(),
        n = _e([]);
      Y(() => {
        n.value = pe(e.value.outline ?? t.value.outline);
      });
      const o = I(),
        l = I();
      return (
        yt(o, l),
        (d, p) => (
          a(),
          i(
            "div",
            {
              class: C([
                "VPDocAsideOutline",
                { "has-outline": n.value.length > 0 },
              ]),
              ref_key: "container",
              ref: o,
              role: "navigation",
            },
            [
              c("div", St, [
                c(
                  "div",
                  { class: "outline-marker", ref_key: "marker", ref: l },
                  null,
                  512,
                ),
                c("div", Mt, L(r(ve)(r(t))), 1),
                c("nav", Nt, [
                  It,
                  h(he, { headers: n.value, root: !0 }, null, 8, ["headers"]),
                ]),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const Ct = m(Tt, [["__scopeId", "data-v-3a6c4994"]]),
  Bt = { class: "VPDocAsideCarbonAds" },
  At = g({
    __name: "VPDocAsideCarbonAds",
    props: { carbonAds: {} },
    setup(s) {
      const e = () => null;
      return (t, n) => (
        a(),
        i("div", Bt, [
          h(r(e), { "carbon-ads": t.carbonAds }, null, 8, ["carbon-ads"]),
        ])
      );
    },
  }),
  xt = (s) => (H("data-v-cb998dce"), (s = s()), z(), s),
  Ht = { class: "VPDocAside" },
  zt = xt(() => c("div", { class: "spacer" }, null, -1)),
  Dt = g({
    __name: "VPDocAside",
    setup(s) {
      const { theme: e } = V();
      return (t, n) => (
        a(),
        i("div", Ht, [
          u(t.$slots, "aside-top", {}, void 0, !0),
          u(t.$slots, "aside-outline-before", {}, void 0, !0),
          h(Ct),
          u(t.$slots, "aside-outline-after", {}, void 0, !0),
          zt,
          u(t.$slots, "aside-ads-before", {}, void 0, !0),
          r(e).carbonAds
            ? (a(),
              $(At, { key: 0, "carbon-ads": r(e).carbonAds }, null, 8, [
                "carbon-ads",
              ]))
            : f("", !0),
          u(t.$slots, "aside-ads-after", {}, void 0, !0),
          u(t.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  });
const Et = m(Dt, [["__scopeId", "data-v-cb998dce"]]);
function Ft() {
  const { theme: s, page: e } = V();
  return P(() => {
    const { text: t = "Edit this page", pattern: n = "" } =
      s.value.editLink || {};
    let o;
    return (
      typeof n == "function"
        ? (o = n(e.value))
        : (o = n.replace(/:path/g, e.value.filePath)),
      { url: o, text: t }
    );
  });
}
function Ot() {
  const { page: s, theme: e, frontmatter: t } = V();
  return P(() => {
    var _, b, w, S, B, k, M, N;
    const n = Ie(e.value.sidebar, s.value.relativePath),
      o = ht(n),
      l = o.findIndex((y) => j(s.value.relativePath, y.link)),
      d =
        (((_ = e.value.docFooter) == null ? void 0 : _.prev) === !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      p =
        (((b = e.value.docFooter) == null ? void 0 : b.next) === !1 &&
          !t.value.next) ||
        t.value.next === !1;
    return {
      prev: d
        ? void 0
        : {
            text:
              (typeof t.value.prev == "string"
                ? t.value.prev
                : typeof t.value.prev == "object"
                ? t.value.prev.text
                : void 0) ??
              ((w = o[l - 1]) == null ? void 0 : w.docFooterText) ??
              ((S = o[l - 1]) == null ? void 0 : S.text),
            link:
              (typeof t.value.prev == "object" ? t.value.prev.link : void 0) ??
              ((B = o[l - 1]) == null ? void 0 : B.link),
          },
      next: p
        ? void 0
        : {
            text:
              (typeof t.value.next == "string"
                ? t.value.next
                : typeof t.value.next == "object"
                ? t.value.next.text
                : void 0) ??
              ((k = o[l + 1]) == null ? void 0 : k.docFooterText) ??
              ((M = o[l + 1]) == null ? void 0 : M.text),
            link:
              (typeof t.value.next == "object" ? t.value.next.link : void 0) ??
              ((N = o[l + 1]) == null ? void 0 : N.link),
          },
    };
  });
}
const Gt = {},
  Ut = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  jt = c(
    "path",
    {
      d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
    },
    null,
    -1,
  ),
  Kt = c(
    "path",
    {
      d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
    },
    null,
    -1,
  ),
  qt = [jt, Kt];
function Rt(s, e) {
  return a(), i("svg", Ut, qt);
}
const Wt = m(Gt, [["render", Rt]]),
  G = g({
    __name: "VPLink",
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(s) {
      const e = s,
        t = P(() => e.tag ?? (e.href ? "a" : "span")),
        n = P(() => e.href && Le.test(e.href));
      return (o, l) => (
        a(),
        $(
          U(t.value),
          {
            class: C([
              "VPLink",
              {
                link: o.href,
                "vp-external-link-icon": n.value,
                "no-icon": o.noIcon,
              },
            ]),
            href: o.href ? r(J)(o.href) : void 0,
            target: o.target ?? (n.value ? "_blank" : void 0),
            rel: o.rel ?? (n.value ? "noreferrer" : void 0),
          },
          { default: v(() => [u(o.$slots, "default")]), _: 3 },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  }),
  Yt = { class: "VPLastUpdated" },
  Jt = ["datetime"],
  Xt = g({
    __name: "VPDocFooterLastUpdated",
    setup(s) {
      const { theme: e, page: t, frontmatter: n, lang: o } = V(),
        l = P(() => new Date(n.value.lastUpdated ?? t.value.lastUpdated)),
        d = P(() => l.value.toISOString()),
        p = I("");
      return (
        K(() => {
          te(() => {
            var _, b, w;
            p.value = new Intl.DateTimeFormat(
              (b =
                (_ = e.value.lastUpdated) == null ? void 0 : _.formatOptions) !=
                null && b.forceLocale
                ? o.value
                : void 0,
              ((w = e.value.lastUpdated) == null
                ? void 0
                : w.formatOptions) ?? {
                dateStyle: "short",
                timeStyle: "short",
              },
            ).format(l.value);
          });
        }),
        (_, b) => {
          var w;
          return (
            a(),
            i("p", Yt, [
              x(
                L(
                  ((w = r(e).lastUpdated) == null ? void 0 : w.text) ||
                    r(e).lastUpdatedText ||
                    "Last updated",
                ) + ": ",
                1,
              ),
              c("time", { datetime: d.value }, L(p.value), 9, Jt),
            ])
          );
        }
      );
    },
  });
const Zt = m(Xt, [["__scopeId", "data-v-19a7ae4e"]]),
  Qt = { key: 0, class: "VPDocFooter" },
  es = { key: 0, class: "edit-info" },
  ts = { key: 0, class: "edit-link" },
  ss = { key: 1, class: "last-updated" },
  ns = { key: 1, class: "prev-next" },
  os = { class: "pager" },
  as = ["href"],
  ls = ["innerHTML"],
  rs = ["innerHTML"],
  is = { class: "pager" },
  cs = ["href"],
  us = ["innerHTML"],
  ds = ["innerHTML"],
  _s = g({
    __name: "VPDocFooter",
    setup(s) {
      const { theme: e, page: t, frontmatter: n } = V(),
        o = Ft(),
        l = Ot(),
        d = P(() => e.value.editLink && n.value.editLink !== !1),
        p = P(() => t.value.lastUpdated && n.value.lastUpdated !== !1),
        _ = P(() => d.value || p.value || l.value.prev || l.value.next);
      return (b, w) => {
        var S, B, k, M, N, y;
        return _.value
          ? (a(),
            i("footer", Qt, [
              u(b.$slots, "doc-footer-before", {}, void 0, !0),
              d.value || p.value
                ? (a(),
                  i("div", es, [
                    d.value
                      ? (a(),
                        i("div", ts, [
                          h(
                            G,
                            {
                              class: "edit-link-button",
                              href: r(o).url,
                              "no-icon": !0,
                            },
                            {
                              default: v(() => [
                                h(Wt, {
                                  class: "edit-link-icon",
                                  "aria-label": "edit icon",
                                }),
                                x(" " + L(r(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ),
                        ]))
                      : f("", !0),
                    p.value ? (a(), i("div", ss, [h(Zt)])) : f("", !0),
                  ]))
                : f("", !0),
              ((S = r(l).prev) != null && S.link) ||
              ((B = r(l).next) != null && B.link)
                ? (a(),
                  i("nav", ns, [
                    c("div", os, [
                      (k = r(l).prev) != null && k.link
                        ? (a(),
                          i(
                            "a",
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: r(J)(r(l).prev.link),
                            },
                            [
                              c(
                                "span",
                                {
                                  class: "desc",
                                  innerHTML:
                                    ((M = r(e).docFooter) == null
                                      ? void 0
                                      : M.prev) || "Previous page",
                                },
                                null,
                                8,
                                ls,
                              ),
                              c(
                                "span",
                                { class: "title", innerHTML: r(l).prev.text },
                                null,
                                8,
                                rs,
                              ),
                            ],
                            8,
                            as,
                          ))
                        : f("", !0),
                    ]),
                    c("div", is, [
                      (N = r(l).next) != null && N.link
                        ? (a(),
                          i(
                            "a",
                            {
                              key: 0,
                              class: "pager-link next",
                              href: r(J)(r(l).next.link),
                            },
                            [
                              c(
                                "span",
                                {
                                  class: "desc",
                                  innerHTML:
                                    ((y = r(e).docFooter) == null
                                      ? void 0
                                      : y.next) || "Next page",
                                },
                                null,
                                8,
                                us,
                              ),
                              c(
                                "span",
                                { class: "title", innerHTML: r(l).next.text },
                                null,
                                8,
                                ds,
                              ),
                            ],
                            8,
                            cs,
                          ))
                        : f("", !0),
                    ]),
                  ]))
                : f("", !0),
            ]))
          : f("", !0);
      };
    },
  });
const vs = m(_s, [["__scopeId", "data-v-a2d931e4"]]),
  ps = {},
  hs = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  fs = c(
    "path",
    {
      d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z",
    },
    null,
    -1,
  ),
  ms = [fs];
function gs(s, e) {
  return a(), i("svg", hs, ms);
}
const fe = m(ps, [["render", gs]]),
  bs = { key: 0, class: "VPDocOutlineDropdown" },
  $s = { key: 0, class: "items" },
  ks = g({
    __name: "VPDocOutlineDropdown",
    setup(s) {
      const { frontmatter: e, theme: t } = V(),
        n = I(!1);
      Y(() => {
        n.value = !1;
      });
      const o = _e([]);
      return (
        Y(() => {
          o.value = pe(e.value.outline ?? t.value.outline);
        }),
        (l, d) =>
          o.value.length > 0
            ? (a(),
              i("div", bs, [
                c(
                  "button",
                  {
                    onClick: d[0] || (d[0] = (p) => (n.value = !n.value)),
                    class: C({ open: n.value }),
                  },
                  [x(L(r(ve)(r(t))) + " ", 1), h(fe, { class: "icon" })],
                  2,
                ),
                n.value
                  ? (a(),
                    i("div", $s, [
                      h(he, { headers: o.value }, null, 8, ["headers"]),
                    ]))
                  : f("", !0),
              ]))
            : f("", !0)
      );
    },
  });
const ys = m(ks, [["__scopeId", "data-v-95bb0785"]]),
  Ps = (s) => (H("data-v-a3c25e27"), (s = s()), z(), s),
  Vs = { class: "container" },
  ws = Ps(() => c("div", { class: "aside-curtain" }, null, -1)),
  Ls = { class: "aside-container" },
  Ss = { class: "aside-content" },
  Ms = { class: "content" },
  Ns = { class: "content-container" },
  Is = { class: "main" },
  Ts = g({
    __name: "VPDoc",
    setup(s) {
      const { theme: e } = V(),
        t = se(),
        { hasSidebar: n, hasAside: o, leftAside: l } = F(),
        d = P(() => t.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
      return (p, _) => {
        const b = R("Content");
        return (
          a(),
          i(
            "div",
            { class: C(["VPDoc", { "has-sidebar": r(n), "has-aside": r(o) }]) },
            [
              u(p.$slots, "doc-top", {}, void 0, !0),
              c("div", Vs, [
                r(o)
                  ? (a(),
                    i(
                      "div",
                      { key: 0, class: C(["aside", { "left-aside": r(l) }]) },
                      [
                        ws,
                        c("div", Ls, [
                          c("div", Ss, [
                            h(Et, null, {
                              "aside-top": v(() => [
                                u(p.$slots, "aside-top", {}, void 0, !0),
                              ]),
                              "aside-bottom": v(() => [
                                u(p.$slots, "aside-bottom", {}, void 0, !0),
                              ]),
                              "aside-outline-before": v(() => [
                                u(
                                  p.$slots,
                                  "aside-outline-before",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              "aside-outline-after": v(() => [
                                u(
                                  p.$slots,
                                  "aside-outline-after",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              "aside-ads-before": v(() => [
                                u(p.$slots, "aside-ads-before", {}, void 0, !0),
                              ]),
                              "aside-ads-after": v(() => [
                                u(p.$slots, "aside-ads-after", {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : f("", !0),
                c("div", Ms, [
                  c("div", Ns, [
                    u(p.$slots, "doc-before", {}, void 0, !0),
                    h(ys),
                    c("main", Is, [
                      h(
                        b,
                        {
                          class: C([
                            "vp-doc",
                            [
                              d.value,
                              r(e).externalLinkIcon &&
                                "external-link-icon-enabled",
                            ],
                          ]),
                        },
                        null,
                        8,
                        ["class"],
                      ),
                    ]),
                    h(vs, null, {
                      "doc-footer-before": v(() => [
                        u(p.$slots, "doc-footer-before", {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    u(p.$slots, "doc-after", {}, void 0, !0),
                  ]),
                ]),
              ]),
              u(p.$slots, "doc-bottom", {}, void 0, !0),
            ],
            2,
          )
        );
      };
    },
  });
const Cs = m(Ts, [["__scopeId", "data-v-a3c25e27"]]),
  Bs = g({
    __name: "VPButton",
    props: {
      tag: {},
      size: { default: "medium" },
      theme: { default: "brand" },
      text: {},
      href: {},
    },
    setup(s) {
      const e = s,
        t = P(() => e.href && Le.test(e.href)),
        n = P(() => (e.tag || e.href ? "a" : "button"));
      return (o, l) => (
        a(),
        $(
          U(n.value),
          {
            class: C(["VPButton", [o.size, o.theme]]),
            href: o.href ? r(J)(o.href) : void 0,
            target: t.value ? "_blank" : void 0,
            rel: t.value ? "noreferrer" : void 0,
          },
          { default: v(() => [x(L(o.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  });
const As = m(Bs, [["__scopeId", "data-v-1e76fe75"]]),
  xs = ["src", "alt"],
  Hs = g({
    inheritAttrs: !1,
    __name: "VPImage",
    props: { image: {}, alt: {} },
    setup(s) {
      return (e, t) => {
        const n = R("VPImage", !0);
        return e.image
          ? (a(),
            i(
              T,
              { key: 0 },
              [
                typeof e.image == "string" || "src" in e.image
                  ? (a(),
                    i(
                      "img",
                      Z(
                        { key: 0, class: "VPImage" },
                        typeof e.image == "string"
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: r(ue)(
                            typeof e.image == "string" ? e.image : e.image.src,
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == "string"
                              ? ""
                              : e.image.alt || ""),
                        },
                      ),
                      null,
                      16,
                      xs,
                    ))
                  : (a(),
                    i(
                      T,
                      { key: 1 },
                      [
                        h(
                          n,
                          Z(
                            {
                              class: "dark",
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                        h(
                          n,
                          Z(
                            {
                              class: "light",
                              image: e.image.light,
                              alt: e.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : f("", !0);
      };
    },
  });
const ee = m(Hs, [["__scopeId", "data-v-ab19afbb"]]),
  zs = (s) => (H("data-v-5a3e9999"), (s = s()), z(), s),
  Ds = { class: "container" },
  Es = { class: "main" },
  Fs = { key: 0, class: "name" },
  Os = ["innerHTML"],
  Gs = ["innerHTML"],
  Us = ["innerHTML"],
  js = { key: 0, class: "actions" },
  Ks = { key: 0, class: "image" },
  qs = { class: "image-container" },
  Rs = zs(() => c("div", { class: "image-bg" }, null, -1)),
  Ws = g({
    __name: "VPHero",
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(s) {
      const e = ne("hero-image-slot-exists");
      return (t, n) => (
        a(),
        i(
          "div",
          { class: C(["VPHero", { "has-image": t.image || r(e) }]) },
          [
            c("div", Ds, [
              c("div", Es, [
                u(
                  t.$slots,
                  "home-hero-info",
                  {},
                  () => [
                    t.name
                      ? (a(),
                        i("h1", Fs, [
                          c(
                            "span",
                            { innerHTML: t.name, class: "clip" },
                            null,
                            8,
                            Os,
                          ),
                        ]))
                      : f("", !0),
                    t.text
                      ? (a(),
                        i(
                          "p",
                          { key: 1, innerHTML: t.text, class: "text" },
                          null,
                          8,
                          Gs,
                        ))
                      : f("", !0),
                    t.tagline
                      ? (a(),
                        i(
                          "p",
                          { key: 2, innerHTML: t.tagline, class: "tagline" },
                          null,
                          8,
                          Us,
                        ))
                      : f("", !0),
                  ],
                  !0,
                ),
                t.actions
                  ? (a(),
                    i("div", js, [
                      (a(!0),
                      i(
                        T,
                        null,
                        A(
                          t.actions,
                          (o) => (
                            a(),
                            i("div", { key: o.link, class: "action" }, [
                              h(
                                As,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                },
                                null,
                                8,
                                ["theme", "text", "href"],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : f("", !0),
              ]),
              t.image || r(e)
                ? (a(),
                  i("div", Ks, [
                    c("div", qs, [
                      Rs,
                      u(
                        t.$slots,
                        "home-hero-image",
                        {},
                        () => [
                          t.image
                            ? (a(),
                              $(
                                ee,
                                { key: 0, class: "image-src", image: t.image },
                                null,
                                8,
                                ["image"],
                              ))
                            : f("", !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : f("", !0),
            ]),
          ],
          2,
        )
      );
    },
  });
const Ys = m(Ws, [["__scopeId", "data-v-5a3e9999"]]),
  Js = g({
    __name: "VPHomeHero",
    setup(s) {
      const { frontmatter: e } = V();
      return (t, n) =>
        r(e).hero
          ? (a(),
            $(
              Ys,
              {
                key: 0,
                class: "VPHomeHero",
                name: r(e).hero.name,
                text: r(e).hero.text,
                tagline: r(e).hero.tagline,
                image: r(e).hero.image,
                actions: r(e).hero.actions,
              },
              {
                "home-hero-info": v(() => [u(t.$slots, "home-hero-info")]),
                "home-hero-image": v(() => [u(t.$slots, "home-hero-image")]),
                _: 3,
              },
              8,
              ["name", "text", "tagline", "image", "actions"],
            ))
          : f("", !0);
    },
  }),
  Xs = {},
  Zs = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  Qs = c(
    "path",
    {
      d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z",
    },
    null,
    -1,
  ),
  en = [Qs];
function tn(s, e) {
  return a(), i("svg", Zs, en);
}
const sn = m(Xs, [["render", tn]]),
  nn = { class: "box" },
  on = { key: 0, class: "icon" },
  an = ["innerHTML"],
  ln = ["innerHTML"],
  rn = ["innerHTML"],
  cn = { key: 4, class: "link-text" },
  un = { class: "link-text-value" },
  dn = g({
    __name: "VPFeature",
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(s) {
      return (e, t) => (
        a(),
        $(
          G,
          {
            class: "VPFeature",
            href: e.link,
            rel: e.rel,
            target: e.target,
            "no-icon": !0,
            tag: e.link ? "a" : "div",
          },
          {
            default: v(() => [
              c("article", nn, [
                typeof e.icon == "object" && e.icon.wrap
                  ? (a(),
                    i("div", on, [
                      h(
                        ee,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48,
                        },
                        null,
                        8,
                        ["image", "alt", "height", "width"],
                      ),
                    ]))
                  : typeof e.icon == "object"
                  ? (a(),
                    $(
                      ee,
                      {
                        key: 1,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height || 48,
                        width: e.icon.width || 48,
                      },
                      null,
                      8,
                      ["image", "alt", "height", "width"],
                    ))
                  : e.icon
                  ? (a(),
                    i(
                      "div",
                      { key: 2, class: "icon", innerHTML: e.icon },
                      null,
                      8,
                      an,
                    ))
                  : f("", !0),
                c("h2", { class: "title", innerHTML: e.title }, null, 8, ln),
                e.details
                  ? (a(),
                    i(
                      "p",
                      { key: 3, class: "details", innerHTML: e.details },
                      null,
                      8,
                      rn,
                    ))
                  : f("", !0),
                e.linkText
                  ? (a(),
                    i("div", cn, [
                      c("p", un, [
                        x(L(e.linkText) + " ", 1),
                        h(sn, { class: "link-text-icon" }),
                      ]),
                    ]))
                  : f("", !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ["href", "rel", "target", "tag"],
        )
      );
    },
  });
const _n = m(dn, [["__scopeId", "data-v-ee984185"]]),
  vn = { key: 0, class: "VPFeatures" },
  pn = { class: "container" },
  hn = { class: "items" },
  fn = g({
    __name: "VPFeatures",
    props: { features: {} },
    setup(s) {
      const e = s,
        t = P(() => {
          const n = e.features.length;
          if (n) {
            if (n === 2) return "grid-2";
            if (n === 3) return "grid-3";
            if (n % 3 === 0) return "grid-6";
            if (n > 3) return "grid-4";
          } else return;
        });
      return (n, o) =>
        n.features
          ? (a(),
            i("div", vn, [
              c("div", pn, [
                c("div", hn, [
                  (a(!0),
                  i(
                    T,
                    null,
                    A(
                      n.features,
                      (l) => (
                        a(),
                        i(
                          "div",
                          { key: l.title, class: C(["item", [t.value]]) },
                          [
                            h(
                              _n,
                              {
                                icon: l.icon,
                                title: l.title,
                                details: l.details,
                                link: l.link,
                                "link-text": l.linkText,
                                rel: l.rel,
                                target: l.target,
                              },
                              null,
                              8,
                              [
                                "icon",
                                "title",
                                "details",
                                "link",
                                "link-text",
                                "rel",
                                "target",
                              ],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : f("", !0);
    },
  });
const mn = m(fn, [["__scopeId", "data-v-b1eea84a"]]),
  gn = g({
    __name: "VPHomeFeatures",
    setup(s) {
      const { frontmatter: e } = V();
      return (t, n) =>
        r(e).features
          ? (a(),
            $(
              mn,
              { key: 0, class: "VPHomeFeatures", features: r(e).features },
              null,
              8,
              ["features"],
            ))
          : f("", !0);
    },
  }),
  bn = { class: "VPHome" },
  $n = g({
    __name: "VPHome",
    setup(s) {
      return (e, t) => {
        const n = R("Content");
        return (
          a(),
          i("div", bn, [
            u(e.$slots, "home-hero-before", {}, void 0, !0),
            h(Js, null, {
              "home-hero-info": v(() => [
                u(e.$slots, "home-hero-info", {}, void 0, !0),
              ]),
              "home-hero-image": v(() => [
                u(e.$slots, "home-hero-image", {}, void 0, !0),
              ]),
              _: 3,
            }),
            u(e.$slots, "home-hero-after", {}, void 0, !0),
            u(e.$slots, "home-features-before", {}, void 0, !0),
            h(gn),
            u(e.$slots, "home-features-after", {}, void 0, !0),
            h(n),
          ])
        );
      };
    },
  });
const kn = m($n, [["__scopeId", "data-v-20eabd3a"]]),
  yn = {},
  Pn = { class: "VPPage" };
function Vn(s, e) {
  const t = R("Content");
  return (
    a(),
    i("div", Pn, [u(s.$slots, "page-top"), h(t), u(s.$slots, "page-bottom")])
  );
}
const wn = m(yn, [["render", Vn]]),
  Ln = g({
    __name: "VPContent",
    setup(s) {
      const { page: e, frontmatter: t } = V(),
        { hasSidebar: n } = F();
      return (o, l) => (
        a(),
        i(
          "div",
          {
            class: C([
              "VPContent",
              { "has-sidebar": r(n), "is-home": r(t).layout === "home" },
            ]),
            id: "VPContent",
          },
          [
            r(e).isNotFound
              ? u(o.$slots, "not-found", { key: 0 }, () => [h(vt)], !0)
              : r(t).layout === "page"
              ? (a(),
                $(
                  wn,
                  { key: 1 },
                  {
                    "page-top": v(() => [
                      u(o.$slots, "page-top", {}, void 0, !0),
                    ]),
                    "page-bottom": v(() => [
                      u(o.$slots, "page-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : r(t).layout === "home"
              ? (a(),
                $(
                  kn,
                  { key: 2 },
                  {
                    "home-hero-before": v(() => [
                      u(o.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-info": v(() => [
                      u(o.$slots, "home-hero-info", {}, void 0, !0),
                    ]),
                    "home-hero-image": v(() => [
                      u(o.$slots, "home-hero-image", {}, void 0, !0),
                    ]),
                    "home-hero-after": v(() => [
                      u(o.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": v(() => [
                      u(o.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": v(() => [
                      u(o.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : r(t).layout && r(t).layout !== "doc"
              ? (a(), $(U(r(t).layout), { key: 3 }))
              : (a(),
                $(
                  Cs,
                  { key: 4 },
                  {
                    "doc-top": v(() => [
                      u(o.$slots, "doc-top", {}, void 0, !0),
                    ]),
                    "doc-bottom": v(() => [
                      u(o.$slots, "doc-bottom", {}, void 0, !0),
                    ]),
                    "doc-footer-before": v(() => [
                      u(o.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": v(() => [
                      u(o.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": v(() => [
                      u(o.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "aside-top": v(() => [
                      u(o.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-outline-before": v(() => [
                      u(o.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": v(() => [
                      u(o.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": v(() => [
                      u(o.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": v(() => [
                      u(o.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    "aside-bottom": v(() => [
                      u(o.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                )),
          ],
          2,
        )
      );
    },
  });
const Sn = m(Ln, [["__scopeId", "data-v-3cf691b6"]]),
  Mn = { class: "container" },
  Nn = ["innerHTML"],
  In = ["innerHTML"],
  Tn = g({
    __name: "VPFooter",
    setup(s) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: n } = F();
      return (o, l) =>
        r(e).footer && r(t).footer !== !1
          ? (a(),
            i(
              "footer",
              { key: 0, class: C(["VPFooter", { "has-sidebar": r(n) }]) },
              [
                c("div", Mn, [
                  r(e).footer.message
                    ? (a(),
                      i(
                        "p",
                        {
                          key: 0,
                          class: "message",
                          innerHTML: r(e).footer.message,
                        },
                        null,
                        8,
                        Nn,
                      ))
                    : f("", !0),
                  r(e).footer.copyright
                    ? (a(),
                      i(
                        "p",
                        {
                          key: 1,
                          class: "copyright",
                          innerHTML: r(e).footer.copyright,
                        },
                        null,
                        8,
                        In,
                      ))
                    : f("", !0),
                ]),
              ],
              2,
            ))
          : f("", !0);
    },
  });
const Cn = m(Tn, [["__scopeId", "data-v-e4279f1c"]]),
  Bn = { class: "header" },
  An = { class: "outline" },
  xn = g({
    __name: "VPLocalNavOutlineDropdown",
    props: { headers: {}, navHeight: {} },
    setup(s) {
      const e = s,
        { theme: t } = V(),
        n = I(!1),
        o = I(0),
        l = I();
      Y(() => {
        n.value = !1;
      });
      function d() {
        (n.value = !n.value),
          (o.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0));
      }
      function p(b) {
        b.target.classList.contains("outline-link") &&
          (l.value && (l.value.style.transition = "none"),
          Ge(() => {
            n.value = !1;
          }));
      }
      function _() {
        (n.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (b, w) => (
        a(),
        i(
          "div",
          {
            class: "VPLocalNavOutlineDropdown",
            style: Oe({ "--vp-vh": o.value + "px" }),
          },
          [
            b.headers.length > 0
              ? (a(),
                i(
                  "button",
                  { key: 0, onClick: d, class: C({ open: n.value }) },
                  [x(L(r(ve)(r(t))) + " ", 1), h(fe, { class: "icon" })],
                  2,
                ))
              : (a(),
                i(
                  "button",
                  { key: 1, onClick: _ },
                  L(r(t).returnToTopLabel || "Return to top"),
                  1,
                )),
            h(
              ce,
              { name: "flyout" },
              {
                default: v(() => [
                  n.value
                    ? (a(),
                      i(
                        "div",
                        {
                          key: 0,
                          ref_key: "items",
                          ref: l,
                          class: "items",
                          onClick: p,
                        },
                        [
                          c("div", Bn, [
                            c(
                              "a",
                              { class: "top-link", href: "#", onClick: _ },
                              L(r(t).returnToTopLabel || "Return to top"),
                              1,
                            ),
                          ]),
                          c("div", An, [
                            h(he, { headers: b.headers }, null, 8, ["headers"]),
                          ]),
                        ],
                        512,
                      ))
                    : f("", !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      );
    },
  });
const Hn = m(xn, [["__scopeId", "data-v-24251f6f"]]),
  zn = {},
  Dn = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  En = c(
    "path",
    {
      d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
    },
    null,
    -1,
  ),
  Fn = c(
    "path",
    { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
    null,
    -1,
  ),
  On = c(
    "path",
    {
      d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
    },
    null,
    -1,
  ),
  Gn = c(
    "path",
    {
      d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
    },
    null,
    -1,
  ),
  Un = [En, Fn, On, Gn];
function jn(s, e) {
  return a(), i("svg", Dn, Un);
}
const Kn = m(zn, [["render", jn]]),
  qn = ["aria-expanded"],
  Rn = { class: "menu-text" },
  Wn = g({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(s) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: n } = F(),
        { y: o } = Se(),
        l = _e([]),
        d = I(0);
      K(() => {
        d.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--vp-nav-height",
          ),
        );
      }),
        Y(() => {
          l.value = pe(t.value.outline ?? e.value.outline);
        });
      const p = P(() => l.value.length === 0 && !n.value),
        _ = P(() => ({
          VPLocalNav: !0,
          fixed: p.value,
          "reached-top": o.value >= d.value,
        }));
      return (b, w) =>
        r(t).layout !== "home" && (!p.value || r(o) >= d.value)
          ? (a(),
            i(
              "div",
              { key: 0, class: C(_.value) },
              [
                r(n)
                  ? (a(),
                    i(
                      "button",
                      {
                        key: 0,
                        class: "menu",
                        "aria-expanded": b.open,
                        "aria-controls": "VPSidebarNav",
                        onClick: w[0] || (w[0] = (S) => b.$emit("open-menu")),
                      },
                      [
                        h(Kn, { class: "menu-icon" }),
                        c("span", Rn, L(r(e).sidebarMenuLabel || "Menu"), 1),
                      ],
                      8,
                      qn,
                    ))
                  : f("", !0),
                h(Hn, { headers: l.value, navHeight: d.value }, null, 8, [
                  "headers",
                  "navHeight",
                ]),
              ],
              2,
            ))
          : f("", !0);
    },
  });
const Yn = m(Wn, [["__scopeId", "data-v-9e669cc1"]]);
function Jn() {
  const s = I(!1);
  function e() {
    (s.value = !0), window.addEventListener("resize", o);
  }
  function t() {
    (s.value = !1), window.removeEventListener("resize", o);
  }
  function n() {
    s.value ? t() : e();
  }
  function o() {
    window.outerWidth >= 768 && t();
  }
  const l = se();
  return (
    q(() => l.path, t),
    { isScreenOpen: s, openScreen: e, closeScreen: t, toggleScreen: n }
  );
}
const Xn = {},
  Zn = { class: "VPSwitch", type: "button", role: "switch" },
  Qn = { class: "check" },
  eo = { key: 0, class: "icon" };
function to(s, e) {
  return (
    a(),
    i("button", Zn, [
      c("span", Qn, [
        s.$slots.default
          ? (a(), i("span", eo, [u(s.$slots, "default", {}, void 0, !0)]))
          : f("", !0),
      ]),
    ])
  );
}
const so = m(Xn, [
    ["render", to],
    ["__scopeId", "data-v-1c29e291"],
  ]),
  no = {},
  oo = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  ao = c(
    "path",
    {
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
    },
    null,
    -1,
  ),
  lo = [ao];
function ro(s, e) {
  return a(), i("svg", oo, lo);
}
const io = m(no, [["render", ro]]),
  co = {},
  uo = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  _o = Ue(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  vo = [_o];
function po(s, e) {
  return a(), i("svg", uo, vo);
}
const ho = m(co, [["render", po]]),
  fo = g({
    __name: "VPSwitchAppearance",
    setup(s) {
      const { isDark: e } = V(),
        t = ne("toggle-appearance", () => {
          e.value = !e.value;
        });
      return (n, o) => (
        a(),
        $(
          so,
          {
            title: "toggle dark mode",
            class: "VPSwitchAppearance",
            "aria-checked": r(e),
            onClick: r(t),
          },
          {
            default: v(() => [
              h(ho, { class: "sun" }),
              h(io, { class: "moon" }),
            ]),
            _: 1,
          },
          8,
          ["aria-checked", "onClick"],
        )
      );
    },
  });
const me = m(fo, [["__scopeId", "data-v-3329432d"]]),
  mo = { key: 0, class: "VPNavBarAppearance" },
  go = g({
    __name: "VPNavBarAppearance",
    setup(s) {
      const { site: e } = V();
      return (t, n) =>
        r(e).appearance && r(e).appearance !== "force-dark"
          ? (a(), i("div", mo, [h(me)]))
          : f("", !0);
    },
  });
const bo = m(go, [["__scopeId", "data-v-283b26e9"]]),
  ge = I();
let Ce = !1,
  ae = 0;
function $o(s) {
  const e = I(!1);
  if (W) {
    !Ce && ko(), ae++;
    const t = q(ge, (n) => {
      var o, l, d;
      n === s.el.value || ((o = s.el.value) != null && o.contains(n))
        ? ((e.value = !0), (l = s.onFocus) == null || l.call(s))
        : ((e.value = !1), (d = s.onBlur) == null || d.call(s));
    });
    de(() => {
      t(), ae--, ae || yo();
    });
  }
  return je(e);
}
function ko() {
  document.addEventListener("focusin", Be),
    (Ce = !0),
    (ge.value = document.activeElement);
}
function yo() {
  document.removeEventListener("focusin", Be);
}
function Be() {
  ge.value = document.activeElement;
}
const Po = {},
  Vo = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  wo = c(
    "path",
    {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
    },
    null,
    -1,
  ),
  Lo = [wo];
function So(s, e) {
  return a(), i("svg", Vo, Lo);
}
const Ae = m(Po, [["render", So]]),
  Mo = {},
  No = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Io = c("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
  To = c("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
  Co = c("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
  Bo = [Io, To, Co];
function Ao(s, e) {
  return a(), i("svg", No, Bo);
}
const xo = m(Mo, [["render", Ao]]),
  Ho = { class: "VPMenuLink" },
  zo = g({
    __name: "VPMenuLink",
    props: { item: {} },
    setup(s) {
      const { page: e } = V();
      return (t, n) => (
        a(),
        i("div", Ho, [
          h(
            G,
            {
              class: C({
                active: r(j)(
                  r(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch,
                ),
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
            },
            { default: v(() => [x(L(t.item.text), 1)]), _: 1 },
            8,
            ["class", "href", "target", "rel"],
          ),
        ])
      );
    },
  });
const oe = m(zo, [["__scopeId", "data-v-f51f088d"]]),
  Do = { class: "VPMenuGroup" },
  Eo = { key: 0, class: "title" },
  Fo = g({
    __name: "VPMenuGroup",
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i("div", Do, [
          e.text ? (a(), i("p", Eo, L(e.text), 1)) : f("", !0),
          (a(!0),
          i(
            T,
            null,
            A(
              e.items,
              (n) => (
                a(),
                i(
                  T,
                  null,
                  [
                    "link" in n
                      ? (a(), $(oe, { key: 0, item: n }, null, 8, ["item"]))
                      : f("", !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      );
    },
  });
const Oo = m(Fo, [["__scopeId", "data-v-a6b0397c"]]),
  Go = { class: "VPMenu" },
  Uo = { key: 0, class: "items" },
  jo = g({
    __name: "VPMenu",
    props: { items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i("div", Go, [
          e.items
            ? (a(),
              i("div", Uo, [
                (a(!0),
                i(
                  T,
                  null,
                  A(
                    e.items,
                    (n) => (
                      a(),
                      i(
                        T,
                        { key: n.text },
                        [
                          "link" in n
                            ? (a(),
                              $(oe, { key: 0, item: n }, null, 8, ["item"]))
                            : (a(),
                              $(
                                Oo,
                                { key: 1, text: n.text, items: n.items },
                                null,
                                8,
                                ["text", "items"],
                              )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : f("", !0),
          u(e.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  });
const Ko = m(jo, [["__scopeId", "data-v-e42ed9b3"]]),
  qo = ["aria-expanded", "aria-label"],
  Ro = { key: 0, class: "text" },
  Wo = ["innerHTML"],
  Yo = { class: "menu" },
  Jo = g({
    __name: "VPFlyout",
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(s) {
      const e = I(!1),
        t = I();
      $o({ el: t, onBlur: n });
      function n() {
        e.value = !1;
      }
      return (o, l) => (
        a(),
        i(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: t,
            onMouseenter: l[1] || (l[1] = (d) => (e.value = !0)),
            onMouseleave: l[2] || (l[2] = (d) => (e.value = !1)),
          },
          [
            c(
              "button",
              {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": e.value,
                "aria-label": o.label,
                onClick: l[0] || (l[0] = (d) => (e.value = !e.value)),
              },
              [
                o.button || o.icon
                  ? (a(),
                    i("span", Ro, [
                      o.icon
                        ? (a(), $(U(o.icon), { key: 0, class: "option-icon" }))
                        : f("", !0),
                      o.button
                        ? (a(),
                          i(
                            "span",
                            { key: 1, innerHTML: o.button },
                            null,
                            8,
                            Wo,
                          ))
                        : f("", !0),
                      h(Ae, { class: "text-icon" }),
                    ]))
                  : (a(), $(xo, { key: 1, class: "icon" })),
              ],
              8,
              qo,
            ),
            c("div", Yo, [
              h(
                Ko,
                { items: o.items },
                {
                  default: v(() => [u(o.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"],
              ),
            ]),
          ],
          544,
        )
      );
    },
  });
const be = m(Jo, [["__scopeId", "data-v-aa8de344"]]),
  Xo = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
    x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  Zo = ["href", "aria-label", "innerHTML"],
  Qo = g({
    __name: "VPSocialLink",
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(s) {
      const e = s,
        t = P(() => (typeof e.icon == "object" ? e.icon.svg : Xo[e.icon]));
      return (n, o) => (
        a(),
        i(
          "a",
          {
            class: "VPSocialLink no-icon",
            href: n.link,
            "aria-label":
              n.ariaLabel ?? (typeof n.icon == "string" ? n.icon : ""),
            target: "_blank",
            rel: "noopener",
            innerHTML: t.value,
          },
          null,
          8,
          Zo,
        )
      );
    },
  });
const ea = m(Qo, [["__scopeId", "data-v-16cf740a"]]),
  ta = { class: "VPSocialLinks" },
  sa = g({
    __name: "VPSocialLinks",
    props: { links: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i("div", ta, [
          (a(!0),
          i(
            T,
            null,
            A(
              e.links,
              ({ link: n, icon: o, ariaLabel: l }) => (
                a(),
                $(ea, { key: n, icon: o, link: n, ariaLabel: l }, null, 8, [
                  "icon",
                  "link",
                  "ariaLabel",
                ])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const $e = m(sa, [["__scopeId", "data-v-e71e869c"]]),
  na = { key: 0, class: "group translations" },
  oa = { class: "trans-title" },
  aa = { key: 1, class: "group" },
  la = { class: "item appearance" },
  ra = { class: "label" },
  ia = { class: "appearance-action" },
  ca = { key: 2, class: "group" },
  ua = { class: "item social-links" },
  da = g({
    __name: "VPNavBarExtra",
    setup(s) {
      const { site: e, theme: t } = V(),
        { localeLinks: n, currentLang: o } = X({ correspondingLink: !0 }),
        l = P(
          () =>
            (n.value.length && o.value.label) ||
            e.value.appearance ||
            t.value.socialLinks,
        );
      return (d, p) =>
        l.value
          ? (a(),
            $(
              be,
              { key: 0, class: "VPNavBarExtra", label: "extra navigation" },
              {
                default: v(() => [
                  r(n).length && r(o).label
                    ? (a(),
                      i("div", na, [
                        c("p", oa, L(r(o).label), 1),
                        (a(!0),
                        i(
                          T,
                          null,
                          A(
                            r(n),
                            (_) => (
                              a(),
                              $(oe, { key: _.link, item: _ }, null, 8, ["item"])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : f("", !0),
                  r(e).appearance
                    ? (a(),
                      i("div", aa, [
                        c("div", la, [
                          c(
                            "p",
                            ra,
                            L(r(t).darkModeSwitchLabel || "Appearance"),
                            1,
                          ),
                          c("div", ia, [h(me)]),
                        ]),
                      ]))
                    : f("", !0),
                  r(t).socialLinks
                    ? (a(),
                      i("div", ca, [
                        c("div", ua, [
                          h(
                            $e,
                            {
                              class: "social-links-list",
                              links: r(t).socialLinks,
                            },
                            null,
                            8,
                            ["links"],
                          ),
                        ]),
                      ]))
                    : f("", !0),
                ]),
                _: 1,
              },
            ))
          : f("", !0);
    },
  });
const _a = m(da, [["__scopeId", "data-v-c8c2ae4b"]]),
  va = (s) => (H("data-v-6bee1efd"), (s = s()), z(), s),
  pa = ["aria-expanded"],
  ha = va(() =>
    c(
      "span",
      { class: "container" },
      [
        c("span", { class: "top" }),
        c("span", { class: "middle" }),
        c("span", { class: "bottom" }),
      ],
      -1,
    ),
  ),
  fa = [ha],
  ma = g({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(s) {
      return (e, t) => (
        a(),
        i(
          "button",
          {
            type: "button",
            class: C(["VPNavBarHamburger", { active: e.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            onClick: t[0] || (t[0] = (n) => e.$emit("click")),
          },
          fa,
          10,
          pa,
        )
      );
    },
  });
const ga = m(ma, [["__scopeId", "data-v-6bee1efd"]]),
  ba = ["innerHTML"],
  $a = g({
    __name: "VPNavBarMenuLink",
    props: { item: {} },
    setup(s) {
      const { page: e } = V();
      return (t, n) => (
        a(),
        $(
          G,
          {
            class: C({
              VPNavBarMenuLink: !0,
              active: r(j)(
                r(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch,
              ),
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: "0",
          },
          {
            default: v(() => [
              c("span", { innerHTML: t.item.text }, null, 8, ba),
            ]),
            _: 1,
          },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  });
const ka = m($a, [["__scopeId", "data-v-cb318fec"]]),
  ya = g({
    __name: "VPNavBarMenuGroup",
    props: { item: {} },
    setup(s) {
      const e = s,
        { page: t } = V(),
        n = (l) =>
          "link" in l
            ? j(t.value.relativePath, l.link, !!e.item.activeMatch)
            : l.items.some(n),
        o = P(() => n(e.item));
      return (l, d) => (
        a(),
        $(
          be,
          {
            class: C({
              VPNavBarMenuGroup: !0,
              active:
                r(j)(
                  r(t).relativePath,
                  l.item.activeMatch,
                  !!l.item.activeMatch,
                ) || o.value,
            }),
            button: l.item.text,
            items: l.item.items,
          },
          null,
          8,
          ["class", "button", "items"],
        )
      );
    },
  }),
  Pa = (s) => (H("data-v-f732b5d0"), (s = s()), z(), s),
  Va = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  wa = Pa(() =>
    c(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      "Main Navigation",
      -1,
    ),
  ),
  La = g({
    __name: "VPNavBarMenu",
    setup(s) {
      const { theme: e } = V();
      return (t, n) =>
        r(e).nav
          ? (a(),
            i("nav", Va, [
              wa,
              (a(!0),
              i(
                T,
                null,
                A(
                  r(e).nav,
                  (o) => (
                    a(),
                    i(
                      T,
                      { key: o.text },
                      [
                        "link" in o
                          ? (a(), $(ka, { key: 0, item: o }, null, 8, ["item"]))
                          : (a(),
                            $(ya, { key: 1, item: o }, null, 8, ["item"])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f("", !0);
    },
  });
const Sa = m(La, [["__scopeId", "data-v-f732b5d0"]]);
const Ma = {
    type: "button",
    class: "DocSearch DocSearch-Button",
    "aria-label": "Search",
  },
  Na = { class: "DocSearch-Button-Container" },
  Ia = c(
    "svg",
    {
      class: "DocSearch-Search-Icon",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      "aria-label": "search icon",
    },
    [
      c("path", {
        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1,
  ),
  Ta = { class: "DocSearch-Button-Placeholder" },
  Ca = c(
    "span",
    { class: "DocSearch-Button-Keys" },
    [
      c("kbd", { class: "DocSearch-Button-Key" }),
      c("kbd", { class: "DocSearch-Button-Key" }, "K"),
    ],
    -1,
  ),
  Ve = g({
    __name: "VPNavBarSearchButton",
    props: { placeholder: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i("button", Ma, [
          c("span", Na, [Ia, c("span", Ta, L(e.placeholder), 1)]),
          Ca,
        ])
      );
    },
  });
const Ba = { class: "VPNavBarSearch" },
  Aa = { id: "local-search" },
  xa = { key: 1, id: "docsearch" },
  Ha = g({
    __name: "VPNavBarSearch",
    setup(s) {
      const e = Ke(() =>
          qe(
            () => import("./VPLocalSearchBox.1ad03688.js"),
            [
              "assets/chunks/VPLocalSearchBox.1ad03688.js",
              "assets/chunks/framework.7f6db421.js",
            ],
          ),
        ),
        t = () => null,
        { theme: n, localeIndex: o } = V(),
        l = I(!1),
        d = I(!1),
        p = P(() => {
          var M, N, y, D, O, E, ke;
          const k =
            ((M = n.value.search) == null ? void 0 : M.options) ??
            n.value.algolia;
          return (
            ((O =
              (D =
                (y =
                  (N = k == null ? void 0 : k.locales) == null
                    ? void 0
                    : N[o.value]) == null
                  ? void 0
                  : y.translations) == null
                ? void 0
                : D.button) == null
              ? void 0
              : O.buttonText) ||
            ((ke =
              (E = k == null ? void 0 : k.translations) == null
                ? void 0
                : E.button) == null
              ? void 0
              : ke.buttonText) ||
            "Search"
          );
        });
      K(() => {});
      function _() {
        l.value || ((l.value = !0), setTimeout(b, 16));
      }
      function b() {
        const k = new Event("keydown");
        (k.key = "k"),
          (k.metaKey = !0),
          window.dispatchEvent(k),
          setTimeout(() => {
            document.querySelector(".DocSearch-Modal") || b();
          }, 16);
      }
      function w(k) {
        const M = k.target,
          N = M.tagName;
        return (
          M.isContentEditable ||
          N === "INPUT" ||
          N === "SELECT" ||
          N === "TEXTAREA"
        );
      }
      const S = I(!1);
      ye("k", (k) => {
        (k.ctrlKey || k.metaKey) && (k.preventDefault(), (S.value = !0));
      }),
        ye("/", (k) => {
          w(k) || (k.preventDefault(), (S.value = !0));
        });
      const B = "local";
      return (k, M) => {
        var N;
        return (
          a(),
          i("div", Ba, [
            r(B) === "local"
              ? (a(),
                i(
                  T,
                  { key: 0 },
                  [
                    S.value
                      ? (a(),
                        $(
                          r(e),
                          {
                            key: 0,
                            placeholder: p.value,
                            onClose: M[0] || (M[0] = (y) => (S.value = !1)),
                          },
                          null,
                          8,
                          ["placeholder"],
                        ))
                      : f("", !0),
                    c("div", Aa, [
                      h(
                        Ve,
                        {
                          placeholder: p.value,
                          onClick: M[1] || (M[1] = (y) => (S.value = !0)),
                        },
                        null,
                        8,
                        ["placeholder"],
                      ),
                    ]),
                  ],
                  64,
                ))
              : r(B) === "algolia"
              ? (a(),
                i(
                  T,
                  { key: 1 },
                  [
                    l.value
                      ? (a(),
                        $(
                          r(t),
                          {
                            key: 0,
                            algolia:
                              ((N = r(n).search) == null
                                ? void 0
                                : N.options) ?? r(n).algolia,
                            onVnodeBeforeMount:
                              M[2] || (M[2] = (y) => (d.value = !0)),
                          },
                          null,
                          8,
                          ["algolia"],
                        ))
                      : f("", !0),
                    d.value
                      ? f("", !0)
                      : (a(),
                        i("div", xa, [
                          h(Ve, { placeholder: p.value, onClick: _ }, null, 8, [
                            "placeholder",
                          ]),
                        ])),
                  ],
                  64,
                ))
              : f("", !0),
          ])
        );
      };
    },
  });
const za = g({
  __name: "VPNavBarSocialLinks",
  setup(s) {
    const { theme: e } = V();
    return (t, n) =>
      r(e).socialLinks
        ? (a(),
          $(
            $e,
            { key: 0, class: "VPNavBarSocialLinks", links: r(e).socialLinks },
            null,
            8,
            ["links"],
          ))
        : f("", !0);
  },
});
const Da = m(za, [["__scopeId", "data-v-ef6192dc"]]),
  Ea = ["href"],
  Fa = g({
    __name: "VPNavBarTitle",
    setup(s) {
      const { site: e, theme: t } = V(),
        { hasSidebar: n } = F(),
        { currentLang: o } = X();
      return (l, d) => (
        a(),
        i(
          "div",
          { class: C(["VPNavBarTitle", { "has-sidebar": r(n) }]) },
          [
            c(
              "a",
              { class: "title", href: r(t).logoLink ?? r(J)(r(o).link) },
              [
                u(l.$slots, "nav-bar-title-before", {}, void 0, !0),
                r(t).logo
                  ? (a(),
                    $(
                      ee,
                      { key: 0, class: "logo", image: r(t).logo },
                      null,
                      8,
                      ["image"],
                    ))
                  : f("", !0),
                r(t).siteTitle
                  ? (a(), i(T, { key: 1 }, [x(L(r(t).siteTitle), 1)], 64))
                  : r(t).siteTitle === void 0
                  ? (a(), i(T, { key: 2 }, [x(L(r(e).title), 1)], 64))
                  : f("", !0),
                u(l.$slots, "nav-bar-title-after", {}, void 0, !0),
              ],
              8,
              Ea,
            ),
          ],
          2,
        )
      );
    },
  });
const Oa = m(Fa, [["__scopeId", "data-v-2973dbb4"]]),
  Ga = {},
  Ua = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  ja = c("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
  Ka = c(
    "path",
    {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v",
    },
    null,
    -1,
  ),
  qa = [ja, Ka];
function Ra(s, e) {
  return a(), i("svg", Ua, qa);
}
const xe = m(Ga, [["render", Ra]]),
  Wa = { class: "items" },
  Ya = { class: "title" },
  Ja = g({
    __name: "VPNavBarTranslations",
    setup(s) {
      const { theme: e } = V(),
        { localeLinks: t, currentLang: n } = X({ correspondingLink: !0 });
      return (o, l) =>
        r(t).length && r(n).label
          ? (a(),
            $(
              be,
              {
                key: 0,
                class: "VPNavBarTranslations",
                icon: xe,
                label: r(e).langMenuLabel || "Change language",
              },
              {
                default: v(() => [
                  c("div", Wa, [
                    c("p", Ya, L(r(n).label), 1),
                    (a(!0),
                    i(
                      T,
                      null,
                      A(
                        r(t),
                        (d) => (
                          a(),
                          $(oe, { key: d.link, item: d }, null, 8, ["item"])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["label"],
            ))
          : f("", !0);
    },
  });
const Xa = m(Ja, [["__scopeId", "data-v-ff4524ae"]]),
  Za = (s) => (H("data-v-f1abbc6e"), (s = s()), z(), s),
  Qa = { class: "container" },
  el = { class: "title" },
  tl = { class: "content" },
  sl = Za(() => c("div", { class: "curtain" }, null, -1)),
  nl = { class: "content-body" },
  ol = g({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(s) {
      const { y: e } = Se(),
        { hasSidebar: t } = F(),
        { frontmatter: n } = V(),
        o = I({});
      return (
        we(() => {
          o.value = {
            "has-sidebar": t.value,
            top: n.value.layout === "home" && e.value === 0,
          };
        }),
        (l, d) => (
          a(),
          i(
            "div",
            { class: C(["VPNavBar", o.value]) },
            [
              c("div", Qa, [
                c("div", el, [
                  h(Oa, null, {
                    "nav-bar-title-before": v(() => [
                      u(l.$slots, "nav-bar-title-before", {}, void 0, !0),
                    ]),
                    "nav-bar-title-after": v(() => [
                      u(l.$slots, "nav-bar-title-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                ]),
                c("div", tl, [
                  sl,
                  c("div", nl, [
                    u(l.$slots, "nav-bar-content-before", {}, void 0, !0),
                    h(Ha, { class: "search" }),
                    h(Sa, { class: "menu" }),
                    h(Xa, { class: "translations" }),
                    h(bo, { class: "appearance" }),
                    h(Da, { class: "social-links" }),
                    h(_a, { class: "extra" }),
                    u(l.$slots, "nav-bar-content-after", {}, void 0, !0),
                    h(
                      ga,
                      {
                        class: "hamburger",
                        active: l.isScreenOpen,
                        onClick:
                          d[0] || (d[0] = (p) => l.$emit("toggle-screen")),
                      },
                      null,
                      8,
                      ["active"],
                    ),
                  ]),
                ]),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const al = m(ol, [["__scopeId", "data-v-f1abbc6e"]]),
  ll = { key: 0, class: "VPNavScreenAppearance" },
  rl = { class: "text" },
  il = g({
    __name: "VPNavScreenAppearance",
    setup(s) {
      const { site: e, theme: t } = V();
      return (n, o) =>
        r(e).appearance
          ? (a(),
            i("div", ll, [
              c("p", rl, L(r(t).darkModeSwitchLabel || "Appearance"), 1),
              h(me),
            ]))
          : f("", !0);
    },
  });
const cl = m(il, [["__scopeId", "data-v-0dc5cf49"]]),
  ul = g({
    __name: "VPNavScreenMenuLink",
    props: { item: {} },
    setup(s) {
      const e = ne("close-screen");
      return (t, n) => (
        a(),
        $(
          G,
          {
            class: "VPNavScreenMenuLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: r(e),
          },
          { default: v(() => [x(L(t.item.text), 1)]), _: 1 },
          8,
          ["href", "target", "rel", "onClick"],
        )
      );
    },
  });
const dl = m(ul, [["__scopeId", "data-v-fe523e3d"]]),
  _l = {},
  vl = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  pl = c(
    "path",
    {
      d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
    },
    null,
    -1,
  ),
  hl = [pl];
function fl(s, e) {
  return a(), i("svg", vl, hl);
}
const ml = m(_l, [["render", fl]]),
  gl = g({
    __name: "VPNavScreenMenuGroupLink",
    props: { item: {} },
    setup(s) {
      const e = ne("close-screen");
      return (t, n) => (
        a(),
        $(
          G,
          {
            class: "VPNavScreenMenuGroupLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: r(e),
          },
          { default: v(() => [x(L(t.item.text), 1)]), _: 1 },
          8,
          ["href", "target", "rel", "onClick"],
        )
      );
    },
  });
const He = m(gl, [["__scopeId", "data-v-aea78dd1"]]),
  bl = { class: "VPNavScreenMenuGroupSection" },
  $l = { key: 0, class: "title" },
  kl = g({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i("div", bl, [
          e.text ? (a(), i("p", $l, L(e.text), 1)) : f("", !0),
          (a(!0),
          i(
            T,
            null,
            A(
              e.items,
              (n) => (a(), $(He, { key: n.text, item: n }, null, 8, ["item"])),
            ),
            128,
          )),
        ])
      );
    },
  });
const yl = m(kl, [["__scopeId", "data-v-f60dbfa7"]]),
  Pl = ["aria-controls", "aria-expanded"],
  Vl = { class: "button-text" },
  wl = ["id"],
  Ll = { key: 1, class: "group" },
  Sl = g({
    __name: "VPNavScreenMenuGroup",
    props: { text: {}, items: {} },
    setup(s) {
      const e = s,
        t = I(!1),
        n = P(() => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`);
      function o() {
        t.value = !t.value;
      }
      return (l, d) => (
        a(),
        i(
          "div",
          { class: C(["VPNavScreenMenuGroup", { open: t.value }]) },
          [
            c(
              "button",
              {
                class: "button",
                "aria-controls": n.value,
                "aria-expanded": t.value,
                onClick: o,
              },
              [c("span", Vl, L(l.text), 1), h(ml, { class: "button-icon" })],
              8,
              Pl,
            ),
            c(
              "div",
              { id: n.value, class: "items" },
              [
                (a(!0),
                i(
                  T,
                  null,
                  A(
                    l.items,
                    (p) => (
                      a(),
                      i(
                        T,
                        { key: p.text },
                        [
                          "link" in p
                            ? (a(),
                              i("div", { key: p.text, class: "item" }, [
                                h(He, { item: p }, null, 8, ["item"]),
                              ]))
                            : (a(),
                              i("div", Ll, [
                                h(
                                  yl,
                                  { text: p.text, items: p.items },
                                  null,
                                  8,
                                  ["text", "items"],
                                ),
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              wl,
            ),
          ],
          2,
        )
      );
    },
  });
const Ml = m(Sl, [["__scopeId", "data-v-c2c554ed"]]),
  Nl = { key: 0, class: "VPNavScreenMenu" },
  Il = g({
    __name: "VPNavScreenMenu",
    setup(s) {
      const { theme: e } = V();
      return (t, n) =>
        r(e).nav
          ? (a(),
            i("nav", Nl, [
              (a(!0),
              i(
                T,
                null,
                A(
                  r(e).nav,
                  (o) => (
                    a(),
                    i(
                      T,
                      { key: o.text },
                      [
                        "link" in o
                          ? (a(), $(dl, { key: 0, item: o }, null, 8, ["item"]))
                          : (a(),
                            $(
                              Ml,
                              { key: 1, text: o.text || "", items: o.items },
                              null,
                              8,
                              ["text", "items"],
                            )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f("", !0);
    },
  }),
  Tl = g({
    __name: "VPNavScreenSocialLinks",
    setup(s) {
      const { theme: e } = V();
      return (t, n) =>
        r(e).socialLinks
          ? (a(),
            $(
              $e,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: r(e).socialLinks,
              },
              null,
              8,
              ["links"],
            ))
          : f("", !0);
    },
  }),
  Cl = { class: "list" },
  Bl = g({
    __name: "VPNavScreenTranslations",
    setup(s) {
      const { localeLinks: e, currentLang: t } = X({ correspondingLink: !0 }),
        n = I(!1);
      function o() {
        n.value = !n.value;
      }
      return (l, d) =>
        r(e).length && r(t).label
          ? (a(),
            i(
              "div",
              {
                key: 0,
                class: C(["VPNavScreenTranslations", { open: n.value }]),
              },
              [
                c("button", { class: "title", onClick: o }, [
                  h(xe, { class: "icon lang" }),
                  x(" " + L(r(t).label) + " ", 1),
                  h(Ae, { class: "icon chevron" }),
                ]),
                c("ul", Cl, [
                  (a(!0),
                  i(
                    T,
                    null,
                    A(
                      r(e),
                      (p) => (
                        a(),
                        i("li", { key: p.link, class: "item" }, [
                          h(
                            G,
                            { class: "link", href: p.link },
                            { default: v(() => [x(L(p.text), 1)]), _: 2 },
                            1032,
                            ["href"],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : f("", !0);
    },
  });
const Al = m(Bl, [["__scopeId", "data-v-41505286"]]),
  xl = { class: "container" },
  Hl = g({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(s) {
      const e = I(null),
        t = Me(W ? document.body : null);
      return (n, o) => (
        a(),
        $(
          ce,
          {
            name: "fade",
            onEnter: o[0] || (o[0] = (l) => (t.value = !0)),
            onAfterLeave: o[1] || (o[1] = (l) => (t.value = !1)),
          },
          {
            default: v(() => [
              n.open
                ? (a(),
                  i(
                    "div",
                    {
                      key: 0,
                      class: "VPNavScreen",
                      ref_key: "screen",
                      ref: e,
                      id: "VPNavScreen",
                    },
                    [
                      c("div", xl, [
                        u(
                          n.$slots,
                          "nav-screen-content-before",
                          {},
                          void 0,
                          !0,
                        ),
                        h(Il, { class: "menu" }),
                        h(Al, { class: "translations" }),
                        h(cl, { class: "appearance" }),
                        h(Tl, { class: "social-links" }),
                        u(n.$slots, "nav-screen-content-after", {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : f("", !0),
            ]),
            _: 3,
          },
        )
      );
    },
  });
const zl = m(Hl, [["__scopeId", "data-v-57cce842"]]),
  Dl = { key: 0, class: "VPNav" },
  El = g({
    __name: "VPNav",
    setup(s) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: n } = Jn(),
        { frontmatter: o } = V(),
        l = P(() => o.value.navbar !== !1);
      return (
        Ne("close-screen", t),
        te(() => {
          W && document.documentElement.classList.toggle("hide-nav", !l.value);
        }),
        (d, p) =>
          l.value
            ? (a(),
              i("header", Dl, [
                h(
                  al,
                  { "is-screen-open": r(e), onToggleScreen: r(n) },
                  {
                    "nav-bar-title-before": v(() => [
                      u(d.$slots, "nav-bar-title-before", {}, void 0, !0),
                    ]),
                    "nav-bar-title-after": v(() => [
                      u(d.$slots, "nav-bar-title-after", {}, void 0, !0),
                    ]),
                    "nav-bar-content-before": v(() => [
                      u(d.$slots, "nav-bar-content-before", {}, void 0, !0),
                    ]),
                    "nav-bar-content-after": v(() => [
                      u(d.$slots, "nav-bar-content-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ["is-screen-open", "onToggleScreen"],
                ),
                h(
                  zl,
                  { open: r(e) },
                  {
                    "nav-screen-content-before": v(() => [
                      u(d.$slots, "nav-screen-content-before", {}, void 0, !0),
                    ]),
                    "nav-screen-content-after": v(() => [
                      u(d.$slots, "nav-screen-content-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ["open"],
                ),
              ]))
            : f("", !0)
      );
    },
  });
const Fl = m(El, [["__scopeId", "data-v-7ad780c2"]]),
  Ol = (s) => (H("data-v-bd01e0d5"), (s = s()), z(), s),
  Gl = ["role", "tabindex"],
  Ul = Ol(() => c("div", { class: "indicator" }, null, -1)),
  jl = ["onKeydown"],
  Kl = { key: 1, class: "items" },
  ql = g({
    __name: "VPSidebarItem",
    props: { item: {}, depth: {} },
    setup(s) {
      const e = s,
        {
          collapsed: t,
          collapsible: n,
          isLink: o,
          isActiveLink: l,
          hasActiveLink: d,
          hasChildren: p,
          toggle: _,
        } = mt(P(() => e.item)),
        b = P(() => (p.value ? "section" : "div")),
        w = P(() => (o.value ? "a" : "div")),
        S = P(() =>
          p.value ? (e.depth + 2 === 7 ? "p" : `h${e.depth + 2}`) : "p",
        ),
        B = P(() => (o.value ? void 0 : "button")),
        k = P(() => [
          [`level-${e.depth}`],
          { collapsible: n.value },
          { collapsed: t.value },
          { "is-link": o.value },
          { "is-active": l.value },
          { "has-active": d.value },
        ]);
      function M(y) {
        ("key" in y && y.key !== "Enter") || (!e.item.link && _());
      }
      function N() {
        e.item.link && _();
      }
      return (y, D) => {
        const O = R("VPSidebarItem", !0);
        return (
          a(),
          $(
            U(b.value),
            { class: C(["VPSidebarItem", k.value]) },
            {
              default: v(() => [
                y.item.text
                  ? (a(),
                    i(
                      "div",
                      Z(
                        { key: 0, class: "item", role: B.value },
                        We(y.item.items ? { click: M, keydown: M } : {}, !0),
                        { tabindex: y.item.items && 0 },
                      ),
                      [
                        Ul,
                        y.item.link
                          ? (a(),
                            $(
                              G,
                              {
                                key: 0,
                                tag: w.value,
                                class: "link",
                                href: y.item.link,
                                rel: y.item.rel,
                                target: y.item.target,
                              },
                              {
                                default: v(() => [
                                  (a(),
                                  $(
                                    U(S.value),
                                    { class: "text", innerHTML: y.item.text },
                                    null,
                                    8,
                                    ["innerHTML"],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ["tag", "href", "rel", "target"],
                            ))
                          : (a(),
                            $(
                              U(S.value),
                              { key: 1, class: "text", innerHTML: y.item.text },
                              null,
                              8,
                              ["innerHTML"],
                            )),
                        y.item.collapsed != null
                          ? (a(),
                            i(
                              "div",
                              {
                                key: 2,
                                class: "caret",
                                role: "button",
                                "aria-label": "toggle section",
                                onClick: N,
                                onKeydown: Re(N, ["enter"]),
                                tabindex: "0",
                              },
                              [h(fe, { class: "caret-icon" })],
                              40,
                              jl,
                            ))
                          : f("", !0),
                      ],
                      16,
                      Gl,
                    ))
                  : f("", !0),
                y.item.items && y.item.items.length
                  ? (a(),
                    i("div", Kl, [
                      y.depth < 5
                        ? (a(!0),
                          i(
                            T,
                            { key: 0 },
                            A(
                              y.item.items,
                              (E) => (
                                a(),
                                $(
                                  O,
                                  { key: E.text, item: E, depth: y.depth + 1 },
                                  null,
                                  8,
                                  ["item", "depth"],
                                )
                              ),
                            ),
                            128,
                          ))
                        : f("", !0),
                    ]))
                  : f("", !0),
              ]),
              _: 1,
            },
            8,
            ["class"],
          )
        );
      };
    },
  });
const Rl = m(ql, [["__scopeId", "data-v-bd01e0d5"]]),
  ze = (s) => (H("data-v-ee2efba5"), (s = s()), z(), s),
  Wl = ze(() => c("div", { class: "curtain" }, null, -1)),
  Yl = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  Jl = ze(() =>
    c(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1,
    ),
  ),
  Xl = g({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(s) {
      const e = s,
        { sidebarGroups: t, hasSidebar: n } = F(),
        o = I(null),
        l = Me(W ? document.body : null);
      return (
        q(
          [e, o],
          () => {
            var d;
            e.open
              ? ((l.value = !0), (d = o.value) == null || d.focus())
              : (l.value = !1);
          },
          { immediate: !0, flush: "post" },
        ),
        (d, p) =>
          r(n)
            ? (a(),
              i(
                "aside",
                {
                  key: 0,
                  class: C(["VPSidebar", { open: d.open }]),
                  ref_key: "navEl",
                  ref: o,
                  onClick: p[0] || (p[0] = Ye(() => {}, ["stop"])),
                },
                [
                  Wl,
                  c("nav", Yl, [
                    Jl,
                    u(d.$slots, "sidebar-nav-before", {}, void 0, !0),
                    (a(!0),
                    i(
                      T,
                      null,
                      A(
                        r(t),
                        (_) => (
                          a(),
                          i("div", { key: _.text, class: "group" }, [
                            h(Rl, { item: _, depth: 0 }, null, 8, ["item"]),
                          ])
                        ),
                      ),
                      128,
                    )),
                    u(d.$slots, "sidebar-nav-after", {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : f("", !0)
      );
    },
  });
const Zl = m(Xl, [["__scopeId", "data-v-ee2efba5"]]),
  Ql = g({
    __name: "VPSkipLink",
    setup(s) {
      const e = se(),
        t = I();
      q(
        () => e.path,
        () => t.value.focus(),
      );
      function n({ target: o }) {
        const l = document.getElementById(decodeURIComponent(o.hash).slice(1));
        if (l) {
          const d = () => {
            l.removeAttribute("tabindex"), l.removeEventListener("blur", d);
          };
          l.setAttribute("tabindex", "-1"),
            l.addEventListener("blur", d),
            l.focus(),
            window.scrollTo(0, 0);
        }
      }
      return (o, l) => (
        a(),
        i(
          T,
          null,
          [
            c(
              "span",
              { ref_key: "backToTop", ref: t, tabindex: "-1" },
              null,
              512,
            ),
            c(
              "a",
              {
                href: "#VPContent",
                class: "VPSkipLink visually-hidden",
                onClick: n,
              },
              " Skip to content ",
            ),
          ],
          64,
        )
      );
    },
  });
const er = m(Ql, [["__scopeId", "data-v-c8291ffa"]]),
  tr = g({
    __name: "Layout",
    setup(s) {
      const { isOpen: e, open: t, close: n } = F(),
        o = se();
      q(() => o.path, n), ft(e, n);
      const { frontmatter: l } = V(),
        d = Je(),
        p = P(() => !!d["home-hero-image"]);
      return (
        Ne("hero-image-slot-exists", p),
        (_, b) => {
          const w = R("Content");
          return r(l).layout !== !1
            ? (a(),
              i(
                "div",
                { key: 0, class: C(["Layout", r(l).pageClass]) },
                [
                  u(_.$slots, "layout-top", {}, void 0, !0),
                  h(er),
                  h(
                    tt,
                    { class: "backdrop", show: r(e), onClick: r(n) },
                    null,
                    8,
                    ["show", "onClick"],
                  ),
                  h(Fl, null, {
                    "nav-bar-title-before": v(() => [
                      u(_.$slots, "nav-bar-title-before", {}, void 0, !0),
                    ]),
                    "nav-bar-title-after": v(() => [
                      u(_.$slots, "nav-bar-title-after", {}, void 0, !0),
                    ]),
                    "nav-bar-content-before": v(() => [
                      u(_.$slots, "nav-bar-content-before", {}, void 0, !0),
                    ]),
                    "nav-bar-content-after": v(() => [
                      u(_.$slots, "nav-bar-content-after", {}, void 0, !0),
                    ]),
                    "nav-screen-content-before": v(() => [
                      u(_.$slots, "nav-screen-content-before", {}, void 0, !0),
                    ]),
                    "nav-screen-content-after": v(() => [
                      u(_.$slots, "nav-screen-content-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  h(Yn, { open: r(e), onOpenMenu: r(t) }, null, 8, [
                    "open",
                    "onOpenMenu",
                  ]),
                  h(
                    Zl,
                    { open: r(e) },
                    {
                      "sidebar-nav-before": v(() => [
                        u(_.$slots, "sidebar-nav-before", {}, void 0, !0),
                      ]),
                      "sidebar-nav-after": v(() => [
                        u(_.$slots, "sidebar-nav-after", {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ["open"],
                  ),
                  h(Sn, null, {
                    "page-top": v(() => [
                      u(_.$slots, "page-top", {}, void 0, !0),
                    ]),
                    "page-bottom": v(() => [
                      u(_.$slots, "page-bottom", {}, void 0, !0),
                    ]),
                    "not-found": v(() => [
                      u(_.$slots, "not-found", {}, void 0, !0),
                    ]),
                    "home-hero-before": v(() => [
                      u(_.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-info": v(() => [
                      u(_.$slots, "home-hero-info", {}, void 0, !0),
                    ]),
                    "home-hero-image": v(() => [
                      u(_.$slots, "home-hero-image", {}, void 0, !0),
                    ]),
                    "home-hero-after": v(() => [
                      u(_.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": v(() => [
                      u(_.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": v(() => [
                      u(_.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    "doc-footer-before": v(() => [
                      u(_.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": v(() => [
                      u(_.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": v(() => [
                      u(_.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "doc-top": v(() => [
                      u(_.$slots, "doc-top", {}, void 0, !0),
                    ]),
                    "doc-bottom": v(() => [
                      u(_.$slots, "doc-bottom", {}, void 0, !0),
                    ]),
                    "aside-top": v(() => [
                      u(_.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-bottom": v(() => [
                      u(_.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    "aside-outline-before": v(() => [
                      u(_.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": v(() => [
                      u(_.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": v(() => [
                      u(_.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": v(() => [
                      u(_.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  h(Cn),
                  u(_.$slots, "layout-bottom", {}, void 0, !0),
                ],
                2,
              ))
            : (a(), $(w, { key: 1 }));
        }
      );
    },
  });
const sr = m(tr, [["__scopeId", "data-v-9d8abc1e"]]);
const or = {
  Layout: sr,
  enhanceApp: ({ app: s }) => {
    s.component("Badge", Ze);
  },
};
function ar(s, e) {
  const { localeIndex: t } = V();
  function n(o) {
    var k, M;
    const l = o.split("."),
      d = s && typeof s == "object",
      p =
        (d &&
          ((M = (k = s.locales) == null ? void 0 : k[t.value]) == null
            ? void 0
            : M.translations)) ||
        null,
      _ = (d && s.translations) || null;
    let b = p,
      w = _,
      S = e;
    const B = l.pop();
    for (const N of l) {
      let y = null;
      const D = S == null ? void 0 : S[N];
      D && (y = S = D);
      const O = w == null ? void 0 : w[N];
      O && (y = w = O);
      const E = b == null ? void 0 : b[N];
      E && (y = b = E), D || (S = y), O || (w = y), E || (b = y);
    }
    return (
      (b == null ? void 0 : b[B]) ??
      (w == null ? void 0 : w[B]) ??
      (S == null ? void 0 : S[B]) ??
      ""
    );
  }
  return n;
}
export { ar as c, or as t, V as u };
