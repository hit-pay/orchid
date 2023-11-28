<template>
  <VueDraggableNext class="grid gap-3" :list="list" handle=".drag-el" @change="updated">
    <transition-group name="list">
      <slot v-if="$slots.list" name="list" :list="list" />
      <template v-else>
        <div 
          v-for="element in list" :key="element.id"
           class="bg-oc-accent-1-50 hover:bg-oc-gray-50 text-oc-text-500 p-4 flex rounded" >
            <span class="cursor-move drag-el">
              <Icon name="draggable" />
            </span>
            <span class="ml-2">{{ element.label }}</span>
            <span>
              <Icon name="dot-vertical" />
            </span>
        </div>
      </template>
    </transition-group>
  </VueDraggableNext>
</template>

<script setup>
import { Icon } from "@/orchidui";
import { VueDraggableNext } from "vue-draggable-next";
</script>
<script>
export default {
  props: ["list", "modelValue"],
  data() {
    return {
      enabled: true,
      dragging: false,
    };
  },
  methods: {
    updated() {
      this.$emit("update:modelValue", this.list);
    },
  },
};
</script>
<style>
.grabbing * {
  cursor: grabbing;
}
</style>
