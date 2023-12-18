import { defineAsyncComponent } from "vue";

const ModalCropper = defineAsyncComponent(
  () => import("./Form/ModalCropper/OcModalCropper.vue"),
);

// import ModalCropper from "./Form/ModalCropper/OcModalCropper.vue";

export { ModalCropper };
