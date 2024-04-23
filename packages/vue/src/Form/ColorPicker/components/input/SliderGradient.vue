<template>
  <div ref="gradientSlider" class="relative" @click="onClickSlider">
    <button
      type="button"
      class="absolute top-[-32px] text-oc-accent-3 rounded-[4px] border-2 border-oc-gray-200 p-2 bg-oc-bg-light"
      :class="!showDeleteBtn ? '!hidden' : ''"
      :style="deleteBtnPosition"
      @click="$emit('onDeleteColor')"
    >
      <Icon name="bin" width="14" height="14" />
    </button>
    <div
      class="gradient-bar"
      @mousedown="onMousedown"
      @dragstart="handleItemDragStart"
    >
      <div
        ref="gradientBar"
        class="gradient-container"
        @dblclick="onDblclick"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { Icon } from "@/orchidui";
const gradientBar = inject("gradientBar");

const gradientSlider = ref();

const emit = defineEmits(["onAddColor", "onMouseDown", "onDeleteColor"]);

const handleItemDragStart = (e) => {
  console.log("handleItemDragStart");
  e.preventDefault();
};

const deleteBtnPosition = ref("left:0");
const showDeleteBtn = ref(false);
const onMousedown = ($event) => {
  emit("onMouseDown", $event);
};

const setDeleteBtnPosition = () => {
  let getActiveColor = gradientSlider.value.querySelector(".select");
  deleteBtnPosition.value = getActiveColor?.getAttribute("style");
};
const onClickSlider = () => {
  setDeleteBtnPosition();
  showDeleteBtn.value = true;
};
const onDblclick = ($event) => {
  showDeleteBtn.value = false;

  emit("onAddColor", $event);
};
</script>
