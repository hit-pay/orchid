
<script setup>
import { Tooltip, Button, Avatar, Dropdown, DropdownItem} from '@orchid'
</script>
<template>
   <div class="flex gap-x-2 md:gap-x-5 items-center ">
        <Button class="hidden md:block" size="big" is-transparent variant="secondary"  left-icon="chat" />
        <Button class="hidden md:block" size="big" is-transparent variant="secondary"  left-icon="sparkle-2" />
        <Tooltip  
            :key="'my-tooltip'" 
            class="hidden md:block"
            trigger="hover" 
            :offset="[0, 10]" 
            position="bottom" 
            popper-class="bg-oc-gray-900 text-oc-text-100">
            <Button size="big" is-transparent variant="secondary"  left-icon="question-mark" />
            <template #popper>
            <div class="p-4 rounded-full z-50">
                Help
            </div>
            </template>
        </Tooltip>
        <Dropdown :offset="10">
            <template #trigger>
            <Avatar class="cursor-pointer" />
            </template>
            <div class="flex flex-col">
            <div class="p-2 border-b border-gray-200">
                <DropdownItem text="Menu" icon="pencil"/>
                <DropdownItem text="Menu" icon="pencil"/>
            </div>
            <div class="p-2">
                <DropdownItem text="Logout" icon="pencil" variant="destructive"/>
            </div>
            </div>
        </Dropdown>
        </div>
</template>
