<script setup>
import { Button, Dropdown, DropdownItem, Skeleton, Tooltip } from '@/orchidui-core'
import { ref } from 'vue'
import { useWindowWidth } from '@/orchidui-core/composables/useWindowWidth.js'

const props = defineProps({
  /** Props forwarded to the primary Button. Supports an optional `tooltip` string to show on hover. */
  primaryButtonProps: Object,
  /** Props forwarded to the secondary Button. Supports a `dropdownOptions` array for a dropdown menu. */
  secondaryButtonProps: Object,
  /** Show skeleton placeholders instead of the buttons while data is loading. */
  isLoading: { type: Boolean, default: false }
})

const isDropdownOpened = ref(props.secondaryButtonProps?.isDropdownOpened ?? false)
const { isMobile } = useWindowWidth()
const clickAdditional = (e) => {
  e.preventDefault()
  isDropdownOpened.value = !isDropdownOpened.value
  const { secondaryButtonProps } = props;
  typeof secondaryButtonProps?.['onAdditionClick'] === 'function' && secondaryButtonProps['onAdditionClick']();
}
const clickSecondaryButton = (e) => {
  const { secondaryButtonProps } = props;
  if (secondaryButtonProps.additionalAreaIcon && secondaryButtonProps.dropdownOptions) {
    // need to stop to prevent open dropdown, dropdown should be triggerred on additional icon.
    e.stopPropagation()
    e.preventDefault()

    typeof secondaryButtonProps.onClick === 'function' && secondaryButtonProps.onClick(e);

    return
  }

  if (!secondaryButtonProps.dropdownOptions) {
    e.stopPropagation()
    e.preventDefault()

    typeof secondaryButtonProps.onClick === 'function' && secondaryButtonProps.onClick(e);
  }
}
</script>
<template>
  <div v-if="!isLoading" class="flex gap-x-3 items-center">
    <Dropdown v-if="secondaryButtonProps" v-model="isDropdownOpened" :distance="10">
      <Button
        :size="isMobile ? 'small' : 'default'"
        v-bind="{
          ...secondaryButtonProps,
          onClick: clickSecondaryButton,
          onAdditionClick: clickAdditional
        }"
      />
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
  <div v-else class="flex gap-x-3 items-center">
    <Skeleton class="w-[100px] h-[36px] rounded" />
    <Skeleton class="w-[100px] h-[36px] rounded" />

  </div>
</template>
<style scoped lang="scss">
.keyboard-cap {
  background: linear-gradient(180deg, #efefef 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
}
</style>
