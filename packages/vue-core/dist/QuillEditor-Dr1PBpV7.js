var na = Object.defineProperty;
var ra = (n, t, e) => t in n ? na(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var _ = (n, t, e) => ra(n, typeof t != "symbol" ? t + "" : t, e);
import { a as ie, b as Xe, r as Wt, i as Gt, f as sa, S as yr, c as ee, g as Hl } from "./isObject-DJSDUCEw.js";
import { defineComponent as ia, onMounted as la, onBeforeUnmount as oa, ref as Ui, watch as Ss, nextTick as Fi, h as aa } from "vue";
var pe = Array.isArray;
function zl(n) {
  return n;
}
var ca = "[object AsyncFunction]", ua = "[object Function]", ha = "[object GeneratorFunction]", fa = "[object Proxy]";
function gi(n) {
  if (!ie(n))
    return !1;
  var t = Xe(n);
  return t == ua || t == ha || t == ca || t == fa;
}
var Os = Wt["__core-js_shared__"], Hi = function() {
  var n = /[^.]+$/.exec(Os && Os.keys && Os.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function da(n) {
  return !!Hi && Hi in n;
}
var ga = Function.prototype, pa = ga.toString;
function ye(n) {
  if (n != null) {
    try {
      return pa.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var ma = /[\\^$.*+?()[\]{}|]/g, ba = /^\[object .+?Constructor\]$/, ya = Function.prototype, va = Object.prototype, Ea = ya.toString, Aa = va.hasOwnProperty, Na = RegExp(
  "^" + Ea.call(Aa).replace(ma, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wa(n) {
  if (!ie(n) || da(n))
    return !1;
  var t = gi(n) ? Na : ba;
  return t.test(ye(n));
}
function Ta(n, t) {
  return n == null ? void 0 : n[t];
}
function ve(n, t) {
  var e = Ta(n, t);
  return wa(e) ? e : void 0;
}
var Fs = ve(Wt, "WeakMap"), zi = Object.create, xa = /* @__PURE__ */ function() {
  function n() {
  }
  return function(t) {
    if (!ie(t))
      return {};
    if (zi)
      return zi(t);
    n.prototype = t;
    var e = new n();
    return n.prototype = void 0, e;
  };
}();
function La(n, t, e) {
  switch (e.length) {
    case 0:
      return n.call(t);
    case 1:
      return n.call(t, e[0]);
    case 2:
      return n.call(t, e[0], e[1]);
    case 3:
      return n.call(t, e[0], e[1], e[2]);
  }
  return n.apply(t, e);
}
function Gl(n, t) {
  var e = -1, r = n.length;
  for (t || (t = Array(r)); ++e < r; )
    t[e] = n[e];
  return t;
}
var _a = 800, Sa = 16, Oa = Date.now;
function qa(n) {
  var t = 0, e = 0;
  return function() {
    var r = Oa(), s = Sa - (r - e);
    if (e = r, s > 0) {
      if (++t >= _a)
        return arguments[0];
    } else
      t = 0;
    return n.apply(void 0, arguments);
  };
}
function Ca(n) {
  return function() {
    return n;
  };
}
var vr = function() {
  try {
    var n = ve(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}(), Ia = vr ? function(n, t) {
  return vr(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ca(t),
    writable: !0
  });
} : zl, Ra = qa(Ia);
function ka(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1; )
    ;
  return n;
}
var Ba = 9007199254740991, Ma = /^(?:0|[1-9]\d*)$/;
function Kl(n, t) {
  var e = typeof n;
  return t = t ?? Ba, !!t && (e == "number" || e != "symbol" && Ma.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function pi(n, t, e) {
  t == "__proto__" && vr ? vr(n, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : n[t] = e;
}
function Cn(n, t) {
  return n === t || n !== n && t !== t;
}
var Da = Object.prototype, $a = Da.hasOwnProperty;
function Vl(n, t, e) {
  var r = n[t];
  (!($a.call(n, t) && Cn(r, e)) || e === void 0 && !(t in n)) && pi(n, t, e);
}
function In(n, t, e, r) {
  var s = !e;
  e || (e = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var a = t[i], c = void 0;
    c === void 0 && (c = n[a]), s ? pi(e, a, c) : Vl(e, a, c);
  }
  return e;
}
var Gi = Math.max;
function ja(n, t, e) {
  return t = Gi(t === void 0 ? n.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, i = Gi(r.length - t, 0), l = Array(i); ++s < i; )
      l[s] = r[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = r[s];
    return a[t] = e(l), La(n, this, a);
  };
}
function Pa(n, t) {
  return Ra(ja(n, t, zl), n + "");
}
var Ua = 9007199254740991;
function Wl(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Ua;
}
function xr(n) {
  return n != null && Wl(n.length) && !gi(n);
}
function Fa(n, t, e) {
  if (!ie(e))
    return !1;
  var r = typeof t;
  return (r == "number" ? xr(e) && Kl(t, e.length) : r == "string" && t in e) ? Cn(e[t], n) : !1;
}
function Ha(n) {
  return Pa(function(t, e) {
    var r = -1, s = e.length, i = s > 1 ? e[s - 1] : void 0, l = s > 2 ? e[2] : void 0;
    for (i = n.length > 3 && typeof i == "function" ? (s--, i) : void 0, l && Fa(e[0], e[1], l) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++r < s; ) {
      var a = e[r];
      a && n(t, a, r, i);
    }
    return t;
  });
}
var za = Object.prototype;
function mi(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || za;
  return n === e;
}
function Ga(n, t) {
  for (var e = -1, r = Array(n); ++e < n; )
    r[e] = t(e);
  return r;
}
var Ka = "[object Arguments]";
function Ki(n) {
  return Gt(n) && Xe(n) == Ka;
}
var Zl = Object.prototype, Va = Zl.hasOwnProperty, Wa = Zl.propertyIsEnumerable, Hs = Ki(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ki : function(n) {
  return Gt(n) && Va.call(n, "callee") && !Wa.call(n, "callee");
};
function Za() {
  return !1;
}
var Xl = typeof exports == "object" && exports && !exports.nodeType && exports, Vi = Xl && typeof module == "object" && module && !module.nodeType && module, Xa = Vi && Vi.exports === Xl, Wi = Xa ? Wt.Buffer : void 0, Ya = Wi ? Wi.isBuffer : void 0, wn = Ya || Za, Qa = "[object Arguments]", Ja = "[object Array]", tc = "[object Boolean]", ec = "[object Date]", nc = "[object Error]", rc = "[object Function]", sc = "[object Map]", ic = "[object Number]", lc = "[object Object]", oc = "[object RegExp]", ac = "[object Set]", cc = "[object String]", uc = "[object WeakMap]", hc = "[object ArrayBuffer]", fc = "[object DataView]", dc = "[object Float32Array]", gc = "[object Float64Array]", pc = "[object Int8Array]", mc = "[object Int16Array]", bc = "[object Int32Array]", yc = "[object Uint8Array]", vc = "[object Uint8ClampedArray]", Ec = "[object Uint16Array]", Ac = "[object Uint32Array]", z = {};
z[dc] = z[gc] = z[pc] = z[mc] = z[bc] = z[yc] = z[vc] = z[Ec] = z[Ac] = !0;
z[Qa] = z[Ja] = z[hc] = z[tc] = z[fc] = z[ec] = z[nc] = z[rc] = z[sc] = z[ic] = z[lc] = z[oc] = z[ac] = z[cc] = z[uc] = !1;
function Nc(n) {
  return Gt(n) && Wl(n.length) && !!z[Xe(n)];
}
function bi(n) {
  return function(t) {
    return n(t);
  };
}
var Yl = typeof exports == "object" && exports && !exports.nodeType && exports, vn = Yl && typeof module == "object" && module && !module.nodeType && module, wc = vn && vn.exports === Yl, qs = wc && sa.process, Ge = function() {
  try {
    var n = vn && vn.require && vn.require("util").types;
    return n || qs && qs.binding && qs.binding("util");
  } catch {
  }
}(), Zi = Ge && Ge.isTypedArray, yi = Zi ? bi(Zi) : Nc, Tc = Object.prototype, xc = Tc.hasOwnProperty;
function Ql(n, t) {
  var e = pe(n), r = !e && Hs(n), s = !e && !r && wn(n), i = !e && !r && !s && yi(n), l = e || r || s || i, a = l ? Ga(n.length, String) : [], c = a.length;
  for (var h in n)
    (t || xc.call(n, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Kl(h, c))) && a.push(h);
  return a;
}
function Jl(n, t) {
  return function(e) {
    return n(t(e));
  };
}
var Lc = Jl(Object.keys, Object), _c = Object.prototype, Sc = _c.hasOwnProperty;
function Oc(n) {
  if (!mi(n))
    return Lc(n);
  var t = [];
  for (var e in Object(n))
    Sc.call(n, e) && e != "constructor" && t.push(e);
  return t;
}
function vi(n) {
  return xr(n) ? Ql(n) : Oc(n);
}
function qc(n) {
  var t = [];
  if (n != null)
    for (var e in Object(n))
      t.push(e);
  return t;
}
var Cc = Object.prototype, Ic = Cc.hasOwnProperty;
function Rc(n) {
  if (!ie(n))
    return qc(n);
  var t = mi(n), e = [];
  for (var r in n)
    r == "constructor" && (t || !Ic.call(n, r)) || e.push(r);
  return e;
}
function Rn(n) {
  return xr(n) ? Ql(n, !0) : Rc(n);
}
var Tn = ve(Object, "create");
function kc() {
  this.__data__ = Tn ? Tn(null) : {}, this.size = 0;
}
function Bc(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var Mc = "__lodash_hash_undefined__", Dc = Object.prototype, $c = Dc.hasOwnProperty;
function jc(n) {
  var t = this.__data__;
  if (Tn) {
    var e = t[n];
    return e === Mc ? void 0 : e;
  }
  return $c.call(t, n) ? t[n] : void 0;
}
var Pc = Object.prototype, Uc = Pc.hasOwnProperty;
function Fc(n) {
  var t = this.__data__;
  return Tn ? t[n] !== void 0 : Uc.call(t, n);
}
var Hc = "__lodash_hash_undefined__";
function zc(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Tn && t === void 0 ? Hc : t, this;
}
function me(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = kc;
me.prototype.delete = Bc;
me.prototype.get = jc;
me.prototype.has = Fc;
me.prototype.set = zc;
function Gc() {
  this.__data__ = [], this.size = 0;
}
function Lr(n, t) {
  for (var e = n.length; e--; )
    if (Cn(n[e][0], t))
      return e;
  return -1;
}
var Kc = Array.prototype, Vc = Kc.splice;
function Wc(n) {
  var t = this.__data__, e = Lr(t, n);
  if (e < 0)
    return !1;
  var r = t.length - 1;
  return e == r ? t.pop() : Vc.call(t, e, 1), --this.size, !0;
}
function Zc(n) {
  var t = this.__data__, e = Lr(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function Xc(n) {
  return Lr(this.__data__, n) > -1;
}
function Yc(n, t) {
  var e = this.__data__, r = Lr(e, n);
  return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
}
function Zt(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
Zt.prototype.clear = Gc;
Zt.prototype.delete = Wc;
Zt.prototype.get = Zc;
Zt.prototype.has = Xc;
Zt.prototype.set = Yc;
var xn = ve(Wt, "Map");
function Qc() {
  this.size = 0, this.__data__ = {
    hash: new me(),
    map: new (xn || Zt)(),
    string: new me()
  };
}
function Jc(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function _r(n, t) {
  var e = n.__data__;
  return Jc(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function tu(n) {
  var t = _r(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function eu(n) {
  return _r(this, n).get(n);
}
function nu(n) {
  return _r(this, n).has(n);
}
function ru(n, t) {
  var e = _r(this, n), r = e.size;
  return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
}
function Ee(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
Ee.prototype.clear = Qc;
Ee.prototype.delete = tu;
Ee.prototype.get = eu;
Ee.prototype.has = nu;
Ee.prototype.set = ru;
function to(n, t) {
  for (var e = -1, r = t.length, s = n.length; ++e < r; )
    n[s + e] = t[e];
  return n;
}
var Ei = Jl(Object.getPrototypeOf, Object), su = "[object Object]", iu = Function.prototype, lu = Object.prototype, eo = iu.toString, ou = lu.hasOwnProperty, au = eo.call(Object);
function cu(n) {
  if (!Gt(n) || Xe(n) != su)
    return !1;
  var t = Ei(n);
  if (t === null)
    return !0;
  var e = ou.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && eo.call(e) == au;
}
function uu() {
  this.__data__ = new Zt(), this.size = 0;
}
function hu(n) {
  var t = this.__data__, e = t.delete(n);
  return this.size = t.size, e;
}
function fu(n) {
  return this.__data__.get(n);
}
function du(n) {
  return this.__data__.has(n);
}
var gu = 200;
function pu(n, t) {
  var e = this.__data__;
  if (e instanceof Zt) {
    var r = e.__data__;
    if (!xn || r.length < gu - 1)
      return r.push([n, t]), this.size = ++e.size, this;
    e = this.__data__ = new Ee(r);
  }
  return e.set(n, t), this.size = e.size, this;
}
function Bt(n) {
  var t = this.__data__ = new Zt(n);
  this.size = t.size;
}
Bt.prototype.clear = uu;
Bt.prototype.delete = hu;
Bt.prototype.get = fu;
Bt.prototype.has = du;
Bt.prototype.set = pu;
function mu(n, t) {
  return n && In(t, vi(t), n);
}
function bu(n, t) {
  return n && In(t, Rn(t), n);
}
var no = typeof exports == "object" && exports && !exports.nodeType && exports, Xi = no && typeof module == "object" && module && !module.nodeType && module, yu = Xi && Xi.exports === no, Yi = yu ? Wt.Buffer : void 0, Qi = Yi ? Yi.allocUnsafe : void 0;
function ro(n, t) {
  if (t)
    return n.slice();
  var e = n.length, r = Qi ? Qi(e) : new n.constructor(e);
  return n.copy(r), r;
}
function vu(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length, s = 0, i = []; ++e < r; ) {
    var l = n[e];
    t(l, e, n) && (i[s++] = l);
  }
  return i;
}
function so() {
  return [];
}
var Eu = Object.prototype, Au = Eu.propertyIsEnumerable, Ji = Object.getOwnPropertySymbols, Ai = Ji ? function(n) {
  return n == null ? [] : (n = Object(n), vu(Ji(n), function(t) {
    return Au.call(n, t);
  }));
} : so;
function Nu(n, t) {
  return In(n, Ai(n), t);
}
var wu = Object.getOwnPropertySymbols, io = wu ? function(n) {
  for (var t = []; n; )
    to(t, Ai(n)), n = Ei(n);
  return t;
} : so;
function Tu(n, t) {
  return In(n, io(n), t);
}
function lo(n, t, e) {
  var r = t(n);
  return pe(n) ? r : to(r, e(n));
}
function zs(n) {
  return lo(n, vi, Ai);
}
function xu(n) {
  return lo(n, Rn, io);
}
var Gs = ve(Wt, "DataView"), Ks = ve(Wt, "Promise"), Vs = ve(Wt, "Set"), tl = "[object Map]", Lu = "[object Object]", el = "[object Promise]", nl = "[object Set]", rl = "[object WeakMap]", sl = "[object DataView]", _u = ye(Gs), Su = ye(xn), Ou = ye(Ks), qu = ye(Vs), Cu = ye(Fs), Nt = Xe;
(Gs && Nt(new Gs(new ArrayBuffer(1))) != sl || xn && Nt(new xn()) != tl || Ks && Nt(Ks.resolve()) != el || Vs && Nt(new Vs()) != nl || Fs && Nt(new Fs()) != rl) && (Nt = function(n) {
  var t = Xe(n), e = t == Lu ? n.constructor : void 0, r = e ? ye(e) : "";
  if (r)
    switch (r) {
      case _u:
        return sl;
      case Su:
        return tl;
      case Ou:
        return el;
      case qu:
        return nl;
      case Cu:
        return rl;
    }
  return t;
});
var Iu = Object.prototype, Ru = Iu.hasOwnProperty;
function ku(n) {
  var t = n.length, e = new n.constructor(t);
  return t && typeof n[0] == "string" && Ru.call(n, "index") && (e.index = n.index, e.input = n.input), e;
}
var Er = Wt.Uint8Array;
function Ni(n) {
  var t = new n.constructor(n.byteLength);
  return new Er(t).set(new Er(n)), t;
}
function Bu(n, t) {
  var e = t ? Ni(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.byteLength);
}
var Mu = /\w*$/;
function Du(n) {
  var t = new n.constructor(n.source, Mu.exec(n));
  return t.lastIndex = n.lastIndex, t;
}
var il = yr ? yr.prototype : void 0, ll = il ? il.valueOf : void 0;
function $u(n) {
  return ll ? Object(ll.call(n)) : {};
}
function oo(n, t) {
  var e = t ? Ni(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.length);
}
var ju = "[object Boolean]", Pu = "[object Date]", Uu = "[object Map]", Fu = "[object Number]", Hu = "[object RegExp]", zu = "[object Set]", Gu = "[object String]", Ku = "[object Symbol]", Vu = "[object ArrayBuffer]", Wu = "[object DataView]", Zu = "[object Float32Array]", Xu = "[object Float64Array]", Yu = "[object Int8Array]", Qu = "[object Int16Array]", Ju = "[object Int32Array]", th = "[object Uint8Array]", eh = "[object Uint8ClampedArray]", nh = "[object Uint16Array]", rh = "[object Uint32Array]";
function sh(n, t, e) {
  var r = n.constructor;
  switch (t) {
    case Vu:
      return Ni(n);
    case ju:
    case Pu:
      return new r(+n);
    case Wu:
      return Bu(n, e);
    case Zu:
    case Xu:
    case Yu:
    case Qu:
    case Ju:
    case th:
    case eh:
    case nh:
    case rh:
      return oo(n, e);
    case Uu:
      return new r();
    case Fu:
    case Gu:
      return new r(n);
    case Hu:
      return Du(n);
    case zu:
      return new r();
    case Ku:
      return $u(n);
  }
}
function ao(n) {
  return typeof n.constructor == "function" && !mi(n) ? xa(Ei(n)) : {};
}
var ih = "[object Map]";
function lh(n) {
  return Gt(n) && Nt(n) == ih;
}
var ol = Ge && Ge.isMap, oh = ol ? bi(ol) : lh, ah = "[object Set]";
function ch(n) {
  return Gt(n) && Nt(n) == ah;
}
var al = Ge && Ge.isSet, uh = al ? bi(al) : ch, hh = 1, fh = 2, dh = 4, co = "[object Arguments]", gh = "[object Array]", ph = "[object Boolean]", mh = "[object Date]", bh = "[object Error]", uo = "[object Function]", yh = "[object GeneratorFunction]", vh = "[object Map]", Eh = "[object Number]", ho = "[object Object]", Ah = "[object RegExp]", Nh = "[object Set]", wh = "[object String]", Th = "[object Symbol]", xh = "[object WeakMap]", Lh = "[object ArrayBuffer]", _h = "[object DataView]", Sh = "[object Float32Array]", Oh = "[object Float64Array]", qh = "[object Int8Array]", Ch = "[object Int16Array]", Ih = "[object Int32Array]", Rh = "[object Uint8Array]", kh = "[object Uint8ClampedArray]", Bh = "[object Uint16Array]", Mh = "[object Uint32Array]", H = {};
H[co] = H[gh] = H[Lh] = H[_h] = H[ph] = H[mh] = H[Sh] = H[Oh] = H[qh] = H[Ch] = H[Ih] = H[vh] = H[Eh] = H[ho] = H[Ah] = H[Nh] = H[wh] = H[Th] = H[Rh] = H[kh] = H[Bh] = H[Mh] = !0;
H[bh] = H[uo] = H[xh] = !1;
function pr(n, t, e, r, s, i) {
  var l, a = t & hh, c = t & fh, h = t & dh;
  if (l !== void 0)
    return l;
  if (!ie(n))
    return n;
  var f = pe(n);
  if (f) {
    if (l = ku(n), !a)
      return Gl(n, l);
  } else {
    var m = Nt(n), d = m == uo || m == yh;
    if (wn(n))
      return ro(n, a);
    if (m == ho || m == co || d && !s) {
      if (l = c || d ? {} : ao(n), !a)
        return c ? Tu(n, bu(l, n)) : Nu(n, mu(l, n));
    } else {
      if (!H[m])
        return s ? n : {};
      l = sh(n, m, a);
    }
  }
  i || (i = new Bt());
  var p = i.get(n);
  if (p)
    return p;
  i.set(n, l), uh(n) ? n.forEach(function(y) {
    l.add(pr(y, t, e, y, n, i));
  }) : oh(n) && n.forEach(function(y, E) {
    l.set(E, pr(y, t, e, E, n, i));
  });
  var b = h ? c ? xu : zs : c ? Rn : vi, v = f ? void 0 : b(n);
  return ka(v || n, function(y, E) {
    v && (E = y, y = n[E]), Vl(l, E, pr(y, t, e, E, n, i));
  }), l;
}
var Dh = 1, $h = 4;
function Fe(n) {
  return pr(n, Dh | $h);
}
var jh = "__lodash_hash_undefined__";
function Ph(n) {
  return this.__data__.set(n, jh), this;
}
function Uh(n) {
  return this.__data__.has(n);
}
function Ar(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new Ee(); ++t < e; )
    this.add(n[t]);
}
Ar.prototype.add = Ar.prototype.push = Ph;
Ar.prototype.has = Uh;
function Fh(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r; )
    if (t(n[e], e, n))
      return !0;
  return !1;
}
function Hh(n, t) {
  return n.has(t);
}
var zh = 1, Gh = 2;
function fo(n, t, e, r, s, i) {
  var l = e & zh, a = n.length, c = t.length;
  if (a != c && !(l && c > a))
    return !1;
  var h = i.get(n), f = i.get(t);
  if (h && f)
    return h == t && f == n;
  var m = -1, d = !0, p = e & Gh ? new Ar() : void 0;
  for (i.set(n, t), i.set(t, n); ++m < a; ) {
    var b = n[m], v = t[m];
    if (r)
      var y = l ? r(v, b, m, t, n, i) : r(b, v, m, n, t, i);
    if (y !== void 0) {
      if (y)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!Fh(t, function(E, w) {
        if (!Hh(p, w) && (b === E || s(b, E, e, r, i)))
          return p.push(w);
      })) {
        d = !1;
        break;
      }
    } else if (!(b === v || s(b, v, e, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(n), i.delete(t), d;
}
function Kh(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r, s) {
    e[++t] = [s, r];
  }), e;
}
function Vh(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r) {
    e[++t] = r;
  }), e;
}
var Wh = 1, Zh = 2, Xh = "[object Boolean]", Yh = "[object Date]", Qh = "[object Error]", Jh = "[object Map]", tf = "[object Number]", ef = "[object RegExp]", nf = "[object Set]", rf = "[object String]", sf = "[object Symbol]", lf = "[object ArrayBuffer]", of = "[object DataView]", cl = yr ? yr.prototype : void 0, Cs = cl ? cl.valueOf : void 0;
function af(n, t, e, r, s, i, l) {
  switch (e) {
    case of:
      if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
        return !1;
      n = n.buffer, t = t.buffer;
    case lf:
      return !(n.byteLength != t.byteLength || !i(new Er(n), new Er(t)));
    case Xh:
    case Yh:
    case tf:
      return Cn(+n, +t);
    case Qh:
      return n.name == t.name && n.message == t.message;
    case ef:
    case rf:
      return n == t + "";
    case Jh:
      var a = Kh;
    case nf:
      var c = r & Wh;
      if (a || (a = Vh), n.size != t.size && !c)
        return !1;
      var h = l.get(n);
      if (h)
        return h == t;
      r |= Zh, l.set(n, t);
      var f = fo(a(n), a(t), r, s, i, l);
      return l.delete(n), f;
    case sf:
      if (Cs)
        return Cs.call(n) == Cs.call(t);
  }
  return !1;
}
var cf = 1, uf = Object.prototype, hf = uf.hasOwnProperty;
function ff(n, t, e, r, s, i) {
  var l = e & cf, a = zs(n), c = a.length, h = zs(t), f = h.length;
  if (c != f && !l)
    return !1;
  for (var m = c; m--; ) {
    var d = a[m];
    if (!(l ? d in t : hf.call(t, d)))
      return !1;
  }
  var p = i.get(n), b = i.get(t);
  if (p && b)
    return p == t && b == n;
  var v = !0;
  i.set(n, t), i.set(t, n);
  for (var y = l; ++m < c; ) {
    d = a[m];
    var E = n[d], w = t[d];
    if (r)
      var T = l ? r(w, E, d, t, n, i) : r(E, w, d, n, t, i);
    if (!(T === void 0 ? E === w || s(E, w, e, r, i) : T)) {
      v = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (v && !y) {
    var S = n.constructor, L = t.constructor;
    S != L && "constructor" in n && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof L == "function" && L instanceof L) && (v = !1);
  }
  return i.delete(n), i.delete(t), v;
}
var df = 1, ul = "[object Arguments]", hl = "[object Array]", cr = "[object Object]", gf = Object.prototype, fl = gf.hasOwnProperty;
function pf(n, t, e, r, s, i) {
  var l = pe(n), a = pe(t), c = l ? hl : Nt(n), h = a ? hl : Nt(t);
  c = c == ul ? cr : c, h = h == ul ? cr : h;
  var f = c == cr, m = h == cr, d = c == h;
  if (d && wn(n)) {
    if (!wn(t))
      return !1;
    l = !0, f = !1;
  }
  if (d && !f)
    return i || (i = new Bt()), l || yi(n) ? fo(n, t, e, r, s, i) : af(n, t, c, e, r, s, i);
  if (!(e & df)) {
    var p = f && fl.call(n, "__wrapped__"), b = m && fl.call(t, "__wrapped__");
    if (p || b) {
      var v = p ? n.value() : n, y = b ? t.value() : t;
      return i || (i = new Bt()), s(v, y, e, r, i);
    }
  }
  return d ? (i || (i = new Bt()), ff(n, t, e, r, s, i)) : !1;
}
function go(n, t, e, r, s) {
  return n === t ? !0 : n == null || t == null || !Gt(n) && !Gt(t) ? n !== n && t !== t : pf(n, t, e, r, go, s);
}
function mf(n) {
  return function(t, e, r) {
    for (var s = -1, i = Object(t), l = r(t), a = l.length; a--; ) {
      var c = l[++s];
      if (e(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var bf = mf();
function Ws(n, t, e) {
  (e !== void 0 && !Cn(n[t], e) || e === void 0 && !(t in n)) && pi(n, t, e);
}
function yf(n) {
  return Gt(n) && xr(n);
}
function Zs(n, t) {
  if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
    return n[t];
}
function vf(n) {
  return In(n, Rn(n));
}
function Ef(n, t, e, r, s, i, l) {
  var a = Zs(n, e), c = Zs(t, e), h = l.get(c);
  if (h) {
    Ws(n, e, h);
    return;
  }
  var f = i ? i(a, c, e + "", n, t, l) : void 0, m = f === void 0;
  if (m) {
    var d = pe(c), p = !d && wn(c), b = !d && !p && yi(c);
    f = c, d || p || b ? pe(a) ? f = a : yf(a) ? f = Gl(a) : p ? (m = !1, f = ro(c, !0)) : b ? (m = !1, f = oo(c, !0)) : f = [] : cu(c) || Hs(c) ? (f = a, Hs(a) ? f = vf(a) : (!ie(a) || gi(a)) && (f = ao(c))) : m = !1;
  }
  m && (l.set(c, f), s(f, c, r, i, l), l.delete(c)), Ws(n, e, f);
}
function po(n, t, e, r, s) {
  n !== t && bf(t, function(i, l) {
    if (s || (s = new Bt()), ie(i))
      Ef(n, t, l, e, po, r, s);
    else {
      var a = r ? r(Zs(n, l), i, l + "", n, t, s) : void 0;
      a === void 0 && (a = i), Ws(n, l, a);
    }
  }, Rn);
}
function wi(n, t) {
  return go(n, t);
}
var se = Ha(function(n, t, e) {
  po(n, t, e);
}), C = /* @__PURE__ */ ((n) => (n[n.TYPE = 3] = "TYPE", n[n.LEVEL = 12] = "LEVEL", n[n.ATTRIBUTE = 13] = "ATTRIBUTE", n[n.BLOT = 14] = "BLOT", n[n.INLINE = 7] = "INLINE", n[n.BLOCK = 11] = "BLOCK", n[n.BLOCK_BLOT = 10] = "BLOCK_BLOT", n[n.INLINE_BLOT = 6] = "INLINE_BLOT", n[n.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n[n.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n[n.ANY = 15] = "ANY", n))(C || {});
class Dt {
  constructor(t, e, r = {}) {
    this.attrName = t, this.keyName = e;
    const s = C.TYPE & C.ATTRIBUTE;
    this.scope = r.scope != null ? (
      // Ignore type bits, force attribute bit
      r.scope & C.LEVEL | s
    ) : C.ATTRIBUTE, r.whitelist != null && (this.whitelist = r.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((e) => e.name);
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.setAttribute(this.keyName, e), !0) : !1;
  }
  canAdd(t, e) {
    return this.whitelist == null ? !0 : typeof e == "string" ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1;
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    const e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class He extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const mo = class Xs {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t, e = !1) {
    if (t == null)
      return null;
    if (this.blots.has(t))
      return this.blots.get(t) || null;
    if (e) {
      let r = null;
      try {
        r = t.parentNode;
      } catch {
        return null;
      }
      return this.find(r, e);
    }
    return null;
  }
  create(t, e, r) {
    const s = this.query(e);
    if (s == null)
      throw new He(`Unable to create ${e} blot`);
    const i = s, l = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(r)
    ), a = new i(t, l, r);
    return Xs.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return Xs.find(t, e);
  }
  query(t, e = C.ANY) {
    let r;
    return typeof t == "string" ? r = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? r = this.types.text : typeof t == "number" ? t & C.LEVEL & C.BLOCK ? r = this.types.block : t & C.LEVEL & C.INLINE && (r = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((s) => (r = this.classes[s], !!r)), r = r || this.tags[t.tagName]), r == null ? null : "scope" in r && e & C.LEVEL & r.scope && e & C.TYPE & r.scope ? r : null;
  }
  register(...t) {
    return t.map((e) => {
      const r = "blotName" in e, s = "attrName" in e;
      if (!r && !s)
        throw new He("Invalid definition");
      if (r && e.blotName === "abstract")
        throw new He("Cannot register abstract class");
      const i = r ? e.blotName : s ? e.attrName : void 0;
      return this.types[i] = e, s ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : r && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((l) => l.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((l) => {
        (this.tags[l] == null || e.className == null) && (this.tags[l] = e);
      }))), e;
    });
  }
};
mo.blots = /* @__PURE__ */ new WeakMap();
let Ke = mo;
function dl(n, t) {
  return (n.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class Af extends Dt {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0) : !1;
  }
  remove(t) {
    dl(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (dl(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const Lt = Af;
function Is(n) {
  const t = n.split("-"), e = t.slice(1).map((r) => r[0].toUpperCase() + r.slice(1)).join("");
  return t[0] + e;
}
class Nf extends Dt {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[Is(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[Is(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[Is(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const le = Nf;
class wf {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = Ke.find(this.domNode);
    if (t == null)
      return;
    const e = Dt.keys(this.domNode), r = Lt.keys(this.domNode), s = le.keys(this.domNode);
    e.concat(r).concat(s).forEach((i) => {
      const l = t.scroll.query(i, C.ATTRIBUTE);
      l instanceof Dt && (this.attributes[l.attrName] = l);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach((e) => {
      const r = this.attributes[e].value(this.domNode);
      t.format(e, r);
    });
  }
  move(t) {
    this.copy(t), Object.keys(this.attributes).forEach((e) => {
      this.attributes[e].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t, e) => (t[e] = this.attributes[e].value(this.domNode), t),
      {}
    );
  }
}
const Sr = wf, bo = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, Ke.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new He("Blot definition missing tagName");
    let e, r;
    return Array.isArray(this.tagName) ? (typeof t == "string" ? (r = t.toUpperCase(), parseInt(r, 10).toString() === r && (r = parseInt(r, 10))) : typeof t == "number" && (r = t), typeof r == "number" ? e = document.createElement(this.tagName[r - 1]) : r && this.tagName.indexOf(r) > -1 ? e = document.createElement(r) : e = document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), Ke.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, r, s) {
    const i = this.isolate(t, e);
    if (this.scroll.query(r, C.BLOT) != null && s)
      i.wrap(r, s);
    else if (this.scroll.query(r, C.ATTRIBUTE) != null) {
      const l = this.scroll.create(this.statics.scope);
      i.wrap(l), l.format(r, s);
    }
  }
  insertAt(t, e, r) {
    const s = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r), i = this.split(t);
    this.parent.insertBefore(s, i || void 0);
  }
  isolate(t, e) {
    const r = this.split(t);
    if (r == null)
      throw new Error("Attempt to isolate at end");
    return r.split(e), r;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return this.parent == null || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return this.parent != null && (this.parent.insertBefore(r, this.next || void 0), this.remove()), r;
  }
  split(t, e) {
    return t === 0 ? this : this.next;
  }
  update(t, e) {
  }
  wrap(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    if (this.parent != null && this.parent.insertBefore(r, this.next || void 0), typeof r.appendChild != "function")
      throw new He(`Cannot wrap ${t}`);
    return r.appendChild(this), r;
  }
};
bo.blotName = "abstract";
let yo = bo;
const vo = class extends yo {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(t) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t, e) {
    let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (r += 1), [this.parent.domNode, r];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
vo.scope = C.INLINE_BLOT;
let Tf = vo;
const et = Tf;
class xf {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      const e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    const e = this.iterator();
    let r = e();
    for (; r && t > 0; )
      t -= 1, r = e();
    return r;
  }
  contains(t) {
    const e = this.iterator();
    let r = e();
    for (; r; ) {
      if (r === t)
        return !0;
      r = e();
    }
    return !1;
  }
  indexOf(t) {
    const e = this.iterator();
    let r = e(), s = 0;
    for (; r; ) {
      if (r === t)
        return s;
      s += 1, r = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    t != null && (this.remove(t), t.next = e, e != null ? (t.prev = e.prev, e.prev != null && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : this.tail != null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0, r = this.head;
    for (; r != null; ) {
      if (r === t)
        return e;
      e += r.length(), r = r.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (t.prev != null && (t.prev.next = t.next), t.next != null && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      const e = t;
      return t != null && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    const r = this.iterator();
    let s = r();
    for (; s; ) {
      const i = s.length();
      if (t < i || e && t === i && (s.next == null || s.next.length() !== 0))
        return [s, t];
      t -= i, s = r();
    }
    return [null, 0];
  }
  forEach(t) {
    const e = this.iterator();
    let r = e();
    for (; r; )
      t(r), r = e();
  }
  forEachAt(t, e, r) {
    if (e <= 0)
      return;
    const [s, i] = this.find(t);
    let l = t - i;
    const a = this.iterator(s);
    let c = a();
    for (; c && l < t + e; ) {
      const h = c.length();
      t > l ? r(
        c,
        t - l,
        Math.min(e, l + h - t)
      ) : r(c, 0, Math.min(h, t + e - l)), l += h, c = a();
    }
  }
  map(t) {
    return this.reduce((e, r) => (e.push(t(r)), e), []);
  }
  reduce(t, e) {
    const r = this.iterator();
    let s = r();
    for (; s; )
      e = t(e, s), s = r();
    return e;
  }
}
function gl(n, t) {
  const e = t.find(n);
  if (e)
    return e;
  try {
    return t.create(n);
  } catch {
    const r = t.create(C.INLINE);
    return Array.from(n.childNodes).forEach((s) => {
      r.domNode.appendChild(s);
    }), n.parentNode && n.parentNode.replaceChild(r.domNode, n), r.attach(), r;
  }
}
const Eo = class te extends yo {
  constructor(t, e) {
    super(t, e), this.uiNode = null, this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(), this.children.forEach((t) => {
      t.attach();
    });
  }
  attachUI(t) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, te.uiClass && this.uiNode.classList.add(te.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new xf(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = gl(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof He)
          return;
        throw e;
      }
    });
  }
  deleteAt(t, e) {
    if (t === 0 && e === this.length())
      return this.remove();
    this.children.forEachAt(t, e, (r, s, i) => {
      r.deleteAt(s, i);
    });
  }
  descendant(t, e = 0) {
    const [r, s] = this.children.find(e);
    return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, s] : r instanceof te ? r.descendant(t, s) : [null, -1];
  }
  descendants(t, e = 0, r = Number.MAX_VALUE) {
    let s = [], i = r;
    return this.children.forEachAt(
      e,
      r,
      (l, a, c) => {
        (t.blotName == null && t(l) || t.blotName != null && l instanceof t) && s.push(l), l instanceof te && (s = s.concat(
          l.descendants(t, a, i)
        )), i -= c;
      }
    ), s;
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t = !1;
    this.children.forEach((e) => {
      t || this.statics.allowedChildren.some(
        (r) => e instanceof r
      ) || (e.statics.scope === C.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof te ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, r, s) {
    this.children.forEachAt(t, e, (i, l, a) => {
      i.formatAt(l, a, r, s);
    });
  }
  insertAt(t, e, r) {
    const [s, i] = this.children.find(t);
    if (s)
      s.insertAt(i, e, r);
    else {
      const l = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r);
      this.appendChild(l);
    }
  }
  insertBefore(t, e) {
    t.parent != null && t.parent.children.remove(t);
    let r = null;
    this.children.insertBefore(t, e || null), t.parent = this, e != null && (r = e.domNode), (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== r) && this.domNode.insertBefore(t.domNode, r), t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((r) => {
      t.insertBefore(r, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e);
      } else
        this.remove();
  }
  path(t, e = !1) {
    const [r, s] = this.children.find(t, e), i = [[this, t]];
    return r instanceof te ? i.concat(r.path(s, e)) : (r != null && i.push([r, s]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return r instanceof te && this.moveChildren(r), super.replaceWith(r);
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.clone();
    return this.parent && this.parent.insertBefore(r, this.next || void 0), this.children.forEachAt(t, this.length(), (s, i, l) => {
      const a = s.split(i, e);
      a != null && r.appendChild(a);
    }), r;
  }
  splitAfter(t) {
    const e = this.clone();
    for (; t.next != null; )
      e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t, e) {
    const r = [], s = [];
    t.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (r.push(...i.addedNodes), s.push(...i.removedNodes));
    }), s.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const l = this.scroll.find(i);
      l != null && (l.domNode.parentNode == null || l.domNode.parentNode === this.domNode) && l.detach();
    }), r.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, l) => i === l ? 0 : i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let l = null;
      i.nextSibling != null && (l = this.scroll.find(i.nextSibling));
      const a = gl(i, this.scroll);
      (a.next !== l || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, l || void 0));
    }), this.enforceAllowedChildren();
  }
};
Eo.uiClass = "";
let Lf = Eo;
const Tt = Lf;
function _f(n, t) {
  if (Object.keys(n).length !== Object.keys(t).length)
    return !1;
  for (const e in n)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
const Me = class De extends Tt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(De.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Sr(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((r) => {
        r instanceof De || (r = r.wrap(De.blotName, !0)), this.attributes.copy(r);
      }), this.unwrap();
    else {
      const r = this.scroll.query(t, C.INLINE);
      if (r == null)
        return;
      r instanceof Dt ? this.attributes.attribute(r, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.formats()[r] != null || this.scroll.query(r, C.ATTRIBUTE) ? this.isolate(t, e).format(r, s) : super.formatAt(t, e, r, s);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const r = this.next;
    r instanceof De && r.prev === this && _f(e, r.formats()) && (r.moveChildren(this), r.remove());
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t, e) {
    const r = super.wrap(t, e);
    return r instanceof De && this.attributes.move(r), r;
  }
};
Me.allowedChildren = [Me, et], Me.blotName = "inline", Me.scope = C.INLINE_BLOT, Me.tagName = "SPAN";
let Sf = Me;
const Ti = Sf, $e = class Ys extends Tt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(Ys.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Sr(this.domNode);
  }
  format(t, e) {
    const r = this.scroll.query(t, C.BLOCK);
    r != null && (r instanceof Dt ? this.attributes.attribute(r, e) : t === this.statics.blotName && !e ? this.replaceWith(Ys.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.scroll.query(r, C.BLOCK) != null ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    if (r == null || this.scroll.query(e, C.INLINE) != null)
      super.insertAt(t, e, r);
    else {
      const s = this.split(t);
      if (s != null) {
        const i = this.scroll.create(e, r);
        s.parent.insertBefore(i, s);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
};
$e.blotName = "block", $e.scope = C.BLOCK_BLOT, $e.tagName = "P", $e.allowedChildren = [
  Ti,
  $e,
  et
];
let Of = $e;
const Ln = Of, Qs = class extends Tt {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.enforceAllowedChildren();
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.enforceAllowedChildren();
  }
  insertAt(t, e, r) {
    super.insertAt(t, e, r), this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
Qs.blotName = "container", Qs.scope = C.BLOCK_BLOT;
let qf = Qs;
const Or = qf;
class Cf extends et {
  static formats(t, e) {
  }
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, r, s) {
    t === 0 && e === this.length() ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const at = Cf, If = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Rf = 100, je = class extends Tt {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((r) => {
      this.update(r);
    }), this.observer.observe(this.domNode, If), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const r = this.registry.find(t, e);
    return r ? r.scroll === this ? r : e ? this.find(r.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = C.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update(), t === 0 && e === this.length() ? this.children.forEach((r) => {
      r.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, r, s) {
    this.update(), super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    this.update(), super.insertAt(t, e, r);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    const r = e.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s = Array.from(this.observer.takeRecords());
    for (; s.length > 0; )
      t.push(s.pop());
    const i = (c, h = !0) => {
      c == null || c === this || c.domNode.parentNode != null && (r.has(c.domNode) || r.set(c.domNode, []), h && i(c.parent));
    }, l = (c) => {
      r.has(c.domNode) && (c instanceof Tt && c.children.forEach(l), r.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= Rf)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const f = this.find(h.target, !0);
        f != null && (f.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((m) => {
          const d = this.find(m, !1);
          i(d, !1), d instanceof Tt && d.children.forEach((p) => {
            i(p, !1);
          });
        })) : h.type === "attributes" && i(f.prev)), i(f));
      }), this.children.forEach(l), a = Array.from(this.observer.takeRecords()), s = a.slice(); s.length > 0; )
        t.push(s.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    const r = /* @__PURE__ */ new WeakMap();
    t.map((s) => {
      const i = this.find(s.target, !0);
      return i == null ? null : r.has(i.domNode) ? (r.get(i.domNode).push(s), null) : (r.set(i.domNode, [s]), i);
    }).forEach((s) => {
      s != null && s !== this && r.has(s.domNode) && s.update(r.get(s.domNode) || [], e);
    }), e.mutationsMap = r, r.has(this.domNode) && super.update(r.get(this.domNode), e), this.optimize(t, e);
  }
};
je.blotName = "scroll", je.defaultChild = Ln, je.allowedChildren = [Ln, Or], je.scope = C.BLOCK_BLOT, je.tagName = "DIV";
let kf = je;
const xi = kf, Js = class Ao extends et {
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  constructor(t, e) {
    super(t, e), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, r) {
    r == null ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, r);
  }
  length() {
    return this.text.length;
  }
  optimize(t) {
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof Ao && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.scroll.create(this.domNode.splitText(t));
    return this.parent.insertBefore(r, this.next || void 0), this.text = this.statics.value(this.domNode), r;
  }
  update(t, e) {
    t.some((r) => r.type === "characterData" && r.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
Js.blotName = "text", Js.scope = C.INLINE_BLOT;
let Bf = Js;
const Nr = Bf, Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: Dt,
  AttributorStore: Sr,
  BlockBlot: Ln,
  ClassAttributor: Lt,
  ContainerBlot: Or,
  EmbedBlot: at,
  InlineBlot: Ti,
  LeafBlot: et,
  ParentBlot: Tt,
  Registry: Ke,
  Scope: C,
  ScrollBlot: xi,
  StyleAttributor: le,
  TextBlot: Nr
}, Symbol.toStringTag, { value: "Module" }));
var ti = { exports: {} }, ot = -1, st = 1, W = 0;
function _n(n, t, e, r, s) {
  if (n === t)
    return n ? [[W, n]] : [];
  if (e != null) {
    var i = Gf(n, t, e);
    if (i)
      return i;
  }
  var l = Li(n, t), a = n.substring(0, l);
  n = n.substring(l), t = t.substring(l), l = qr(n, t);
  var c = n.substring(n.length - l);
  n = n.substring(0, n.length - l), t = t.substring(0, t.length - l);
  var h = Df(n, t);
  return a && h.unshift([W, a]), c && h.push([W, c]), _i(h, s), r && Pf(h), h;
}
function Df(n, t) {
  var e;
  if (!n)
    return [[st, t]];
  if (!t)
    return [[ot, n]];
  var r = n.length > t.length ? n : t, s = n.length > t.length ? t : n, i = r.indexOf(s);
  if (i !== -1)
    return e = [
      [st, r.substring(0, i)],
      [W, s],
      [st, r.substring(i + s.length)]
    ], n.length > t.length && (e[0][0] = e[2][0] = ot), e;
  if (s.length === 1)
    return [
      [ot, n],
      [st, t]
    ];
  var l = jf(n, t);
  if (l) {
    var a = l[0], c = l[1], h = l[2], f = l[3], m = l[4], d = _n(a, h), p = _n(c, f);
    return d.concat([[W, m]], p);
  }
  return $f(n, t);
}
function $f(n, t) {
  for (var e = n.length, r = t.length, s = Math.ceil((e + r) / 2), i = s, l = 2 * s, a = new Array(l), c = new Array(l), h = 0; h < l; h++)
    a[h] = -1, c[h] = -1;
  a[i + 1] = 0, c[i + 1] = 0;
  for (var f = e - r, m = f % 2 !== 0, d = 0, p = 0, b = 0, v = 0, y = 0; y < s; y++) {
    for (var E = -y + d; E <= y - p; E += 2) {
      var w = i + E, T;
      E === -y || E !== y && a[w - 1] < a[w + 1] ? T = a[w + 1] : T = a[w - 1] + 1;
      for (var S = T - E; T < e && S < r && n.charAt(T) === t.charAt(S); )
        T++, S++;
      if (a[w] = T, T > e)
        p += 2;
      else if (S > r)
        d += 2;
      else if (m) {
        var L = i + f - E;
        if (L >= 0 && L < l && c[L] !== -1) {
          var R = e - c[L];
          if (T >= R)
            return pl(n, t, T, S);
        }
      }
    }
    for (var M = -y + b; M <= y - v; M += 2) {
      var L = i + M, R;
      M === -y || M !== y && c[L - 1] < c[L + 1] ? R = c[L + 1] : R = c[L - 1] + 1;
      for (var P = R - M; R < e && P < r && n.charAt(e - R - 1) === t.charAt(r - P - 1); )
        R++, P++;
      if (c[L] = R, R > e)
        v += 2;
      else if (P > r)
        b += 2;
      else if (!m) {
        var w = i + f - M;
        if (w >= 0 && w < l && a[w] !== -1) {
          var T = a[w], S = i + T - w;
          if (R = e - R, T >= R)
            return pl(n, t, T, S);
        }
      }
    }
  }
  return [
    [ot, n],
    [st, t]
  ];
}
function pl(n, t, e, r) {
  var s = n.substring(0, e), i = t.substring(0, r), l = n.substring(e), a = t.substring(r), c = _n(s, i), h = _n(l, a);
  return c.concat(h);
}
function Li(n, t) {
  if (!n || !t || n.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(i, s) == t.substring(i, s) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return No(n.charCodeAt(s - 1)) && s--, s;
}
function ml(n, t) {
  var e = n.length, r = t.length;
  if (e == 0 || r == 0)
    return 0;
  e > r ? n = n.substring(e - r) : e < r && (t = t.substring(0, e));
  var s = Math.min(e, r);
  if (n == t)
    return s;
  for (var i = 0, l = 1; ; ) {
    var a = n.substring(s - l), c = t.indexOf(a);
    if (c == -1)
      return i;
    l += c, (c == 0 || n.substring(s - l) == t.substring(0, l)) && (i = l, l++);
  }
}
function qr(n, t) {
  if (!n || !t || n.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(n.length - s, n.length - i) == t.substring(t.length - s, t.length - i) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return wo(n.charCodeAt(n.length - s)) && s--, s;
}
function jf(n, t) {
  var e = n.length > t.length ? n : t, r = n.length > t.length ? t : n;
  if (e.length < 4 || r.length * 2 < e.length)
    return null;
  function s(p, b, v) {
    for (var y = p.substring(v, v + Math.floor(p.length / 4)), E = -1, w = "", T, S, L, R; (E = b.indexOf(y, E + 1)) !== -1; ) {
      var M = Li(
        p.substring(v),
        b.substring(E)
      ), P = qr(
        p.substring(0, v),
        b.substring(0, E)
      );
      w.length < P + M && (w = b.substring(E - P, E) + b.substring(E, E + M), T = p.substring(0, v - P), S = p.substring(v + M), L = b.substring(0, E - P), R = b.substring(E + M));
    }
    return w.length * 2 >= p.length ? [
      T,
      S,
      L,
      R,
      w
    ] : null;
  }
  var i = s(
    e,
    r,
    Math.ceil(e.length / 4)
  ), l = s(
    e,
    r,
    Math.ceil(e.length / 2)
  ), a;
  if (!i && !l)
    return null;
  l ? i ? a = i[4].length > l[4].length ? i : l : a = l : a = i;
  var c, h, f, m;
  n.length > t.length ? (c = a[0], h = a[1], f = a[2], m = a[3]) : (f = a[0], m = a[1], c = a[2], h = a[3]);
  var d = a[4];
  return [c, h, f, m, d];
}
function Pf(n) {
  for (var t = !1, e = [], r = 0, s = null, i = 0, l = 0, a = 0, c = 0, h = 0; i < n.length; )
    n[i][0] == W ? (e[r++] = i, l = c, a = h, c = 0, h = 0, s = n[i][1]) : (n[i][0] == st ? c += n[i][1].length : h += n[i][1].length, s && s.length <= Math.max(l, a) && s.length <= Math.max(c, h) && (n.splice(e[r - 1], 0, [
      ot,
      s
    ]), n[e[r - 1] + 1][0] = st, r--, r--, i = r > 0 ? e[r - 1] : -1, l = 0, a = 0, c = 0, h = 0, s = null, t = !0)), i++;
  for (t && _i(n), Hf(n), i = 1; i < n.length; ) {
    if (n[i - 1][0] == ot && n[i][0] == st) {
      var f = n[i - 1][1], m = n[i][1], d = ml(f, m), p = ml(m, f);
      d >= p ? (d >= f.length / 2 || d >= m.length / 2) && (n.splice(i, 0, [
        W,
        m.substring(0, d)
      ]), n[i - 1][1] = f.substring(
        0,
        f.length - d
      ), n[i + 1][1] = m.substring(d), i++) : (p >= f.length / 2 || p >= m.length / 2) && (n.splice(i, 0, [
        W,
        f.substring(0, p)
      ]), n[i - 1][0] = st, n[i - 1][1] = m.substring(
        0,
        m.length - p
      ), n[i + 1][0] = ot, n[i + 1][1] = f.substring(p), i++), i++;
    }
    i++;
  }
}
var bl = /[^a-zA-Z0-9]/, yl = /\s/, vl = /[\r\n]/, Uf = /\n\r?\n$/, Ff = /^\r?\n\r?\n/;
function Hf(n) {
  function t(p, b) {
    if (!p || !b)
      return 6;
    var v = p.charAt(p.length - 1), y = b.charAt(0), E = v.match(bl), w = y.match(bl), T = E && v.match(yl), S = w && y.match(yl), L = T && v.match(vl), R = S && y.match(vl), M = L && p.match(Uf), P = R && b.match(Ff);
    return M || P ? 5 : L || R ? 4 : E && !T && S ? 3 : T || S ? 2 : E || w ? 1 : 0;
  }
  for (var e = 1; e < n.length - 1; ) {
    if (n[e - 1][0] == W && n[e + 1][0] == W) {
      var r = n[e - 1][1], s = n[e][1], i = n[e + 1][1], l = qr(r, s);
      if (l) {
        var a = s.substring(s.length - l);
        r = r.substring(0, r.length - l), s = a + s.substring(0, s.length - l), i = a + i;
      }
      for (var c = r, h = s, f = i, m = t(r, s) + t(s, i); s.charAt(0) === i.charAt(0); ) {
        r += s.charAt(0), s = s.substring(1) + i.charAt(0), i = i.substring(1);
        var d = t(r, s) + t(s, i);
        d >= m && (m = d, c = r, h = s, f = i);
      }
      n[e - 1][1] != c && (c ? n[e - 1][1] = c : (n.splice(e - 1, 1), e--), n[e][1] = h, f ? n[e + 1][1] = f : (n.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function _i(n, t) {
  n.push([W, ""]);
  for (var e = 0, r = 0, s = 0, i = "", l = "", a; e < n.length; ) {
    if (e < n.length - 1 && !n[e][1]) {
      n.splice(e, 1);
      continue;
    }
    switch (n[e][0]) {
      case st:
        s++, l += n[e][1], e++;
        break;
      case ot:
        r++, i += n[e][1], e++;
        break;
      case W:
        var c = e - s - r - 1;
        if (t) {
          if (c >= 0 && xo(n[c][1])) {
            var h = n[c][1].slice(-1);
            if (n[c][1] = n[c][1].slice(
              0,
              -1
            ), i = h + i, l = h + l, !n[c][1]) {
              n.splice(c, 1), e--;
              var f = c - 1;
              n[f] && n[f][0] === st && (s++, l = n[f][1] + l, f--), n[f] && n[f][0] === ot && (r++, i = n[f][1] + i, f--), c = f;
            }
          }
          if (To(n[e][1])) {
            var h = n[e][1].charAt(0);
            n[e][1] = n[e][1].slice(1), i += h, l += h;
          }
        }
        if (e < n.length - 1 && !n[e][1]) {
          n.splice(e, 1);
          break;
        }
        if (i.length > 0 || l.length > 0) {
          i.length > 0 && l.length > 0 && (a = Li(l, i), a !== 0 && (c >= 0 ? n[c][1] += l.substring(
            0,
            a
          ) : (n.splice(0, 0, [
            W,
            l.substring(0, a)
          ]), e++), l = l.substring(a), i = i.substring(a)), a = qr(l, i), a !== 0 && (n[e][1] = l.substring(l.length - a) + n[e][1], l = l.substring(
            0,
            l.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var m = s + r;
          i.length === 0 && l.length === 0 ? (n.splice(e - m, m), e = e - m) : i.length === 0 ? (n.splice(e - m, m, [st, l]), e = e - m + 1) : l.length === 0 ? (n.splice(e - m, m, [ot, i]), e = e - m + 1) : (n.splice(
            e - m,
            m,
            [ot, i],
            [st, l]
          ), e = e - m + 2);
        }
        e !== 0 && n[e - 1][0] === W ? (n[e - 1][1] += n[e][1], n.splice(e, 1)) : e++, s = 0, r = 0, i = "", l = "";
        break;
    }
  }
  n[n.length - 1][1] === "" && n.pop();
  var d = !1;
  for (e = 1; e < n.length - 1; )
    n[e - 1][0] === W && n[e + 1][0] === W && (n[e][1].substring(
      n[e][1].length - n[e - 1][1].length
    ) === n[e - 1][1] ? (n[e][1] = n[e - 1][1] + n[e][1].substring(
      0,
      n[e][1].length - n[e - 1][1].length
    ), n[e + 1][1] = n[e - 1][1] + n[e + 1][1], n.splice(e - 1, 1), d = !0) : n[e][1].substring(0, n[e + 1][1].length) == n[e + 1][1] && (n[e - 1][1] += n[e + 1][1], n[e][1] = n[e][1].substring(n[e + 1][1].length) + n[e + 1][1], n.splice(e + 1, 1), d = !0)), e++;
  d && _i(n, t);
}
function No(n) {
  return n >= 55296 && n <= 56319;
}
function wo(n) {
  return n >= 56320 && n <= 57343;
}
function To(n) {
  return wo(n.charCodeAt(0));
}
function xo(n) {
  return No(n.charCodeAt(n.length - 1));
}
function zf(n) {
  for (var t = [], e = 0; e < n.length; e++)
    n[e][1].length > 0 && t.push(n[e]);
  return t;
}
function Rs(n, t, e, r) {
  return xo(n) || To(r) ? null : zf([
    [W, n],
    [ot, t],
    [st, e],
    [W, r]
  ]);
}
function Gf(n, t, e) {
  var r = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, s = typeof e == "number" ? null : e.newRange, i = n.length, l = t.length;
  if (r.length === 0 && (s === null || s.length === 0)) {
    var a = r.index, c = n.slice(0, a), h = n.slice(a), f = s ? s.index : null;
    t: {
      var m = a + l - i;
      if (f !== null && f !== m || m < 0 || m > l)
        break t;
      var d = t.slice(0, m), p = t.slice(m);
      if (p !== h)
        break t;
      var b = Math.min(a, m), v = c.slice(0, b), y = d.slice(0, b);
      if (v !== y)
        break t;
      var E = c.slice(b), w = d.slice(b);
      return Rs(v, E, w, h);
    }
    t: {
      if (f !== null && f !== a)
        break t;
      var T = a, d = t.slice(0, T), p = t.slice(T);
      if (d !== c)
        break t;
      var S = Math.min(i - T, l - T), L = h.slice(h.length - S), R = p.slice(p.length - S);
      if (L !== R)
        break t;
      var E = h.slice(0, h.length - S), w = p.slice(0, p.length - S);
      return Rs(c, E, w, L);
    }
  }
  if (r.length > 0 && s && s.length === 0)
    t: {
      var v = n.slice(0, r.index), L = n.slice(r.index + r.length), b = v.length, S = L.length;
      if (l < b + S)
        break t;
      var y = t.slice(0, b), R = t.slice(l - S);
      if (v !== y || L !== R)
        break t;
      var E = n.slice(b, i - S), w = t.slice(b, l - S);
      return Rs(v, E, w, L);
    }
  return null;
}
function Cr(n, t, e, r) {
  return _n(n, t, e, r, !0);
}
Cr.INSERT = st;
Cr.DELETE = ot;
Cr.EQUAL = W;
var Kf = Cr, wr = { exports: {} };
wr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", l = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", f = "[object Function]", m = "[object GeneratorFunction]", d = "[object Map]", p = "[object Number]", b = "[object Object]", v = "[object Promise]", y = "[object RegExp]", E = "[object Set]", w = "[object String]", T = "[object Symbol]", S = "[object WeakMap]", L = "[object ArrayBuffer]", R = "[object DataView]", M = "[object Float32Array]", P = "[object Float64Array]", pt = "[object Int8Array]", Ot = "[object Int16Array]", jt = "[object Int32Array]", x = "[object Uint8Array]", B = "[object Uint8ClampedArray]", G = "[object Uint16Array]", Yt = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, Te = /\w*$/, Mr = /^\[object .+?Constructor\]$/, Dr = /^(?:0|[1-9]\d*)$/, U = {};
  U[i] = U[l] = U[L] = U[R] = U[a] = U[c] = U[M] = U[P] = U[pt] = U[Ot] = U[jt] = U[d] = U[p] = U[b] = U[y] = U[E] = U[w] = U[T] = U[x] = U[B] = U[G] = U[Yt] = !0, U[h] = U[f] = U[S] = !1;
  var $r = typeof ee == "object" && ee && ee.Object === Object && ee, jr = typeof self == "object" && self && self.Object === Object && self, mt = $r || jr || Function("return this")(), $n = t && !t.nodeType && t, F = $n && !0 && n && !n.nodeType && n, jn = F && F.exports === $n;
  function Pr(o, u) {
    return o.set(u[0], u[1]), o;
  }
  function bt(o, u) {
    return o.add(u), o;
  }
  function Pn(o, u) {
    for (var g = -1, A = o ? o.length : 0; ++g < A && u(o[g], g, o) !== !1; )
      ;
    return o;
  }
  function Un(o, u) {
    for (var g = -1, A = u.length, k = o.length; ++g < A; )
      o[k + g] = u[g];
    return o;
  }
  function Ye(o, u, g, A) {
    for (var k = -1, I = o ? o.length : 0; ++k < I; )
      g = u(g, o[k], k, o);
    return g;
  }
  function Qe(o, u) {
    for (var g = -1, A = Array(o); ++g < o; )
      A[g] = u(g);
    return A;
  }
  function Fn(o, u) {
    return o == null ? void 0 : o[u];
  }
  function Je(o) {
    var u = !1;
    if (o != null && typeof o.toString != "function")
      try {
        u = !!(o + "");
      } catch {
      }
    return u;
  }
  function Hn(o) {
    var u = -1, g = Array(o.size);
    return o.forEach(function(A, k) {
      g[++u] = [k, A];
    }), g;
  }
  function tn(o, u) {
    return function(g) {
      return o(u(g));
    };
  }
  function zn(o) {
    var u = -1, g = Array(o.size);
    return o.forEach(function(A) {
      g[++u] = A;
    }), g;
  }
  var Ur = Array.prototype, Fr = Function.prototype, xe = Object.prototype, en = mt["__core-js_shared__"], Gn = function() {
    var o = /[^.]+$/.exec(en && en.keys && en.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Kn = Fr.toString, qt = xe.hasOwnProperty, Le = xe.toString, Hr = RegExp(
    "^" + Kn.call(qt).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ae = jn ? mt.Buffer : void 0, _e = mt.Symbol, nn = mt.Uint8Array, ct = tn(Object.getPrototypeOf, Object), Vn = Object.create, Wn = xe.propertyIsEnumerable, zr = Ur.splice, rn = Object.getOwnPropertySymbols, Se = ae ? ae.isBuffer : void 0, Zn = tn(Object.keys, Object), Oe = vt(mt, "DataView"), ce = vt(mt, "Map"), yt = vt(mt, "Promise"), qe = vt(mt, "Set"), sn = vt(mt, "WeakMap"), ue = vt(Object, "create"), ln = rt(Oe), he = rt(ce), on = rt(yt), an = rt(qe), cn = rt(sn), Qt = _e ? _e.prototype : void 0, Xn = Qt ? Qt.valueOf : void 0;
  function Pt(o) {
    var u = -1, g = o ? o.length : 0;
    for (this.clear(); ++u < g; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Gr() {
    this.__data__ = ue ? ue(null) : {};
  }
  function Kr(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function Vr(o) {
    var u = this.__data__;
    if (ue) {
      var g = u[o];
      return g === r ? void 0 : g;
    }
    return qt.call(u, o) ? u[o] : void 0;
  }
  function Yn(o) {
    var u = this.__data__;
    return ue ? u[o] !== void 0 : qt.call(u, o);
  }
  function un(o, u) {
    var g = this.__data__;
    return g[o] = ue && u === void 0 ? r : u, this;
  }
  Pt.prototype.clear = Gr, Pt.prototype.delete = Kr, Pt.prototype.get = Vr, Pt.prototype.has = Yn, Pt.prototype.set = un;
  function Z(o) {
    var u = -1, g = o ? o.length : 0;
    for (this.clear(); ++u < g; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Wr() {
    this.__data__ = [];
  }
  function Zr(o) {
    var u = this.__data__, g = Ie(u, o);
    if (g < 0)
      return !1;
    var A = u.length - 1;
    return g == A ? u.pop() : zr.call(u, g, 1), !0;
  }
  function Xr(o) {
    var u = this.__data__, g = Ie(u, o);
    return g < 0 ? void 0 : u[g][1];
  }
  function Yr(o) {
    return Ie(this.__data__, o) > -1;
  }
  function Qr(o, u) {
    var g = this.__data__, A = Ie(g, o);
    return A < 0 ? g.push([o, u]) : g[A][1] = u, this;
  }
  Z.prototype.clear = Wr, Z.prototype.delete = Zr, Z.prototype.get = Xr, Z.prototype.has = Yr, Z.prototype.set = Qr;
  function Q(o) {
    var u = -1, g = o ? o.length : 0;
    for (this.clear(); ++u < g; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Jr() {
    this.__data__ = {
      hash: new Pt(),
      map: new (ce || Z)(),
      string: new Pt()
    };
  }
  function ts(o) {
    return de(this, o).delete(o);
  }
  function es(o) {
    return de(this, o).get(o);
  }
  function ns(o) {
    return de(this, o).has(o);
  }
  function rs(o, u) {
    return de(this, o).set(o, u), this;
  }
  Q.prototype.clear = Jr, Q.prototype.delete = ts, Q.prototype.get = es, Q.prototype.has = ns, Q.prototype.set = rs;
  function it(o) {
    this.__data__ = new Z(o);
  }
  function ss() {
    this.__data__ = new Z();
  }
  function is(o) {
    return this.__data__.delete(o);
  }
  function ls(o) {
    return this.__data__.get(o);
  }
  function os(o) {
    return this.__data__.has(o);
  }
  function as(o, u) {
    var g = this.__data__;
    if (g instanceof Z) {
      var A = g.__data__;
      if (!ce || A.length < e - 1)
        return A.push([o, u]), this;
      g = this.__data__ = new Q(A);
    }
    return g.set(o, u), this;
  }
  it.prototype.clear = ss, it.prototype.delete = is, it.prototype.get = ls, it.prototype.has = os, it.prototype.set = as;
  function Ce(o, u) {
    var g = gn(o) || ke(o) ? Qe(o.length, String) : [], A = g.length, k = !!A;
    for (var I in o)
      qt.call(o, I) && !(k && (I == "length" || Ns(I, A))) && g.push(I);
    return g;
  }
  function Qn(o, u, g) {
    var A = o[u];
    (!(qt.call(o, u) && rr(A, g)) || g === void 0 && !(u in o)) && (o[u] = g);
  }
  function Ie(o, u) {
    for (var g = o.length; g--; )
      if (rr(o[g][0], u))
        return g;
    return -1;
  }
  function Ct(o, u) {
    return o && dn(u, mn(u), o);
  }
  function hn(o, u, g, A, k, I, $) {
    var D;
    if (A && (D = I ? A(o, k, I, $) : A(o)), D !== void 0)
      return D;
    if (!Rt(o))
      return o;
    var K = gn(o);
    if (K) {
      if (D = Es(o), !u)
        return bs(o, D);
    } else {
      var j = Ft(o), J = j == f || j == m;
      if (sr(o))
        return Re(o, u);
      if (j == b || j == i || J && !I) {
        if (Je(o))
          return I ? o : {};
        if (D = It(J ? {} : o), !u)
          return ys(o, Ct(D, o));
      } else {
        if (!U[j])
          return I ? o : {};
        D = As(o, j, hn, u);
      }
    }
    $ || ($ = new it());
    var lt = $.get(o);
    if (lt)
      return lt;
    if ($.set(o, D), !K)
      var V = g ? vs(o) : mn(o);
    return Pn(V || o, function(tt, X) {
      V && (X = tt, tt = o[X]), Qn(D, X, hn(tt, u, g, A, X, o, $));
    }), D;
  }
  function cs(o) {
    return Rt(o) ? Vn(o) : {};
  }
  function us(o, u, g) {
    var A = u(o);
    return gn(o) ? A : Un(A, g(o));
  }
  function hs(o) {
    return Le.call(o);
  }
  function fs(o) {
    if (!Rt(o) || Ts(o))
      return !1;
    var u = pn(o) || Je(o) ? Hr : Mr;
    return u.test(rt(o));
  }
  function ds(o) {
    if (!er(o))
      return Zn(o);
    var u = [];
    for (var g in Object(o))
      qt.call(o, g) && g != "constructor" && u.push(g);
    return u;
  }
  function Re(o, u) {
    if (u)
      return o.slice();
    var g = new o.constructor(o.length);
    return o.copy(g), g;
  }
  function fn(o) {
    var u = new o.constructor(o.byteLength);
    return new nn(u).set(new nn(o)), u;
  }
  function fe(o, u) {
    var g = u ? fn(o.buffer) : o.buffer;
    return new o.constructor(g, o.byteOffset, o.byteLength);
  }
  function Jn(o, u, g) {
    var A = u ? g(Hn(o), !0) : Hn(o);
    return Ye(A, Pr, new o.constructor());
  }
  function tr(o) {
    var u = new o.constructor(o.source, Te.exec(o));
    return u.lastIndex = o.lastIndex, u;
  }
  function gs(o, u, g) {
    var A = u ? g(zn(o), !0) : zn(o);
    return Ye(A, bt, new o.constructor());
  }
  function ps(o) {
    return Xn ? Object(Xn.call(o)) : {};
  }
  function ms(o, u) {
    var g = u ? fn(o.buffer) : o.buffer;
    return new o.constructor(g, o.byteOffset, o.length);
  }
  function bs(o, u) {
    var g = -1, A = o.length;
    for (u || (u = Array(A)); ++g < A; )
      u[g] = o[g];
    return u;
  }
  function dn(o, u, g, A) {
    g || (g = {});
    for (var k = -1, I = u.length; ++k < I; ) {
      var $ = u[k], D = void 0;
      Qn(g, $, D === void 0 ? o[$] : D);
    }
    return g;
  }
  function ys(o, u) {
    return dn(o, Ut(o), u);
  }
  function vs(o) {
    return us(o, mn, Ut);
  }
  function de(o, u) {
    var g = o.__data__;
    return ws(u) ? g[typeof u == "string" ? "string" : "hash"] : g.map;
  }
  function vt(o, u) {
    var g = Fn(o, u);
    return fs(g) ? g : void 0;
  }
  var Ut = rn ? tn(rn, Object) : Ls, Ft = hs;
  (Oe && Ft(new Oe(new ArrayBuffer(1))) != R || ce && Ft(new ce()) != d || yt && Ft(yt.resolve()) != v || qe && Ft(new qe()) != E || sn && Ft(new sn()) != S) && (Ft = function(o) {
    var u = Le.call(o), g = u == b ? o.constructor : void 0, A = g ? rt(g) : void 0;
    if (A)
      switch (A) {
        case ln:
          return R;
        case he:
          return d;
        case on:
          return v;
        case an:
          return E;
        case cn:
          return S;
      }
    return u;
  });
  function Es(o) {
    var u = o.length, g = o.constructor(u);
    return u && typeof o[0] == "string" && qt.call(o, "index") && (g.index = o.index, g.input = o.input), g;
  }
  function It(o) {
    return typeof o.constructor == "function" && !er(o) ? cs(ct(o)) : {};
  }
  function As(o, u, g, A) {
    var k = o.constructor;
    switch (u) {
      case L:
        return fn(o);
      case a:
      case c:
        return new k(+o);
      case R:
        return fe(o, A);
      case M:
      case P:
      case pt:
      case Ot:
      case jt:
      case x:
      case B:
      case G:
      case Yt:
        return ms(o, A);
      case d:
        return Jn(o, A, g);
      case p:
      case w:
        return new k(o);
      case y:
        return tr(o);
      case E:
        return gs(o, A, g);
      case T:
        return ps(o);
    }
  }
  function Ns(o, u) {
    return u = u ?? s, !!u && (typeof o == "number" || Dr.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function ws(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function Ts(o) {
    return !!Gn && Gn in o;
  }
  function er(o) {
    var u = o && o.constructor, g = typeof u == "function" && u.prototype || xe;
    return o === g;
  }
  function rt(o) {
    if (o != null) {
      try {
        return Kn.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function nr(o) {
    return hn(o, !0, !0);
  }
  function rr(o, u) {
    return o === u || o !== o && u !== u;
  }
  function ke(o) {
    return xs(o) && qt.call(o, "callee") && (!Wn.call(o, "callee") || Le.call(o) == i);
  }
  var gn = Array.isArray;
  function Be(o) {
    return o != null && ir(o.length) && !pn(o);
  }
  function xs(o) {
    return lr(o) && Be(o);
  }
  var sr = Se || _s;
  function pn(o) {
    var u = Rt(o) ? Le.call(o) : "";
    return u == f || u == m;
  }
  function ir(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= s;
  }
  function Rt(o) {
    var u = typeof o;
    return !!o && (u == "object" || u == "function");
  }
  function lr(o) {
    return !!o && typeof o == "object";
  }
  function mn(o) {
    return Be(o) ? Ce(o) : ds(o);
  }
  function Ls() {
    return [];
  }
  function _s() {
    return !1;
  }
  n.exports = nr;
})(wr, wr.exports);
var Lo = wr.exports, Tr = { exports: {} };
Tr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 1, i = 2, l = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", m = "[object Date]", d = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", v = "[object Map]", y = "[object Number]", E = "[object Null]", w = "[object Object]", T = "[object Promise]", S = "[object Proxy]", L = "[object RegExp]", R = "[object Set]", M = "[object String]", P = "[object Symbol]", pt = "[object Undefined]", Ot = "[object WeakMap]", jt = "[object ArrayBuffer]", x = "[object DataView]", B = "[object Float32Array]", G = "[object Float64Array]", Yt = "[object Int8Array]", oe = "[object Int16Array]", Te = "[object Int32Array]", Mr = "[object Uint8Array]", Dr = "[object Uint8ClampedArray]", U = "[object Uint16Array]", $r = "[object Uint32Array]", jr = /[\\^$.*+?()[\]{}|]/g, mt = /^\[object .+?Constructor\]$/, $n = /^(?:0|[1-9]\d*)$/, F = {};
  F[B] = F[G] = F[Yt] = F[oe] = F[Te] = F[Mr] = F[Dr] = F[U] = F[$r] = !0, F[a] = F[c] = F[jt] = F[f] = F[x] = F[m] = F[d] = F[p] = F[v] = F[y] = F[w] = F[L] = F[R] = F[M] = F[Ot] = !1;
  var jn = typeof ee == "object" && ee && ee.Object === Object && ee, Pr = typeof self == "object" && self && self.Object === Object && self, bt = jn || Pr || Function("return this")(), Pn = t && !t.nodeType && t, Un = Pn && !0 && n && !n.nodeType && n, Ye = Un && Un.exports === Pn, Qe = Ye && jn.process, Fn = function() {
    try {
      return Qe && Qe.binding && Qe.binding("util");
    } catch {
    }
  }(), Je = Fn && Fn.isTypedArray;
  function Hn(o, u) {
    for (var g = -1, A = o == null ? 0 : o.length, k = 0, I = []; ++g < A; ) {
      var $ = o[g];
      u($, g, o) && (I[k++] = $);
    }
    return I;
  }
  function tn(o, u) {
    for (var g = -1, A = u.length, k = o.length; ++g < A; )
      o[k + g] = u[g];
    return o;
  }
  function zn(o, u) {
    for (var g = -1, A = o == null ? 0 : o.length; ++g < A; )
      if (u(o[g], g, o))
        return !0;
    return !1;
  }
  function Ur(o, u) {
    for (var g = -1, A = Array(o); ++g < o; )
      A[g] = u(g);
    return A;
  }
  function Fr(o) {
    return function(u) {
      return o(u);
    };
  }
  function xe(o, u) {
    return o.has(u);
  }
  function en(o, u) {
    return o == null ? void 0 : o[u];
  }
  function Gn(o) {
    var u = -1, g = Array(o.size);
    return o.forEach(function(A, k) {
      g[++u] = [k, A];
    }), g;
  }
  function Kn(o, u) {
    return function(g) {
      return o(u(g));
    };
  }
  function qt(o) {
    var u = -1, g = Array(o.size);
    return o.forEach(function(A) {
      g[++u] = A;
    }), g;
  }
  var Le = Array.prototype, Hr = Function.prototype, ae = Object.prototype, _e = bt["__core-js_shared__"], nn = Hr.toString, ct = ae.hasOwnProperty, Vn = function() {
    var o = /[^.]+$/.exec(_e && _e.keys && _e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Wn = ae.toString, zr = RegExp(
    "^" + nn.call(ct).replace(jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), rn = Ye ? bt.Buffer : void 0, Se = bt.Symbol, Zn = bt.Uint8Array, Oe = ae.propertyIsEnumerable, ce = Le.splice, yt = Se ? Se.toStringTag : void 0, qe = Object.getOwnPropertySymbols, sn = rn ? rn.isBuffer : void 0, ue = Kn(Object.keys, Object), ln = Ut(bt, "DataView"), he = Ut(bt, "Map"), on = Ut(bt, "Promise"), an = Ut(bt, "Set"), cn = Ut(bt, "WeakMap"), Qt = Ut(Object, "create"), Xn = rt(ln), Pt = rt(he), Gr = rt(on), Kr = rt(an), Vr = rt(cn), Yn = Se ? Se.prototype : void 0, un = Yn ? Yn.valueOf : void 0;
  function Z(o) {
    var u = -1, g = o == null ? 0 : o.length;
    for (this.clear(); ++u < g; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Wr() {
    this.__data__ = Qt ? Qt(null) : {}, this.size = 0;
  }
  function Zr(o) {
    var u = this.has(o) && delete this.__data__[o];
    return this.size -= u ? 1 : 0, u;
  }
  function Xr(o) {
    var u = this.__data__;
    if (Qt) {
      var g = u[o];
      return g === r ? void 0 : g;
    }
    return ct.call(u, o) ? u[o] : void 0;
  }
  function Yr(o) {
    var u = this.__data__;
    return Qt ? u[o] !== void 0 : ct.call(u, o);
  }
  function Qr(o, u) {
    var g = this.__data__;
    return this.size += this.has(o) ? 0 : 1, g[o] = Qt && u === void 0 ? r : u, this;
  }
  Z.prototype.clear = Wr, Z.prototype.delete = Zr, Z.prototype.get = Xr, Z.prototype.has = Yr, Z.prototype.set = Qr;
  function Q(o) {
    var u = -1, g = o == null ? 0 : o.length;
    for (this.clear(); ++u < g; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Jr() {
    this.__data__ = [], this.size = 0;
  }
  function ts(o) {
    var u = this.__data__, g = Re(u, o);
    if (g < 0)
      return !1;
    var A = u.length - 1;
    return g == A ? u.pop() : ce.call(u, g, 1), --this.size, !0;
  }
  function es(o) {
    var u = this.__data__, g = Re(u, o);
    return g < 0 ? void 0 : u[g][1];
  }
  function ns(o) {
    return Re(this.__data__, o) > -1;
  }
  function rs(o, u) {
    var g = this.__data__, A = Re(g, o);
    return A < 0 ? (++this.size, g.push([o, u])) : g[A][1] = u, this;
  }
  Q.prototype.clear = Jr, Q.prototype.delete = ts, Q.prototype.get = es, Q.prototype.has = ns, Q.prototype.set = rs;
  function it(o) {
    var u = -1, g = o == null ? 0 : o.length;
    for (this.clear(); ++u < g; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function ss() {
    this.size = 0, this.__data__ = {
      hash: new Z(),
      map: new (he || Q)(),
      string: new Z()
    };
  }
  function is(o) {
    var u = vt(this, o).delete(o);
    return this.size -= u ? 1 : 0, u;
  }
  function ls(o) {
    return vt(this, o).get(o);
  }
  function os(o) {
    return vt(this, o).has(o);
  }
  function as(o, u) {
    var g = vt(this, o), A = g.size;
    return g.set(o, u), this.size += g.size == A ? 0 : 1, this;
  }
  it.prototype.clear = ss, it.prototype.delete = is, it.prototype.get = ls, it.prototype.has = os, it.prototype.set = as;
  function Ce(o) {
    var u = -1, g = o == null ? 0 : o.length;
    for (this.__data__ = new it(); ++u < g; )
      this.add(o[u]);
  }
  function Qn(o) {
    return this.__data__.set(o, r), this;
  }
  function Ie(o) {
    return this.__data__.has(o);
  }
  Ce.prototype.add = Ce.prototype.push = Qn, Ce.prototype.has = Ie;
  function Ct(o) {
    var u = this.__data__ = new Q(o);
    this.size = u.size;
  }
  function hn() {
    this.__data__ = new Q(), this.size = 0;
  }
  function cs(o) {
    var u = this.__data__, g = u.delete(o);
    return this.size = u.size, g;
  }
  function us(o) {
    return this.__data__.get(o);
  }
  function hs(o) {
    return this.__data__.has(o);
  }
  function fs(o, u) {
    var g = this.__data__;
    if (g instanceof Q) {
      var A = g.__data__;
      if (!he || A.length < e - 1)
        return A.push([o, u]), this.size = ++g.size, this;
      g = this.__data__ = new it(A);
    }
    return g.set(o, u), this.size = g.size, this;
  }
  Ct.prototype.clear = hn, Ct.prototype.delete = cs, Ct.prototype.get = us, Ct.prototype.has = hs, Ct.prototype.set = fs;
  function ds(o, u) {
    var g = ke(o), A = !g && rr(o), k = !g && !A && Be(o), I = !g && !A && !k && lr(o), $ = g || A || k || I, D = $ ? Ur(o.length, String) : [], K = D.length;
    for (var j in o)
      ct.call(o, j) && !($ && // Safari 9 has enumerable `arguments.length` in strict mode.
      (j == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      k && (j == "offset" || j == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      I && (j == "buffer" || j == "byteLength" || j == "byteOffset") || // Skip index properties.
      As(j, K))) && D.push(j);
    return D;
  }
  function Re(o, u) {
    for (var g = o.length; g--; )
      if (nr(o[g][0], u))
        return g;
    return -1;
  }
  function fn(o, u, g) {
    var A = u(o);
    return ke(o) ? A : tn(A, g(o));
  }
  function fe(o) {
    return o == null ? o === void 0 ? pt : E : yt && yt in Object(o) ? Ft(o) : er(o);
  }
  function Jn(o) {
    return Rt(o) && fe(o) == a;
  }
  function tr(o, u, g, A, k) {
    return o === u ? !0 : o == null || u == null || !Rt(o) && !Rt(u) ? o !== o && u !== u : gs(o, u, g, A, tr, k);
  }
  function gs(o, u, g, A, k, I) {
    var $ = ke(o), D = ke(u), K = $ ? c : It(o), j = D ? c : It(u);
    K = K == a ? w : K, j = j == a ? w : j;
    var J = K == w, lt = j == w, V = K == j;
    if (V && Be(o)) {
      if (!Be(u))
        return !1;
      $ = !0, J = !1;
    }
    if (V && !J)
      return I || (I = new Ct()), $ || lr(o) ? dn(o, u, g, A, k, I) : ys(o, u, K, g, A, k, I);
    if (!(g & s)) {
      var tt = J && ct.call(o, "__wrapped__"), X = lt && ct.call(u, "__wrapped__");
      if (tt || X) {
        var Jt = tt ? o.value() : o, Ht = X ? u.value() : u;
        return I || (I = new Ct()), k(Jt, Ht, g, A, I);
      }
    }
    return V ? (I || (I = new Ct()), vs(o, u, g, A, k, I)) : !1;
  }
  function ps(o) {
    if (!ir(o) || ws(o))
      return !1;
    var u = sr(o) ? zr : mt;
    return u.test(rt(o));
  }
  function ms(o) {
    return Rt(o) && pn(o.length) && !!F[fe(o)];
  }
  function bs(o) {
    if (!Ts(o))
      return ue(o);
    var u = [];
    for (var g in Object(o))
      ct.call(o, g) && g != "constructor" && u.push(g);
    return u;
  }
  function dn(o, u, g, A, k, I) {
    var $ = g & s, D = o.length, K = u.length;
    if (D != K && !($ && K > D))
      return !1;
    var j = I.get(o);
    if (j && I.get(u))
      return j == u;
    var J = -1, lt = !0, V = g & i ? new Ce() : void 0;
    for (I.set(o, u), I.set(u, o); ++J < D; ) {
      var tt = o[J], X = u[J];
      if (A)
        var Jt = $ ? A(X, tt, J, u, o, I) : A(tt, X, J, o, u, I);
      if (Jt !== void 0) {
        if (Jt)
          continue;
        lt = !1;
        break;
      }
      if (V) {
        if (!zn(u, function(Ht, ge) {
          if (!xe(V, ge) && (tt === Ht || k(tt, Ht, g, A, I)))
            return V.push(ge);
        })) {
          lt = !1;
          break;
        }
      } else if (!(tt === X || k(tt, X, g, A, I))) {
        lt = !1;
        break;
      }
    }
    return I.delete(o), I.delete(u), lt;
  }
  function ys(o, u, g, A, k, I, $) {
    switch (g) {
      case x:
        if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset)
          return !1;
        o = o.buffer, u = u.buffer;
      case jt:
        return !(o.byteLength != u.byteLength || !I(new Zn(o), new Zn(u)));
      case f:
      case m:
      case y:
        return nr(+o, +u);
      case d:
        return o.name == u.name && o.message == u.message;
      case L:
      case M:
        return o == u + "";
      case v:
        var D = Gn;
      case R:
        var K = A & s;
        if (D || (D = qt), o.size != u.size && !K)
          return !1;
        var j = $.get(o);
        if (j)
          return j == u;
        A |= i, $.set(o, u);
        var J = dn(D(o), D(u), A, k, I, $);
        return $.delete(o), J;
      case P:
        if (un)
          return un.call(o) == un.call(u);
    }
    return !1;
  }
  function vs(o, u, g, A, k, I) {
    var $ = g & s, D = de(o), K = D.length, j = de(u), J = j.length;
    if (K != J && !$)
      return !1;
    for (var lt = K; lt--; ) {
      var V = D[lt];
      if (!($ ? V in u : ct.call(u, V)))
        return !1;
    }
    var tt = I.get(o);
    if (tt && I.get(u))
      return tt == u;
    var X = !0;
    I.set(o, u), I.set(u, o);
    for (var Jt = $; ++lt < K; ) {
      V = D[lt];
      var Ht = o[V], ge = u[V];
      if (A)
        var Pi = $ ? A(ge, Ht, V, u, o, I) : A(Ht, ge, V, o, u, I);
      if (!(Pi === void 0 ? Ht === ge || k(Ht, ge, g, A, I) : Pi)) {
        X = !1;
        break;
      }
      Jt || (Jt = V == "constructor");
    }
    if (X && !Jt) {
      var or = o.constructor, ar = u.constructor;
      or != ar && "constructor" in o && "constructor" in u && !(typeof or == "function" && or instanceof or && typeof ar == "function" && ar instanceof ar) && (X = !1);
    }
    return I.delete(o), I.delete(u), X;
  }
  function de(o) {
    return fn(o, mn, Es);
  }
  function vt(o, u) {
    var g = o.__data__;
    return Ns(u) ? g[typeof u == "string" ? "string" : "hash"] : g.map;
  }
  function Ut(o, u) {
    var g = en(o, u);
    return ps(g) ? g : void 0;
  }
  function Ft(o) {
    var u = ct.call(o, yt), g = o[yt];
    try {
      o[yt] = void 0;
      var A = !0;
    } catch {
    }
    var k = Wn.call(o);
    return A && (u ? o[yt] = g : delete o[yt]), k;
  }
  var Es = qe ? function(o) {
    return o == null ? [] : (o = Object(o), Hn(qe(o), function(u) {
      return Oe.call(o, u);
    }));
  } : Ls, It = fe;
  (ln && It(new ln(new ArrayBuffer(1))) != x || he && It(new he()) != v || on && It(on.resolve()) != T || an && It(new an()) != R || cn && It(new cn()) != Ot) && (It = function(o) {
    var u = fe(o), g = u == w ? o.constructor : void 0, A = g ? rt(g) : "";
    if (A)
      switch (A) {
        case Xn:
          return x;
        case Pt:
          return v;
        case Gr:
          return T;
        case Kr:
          return R;
        case Vr:
          return Ot;
      }
    return u;
  });
  function As(o, u) {
    return u = u ?? l, !!u && (typeof o == "number" || $n.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function Ns(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function ws(o) {
    return !!Vn && Vn in o;
  }
  function Ts(o) {
    var u = o && o.constructor, g = typeof u == "function" && u.prototype || ae;
    return o === g;
  }
  function er(o) {
    return Wn.call(o);
  }
  function rt(o) {
    if (o != null) {
      try {
        return nn.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function nr(o, u) {
    return o === u || o !== o && u !== u;
  }
  var rr = Jn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Jn : function(o) {
    return Rt(o) && ct.call(o, "callee") && !Oe.call(o, "callee");
  }, ke = Array.isArray;
  function gn(o) {
    return o != null && pn(o.length) && !sr(o);
  }
  var Be = sn || _s;
  function xs(o, u) {
    return tr(o, u);
  }
  function sr(o) {
    if (!ir(o))
      return !1;
    var u = fe(o);
    return u == p || u == b || u == h || u == S;
  }
  function pn(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function ir(o) {
    var u = typeof o;
    return o != null && (u == "object" || u == "function");
  }
  function Rt(o) {
    return o != null && typeof o == "object";
  }
  var lr = Je ? Fr(Je) : ms;
  function mn(o) {
    return gn(o) ? ds(o) : bs(o);
  }
  function Ls() {
    return [];
  }
  function _s() {
    return !1;
  }
  n.exports = xs;
})(Tr, Tr.exports);
var _o = Tr.exports, Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
const Vf = Lo, Wf = _o;
var ei;
(function(n) {
  function t(i = {}, l = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    let c = Vf(l);
    a || (c = Object.keys(c).reduce((h, f) => (c[f] != null && (h[f] = c[f]), h), {}));
    for (const h in i)
      i[h] !== void 0 && l[h] === void 0 && (c[h] = i[h]);
    return Object.keys(c).length > 0 ? c : void 0;
  }
  n.compose = t;
  function e(i = {}, l = {}) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    const a = Object.keys(i).concat(Object.keys(l)).reduce((c, h) => (Wf(i[h], l[h]) || (c[h] = l[h] === void 0 ? null : l[h]), c), {});
    return Object.keys(a).length > 0 ? a : void 0;
  }
  n.diff = e;
  function r(i = {}, l = {}) {
    i = i || {};
    const a = Object.keys(l).reduce((c, h) => (l[h] !== i[h] && i[h] !== void 0 && (c[h] = l[h]), c), {});
    return Object.keys(i).reduce((c, h) => (i[h] !== l[h] && l[h] === void 0 && (c[h] = null), c), a);
  }
  n.invert = r;
  function s(i, l, a = !1) {
    if (typeof i != "object")
      return l;
    if (typeof l != "object")
      return;
    if (!a)
      return l;
    const c = Object.keys(l).reduce((h, f) => (i[f] === void 0 && (h[f] = l[f]), h), {});
    return Object.keys(c).length > 0 ? c : void 0;
  }
  n.transform = s;
})(ei || (ei = {}));
Si.default = ei;
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
var ni;
(function(n) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  n.length = t;
})(ni || (ni = {}));
Ir.default = ni;
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
const El = Ir;
class Zf {
  constructor(t) {
    this.ops = t, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t) {
    t || (t = 1 / 0);
    const e = this.ops[this.index];
    if (e) {
      const r = this.offset, s = El.default.length(e);
      if (t >= s - r ? (t = s - r, this.index += 1, this.offset = 0) : this.offset += t, typeof e.delete == "number")
        return { delete: t };
      {
        const i = {};
        return e.attributes && (i.attributes = e.attributes), typeof e.retain == "number" ? i.retain = t : typeof e.retain == "object" && e.retain !== null ? i.retain = e.retain : typeof e.insert == "string" ? i.insert = e.insert.substr(r, t) : i.insert = e.insert, i;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? El.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const t = this.ops[this.index];
    return t ? typeof t.delete == "number" ? "delete" : typeof t.retain == "number" || typeof t.retain == "object" && t.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const t = this.offset, e = this.index, r = this.next(), s = this.ops.slice(this.index);
        return this.offset = t, this.index = e, [r].concat(s);
      }
    } else return [];
  }
}
Oi.default = Zf;
(function(n, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = Kf, r = Lo, s = _o, i = Si;
  t.AttributeMap = i.default;
  const l = Ir;
  t.Op = l.default;
  const a = Oi;
  t.OpIterator = a.default;
  const c = "\0", h = (m, d) => {
    if (typeof m != "object" || m === null)
      throw new Error(`cannot retain a ${typeof m}`);
    if (typeof d != "object" || d === null)
      throw new Error(`cannot retain a ${typeof d}`);
    const p = Object.keys(m)[0];
    if (!p || p !== Object.keys(d)[0])
      throw new Error(`embed types not matched: ${p} != ${Object.keys(d)[0]}`);
    return [p, m[p], d[p]];
  };
  class f {
    constructor(d) {
      Array.isArray(d) ? this.ops = d : d != null && Array.isArray(d.ops) ? this.ops = d.ops : this.ops = [];
    }
    static registerEmbed(d, p) {
      this.handlers[d] = p;
    }
    static unregisterEmbed(d) {
      delete this.handlers[d];
    }
    static getHandler(d) {
      const p = this.handlers[d];
      if (!p)
        throw new Error(`no handlers for embed type "${d}"`);
      return p;
    }
    insert(d, p) {
      const b = {};
      return typeof d == "string" && d.length === 0 ? this : (b.insert = d, p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b));
    }
    delete(d) {
      return d <= 0 ? this : this.push({ delete: d });
    }
    retain(d, p) {
      if (typeof d == "number" && d <= 0)
        return this;
      const b = { retain: d };
      return p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b);
    }
    push(d) {
      let p = this.ops.length, b = this.ops[p - 1];
      if (d = r(d), typeof b == "object") {
        if (typeof d.delete == "number" && typeof b.delete == "number")
          return this.ops[p - 1] = { delete: b.delete + d.delete }, this;
        if (typeof b.delete == "number" && d.insert != null && (p -= 1, b = this.ops[p - 1], typeof b != "object"))
          return this.ops.unshift(d), this;
        if (s(d.attributes, b.attributes)) {
          if (typeof d.insert == "string" && typeof b.insert == "string")
            return this.ops[p - 1] = { insert: b.insert + d.insert }, typeof d.attributes == "object" && (this.ops[p - 1].attributes = d.attributes), this;
          if (typeof d.retain == "number" && typeof b.retain == "number")
            return this.ops[p - 1] = { retain: b.retain + d.retain }, typeof d.attributes == "object" && (this.ops[p - 1].attributes = d.attributes), this;
        }
      }
      return p === this.ops.length ? this.ops.push(d) : this.ops.splice(p, 0, d), this;
    }
    chop() {
      const d = this.ops[this.ops.length - 1];
      return d && typeof d.retain == "number" && !d.attributes && this.ops.pop(), this;
    }
    filter(d) {
      return this.ops.filter(d);
    }
    forEach(d) {
      this.ops.forEach(d);
    }
    map(d) {
      return this.ops.map(d);
    }
    partition(d) {
      const p = [], b = [];
      return this.forEach((v) => {
        (d(v) ? p : b).push(v);
      }), [p, b];
    }
    reduce(d, p) {
      return this.ops.reduce(d, p);
    }
    changeLength() {
      return this.reduce((d, p) => p.insert ? d + l.default.length(p) : p.delete ? d - p.delete : d, 0);
    }
    length() {
      return this.reduce((d, p) => d + l.default.length(p), 0);
    }
    slice(d = 0, p = 1 / 0) {
      const b = [], v = new a.default(this.ops);
      let y = 0;
      for (; y < p && v.hasNext(); ) {
        let E;
        y < d ? E = v.next(d - y) : (E = v.next(p - y), b.push(E)), y += l.default.length(E);
      }
      return new f(b);
    }
    compose(d) {
      const p = new a.default(this.ops), b = new a.default(d.ops), v = [], y = b.peek();
      if (y != null && typeof y.retain == "number" && y.attributes == null) {
        let w = y.retain;
        for (; p.peekType() === "insert" && p.peekLength() <= w; )
          w -= p.peekLength(), v.push(p.next());
        y.retain - w > 0 && b.next(y.retain - w);
      }
      const E = new f(v);
      for (; p.hasNext() || b.hasNext(); )
        if (b.peekType() === "insert")
          E.push(b.next());
        else if (p.peekType() === "delete")
          E.push(p.next());
        else {
          const w = Math.min(p.peekLength(), b.peekLength()), T = p.next(w), S = b.next(w);
          if (S.retain) {
            const L = {};
            if (typeof T.retain == "number")
              L.retain = typeof S.retain == "number" ? w : S.retain;
            else if (typeof S.retain == "number")
              T.retain == null ? L.insert = T.insert : L.retain = T.retain;
            else {
              const M = T.retain == null ? "insert" : "retain", [P, pt, Ot] = h(T[M], S.retain), jt = f.getHandler(P);
              L[M] = {
                [P]: jt.compose(pt, Ot, M === "retain")
              };
            }
            const R = i.default.compose(T.attributes, S.attributes, typeof T.retain == "number");
            if (R && (L.attributes = R), E.push(L), !b.hasNext() && s(E.ops[E.ops.length - 1], L)) {
              const M = new f(p.rest());
              return E.concat(M).chop();
            }
          } else typeof S.delete == "number" && (typeof T.retain == "number" || typeof T.retain == "object" && T.retain !== null) && E.push(S);
        }
      return E.chop();
    }
    concat(d) {
      const p = new f(this.ops.slice());
      return d.ops.length > 0 && (p.push(d.ops[0]), p.ops = p.ops.concat(d.ops.slice(1))), p;
    }
    diff(d, p) {
      if (this.ops === d.ops)
        return new f();
      const b = [this, d].map((T) => T.map((S) => {
        if (S.insert != null)
          return typeof S.insert == "string" ? S.insert : c;
        const L = T === d ? "on" : "with";
        throw new Error("diff() called " + L + " non-document");
      }).join("")), v = new f(), y = e(b[0], b[1], p, !0), E = new a.default(this.ops), w = new a.default(d.ops);
      return y.forEach((T) => {
        let S = T[1].length;
        for (; S > 0; ) {
          let L = 0;
          switch (T[0]) {
            case e.INSERT:
              L = Math.min(w.peekLength(), S), v.push(w.next(L));
              break;
            case e.DELETE:
              L = Math.min(S, E.peekLength()), E.next(L), v.delete(L);
              break;
            case e.EQUAL:
              L = Math.min(E.peekLength(), w.peekLength(), S);
              const R = E.next(L), M = w.next(L);
              s(R.insert, M.insert) ? v.retain(L, i.default.diff(R.attributes, M.attributes)) : v.push(M).delete(L);
              break;
          }
          S -= L;
        }
      }), v.chop();
    }
    eachLine(d, p = `
`) {
      const b = new a.default(this.ops);
      let v = new f(), y = 0;
      for (; b.hasNext(); ) {
        if (b.peekType() !== "insert")
          return;
        const E = b.peek(), w = l.default.length(E) - b.peekLength(), T = typeof E.insert == "string" ? E.insert.indexOf(p, w) - w : -1;
        if (T < 0)
          v.push(b.next());
        else if (T > 0)
          v.push(b.next(T));
        else {
          if (d(v, b.next(1).attributes || {}, y) === !1)
            return;
          y += 1, v = new f();
        }
      }
      v.length() > 0 && d(v, {}, y);
    }
    invert(d) {
      const p = new f();
      return this.reduce((b, v) => {
        if (v.insert)
          p.delete(l.default.length(v));
        else {
          if (typeof v.retain == "number" && v.attributes == null)
            return p.retain(v.retain), b + v.retain;
          if (v.delete || typeof v.retain == "number") {
            const y = v.delete || v.retain;
            return d.slice(b, b + y).forEach((w) => {
              v.delete ? p.push(w) : v.retain && v.attributes && p.retain(l.default.length(w), i.default.invert(v.attributes, w.attributes));
            }), b + y;
          } else if (typeof v.retain == "object" && v.retain !== null) {
            const y = d.slice(b, b + 1), E = new a.default(y.ops).next(), [w, T, S] = h(v.retain, E.insert), L = f.getHandler(w);
            return p.retain({ [w]: L.invert(T, S) }, i.default.invert(v.attributes, E.attributes)), b + 1;
          }
        }
        return b;
      }, 0), p.chop();
    }
    transform(d, p = !1) {
      if (p = !!p, typeof d == "number")
        return this.transformPosition(d, p);
      const b = d, v = new a.default(this.ops), y = new a.default(b.ops), E = new f();
      for (; v.hasNext() || y.hasNext(); )
        if (v.peekType() === "insert" && (p || y.peekType() !== "insert"))
          E.retain(l.default.length(v.next()));
        else if (y.peekType() === "insert")
          E.push(y.next());
        else {
          const w = Math.min(v.peekLength(), y.peekLength()), T = v.next(w), S = y.next(w);
          if (T.delete)
            continue;
          if (S.delete)
            E.push(S);
          else {
            const L = T.retain, R = S.retain;
            let M = typeof R == "object" && R !== null ? R : w;
            if (typeof L == "object" && L !== null && typeof R == "object" && R !== null) {
              const P = Object.keys(L)[0];
              if (P === Object.keys(R)[0]) {
                const pt = f.getHandler(P);
                pt && (M = {
                  [P]: pt.transform(L[P], R[P], p)
                });
              }
            }
            E.retain(M, i.default.transform(T.attributes, S.attributes, p));
          }
        }
      return E.chop();
    }
    transformPosition(d, p = !1) {
      p = !!p;
      const b = new a.default(this.ops);
      let v = 0;
      for (; b.hasNext() && v <= d; ) {
        const y = b.peekLength(), E = b.peekType();
        if (b.next(), E === "delete") {
          d -= Math.min(y, d - v);
          continue;
        } else E === "insert" && (v < d || !p) && (d += y);
        v += y;
      }
      return d;
    }
  }
  f.Op = l.default, f.OpIterator = a.default, f.AttributeMap = i.default, f.handlers = {}, t.default = f, n.exports = f, n.exports.default = f;
})(ti, ti.exports);
var gt = ti.exports;
const q = /* @__PURE__ */ Hl(gt);
class _t extends at {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
_t.blotName = "break";
_t.tagName = "BR";
let xt = class extends Nr {
};
function Rr(n) {
  return n.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
const kt = class kt extends Ti {
  static compare(t, e) {
    const r = kt.order.indexOf(t), s = kt.order.indexOf(e);
    return r >= 0 || s >= 0 ? r - s : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, r, s) {
    if (kt.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, C.BLOT)) {
      const i = this.isolate(t, e);
      s && i.wrap(r, s);
    } else
      super.formatAt(t, e, r, s);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof kt && kt.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
};
_(kt, "allowedChildren", [kt, _t, at, xt]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
_(kt, "order", [
  "cursor",
  "inline",
  // Must be lower
  "link",
  // Chrome wants <a> to be lower
  "underline",
  "strike",
  "italic",
  "bold",
  "script",
  "code"
  // Must be higher
]);
let $t = kt;
const Al = 1;
class Y extends Ln {
  constructor() {
    super(...arguments);
    _(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = So(this)), this.cache.delta;
  }
  deleteAt(e, r) {
    super.deleteAt(e, r), this.cache = {};
  }
  formatAt(e, r, s, i) {
    r <= 0 || (this.scroll.query(s, C.BLOCK) ? e + r === this.length() && this.format(s, i) : super.formatAt(e, Math.min(r, this.length() - e - 1), s, i), this.cache = {});
  }
  insertAt(e, r, s) {
    if (s != null) {
      super.insertAt(e, r, s), this.cache = {};
      return;
    }
    if (r.length === 0) return;
    const i = r.split(`
`), l = i.shift();
    l.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), l) : this.children.tail.insertAt(this.children.tail.length(), l), this.cache = {});
    let a = this;
    i.reduce((c, h) => (a = a.split(c, !0), a.insertAt(0, h), h.length), e + l.length);
  }
  insertBefore(e, r) {
    const {
      head: s
    } = this.children;
    super.insertBefore(e, r), s instanceof _t && s.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + Al), this.cache.length;
  }
  moveChildren(e, r) {
    super.moveChildren(e, r), this.cache = {};
  }
  optimize(e) {
    super.optimize(e), this.cache = {};
  }
  path(e) {
    return super.path(e, !0);
  }
  removeChild(e) {
    super.removeChild(e), this.cache = {};
  }
  split(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (r && (e === 0 || e >= this.length() - Al)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const s = super.split(e, r);
    return this.cache = {}, s;
  }
}
Y.blotName = "block";
Y.tagName = "P";
Y.defaultChild = _t;
Y.allowedChildren = [_t, $t, at, xt];
class dt extends at {
  attach() {
    super.attach(), this.attributes = new Sr(this.domNode);
  }
  delta() {
    return new q().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    const r = this.scroll.query(t, C.BLOCK_ATTRIBUTE);
    r != null && this.attributes.attribute(r, e);
  }
  formatAt(t, e, r, s) {
    this.format(r, s);
  }
  insertAt(t, e, r) {
    if (r != null) {
      super.insertAt(t, e, r);
      return;
    }
    const s = e.split(`
`), i = s.pop(), l = s.map((c) => {
      const h = this.scroll.create(Y.blotName);
      return h.insertAt(0, c), h;
    }), a = this.split(t);
    l.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
dt.scope = C.BLOCK_BLOT;
function So(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.descendants(et).reduce((e, r) => r.length() === 0 ? e : e.insert(r.value(), ht(r, {}, t)), new q()).insert(`
`, ht(n));
}
function ht(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return n == null || ("formats" in n && typeof n.formats == "function" && (t = {
    ...t,
    ...n.formats()
  }, e && delete t["code-token"]), n.parent == null || n.parent.statics.blotName === "scroll" || n.parent.statics.scope !== n.statics.scope) ? t : ht(n.parent, t, e);
}
const ut = class ut extends at {
  // Zero width no break space
  static value() {
  }
  constructor(t, e, r) {
    super(t, e), this.selection = r, this.textNode = document.createTextNode(ut.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t, e) {
    if (this.savedLength !== 0) {
      super.format(t, e);
      return;
    }
    let r = this, s = 0;
    for (; r != null && r.statics.scope !== C.BLOCK_BLOT; )
      s += r.offset(r.parent), r = r.parent;
    r != null && (this.savedLength = ut.CONTENTS.length, r.optimize(), r.formatAt(s, ut.CONTENTS.length, t, e), this.savedLength = 0);
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const t = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e = this.prev instanceof xt ? this.prev : null, r = e ? e.length() : 0, s = this.next instanceof xt ? this.next : null, i = s ? s.text : "", {
      textNode: l
    } = this, a = l.data.split(ut.CONTENTS).join("");
    l.data = ut.CONTENTS;
    let c;
    if (e)
      c = e, (a || s) && (e.insertAt(e.length(), a + i), s && s.remove());
    else if (s)
      c = s, s.insertAt(0, a);
    else {
      const h = document.createTextNode(a);
      c = this.scroll.create(h), this.parent.insertBefore(c, this);
    }
    if (this.remove(), t) {
      const h = (d, p) => e && d === e.domNode ? p : d === l ? r + p - 1 : s && d === s.domNode ? r + a.length + p : null, f = h(t.start.node, t.start.offset), m = h(t.end.node, t.end.offset);
      if (f !== null && m !== null)
        return {
          startNode: c.domNode,
          startOffset: f,
          endNode: c.domNode,
          endOffset: m
        };
    }
    return null;
  }
  update(t, e) {
    if (t.some((r) => r.type === "characterData" && r.target === this.textNode)) {
      const r = this.restore();
      r && (e.range = r);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(t) {
    super.optimize(t);
    let {
      parent: e
    } = this;
    for (; e; ) {
      if (e.domNode.tagName === "A") {
        this.savedLength = ut.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
};
_(ut, "blotName", "cursor"), _(ut, "className", "ql-cursor"), _(ut, "tagName", "span"), _(ut, "CONTENTS", "\uFEFF");
let Ve = ut;
var Oo = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (e = !1));
  function s(c, h, f) {
    this.fn = c, this.context = h, this.once = f || !1;
  }
  function i(c, h, f, m, d) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var p = new s(f, m || c, d), b = e ? e + h : h;
    return c._events[b] ? c._events[b].fn ? c._events[b] = [c._events[b], p] : c._events[b].push(p) : (c._events[b] = p, c._eventsCount++), c;
  }
  function l(c, h) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[h];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], f, m;
    if (this._eventsCount === 0) return h;
    for (m in f = this._events)
      t.call(f, m) && h.push(e ? m.slice(1) : m);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(f)) : h;
  }, a.prototype.listeners = function(h) {
    var f = e ? e + h : h, m = this._events[f];
    if (!m) return [];
    if (m.fn) return [m.fn];
    for (var d = 0, p = m.length, b = new Array(p); d < p; d++)
      b[d] = m[d].fn;
    return b;
  }, a.prototype.listenerCount = function(h) {
    var f = e ? e + h : h, m = this._events[f];
    return m ? m.fn ? 1 : m.length : 0;
  }, a.prototype.emit = function(h, f, m, d, p, b) {
    var v = e ? e + h : h;
    if (!this._events[v]) return !1;
    var y = this._events[v], E = arguments.length, w, T;
    if (y.fn) {
      switch (y.once && this.removeListener(h, y.fn, void 0, !0), E) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, f), !0;
        case 3:
          return y.fn.call(y.context, f, m), !0;
        case 4:
          return y.fn.call(y.context, f, m, d), !0;
        case 5:
          return y.fn.call(y.context, f, m, d, p), !0;
        case 6:
          return y.fn.call(y.context, f, m, d, p, b), !0;
      }
      for (T = 1, w = new Array(E - 1); T < E; T++)
        w[T - 1] = arguments[T];
      y.fn.apply(y.context, w);
    } else {
      var S = y.length, L;
      for (T = 0; T < S; T++)
        switch (y[T].once && this.removeListener(h, y[T].fn, void 0, !0), E) {
          case 1:
            y[T].fn.call(y[T].context);
            break;
          case 2:
            y[T].fn.call(y[T].context, f);
            break;
          case 3:
            y[T].fn.call(y[T].context, f, m);
            break;
          case 4:
            y[T].fn.call(y[T].context, f, m, d);
            break;
          default:
            if (!w) for (L = 1, w = new Array(E - 1); L < E; L++)
              w[L - 1] = arguments[L];
            y[T].fn.apply(y[T].context, w);
        }
    }
    return !0;
  }, a.prototype.on = function(h, f, m) {
    return i(this, h, f, m, !1);
  }, a.prototype.once = function(h, f, m) {
    return i(this, h, f, m, !0);
  }, a.prototype.removeListener = function(h, f, m, d) {
    var p = e ? e + h : h;
    if (!this._events[p]) return this;
    if (!f)
      return l(this, p), this;
    var b = this._events[p];
    if (b.fn)
      b.fn === f && (!d || b.once) && (!m || b.context === m) && l(this, p);
    else {
      for (var v = 0, y = [], E = b.length; v < E; v++)
        (b[v].fn !== f || d && !b[v].once || m && b[v].context !== m) && y.push(b[v]);
      y.length ? this._events[p] = y.length === 1 ? y[0] : y : l(this, p);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var f;
    return h ? (f = e ? e + h : h, this._events[f] && l(this, f)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, n.exports = a;
})(Oo);
var Xf = Oo.exports;
const Yf = /* @__PURE__ */ Hl(Xf), ri = /* @__PURE__ */ new WeakMap(), si = ["error", "warn", "log", "info"];
let ii = "warn";
function qo(n) {
  if (ii && si.indexOf(n) <= si.indexOf(ii)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      e[r - 1] = arguments[r];
    console[n](...e);
  }
}
function Xt(n) {
  return si.reduce((t, e) => (t[e] = qo.bind(console, e, n), t), {});
}
Xt.level = (n) => {
  ii = n;
};
qo.level = Xt.level;
const ks = Xt("quill:events"), Qf = ["selectionchange", "mousedown", "mouseup", "click"];
Qf.forEach((n) => {
  document.addEventListener(n, function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = ri.get(s);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class O extends Yf {
  constructor() {
    super(), this.domListeners = {}, this.on("error", ks.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return ks.log.call(ks, ...e), super.emit(...e);
  }
  handleDOM(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
      r[s - 1] = arguments[s];
    (this.domListeners[t.type] || []).forEach((i) => {
      let {
        node: l,
        handler: a
      } = i;
      (t.target === l || l.contains(t.target)) && a(t, ...r);
    });
  }
  listenDOM(t, e, r) {
    this.domListeners[t] || (this.domListeners[t] = []), this.domListeners[t].push({
      node: e,
      handler: r
    });
  }
}
_(O, "events", {
  EDITOR_CHANGE: "editor-change",
  SCROLL_BEFORE_UPDATE: "scroll-before-update",
  SCROLL_BLOT_MOUNT: "scroll-blot-mount",
  SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
  SCROLL_OPTIMIZE: "scroll-optimize",
  SCROLL_UPDATE: "scroll-update",
  SCROLL_EMBED_UPDATE: "scroll-embed-update",
  SELECTION_CHANGE: "selection-change",
  TEXT_CHANGE: "text-change",
  COMPOSITION_BEFORE_START: "composition-before-start",
  COMPOSITION_START: "composition-start",
  COMPOSITION_BEFORE_END: "composition-before-end",
  COMPOSITION_END: "composition-end"
}), _(O, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const Bs = Xt("quill:selection");
class be {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class Jf {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new be(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, O.sources.USER), 1);
    }), this.emitter.on(O.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const r = this.getNativeRange();
      r != null && r.start.node !== this.cursor.textNode && this.emitter.once(O.events.SCROLL_UPDATE, (s, i) => {
        try {
          this.root.contains(r.start.node) && this.root.contains(r.end.node) && this.setNativeRange(r.start.node, r.start.offset, r.end.node, r.end.offset);
          const l = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(l ? O.sources.SILENT : s);
        } catch {
        }
      });
    }), this.emitter.on(O.events.SCROLL_OPTIMIZE, (r, s) => {
      if (s.range) {
        const {
          startNode: i,
          startOffset: l,
          endNode: a,
          endOffset: c
        } = s.range;
        this.setNativeRange(i, l, a, c), this.update(O.sources.SILENT);
      }
    }), this.update(O.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(O.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(O.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const t = this.cursor.restore();
        if (!t) return;
        setTimeout(() => {
          this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(O.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    const r = this.getNativeRange();
    if (!(r == null || !r.native.collapsed || this.scroll.query(t, C.BLOCK))) {
      if (r.start.node !== this.cursor.textNode) {
        const s = this.scroll.find(r.start.node, !1);
        if (s == null) return;
        if (s instanceof et) {
          const i = s.split(r.start.offset);
          s.parent.insertBefore(this.cursor, i);
        } else
          s.insertBefore(this.cursor, r.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const r = this.scroll.length();
    t = Math.min(t, r - 1), e = Math.min(t + e, r - 1) - t;
    let s, [i, l] = this.scroll.leaf(t);
    if (i == null) return null;
    if (e > 0 && l === i.length()) {
      const [f] = this.scroll.leaf(t + 1);
      if (f) {
        const [m] = this.scroll.line(t), [d] = this.scroll.line(t + 1);
        m === d && (i = f, l = 0);
      }
    }
    [s, l] = i.position(l, !0);
    const a = document.createRange();
    if (e > 0)
      return a.setStart(s, l), [i, l] = this.scroll.leaf(t + e), i == null ? null : ([s, l] = i.position(l, !0), a.setEnd(s, l), a.getBoundingClientRect());
    let c = "left", h;
    if (s instanceof Text) {
      if (!s.data.length)
        return null;
      l < s.data.length ? (a.setStart(s, l), a.setEnd(s, l + 1)) : (a.setStart(s, l - 1), a.setEnd(s, l), c = "right"), h = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element)) return null;
      h = i.domNode.getBoundingClientRect(), l > 0 && (c = "right");
    }
    return {
      bottom: h.top + h.height,
      height: h.height,
      left: h[c],
      right: h[c],
      top: h.top,
      width: 0
    };
  }
  getNativeRange() {
    const t = document.getSelection();
    if (t == null || t.rangeCount <= 0) return null;
    const e = t.getRangeAt(0);
    if (e == null) return null;
    const r = this.normalizeNative(e);
    return Bs.info("getNativeRange", r), r;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Ms(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const r = e.map((l) => {
      const [a, c] = l, h = this.scroll.find(a, !0), f = h.offset(this.scroll);
      return c === 0 ? f : h instanceof et ? f + h.index(a, c) : f + h.length();
    }), s = Math.min(Math.max(...r), this.scroll.length() - 1), i = Math.min(s, ...r);
    return new be(i, s - i);
  }
  normalizeNative(t) {
    if (!Ms(this.root, t.startContainer) || !t.collapsed && !Ms(this.root, t.endContainer))
      return null;
    const e = {
      start: {
        node: t.startContainer,
        offset: t.startOffset
      },
      end: {
        node: t.endContainer,
        offset: t.endOffset
      },
      native: t
    };
    return [e.start, e.end].forEach((r) => {
      let {
        node: s,
        offset: i
      } = r;
      for (; !(s instanceof Text) && s.childNodes.length > 0; )
        if (s.childNodes.length > i)
          s = s.childNodes[i], i = 0;
        else if (s.childNodes.length === i)
          s = s.lastChild, s instanceof Text ? i = s.data.length : s.childNodes.length > 0 ? i = s.childNodes.length : i = s.childNodes.length + 1;
        else
          break;
      r.node = s, r.offset = i;
    }), e;
  }
  rangeToNative(t) {
    const e = this.scroll.length(), r = (s, i) => {
      s = Math.min(e - 1, s);
      const [l, a] = this.scroll.leaf(s);
      return l ? l.position(a, i) : [null, -1];
    };
    return [...r(t.index, !1), ...r(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (Bs.info("setNativeRange", t, e, r, s), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
    r.parentNode == null))
      return;
    const l = document.getSelection();
    if (l != null)
      if (t != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: a
        } = this.getNativeRange() || {};
        if (a == null || i || t !== a.startContainer || e !== a.startOffset || r !== a.endContainer || s !== a.endOffset) {
          t instanceof Element && t.tagName === "BR" && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), r instanceof Element && r.tagName === "BR" && (s = Array.from(r.parentNode.childNodes).indexOf(r), r = r.parentNode);
          const c = document.createRange();
          c.setStart(t, e), c.setEnd(r, s), l.removeAllRanges(), l.addRange(c);
        }
      } else
        l.removeAllRanges(), this.root.blur();
  }
  setRange(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O.sources.API;
    if (typeof e == "string" && (r = e, e = !1), Bs.info("setRange", t), t != null) {
      const s = this.rangeToNative(t);
      this.setNativeRange(...s, e);
    } else
      this.setNativeRange(null);
    this.update(r);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O.sources.USER;
    const e = this.lastRange, [r, s] = this.getRange();
    if (this.lastRange = r, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !wi(e, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const l = this.cursor.restore();
        l && this.setNativeRange(l.startNode, l.startOffset, l.endNode, l.endOffset);
      }
      const i = [O.events.SELECTION_CHANGE, Fe(this.lastRange), Fe(e), t];
      this.emitter.emit(O.events.EDITOR_CHANGE, ...i), t !== O.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function Ms(n, t) {
  try {
    t.parentNode;
  } catch {
    return !1;
  }
  return n.contains(t);
}
const td = /^[ -~]*$/;
class ed {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const r = Nl(t), s = new q();
    return rd(r.ops.slice()).reduce((l, a) => {
      const c = gt.Op.length(a);
      let h = a.attributes || {}, f = !1, m = !1;
      if (a.insert != null) {
        if (s.retain(c), typeof a.insert == "string") {
          const b = a.insert;
          m = !b.endsWith(`
`) && (e <= l || !!this.scroll.descendant(dt, l)[0]), this.scroll.insertAt(l, b);
          const [v, y] = this.scroll.line(l);
          let E = se({}, ht(v));
          if (v instanceof Y) {
            const [w] = v.descendant(et, y);
            w && (E = se(E, ht(w)));
          }
          h = gt.AttributeMap.diff(E, h) || {};
        } else if (typeof a.insert == "object") {
          const b = Object.keys(a.insert)[0];
          if (b == null) return l;
          const v = this.scroll.query(b, C.INLINE) != null;
          if (v)
            (e <= l || this.scroll.descendant(dt, l)[0]) && (m = !0);
          else if (l > 0) {
            const [y, E] = this.scroll.descendant(et, l - 1);
            y instanceof xt ? y.value()[E] !== `
` && (f = !0) : y instanceof at && y.statics.scope === C.INLINE_BLOT && (f = !0);
          }
          if (this.scroll.insertAt(l, b, a.insert[b]), v) {
            const [y] = this.scroll.descendant(et, l);
            if (y) {
              const E = se({}, ht(y));
              h = gt.AttributeMap.diff(E, h) || {};
            }
          }
        }
        e += c;
      } else if (s.push(a), a.retain !== null && typeof a.retain == "object") {
        const b = Object.keys(a.retain)[0];
        if (b == null) return l;
        this.scroll.updateEmbedAt(l, b, a.retain[b]);
      }
      Object.keys(h).forEach((b) => {
        this.scroll.formatAt(l, c, b, h[b]);
      });
      const d = f ? 1 : 0, p = m ? 1 : 0;
      return e += d + p, s.retain(d), s.delete(p), l + c + d + p;
    }, 0), s.reduce((l, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(l, a.delete), l) : l + gt.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new q().retain(t).delete(e));
  }
  formatLine(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(r).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((l) => {
        l.format(i, r[i]);
      });
    }), this.scroll.optimize();
    const s = new q().retain(t).retain(e, Fe(r));
    return this.update(s);
  }
  formatText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r).forEach((i) => {
      this.scroll.formatAt(t, e, i, r[i]);
    });
    const s = new q().retain(t).retain(e, Fe(r));
    return this.update(s);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new q());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = [], s = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [c] = a;
      c instanceof Y ? r.push(c) : c instanceof et && s.push(c);
    }) : (r = this.scroll.lines(t, e), s = this.scroll.descendants(et, t, e));
    const [i, l] = [r, s].map((a) => {
      const c = a.shift();
      if (c == null) return {};
      let h = ht(c);
      for (; Object.keys(h).length > 0; ) {
        const f = a.shift();
        if (f == null) return h;
        h = nd(ht(f), h);
      }
      return h;
    });
    return {
      ...i,
      ...l
    };
  }
  getHTML(t, e) {
    const [r, s] = this.scroll.line(t);
    if (r) {
      const i = r.length();
      return r.length() >= s + e && !(s === 0 && e === i) ? Sn(r, s, e, !0) : Sn(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((r) => typeof r.insert == "string").map((r) => r.insert).join("");
  }
  insertContents(t, e) {
    const r = Nl(e), s = new q().retain(t).concat(r);
    return this.scroll.insertContents(t, r), this.update(s);
  }
  insertEmbed(t, e, r) {
    return this.scroll.insertAt(t, e, r), this.update(new q().retain(t).insert({
      [e]: r
    }));
  }
  insertText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(t, e), Object.keys(r).forEach((s) => {
      this.scroll.formatAt(t, e.length, s, r[s]);
    }), this.update(new q().retain(t).insert(e, Fe(r)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return !0;
    if (this.scroll.children.length > 1) return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== Y.blotName) return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof _t;
  }
  removeFormat(t, e) {
    const r = this.getText(t, e), [s, i] = this.scroll.line(t + e);
    let l = 0, a = new q();
    s != null && (l = s.length() - i, a = s.delta().slice(i, i + l - 1).insert(`
`));
    const h = this.getContents(t, e + l).diff(new q().insert(r).concat(a)), f = new q().retain(t).concat(h);
    return this.applyDelta(f);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(td) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), l = ht(i), a = i.offset(this.scroll), c = e[0].oldValue.replace(Ve.CONTENTS, ""), h = new q().insert(c), f = new q().insert(i.value()), m = r && {
        oldRange: wl(r.oldRange, -a),
        newRange: wl(r.newRange, -a)
      };
      t = new q().retain(a).concat(h.diff(f, m)).reduce((p, b) => b.insert ? p.insert(b.insert, l) : p.push(b), new q()), this.delta = s.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !wi(s.compose(t), this.delta)) && (t = s.diff(this.delta, r));
    return t;
  }
}
function Pe(n, t, e) {
  if (n.length === 0) {
    const [p] = Ds(e.pop());
    return t <= 0 ? `</li></${p}>` : `</li></${p}>${Pe([], t - 1, e)}`;
  }
  const [{
    child: r,
    offset: s,
    length: i,
    indent: l,
    type: a
  }, ...c] = n, [h, f] = Ds(a);
  if (l > t)
    return e.push(a), l === t + 1 ? `<${h}><li${f}>${Sn(r, s, i)}${Pe(c, l, e)}` : `<${h}><li>${Pe(n, t + 1, e)}`;
  const m = e[e.length - 1];
  if (l === t && a === m)
    return `</li><li${f}>${Sn(r, s, i)}${Pe(c, l, e)}`;
  const [d] = Ds(e.pop());
  return `</li></${d}>${Pe(n, t - 1, e)}`;
}
function Sn(n, t, e) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in n && typeof n.html == "function")
    return n.html(t, e);
  if (n instanceof xt)
    return Rr(n.value().slice(t, t + e));
  if (n instanceof Tt) {
    if (n.statics.blotName === "list-container") {
      const h = [];
      return n.children.forEachAt(t, e, (f, m, d) => {
        const p = "formats" in f && typeof f.formats == "function" ? f.formats() : {};
        h.push({
          child: f,
          offset: m,
          length: d,
          indent: p.indent || 0,
          type: p.list
        });
      }), Pe(h, -1, []);
    }
    const s = [];
    if (n.children.forEachAt(t, e, (h, f, m) => {
      s.push(Sn(h, f, m));
    }), r || n.statics.blotName === "list")
      return s.join("");
    const {
      outerHTML: i,
      innerHTML: l
    } = n.domNode, [a, c] = i.split(`>${l}<`);
    return a === "<table" ? `<table style="border: 1px solid #000;">${s.join("")}<${c}` : `${a}>${s.join("")}<${c}`;
  }
  return n.domNode instanceof Element ? n.domNode.outerHTML : "";
}
function nd(n, t) {
  return Object.keys(t).reduce((e, r) => {
    if (n[r] == null) return e;
    const s = t[r];
    return s === n[r] ? e[r] = s : Array.isArray(s) ? s.indexOf(n[r]) < 0 ? e[r] = s.concat([n[r]]) : e[r] = s : e[r] = [s, n[r]], e;
  }, {});
}
function Ds(n) {
  const t = n === "ordered" ? "ol" : "ul";
  switch (n) {
    case "checked":
      return [t, ' data-list="checked"'];
    case "unchecked":
      return [t, ' data-list="unchecked"'];
    default:
      return [t, ""];
  }
}
function Nl(n) {
  return n.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const r = e.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return t.insert(r, e.attributes);
    }
    return t.push(e);
  }, new q());
}
function wl(n, t) {
  let {
    index: e,
    length: r
  } = n;
  return new be(e + t, r);
}
function rd(n) {
  const t = [];
  return n.forEach((e) => {
    typeof e.insert == "string" ? e.insert.split(`
`).forEach((s, i) => {
      i && t.push({
        insert: `
`,
        attributes: e.attributes
      }), s && t.push({
        insert: s,
        attributes: e.attributes
      });
    }) : t.push(e);
  }), t;
}
class St {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}
_(St, "DEFAULTS", {});
const ur = "\uFEFF";
class qi extends at {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r) => {
      this.contentNode.appendChild(r);
    }), this.leftGuard = document.createTextNode(ur), this.rightGuard = document.createTextNode(ur), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, r;
    const s = t.data.split(ur).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof xt) {
        const i = this.prev.length();
        this.prev.insertAt(i, s), e = {
          startNode: this.prev.domNode,
          startOffset: i + s.length
        };
      } else
        r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this), e = {
          startNode: r,
          startOffset: s.length
        };
    else t === this.rightGuard && (this.next instanceof xt ? (this.next.insertAt(0, s), e = {
      startNode: this.next.domNode,
      startOffset: s.length
    }) : (r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this.next), e = {
      startNode: r,
      startOffset: s.length
    }));
    return t.data = ur, e;
  }
  update(t, e) {
    t.forEach((r) => {
      if (r.type === "characterData" && (r.target === this.leftGuard || r.target === this.rightGuard)) {
        const s = this.restore(r.target);
        s && (e.range = s);
      }
    });
  }
}
class sd {
  constructor(t, e) {
    _(this, "isComposing", !1);
    this.scroll = t, this.emitter = e, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t) => {
      this.isComposing || this.handleCompositionStart(t);
    }), this.scroll.domNode.addEventListener("compositionend", (t) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t);
      });
    });
  }
  handleCompositionStart(t) {
    const e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
    e && !(e instanceof qi) && (this.emitter.emit(O.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(O.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(O.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(O.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const An = class An {
  constructor(t, e) {
    _(this, "modules", {});
    this.quill = t, this.options = e;
  }
  init() {
    Object.keys(this.options.modules).forEach((t) => {
      this.modules[t] == null && this.addModule(t);
    });
  }
  addModule(t) {
    const e = this.quill.constructor.import(`modules/${t}`);
    return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
  }
};
_(An, "DEFAULTS", {
  modules: {}
}), _(An, "themes", {
  default: An
});
let We = An;
const id = (n) => n.parentElement || n.getRootNode().host || null, ld = (n) => {
  const t = n.getBoundingClientRect(), e = "offsetWidth" in n && Math.abs(t.width) / n.offsetWidth || 1, r = "offsetHeight" in n && Math.abs(t.height) / n.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + n.clientWidth * e,
    bottom: t.top + n.clientHeight * r,
    left: t.left
  };
}, hr = (n) => {
  const t = parseInt(n, 10);
  return Number.isNaN(t) ? 0 : t;
}, Tl = (n, t, e, r, s, i) => n < e && t > r ? 0 : n < e ? -(e - n + s) : t > r ? t - n > r - e ? n + s - e : t - r + i : 0, od = (n, t) => {
  var i, l, a;
  const e = n.ownerDocument;
  let r = t, s = n;
  for (; s; ) {
    const c = s === e.body, h = c ? {
      top: 0,
      right: ((i = window.visualViewport) == null ? void 0 : i.width) ?? e.documentElement.clientWidth,
      bottom: ((l = window.visualViewport) == null ? void 0 : l.height) ?? e.documentElement.clientHeight,
      left: 0
    } : ld(s), f = getComputedStyle(s), m = Tl(r.left, r.right, h.left, h.right, hr(f.scrollPaddingLeft), hr(f.scrollPaddingRight)), d = Tl(r.top, r.bottom, h.top, h.bottom, hr(f.scrollPaddingTop), hr(f.scrollPaddingBottom));
    if (m || d)
      if (c)
        (a = e.defaultView) == null || a.scrollBy(m, d);
      else {
        const {
          scrollLeft: p,
          scrollTop: b
        } = s;
        d && (s.scrollTop += d), m && (s.scrollLeft += m);
        const v = s.scrollLeft - p, y = s.scrollTop - b;
        r = {
          left: r.left - v,
          top: r.top - y,
          right: r.right - v,
          bottom: r.bottom - y
        };
      }
    s = c || f.position === "fixed" ? null : id(s);
  }
}, ad = 100, cd = ["block", "break", "cursor", "inline", "scroll", "text"], ud = (n, t, e) => {
  const r = new Ke();
  return cd.forEach((s) => {
    const i = t.query(s);
    i && r.register(i);
  }), n.forEach((s) => {
    let i = t.query(s);
    i || e.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);
    let l = 0;
    for (; i; )
      if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, l += 1, l > ad) {
        e.error(`Cycle detected in registering blot requiredContainer: "${s}"`);
        break;
      }
  }), r;
}, ze = Xt("quill"), fr = new Ke();
Tt.uiClass = "ql-ui";
const At = class At {
  static debug(t) {
    t === !0 && (t = "log"), Xt.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return ri.get(t) || fr.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && ze.error(`Cannot import ${t}. Are you sure it was registered?`), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), r = "attrName" in t ? t.attrName : t.blotName;
      typeof r == "string" ? this.register(`formats/${r}`, t, e) : Object.keys(t).forEach((s) => {
        this.register(s, t[s], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], r = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !r && ze.warn(`Overwriting ${t} with`, e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && fr.register(e), typeof e.register == "function" && e.register(fr);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = hd(t, e), this.container = this.options.container, this.container == null) {
      ze.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && At.debug(this.options.debug);
    const r = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", ri.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new O();
    const s = xi.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new ed(this.scroll), this.selection = new Jf(this.scroll, this.emitter), this.composition = new sd(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(O.events.EDITOR_CHANGE, (l) => {
      l === O.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(O.events.SCROLL_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), f = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      Et.call(this, () => this.editor.update(null, a, f), l);
    }), this.emitter.on(O.events.SCROLL_EMBED_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), f = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      Et.call(this, () => {
        const m = new q().retain(l.offset(this)).retain({
          [l.statics.blotName]: a
        });
        return this.editor.update(m, [], f);
      }, At.sources.USER);
    }), r) {
      const l = this.clipboard.convert({
        html: `${r}<p><br></p>`,
        text: `
`
      });
      this.setContents(l);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t == "string") {
      const r = t;
      t = document.createElement("div"), t.classList.add(r);
    }
    return this.container.insertBefore(t, e), t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, r) {
    return [t, e, , r] = zt(t, e, r), Et.call(this, () => this.editor.deleteText(t, e), r, t, -1 * e);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    const e = t();
    return this.allowReadOnlyEdits = !1, e;
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O.sources.API;
    return Et.call(this, () => {
      const s = this.getSelection(!0);
      let i = new q();
      if (s == null) return i;
      if (this.scroll.query(t, C.BLOCK))
        i = this.editor.formatLine(s.index, s.length, {
          [t]: e
        });
      else {
        if (s.length === 0)
          return this.selection.format(t, e), i;
        i = this.editor.formatText(s.index, s.length, {
          [t]: e
        });
      }
      return this.setSelection(s, O.sources.SILENT), i;
    }, r);
  }
  formatLine(t, e, r, s, i) {
    let l;
    return [t, e, l, i] = zt(
      t,
      e,
      // @ts-expect-error
      r,
      s,
      i
    ), Et.call(this, () => this.editor.formatLine(t, e, l), i, t, 0);
  }
  formatText(t, e, r, s, i) {
    let l;
    return [t, e, l, i] = zt(
      // @ts-expect-error
      t,
      e,
      r,
      s,
      i
    ), Et.call(this, () => this.editor.formatText(t, e, l), i, t, 0);
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = null;
    if (typeof t == "number" ? r = this.selection.getBounds(t, e) : r = this.selection.getBounds(t.index, t.length), !r) return null;
    const s = this.container.getBoundingClientRect();
    return {
      bottom: r.bottom - s.top,
      height: r.height,
      left: r.left - s.left,
      right: r.right - s.left,
      top: r.top - s.top,
      width: r.width
    };
  }
  getContents() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t;
    return [t, e] = zt(t, e), this.editor.getContents(t, e);
  }
  getFormat() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t == "number" ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t != "number" ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = zt(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = zt(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : At.sources.API;
    return Et.call(this, () => this.editor.insertEmbed(t, e, r), s, t);
  }
  insertText(t, e, r, s, i) {
    let l;
    return [t, , l, i] = zt(t, 0, r, s, i), Et.call(this, () => this.editor.insertText(t, e, l), i, t, e.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t, e, r) {
    return [t, e, , r] = zt(t, e, r), Et.call(this, () => this.editor.removeFormat(t, e), r, t);
  }
  scrollRectIntoView(t) {
    od(this.root, t);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const t = this.selection.lastRange, e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O.sources.API;
    return Et.call(this, () => {
      t = new q(t);
      const r = this.getLength(), s = this.editor.deleteText(0, r), i = this.editor.insertContents(0, t), l = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(l);
    }, e);
  }
  setSelection(t, e, r) {
    t == null ? this.selection.setRange(null, e || At.sources.API) : ([t, e, , r] = zt(t, e, r), this.selection.setRange(new be(Math.max(0, t), e), r), r !== O.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O.sources.API;
    const r = new q().insert(t);
    return this.setContents(r, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O.sources.API;
    return Et.call(this, () => (t = new q(t), this.editor.applyDelta(t)), e, !0);
  }
};
_(At, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: fr,
  theme: "default"
}), _(At, "events", O.events), _(At, "sources", O.sources), _(At, "version", "2.0.2"), _(At, "imports", {
  delta: q,
  parchment: Mf,
  "core/module": St,
  "core/theme": We
});
let N = At;
function xl(n) {
  return typeof n == "string" ? document.querySelector(n) : n;
}
function $s(n) {
  return Object.entries(n ?? {}).reduce((t, e) => {
    let [r, s] = e;
    return {
      ...t,
      [r]: s === !0 ? {} : s
    };
  }, {});
}
function Ll(n) {
  return Object.fromEntries(Object.entries(n).filter((t) => t[1] !== void 0));
}
function hd(n, t) {
  const e = xl(n);
  if (!e)
    throw new Error("Invalid Quill container");
  const s = !t.theme || t.theme === N.DEFAULTS.theme ? We : N.import(`themes/${t.theme}`);
  if (!s)
    throw new Error(`Invalid theme ${t.theme}. Did you register it?`);
  const {
    modules: i,
    ...l
  } = N.DEFAULTS, {
    modules: a,
    ...c
  } = s.DEFAULTS;
  let h = $s(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = {
    ...h,
    toolbar: {
      container: h.toolbar
    }
  });
  const f = se({}, $s(i), $s(a), h), m = {
    ...l,
    ...Ll(c),
    ...Ll(t)
  };
  let d = t.registry;
  return d ? t.formats && ze.warn('Ignoring "formats" option because "registry" is specified') : d = t.formats ? ud(t.formats, m.registry, ze) : m.registry, {
    ...m,
    registry: d,
    container: e,
    theme: s,
    modules: Object.entries(f).reduce((p, b) => {
      let [v, y] = b;
      if (!y) return p;
      const E = N.import(`modules/${v}`);
      return E == null ? (ze.error(`Cannot load ${v} module. Are you sure you registered it?`), p) : {
        ...p,
        // @ts-expect-error
        [v]: se({}, E.DEFAULTS || {}, y)
      };
    }, {}),
    bounds: xl(m.bounds)
  };
}
function Et(n, t, e, r) {
  if (!this.isEnabled() && t === O.sources.USER && !this.allowReadOnlyEdits)
    return new q();
  let s = e == null ? null : this.getSelection();
  const i = this.editor.delta, l = n();
  if (s != null && (e === !0 && (e = s.index), r == null ? s = _l(s, l, t) : r !== 0 && (s = _l(s, e, r, t)), this.setSelection(s, O.sources.SILENT)), l.length() > 0) {
    const a = [O.events.TEXT_CHANGE, l, i, t];
    this.emitter.emit(O.events.EDITOR_CHANGE, ...a), t !== O.sources.SILENT && this.emitter.emit(...a);
  }
  return l;
}
function zt(n, t, e, r, s) {
  let i = {};
  return typeof n.index == "number" && typeof n.length == "number" ? typeof t != "number" ? (s = r, r = e, e = t, t = n.length, n = n.index) : (t = n.length, n = n.index) : typeof t != "number" && (s = r, r = e, e = t, t = 0), typeof e == "object" ? (i = e, s = r) : typeof e == "string" && (r != null ? i[e] = r : s = e), s = s || O.sources.API, [n, t, i, s];
}
function _l(n, t, e, r) {
  const s = typeof e == "number" ? e : 0;
  if (n == null) return null;
  let i, l;
  return t && typeof t.transformPosition == "function" ? [i, l] = [n.index, n.index + n.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, r !== O.sources.USER)
  )) : [i, l] = [n.index, n.index + n.length].map((a) => a < t || a === t && r === O.sources.USER ? a : s >= 0 ? a + s : Math.max(t, a + s)), new be(i, l - i);
}
class Ae extends Or {
}
function Sl(n) {
  return n instanceof Y || n instanceof dt;
}
function Ol(n) {
  return typeof n.updateContent == "function";
}
class Ue extends xi {
  constructor(t, e, r) {
    let {
      emitter: s
    } = r;
    super(t, e), this.emitter = s, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    const t = this.batch;
    this.batch = !1, this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(O.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(O.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(O.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    const [r, s] = this.line(t), [i] = this.line(t + e);
    if (super.deleteAt(t, e), i != null && r !== i && s > 0) {
      if (r instanceof dt || i instanceof dt) {
        this.optimize();
        return;
      }
      const l = i.children.head instanceof _t ? null : i.children.head;
      r.moveChildren(i, l), r.remove();
    }
    this.optimize();
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.optimize();
  }
  insertAt(t, e, r) {
    if (t >= this.length())
      if (r == null || this.scroll.query(e, C.BLOCK) == null) {
        const s = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s), r == null && e.endsWith(`
`) ? s.insertAt(0, e.slice(0, -1), r) : s.insertAt(0, e, r);
      } else {
        const s = this.scroll.create(e, r);
        this.appendChild(s);
      }
    else
      super.insertAt(t, e, r);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === C.INLINE_BLOT) {
      const r = this.scroll.create(this.statics.defaultChild.blotName);
      r.appendChild(t), super.insertBefore(r, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const r = this.deltaToRenderBlocks(e.concat(new q().insert(`
`))), s = r.pop();
    if (s == null) return;
    this.batchStart();
    const i = r.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(dt, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new q().insert({
        [i.key]: i.value
      });
      js(this, t, h);
      const f = i.type === "block" ? 1 : 0, m = t + h.length() + f;
      c && this.insertAt(m - 1, `
`);
      const d = ht(this.line(t)[0]), p = gt.AttributeMap.diff(d, i.attributes) || {};
      Object.keys(p).forEach((b) => {
        this.formatAt(m - 1, 1, b, p[b]);
      }), t = m;
    }
    let [l, a] = this.children.find(t);
    if (r.length && (l && (l = l.split(a), a = 0), r.forEach((c) => {
      if (c.type === "block") {
        const h = this.createBlock(c.attributes, l || void 0);
        js(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, l || void 0), Object.keys(c.attributes).forEach((f) => {
          h.format(f, c.attributes[f]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const c = l ? l.offset(l.scroll) + a : this.length();
      js(this, c, s.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t) {
    const e = this.path(t).pop();
    if (!e)
      return [null, -1];
    const [r, s] = e;
    return r instanceof et ? [r, s] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(Sl, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r = (s, i, l) => {
      let a = [], c = l;
      return s.children.forEachAt(i, l, (h, f, m) => {
        Sl(h) ? a.push(h) : h instanceof Or && (a = a.concat(r(h, f, c))), c -= m;
      }), a;
    };
    return r(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t, e), t.length > 0 && this.emitter.emit(O.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {
  }
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = O.sources.USER;
    typeof t == "string" && (e = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((r) => {
      let {
        target: s
      } = r;
      const i = this.find(s, !0);
      return i && !Ol(i);
    }), t.length > 0 && this.emitter.emit(O.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(O.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, r) {
    const [s] = this.descendant((i) => i instanceof dt, t);
    s && s.statics.blotName === e && Ol(s) && s.updateContent(r);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let r = new q();
    return t.forEach((s) => {
      const i = s == null ? void 0 : s.insert;
      if (i)
        if (typeof i == "string") {
          const l = i.split(`
`);
          l.slice(0, -1).forEach((c) => {
            r.insert(c, s.attributes), e.push({
              type: "block",
              delta: r,
              attributes: s.attributes ?? {}
            }), r = new q();
          });
          const a = l[l.length - 1];
          a && r.insert(a, s.attributes);
        } else {
          const l = Object.keys(i)[0];
          if (!l) return;
          this.query(l, C.INLINE) ? r.push(s) : (r.length() && e.push({
            type: "block",
            delta: r,
            attributes: {}
          }), r = new q(), e.push({
            type: "blockEmbed",
            key: l,
            value: i[l],
            attributes: s.attributes ?? {}
          }));
        }
    }), r.length() && e.push({
      type: "block",
      delta: r,
      attributes: {}
    }), e;
  }
  createBlock(t, e) {
    let r;
    const s = {};
    Object.entries(t).forEach((a) => {
      let [c, h] = a;
      this.query(c, C.BLOCK & C.BLOT) != null ? r = c : s[c] = h;
    });
    const i = this.create(r || this.statics.defaultChild.blotName, r ? t[r] : void 0);
    this.insertBefore(i, e || void 0);
    const l = i.length();
    return Object.entries(s).forEach((a) => {
      let [c, h] = a;
      i.formatAt(0, l, c, h);
    }), i;
  }
}
_(Ue, "blotName", "scroll"), _(Ue, "className", "ql-editor"), _(Ue, "tagName", "DIV"), _(Ue, "defaultChild", Y), _(Ue, "allowedChildren", [Y, dt, Ae]);
function js(n, t, e) {
  e.reduce((r, s) => {
    const i = gt.Op.length(s);
    let l = s.attributes || {};
    if (s.insert != null) {
      if (typeof s.insert == "string") {
        const a = s.insert;
        n.insertAt(r, a);
        const [c] = n.descendant(et, r), h = ht(c);
        l = gt.AttributeMap.diff(h, l) || {};
      } else if (typeof s.insert == "object") {
        const a = Object.keys(s.insert)[0];
        if (a == null) return r;
        if (n.insertAt(r, a, s.insert[a]), n.scroll.query(a, C.INLINE) != null) {
          const [h] = n.descendant(et, r), f = ht(h);
          l = gt.AttributeMap.diff(f, l) || {};
        }
      }
    }
    return Object.keys(l).forEach((a) => {
      n.formatAt(r, i, a, l[a]);
    }), r + i;
  }, t);
}
const Ci = {
  scope: C.BLOCK,
  whitelist: ["right", "center", "justify"]
}, fd = new Dt("align", "align", Ci), Co = new Lt("align", "ql-align", Ci), Io = new le("align", "text-align", Ci);
class Ro extends le {
  value(t) {
    let e = super.value(t);
    return e.startsWith("rgb(") ? (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : e;
  }
}
const dd = new Lt("color", "ql-color", {
  scope: C.INLINE
}), Ii = new Ro("color", "color", {
  scope: C.INLINE
}), gd = new Lt("background", "ql-bg", {
  scope: C.INLINE
}), Ri = new Ro("background", "background-color", {
  scope: C.INLINE
});
class Ne extends Ae {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((r) => r.length() <= 1 ? "" : r.domNode.innerText).join(`
`).slice(t, t + e);
  }
  html(t, e) {
    return `<pre>
${Rr(this.code(t, e))}
</pre>`;
  }
}
class nt extends Y {
  static register() {
    N.register(Ne);
  }
}
_(nt, "TAB", "  ");
class ki extends $t {
}
ki.blotName = "code";
ki.tagName = "CODE";
nt.blotName = "code-block";
nt.className = "ql-code-block";
nt.tagName = "DIV";
Ne.blotName = "code-block-container";
Ne.className = "ql-code-block-container";
Ne.tagName = "DIV";
Ne.allowedChildren = [nt];
nt.allowedChildren = [xt, _t, Ve];
nt.requiredContainer = Ne;
const Bi = {
  scope: C.BLOCK,
  whitelist: ["rtl"]
}, ko = new Dt("direction", "dir", Bi), Bo = new Lt("direction", "ql-direction", Bi), Mo = new le("direction", "direction", Bi), Do = {
  scope: C.INLINE,
  whitelist: ["serif", "monospace"]
}, $o = new Lt("font", "ql-font", Do);
class pd extends le {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const jo = new pd("font", "font-family", Do), Po = new Lt("size", "ql-size", {
  scope: C.INLINE,
  whitelist: ["small", "large", "huge"]
}), Uo = new le("size", "font-size", {
  scope: C.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), md = Xt("quill:keyboard"), bd = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class kr extends St {
  static match(t, e) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((r) => !!e[r] !== t[r] && e[r] !== null) ? !1 : e.key === t.key || e.key === t.which;
  }
  constructor(t, e) {
    super(t, e), this.bindings = {}, Object.keys(this.options.bindings).forEach((r) => {
      this.options.bindings[r] && this.addBinding(this.options.bindings[r]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = vd(t);
    if (s == null) {
      md.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    typeof e == "function" && (e = {
      handler: e
    }), typeof r == "function" && (r = {
      handler: r
    }), (Array.isArray(s.key) ? s.key : [s.key]).forEach((l) => {
      const a = {
        ...s,
        key: l,
        ...e,
        ...r
      };
      this.bindings[a.key] = this.bindings[a.key] || [], this.bindings[a.key].push(a);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t) => {
      if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace")) return;
      const s = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((E) => kr.match(t, E));
      if (s.length === 0) return;
      const i = N.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll) return;
      const l = this.quill.getSelection();
      if (l == null || !this.quill.hasFocus()) return;
      const [a, c] = this.quill.getLine(l.index), [h, f] = this.quill.getLeaf(l.index), [m, d] = l.length === 0 ? [h, f] : this.quill.getLeaf(l.index + l.length), p = h instanceof Nr ? h.value().slice(0, f) : "", b = m instanceof Nr ? m.value().slice(d) : "", v = {
        collapsed: l.length === 0,
        // @ts-expect-error Fix me later
        empty: l.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(l),
        line: a,
        offset: c,
        prefix: p,
        suffix: b,
        event: t
      };
      s.some((E) => {
        if (E.collapsed != null && E.collapsed !== v.collapsed || E.empty != null && E.empty !== v.empty || E.offset != null && E.offset !== v.offset)
          return !1;
        if (Array.isArray(E.format)) {
          if (E.format.every((w) => v.format[w] == null))
            return !1;
        } else if (typeof E.format == "object" && !Object.keys(E.format).every((w) => E.format[w] === !0 ? v.format[w] != null : E.format[w] === !1 ? v.format[w] == null : wi(E.format[w], v.format[w])))
          return !1;
        return E.prefix != null && !E.prefix.test(v.prefix) || E.suffix != null && !E.suffix.test(v.suffix) ? !1 : E.handler.call(this, l, v, E) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const r = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1) return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let l = new q().retain(t.index - r).delete(r);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), f = this.quill.getFormat(t.index - 1, 1);
        if (s = gt.AttributeMap.diff(h, f) || {}, Object.keys(s).length > 0) {
          const m = new q().retain(t.index + i.length() - 2).retain(1, s);
          l = l.compose(m);
        }
      }
    }
    this.quill.updateContents(l, N.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - r) return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let l = new q().retain(t.index).delete(r);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const c = i.formats(), h = this.quill.getFormat(t.index, 1);
        s = gt.AttributeMap.diff(c, h) || {}, Object.keys(s).length > 0 && (l = l.retain(a.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(l, N.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    Mi({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const r = Object.keys(e.format).reduce((i, l) => (this.quill.scroll.query(l, C.BLOCK) && !Array.isArray(e.format[l]) && (i[l] = e.format[l]), i), {}), s = new q().retain(t.index).delete(t.length).insert(`
`, r);
    this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(t.index + 1, N.sources.SILENT), this.quill.focus();
  }
}
const yd = {
  bindings: {
    bold: Ps("bold"),
    italic: Ps("italic"),
    underline: Ps("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", N.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", N.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(n, t) {
        t.format.indent != null ? this.quill.format("indent", "-1", N.sources.USER) : t.format.list != null && this.quill.format("list", !1, N.sources.USER);
      }
    },
    "indent code-block": ql(!0),
    "outdent code-block": ql(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(n) {
        this.quill.deleteText(n.index - 1, 1, N.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(n, t) {
        if (t.format.table) return !0;
        this.quill.history.cutoff();
        const e = new q().retain(n.index).delete(n.length).insert("	");
        return this.quill.updateContents(e, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index + 1, N.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, N.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(n, t) {
        const e = {
          list: !1
        };
        t.format.indent && (e.indent = !1), this.quill.formatLine(n.index, n.length, e, N.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(n) {
        const [t, e] = this.quill.getLine(n.index), r = {
          // @ts-expect-error Fix me later
          ...t.formats(),
          list: "checked"
        }, s = new q().retain(n.index).insert(`
`, r).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(n.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(n, t) {
        const [e, r] = this.quill.getLine(n.index), s = new q().retain(n.index).insert(`
`, t.format).retain(e.length() - r - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(n.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(n) {
        const t = this.quill.getModule("table");
        if (t) {
          const [e, r, s, i] = t.getTable(n), l = Ed(e, r, s, i);
          if (l == null) return;
          let a = e.offset();
          if (l < 0) {
            const c = new q().retain(a).insert(`
`);
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(n.index + 1, n.length, N.sources.SILENT);
          } else if (l > 0) {
            a += e.length();
            const c = new q().retain(a).insert(`
`);
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(a, N.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(n, t) {
        const {
          event: e,
          line: r
        } = t, s = r.offset(this.quill.scroll);
        e.shiftKey ? this.quill.setSelection(s - 1, N.sources.USER) : this.quill.setSelection(s + r.length(), N.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(n, t) {
        if (this.quill.scroll.query("list") == null) return !0;
        const {
          length: e
        } = t.prefix, [r, s] = this.quill.getLine(n.index);
        if (s > e) return !0;
        let i;
        switch (t.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(n.index, " ", N.sources.USER), this.quill.history.cutoff();
        const l = new q().retain(n.index - s).delete(e + 1).retain(r.length() - 2 - s).retain(1, {
          list: i
        });
        return this.quill.updateContents(l, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index - e, N.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(n) {
        const [t, e] = this.quill.getLine(n.index);
        let r = 2, s = t;
        for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
          if (s = s.prev, r -= 1, r <= 0) {
            const i = new q().retain(n.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, N.sources.USER), this.quill.setSelection(n.index - 1, N.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": dr("ArrowLeft", !1),
    "embed left shift": dr("ArrowLeft", !0),
    "embed right": dr("ArrowRight", !1),
    "embed right shift": dr("ArrowRight", !0),
    "table down": Cl(!1),
    "table up": Cl(!0)
  }
};
kr.DEFAULTS = yd;
function ql(n) {
  return {
    key: "Tab",
    shiftKey: !n,
    format: {
      "code-block": !0
    },
    handler(t, e) {
      let {
        event: r
      } = e;
      const s = this.quill.scroll.query("code-block"), {
        TAB: i
      } = s;
      if (t.length === 0 && !r.shiftKey) {
        this.quill.insertText(t.index, i, N.sources.USER), this.quill.setSelection(t.index + i.length, N.sources.SILENT);
        return;
      }
      const l = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: c
      } = t;
      l.forEach((h, f) => {
        n ? (h.insertAt(0, i), f === 0 ? a += i.length : c += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), f === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(N.sources.USER), this.quill.setSelection(a, c, N.sources.SILENT);
    }
  };
}
function dr(n, t) {
  return {
    key: n,
    shiftKey: t,
    altKey: null,
    [n === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(r) {
      let {
        index: s
      } = r;
      n === "ArrowRight" && (s += r.length + 1);
      const [i] = this.quill.getLeaf(s);
      return i instanceof at ? (n === "ArrowLeft" ? t ? this.quill.setSelection(r.index - 1, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index - 1, N.sources.USER) : t ? this.quill.setSelection(r.index, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index + r.length + 1, N.sources.USER), !1) : !0;
    }
  };
}
function Ps(n) {
  return {
    key: n[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(n, !e.format[n], N.sources.USER);
    }
  };
}
function Cl(n) {
  return {
    key: n ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(t, e) {
      const r = n ? "prev" : "next", s = e.line, i = s.parent[r];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let l = i.children.head, a = s;
          for (; a.prev != null; )
            a = a.prev, l = l.next;
          const c = l.offset(this.quill.scroll) + Math.min(e.offset, l.length() - 1);
          this.quill.setSelection(c, 0, N.sources.USER);
        }
      } else {
        const l = s.table()[r];
        l != null && (n ? this.quill.setSelection(l.offset(this.quill.scroll) + l.length() - 1, 0, N.sources.USER) : this.quill.setSelection(l.offset(this.quill.scroll), 0, N.sources.USER));
      }
      return !1;
    }
  };
}
function vd(n) {
  if (typeof n == "string" || typeof n == "number")
    n = {
      key: n
    };
  else if (typeof n == "object")
    n = Fe(n);
  else
    return null;
  return n.shortKey && (n[bd] = n.shortKey, delete n.shortKey), n;
}
function Mi(n) {
  let {
    quill: t,
    range: e
  } = n;
  const r = t.getLines(e);
  let s = {};
  if (r.length > 1) {
    const i = r[0].formats(), l = r[r.length - 1].formats();
    s = gt.AttributeMap.diff(l, i) || {};
  }
  t.deleteText(e, N.sources.USER), Object.keys(s).length > 0 && t.formatLine(e.index, 1, s, N.sources.USER), t.setSelection(e.index, N.sources.SILENT);
}
function Ed(n, t, e, r) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? r === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const Ad = /font-weight:\s*normal/, Nd = ["P", "OL", "UL"], Il = (n) => n && Nd.includes(n.tagName), wd = (n) => {
  Array.from(n.querySelectorAll("br")).filter((t) => Il(t.previousElementSibling) && Il(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, Td = (n) => {
  Array.from(n.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(Ad);
  }).forEach((t) => {
    var r;
    const e = n.createDocumentFragment();
    e.append(...t.childNodes), (r = t.parentNode) == null || r.replaceChild(e, t);
  });
};
function xd(n) {
  n.querySelector('[id^="docs-internal-guid-"]') && (Td(n), wd(n));
}
const Ld = /\bmso-list:[^;]*ignore/i, _d = /\bmso-list:[^;]*\bl(\d+)/i, Sd = /\bmso-list:[^;]*\blevel(\d+)/i, Od = (n, t) => {
  const e = n.getAttribute("style"), r = e == null ? void 0 : e.match(_d);
  if (!r)
    return null;
  const s = Number(r[1]), i = e == null ? void 0 : e.match(Sd), l = i ? Number(i[1]) : 1, a = new RegExp(`@list l${s}:level${l}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: l,
    type: h,
    element: n
  };
}, qd = (n) => {
  var l, a;
  const t = Array.from(n.querySelectorAll("[style*=mso-list]")), e = [], r = [];
  t.forEach((c) => {
    (c.getAttribute("style") || "").match(Ld) ? e.push(c) : r.push(c);
  }), e.forEach((c) => {
    var h;
    return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
  });
  const s = n.documentElement.innerHTML, i = r.map((c) => Od(c, s)).filter((c) => c);
  for (; i.length; ) {
    const c = [];
    let h = i.shift();
    for (; h; )
      c.push(h), h = i.length && ((l = i[0]) == null ? void 0 : l.element) === h.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === h.id ? i.shift() : null;
    const f = document.createElement("ul");
    c.forEach((p) => {
      const b = document.createElement("li");
      b.setAttribute("data-list", p.type), p.indent > 1 && b.setAttribute("class", `ql-indent-${p.indent - 1}`), b.innerHTML = p.element.innerHTML, f.appendChild(b);
    });
    const m = (a = c[0]) == null ? void 0 : a.element, {
      parentNode: d
    } = m ?? {};
    m && (d == null || d.replaceChild(f, m)), c.slice(1).forEach((p) => {
      let {
        element: b
      } = p;
      d == null || d.removeChild(b);
    });
  }
};
function Cd(n) {
  n.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && qd(n);
}
const Id = [Cd, xd], Rd = (n) => {
  n.documentElement && Id.forEach((t) => {
    t(n);
  });
}, kd = Xt("quill:clipboard"), Bd = [[Node.TEXT_NODE, Vd], [Node.TEXT_NODE, kl], ["br", Pd], [Node.ELEMENT_NODE, kl], [Node.ELEMENT_NODE, jd], [Node.ELEMENT_NODE, $d], [Node.ELEMENT_NODE, Gd], ["li", Hd], ["ol, ul", zd], ["pre", Ud], ["tr", Kd], ["b", Us("bold")], ["i", Us("italic")], ["strike", Us("strike")], ["style", Fd]], Md = [fd, ko].reduce((n, t) => (n[t.keyName] = t, n), {}), Rl = [Io, Ri, Ii, Mo, jo, Uo].reduce((n, t) => (n[t.keyName] = t, n), {});
class Fo extends St {
  constructor(t, e) {
    super(t, e), this.quill.root.addEventListener("copy", (r) => this.onCaptureCopy(r, !1)), this.quill.root.addEventListener("cut", (r) => this.onCaptureCopy(r, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Bd.concat(this.options.matchers ?? []).forEach((r) => {
      let [s, i] = r;
      this.addMatcher(s, i);
    });
  }
  addMatcher(t, e) {
    this.matchers.push([t, e]);
  }
  convert(t) {
    let {
      html: e,
      text: r
    } = t, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s[nt.blotName])
      return new q().insert(r || "", {
        [nt.blotName]: s[nt.blotName]
      });
    if (!e)
      return new q().insert(r || "", s);
    const i = this.convertHTML(e);
    return kn(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new q().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    Rd(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const r = e.body, s = /* @__PURE__ */ new WeakMap(), [i, l] = this.prepareMatching(r, s);
    return Di(this.quill.scroll, r, i, l, s);
  }
  dangerouslyPasteHTML(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N.sources.API;
    if (typeof t == "string") {
      const s = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(s, e), this.quill.setSelection(0, N.sources.SILENT);
    } else {
      const s = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new q().retain(t).concat(s), r), this.quill.setSelection(t + s.length(), N.sources.SILENT);
    }
  }
  onCaptureCopy(t) {
    var l, a;
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (t.defaultPrevented) return;
    t.preventDefault();
    const [r] = this.quill.selection.getRange();
    if (r == null) return;
    const {
      html: s,
      text: i
    } = this.onCopy(r, e);
    (l = t.clipboardData) == null || l.setData("text/plain", i), (a = t.clipboardData) == null || a.setData("text/html", s), e && Mi({
      range: r,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(t) {
    return t.split(/\r?\n/).filter((e) => e[0] !== "#").join(`
`);
  }
  onCapturePaste(t) {
    var l, a, c, h, f;
    if (t.defaultPrevented || !this.quill.isEnabled()) return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null) return;
    const r = (l = t.clipboardData) == null ? void 0 : l.getData("text/html");
    let s = (a = t.clipboardData) == null ? void 0 : a.getData("text/plain");
    if (!r && !s) {
      const m = (c = t.clipboardData) == null ? void 0 : c.getData("text/uri-list");
      m && (s = this.normalizeURIList(m));
    }
    const i = Array.from(((h = t.clipboardData) == null ? void 0 : h.files) || []);
    if (!r && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (r && i.length > 0) {
      const m = new DOMParser().parseFromString(r, "text/html");
      if (m.body.childElementCount === 1 && ((f = m.body.firstElementChild) == null ? void 0 : f.tagName) === "IMG") {
        this.quill.uploader.upload(e, i);
        return;
      }
    }
    this.onPaste(e, {
      html: r,
      text: s
    });
  }
  onCopy(t) {
    const e = this.quill.getText(t);
    return {
      html: this.quill.getSemanticHTML(t),
      text: e
    };
  }
  onPaste(t, e) {
    let {
      text: r,
      html: s
    } = e;
    const i = this.quill.getFormat(t.index), l = this.convert({
      text: r,
      html: s
    }, i);
    kd.log("onPaste", l, {
      text: r,
      html: s
    });
    const a = new q().retain(t.index).delete(t.length).concat(l);
    this.quill.updateContents(a, N.sources.USER), this.quill.setSelection(a.length() - t.length, N.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t, e) {
    const r = [], s = [];
    return this.matchers.forEach((i) => {
      const [l, a] = i;
      switch (l) {
        case Node.TEXT_NODE:
          s.push(a);
          break;
        case Node.ELEMENT_NODE:
          r.push(a);
          break;
        default:
          Array.from(t.querySelectorAll(l)).forEach((c) => {
            if (e.has(c)) {
              const h = e.get(c);
              h == null || h.push(a);
            } else
              e.set(c, [a]);
          });
          break;
      }
    }), [r, s];
  }
}
_(Fo, "DEFAULTS", {
  matchers: []
});
function we(n, t, e, r) {
  return r.query(t) ? n.reduce((s, i) => {
    if (!i.insert) return s;
    if (i.attributes && i.attributes[t])
      return s.push(i);
    const l = e ? {
      [t]: e
    } : {};
    return s.insert(i.insert, {
      ...l,
      ...i.attributes
    });
  }, new q()) : n;
}
function kn(n, t) {
  let e = "";
  for (let r = n.ops.length - 1; r >= 0 && e.length < t.length; --r) {
    const s = n.ops[r];
    if (typeof s.insert != "string") break;
    e = s.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function ne(n, t) {
  if (!(n instanceof Element)) return !1;
  const e = t.query(n);
  return e && e.prototype instanceof at ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n.tagName.toLowerCase());
}
function Dd(n, t) {
  return n.previousElementSibling && n.nextElementSibling && !ne(n.previousElementSibling, t) && !ne(n.nextElementSibling, t);
}
const gr = /* @__PURE__ */ new WeakMap();
function Ho(n) {
  return n == null ? !1 : (gr.has(n) || (n.tagName === "PRE" ? gr.set(n, !0) : gr.set(n, Ho(n.parentNode))), gr.get(n));
}
function Di(n, t, e, r, s) {
  return t.nodeType === t.TEXT_NODE ? r.reduce((i, l) => l(t, i, n), new q()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, l) => {
    let a = Di(n, l, e, r, s);
    return l.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(l, c, n), a), a = (s.get(l) || []).reduce((c, h) => h(l, c, n), a)), i.concat(a);
  }, new q()) : new q();
}
function Us(n) {
  return (t, e, r) => we(e, n, !0, r);
}
function $d(n, t, e) {
  const r = Dt.keys(n), s = Lt.keys(n), i = le.keys(n), l = {};
  return r.concat(s).concat(i).forEach((a) => {
    let c = e.query(a, C.ATTRIBUTE);
    c != null && (l[c.attrName] = c.value(n), l[c.attrName]) || (c = Md[a], c != null && (c.attrName === a || c.keyName === a) && (l[c.attrName] = c.value(n) || void 0), c = Rl[a], c != null && (c.attrName === a || c.keyName === a) && (c = Rl[a], l[c.attrName] = c.value(n) || void 0));
  }), Object.entries(l).reduce((a, c) => {
    let [h, f] = c;
    return we(a, h, f, e);
  }, t);
}
function jd(n, t, e) {
  const r = e.query(n);
  if (r == null) return t;
  if (r.prototype instanceof at) {
    const s = {}, i = r.value(n);
    if (i != null)
      return s[r.blotName] = i, new q().insert(s, r.formats(n, e));
  } else if (r.prototype instanceof Ln && !kn(t, `
`) && t.insert(`
`), "blotName" in r && "formats" in r && typeof r.formats == "function")
    return we(t, r.blotName, r.formats(n, e), e);
  return t;
}
function Pd(n, t) {
  return kn(t, `
`) || t.insert(`
`), t;
}
function Ud(n, t, e) {
  const r = e.query("code-block"), s = r && "formats" in r && typeof r.formats == "function" ? r.formats(n, e) : !0;
  return we(t, "code-block", s, e);
}
function Fd() {
  return new q();
}
function Hd(n, t, e) {
  const r = e.query(n);
  if (r == null || // @ts-expect-error
  r.blotName !== "list" || !kn(t, `
`))
    return t;
  let s = -1, i = n.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (s += 1), i = i.parentNode;
  return s <= 0 ? t : t.reduce((l, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? l.push(a) : l.insert(a.insert, {
    indent: s,
    ...a.attributes || {}
  }) : l, new q());
}
function zd(n, t, e) {
  const r = n;
  let s = r.tagName === "OL" ? "ordered" : "bullet";
  const i = r.getAttribute("data-checked");
  return i && (s = i === "true" ? "checked" : "unchecked"), we(t, "list", s, e);
}
function kl(n, t, e) {
  if (!kn(t, `
`)) {
    if (ne(n, e) && (n.childNodes.length > 0 || n instanceof HTMLParagraphElement))
      return t.insert(`
`);
    if (t.length() > 0 && n.nextSibling) {
      let r = n.nextSibling;
      for (; r != null; ) {
        if (ne(r, e))
          return t.insert(`
`);
        const s = e.query(r);
        if (s && s.prototype instanceof dt)
          return t.insert(`
`);
        r = r.firstChild;
      }
    }
  }
  return t;
}
function Gd(n, t, e) {
  var i;
  const r = {}, s = n.style || {};
  return s.fontStyle === "italic" && (r.italic = !0), s.textDecoration === "underline" && (r.underline = !0), s.textDecoration === "line-through" && (r.strike = !0), ((i = s.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((l, a) => {
    let [c, h] = a;
    return we(l, c, h, e);
  }, t), parseFloat(s.textIndent || 0) > 0 ? new q().insert("	").concat(t) : t;
}
function Kd(n, t, e) {
  var s, i;
  const r = ((s = n.parentElement) == null ? void 0 : s.tagName) === "TABLE" ? n.parentElement : (i = n.parentElement) == null ? void 0 : i.parentElement;
  if (r != null) {
    const a = Array.from(r.querySelectorAll("tr")).indexOf(n) + 1;
    return we(t, "table", a, e);
  }
  return t;
}
function Vd(n, t, e) {
  var s;
  let r = n.data;
  if (((s = n.parentElement) == null ? void 0 : s.tagName) === "O:P")
    return t.insert(r.trim());
  if (!Ho(n)) {
    if (r.trim().length === 0 && r.includes(`
`) && !Dd(n, e))
      return t;
    const i = (l, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && l ? " " : c;
    };
    r = r.replace(/\r\n/g, " ").replace(/\n/g, " "), r = r.replace(/\s\s+/g, i.bind(i, !0)), (n.previousSibling == null && n.parentElement != null && ne(n.parentElement, e) || n.previousSibling instanceof Element && ne(n.previousSibling, e)) && (r = r.replace(/^\s+/, i.bind(i, !1))), (n.nextSibling == null && n.parentElement != null && ne(n.parentElement, e) || n.nextSibling instanceof Element && ne(n.nextSibling, e)) && (r = r.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(r);
}
class zo extends St {
  constructor(e, r) {
    super(e, r);
    _(this, "lastRecorded", 0);
    _(this, "ignoreChange", !1);
    _(this, "stack", {
      undo: [],
      redo: []
    });
    _(this, "currentRange", null);
    this.quill.on(N.events.EDITOR_CHANGE, (s, i, l, a) => {
      s === N.events.SELECTION_CHANGE ? i && a !== N.sources.SILENT && (this.currentRange = i) : s === N.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === N.sources.USER ? this.record(i, l) : this.transform(i)), this.currentRange = li(this.currentRange, i));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (s) => {
      s.inputType === "historyUndo" ? (this.undo(), s.preventDefault()) : s.inputType === "historyRedo" && (this.redo(), s.preventDefault());
    });
  }
  change(e, r) {
    if (this.stack[e].length === 0) return;
    const s = this.stack[e].pop();
    if (!s) return;
    const i = this.quill.getContents(), l = s.delta.invert(i);
    this.stack[r].push({
      delta: l,
      range: li(s.range, l)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(s.delta, N.sources.USER), this.ignoreChange = !1, this.restoreSelection(s);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(e, r) {
    if (e.ops.length === 0) return;
    this.stack.redo = [];
    let s = e.invert(r), i = this.currentRange;
    const l = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > l && this.stack.undo.length > 0
    ) {
      const a = this.stack.undo.pop();
      a && (s = s.compose(a.delta), i = a.range);
    } else
      this.lastRecorded = l;
    s.length() !== 0 && (this.stack.undo.push({
      delta: s,
      range: i
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e) {
    Bl(this.stack.undo, e), Bl(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, N.sources.USER);
    else {
      const r = Zd(this.quill.scroll, e.delta);
      this.quill.setSelection(r, N.sources.USER);
    }
  }
}
_(zo, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function Bl(n, t) {
  let e = t;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = n[r];
    n[r] = {
      delta: e.transform(s.delta, !0),
      range: s.range && li(s.range, e)
    }, e = s.delta.transform(e), n[r].delta.length() === 0 && n.splice(r, 1);
  }
}
function Wd(n, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith(`
`) : e.attributes != null ? Object.keys(e.attributes).some((r) => n.query(r, C.BLOCK) != null) : !1;
}
function Zd(n, t) {
  const e = t.reduce((s, i) => s + (i.delete || 0), 0);
  let r = t.length() - e;
  return Wd(n, t) && (r -= 1), r;
}
function li(n, t) {
  if (!n) return n;
  const e = t.transformPosition(n.index), r = t.transformPosition(n.index + n.length);
  return {
    index: e,
    length: r - e
  };
}
class Go extends St {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("drop", (r) => {
      var l;
      r.preventDefault();
      let s = null;
      if (document.caretRangeFromPoint)
        s = document.caretRangeFromPoint(r.clientX, r.clientY);
      else if (document.caretPositionFromPoint) {
        const a = document.caretPositionFromPoint(r.clientX, r.clientY);
        s = document.createRange(), s.setStart(a.offsetNode, a.offset), s.setEnd(a.offsetNode, a.offset);
      }
      const i = s && t.selection.normalizeNative(s);
      if (i) {
        const a = t.selection.normalizedToRange(i);
        (l = r.dataTransfer) != null && l.files && this.upload(a, r.dataTransfer.files);
      }
    });
  }
  upload(t, e) {
    const r = [];
    Array.from(e).forEach((s) => {
      var i;
      s && ((i = this.options.mimetypes) != null && i.includes(s.type)) && r.push(s);
    }), r.length > 0 && this.options.handler.call(this, t, r);
  }
}
Go.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(n, t) {
    if (!this.quill.scroll.query("image"))
      return;
    const e = t.map((r) => new Promise((s) => {
      const i = new FileReader();
      i.onload = () => {
        s(i.result);
      }, i.readAsDataURL(r);
    }));
    Promise.all(e).then((r) => {
      const s = r.reduce((i, l) => i.insert({
        image: l
      }), new q().retain(n.index).delete(n.length));
      this.quill.updateContents(s, O.sources.USER), this.quill.setSelection(n.index + r.length, O.sources.SILENT);
    });
  }
};
const Xd = ["insertText", "insertReplacementText"];
class Yd extends St {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (r) => {
      this.handleBeforeInput(r);
    }), /Android/i.test(navigator.userAgent) || t.on(N.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    Mi({
      range: t,
      quill: this.quill
    });
  }
  replaceText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t.length === 0) return !1;
    if (e) {
      const r = this.quill.getFormat(t.index, 1);
      this.deleteRange(t), this.quill.updateContents(new q().retain(t.index).insert(e, r), N.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, N.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !Xd.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const r = Qd(t);
    if (r == null)
      return;
    const s = this.quill.selection.normalizeNative(e), i = s ? this.quill.selection.normalizedToRange(s) : null;
    i && this.replaceText(i, r) && t.preventDefault();
  }
  handleCompositionStart() {
    const t = this.quill.getSelection();
    t && this.replaceText(t);
  }
}
function Qd(n) {
  var t;
  return typeof n.data == "string" ? n.data : (t = n.dataTransfer) != null && t.types.includes("text/plain") ? n.dataTransfer.getData("text/plain") : null;
}
const Jd = /Mac/i.test(navigator.platform), tg = 100, eg = (n) => !!(n.key === "ArrowLeft" || n.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n.key === "ArrowUp" || n.key === "ArrowDown" || n.key === "Home" || Jd && n.key === "a" && n.ctrlKey === !0);
class ng extends St {
  constructor(e, r) {
    super(e, r);
    _(this, "isListening", !1);
    _(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e, r) {
        let {
          line: s,
          event: i
        } = r;
        if (!(s instanceof Tt) || !s.uiNode)
          return !0;
        const l = getComputedStyle(s.domNode).direction === "rtl";
        return l && i.key !== "ArrowRight" || !l && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), N.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && eg(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + tg, this.isListening) return;
    this.isListening = !0;
    const e = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e, {
      once: !0
    });
  }
  handleSelectionChange() {
    const e = document.getSelection();
    if (!e) return;
    const r = e.getRangeAt(0);
    if (r.collapsed !== !0 || r.startOffset !== 0) return;
    const s = this.quill.scroll.find(r.startContainer);
    if (!(s instanceof Tt) || !s.uiNode) return;
    const i = document.createRange();
    i.setStartAfter(s.uiNode), i.setEndAfter(s.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
N.register({
  "blots/block": Y,
  "blots/block/embed": dt,
  "blots/break": _t,
  "blots/container": Ae,
  "blots/cursor": Ve,
  "blots/embed": qi,
  "blots/inline": $t,
  "blots/scroll": Ue,
  "blots/text": xt,
  "modules/clipboard": Fo,
  "modules/history": zo,
  "modules/keyboard": kr,
  "modules/uploader": Go,
  "modules/input": Yd,
  "modules/uiNode": ng
});
class rg extends Lt {
  add(t, e) {
    let r = 0;
    if (e === "+1" || e === "-1") {
      const s = this.value(t) || 0;
      r = e === "+1" ? s + 1 : s - 1;
    } else typeof e == "number" && (r = e);
    return r === 0 ? (this.remove(t), !0) : super.add(t, r.toString());
  }
  canAdd(t, e) {
    return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
  }
  value(t) {
    return parseInt(super.value(t), 10) || void 0;
  }
}
const sg = new rg("indent", "ql-indent", {
  scope: C.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class oi extends Y {
}
_(oi, "blotName", "blockquote"), _(oi, "tagName", "blockquote");
class ai extends Y {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
_(ai, "blotName", "header"), _(ai, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class Bn extends Ae {
}
Bn.blotName = "list-container";
Bn.tagName = "OL";
class Mn extends Y {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    N.register(Bn);
  }
  constructor(t, e) {
    super(t, e);
    const r = e.ownerDocument.createElement("span"), s = (i) => {
      if (!t.isEnabled()) return;
      const l = this.statics.formats(e, t);
      l === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : l === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    r.addEventListener("mousedown", s), r.addEventListener("touchstart", s), this.attachUI(r);
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e);
  }
}
Mn.blotName = "list";
Mn.tagName = "LI";
Bn.allowedChildren = [Mn];
Mn.requiredContainer = Bn;
class On extends $t {
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(t) {
    super.optimize(t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
_(On, "blotName", "bold"), _(On, "tagName", ["STRONG", "B"]);
class ci extends On {
}
_(ci, "blotName", "italic"), _(ci, "tagName", ["EM", "I"]);
class re extends $t {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return Ko(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
_(re, "blotName", "link"), _(re, "tagName", "A"), _(re, "SANITIZED_URL", "about:blank"), _(re, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function Ko(n, t) {
  const e = document.createElement("a");
  e.href = n;
  const r = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(r) > -1;
}
class ui extends $t {
  static create(t) {
    return t === "super" ? document.createElement("sup") : t === "sub" ? document.createElement("sub") : super.create(t);
  }
  static formats(t) {
    if (t.tagName === "SUB") return "sub";
    if (t.tagName === "SUP") return "super";
  }
}
_(ui, "blotName", "script"), _(ui, "tagName", ["SUB", "SUP"]);
class hi extends On {
}
_(hi, "blotName", "strike"), _(hi, "tagName", ["S", "STRIKE"]);
class fi extends $t {
}
_(fi, "blotName", "underline"), _(fi, "tagName", "U");
class mr extends qi {
  static create(t) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e = super.create(t);
    return typeof t == "string" && (window.katex.render(t, e, {
      throwOnError: !1,
      errorColor: "#f00"
    }), e.setAttribute("data-value", t)), e;
  }
  static value(t) {
    return t.getAttribute("data-value");
  }
  html() {
    const {
      formula: t
    } = this.value();
    return `<span>${t}</span>`;
  }
}
_(mr, "blotName", "formula"), _(mr, "className", "ql-formula"), _(mr, "tagName", "SPAN");
const Ml = ["alt", "height", "width"];
class di extends at {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Ml.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return Ko(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Ml.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
_(di, "blotName", "image"), _(di, "tagName", "IMG");
const Dl = ["height", "width"];
class br extends dt {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Dl.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static sanitize(t) {
    return re.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Dl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return `<a href="${t}">${t}</a>`;
  }
}
_(br, "blotName", "video"), _(br, "className", "ql-video"), _(br, "tagName", "IFRAME");
const yn = new Lt("code-token", "hljs", {
  scope: C.INLINE
});
class Kt extends $t {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(nt.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, r) {
    super(t, e, r), yn.add(this.domNode, r);
  }
  format(t, e) {
    t !== Kt.blotName ? super.format(t, e) : e ? yn.add(this.domNode, e) : (yn.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), yn.value(this.domNode) || this.unwrap();
  }
}
Kt.blotName = "code-token";
Kt.className = "ql-token";
class ft extends nt {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("data-language", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e);
  }
  replaceWith(t, e) {
    return this.formatAt(0, this.length(), Kt.blotName, !1), super.replaceWith(t, e);
  }
}
class En extends Ne {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === ft.blotName && (this.forceNext = !0, this.children.forEach((r) => {
      r.format(t, e);
    }));
  }
  formatAt(t, e, r, s) {
    r === ft.blotName && (this.forceNext = !0), super.formatAt(t, e, r, s);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null) return;
    const s = `${Array.from(this.domNode.childNodes).filter((l) => l !== this.uiNode).map((l) => l.textContent).join(`
`)}
`, i = ft.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || this.cachedText == null) {
        const l = this.children.reduce((c, h) => c.concat(So(h, !1)), new q()), a = t(s, i);
        l.diff(a).reduce((c, h) => {
          let {
            retain: f,
            attributes: m
          } = h;
          return f ? (m && Object.keys(m).forEach((d) => {
            [ft.blotName, Kt.blotName].includes(d) && this.formatAt(c, f, d, m[d]);
          }), c + f) : c;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [r] = this.children.find(t);
    return `<pre data-language="${r ? ft.formats(r.domNode) : "plain"}">
${Rr(this.code(t, e))}
</pre>`;
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = ft.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
En.allowedChildren = [ft];
ft.requiredContainer = En;
ft.allowedChildren = [Kt, Ve, xt, _t];
const ig = (n, t, e) => {
  if (typeof n.versionString == "string") {
    const r = n.versionString.split(".")[0];
    if (parseInt(r, 10) >= 11)
      return n.highlight(e, {
        language: t
      }).value;
  }
  return n.highlight(t, e).value;
};
class Vo extends St {
  static register() {
    N.register(Kt, !0), N.register(ft, !0), N.register(En, !0);
  }
  constructor(t, e) {
    if (super(t, e), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((r, s) => {
      let {
        key: i
      } = s;
      return r[i] = !0, r;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(N.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof En)) return;
      const e = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((r) => {
        let {
          key: s,
          label: i
        } = r;
        const l = e.ownerDocument.createElement("option");
        l.textContent = i, l.setAttribute("value", s), e.appendChild(l);
      }), e.addEventListener("change", () => {
        t.format(ft.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = ft.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(N.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing) return;
    this.quill.update(N.sources.USER);
    const r = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(En) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(N.sources.SILENT), r != null && this.quill.setSelection(r, N.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return Rr(t).split(`
`).reduce((s, i, l) => (l !== 0 && s.insert(`
`, {
        [nt.blotName]: e
      }), s.insert(i)), new q());
    const r = this.quill.root.ownerDocument.createElement("div");
    return r.classList.add(nt.className), r.innerHTML = ig(this.options.hljs, e, t), Di(this.quill.scroll, r, [(s, i) => {
      const l = yn.value(s);
      return l ? i.compose(new q().retain(i.length(), {
        [Kt.blotName]: l
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((l, a, c) => (c !== 0 && l.insert(`
`, {
      [nt.blotName]: e
    }), l.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
Vo.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
const Nn = class Nn extends Y {
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", $i()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === Nn.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
};
_(Nn, "blotName", "table"), _(Nn, "tagName", "TD");
let wt = Nn;
class Vt extends Ae {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const t = this.children.head.formats(), e = this.children.tail.formats(), r = this.next.children.head.formats(), s = this.next.children.tail.formats();
      return t.table === e.table && t.table === r.table && t.table === s.table;
    }
    return !1;
  }
  optimize(t) {
    super.optimize(t), this.children.forEach((e) => {
      if (e.next == null) return;
      const r = e.formats(), s = e.next.formats();
      if (r.table !== s.table) {
        const i = this.splitAfter(e);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
_(Vt, "blotName", "table-row"), _(Vt, "tagName", "TR");
class Mt extends Ae {
}
_(Mt, "blotName", "table-body"), _(Mt, "tagName", "TBODY");
class Ze extends Ae {
  balanceCells() {
    const t = this.descendants(Vt), e = t.reduce((r, s) => Math.max(s.children.length, r), 0);
    t.forEach((r) => {
      new Array(e - r.children.length).fill(0).forEach(() => {
        let s;
        r.children.head != null && (s = wt.formats(r.children.head.domNode));
        const i = this.scroll.create(wt.blotName, s);
        r.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(Mt);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t);
      s != null && s.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(Mt);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t), i = wt.formats(r.children.head.domNode), l = this.scroll.create(wt.blotName, i);
      r.insertBefore(l, s);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(Mt);
    if (e == null || e.children.head == null) return;
    const r = $i(), s = this.scroll.create(Vt.blotName);
    e.children.head.children.forEach(() => {
      const l = this.scroll.create(wt.blotName, r);
      s.appendChild(l);
    });
    const i = e.children.at(t);
    e.insertBefore(s, i);
  }
  rows() {
    const t = this.children.head;
    return t == null ? [] : t.children.map((e) => e);
  }
}
_(Ze, "blotName", "table-container"), _(Ze, "tagName", "TABLE");
Ze.allowedChildren = [Mt];
Mt.requiredContainer = Ze;
Mt.allowedChildren = [Vt];
Vt.requiredContainer = Mt;
Vt.allowedChildren = [wt];
wt.requiredContainer = Vt;
function $i() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class lg extends St {
  static register() {
    N.register(wt), N.register(Vt), N.register(Mt), N.register(Ze);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Ze).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(N.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(N.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null) return;
    const e = t.offset();
    t.remove(), this.quill.update(N.sources.USER), this.quill.setSelection(e, N.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null) return [null, null, null, -1];
    const [e, r] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== wt.blotName)
      return [null, null, null, -1];
    const s = e.parent;
    return [s.parent.parent, s, e, r];
  }
  insertColumn(t) {
    const e = this.quill.getSelection();
    if (!e) return;
    const [r, s, i] = this.getTable(e);
    if (i == null) return;
    const l = i.cellOffset();
    r.insertColumn(l + t), this.quill.update(N.sources.USER);
    let a = s.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, N.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t) {
    const e = this.quill.getSelection();
    if (!e) return;
    const [r, s, i] = this.getTable(e);
    if (i == null) return;
    const l = s.rowOffset();
    r.insertRow(l + t), this.quill.update(N.sources.USER), t > 0 ? this.quill.setSelection(e, N.sources.SILENT) : this.quill.setSelection(e.index + s.children.length, e.length, N.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t, e) {
    const r = this.quill.getSelection();
    if (r == null) return;
    const s = new Array(t).fill(0).reduce((i) => {
      const l = new Array(e).fill(`
`).join("");
      return i.insert(l, {
        table: $i()
      });
    }, new q().retain(r.index));
    this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(r.index, N.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(N.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(N.events.TEXT_CHANGE, (r, s, i) => {
        i === N.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const $l = Xt("quill:toolbar");
class ji extends St {
  constructor(t, e) {
    var r, s;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), og(i, this.options.container), (s = (r = t.container) == null ? void 0 : r.parentNode) == null || s.insertBefore(i, t.container), this.container = i;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      $l.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const l = (a = this.options.handlers) == null ? void 0 : a[i];
      l && this.addHandler(i, l);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(N.events.EDITOR_CHANGE, () => {
      const [i] = this.quill.selection.getRange();
      this.update(i);
    });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find((s) => s.indexOf("ql-") === 0);
    if (!e) return;
    if (e = e.slice(3), t.tagName === "BUTTON" && t.setAttribute("type", "button"), this.handlers[e] == null && this.quill.scroll.query(e) == null) {
      $l.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    const r = t.tagName === "SELECT" ? "change" : "click";
    t.addEventListener(r, (s) => {
      let i;
      if (t.tagName === "SELECT") {
        if (t.selectedIndex < 0) return;
        const a = t.options[t.selectedIndex];
        a.hasAttribute("selected") ? i = !1 : i = a.value || !1;
      } else
        t.classList.contains("ql-active") ? i = !1 : i = t.value || !t.hasAttribute("value"), s.preventDefault();
      this.quill.focus();
      const [l] = this.quill.selection.getRange();
      if (this.handlers[e] != null)
        this.handlers[e].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e).prototype instanceof at
      ) {
        if (i = prompt(`Enter ${e}`), !i) return;
        this.quill.updateContents(new q().retain(l.index).delete(l.length).insert({
          [e]: i
        }), N.sources.USER);
      } else
        this.quill.format(e, i, N.sources.USER);
      this.update(l);
    }), this.controls.push([e, t]);
  }
  update(t) {
    const e = t == null ? {} : this.quill.getFormat(t);
    this.controls.forEach((r) => {
      const [s, i] = r;
      if (i.tagName === "SELECT") {
        let l = null;
        if (t == null)
          l = null;
        else if (e[s] == null)
          l = i.querySelector("option[selected]");
        else if (!Array.isArray(e[s])) {
          let a = e[s];
          typeof a == "string" && (a = a.replace(/"/g, '\\"')), l = i.querySelector(`option[value="${a}"]`);
        }
        l == null ? (i.value = "", i.selectedIndex = -1) : l.selected = !0;
      } else if (t == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const l = e[s], a = l === i.getAttribute("value") || l != null && l.toString() === i.getAttribute("value") || l == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      } else {
        const l = e[s] != null;
        i.classList.toggle("ql-active", l), i.setAttribute("aria-pressed", l.toString());
      }
    });
  }
}
ji.DEFAULTS = {};
function jl(n, t, e) {
  const r = document.createElement("button");
  r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), e != null ? (r.value = e, r.setAttribute("aria-label", `${t}: ${e}`)) : r.setAttribute("aria-label", t), n.appendChild(r);
}
function og(n, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const r = document.createElement("span");
    r.classList.add("ql-formats"), e.forEach((s) => {
      if (typeof s == "string")
        jl(r, s);
      else {
        const i = Object.keys(s)[0], l = s[i];
        Array.isArray(l) ? ag(r, i, l) : jl(r, i, l);
      }
    }), n.appendChild(r);
  });
}
function ag(n, t, e) {
  const r = document.createElement("select");
  r.classList.add(`ql-${t}`), e.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), r.appendChild(i);
  }), n.appendChild(r);
}
ji.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const n = this.quill.getSelection();
      if (n != null)
        if (n.length === 0) {
          const t = this.quill.getFormat();
          Object.keys(t).forEach((e) => {
            this.quill.scroll.query(e, C.INLINE) != null && this.quill.format(e, !1, N.sources.USER);
          });
        } else
          this.quill.removeFormat(n.index, n.length, N.sources.USER);
    },
    direction(n) {
      const {
        align: t
      } = this.quill.getFormat();
      n === "rtl" && t == null ? this.quill.format("align", "right", N.sources.USER) : !n && t === "right" && this.quill.format("align", !1, N.sources.USER), this.quill.format("direction", n, N.sources.USER);
    },
    indent(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), r = parseInt(e.indent || 0, 10);
      if (n === "+1" || n === "-1") {
        let s = n === "+1" ? 1 : -1;
        e.direction === "rtl" && (s *= -1), this.quill.format("indent", r + s, N.sources.USER);
      }
    },
    link(n) {
      n === !0 && (n = prompt("Enter link URL:")), this.quill.format("link", n, N.sources.USER);
    },
    list(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      n === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, N.sources.USER) : this.quill.format("list", "unchecked", N.sources.USER) : this.quill.format("list", n, N.sources.USER);
    }
  }
};
const cg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', ug = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', hg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', fg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', dg = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', gg = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', pg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', mg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Pl = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', bg = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', yg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', vg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', Eg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', Ag = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', Ng = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', wg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Tg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', xg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Lg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', _g = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', Sg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', Og = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', qg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', Cg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Ig = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', Rg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', kg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', Bg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', Mg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', Dg = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', $g = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', jg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', Pg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', qn = {
  align: {
    "": cg,
    center: ug,
    right: hg,
    justify: fg
  },
  background: dg,
  blockquote: gg,
  bold: pg,
  clean: mg,
  code: Pl,
  "code-block": Pl,
  color: bg,
  direction: {
    "": yg,
    rtl: vg
  },
  formula: Eg,
  header: {
    1: Ag,
    2: Ng,
    3: wg,
    4: Tg,
    5: xg,
    6: Lg
  },
  italic: _g,
  image: Sg,
  indent: {
    "+1": Og,
    "-1": qg
  },
  link: Cg,
  list: {
    bullet: Ig,
    check: Rg,
    ordered: kg
  },
  script: {
    sub: Bg,
    super: Mg
  },
  strike: Dg,
  table: $g,
  underline: jg,
  video: Pg
}, Ug = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Ul = 0;
function Fl(n, t) {
  n.setAttribute(t, `${n.getAttribute(t) !== "true"}`);
}
class Br {
  constructor(t) {
    this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), Fl(this.label, "aria-expanded"), Fl(this.options, "aria-hidden");
  }
  buildItem(t) {
    const e = document.createElement("span");
    e.tabIndex = "0", e.setAttribute("role", "button"), e.classList.add("ql-picker-item");
    const r = t.getAttribute("value");
    return r && e.setAttribute("data-value", r), t.textContent && e.setAttribute("data-label", t.textContent), e.addEventListener("click", () => {
      this.selectItem(e, !0);
    }), e.addEventListener("keydown", (s) => {
      switch (s.key) {
        case "Enter":
          this.selectItem(e, !0), s.preventDefault();
          break;
        case "Escape":
          this.escape(), s.preventDefault();
          break;
      }
    }), e;
  }
  buildLabel() {
    const t = document.createElement("span");
    return t.classList.add("ql-picker-label"), t.innerHTML = Ug, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = `ql-picker-options-${Ul}`, Ul += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
      const r = this.buildItem(e);
      t.appendChild(r), e.selected === !0 && this.selectItem(r);
    }), this.container.appendChild(t);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t) => {
      this.container.setAttribute(t.name, t.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = this.container.querySelector(".ql-selected");
    t !== r && (r != null && r.classList.remove("ql-selected"), t != null && (t.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t;
    if (this.select.selectedIndex > -1) {
      const r = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t = this.select.options[this.select.selectedIndex], this.selectItem(r);
    } else
      this.selectItem(null);
    const e = t != null && t !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e);
  }
}
class Wo extends Br {
  constructor(t, e) {
    super(t), this.label.innerHTML = e, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((r) => {
      r.classList.add("ql-primary");
    });
  }
  buildItem(t) {
    const e = super.buildItem(t);
    return e.style.backgroundColor = t.getAttribute("value") || "", e;
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = this.label.querySelector(".ql-color-label"), s = t && t.getAttribute("data-value") || "";
    r && (r.tagName === "line" ? r.style.stroke = s : r.style.fill = s);
  }
}
class Zo extends Br {
  constructor(t, e) {
    super(t), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((r) => {
      r.innerHTML = e[r.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = t || this.defaultItem;
    if (r != null) {
      if (this.label.innerHTML === r.innerHTML) return;
      this.label.innerHTML = r.innerHTML;
    }
  }
}
const Fg = (n) => {
  const {
    overflowY: t
  } = getComputedStyle(n, null);
  return t !== "visible" && t !== "clip";
};
class Xo {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Fg(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    const e = t.left + t.width / 2 - this.root.offsetWidth / 2, r = t.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e}px`, this.root.style.top = `${r}px`, this.root.classList.remove("ql-flip");
    const s = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let l = 0;
    if (i.right > s.right && (l = s.right - i.right, this.root.style.left = `${e + l}px`), i.left < s.left && (l = s.left - i.left, this.root.style.left = `${e + l}px`), i.bottom > s.bottom) {
      const a = i.bottom - i.top, c = t.bottom - t.top + a;
      this.root.style.top = `${r - c}px`, this.root.classList.add("ql-flip");
    }
    return l;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const Hg = [!1, "center", "right", "justify"], zg = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], Gg = [!1, "serif", "monospace"], Kg = ["1", "2", "3", !1], Vg = ["small", !1, "large", "huge"];
class Dn extends We {
  constructor(t, e) {
    super(t, e);
    const r = (s) => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", r);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(s.target) || i.close();
      });
    };
    t.emitter.listenDOM("click", document.body, r);
  }
  addModule(t) {
    const e = super.addModule(t);
    return t === "toolbar" && this.extendToolbar(e), e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach((r) => {
      (r.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), e[i] != null))
          if (i === "direction")
            r.innerHTML = e[i][""] + e[i].rtl;
          else if (typeof e[i] == "string")
            r.innerHTML = e[i];
          else {
            const l = r.value || "";
            l != null && e[i][l] && (r.innerHTML = e[i][l]);
          }
      });
    });
  }
  buildPickers(t, e) {
    this.pickers = Array.from(t).map((s) => {
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && bn(s, Hg), typeof e.align == "object"))
        return new Zo(s, e.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && bn(s, zg, i === "background" ? "#ffffff" : "#000000"), new Wo(s, e[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? bn(s, Gg) : s.classList.contains("ql-header") ? bn(s, Kg) : s.classList.contains("ql-size") && bn(s, Vg)), new Br(s);
    });
    const r = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(O.events.EDITOR_CHANGE, r);
  }
}
Dn.DEFAULTS = se({}, We.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let n = this.container.querySelector("input.ql-image[type=file]");
          n == null && (n = document.createElement("input"), n.setAttribute("type", "file"), n.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), n.classList.add("ql-image"), n.addEventListener("change", () => {
            const t = this.quill.getSelection(!0);
            this.quill.uploader.upload(t, n.files), n.value = "";
          }), this.container.appendChild(n)), n.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class Yo extends Xo {
  constructor(t, e) {
    super(t, e), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t) => {
      t.key === "Enter" ? (this.save(), t.preventDefault()) : t.key === "Escape" && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
    e != null ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const r = this.quill.getBounds(this.quill.selection.savedRange);
    r != null && this.position(r), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || ""), this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: t
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, O.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, O.sources.USER)), this.quill.root.scrollTop = e;
        break;
      }
      case "video":
        t = Wg(t);
      case "formula": {
        if (!t) break;
        const e = this.quill.getSelection(!0);
        if (e != null) {
          const r = e.index + e.length;
          this.quill.insertEmbed(
            r,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t,
            O.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(r + 1, " ", O.sources.USER), this.quill.setSelection(r + 2, O.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function Wg(n) {
  let t = n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = n.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : n;
}
function bn(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((r) => {
    const s = document.createElement("option");
    r === e ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(r)), n.appendChild(s);
  });
}
const Zg = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class Qo extends Yo {
  constructor(t, e) {
    super(t, e), this.quill.on(O.events.EDITOR_CHANGE, (r, s, i, l) => {
      if (r === O.events.SELECTION_CHANGE)
        if (s != null && s.length > 0 && l === O.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a = this.quill.getLines(s.index, s.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(s);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], h = this.quill.getIndex(c), f = Math.min(c.length() - 1, s.index + s.length - h), m = this.quill.getBounds(new be(h, f));
            m != null && this.position(m);
          }
        } else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(O.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden")) return;
        const t = this.quill.getSelection();
        if (t != null) {
          const e = this.quill.getBounds(t);
          e != null && this.position(e);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t) {
    const e = super.position(t), r = this.root.querySelector(".ql-tooltip-arrow");
    return r.style.marginLeft = "", e !== 0 && (r.style.marginLeft = `${-1 * e - r.offsetWidth / 2}px`), e;
  }
}
_(Qo, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class Jo extends Dn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Zg), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new Qo(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), qn), this.buildPickers(t.container.querySelectorAll("select"), qn));
  }
}
Jo.DEFAULTS = se({}, Dn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          n ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
const Xg = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class ta extends Yo {
  constructor() {
    super(...arguments);
    _(this, "preview", this.root.querySelector("a.ql-preview"));
  }
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
      if (this.linkRange != null) {
        const r = this.linkRange;
        this.restoreFocus(), this.quill.formatText(r, "link", !1, O.sources.USER), delete this.linkRange;
      }
      e.preventDefault(), this.hide();
    }), this.quill.on(O.events.SELECTION_CHANGE, (e, r, s) => {
      if (e != null) {
        if (e.length === 0 && s === O.sources.USER) {
          const [i, l] = this.quill.scroll.descendant(re, e.index);
          if (i != null) {
            this.linkRange = new be(e.index - l, i.length());
            const a = re.formats(i.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const c = this.quill.getBounds(this.linkRange);
            c != null && this.position(c);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
_(ta, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class ea extends Dn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Xg), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), qn), this.buildPickers(t.container.querySelectorAll("select"), qn), this.tooltip = new ta(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, r) => {
      t.handlers.link.call(t, !r.format.link);
    }));
  }
}
ea.DEFAULTS = se({}, Dn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          if (n) {
            const t = this.quill.getSelection();
            if (t == null || t.length === 0) return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) && e.indexOf("mailto:") !== 0 && (e = `mailto:${e}`);
            const {
              tooltip: r
            } = this.quill.theme;
            r.edit("link", e);
          } else
            this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
N.register({
  "attributors/attribute/direction": ko,
  "attributors/class/align": Co,
  "attributors/class/background": gd,
  "attributors/class/color": dd,
  "attributors/class/direction": Bo,
  "attributors/class/font": $o,
  "attributors/class/size": Po,
  "attributors/style/align": Io,
  "attributors/style/background": Ri,
  "attributors/style/color": Ii,
  "attributors/style/direction": Mo,
  "attributors/style/font": jo,
  "attributors/style/size": Uo
}, !0);
N.register({
  "formats/align": Co,
  "formats/direction": Bo,
  "formats/indent": sg,
  "formats/background": Ri,
  "formats/color": Ii,
  "formats/font": $o,
  "formats/size": Po,
  "formats/blockquote": oi,
  "formats/code-block": nt,
  "formats/header": ai,
  "formats/list": Mn,
  "formats/bold": On,
  "formats/code": ki,
  "formats/italic": ci,
  "formats/link": re,
  "formats/script": ui,
  "formats/strike": hi,
  "formats/underline": fi,
  "formats/formula": mr,
  "formats/image": di,
  "formats/video": br,
  "modules/syntax": Vo,
  "modules/table": lg,
  "modules/toolbar": ji,
  "themes/bubble": Jo,
  "themes/snow": ea,
  "ui/icons": qn,
  "ui/picker": Br,
  "ui/icon-picker": Zo,
  "ui/color-picker": Wo,
  "ui/tooltip": Xo
}, !0);
const Yg = N.import("delta"), lp = ia({
  name: "QuillEditor",
  inheritAttrs: !1,
  props: {
    content: {
      type: [String, Object]
    },
    contentType: {
      type: String,
      default: "delta",
      validator: (n) => ["delta", "html", "text"].includes(n)
    },
    enable: {
      type: Boolean,
      default: !0
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      required: !1
    },
    theme: {
      type: String,
      default: "snow",
      validator: (n) => ["snow", "bubble", ""].includes(n)
    },
    id: {
      type: [String, Array, Object],
      required: !1,
      validator: (n) => typeof n == "string" && n !== "" ? n.charAt(0) === "#" : !0
    },
    modules: {
      type: Object,
      required: !1
    },
    options: {
      type: Object,
      required: !1
    },
    globalOptions: {
      type: Object,
      required: !1
    }
  },
  emits: [
    "textChange",
    "selectionChange",
    "editorChange",
    "update:content",
    "focus",
    "blur",
    "ready"
  ],
  setup: (n, t) => {
    la(() => {
      l();
    }), oa(() => {
      e = null;
    });
    let e, r;
    const s = Ui(), i = (x, B) => {
      N != null && N.imports && x in N.imports || N.register(x, B);
    }, l = () => {
      var x;
      if (s.value) {
        if (r = a(), n.modules)
          if (Array.isArray(n.modules))
            for (const B of n.modules)
              i(`modules/${B.name}`, B.module);
          else
            i(`modules/${n.modules.name}`, n.modules.module);
        e = new N(s.value, r), S(n.content), e.on("text-change", d), e.on("selection-change", b), e.on("editor-change", v), n.theme !== "bubble" && s.value.classList.remove("ql-bubble"), n.theme !== "snow" && s.value.classList.remove("ql-snow"), (x = e.getModule("toolbar")) === null || x === void 0 || x.container.addEventListener("mousedown", (B) => {
          ["picker-hue-range-slider", "picker-opacity-slider"].includes(
            B.target.getAttribute("class")
          ) || B.target.tagName === "INPUT" || B.preventDefault();
        }), t.emit("ready", e);
      }
    }, a = () => {
      const x = {};
      if (n.theme !== "" && (x.theme = n.theme), n.readOnly && (x.readOnly = n.readOnly), n.placeholder && (x.placeholder = n.placeholder), n.id && n.id !== "" && (x.modules = {
        toolbar: n.id
      }), n.modules) {
        const B = (() => {
          var G, Yt;
          const oe = {};
          if (Array.isArray(n.modules))
            for (const Te of n.modules)
              oe[Te.name] = (G = Te.options) !== null && G !== void 0 ? G : {};
          else
            oe[n.modules.name] = (Yt = n.modules.options) !== null && Yt !== void 0 ? Yt : {};
          return oe;
        })();
        x.modules = Object.assign({}, x.modules, B);
      }
      return Object.assign({}, n.globalOptions, n.options, x);
    }, c = (x) => typeof x == "object" && x ? x.slice() : x, h = (x) => Object.values(x.ops).some((B) => !B.retain || Object.keys(B).length !== 1);
    let f;
    const m = (x) => {
      if (typeof f == typeof x) {
        if (x === f)
          return !0;
        if (typeof x == "object" && x && typeof f == "object" && f)
          return !h(f.diff(x));
      }
      return !1;
    }, d = (x, B, G) => {
      f = c(T()), m(n.content) || t.emit("update:content", f), t.emit("textChange", { delta: x, oldContents: B, source: G });
    }, p = Ui(), b = (x, B, G) => {
      p.value = !!(e != null && e.hasFocus()), t.emit("selectionChange", { range: x, oldRange: B, source: G });
    };
    Ss(p, (x) => {
      x ? t.emit("focus", s) : t.emit("blur", s);
    });
    const v = (...x) => {
      x[0] === "text-change" && t.emit("editorChange", {
        name: x[0],
        delta: x[1],
        oldContents: x[2],
        source: x[3]
      }), x[0] === "selection-change" && t.emit("editorChange", {
        name: x[0],
        range: x[1],
        oldRange: x[2],
        source: x[3]
      });
    }, y = () => s.value, E = () => {
      var x;
      return (x = e == null ? void 0 : e.getModule("toolbar")) === null || x === void 0 ? void 0 : x.container;
    }, w = () => {
      if (e) return e;
      throw `The quill editor hasn't been instantiated yet,
                  make sure to call this method when the editor ready
                  or use v-on:ready="onReady(quill)" event instead.`;
    }, T = (x, B) => n.contentType === "html" ? M() : n.contentType === "text" ? L(x, B) : e == null ? void 0 : e.getContents(x, B), S = (x, B = "api") => {
      const G = x || (n.contentType === "delta" ? new Yg() : "");
      n.contentType === "html" ? P(G) : n.contentType === "text" ? R(G, B) : e == null || e.setContents(G, B), f = c(G);
    }, L = (x, B) => {
      var G;
      return (G = e == null ? void 0 : e.getText(x, B)) !== null && G !== void 0 ? G : "";
    }, R = (x, B = "api") => {
      e == null || e.setText(x, B);
    }, M = () => {
      var x;
      return (x = e == null ? void 0 : e.root.innerHTML) !== null && x !== void 0 ? x : "";
    }, P = (x) => {
      e && (e.root.innerHTML = x);
    }, pt = (x, B = "api") => {
      const G = e == null ? void 0 : e.clipboard.convert(x);
      G && (e == null || e.setContents(G, B));
    }, Ot = () => {
      e == null || e.focus();
    }, jt = () => {
      Fi(() => {
        var x;
        !t.slots.toolbar && e && ((x = e.getModule("toolbar")) === null || x === void 0 || x.container.remove()), l();
      });
    };
    return Ss(
      () => n.content,
      (x) => {
        if (!e || !x || m(x)) return;
        const B = e.getSelection();
        B && Fi(
          () => e == null ? void 0 : e.setSelection(B)
        ), S(x);
      },
      { deep: !0 }
    ), Ss(
      () => n.enable,
      (x) => {
        e && e.enable(x);
      }
    ), {
      editor: s,
      getEditor: y,
      getToolbar: E,
      getQuill: w,
      getContents: T,
      setContents: S,
      getHTML: M,
      setHTML: P,
      pasteHTML: pt,
      focus: Ot,
      getText: L,
      setText: R,
      reinit: jt
    };
  },
  render() {
    var n, t;
    return [
      (t = (n = this.$slots).toolbar) === null || t === void 0 ? void 0 : t.call(n),
      aa("div", Object.assign({ ref: "editor" }, this.$attrs))
    ];
  }
});
export {
  N as Q,
  lp as a
};
