import { computed as z, openBlock as o, createBlock as M, unref as i, withCtx as w, createVNode as x, createSlots as P, renderSlot as D, createElementBlock as d, normalizeClass as I, createCommentVNode as k, createElementVNode as s, ref as h, normalizeStyle as j, Fragment as A, renderList as R, onMounted as T, mergeProps as H, toDisplayString as N } from "vue";
import "dayjs";
import { m as Y } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as $ } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { z as G } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { q as J } from "./OcButton-Cnqik19l-BEVE67cg.js";
import { useUploadFileProgress as K } from "./composables/uploadFileProgress.js";
import { o as Q } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
import { A as W } from "./OcModalPage-DXBxFH5r-BzMbZ6wJ-BpH2S3gg.js";
import { _ as X } from "./OcDraggable--llAnAP0.js";
import { ModalCropper as Z } from "./Cropper.js";
const _ = { class: "text-center" }, ee = ["innerHTML"], te = {
  __name: "OcConfirmation",
  props: {
    description: String,
    iconClass: String,
    variant: {
      type: String,
      default: "delete"
    },
    hideIcon: {
      type: Boolean,
      default: !1
    },
    icon: String,
    contentClass: String
  },
  setup(e) {
    const S = {
      delete: "bin",
      warning: "alert",
      success: "check-2",
      question: "question-mark"
    }, n = {
      delete: "text-oc-error bg-oc-error-50-tr",
      warning: "text-oc-warning-600 bg-oc-warning-50-tr",
      success: "text-oc-success bg-oc-success-50-tr",
      question: "text-oc-accent-1 bg-oc-accent-1-50-tr"
    };
    return (u, b) => (o(), d("div", {
      class: I(["flex flex-col gap-y-4 items-center", e.contentClass])
    }, [
      e.hideIcon ? k("", !0) : (o(), d("div", {
        key: 0,
        class: I(["w-[48px] aspect-square rounded-full flex items-center justify-center", [n[e.variant], e.iconClass]])
      }, [
        x(i(Y), {
          name: e.icon ?? S[e.variant]
        }, null, 8, ["name"])
      ], 2)),
      s("div", _, [
        D(u.$slots, "description", {}, () => [
          s("span", { innerHTML: e.description }, null, 8, ee)
        ])
      ])
    ], 2));
  }
}, le = {
  __name: "OcConfirmationModal",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "Are you sure?"
    },
    iconClass: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "delete"
    },
    icon: String,
    labelConfirm: String,
    labelCancel: String,
    isLoading: {
      type: Boolean,
      default: !1
    },
    hideIcon: {
      type: Boolean,
      default: !1
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    contentClass: String,
    confirmButtonProps: Object
  },
  emits: ["confirm", "cancel", "update:model-value"],
  setup(e, { emit: S }) {
    const n = e, u = S, b = z(() => ({
      delete: {},
      warning: {},
      success: {
        class: "hidden"
      },
      question: {
        label: "No"
      }
    })), g = z(() => ({
      delete: {
        label: "Delete",
        variant: "destructive",
        isLoading: n.isLoading ?? !1
      },
      warning: {
        label: "Delete",
        variant: "destructive",
        isLoading: n.isLoading ?? !1
      },
      success: {
        isLoading: n.isLoading ?? !1
      },
      question: {
        label: "Yes",
        isLoading: n.isLoading ?? !1
      }
    })), p = (f) => {
      u("update:model-value", f), u("cancel");
    };
    return (f, v) => (o(), M(i(W), {
      size: "small",
      "model-value": e.modelValue,
      title: e.title,
      "is-borderless": "",
      persistent: e.persistent,
      "cancel-button-props": e.labelCancel ? {
        ...b.value[e.variant],
        label: e.labelCancel
      } : b.value[e.variant],
      "confirm-button-props": {
        ...e.labelConfirm ? {
          ...g.value[e.variant],
          label: e.labelConfirm
        } : g.value[e.variant],
        ...e.confirmButtonProps
      },
      "footer-class": "justify-center",
      "onUpdate:modelValue": p,
      onConfirm: v[0] || (v[0] = (C) => f.$emit("confirm")),
      onCancel: v[1] || (v[1] = (C) => f.$emit("cancel"))
    }, {
      default: w(() => [
        x(te, {
          "icon-class": e.iconClass,
          variant: e.variant,
          description: e.description,
          "content-class": e.contentClass,
          icon: e.icon,
          "hide-icon": e.hideIcon
        }, P({ _: 2 }, [
          f.$slots.description ? {
            name: "description",
            fn: w(() => [
              D(f.$slots, "description")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["icon-class", "variant", "description", "content-class", "icon", "hide-icon"])
      ]),
      _: 3
    }, 8, ["model-value", "title", "persistent", "cancel-button-props", "confirm-button-props"]));
  }
}, ne = { class: "relative min-h-[100px]" }, ae = {
  key: 0,
  class: "absolute"
}, oe = { class: "w-[100px] hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center" }, ie = ["accept", "multiple"], se = ["onClick"], re = { class: "py-2 flex flex-col" }, de = ["onClick"], ce = ["onClick"], ue = { class: "z-[1009] hidden group-hover:flex absolute bg-black/30 w-full h-full top-0 left-0 rounded" }, me = {
  key: 0,
  class: "cursor-pointer m-auto drag-el"
}, pe = {
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
  setup(e, { emit: S }) {
    const n = e, u = S, b = h([]), g = h(!1), p = h(""), f = h({}), v = z(() => n.uploadedImages[p.value].fileUrl), C = h(!1), F = h(""), U = (c) => {
      C.value = !0, F.value = c;
    }, V = h(!1), B = () => {
      const c = n.uploadedImages.find((a, m) => m === F.value);
      c.current ? u("onRemoveImage", c) : (u("delete", F.value), V.value = !0, setTimeout(() => {
        V.value = !1;
      }, 1e3)), u(
        "update:uploadedImages",
        n.uploadedImages.filter((a, m) => m !== F.value)
      ), C.value = !1;
    }, r = (c) => {
      const a = n.uploadedImages[p.value];
      a.fileUrl = c, a.fileName = Date.now(), u("onEditImage", { ...a, index: p.value }), g.value = !1, p.value = "", f.value = {};
    }, t = (c) => {
      let a = n.uploadedImages[p.value];
      Object.keys(c).forEach((m) => {
        a[m] = c[m];
      }), u("update:uploadedImages", n.uploadedImages);
    }, l = (c) => {
      let a = n.uploadedImages.length + c.target.files.length > n.maxImages;
      if (n.maxImages && a) {
        u("onMaxFileExceed", a);
        return;
      }
      u("change", c);
    }, E = z(
      () => n.maxImages == null || n.maxImages && n.uploadedImages.length < n.maxImages
    ), q = (c, a) => {
      var m;
      p.value = c, (m = n.inputOptions) == null || m.forEach((y) => {
        f.value[y] = a[y];
      }), b[c] = !1, g.value = !0;
    };
    return (c, a) => (o(), d("div", ne, [
      E.value ? (o(), d("label", ae, [
        s("div", oe, [
          x(i($), { name: "plus" })
        ]),
        V.value ? k("", !0) : (o(), d("input", {
          key: 0,
          class: "hidden",
          type: "file",
          accept: e.accept || "image/png, image/jpeg",
          multiple: n.maxImages !== 1,
          onChange: l
        }, null, 40, ie))
      ])) : k("", !0),
      (o(), M(i(X), {
        key: e.uploadedImages.length,
        "model-value": e.uploadedImages,
        filter: "filtered-el",
        class: "grid w-fit grid-cols-3 gap-3",
        style: j(`grid-template-columns: repeat(${e.columnsCount}, 1fr)`),
        "onUpdate:modelValue": a[0] || (a[0] = (m) => c.$emit("update:uploadedImages", m))
      }, {
        default: w(({ list: m }) => [
          (o(!0), d(A, null, R(m, (y, O) => (o(), d("div", {
            key: y.fileName,
            class: I(["w-[100px] group relative cursor-pointer aspect-square border rounded border-oc-accent-1-100 bg-cover bg-center", {
              "border-oc-primary": e.selectedImage.fileName === y.fileName,
              "col-start-2": O === 0 && E.value
            }]),
            style: j(`background-image: url(${y.fileUrl})`),
            onClick: (L) => c.$emit("update:selectedImage", y)
          }, [
            x(i(Q), {
              modelValue: b.value[O],
              "onUpdate:modelValue": (L) => b.value[O] = L,
              placement: "bottom-end",
              class: "absolute top-2 right-2 z-[1010] hidden group-hover:flex"
            }, {
              menu: w(() => [
                D(c.$slots, "action", {
                  item: y,
                  removeItem: U,
                  fileIndex: O
                }, () => [
                  s("div", re, [
                    s("div", {
                      class: "flex p-3 cursor-pointer items-center gap-x-3",
                      onClick: (L) => q(O, y)
                    }, [
                      x(i($), {
                        width: "16",
                        height: "16",
                        name: "pencil"
                      }),
                      a[4] || (a[4] = s("span", null, "Edit Image", -1))
                    ], 8, de),
                    s("div", {
                      class: "flex p-3 cursor-pointer items-center text-oc-error gap-x-3",
                      onClick: () => {
                        U(O), b.value[O] = !1;
                      }
                    }, [
                      x(i($), {
                        width: "16",
                        height: "16",
                        name: "bin"
                      }),
                      a[5] || (a[5] = s("span", null, "Delete", -1))
                    ], 8, ce)
                  ])
                ])
              ]),
              default: w(() => [
                x(i($), {
                  name: "dots-vertical",
                  class: "absolute right-0 cursor-pointer w-[32px] flex h-[32px] items-center justify-center text-oc-bg-light"
                })
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"]),
            s("div", {
              class: I(["absolute transition-all duration-500 top-0 left-0 flex items-center justify-center w-full h-full", y.progress !== 100 ? "bg-black/[.35]" : "bg-black/0"])
            }, [
              s("div", {
                class: I(["h-[6px] w-[72px] bg-white transition-all rounded-full", { "on-end-loading opacity-0": y.progress === 100 }])
              }, [
                s("div", {
                  class: "h-full bg-oc-primary rounded-full w-0 transition-all duration-500",
                  style: j({ width: `${y.progress || 0}%` })
                }, null, 4)
              ], 2)
            ], 2),
            s("div", ue, [
              n.maxImages !== 1 ? (o(), d("span", me, [
                x(i($), {
                  name: "arrows",
                  class: "text-oc-accent-1-50"
                })
              ])) : k("", !0)
            ])
          ], 14, se))), 128))
        ]),
        _: 3
      }, 8, ["model-value", "style"])),
      g.value ? (o(), M(i(Z), {
        key: 1,
        modelValue: g.value,
        "onUpdate:modelValue": a[1] || (a[1] = (m) => g.value = m),
        img: v.value,
        "input-options": e.inputOptions,
        "input-option-values": f.value,
        onClose: a[2] || (a[2] = () => {
          g.value = !1, p.value = "";
        }),
        onChangeImage: r,
        "onUpdate:inputOptions": t
      }, null, 8, ["modelValue", "img", "input-options", "input-option-values"])) : k("", !0),
      x(i(le), {
        modelValue: C.value,
        "onUpdate:modelValue": a[3] || (a[3] = (m) => C.value = m),
        description: "Do you want to delete this image ?",
        onConfirm: B
      }, null, 8, ["modelValue"])
    ]));
  }
}, ge = { class: "flex flex-col gap-y-2" }, fe = ["accept"], ve = { class: "input-file-uploaded flex flex-col gap-y-3" }, xe = { class: "flex items-center gap-x-3" }, be = { class: "flex flex-col items-center justify-center text-oc-text-300" }, ye = { class: "uppercase text-[8px] font-bold leading-none block" }, he = { class: "text-oc-text-400 text-sm" }, Ie = { class: "w-[100px] h-[6px] bg-oc-accent-1-50 rounded-full overflow-hidden transition-all duration-1000" }, Ce = ["accept"], ke = {
  key: 1,
  class: "w-full text-oc-text-300 text-sm h-full flex-1 flex flex-col justify-center items-center my-auto min-h-[120px] transition-all duration-300 gap-2"
}, $e = { key: 0 }, we = { key: 1 }, Se = {
  key: 2,
  class: "text-center"
}, Fe = {
  key: 2,
  class: "mt-3 flex items-center justify-center"
}, Te = {
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
  setup(e, { emit: S }) {
    const n = S, u = e, b = h(), g = h(!1), p = h(!1), { isErrorMaxSize: f, currentFiles: v, onChangeFile: C, onDeleteFile: F } = K(
      u.maxSize,
      n,
      u.accept,
      u.validateAcceptFileType
    );
    T(() => {
      const r = [];
      u.modelValue.length > 0 && (u.modelValue.forEach((t) => {
        t.current && r.push({
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
      }), v.value = r);
    });
    const U = (r) => {
      p.value = !0, C(r);
    }, V = (r) => {
      p.value = !1, F(r);
    }, B = () => {
      var r;
      (r = b.value) == null || r.click();
    };
    return (r, t) => (o(), d("div", ge, [
      x(i(G), {
        label: e.label,
        hint: e.hint,
        "error-message": i(f) ? `File(s) is more than ${e.maxSize}MB` : e.errorMessage
      }, {
        hint: w(() => [
          D(r.$slots, "hint")
        ]),
        default: w(() => [
          e.isImageOnly ? (o(), M(pe, {
            key: 0,
            "uploaded-images": i(v),
            "selected-image": e.selectedImage,
            "columns-count": e.columnsCount,
            accept: e.accept,
            "input-options": e.inputOptions,
            "max-images": e.maxImages,
            onChange: i(C),
            "onUpdate:selectedImage": t[0] || (t[0] = (l) => r.$emit("update:selectedImage", l)),
            "onUpdate:uploadedImages": t[1] || (t[1] = (l) => {
              v.value = l, r.$emit("update:modelValue", l);
            }),
            onOnEditImage: t[2] || (t[2] = (l) => r.$emit("onEditFile", l)),
            onOnRemoveImage: t[3] || (t[3] = (l) => r.$emit("onRemoveFile", l)),
            onDelete: i(F),
            onOnMaxFileExceed: t[4] || (t[4] = (l) => r.$emit("onMaxFileExceed", l))
          }, {
            action: w((l) => [
              D(r.$slots, "action", {
                item: l.item,
                removeItem: l.removeItem,
                fileIndex: l.i
              })
            ]),
            _: 3
          }, 8, ["uploaded-images", "selected-image", "columns-count", "accept", "input-options", "max-images", "onChange", "onDelete"])) : e.isButtonOnly ? (o(), d(A, { key: 1 }, [
            D(r.$slots, "button", { triggerInput: B }, () => [
              x(i(J), H(e.buttonUploadProps, { onClick: B }), null, 16)
            ]),
            s("input", {
              id: "my-file",
              ref_key: "inputRef",
              ref: b,
              class: "hidden",
              type: "file",
              multiple: "",
              accept: e.accept,
              onChange: U
            }, null, 40, fe)
          ], 64)) : (o(), d("div", {
            key: 2,
            class: I(["relative border rounded p-3 min-w-[30rem] flex flex-col", [
              i(f) || e.errorMessage ? "border-oc-error" : "border-oc-gray-200",
              {
                "bg-oc-bg-dark": e.isDisabled
              }
            ]])
          }, [
            s("div", ve, [
              (o(!0), d(A, null, R(i(v), (l, E) => (o(), d("div", {
                key: `${E}-${l.fileName}`,
                class: "flex justify-between relative items-center w-full last:mb-2"
              }, [
                s("div", xe, [
                  s("div", be, [
                    x(i($), {
                      name: "file-extension",
                      width: "14",
                      height: "10"
                    }),
                    s("span", ye, N(l.extension), 1)
                  ]),
                  s("span", he, N(l == null ? void 0 : l.fileName), 1)
                ]),
                p.value ? (o(), d("div", {
                  key: 0,
                  class: I(["w-[100px] h-[16px] absolute right-0 flex items-center z-40", { "on-end-loading": l.progress === 100 }])
                }, [
                  s("div", Ie, [
                    s("div", {
                      style: j({ width: `${l.progress}%` }),
                      class: "block transition-all duration-1000 h-[6px] rounded-full bg-oc-primary"
                    }, null, 4)
                  ])
                ], 2)) : k("", !0),
                e.isDisabled ? k("", !0) : (o(), M(i($), {
                  key: 1,
                  width: "12",
                  height: "12",
                  name: "bin",
                  class: I(["opacity-0 text-oc-error cursor-pointer absolute right-0", {
                    "on-enable-delete": l.progress === 100 && p.value,
                    "opacity-100": !p.value
                  }]),
                  onClick: (q) => V(E)
                }, null, 8, ["class", "onClick"]))
              ]))), 128))
            ]),
            s("label", {
              tabindex: "0",
              for: "my-file",
              class: I(["relative overflow-hidden rounded-sm flex-1 flex flex-col transition-all border-transparent border-dashed hover:border-oc-primary", {
                "!border-oc-primary": g.value && !e.isDisabled,
                border: !i(v).length,
                "cursor-pointer": !e.isDisabled
              }])
            }, [
              e.isDisabled ? k("", !0) : (o(), d("input", {
                key: 0,
                id: "my-file",
                ref_key: "inputRef",
                ref: b,
                class: "w-full h-full absolute opacity-0 cursor-pointer",
                type: "file",
                multiple: "",
                accept: e.accept,
                onDragover: t[5] || (t[5] = (l) => g.value = !0),
                onDragleave: t[6] || (t[6] = (l) => g.value = !1),
                onDrop: t[7] || (t[7] = (l) => g.value = !1),
                onChange: U
              }, null, 40, Ce)),
              i(v).length ? e.isDisabled ? k("", !0) : (o(), d("div", Fe, t[9] || (t[9] = [
                s("span", { class: "text-oc-accent-1 text-sm" }, "+ Add more", -1)
              ]))) : (o(), d("div", ke, [
                x(i($), {
                  name: "upload",
                  class: I(e.isDisabled ? "text-oc-accent-1-200" : "text-oc-accent-1")
                }, null, 8, ["class"]),
                e.labelUploadArea ? (o(), d("div", $e, N(e.labelUploadArea), 1)) : e.isDisabled ? (o(), d("div", we, "Upload disabled")) : (o(), d("div", Se, [
                  t[8] || (t[8] = s("div", null, "Select documents or drag here", -1)),
                  s("div", null, "File max " + N(e.maxSize) + "MB", 1)
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
  Te as _
};
