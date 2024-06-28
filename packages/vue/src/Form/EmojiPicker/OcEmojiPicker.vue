<script setup>
import { Dropdown, Button, Input } from '@/orchidui'
import { computed, ref } from 'vue'
import { EMOJI_CATEGORIES, EMOJI_LIST } from './conts/emoji.js'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  isDisabled: Boolean,
  popperOptions: Object
})
const emit = defineEmits({
  'update:modelValue': []
})

const isOpen = ref(false)
const search = ref('')
const selectedEmoji = ref(props.modelValue)
const activeCategory = ref('grinning')

const current = computed(() => props.modelValue || EMOJI_LIST.sunglasses)
const selected = computed(() =>
  selectedEmoji.value ? EMOJI_LIST[selectedEmoji.value] : EMOJI_LIST.sunglasses
)

const filteredList = computed(() =>
  Object.entries(EMOJI_LIST).filter(([key]) => key.includes(search.value))
)

const categoriesList = computed(() => Object.entries(EMOJI_CATEGORIES))

const selectEmoji = (key) => {
  selectedEmoji.value = key
}

const apply = () => {
  isOpen.value = false
  emit('update:modelValue', EMOJI_LIST[selectedEmoji.value])
}

const cancel = () => {
  isOpen.value = false
  selectedEmoji.value = props.modelValue
}

const shuffle = () => {
  const items = Object.keys(EMOJI_LIST)
  const randomIndex = Math.round(Math.random() * items.length)

  selectedEmoji.value = items[randomIndex]
  apply()
}

const onToggle = (isOpen) => {
  if (isOpen) {
    search.value = ''
  }
}

const selectCategory = (key) => {
  const offsetTop = document.getElementById(`emoji-${key}`).offsetTop
  document.getElementById('emojiList').scroll({ top: offsetTop, behavior: 'smooth' })
  activeCategory.value = key
}

const onScroll = (e) => {
  categoriesList.value.forEach(([key]) => {
    const offsetTop = document.getElementById(`emoji-${key}`).offsetTop
    if (e.target.scrollTop >= offsetTop - 20) {
      activeCategory.value = key
    }
  })
}
</script>

<template>
  <div
    class="flex items-center justify-center rounded bg-oc-bg-dark h-[140px] relative w-full z-50"
  >
    <Dropdown
      v-model="isOpen"
      :max-menu-height="600"
      class="!w-auto z-50"
      :popper-options="{
        ...popperOptions
      }"
      :distance="26"
      :is-disabled="isDisabled"
      placement="bottom"
      @update:model-value="onToggle"
    >
      <div
        v-html="current"
        class="flex items-center justify-center w-12 h-12 text-[40px] transition rounded"
        :class="{
          'cursor-pointer hover:bg-oc-gray-200': !isDisabled
        }"
      ></div>

      <template #menu>
        <div class="oc-arrow" data-popper-arrow />
        <div class="p-4 w-[340px]">
          <div class="bg-oc-bg-dark p-4 rounded flex items-center justify-center">
            <div
              v-html="selected"
              class="flex items-center justify-center w-10 h-10 text-[40px]"
            ></div>
          </div>
          <div class="pt-3 pb-4">
            <Input v-model="search" placeholder="Search" icon="search" />
          </div>
          <div
            id="emojiList"
            class="grid grid-cols-9 gap-3 max-h-[204px] overflow-y-auto overflow-x-hidden mt-3 mb-5 relative"
            v-if="filteredList.length"
            @scroll="onScroll"
          >
            <div
              v-for="[key, item] in filteredList"
              :id="`emoji-${key}`"
              :key="key"
              v-html="item"
              class="w-8 h-8 text-[24px] flex items-center justify-center cursor-pointer transition hover:bg-oc-gray-100 rounded"
              @click="selectEmoji(key)"
            ></div>
          </div>
          <div v-else class="text-oc-text-400 text-center p-3">No emoji found</div>
          <div class="border-t border-b py-3 grid grid-cols-9 gap-3">
            <div
              v-for="[key, item] in categoriesList"
              :key="key"
              v-html="item"
              class="w-8 h-8 text-[24px] flex items-center justify-center cursor-pointer transition opacity-30 hover:opacity-100"
              :class="{
                '!opacity-100': key === activeCategory
              }"
              @click="selectCategory(key)"
            ></div>
          </div>
          <div class="grid grid-cols-2 gap-5 mt-6">
            <Button variant="secondary" @click="cancel">Cancel</Button>
            <Button @click="apply">Use this emoji</Button>
          </div>
        </div>
      </template>
    </Dropdown>
    <Button
      v-if="!isDisabled"
      left-icon="shuffle"
      variant="secondary"
      class="absolute top-5 right-5"
      @click="shuffle"
    />
  </div>
</template>

<style scoped>
.oc-arrow {
  @apply z-0;
  visibility: hidden;
  top: -8px;

  &,
  &::before {
    @apply absolute bg-inherit;
    height: 1rem;
    width: 1rem;
  }

  &::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
}
</style>
