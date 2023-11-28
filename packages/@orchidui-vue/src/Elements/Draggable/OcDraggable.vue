<template>
  <VueDraggableNext :list="list" handle=".drag-el" @change="updated">
    <transition-group name="list">
      <slot v-if="$slots.list" name="list" :list="list" />
      <template v-else>
        <div v-for="element in list" :key="element" text class="mb-3">
          <div class="flex w-full">
            <span class="cursor-move drag-el">
              <Icon name="dragable" />
            </span>
            <span class="ml-2">{{ element.label }}</span>
          </div>
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
