<script setup>
import { computed } from 'vue'
import {
  Checkbox,
  Icon,
  CopyTooltip,
  TableCellContent,
  Chip,
  TableLink,
  Skeleton
} from '@/orchidui-core'
import dayjs from 'dayjs'

const Variants = {
  CHECKBOX: 'checkbox',
  CONTENT: 'content',
  CHIP: 'chip',
  DATETIME: 'datetime',
  ICON: 'icon',
  IMAGE: 'image',
  EMPTY: 'empty',
  DEFAULT: 'default'
}
const props = defineProps({
  isSimple: Boolean,
  variant: {
    type: String,
    default: 'default'
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
        description: null
      }
    }
  },
  datetime: String,
  imageClass: {
    type: String,
    default: 'h-full'
  },
  link: String
})
defineEmits({
  selected: [],
  copied: [],
  'click:field': [],
  'hover:field': []
})

const hasContentData = computed(() => {
  return props.data || props.content.title || props.content.description
})

const chipProps = computed(() => {
  const options = props.chipOptions[props.data]

  if (typeof options === 'object') {
    return {
      label: options.label || props.data,
      ...options
    }
  }

  return {
    label: props.data,
    variant: options
  }
})

const variantClass = computed(() => ({
  [Variants.CHECKBOX]: 'md:px-2 px-4 min-w-[32px]',
  [Variants.ICON]: 'md:px-2 px-4 min-w-[32px] ',
  [Variants.IMAGE]: 'md:px-2 px-4 min-w-[32px]',
  [Variants.CONTENT]: 'px-4',
  [Variants.CHIP]: 'px-4',
  [Variants.DATETIME]: 'px-4',
  [Variants.EMPTY]: 'px-4 min-w-[48px]',
  [Variants.DEFAULT]: 'px-4'
}))

const handleClick = (event) => {
  if (props.link) {
    event.preventDefault()
  }
}
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link"
    :class="[
      variantClass[variant],
      {
        'flex items-center': isLoading,
        'md:px-4 px-3 py-1': variant !== Variants.CHECKBOX
      }
    ]"
    @click="handleClick"
    class="md:py-3 bg-oc-bg-light md:min-h-[58px] md:group-hover/row:bg-oc-gray-50 items-center"
  >
    <Skeleton v-if="isLoading" class="rounded-full w-full overflow-hidden h-6" />

    <div
      v-else
      class="w-full flex"
      :class="isCopy ? 'justify-between' : 'justify-start'"
      @mouseover="$emit('hover:field', props)"
    >
      <slot>
        <!--  CHECKBOX    -->
        <Checkbox
          v-if="variant === Variants.CHECKBOX"
          :model-value="isSelected"
          class="m-auto justify-center items-center"
          :class="isSelected ? 'flex' : isSimple ? '' : 'md:hidden group-hover/row:flex'"
          @update:model-value="$emit('selected')"
        />
        <!--  ICON    -->
        <Icon v-else-if="variant === Variants.ICON" class="w-6 h-6 mx-auto" :name="data" />

        <!--  IMAGE    -->
        <template v-else-if="variant === Variants.IMAGE">
          <div v-if="data" class="h-[42px] min-w-[42px] rounded mx-auto">
            <img :class="imageClass" alt="table-img" class="h-full" :src="data" />
          </div>
          <div
            v-else
            class="h-[42px] mx-auto w-[42px] bg-oc-bg-dark flex items-center justify-center rounded"
          >
            <Icon width="20" height="20" name="image" />
          </div>
        </template>

        <!--  EMPTY    -->
        <div v-else-if="variant === Variants.EMPTY" class="w-full h-full">-</div>

        <TableCellContent
          v-else-if="variant === Variants.DATETIME"
          :title="dayjs(data).format('D MMM, YYYY')"
          :description="dayjs(data).format('h:mm A')"
        />

        <!--   CONTENT   -->
        <TableCellContent v-else-if="variant === Variants.CONTENT" v-bind="content" />
        <div v-else-if="variant === Variants.CHIP" :link="link">
          <!--   CHIP   -->
          <Chip v-bind="chipProps" />
        </div>

        <!--  DEFAULT    -->
        <div v-else-if="variant === Variants.DEFAULT" class="flex items-center w-full">
          {{ data }}
        </div>
        <div v-else :link="link" class="w-full h-full">-</div>
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
          transitionName: 'copy'
        }"
      >
        <Icon
          class="cursor-pointer w-5 h-5 group-hover/row:opacity-100 md:opacity-0 ml-2"
          name="copy"
          @click.prevent
        />
      </CopyTooltip>
    </div>
  </component>
</template>
<style lang="scss">
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
</style>
