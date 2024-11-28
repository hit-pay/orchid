import { ref as p } from "vue";
const g = (u, n) => {
  const d = n.split(","), f = u.name.split(".").pop().toLowerCase();
  return d.find((t) => t.includes(f));
}, h = (u, n, d, f = !1) => {
  const t = p([]), c = p(!1), v = (l, o = !1) => {
    const e = [...l.target.files].filter((a) => {
      const s = !t.value.some((i) => i.fileName === a.name);
      if (s || n("fileExist"), f) {
        const i = g(a, d);
        return i || n("invalidFileType"), s && i;
      } else
        return s;
    });
    if (c.value = e.reduce((a, s) => a + s.size, 0) > u * 1024 * 1024, c.value) {
      n("onExceedMaxFileSize", e);
      return;
    }
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = new FileReader();
      new FormData().append("file", s), t.value.unshift({
        file: s,
        fileName: s.name,
        link: s.link,
        progress: 0,
        fileUrl: "",
        totalSize: 0,
        isLoaded: !1,
        extension: s.name.split(".").at(-1) || "png"
      }), n("update:modelValue", o ? t.value[0] : t.value), s && (F(i, a), i.readAsDataURL(s));
    }
  }, r = (l, o, e) => {
    if (!l.type) return;
    const a = () => {
      t.value[e].totalSize = l.total;
    }, s = () => {
      t.value[e].fileUrl = o.result, t.value[e].isLoaded = !0;
    };
    ({
      loadstart: a,
      loadend: s,
      load: s,
      progress: () => {
        t.value[e].progress = Number((l.loaded / t.value[e].totalSize).toFixed(2)) * 100;
      }
    })[l.type]();
  }, F = (l, o) => {
    l.addEventListener("loadstart", (e) => r(e, l, o)), l.addEventListener("load", (e) => r(e, l, o)), l.addEventListener("loadend", (e) => r(e, l, o)), l.addEventListener("progress", (e) => r(e, l, o)), l.addEventListener("error", (e) => r(e, l, o)), l.addEventListener("abort", (e) => r(e, l, o));
  };
  return {
    isErrorMaxSize: c,
    currentFiles: t,
    onChangeFile: v,
    onDeleteFile: (l) => {
      let o = t.value.find((e, a) => a === l);
      t.value = t.value.filter((e) => e !== o), n("onRemoveFile", o), n("update:modelValue", t.value.length > 0 ? t.value : null);
    }
  };
};
export {
  h as useUploadFileProgress
};
