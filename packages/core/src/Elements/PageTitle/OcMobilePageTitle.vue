<script setup lang="ts">
import { Button, Icon, Dropdown, DropdownItem, CopyTooltip, Chip } from '@/orchidui-core'
import { ref } from 'vue'

defineProps({
  title: { type: String },
  description: { type: String },
  primaryButtonProps: Object,
  chipProps: Object,
  secondaryButtonProps: Object
})

const isOpen = ref(false)
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <div class="flex items-center justify-between gap-x-3">
      <span class="text-xl leading-[24px] font-medium">{{ title }}</span>
      <Button
        v-if="primaryButtonProps || secondaryButtonProps"
        size="small"
        v-bind="primaryButtonProps"
        is-additional-area
      >
        <template #additional-content>
          <Dropdown v-model="isOpen" @click.stop>
            <Icon width="16" height="16" class="mx-auto" name="chevron-down" />
            <template #menu>
              <DropdownItem
                v-if="secondaryButtonProps"
                :text="secondaryButtonProps?.label"
                :icon="secondaryButtonProps?.leftIcon"
                @click="secondaryButtonProps.onClick"
              />
              <template v-if="secondaryButtonProps && secondaryButtonProps.dropdownOptions">
                <DropdownItem
                  v-for="option in secondaryButtonProps.dropdownOptions"
                  :key="option.text"
                  v-bind="option"
                />
              </template>
            </template>
          </Dropdown>
        </template>
      </Button>
    </div>

    <div
      v-if="description"
      class="flex gap-x-6 text-sm text-oc-text-400 py-4 whitespace-nowrap items-center"
    >
      <span class="overflow-hidden text-ellipsis">
        {{ description }}
      </span>
      <CopyTooltip class="shrink-0" :value="description">
        <Icon width="16" height="16" class="cursor-pointer" name="copy" />
      </CopyTooltip>
    </div>

    <slot name="mobile-amount" />

    <Chip v-if="chipProps" v-bind="chipProps" class="self-start" />
  </div>
</template>

<style scoped lang="scss"></style>
