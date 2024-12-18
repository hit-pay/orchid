<script setup>
import { nextTick, ref } from 'vue'
import { Button, Input } from '@/orchidui-core'

const emit = defineEmits({
  addQuery: [],
  toggle: []
})
defineProps({
  isSearchOnly: Boolean
})
const isSearchOpen = ref(false)
const query = ref('')
const searchInput = ref()
const onSearchOpen = async () => {
  isSearchOpen.value = true
  emit('toggle', isSearchOpen)
  await nextTick()
  searchInput.value.focus()
}
</script>

<template>
  <div
    class="w-full"
    :class="isSearchOpen || isSearchOnly ? '' : 'absolute max-w-0 overflow-hidden'"
  >
    <div class="flex gap-x-4">
      <Input
        ref="searchInput"
        v-model="query"
        placeholder="Search something here"
        class="md:min-w-[310px]"
        icon="search"
        @keyup.enter="
          () => {
            $emit('addQuery', query)
          }
        "
      />

      <Button
        v-if="isSearchOnly"
        label="Search"
        variant="secondary"
        class="shrink-0"
        @click="
          () => {
            $emit('addQuery', query)
            query = ''
          }
        "
      />
      <span
        v-else
        class="py-3 text-base cursor-pointer flex normal-case items-center font-medium text-oc-text-400"
        @click="
          () => {
            isSearchOpen = false
            $emit('toggle', isSearchOpen)
            query = ''
          }
        "
      >
        Clear
      </span>
    </div>
  </div>
  <div v-if="!isSearchOnly" :class="!isSearchOpen ? '' : 'max-w-0 overflow-hidden'">
    <Button v-if="!isSearchOpen" variant="secondary" left-icon="search" @click="onSearchOpen" />
  </div>
</template>
