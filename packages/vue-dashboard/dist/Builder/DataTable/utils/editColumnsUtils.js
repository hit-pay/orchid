const r = (t = [], i = []) => {
  const c = {
    fixed: {},
    active: {}
  };
  return t.forEach((e) => {
    c.fixed[e.key] = e.isActive;
  }), i.forEach((e) => {
    c.active[e.key] = e.isActive;
  }), JSON.stringify(c);
}, n = (t, i, c) => {
  const e = t ? JSON.parse(t) : null;
  return e ? [...Object.keys(e.fixed), ...Object.keys(e.active)].length !== i.length ? (localStorage.removeItem(c), { fixed: null, active: null }) : {
    fixed: Object.keys(e.fixed).map((o) => ({
      ...i.find((a) => a.key === o) || {},
      isActive: e.fixed[o]
    })),
    active: Object.keys(e.active).map((o) => ({
      ...i.find((a) => a.key === o) || {},
      isActive: e.active[o]
    }))
  } : { fixed: null, active: null };
}, s = (t, i) => localStorage.setItem(t, i), l = (t) => localStorage.getItem(t);
export {
  n as formatHeadersFromLocalStorage,
  r as formatHeadersToLocalStorage,
  l as getFromLocalStorage,
  s as setInLocalStorage
};
