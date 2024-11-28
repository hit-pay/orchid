import { ref as x, computed as P, openBlock as o, createElementBlock as u, createElementVNode as i, createVNode as v, unref as n, createCommentVNode as k, createBlock as B, normalizeStyle as M, withCtx as D, Fragment as A, renderList as T, normalizeClass as y, renderSlot as N, onMounted as L, mergeProps as q, toDisplayString as V } from "vue";
import "dayjs";
import { D as G, _ as H, B as J } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as I } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import { useUploadFileProgress as K } from "./composables/uploadFileProgress.js";
import { ModalCropper as Q } from "./Cropper.js";
import { _ as W } from "./OcDraggable-CvV_Pgrx.js";
import { _ as X } from "./OcConfirmationModal-dA5mxfha.js";
import "@popperjs/core";
const Y = { class: "relative min-h-[100px]" }, Z = {
  key: 0,
  class: "absolute"
}, _ = { class: "w-[100px] hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center" }, ee = ["accept", "multiple"], te = ["onClick"], le = { class: "py-2 flex flex-col" }, ae = ["onClick"], oe = ["onClick"], ne = { class: "z-[1009] hidden group-hover:flex absolute bg-black/30 w-full h-full top-0 left-0 rounded" }, ie = {
  key: 0,
  class: "cursor-pointer m-auto drag-el"
}, se = {
  __name: "OcSimpleMultipleUpload",
  props: {
    accept: {
      type: String,
      default: ""
    },
    uploadedImages: {
      type: Array,
      default: () => []
    },
    selectedImage: {
      type: Object,
      default: () => ({})
    },
    columnsCount: {
      type: Number,
      default: 3
    },
    inputOptions: Array,
    maxImages: Number
  },
  emits: [
    "change",
    "update:selectedImage",
    "update:uploadedImages",
    "onRemoveImage",
    "onEditImage",
    "delete",
    "onMaxFileExceed",
    "fileExist",
    "invalidFileType"
  ],
  setup(e, { emit: z }) {
    const d = e, m = z, b = x([]), f = x(!1), p = x(""), F = x({}), h = P(() => d.uploadedImages[p.value].fileUrl), $ = x(!1), w = x(""), U = (r) => {
      $.value = !0, w.value = r;
    }, O = x(!1), S = () => {
      const r = d.uploadedImages.find((a, c) => c === w.value);
      r.current ? m("onRemoveImage", r) : (m("delete", w.value), O.value = !0, setTimeout(() => {
        O.value = !1;
      }, 1e3)), m(
        "update:uploadedImages",
        d.uploadedImages.filter((a, c) => c !== w.value)
      ), $.value = !1;
    }, s = (r) => {
      const a = d.uploadedImages[p.value];
      a.fileUrl = r, a.fileName = Date.now(), m("onEditImage", { ...a, index: p.value }), f.value = !1, p.value = "", F.value = {};
    }, t = (r) => {
      let a = d.uploadedImages[p.value];
      Object.keys(r).forEach((c) => {
        a[c] = r[c];
      }), m("update:uploadedImages", d.uploadedImages);
    }, l = (r) => {
      let a = d.uploadedImages.length + r.target.files.length > d.maxImages;
      if (d.maxImages && a) {
        m("onMaxFileExceed", a);
        return;
      }
      m("change", r);
    }, E = P(
      () => d.maxImages == null || d.maxImages && d.uploadedImages.length < d.maxImages
    ), R = (r, a) => {
      var c;
      p.value = r, (c = d.inputOptions) == null || c.forEach((g) => {
        F.value[g] = a[g];
      }), b[r] = !1, f.value = !0;
    };
    return (r, a) => (o(), u("div", Y, [
      E.value ? (o(), u("label", Z, [
        i("div", _, [
          v(n(I), { name: "plus" })
        ]),
        O.value ? k("", !0) : (o(), u("input", {
          key: 0,
          class: "hidden",
          type: "file",
          accept: e.accept || "image/png, image/jpeg",
          multiple: d.maxImages !== 1,
          onChange: l
        }, null, 40, ee))
      ])) : k("", !0),
      (o(), B(n(W), {
        key: e.uploadedImages.length,
        "model-value": e.uploadedImages,
        filter: "filtered-el",
        class: "grid w-fit grid-cols-3 gap-3",
        style: M(`grid-template-columns: repeat(${e.columnsCount}, 1fr)`),
        "onUpdate:modelValue": a[0] || (a[0] = (c) => r.$emit("update:uploadedImages", c))
      }, {
        default: D(({ list: c }) => [
          (o(!0), u(A, null, T(c, (g, C) => (o(), u("div", {
            key: g.fileName,
            class: y(["w-[100px] group relative cursor-pointer aspect-square border rounded border-oc-accent-1-100 bg-cover bg-center", {
              "border-oc-primary": e.selectedImage.fileName === g.fileName,
              "col-start-2": C === 0 && E.value
            }]),
            style: M(`background-image: url(${g.fileUrl})`),
            onClick: (j) => r.$emit("update:selectedImage", g)
          }, [
            v(n(G), {
              modelValue: b.value[C],
              "onUpdate:modelValue": (j) => b.value[C] = j,
              placement: "bottom-end",
              class: "absolute top-2 right-2 z-[1010] hidden group-hover:flex"
            }, {
              menu: D(() => [
                N(r.$slots, "action", {
                  item: g,
                  removeItem: U,
                  fileIndex: C
                }, () => [
                  i("div", le, [
                    i("div", {
                      class: "flex p-3 cursor-pointer items-center gap-x-3",
                      onClick: (j) => R(C, g)
                    }, [
                      v(n(I), {
                        width: "16",
                        height: "16",
                        name: "pencil"
                      }),
                      a[4] || (a[4] = i("span", null, "Edit Image", -1))
                    ], 8, ae),
                    i("div", {
                      class: "flex p-3 cursor-pointer items-center text-oc-error gap-x-3",
                      onClick: () => {
                        U(C), b.value[C] = !1;
                      }
                    }, [
                      v(n(I), {
                        width: "16",
                        height: "16",
                        name: "bin"
                      }),
                      a[5] || (a[5] = i("span", null, "Delete", -1))
                    ], 8, oe)
                  ])
                ])
              ]),
              default: D(() => [
                v(n(I), {
                  name: "dots-vertical",
                  class: "absolute right-0 cursor-pointer w-[32px] flex h-[32px] items-center justify-center text-oc-bg-light"
                })
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"]),
            i("div", {
              class: y(["absolute transition-all duration-500 top-0 left-0 flex items-center justify-center w-full h-full", g.progress !== 100 ? "bg-black/[.35]" : "bg-black/0"])
            }, [
              i("div", {
                class: y(["h-[6px] w-[72px] bg-white transition-all rounded-full", { "on-end-loading opacity-0": g.progress === 100 }])
              }, [
                i("div", {
                  class: "h-full bg-oc-primary rounded-full w-0 transition-all duration-500",
                  style: M({ width: `${g.progress || 0}%` })
                }, null, 4)
              ], 2)
            ], 2),
            i("div", ne, [
              d.maxImages !== 1 ? (o(), u("span", ie, [
                v(n(I), {
                  name: "arrows",
                  class: "text-oc-accent-1-50"
                })
              ])) : k("", !0)
            ])
          ], 14, te))), 128))
        ]),
        _: 3
      }, 8, ["model-value", "style"])),
      f.value ? (o(), B(n(Q), {
        key: 1,
        modelValue: f.value,
        "onUpdate:modelValue": a[1] || (a[1] = (c) => f.value = c),
        img: h.value,
        "input-options": e.inputOptions,
        "input-option-values": F.value,
        onClose: a[2] || (a[2] = () => {
          f.value = !1, p.value = "";
        }),
        onChangeImage: s,
        "onUpdate:inputOptions": t
      }, null, 8, ["modelValue", "img", "input-options", "input-option-values"])) : k("", !0),
      v(n(X), {
        modelValue: $.value,
        "onUpdate:modelValue": a[3] || (a[3] = (c) => $.value = c),
        description: "Do you want to delete this image ?",
        onConfirm: S
      }, null, 8, ["modelValue"])
    ]));
  }
}, re = { class: "flex flex-col gap-y-2" }, de = ["accept"], ue = { class: "input-file-uploaded flex flex-col gap-y-3" }, ce = { class: "flex items-center gap-x-3" }, me = { class: "flex flex-col items-center justify-center text-oc-text-300" }, pe = { class: "uppercase text-[8px] font-bold leading-none block" }, ge = { class: "text-oc-text-400 text-sm" }, fe = { class: "w-[100px] h-[6px] bg-oc-accent-1-50 rounded-full overflow-hidden transition-all duration-1000" }, ve = ["accept"], xe = {
  key: 1,
  class: "w-full text-oc-text-300 text-sm h-full flex-1 flex flex-col justify-center items-center my-auto min-h-[120px] transition-all duration-300 gap-2"
}, be = { key: 0 }, he = { key: 1 }, ye = {
  key: 2,
  class: "text-center"
}, Ie = {
  key: 2,
  class: "mt-3 flex items-center justify-center"
}, Pe = {
  __name: "OcMultipleUploadFile",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    accept: {
      type: String,
      default: ""
    },
    validateAcceptFileType: Boolean,
    /**
     * Maximum file size in MB
     */
    maxSize: Number,
    maxImages: Number,
    hint: String,
    label: String,
    errorMessage: String,
    isImageOnly: Boolean,
    columnsCount: Number,
    selectedImage: {
      type: Object,
      default: () => ({})
    },
    inputOptions: Array,
    isDisabled: Boolean,
    labelUploadArea: String,
    isButtonOnly: Boolean,
    buttonUploadProps: {
      type: Object,
      default: () => ({
        label: "Upload"
      })
    }
  },
  emits: [
    "update:modelValue",
    "update:selectedImage",
    "onEditFile",
    "onRemoveFile",
    "onExceedMaxFileSize",
    "onMaxFileExceed"
  ],
  setup(e, { emit: z }) {
    const d = z, m = e, b = x(), f = x(!1), p = x(!1), { isErrorMaxSize: F, currentFiles: h, onChangeFile: $, onDeleteFile: w } = K(
      m.maxSize,
      d,
      m.accept,
      m.validateAcceptFileType
    );
    L(() => {
      const s = [];
      m.modelValue.length > 0 && (m.modelValue.forEach((t) => {
        t.current && s.push({
          current: t.current,
          file: null,
          fileName: t.current.caption ?? "",
          progress: 100,
          fileUrl: t.current.path,
          totalSize: t.current.file_size ?? 0,
          isLoaded: !0,
          extension: t.current.extension ?? "png",
          description: t.current.description,
          link: t.current.link,
          caption: t.current.caption,
          caption_variant: t.current.caption_variant,
          lightbox: t.current.lightbox
        });
      }), h.value = s);
    });
    const U = (s) => {
      p.value = !0, $(s);
    }, O = (s) => {
      p.value = !1, w(s);
    }, S = () => {
      var s;
      (s = b.value) == null || s.click();
    };
    return (s, t) => (o(), u("div", re, [
      v(n(H), {
        label: e.label,
        hint: e.hint,
        "error-message": n(F) ? `File(s) is more than ${e.maxSize}MB` : e.errorMessage
      }, {
        hint: D(() => [
          N(s.$slots, "hint")
        ]),
        default: D(() => [
          e.isImageOnly ? (o(), B(se, {
            key: 0,
            "uploaded-images": n(h),
            "selected-image": e.selectedImage,
            "columns-count": e.columnsCount,
            accept: e.accept,
            "input-options": e.inputOptions,
            "max-images": e.maxImages,
            onChange: n($),
            "onUpdate:selectedImage": t[0] || (t[0] = (l) => s.$emit("update:selectedImage", l)),
            "onUpdate:uploadedImages": t[1] || (t[1] = (l) => {
              h.value = l, s.$emit("update:modelValue", l);
            }),
            onOnEditImage: t[2] || (t[2] = (l) => s.$emit("onEditFile", l)),
            onOnRemoveImage: t[3] || (t[3] = (l) => s.$emit("onRemoveFile", l)),
            onDelete: n(w),
            onOnMaxFileExceed: t[4] || (t[4] = (l) => s.$emit("onMaxFileExceed", l))
          }, {
            action: D((l) => [
              N(s.$slots, "action", {
                item: l.item,
                removeItem: l.removeItem,
                fileIndex: l.i
              })
            ]),
            _: 3
          }, 8, ["uploaded-images", "selected-image", "columns-count", "accept", "input-options", "max-images", "onChange", "onDelete"])) : e.isButtonOnly ? (o(), u(A, { key: 1 }, [
            N(s.$slots, "button", { triggerInput: S }, () => [
              v(n(J), q(e.buttonUploadProps, { onClick: S }), null, 16)
            ]),
            i("input", {
              id: "my-file",
              ref_key: "inputRef",
              ref: b,
              class: "hidden",
              type: "file",
              multiple: "",
              accept: e.accept,
              onChange: U
            }, null, 40, de)
          ], 64)) : (o(), u("div", {
            key: 2,
            class: y(["relative border rounded p-3 min-w-[30rem] flex flex-col", [
              n(F) || e.errorMessage ? "border-oc-error" : "border-oc-gray-200",
              {
                "bg-oc-bg-dark": e.isDisabled
              }
            ]])
          }, [
            i("div", ue, [
              (o(!0), u(A, null, T(n(h), (l, E) => (o(), u("div", {
                key: `${E}-${l.fileName}`,
                class: "flex justify-between relative items-center w-full last:mb-2"
              }, [
                i("div", ce, [
                  i("div", me, [
                    v(n(I), {
                      name: "file-extension",
                      width: "14",
                      height: "10"
                    }),
                    i("span", pe, V(l.extension), 1)
                  ]),
                  i("span", ge, V(l == null ? void 0 : l.fileName), 1)
                ]),
                p.value ? (o(), u("div", {
                  key: 0,
                  class: y(["w-[100px] h-[16px] absolute right-0 flex items-center z-40", { "on-end-loading": l.progress === 100 }])
                }, [
                  i("div", fe, [
                    i("div", {
                      style: M({ width: `${l.progress}%` }),
                      class: "block transition-all duration-1000 h-[6px] rounded-full bg-oc-primary"
                    }, null, 4)
                  ])
                ], 2)) : k("", !0),
                e.isDisabled ? k("", !0) : (o(), B(n(I), {
                  key: 1,
                  width: "12",
                  height: "12",
                  name: "bin",
                  class: y(["opacity-0 text-oc-error cursor-pointer absolute right-0", {
                    "on-enable-delete": l.progress === 100 && p.value,
                    "opacity-100": !p.value
                  }]),
                  onClick: (R) => O(E)
                }, null, 8, ["class", "onClick"]))
              ]))), 128))
            ]),
            i("label", {
              tabindex: "0",
              for: "my-file",
              class: y(["relative overflow-hidden rounded-sm flex-1 flex flex-col transition-all border-transparent border-dashed hover:border-oc-primary", {
                "!border-oc-primary": f.value && !e.isDisabled,
                border: !n(h).length,
                "cursor-pointer": !e.isDisabled
              }])
            }, [
              e.isDisabled ? k("", !0) : (o(), u("input", {
                key: 0,
                id: "my-file",
                ref_key: "inputRef",
                ref: b,
                class: "w-full h-full absolute opacity-0 cursor-pointer",
                type: "file",
                multiple: "",
                accept: e.accept,
                onDragover: t[5] || (t[5] = (l) => f.value = !0),
                onDragleave: t[6] || (t[6] = (l) => f.value = !1),
                onDrop: t[7] || (t[7] = (l) => f.value = !1),
                onChange: U
              }, null, 40, ve)),
              n(h).length ? e.isDisabled ? k("", !0) : (o(), u("div", Ie, t[9] || (t[9] = [
                i("span", { class: "text-oc-accent-1 text-sm" }, "+ Add more", -1)
              ]))) : (o(), u("div", xe, [
                v(n(I), {
                  name: "upload",
                  class: y(e.isDisabled ? "text-oc-accent-1-200" : "text-oc-accent-1")
                }, null, 8, ["class"]),
                e.labelUploadArea ? (o(), u("div", be, V(e.labelUploadArea), 1)) : e.isDisabled ? (o(), u("div", he, "Upload disabled")) : (o(), u("div", ye, [
                  t[8] || (t[8] = i("div", null, "Select documents or drag here", -1)),
                  i("div", null, "File max " + V(e.maxSize) + "MB", 1)
                ]))
              ]))
            ], 2)
          ], 2))
        ]),
        _: 3
      }, 8, ["label", "hint", "error-message"])
    ]));
  }
};
export {
  Pe as _
};
