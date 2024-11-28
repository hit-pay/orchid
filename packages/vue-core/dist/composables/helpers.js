const k = (e) => {
  let i = {};
  try {
    document.cookie.split(";").forEach(function(n) {
      let [t, c] = n.split("=");
      i[t.trim()] = c;
    });
  } catch (n) {
    console.log(n);
  }
  return i[e] ?? "";
}, p = (e, i, n = 9600) => {
  let t = /* @__PURE__ */ new Date();
  t.setTime(t.getTime() + n * 60 * 60 * 1e3);
  try {
    document.cookie = `${e}=${i};expires=${t.toUTCString()};path=/;domain=.${window.location.hostname};Secure;SameSite=Lax`;
  } catch (c) {
    console.log(c);
  }
}, m = (e, i = {}) => {
  const { isAmountInput: n } = i, t = [];
  n && t.push(["."]), !(e.key >= "0" && e.key <= "9" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Tab" || e.key === "Backspace" || e.key.startsWith("F") && e.key.length > 1 && !isNaN(e.key.substring(1)) || e.metaKey || t.includes(e.key)) && e.preventDefault();
}, a = (e, i) => {
  const n = e.match(/oc-emit/), t = e.match(/oc-end-emit/);
  if (n && t) {
    let c = e.substring(n.index, t.index) + "oc-end-emit", o = e.substring(n.index, t.index).replace("[", "").replace("]", "").replace("oc-emit", ""), r = `<span class="underline font-medium">${o.split("|")[2].replace("-", " ")}</span>`;
    return i && i(c, o.split("|")), e.replace(c, r);
  } else
    return e;
}, u = (e, i) => {
  let n = document.createElement("div");
  n.innerHTML = e;
  let t = n.textContent || n.innerText || "";
  n.remove();
  const c = t.match(/oc-link/), o = t.match(/oc-end-link/);
  if (c && o) {
    let r = t.substring(c.index, o.index) + "oc-end-link", l = t.substring(c.index, o.index).replace("[", "").replace("]", "").replace("oc-link", ""), s = `<a target="_blank" class="text-oc-accent-1" href="${l.split("|")[1]}">${l.split("|")[0].replace("-", " ")}</a>`;
    return t.replace(r, s);
  } else
    return a(t, i);
};
export {
  k as getCookie,
  a as getTextWithAction,
  u as getTextWithLink,
  m as preventEventIfNotNumberInput,
  p as setCookie
};
