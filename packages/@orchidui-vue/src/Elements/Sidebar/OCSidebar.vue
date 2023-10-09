<template>
    <transition name="slide-fade" :duration="1000">
        <div 
             v-if="!state.loading"
            class="p-8 cursor-pointer relative bg-[var(--oc-sidebar-background)]"
            :class="{
                'w-[300px] ': isExpanded,
                'w-[102px] ': !isExpanded
            }">
            <div class="grid gap-3">
                <button 
                    type="button" 
                    aria-label="Expand Collapse" 
                    class="bg-oc-text-000 absolute top-[-12px] right-[-12px] z-40 p-3 border rounded-full"
                    :class="{
                        'rotate-180': !isExpanded
                    }"
                    @click="changeExpanded">
                    <Icon width="20" height="20" name="arrow-left-2" />
                </button>
                <slot name="before" :is-expanded="isExpanded" />
                <template v-for="sidebar, index in sidebarMenu" :key="index">
                    <h2 
                        v-if="isExpanded && sidebar.title" 
                        class="text-sm uppercase text-[var(--oc-sidebar-menu-title)]" >
                        {{ sidebar.title }}
                    </h2>
                    <div v-else-if="(!sidebar.title || !isExpanded) && index !== 0" class="mt-4 mb-6 w-full border-b border-[var(--oc-sidebar-menu-title)] opacity-50"></div>
                
                    <template v-for="menu, menuIndex in sidebar.menus" :key="menuIndex">
                        <div 
                            class="flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]" 
                            :class="{
                                'px-5 py-3': isExpanded,
                                'font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]': menu.active
                            }"
                            @click="expandMenu(menu.path)"
                            >
                            <Popover v-slot="{ open, }" class="relative flex">
                                <PopoverButton 
                                    :class="{
                                        'p-4': !isExpanded
                                    }"
                                    @mouseover="(e) => hoverPopover(e, open)"
                                    >
                                    <Icon 
                                        width="22" 
                                        height="22" 
                                        :class="{
                                            'text-[var(--oc-sidebar-menu-active-icon)]': !menu.active,
                                            'text-[var(--oc-sidebar-menu-active-icon-active)]': menu.active
                                        }" :name="menu.icon" />
                                </PopoverButton>
                                <transition>
                                    <PopoverPanel v-if="!isExpanded">
                                        <div class="left-[60px] p-4 gap-4 absolute bg-oc-text-000 shadow-sm rounded w-[200px]">
                                            <div 
                                                v-if="!menu.children"
                                                class="
                                                px-5 py-3 flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)] 
                                                font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]" 
                                                >
                                                <slot v-if="!isExpanded" name="label" :menu="menu" />
                                            </div>
                                            <OcSidebarSubmenu 
                                                v-if="menu.children && !isExpanded" 
                                                :menu="menu" :is-expanded="isExpanded">
                                                <template 
                                                    #label="{submenu}">
                                                    <slot name="submenu_label" :menu="menu" :submenu="submenu"  />    
                                                </template>
                                            </OcSidebarSubmenu>
                                        </div>
                                    </PopoverPanel>
                                </transition>
                            </Popover>
                            <slot v-if="isExpanded" name="label" :menu="menu" />
                        </div>
                        <transition name="bounce">
                            <OcSidebarSubmenu v-if="menu.children && isExpanded && state.expanded.includes(menu.path)" :menu="menu" >
                                <template 
                                        #label="{submenu}">
                                        <slot name="submenu_label" :menu="menu" :submenu="submenu" :is-expanded="isExpanded" />    
                                </template>
                            </OcSidebarSubmenu>
                        </transition>
                    </template>
                </template>
                <slot name="after" :is-expanded="isExpanded" />
            </div>
        </div>
    </transition>
</template>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { defineAsyncComponent, reactive, onMounted, defineEmits} from 'vue'


const Icon = defineAsyncComponent(() =>
    import("../../MediaAndIcons/Icon/OCIcon.vue"),
);

const OcSidebarSubmenu = defineAsyncComponent(() =>
    import("./OCSidebarSubmenu.vue"),
);

const emit = defineEmits(['changeExpanded'])

const props = defineProps({
    isExpanded: {
        type: Boolean,
        default: true
    },
    sidebarMenu: {
        type: Array
    }
})

const state = reactive({
    loading: true,
    expanded: []
})

const expandMenu = (id) => {
    if(!state.expanded.includes(id)){
        state.expanded.push(id)
    }else{
        state.expanded = state.expanded.filter(menuId =>  menuId !== id)
    }
}

const hoverPopover = (e, open) => {
  if (e.target.parentNode.type === 'button' && !open) {
    e.target.parentNode.click()
  }
}

const changeExpanded = () => {
    state.loading = true;

    emit('changeExpanded', !props.isExpanded)

    let timeOut = setTimeout(() =>{
        state.loading = false
        clearTimeout(timeOut)
    })
}

onMounted(() => {
    // expand active menu
    props.sidebarMenu.forEach((sideMenu) => {
        sideMenu.menus.forEach((menu) => {
            // check if menu active
            if(menu.children){
                menu.children.forEach((submenu) => {
                    if(submenu.active){
                        expandMenu(menu.path)
                    }
                })
            }
        })
    })

    state.loading = false
})

</script>