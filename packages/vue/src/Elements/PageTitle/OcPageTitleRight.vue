<script setup>
import { Button, Dropdown, DropdownItem, Tooltip } from '@/orchidui'
import { ref } from 'vue'
import { useWindowWidth } from '@/orchidui/composables/useWindowWidth.js'

const props = defineProps({
  primaryButtonProps: Object,
  secondaryButtonProps: Object
})

const isDropdownOpened = ref(props.secondaryButtonProps?.isDropdownOpened ?? false)
const { isMobile } = useWindowWidth()
</script>
<template>
  <div class="flex gap-x-3 items-center">
    <Dropdown v-if="secondaryButtonProps" v-model="isDropdownOpened" :distance="10">
      <Button :size="isMobile ? 'small' : 'default'" v-bind="secondaryButtonProps" />
      <template #menu>
        <div v-if="secondaryButtonProps?.dropdownOptions" class="p-2">
          <DropdownItem
            v-for="(option, i) in secondaryButtonProps.dropdownOptions"
            :key="i"
            v-bind="option"
          />
        </div>
      </template>
    </Dropdown>
    <Tooltip
      v-if="primaryButtonProps && primaryButtonProps.tooltip"
      position="top"
      :distance="4"
      arrow-hidden
    >
      <Button :size="isMobile ? 'small' : 'default'" v-bind="primaryButtonProps" />
      <template #popper>
        <div
          class="px-3 py-[5px] whitespace-nowrap font-medium text-sm text-oc-text-400 flex gap-x-3 items-center"
        >
          {{ primaryButtonProps.tooltip }}
        </div>
      </template>
    </Tooltip>
    <Button
      v-else-if="primaryButtonProps"
      :size="isMobile ? 'small' : 'default'"
      v-bind="primaryButtonProps"
    />
  </div>
</template>
<style scoped lang="scss">
.keyboard-cap {
  background: linear-gradient(180deg, #efefef 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
}
</style>
