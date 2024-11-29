import { defineAsyncComponent } from 'vue'

const ModalCropper = defineAsyncComponent(() => import('./Form/ModalCropper/OcModalCropper.vue'))
const Cropper = defineAsyncComponent(() => import('./Form/Cropper/OcCropper.vue'))

export { ModalCropper, Cropper }
