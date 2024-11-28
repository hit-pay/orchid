var w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function v(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var c = typeof global == "object" && global && global.Object === Object && global, b = typeof self == "object" && self && self.Object === Object && self, s = c || b || Function("return this")(), n = s.Symbol, a = Object.prototype, g = a.hasOwnProperty, d = a.toString, e = n ? n.toStringTag : void 0;
function u(t) {
  var o = g.call(t, e), i = t[e];
  try {
    t[e] = void 0;
    var l = !0;
  } catch {
  }
  var f = d.call(t);
  return l && (o ? t[e] = i : delete t[e]), f;
}
var j = Object.prototype, p = j.toString;
function y(t) {
  return p.call(t);
}
var O = "[object Null]", T = "[object Undefined]", r = n ? n.toStringTag : void 0;
function h(t) {
  return t == null ? t === void 0 ? T : O : r && r in Object(t) ? u(t) : y(t);
}
function m(t) {
  return t != null && typeof t == "object";
}
function P(t) {
  var o = typeof t;
  return t != null && (o == "object" || o == "function");
}
export {
  n as S,
  P as a,
  h as b,
  w as c,
  c as f,
  v as g,
  m as i,
  s as r
};
