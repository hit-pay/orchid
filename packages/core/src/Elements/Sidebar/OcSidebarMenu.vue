<template>
 <div v-click-outside="onClickOutside"  class="relative" >
  <Tooltip position="right" arrow-hidden :distance="10" :popper-options="{ strategy: 'fixed' }" class="w-full" >
    <div
    ref="menuItemRef"
    class="py-2 px-3 gap-x-4 flex items-center rounded hover:bg-[var(--oc-sidebar-menu-active)]"
    :class="{ 
      'bg-[var(--oc-sidebar-menu-active)]': isActive, 
      'w-full': isExpanded 
    }"
  >
    <Icon
      :name="icon"
      width="18"
      height="18"
      :class="{ 
        'text-[var(--oc-sidebar-menu-active-icon-active)]': isActive,
        'text-[var(--oc-sidebar-menu-active-icon)]': !isActive,
        'mx-auto': !isExpanded
       }"
    />
    
    <template v-if="isExpanded">
      <span class="leading-[21px] flex-1" :class="{ 'font-medium': isActive }">{{ label }}</span>
      <div v-if="isBeta" class="bg-oc-warning text-white shrink-0 py-1 px-3 rounded-sm uppercase text-xs font-medium">
        BETA
      </div>
      <div v-if="isNew" class="bg-oc-accent-2 text-white shrink-0 py-1 px-3 rounded-sm uppercase text-xs font-medium">
        NEW
      </div>
    </template>
    <Icon 
      v-if="isExpanded && isChildren"
      name="triangle-down" 
      width="10" 
      height="10" 
      class="text-oc-accent-1-500"
      :class="{ 'rotate-0 opacity-25': isMenuExpanded, '-rotate-90 opacity-15': !isMenuExpanded }" 
    />
  </div>
  <template v-if="!isExpanded" #popper>
    <div class="py-2 whitespace-nowrap px-3 text-sm text-oc-text-400 font-medium">
      <span class="ml-1">{{ label }}</span>
    </div>
  </template>
  </Tooltip>

  <div
    v-if="isExpanded"
    class="grid transition-all duration-300 ease-in-out overflow-hidden"
    :class="{
      'grid-rows-[1fr]': isMenuExpanded,
      'grid-rows-[0fr]': !isMenuExpanded,
    }"
   @click.stop
  >
   <div class="flex flex-col gap-y-1 min-h-0">
    <slot />
   </div>
  </div>
  <div
    v-if="!isExpanded && isMenuExpanded"
    ref="menuRef"
   class="z-[1007] p-2 flex flex-col gap-y-1 min-w-[162px] shadow-normal bg-white rounded"
   @click.stop
  >
    <slot />
  </div>
 </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import { Icon, Tooltip } from '@/orchidui-core'
import { clickOutside as vClickOutside } from '../../directives/clickOutside.js'

const props = defineProps({
  icon: String,
  label: String,
  isActive: Boolean,
  isExpanded: Boolean,
  isMenuExpanded: Boolean,
  isChildren: Boolean,
  isBeta: Boolean,
  isNew: Boolean
})

const menuItemRef = ref(null)
const menuRef = ref(null)

const emit = defineEmits(['close-menu'])

const onClickOutside = () => {
  if(props.isExpanded || !props.isMenuExpanded) return
  emit('close-menu')
}
watch(() => [props.isExpanded, menuRef.value, menuItemRef.value], () => {
  if(!menuItemRef.value || !menuRef.value || props.isExpanded) return
  createPopper(menuItemRef.value, menuRef.value, {
    placement: 'right-start',
    strategy: 'fixed'
  });
})
</script>
