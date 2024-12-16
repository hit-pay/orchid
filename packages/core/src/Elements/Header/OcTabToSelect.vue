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
  <div class="gap-x-7 hidden md:flex relative">
    <div
      v-for="item in menus"
      :key="item.value"
      ref="menuRefs"
      class="h-[36px] z-10 px-7 transition-all flex items-center justify-center rounded-full text-oc-text-500 hover:text-oc-accent-1 cursor-pointer"
      :class="[item.value === modelValue ? 'font-medium !text-white' : '']"
      @click="
        ($event) => {
          changeCurrentPosition($event)
          $emit('changePath', item.path)
          $emit('update:modelValue', item.value)
        }
      "
    >
      {{ item.label }}
    </div>
    <div
      ref="currentRef"
      :class="activeMenu.sidebarClass"
      class="absolute transition-all duration-300 h-[36px] rounded-full min-w-[100px] bg-[var(--oc-sidebar-menu-active-icon-active)]"
    />
  </div>
  <Dropdown v-model="isDropdownOpened" class="flex md:hidden">
    <div class="p-3 font-medium text-oc-accent-1-500 flex items-center gap-2">
      {{ activeMenu.label }}
      <Icon name="chevron-down" width="20" height="20" />
    </div>
    <template #menu>
      <div class="p-4 min-w-[220px] flex flex-col gap-y-3 border-b border-gray-200">
        <DropdownItem
          v-for="item in menus"
          :key="item.value"
          class="px-5 py-3"
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
              $emit('changePath', item.path)
              $emit('update:modelValue', item.value)
            }
          "
        />
      </div>
    </template>
  </Dropdown>
</template>
