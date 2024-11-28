const d = (n) => {
  const o = /^rgb\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)\)$/i;
  if (!o.test(n))
    return null;
  const t = o.exec(n);
  if (!t)
    return null;
  const e = parseInt(t[1].trim(), 10), r = parseInt(t[2].trim(), 10), s = parseInt(t[3].trim(), 10);
  return {
    r: e,
    g: r,
    b: s
  };
}, m = (n) => {
  const o = /^rgba?\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),(\s*[\d.]+\s*)\)$/i;
  if (!o.test(n))
    return null;
  const t = o.exec(n);
  if (!t)
    return null;
  const e = parseInt(t[1].trim(), 10), r = parseInt(t[2].trim(), 10), s = parseInt(t[3].trim(), 10), i = parseFloat(t[4].trim());
  return {
    r: e,
    g: r,
    b: s,
    a: i
  };
}, x = (n) => {
  const o = /^#?([a-f\d]{8})$/i;
  if (!o.test(n))
    return null;
  const t = o.exec(n);
  if (!t)
    return null;
  const e = t[1], r = e.substring(6, 8), s = parseInt(e.substring(0, 2), 16), i = parseInt(e.substring(2, 4), 16), c = parseInt(e.substring(4, 6), 16), f = parseInt(r, 16) / 255;
  return { r: s, g: i, b: c, a: f };
}, p = (n, o, t, e) => {
  function r(a) {
    const u = a.toString(16);
    return u.length === 1 ? "0" + u : u;
  }
  const s = r(Math.round(n)), i = r(Math.round(o)), c = r(Math.round(t)), f = r(Math.round(e * 255));
  return `#${s}${i}${c}${f}`;
}, h = (n) => {
  var o;
  try {
    let t = (o = n.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      // @ts-ignore
      (i, c, f, a) => "#" + c + c + f + f + a + a
    ).substring(1).match(/.{2}/g)) == null ? void 0 : o.map((i) => parseInt(i, 16)), e = t == null ? void 0 : t[0], r = t == null ? void 0 : t[1], s = t == null ? void 0 : t[2];
    return Number.isNaN(e) || Number.isNaN(r) || Number.isNaN(s) || e === void 0 || r === void 0 || s === void 0 ? null : {
      r: e,
      g: r,
      b: s
    };
  } catch {
    return null;
  }
}, M = (n, o, t) => {
  n = n / 255, o = o / 255, t = t / 255;
  const e = Math.max(n, o, t), r = Math.min(n, o, t);
  let s;
  return e === n ? s = (o - t) / (e - r) : e === o ? s = 2 + (t - n) / (e - r) : s = 4 + (n - o) / (e - r), s *= 60, s < 0 && (s += 360), Number.isNaN(s) && (s = 0), s;
}, b = (n, o, t) => {
  o = o / 100, t = t / 100;
  let e, r, s, i = [];
  return e = (1 - Math.abs(2 * t - 1)) * o, r = e * (1 - Math.abs(n / 60 % 2 - 1)), s = t - e / 2, n >= 0 && n < 60 && (i = [e, r, 0]), n >= 60 && n < 120 && (i = [r, e, 0]), n >= 120 && n < 180 && (i = [0, e, r]), n >= 180 && n < 240 && (i = [0, r, e]), n >= 240 && n < 300 && (i = [r, 0, e]), n >= 300 && n <= 360 && (i = [e, 0, r]), i.map((c) => Math.round(255 * (c + s)));
}, g = (n, o, t) => "#" + (16777216 + (t | o << 8 | n << 16)).toString(16).slice(1), N = (n, o, t) => {
  let e = b(n, o, t);
  return { rgb: e, hexA: g(e[0], e[1], e[2]) };
}, I = (n, o, t) => {
  let e, r, s, i, c, f, a = 0, u = [];
  for (u[0] = n / 255, u[1] = o / 255, u[2] = t / 255, e = u[0], r = u[0], f = 0, s = 0; s < u.length - 1; s++)
    u[s + 1] <= e && (e = u[s + 1]), u[s + 1] >= r && (r = u[s + 1], f = s + 1);
  return f === 0 && (a = (u[1] - u[2]) / (r - e)), f === 1 && (a = 2 + (u[2] - u[0]) / (r - e)), f === 2 && (a = 4 + (u[0] - u[1]) / (r - e)), isNaN(a) && (a = 0), a = a * 60, a < 0 && (a = a + 360), i = (e + r) / 2, e === r ? c = 0 : i < 0.5 ? c = (r - e) / (r + e) : c = (r - e) / (2 - r - e), c = c, { h: a, s: c, l: i };
}, R = (n, o, t) => {
  n = n % 360 / 360, o = Math.min(1, Math.max(0, o)), t = Math.min(1, Math.max(0, t));
  let e, r, s;
  if (o === 0)
    e = r = s = t;
  else {
    const i = (a, u, l) => (l < 0 && (l += 1), l > 1 && (l -= 1), l < 0.16666666666666666 ? a + (u - a) * 6 * l : l < 0.5 ? u : l < 0.6666666666666666 ? a + (u - a) * (0.6666666666666666 - l) * 6 : a), c = t < 0.5 ? t * (1 + o) : t + o - t * o, f = 2 * t - c;
    e = i(f, c, n + 0.3333333333333333), r = i(f, c, n), s = i(f, c, n - 0.3333333333333333);
  }
  return e = Math.round(e * 255), r = Math.round(r * 255), s = Math.round(s * 255), { r: e, g: r, b: s };
};
export {
  x as hex8ToRgba,
  h as hexToRgb,
  N as hsl2Hex,
  b as hsl2Rgb,
  R as hslToRgb,
  d as parseRgb,
  m as parseRgba,
  g as rgb2Hex,
  I as rgbToHsl,
  M as rgbToHue,
  p as rgbaToHex8
};
