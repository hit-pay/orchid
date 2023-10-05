<script setup>
import { defineAsyncComponent } from "vue";

const Button = defineAsyncComponent(() =>
  import("../Form/Button/OCButton.vue"),
);
const Icon = defineAsyncComponent(() =>
  import("../MediaAndIcons/Icon/OCIcon.vue"),
);
</script>

<template>
  <div class="flex flex-col">
    <!--  TOP  -->
    <div>1</div>
    <!--  TEXT  -->
    <div>1</div>
    <!--  BUTTON  -->
    <Button class="flex gap-x-2 text-sm items-center w-fit">
      <Icon name="plus" class="w-3.5" />
      Add new
    </Button>
  </div>
</template>

<style scoped></style>
