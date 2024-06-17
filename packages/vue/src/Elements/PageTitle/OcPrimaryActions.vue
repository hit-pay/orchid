<script setup>
import { Icon, Tooltip, Dropdown, DropdownItem } from '@/orchidui'
import { computed, ref } from 'vue'

const props = defineProps({
  primaryActions: Object
})
const emit = defineEmits({
  copy: [],
  'click:primaryActionsDropdown': []
})
const isCopied = ref(false)
const hasDropdownOptions = computed(() => props.primaryActions?.dropdownOptions)
const isDropdownOpened = ref(hasDropdownOptions.value?.isDropdownOpened ?? false)
const copyToClipBoard = () => {
  isCopied.value = true
  emit('copy')
  setTimeout(() => (isCopied.value = false), 1500)
}

const copyButtonTooltipText = computed(
  () => props.primaryActions?.copyTooltipContent ?? 'Copy link'
)
const copiedButtonTooltipText = computed(
  () => props.primaryActions?.copiedTooltipContent ?? 'Link copied!'
)
</script>

<template>
  <div
    class="p-1 gap-x-1 rounded-sm border text-oc-text-400 flex hover:bg-oc-bg group hover:border-oc-accent-1-100"
    :class="isDropdownOpened ? 'bg-oc-bg border-oc-accent-1-100' : 'border-transparent'"
  >
    <Tooltip v-if="primaryActions?.mainLinkAction" position="top" arrow-hidden :distance="7">
      <a :href="primaryActions?.mainLinkAction?.url" target="_blank">
        <Icon
          class="p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr"
          name="external-link"
        />
      </a>
      <template #popper>
        <div class="py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400">
          {{ primaryActions?.mainLinkAction?.tooltipContent }}
        </div>
      </template>
    </Tooltip>

    <template v-for="(item, index) in primaryActions.actions" :key="index">
      <div
        v-if="primaryActions?.mainLinkAction || index > 0"
        class="border-l group-hover:border-oc-accent-1-100 border-transparent"
      />
      <Tooltip position="top" arrow-hidden :distance="7">
        <Icon
          v-if="item?.isCopyButton"
          class="p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr"
          :name="isCopied ? 'check' : 'copy'"
          :class="isCopied ? '!text-oc-success' : ''"
          @click="copyToClipBoard"
        />
        <Icon
          v-else
          class="p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr"
          :name="item.icon"
          @click="item.onClick"
        />

        <template #popper>
          <div class="py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400">
            {{
              item?.isCopyButton
                ? isCopied
                  ? copiedButtonTooltipText
                  : copyButtonTooltipText
                : item.tooltipContent
            }}
          </div>
        </template>
      </Tooltip>
    </template>

    <div
      v-if="hasDropdownOptions"
      class="border-l group-hover:border-oc-accent-1-100"
      :class="isDropdownOpened ? 'border-oc-gray-200' : 'border-transparent'"
    />

    <Dropdown v-if="hasDropdownOptions" v-model="isDropdownOpened" :distance="6">
      <Tooltip position="top" arrow-hidden :distance="7">
        <Icon
          class="p-2 cursor-pointer rounded-sm hover:bg-oc-accent-1-50-tr"
          name="dots-vertical"
        />
        <template #popper>
          <div class="py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400">
            More actions
          </div>
        </template>
      </Tooltip>

      <template #menu>
        <div class="flex flex-col">
          <div class="p-2 border-b border-gray-200">
            <template v-for="(item, i) in primaryActions.dropdownOptions?.top" :key="i">
              <DropdownItem
                v-if="item?.isCopyButton"
                :icon="isCopied ? 'check' : 'copy'"
                :text="isCopied ? copiedButtonTooltipText : copyButtonTooltipText"
                :icon-classes="isCopied ? '!text-oc-success' : ''"
                @click="copyToClipBoard"
              />
              <DropdownItem v-else v-bind="item" @click="isDropdownOpened = false" />
            </template>
          </div>
          <div v-if="primaryActions.dropdownOptions?.bottom" class="p-2">
            <DropdownItem
              v-for="(item, i) in primaryActions.dropdownOptions?.bottom"
              :key="i"
              v-bind="item"
              @click="isDropdownOpened = false"
            />
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
