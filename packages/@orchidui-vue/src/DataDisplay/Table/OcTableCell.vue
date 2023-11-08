<script setup>
import { computed, ref } from "vue";
import { Checkbox, Icon, Tooltip, TableCellContent } from "@/orchidui";
import dayjs from "dayjs";

const Variants = {
  CHECKBOX: "checkbox",
  CONTENT: "content",
  DATETIME: "datetime",
  ICON: "icon",
  IMAGE: "image",
  EMPTY: "empty",
};
defineProps({
  isSimple: Boolean,
  variant: {
    type: String,
    default: "",
  },
  isLast: Boolean,
  isCopy: Boolean,
  isSelected: Boolean,
  data: String,
  isLoading: Boolean,
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
});
const emit = defineEmits({
  selected: [],
  copied: [],
});

const variantClass = computed(() => ({
  [Variants.CHECKBOX]: "md:px-2 px-4 min-w-[32px]",
  [Variants.ICON]: "md:px-2 px-4 min-w-[32px] ",
  [Variants.IMAGE]: "md:px-2 px-4 min-w-[32px]",
  [Variants.CONTENT]: "px-4",
  [Variants.DATETIME]: "px-4",
  [Variants.EMPTY]: "px-4 min-w-[48px]",
}));
const isCopied = ref(false);
const copyToClipboard = async (text) => {
  emit("copied", true);
  isCopied.value = true;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Unable to copy text to clipboard. Error: ", err);
  }
  setTimeout(() => {
    isCopied.value = false;
    emit("copied", false);
  }, 500);
};
</script>

<template>
  <div
    :class="[
      variantClass[variant] || 'px-4',
      isLoading ? 'flex items-center' : '',
    ]"
    class="py-3 bg-oc-bg-light md:min-h-[58px] md:group-hover/row:bg-oc-gray-50 items-center"
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
      class="flex"
      :class="isCopy ? 'justify-between' : 'justify-start'"
    >
      <slot>
        <!--  CHECKBOX    -->
        <Checkbox
          v-if="variant === Variants.CHECKBOX"
          :model-value="isSelected"
          class="m-auto"
          :class="
            isSelected
              ? 'block'
              : isSimple
              ? ''
              : 'md:hidden group-hover/row:block'
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
          <img
            v-if="data"
            class="h-[42px] w-[42px] rounded mx-auto"
            alt="table-img"
            :src="data"
          />
          <div
            v-else
            class="h-[42px] mx-auto w-[42px] bg-oc-bg-dark flex items-center justify-center rounded"
          >
            <Icon width="20" height="20" name="image" />
          </div>
        </template>

        <!--  EMPTY    -->
        <div v-else-if="variant === Variants.EMPTY">-</div>

        <TableCellContent
          v-else-if="variant === Variants.DATETIME"
          :title="dayjs(datetime).format('D MMM, YYYY')"
          :description="dayjs(datetime).format('h:mm A')"
        />

        <!--   CONTENT   -->
        <TableCellContent
          v-else-if="variant === Variants.CONTENT"
          v-bind="content"
        />

        <!--  DEFAULT    -->
        <div v-else class="flex items-center w-full">{{ data }}</div>
      </slot>

      <Tooltip
        v-if="isCopy"
        position="top"
        :hide-after="1500"
        trigger="click"
        :distance="10"
      >
        <Icon
          class="cursor-pointer w-5 h-5 group-hover/row:opacity-100 md:opacity-0 ml-2"
          name="copy"
          @click="copyToClipboard(data)"
        />
        <template #popper>
          <div class="px-3 py-2 text-oc-text-400 text-sm font-medium">
            Copied!
          </div>
        </template>
      </Tooltip>
    </div>
  </div>
</template>
<style lang="scss">
.slide {
  animation: slide 1.5s infinite;
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
