
<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { clickOutside as vClickOutside } from "../../directives/clickOutside.js"; // Import the directive

const emit = defineEmits({
  close: [],
});
const props = defineProps({
  offset: Number,
});
const dropdownMenu = ref(null);
const trigger = ref(null);
const isOpen = ref(false);
const toggleDropdown = () => {
  document.body.appendChild(dropdownMenu.value);
  isOpen.value = !isOpen.value;
  if (!isOpen.value) emit("close");
  updateMenuPosition();
};
const updateMenuPosition = async () => {
  if (!isOpen.value) return;

  const triggerRect = trigger.value.getBoundingClientRect();
  dropdownMenu.value.style.top =
    triggerRect.bottom + (props.offset || 0) + "px";
  dropdownMenu.value.style.left = triggerRect.left + "px";

  await nextTick();
  if (
    triggerRect.left + (props.offset || 0) + dropdownMenu.value.clientWidth >
    window.innerWidth
  ) {
    // If it does, align the right edge of the menu with the right edge of the trigger
    dropdownMenu.value.style.left =
      triggerRect.right -
      (props.offset || 0) -
      dropdownMenu.value.clientWidth +
      "px";
  }
  if (
    triggerRect.bottom + (props.offset || 0) + dropdownMenu.value.clientHeight >
    window.innerHeight
  ) {
    dropdownMenu.value.style.top =
      triggerRect.top -
      (props.offset || 0) -
      dropdownMenu.value.clientHeight +
      "px";
  }
};

const onClickOutside = () => {
  if (isOpen.value) {
    isOpen.value = false;
    emit("close");
  }
};
onMounted(() => {
  window.addEventListener("resize", updateMenuPosition);
  window.addEventListener("scroll", updateMenuPosition);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMenuPosition);
  window.removeEventListener("scroll", updateMenuPosition);
  dropdownMenu.value.remove();
});
</script>

<template>
  <div v-click-outside="onClickOutside">
    <div ref="trigger" @click="toggleDropdown">
      <slot name="trigger" :is-open="isOpen">trigger</slot>
    </div>
    <Transition name="fade">
      <div
        v-show="isOpen"
        ref="dropdownMenu"
        class="fixed z-[1] min-w-[162px] rounded bg-oc-bg-light shadow"
        @click.stop
      >
        <slot
          :close="
            () => {
              isOpen = false;
              $emit('close');
            }
          "
        />
      </div>
    </Transition>
  </div>
</template>


<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
