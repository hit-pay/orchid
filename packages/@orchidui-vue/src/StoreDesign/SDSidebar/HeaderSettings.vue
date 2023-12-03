<script setup>
import { ref } from "vue";
import { DraggableList } from "@/orchidui/DraggableList";
import { Toggle } from "@/orchidui";
const HeaderSections = ref([
  {
    id: "top_banner",
    title: "Top Banner",
    icon: "circle",
    active: true,
    isDisable: true,
  },
  {
    id: "header",
    title: "Header",
    icon: "circle",
    active: true,
    isDisable: true,
  },
  {
    id: "banner",
    title: "Banner",
    icon: "circle",
    active: true,
    isDisable: true,
  },
]);

const emit = defineEmits({
  changeSection: [],
});

const onClick = (el) => {
  emit("changeSection", el.id);
};
</script>
<template>
  <div class="px-5 py-4">
    <DraggableList
      v-model="HeaderSections"
      class="w-full cursor-pointer"
      @click:element="onClick"
    >
      <template #action="{ item }">
        <Toggle
          v-if="item.id === 'banner'"
          v-model="item.active"
          size="small"
        ></Toggle>
        <div v-else></div>
      </template>
    </DraggableList>
  </div>
</template>
