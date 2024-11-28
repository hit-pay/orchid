var f = typeof global == "object" && global && global.Object === Object && global, l = typeof self == "object" && self && self.Object === Object && self, g = f || l || Function("return this")(), n = g.Symbol, a = Object.prototype, s = a.hasOwnProperty, j = a.toString, e = n ? n.toStringTag : void 0;
function u(t) {
  var r = s.call(t, e), i = t[e];
  try {
    t[e] = void 0;
    var c = !0;
  } catch {
  }
  var b = j.call(t);
  return c && (r ? t[e] = i : delete t[e]), b;
}
var y = Object.prototype, O = y.toString;
function d(t) {
  return O.call(t);
}
var S = "[object Null]", T = "[object Undefined]", o = n ? n.toStringTag : void 0;
function v(t) {
  return t == null ? t === void 0 ? T : S : o && o in Object(t) ? u(t) : d(t);
}
function h(t) {
  return t != null && typeof t == "object";
}
function m(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
export {
  n as S,
  m as a,
  v as b,
  f,
  h as i,
  g as r
};
