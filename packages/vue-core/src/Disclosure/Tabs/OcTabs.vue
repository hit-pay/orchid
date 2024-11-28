<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { Icon } from '@/orchidui-core'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'pills'].includes(val)
  },
  tabs: Array,
  modelValue: [String, Array],
  maxCount: Number,
  isArrows: Boolean,
  direction: {
    type: String,
    default: 'horizontal',
    validator: (val) => ['horizontal', 'vertical'].includes(val)
  }
})

const position = ref(0)
const tabsVisible = ref(0)
const tabsContainer = ref()

const tabWidth = 100
const tabHeight = 35

const emit = defineEmits({
  'update:modelValue': []
})

const currentIndex = computed(() => props.tabs.findIndex((item) => item.value === props.modelValue))

const isPillVariant = computed(() => props.variant === 'pills')

const isVerticalTabs = computed(() => props.direction === 'vertical')

const setVisibleTabsLength = () => {
  if (isVerticalTabs.value) {
    tabsVisible.value = Math.round(tabsContainer.value.clientHeight / tabHeight)
  } else {
    tabsVisible.value = Math.round(tabsContainer.value.clientWidth / tabWidth)
  }
}

const move = (direction) => {
  const index = direction === 'left' ? --currentIndex.value : ++currentIndex.value

  const value = props.tabs[index]?.value

  if (value !== undefined) {
    emit('update:modelValue', value)
  }
}

const scrollToTab = () => {
  const index = props.tabs.findIndex((item) => item.value === props.modelValue)

  if (index > -1) {
    nextTick(() => {
      setVisibleTabsLength()
      position.value = index

      const scrollPayload = {}

      if (isVerticalTabs.value) {
        scrollPayload.top = index * tabHeight
      } else {
        scrollPayload.left = index * tabWidth
      }

      tabsContainer.value?.scroll({
        ...scrollPayload,
        behavior: 'smooth'
      })
    })
  }
}

onMounted(() => {
  setVisibleTabsLength()

  if (props.isArrows) {
    scrollToTab()
  }
})

watch(
  () => props.tabs,
  () => {
    setVisibleTabsLength()
  },
  {
    deep: true
  }
)

watch(
  () => props.modelValue,
  () => {
    scrollToTab()
  }
)
</script>

<template>
  <div
    id="test"
    ref="tabsContainer"
    class="flex normal-case"
    :class="{
      'gap-x-2': isPillVariant,
      'border-b border-oc-gray-200': !isPillVariant,
      'overflow-hidden relative': isArrows,
      'flex-col max-h-full': isVerticalTabs,
      'gap-y-2': isPillVariant && isVerticalTabs
    }"
  >
    <div
      v-if="position > 0 && isArrows"
      class="sticky top-0 bottom-0 left-0 z-[1] flex items-center bg-white"
      :class="{ 'pb-4': !isPillVariant, 'justify-center': isVerticalTabs }"
    >
      <Icon
        :name="!isVerticalTabs ? 'chevron-left' : 'chevron-up'"
        width="16"
        height="16"
        class="text-oc-text-400 cursor-pointer hover:text-oc-text-500"
        @click.prevent="move('left')"
      />
    </div>
    <div class="flex items-center" :class="{ 'flex-col': isVerticalTabs }">
      <div
        v-for="tab in tabs"
        :key="tab.value"
        class="relative cursor-pointer min-w-[48px] gap-x-3 items-center flex justify-center text-sm hover:text-oc-text-500"
        :class="[
          tab.class,
          isPillVariant ? 'py-2 px-3 rounded' : 'px-4 pb-3 border-b-2 -mb-[1px]',
          modelValue?.toString() === tab.value?.toString()
            ? isPillVariant
              ? 'bg-oc-gray-200 text-oc-text-500'
              : 'border-oc-primary-500 font-medium text-oc-text-500'
            : isPillVariant
              ? 'text-oc-text-400'
              : 'border-transparent text-oc-text-400',
          isArrows ? '!justify-normal !min-w-[100px]' : '',
          isVerticalTabs ? '!justify-start w-full py-3 px-5' : '',
          isVerticalTabs && isArrows ? '!min-h-[35px]' : ''
        ]"
        @click="$emit('update:modelValue', tab.value)"
      >
        <slot :name="tab.value">
          <div :class="{ truncate: isArrows }">{{ tab.label }}</div>
          <div
            v-if="tab.count"
            class="bg-oc-error rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-white px-4"
          >
            {{ tab.count > maxCount ? `${maxCount}+` : tab.count }}
          </div>
        </slot>
      </div>
    </div>
    <div
      v-if="tabsVisible + position < tabs.length && isArrows"
      class="sticky top-0 bottom-0 right-0 flex items-center bg-white"
      :class="{
        'pb-4': !isPillVariant,
        'justify-center': isVerticalTabs
      }"
    >
      <Icon
        :name="!isVerticalTabs ? 'chevron-right' : 'chevron-down'"
        width="16"
        height="16"
        class="text-oc-text-400 cursor-pointer hover:text-oc-text-500"
        @click="move('right')"
      />
    </div>
  </div>
</template>
