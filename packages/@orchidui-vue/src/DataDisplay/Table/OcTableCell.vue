<script setup>
import { computed } from "vue";
import {
  Checkbox,
  Icon,
  CopyTooltip,
  TableCellContent,
  Chip,
  TableLink,
} from "@/orchidui";
import dayjs from "dayjs";

const Variants = {
  CHECKBOX: "checkbox",
  CONTENT: "content",
  CHIP: "chip",
  DATETIME: "datetime",
  ICON: "icon",
  IMAGE: "image",
  EMPTY: "empty",
};
const props = defineProps({
  isSimple: Boolean,
  variant: {
    type: String,
    default: "",
  },
  isLast: Boolean,
  isCopy: Boolean,
  addDescriptionToCopyClipboard: Boolean,
  isSelected: Boolean,
  data: [String, Number, Object, Array, Boolean],
  isLoading: Boolean,
  chipOptions: Object,
  content: {
    type: Object,
    default() {
      return {
        title: null,
        description: null,
      };
    },
  },
  datetime: String,
  imageClass: {
    type: String,
    default: "h-full",
  },
  link: String,
});
defineEmits({
  selected: [],
  copied: [],
  "click:field": [],
});

const hasContentData = computed(() => {
  return props.data || props.content.title || props.content.description;
});

const variantClass = computed(() => ({
  [Variants.CHECKBOX]: "md:px-2 px-4 min-w-[32px]",
  [Variants.ICON]: "md:px-2 px-4 min-w-[32px] ",
  [Variants.IMAGE]: "md:px-2 px-4 min-w-[32px]",
  [Variants.CONTENT]: "px-4",
  [Variants.CHIP]: "px-4",
  [Variants.DATETIME]: "px-4",
  [Variants.EMPTY]: "px-4 min-w-[48px]",
}));
</script>

<template>
  <div
    :class="[variantClass[variant], isLoading ? 'flex items-center' : '']"
    class="md:py-3 md:px-4 px-3 py-1 bg-oc-bg-light md:min-h-[58px] md:group-hover/row:bg-oc-gray-50 items-center"
  >
    <div
      v-if="isLoading"
      class="rounded-full bg-gray-100 w-full overflow-hidden h-6"
    >
      <div
        class="slide relative rounded-full h-6 w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]"
      />
    </div>

    <div
      v-else
      class="w-full flex"
      :class="isCopy ? 'justify-between' : 'justify-start'"
    >
      <slot>
        <!--  CHECKBOX    -->
        <Checkbox
          v-if="variant === Variants.CHECKBOX"
          :model-value="isSelected"
          class="m-auto justify-center items-center"
          :class="
            isSelected
              ? 'flex'
              : isSimple
                ? ''
                : 'md:hidden group-hover/row:flex'
          "
          @update:model-value="$emit('selected')"
        />
        <!--  ICON    -->
        <Icon
          v-else-if="variant === Variants.ICON"
          class="w-6 h-6 mx-auto"
          :name="data"
        />

        <!--  IMAGE    -->
        <template v-else-if="variant === Variants.IMAGE">
          <TableLink v-if="data"  :link="link" class="h-[42px] min-w-[42px] rounded mx-auto">
            <img
              :class="imageClass"
              alt="table-img"
              class="h-full"
              :src="data"
            />
          </TableLink>
          <TableLink  
            v-else 
            :link="link"
            class="h-[42px] mx-auto w-[42px] bg-oc-bg-dark flex items-center justify-center rounded"
          >
            <Icon width="20" height="20" name="image" />
          </TableLink>
        </template>

        <!--  EMPTY    -->
        <TableLink  v-else-if="variant === Variants.EMPTY" :link="link" class="w-full h-full">-</TableLink>

        <TableCellContent
          v-else-if="variant === Variants.DATETIME"
          :title="dayjs(data).format('D MMM, YYYY')"
          :description="dayjs(data).format('h:mm A')"
          :link="link"
        />

        <!--   CONTENT   -->
        <TableCellContent
          v-else-if="variant === Variants.CONTENT"
          v-bind="content"
          :link="link"
        />
        <!--   CHIP   -->
        <Chip
          v-else-if="variant === Variants.CHIP"
          :label="data"
          :variant="chipOptions[data]"
        />

        <!--  DEFAULT    -->
        <TableLink
          v-else-if="data"
          :link="link"
          class="flex items-center w-full"
        >
          {{ data }}
        </TableLink>
        <TableLink v-else :link="link" class="w-full h-full">-</TableLink>
      </slot>

      <CopyTooltip
        v-if="isCopy && hasContentData"
        :value="
          content?.title
            ? `${content.title}${
                content.description && props.addDescriptionToCopyClipboard
                  ? `,${content.description}`
                  : ''
              }`
            : data
        "
        :tooltip-options="{
          transitionName: 'copy',
        }"
      >
        <Icon
          class="cursor-pointer w-5 h-5 group-hover/row:opacity-100 md:opacity-0 ml-2"
          name="copy"
        />
      </CopyTooltip>
    </div>
  </div>
</template>
<style lang="scss">
.slide {
  animation: slide 1.5s infinite;
}

.copy-enter-active,
.copy-leave-active {
  transition-timing-function: cubic-bezier(0, 1, 1, 1);
  transition: all 0.3s;
}

.copy-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.copy-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.copy-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.copy-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
    left: 0;
  }
  100% {
    transform: translateX(100%);
    left: 100%;
  }
}
</style>
