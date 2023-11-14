<script setup>
import { Modal, Button } from "@/orchidui";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { ref } from "vue";

defineProps({
  img: String,
});
const emit = defineEmits(["changeImage", "close"]);
const cropper = ref();
const cancelButtonProps = {
  onClick: () => emit("close"),
};
const confirmButtonProps = ref({
  label: "Save",
  onClick: () => {
    const { canvas } = cropper.value.getResult();
    emit("changeImage", canvas.toDataURL());
  },
});
const rotate = (angle) => cropper.value.rotate(angle);
const zoom = (zoom) => cropper.value.zoom(zoom);
</script>

<template>
  <Modal
    title="Edit Image"
    is-close-icon
    :cancel-button-props="cancelButtonProps"
    :confirm-button-props="confirmButtonProps"
  >
    <div class="flex flex-col gap-y-5">
      <Cropper
        ref="cropper"
        class="w-[592px] h-[300px]"
        :src="img"
        :resize-image="{ wheel: false }"
        background-class="test"
      />
      <div class="flex gap-x-1 justify-center">
        <Button
          variant="secondary"
          size="small"
          left-icon="backward"
          @click="rotate(-90)"
        />
        <Button
          variant="secondary"
          size="small"
          left-icon="zoom-out"
          @click="zoom(0.8)"
        />
        <Button
          variant="secondary"
          size="small"
          left-icon="zoom-in"
          @click="zoom(1.2)"
        />
        <Button
          variant="secondary"
          size="small"
          left-icon="forward"
          @click="rotate(90)"
        />
      </div>
    </div>
  </Modal>
</template>

<style lang="scss">
.test {
  background: url("./assets/empty-space.png"), lightgray 0 0% / 50px 50px repeat;
}

.vue-simple-handler {
  @apply rounded-[1px] w-[5px] h-[5px] bg-[var(--oc-primary-500)];
}

.vue-simple-line {
  @apply border-[var(--oc-primary-500)];
}
</style>
