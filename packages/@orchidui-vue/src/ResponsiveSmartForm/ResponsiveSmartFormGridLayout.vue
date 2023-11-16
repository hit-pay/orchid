<template>
  <div class="responsive-smart-form-grid" :style="gridDefinitionVariables">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  grid: {
    type: Object,
    required: true,
  },
});

const gridDefinitionVariables = computed(() => {
  const parseGridArea = (gridArea) =>
    gridArea
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `"${line}"`)
      .join(" ");

  const variables = {};
  Object.entries(props.grid).forEach(([breakpoint, grid]) => {
    Object.entries(grid).forEach(([key, value]) => {
      variables[`--grid-${breakpoint}-${key}`] =
        key === "area" ? parseGridArea(value) : value;
    });
  });
  return variables;
});
</script>

<style lang="scss" scoped>
@mixin grid($breakpoint, $default: "lg") {
  grid-template-areas: var(
    --grid-#{$breakpoint}-area,
    var(--grid-#{$default}-area)
  );
  grid-template-rows: var(
    --grid-#{$breakpoint}-rows,
    var(--grid-#{$default}-rows)
  );
  grid-template-columns: var(
    --grid-#{$breakpoint}-columns,
    var(--grid-#{$default}-columns)
  );
}

.responsive-smart-form-grid {
  max-width: 100%;
  display: grid;
  @include grid(lg);

  @media (max-width: 640px) {
    @include grid(xs);
  }
  @media (min-width: 640px) {
    @include grid(sm);
  }
  @media (min-width: 768px) {
    @include grid(md);
  }
  @media (min-width: 1024px) {
    @include grid(lg);
  }
  @media (min-width: 1280px) {
    @include grid(xl);
  }
  @media (min-width: 1536px) {
    @include grid(xxl);
  }
}
</style>
