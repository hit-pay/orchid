<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { Icon, Dropdown, DropdownItem } from '@/orchidui-core'

defineEmits({
  changePath: [],
  'update:modelValue': []
})
const props = defineProps({
  menus: Array,
  modelValue: String
})
const isDropdownOpened = ref(false)
const activeMenu = computed(() => props.menus.find((menu) => menu.value === props.modelValue))
const currentRef = ref()
const menuRefs = ref([])
const changeCurrentPosition = (clickEvent) => {
  if (!currentRef.value) return
  const selectedMenu = clickEvent?.target || menuRefs.value[props.menus.indexOf(activeMenu.value)]
  currentRef.value.style.width = `${selectedMenu.offsetWidth}px`
  currentRef.value.style.left = `${selectedMenu.offsetLeft}px`
}
watch(
  () => props.modelValue,
  () => changeCurrentPosition()
)
onMounted(() => changeCurrentPosition())
</script>
<template>
  <div class="gap-x-9 hidden md:flex relative">
    <div
      v-for="item in menus"
      :key="item.value"
      ref="menuRefs"
      class="h-9 z-10 pr-4 pl-3 py-2 transition-all flex items-center justify-center gap-x-3 group rounded-full hover:text-oc-text cursor-pointer"
      :class="[item.value === modelValue ? 'font-medium text-oc-text' : ' text-oc-text-400']"
      @click="
        ($event) => {
          changeCurrentPosition($event)
          $emit('changePath', item.path)
          $emit('update:modelValue', item.value)
        }
      "
    >
      <Icon
        :name="`header-icons/${item.icon}`"
        width="24"
        height="24"
        class="group-hover:block"
        :class="item.value === modelValue ? 'block' : 'hidden'"
      />
      <Icon
        :name="`header-icons/${item.icon}-gray`"
        width="24"
        height="24"
        class="group-hover:hidden"
        :class="item.value === modelValue ? 'hidden' : 'block'"
      />
      {{ item.label }}
    </div>
    <div
      ref="currentRef"
      :class="activeMenu.sidebarClass"
      class="absolute transition-all duration-300 h-9 rounded min-w-[100px] bg-[rgba(0,_0,_0,_0.05)]"
    />
  </div>
  <Dropdown v-model="isDropdownOpened" class="flex md:hidden">
    <div class="p-3 font-medium whitespace-normal text-oc-accent-1-500 flex items-center gap-2">
      {{ activeMenu.label }}
      <Icon name="chevron-down" width="20" height="20" />
    </div>
    <template #menu>
      <div class="p-4 min-w-[220px] flex flex-col gap-y-3 border-b border-gray-200">
        <DropdownItem
          v-for="item in menus"
          :key="item.value"
          class="px-3"
          :text="item.label"
          :style="{
            borderColor: activeMenu.color
          }"
          :class="[
            item.value === modelValue
              ? '!text-oc-accent-1 font-medium bg-oc-accent-1-50-tr'
              : '!text-oc-text-400'
          ]"
          @click="
            () => {
              isDropdownOpened = false
              $emit('changePath', item.path)
              $emit('update:modelValue', item.value)
            }
          "
        />
      </div>
    </template>
  </Dropdown>
</template>
