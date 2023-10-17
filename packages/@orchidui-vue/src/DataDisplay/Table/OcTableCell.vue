<script setup>
import { computed, defineAsyncComponent } from "vue";
import TableCellContent from "./OcTableCellContent.vue";

const Checkbox = defineAsyncComponent(() =>
  import("../../Form/Checkbox/OcCheckbox.vue"),
);
const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OcIcon.vue"),
);

const Variants = {
  CHECKBOX: "checkbox",
  CONTENT: "content",
  ICON: "icon",
  EMPTY: "empty",
};
defineProps({
  isSimple: Boolean,
  variant: {
    type: String,
    default: "content",
  },
  isLast: Boolean,
  isSelected: Boolean,
  icon: String,
});
defineEmits({
  selected: [],
});

const variantClass = computed(() => ({
  [Variants.CHECKBOX]: "px-2 min-w-[32px] justify-center",
  [Variants.ICON]: "px-2 min-w-[32px] justify-center",
  [Variants.CONTENT]: "px-4 justify-center",
  [Variants.EMPTY]: "px-4 min-w-[48px] justify-start",
}));
</script>

<template>
  <td
    :class="[variantClass[variant], isLast ? '' : 'border-b']"
    class="py-3 border-oc-text-200 bg-oc-bg-light group-hover/row:bg-oc-grey-50 items-center overflow-hidden"
  >
    <slot>
      <Checkbox
        v-if="variant === Variants.CHECKBOX"
        :model-value="isSelected"
        class="mx-auto"
        :class="
          isSelected ? 'block' : isSimple ? '' : 'hidden group-hover/row:block'
        "
        @update:model-value="$emit('selected')"
      />
      <Icon
        v-else-if="variant === Variants.ICON"
        class="w-6 h-6 mx-auto"
        :name="icon"
      />
      <div v-else-if="variant === Variants.EMPTY">-</div>
      <TableCellContent v-else important />
    </slot>
  </td>
</template>
