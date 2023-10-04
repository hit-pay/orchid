<template>
  <span class="rounded-full py-1 px-2 text-xs" :class="className">
    <template v-if="label">{{ label }}</template>
    <slot v-else />
  </span>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue",
    },
    label: {
      type: String,
    },
  },
  computed: {
    className() {
      let className = "";
      switch (this.color) {
        case "purple":
          className = "bg-hit-purple-50 text-hit-purple ";
          break;
        case "orange":
          className = "bg-hit-warning-50 text-hit-warning ";
          break;
        case "red":
          className = "bg-hit-red-50 text-hit-red ";
          break;
        case "dark-blue":
          className = "bg-hit-primary-50 text-hit-primary ";
          break;
        case "grey":
          className = "bg-hit-grey-100 text-hit-grey-700 ";
          break;
        case "green":
          className = "bg-hit-success-50 text-hit-success ";
          break;
        default:
          className = "bg-hit-blue-50 text-hit-blue ";
          break;
      }
      return className;
    },
  },
};
</script>