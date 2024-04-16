<script setup lang="ts">
import { Variant } from "@/orchidui";

defineProps({
  variants: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex gap-3 items-start md:flex-row flex-col">
    <Variant
      v-for="variant in variants"
      :key="variant.value"
      :is-active="variant.value === modelValue"
      v-bind="variant"
      @click="
        $emit(
          'update:modelValue',
          variant.isDisabled ? modelValue : variant.value,
        )
      "
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Variant>
  </div>
</template>

<style scoped lang="scss"></style>
