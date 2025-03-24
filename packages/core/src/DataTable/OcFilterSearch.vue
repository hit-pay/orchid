<script setup>
import { nextTick, ref, computed } from 'vue'
import { Button, Input, Dropdown, Icon, DropdownItem } from '@/orchidui-core'

const emit = defineEmits({
  addQuery: [],
  toggle: [],
  'change-search-key': []
})
const props = defineProps({
  isSearchOnly: Boolean,
  searchOptions: Array,
  selectedOption: String
})
const isSearchOpen = ref(false)
const query = ref('')
const isOpen = ref(false)
const searchInput = ref()
const onSearchOpen = async () => {
  isSearchOpen.value = true
  emit('toggle', isSearchOpen)
  await nextTick()
  searchInput.value.focus()
}
const selectedOptionObject = computed(() => {
  return props.searchOptions.find((option) => option.value === props.selectedOption)
})

const changeSearchKey = (value) => {
  emit('changeSearchKey', value)
  isOpen.value = false
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
        :icon="searchOptions?.length ? '' : 'search'"
        @keyup.enter="
          () => {
            $emit('addQuery', query)
          }
        "
      >
        <template v-if="searchOptions?.length" #trailing>
          <Dropdown v-model="isOpen" :distance="12" :skidding="-8">
            <div class="flex gap-x-2 items-center pl-2 text-oc-text-400 font-medium text-sm">
              <span>{{ selectedOptionObject?.label }}</span>
              <Icon name="chevron-down" width="14" height="14" />
            </div>

            <template #menu>
              <div class="p-2 flex flex-col">
                <DropdownItem 
                v-for="option in searchOptions" 
                :key="option.value" 
                class="text-sm" 
                :text="option.label" 
                :active="option.value === selectedOption" 
                @click="changeSearchKey(option.value)"
                />
              </div>
            </template>
          </Dropdown>
        </template>
      </Input>

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
