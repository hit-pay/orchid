<template>
     <div class="grid gap-3">
            <div 
                v-for="submenu, subIndex in menu.children" :key="subIndex"
                class="flex items-center px-5 py-3 rounded hover:bg-[var(--oc-sidebar-menu-hover)]" 
                :class="{
                    'font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]': submenu.active
                }">
                <Icon  
                    v-if="isExpanded"
                    width="22" 
                    height="22" 
                    class="flex" 
                    :class="{
                        'text-[var(--oc-sidebar-menu-active-icon)]': !submenu.active,
                        'text-[var(--oc-sidebar-menu-active-icon-active)]': submenu.active
                    }" name="sidebar-submenu-icon" />
                <slot  name="label" :menu="menu" :submenu="submenu"  />
            </div>
        </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

defineProps({
    isExpanded:{
        type: Boolean,
        default: true
    },
    menu: {
        type: Object
    }
})
const Icon = defineAsyncComponent(() =>
    import("../../MediaAndIcons/Icon/OCIcon.vue"),
);

</script>