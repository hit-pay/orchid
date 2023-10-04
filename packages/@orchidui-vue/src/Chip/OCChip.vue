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
          className = "bg-oc-purple-50 text-oc-purple ";
          break;
        case "orange":
          className = "bg-oc-warning-50 text-oc-warning ";
          break;
        case "red":
          className = "bg-oc-red-50 text-oc-red ";
          break;
        case "dark-blue":
          className = "bg-oc-primary-50 text-oc-primary ";
          break;
        case "grey":
          className = "bg-oc-grey-100 text-oc-grey-700 ";
          break;
        case "green":
          className = "bg-oc-success-50 text-oc-success ";
          break;
        default:
          className = "bg-oc-blue-50 text-oc-blue ";
          break;
      }
      return className;
    },
  },
};
</script>