import { defineComponent as ie, ref as f, openBlock as i, createElementBlock as m, normalizeClass as y, createElementVNode as o, createVNode as d, unref as a, createCommentVNode as V, withCtx as C, createBlock as $, Teleport as se, computed as W, onMounted as re, renderSlot as ue, Fragment as B, mergeProps as de, withModifiers as me, toDisplayString as O, normalizeStyle as ce } from "vue";
import "dayjs";
import { D as Y, _ as pe, B as j } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as g } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as X } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import { useUploadFileProgress as fe } from "./composables/uploadFileProgress.js";
import { ModalCropper as Z } from "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const ge = { class: "flex gap-x-3" }, ve = {
  key: 0,
  class: "border rounded p-3 min-h-[140px] h-full"
}, xe = ["accept"], be = { class: "py-2 flex flex-col" }, ye = ["src"], he = /* @__PURE__ */ ie({
  __name: "OcSingleOnlyImageUpload",
  props: {
    accept: {
      type: String,
      default: ""
    },
    uploadedImage: {
      type: Object,
      default: () => ({})
    },
    imageClasses: {
      type: String,
      default: ""
    },
    showUploadImageArea: Boolean
  },
  emits: ["change", "update:uploadedImage", "delete"],
  setup(l, { emit: F }) {
    const r = l, U = F, v = f(!1), c = f(!1), x = f(""), h = f(!1), D = (b) => {
      const t = r.uploadedImage;
      t.fileUrl = b, t.fileName = Date.now(), c.value = !1, x.value = "", U("update:uploadedImage", t);
    };
    return (b, t) => {
      var w, k;
      return i(), m("div", ge, [
        (w = l.uploadedImage) != null && w.fileUrl ? V("", !0) : (i(), m("label", {
          key: 0,
          class: y([{ "flex-1": l.showUploadImageArea }, "relative group overflow-hidden"])
        }, [
          l.showUploadImageArea ? (i(), m("div", ve, [
            o("div", {
              class: y(["w-full text-oc-text-300 text-sm h-full flex flex-col justify-center items-center transition-all border border-transparent border-dashed group-hover:border-oc-primary rounded-sm cursor-pointer", { "!border-oc-primary": h.value }])
            }, [
              d(a(g), {
                name: "upload",
                class: "text-oc-accent-1"
              }),
              t[9] || (t[9] = o("div", null, "Upload Image", -1))
            ], 2)
          ])) : (i(), m("div", {
            key: 1,
            class: y(["w-[100px] group-hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center", l.imageClasses])
          }, [
            d(a(g), { name: "plus" })
          ], 2)),
          o("input", {
            class: "w-full h-full absolute opacity-0 cursor-pointer top-0",
            type: "file",
            accept: l.accept || "image/png, image/jpeg",
            onChange: t[0] || (t[0] = (p) => b.$emit("change", p)),
            onDragover: t[1] || (t[1] = (p) => h.value = !0),
            onDragleave: t[2] || (t[2] = (p) => h.value = !1),
            onDrop: t[3] || (t[3] = (p) => h.value = !1)
          }, null, 40, xe)
        ], 2)),
        (k = l.uploadedImage) != null && k.fileUrl ? (i(), m("div", {
          key: 1,
          class: y(["w-[100px] group relative cursor-pointer aspect-square border rounded border-oc-accent-1-100", l.imageClasses])
        }, [
          d(a(Y), {
            modelValue: v.value,
            "onUpdate:modelValue": t[6] || (t[6] = (p) => v.value = p),
            placement: "bottom-end",
            class: "absolute top-2 right-2 z-[1010]"
          }, {
            menu: C(() => [
              o("div", be, [
                o("div", {
                  class: "flex p-3 cursor-pointer items-center gap-x-3",
                  onClick: t[4] || (t[4] = () => {
                    x.value = l.uploadedImage.fileUrl, v.value = !1, c.value = !0;
                  })
                }, [
                  d(a(g), {
                    width: "16",
                    height: "16",
                    name: "pencil"
                  }),
                  t[10] || (t[10] = o("span", null, "Edit Image", -1))
                ]),
                o("div", {
                  class: "flex p-3 cursor-pointer items-center text-oc-error gap-x-3",
                  onClick: t[5] || (t[5] = () => {
                    b.$emit("delete"), v.value = !1;
                  })
                }, [
                  d(a(g), {
                    width: "16",
                    height: "16",
                    name: "bin"
                  }),
                  t[11] || (t[11] = o("span", null, "Delete", -1))
                ])
              ])
            ]),
            default: C(() => [
              d(a(g), {
                name: "dots-vertical",
                class: "hidden group-hover:flex absolute right-0 cursor-pointer bg-black/[.45] rounded-full w-[32px] h-[32px] items-center justify-center text-oc-bg-light"
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          o("img", {
            src: l.uploadedImage.fileUrl,
            alt: "uploaded-image",
            class: "object-contain h-full w-full"
          }, null, 8, ye)
        ], 2)) : V("", !0),
        (i(), $(se, { to: "body" }, [
          c.value ? (i(), $(a(Z), {
            key: 0,
            modelValue: c.value,
            "onUpdate:modelValue": t[7] || (t[7] = (p) => c.value = p),
            img: x.value,
            onClose: t[8] || (t[8] = () => {
              c.value = !1, x.value = "";
            }),
            onChangeImage: D
          }, null, 8, ["modelValue", "img"])) : V("", !0)
        ]))
      ]);
    };
  }
}), we = ["accept"], ke = {
  key: 0,
  class: "py-2 flex flex-col items-center gap-y-4"
}, Ve = { class: "flex items-baseline gap-x-3 w-full" }, Ue = { class: "text-sm flex-1 text-oc-text-400 pointer-events-none" }, Ce = ["accept"], De = {
  key: 0,
  class: "relative group w-fit rounded overflow-hidden"
}, Ie = ["src"], $e = ["src"], Be = { class: "py-2 flex flex-col" }, Oe = { class: "flex flex-1 items-center gap-x-3 text-sm text-oc-text-400" }, Fe = { class: "flex flex-col w-7 h-7 items-center justify-center text-oc-text-300" }, Se = { class: "uppercase text-[8px] font-bold leading-none block" }, je = { class: "flex" }, Ee = { class: "text-sm text-oc-primary" }, Ne = { class: "rounded-full bg-oc-gray-100 w-[48px] h-2 overflow-hidden" }, el = {
  __name: "OcSingleFileUpload",
  props: {
    format: {
      type: String,
      default: "array"
    },
    modelValue: Object,
    isPreview: Boolean,
    isImageOnly: Boolean,
    showUploadImageArea: Boolean,
    /**
     * Maximum file size in MB
     */
    maxSize: Number,
    accept: String,
    validateAcceptFileType: Boolean,
    errorMessage: String,
    imageClasses: String,
    allowToEdit: {
      type: Boolean,
      default: !0
    },
    label: String,
    labelClass: String,
    hint: String,
    uploadButtonOptions: Object,
    /**
     * Variant of input (upload or url)
     */
    variant: {
      type: String,
      default: "upload",
      validator: (l) => ["upload", "url"].includes(l)
    },
    shouldTruncateFileName: Boolean,
    isButtonOnly: Boolean,
    isDisabled: Boolean,
    buttonUploadProps: {
      type: Object,
      default: () => ({
        label: "Upload"
      })
    }
  },
  emits: [
    "update:modelValue",
    "onRemoveFile",
    "onExceedMaxFileSize",
    "fileExist",
    "invalidFileType"
  ],
  setup(l, { emit: F }) {
    const r = l, U = F, v = f(), c = f(""), x = f(""), h = f(!0), D = f(!1), b = f(!1), t = f(!1), w = f(""), { currentFiles: k, onChangeFile: p, onDeleteFile: S } = fe(
      r.maxSize,
      U,
      r.accept,
      r.validateAcceptFileType
    ), _ = W(() => {
      var s;
      return URL.createObjectURL((s = k.value) == null ? void 0 : s[0].file);
    }), u = W(() => {
      var s;
      return (s = k.value) == null ? void 0 : s[0];
    });
    re(() => {
      if (r.modelValue && r.modelValue.current) {
        const s = [
          {
            current: r.modelValue.current,
            file: null,
            fileName: r.modelValue.current.caption ?? "",
            progress: 100,
            fileUrl: r.modelValue.current.path,
            totalSize: r.modelValue.current.file_size ?? 0,
            isLoaded: !0,
            extension: r.modelValue.current.extension ?? "png"
          }
        ];
        k.value = s;
      }
    });
    const ee = (s) => {
      s.preventDefault();
      const e = s.dataTransfer.files;
      p({ target: { files: e } }, r.format === "object");
    }, le = () => {
      !c.value || !x.value || U("update:modelValue", { fileName: x, fileLink: c });
    }, te = (s) => {
      u.value.fileUrl = s, u.value.fileName = Date.now(), t.value = !1, w.value = "", U("update:modelValue", r.format === "object" ? u.value : [u.value]);
    }, ae = async (s) => {
      if (s)
        try {
          const e = await fetch(s, { method: "HEAD" });
          h.value = e.ok;
        } catch (e) {
          console.log("Error checking file link:", e);
        }
    }, oe = () => {
      w.value = u.value.fileUrl, b.value = !1, t.value = !0;
    }, ne = (s) => {
      U("update:modelValue", s);
    };
    return (s, e) => (i(), $(a(pe), {
      label: l.label,
      "label-class": l.labelClass,
      hint: l.hint,
      "error-message": l.errorMessage
    }, {
      hint: C(() => [
        ue(s.$slots, "hint")
      ]),
      default: C(() => {
        var E, N, z, T, A, L, M, P, R, q, H, K, G, J, Q;
        return [
          l.isImageOnly ? (i(), $(he, {
            key: 0,
            accept: l.accept,
            "uploaded-image": u.value,
            "image-classes": l.imageClasses,
            "show-upload-image-area": l.showUploadImageArea,
            "onUpdate:uploadedImage": ne,
            onChange: e[0] || (e[0] = (n) => a(p)(n, r.format === "object")),
            onDelete: e[1] || (e[1] = (n) => a(S)(0))
          }, null, 8, ["accept", "uploaded-image", "image-classes", "show-upload-image-area"])) : l.isButtonOnly ? (i(), m(B, { key: 1 }, [
            d(a(j), de(l.buttonUploadProps, {
              onClick: e[2] || (e[2] = (n) => {
                var I;
                return (I = v.value) == null ? void 0 : I.click();
              })
            }), null, 16),
            o("input", {
              ref_key: "inputRef",
              ref: v,
              class: "hidden",
              type: "file",
              accept: l.accept,
              onChange: e[3] || (e[3] = (n) => a(p)(n, r.format === "object"))
            }, null, 40, we)
          ], 64)) : (i(), m(B, { key: 2 }, [
            a(k).length ? (i(), m("div", {
              key: 1,
              class: y(["p-3 rounded border flex gap-x-5 border-oc-gray-200 bg-white items-center", {
                "w-fit": l.isPreview,
                "!bg-oc-bg-dark": l.isDisabled
              }])
            }, [
              l.isPreview && ((T = u.value) == null ? void 0 : T.progress) === 100 ? (i(), m("div", De, [
                (L = (A = u.value) == null ? void 0 : A.file) != null && L.type.includes("video") ? (i(), m("video", {
                  key: 0,
                  autoplay: "",
                  loop: "",
                  src: _.value
                }, null, 8, Ie)) : (i(), m("img", {
                  key: 1,
                  src: (M = u.value) == null ? void 0 : M.fileUrl
                }, null, 8, $e)),
                d(a(Y), {
                  modelValue: b.value,
                  "onUpdate:modelValue": e[13] || (e[13] = (n) => b.value = n),
                  class: "absolute top-3 right-3"
                }, {
                  menu: C(() => {
                    var n, I;
                    return [
                      o("div", Be, [
                        !((I = (n = u.value) == null ? void 0 : n.file) != null && I.type.includes("video")) && l.allowToEdit ? (i(), m("div", {
                          key: 0,
                          class: "flex p-3 cursor-pointer items-center gap-x-3",
                          onClick: oe
                        }, [
                          d(a(g), {
                            width: "16",
                            height: "16",
                            name: "pencil"
                          }),
                          e[17] || (e[17] = o("span", null, "Edit", -1))
                        ])) : V("", !0),
                        o("div", {
                          class: "flex p-3 cursor-pointer items-center text-oc-error gap-x-3",
                          onClick: e[12] || (e[12] = () => {
                            a(S)(0), b.value = !1;
                          })
                        }, [
                          d(a(g), {
                            width: "16",
                            height: "16",
                            name: "bin"
                          }),
                          e[18] || (e[18] = o("span", null, "Delete", -1))
                        ])
                      ])
                    ];
                  }),
                  default: C(() => [
                    d(a(g), {
                      name: "dots-vertical",
                      class: "cursor-pointer w-[28px] aspect-square hidden items-center justify-center text-oc-text-400 group-hover:flex"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                !((R = (P = u.value) == null ? void 0 : P.file) != null && R.type.includes("video")) && t.value ? (i(), $(a(Z), {
                  key: 2,
                  modelValue: t.value,
                  "onUpdate:modelValue": e[14] || (e[14] = (n) => t.value = n),
                  img: w.value,
                  onClose: e[15] || (e[15] = () => {
                    t.value = !1, w.value = "";
                  }),
                  onChangeImage: te
                }, null, 8, ["modelValue", "img"])) : V("", !0)
              ])) : (i(), m(B, { key: 1 }, [
                o("div", Oe, [
                  o("div", Fe, [
                    d(a(g), {
                      name: "file-extension",
                      width: "14",
                      height: "10"
                    }),
                    o("span", Se, O((q = u.value) == null ? void 0 : q.extension), 1)
                  ]),
                  o("div", {
                    class: y([l.shouldTruncateFileName ? "truncate max-w-[250px]" : ""])
                  }, O((H = u.value) == null ? void 0 : H.fileName), 3)
                ]),
                o("div", je, [
                  o("div", {
                    class: y([((K = u.value) == null ? void 0 : K.progress) === 100 ? "opacity-0" : "", "transition-all duration-500 flex flex-col gap-y-1 items-center"])
                  }, [
                    o("span", Ee, O(((G = u.value) == null ? void 0 : G.progress) || 0) + "% ", 1),
                    o("div", Ne, [
                      o("div", {
                        class: "h-2 bg-oc-primary transition-all duration-100",
                        style: ce({ width: `${((J = u.value) == null ? void 0 : J.progress) || 0}%` })
                      }, null, 4)
                    ])
                  ], 2),
                  l.isDisabled ? V("", !0) : (i(), m("div", {
                    key: 0,
                    class: "w-[36px] cursor-pointer flex text-oc-error items-center justify-center",
                    onClick: e[16] || (e[16] = (n) => a(S)(0))
                  }, [
                    d(a(g), {
                      width: "16",
                      height: "16",
                      name: ((Q = u.value) == null ? void 0 : Q.progress) === 100 ? "bin" : "x-circle"
                    }, null, 8, ["name"])
                  ]))
                ])
              ], 64))
            ], 2)) : (i(), m("div", ke, [
              o("div", Ve, [
                l.variant === "url" ? (i(), m(B, { key: 0 }, [
                  d(a(X), {
                    modelValue: c.value,
                    "onUpdate:modelValue": e[4] || (e[4] = (n) => c.value = n),
                    "error-message": c.value && !h.value ? "Invalid link" : "",
                    placeholder: "https://website.com",
                    onBlur: e[5] || (e[5] = (n) => ae(c.value))
                  }, null, 8, ["modelValue", "error-message"]),
                  d(a(X), {
                    modelValue: x.value,
                    "onUpdate:modelValue": e[6] || (e[6] = (n) => x.value = n),
                    placeholder: "Enter file name"
                  }, null, 8, ["modelValue"]),
                  d(a(j), {
                    class: "flex-shrink-0",
                    label: "OK",
                    disabled: "",
                    onClick: le
                  })
                ], 64)) : V("", !0),
                o("div", {
                  class: y(["p-3 flex bg-white items-center gap-x-5 rounded border w-full", [
                    D.value ? "border-oc-primary border-dashed" : "border-oc-gray-200",
                    {
                      "!bg-oc-bg-dark": l.isDisabled
                    }
                  ]]),
                  onDragenter: e[8] || (e[8] = (n) => D.value = !0),
                  onDragleave: e[9] || (e[9] = (n) => D.value = !1),
                  onDrop: ee,
                  onDragover: e[10] || (e[10] = me(() => {
                  }, ["prevent"]))
                }, [
                  o("span", Ue, O(l.isDisabled ? "Upload disabled" : "Choose file from your computer or drag here"), 1),
                  d(a(j), {
                    size: "small",
                    "is-disabled": l.isDisabled,
                    variant: ((E = l.uploadButtonOptions) == null ? void 0 : E.variant) ?? "secondary",
                    "left-icon": ((N = l.uploadButtonOptions) == null ? void 0 : N.leftIcon) ?? "upload",
                    label: ((z = l.uploadButtonOptions) == null ? void 0 : z.label) ?? "Upload",
                    onClick: e[7] || (e[7] = (n) => v.value.click())
                  }, null, 8, ["is-disabled", "variant", "left-icon", "label"])
                ], 34),
                o("input", {
                  ref_key: "inputRef",
                  ref: v,
                  class: "hidden",
                  type: "file",
                  accept: l.accept,
                  onChange: e[11] || (e[11] = (n) => a(p)(n, r.format === "object"))
                }, null, 40, Ce)
              ])
            ]))
          ], 64))
        ];
      }),
      _: 3
    }, 8, ["label", "label-class", "hint", "error-message"]));
  }
};
export {
  el as _
};
