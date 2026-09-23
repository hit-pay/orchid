<script setup>
import { CopyTooltip, Dropdown, DropdownItem, Icon } from '@/orchidui-core'
import { computed, ref } from 'vue'

const props = defineProps({
  /** v-model — controls whether the fly-out panel is visible. */
  modelValue: {
    type: Boolean,
    default: false
  },
  /** Show the ✕ close icon in the panel header. */
  isClose: {
    type: Boolean,
    default: true
  },
  /** Panel title text shown in the sticky header. */
  title: String,
  /** Description text shown below the title (with a copy icon). */
  description: String,
  /** Dropdown config object with `top` and optional `bottom` arrays of DropdownItem props. */
  dropdownOptions: {
    type: Object
  },
  /** Extra props forwarded to the Dropdown component. */
  dropdownProps: {
    type: Object,
    default: () => ({})
  },
  /**
   * Which side of the screen the panel slides in from.
   * @values left, right
   */
  position: {
    type: String,
    validator: (v) => ['left', 'right'].includes(v),
    default: 'right'
  }
})

const emit = defineEmits({
  /** Panel closed. Payload: `false`. */
  'update:model-value': []
})

const isOpen = ref(false)

// The closed state is applied as an inline `!important` style on properties consumers
// don't size the panel with, so classes like `!right-[16px] w-[566px]` can't pull a closed
// panel back on-screen. `right`/`left`/`width` are left entirely to the consumer.
// `visibility` interpolates as visible for the whole transition, so it only flips to
// hidden once the slide-out has finished.
const closedStyle = computed(() => {
  if (props.modelValue) return undefined
  // Extra offset clears the default `md:right-5` and typical consumer offsets mid-slide.
  const offset = props.position === 'left' ? 'calc(-100% - 2.5rem)' : 'calc(100% + 2.5rem)'
  return {
    visibility: 'hidden !important',
    pointerEvents: 'none !important',
    transform: `translateX(${offset}) !important`
  }
})
</script>

<template>
  <div
    class="overflow-y-auto fixed top-0 bottom-0 z-50 h-full rounded-md shadow-[-16px_24px_120px_0_rgba(38,42,50,0.20)] transition-all bg-oc-bg-light"
    :class="{
      'right-0 md:right-5': position === 'right',
      'left-0 md:left-5': position === 'left'
    }"
    :style="closedStyle"
    :inert="!modelValue"
    :aria-hidden="modelValue ? undefined : 'true'"
  >
    <div v-if="modelValue">
      <div
        class="flex sticky top-0 gap-x-9 justify-between items-start p-5 border-b border-oc-gray-200 bg-oc-bg-light"
      >
        <slot name="header">
          <div class="flex flex-col gap-y-1 max-w-[300px]">
            <span class="text-lg font-medium truncate">
              <slot name="title">
                {{ title }}
              </slot>
            </span>
            <slot name="description">
              <div class="flex gap-3 items-center">
                <span v-if="description" class="text-sm truncate text-oc-text-300">
                  {{ description }}
                </span>
                <CopyTooltip :value="description" :tooltip-options="{ strategy: 'fixed' }">
                  <template #default="{ isShow }">
                    <Icon
                      width="14"
                      height="14"
                      class="cursor-pointer text-oc-text-400"
                      name="copy"
                    />
                  </template>
                </CopyTooltip>
              </div>
            </slot>
          </div>
          <div class="flex gap-3 items-center">
            <template v-if="dropdownOptions">
              <Dropdown
                v-model="isOpen"
                :popper-options="{ strategy: 'fixed' }"
                placement="bottom"
                class="text-sm"
                v-bind="dropdownProps"
              >
                <div
                  class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
                >
                  <Icon name="dots-vertical" width="20" height="20" />
                </div>
                <template #menu>
                  <div class="p-2 border-b border-gray-200">
                    <DropdownItem v-for="(item, i) in dropdownOptions.top" :key="i" v-bind="item" />
                  </div>
                  <div v-if="dropdownOptions.bottom" class="p-2">
                    <DropdownItem
                      v-for="(item, i) in dropdownOptions.bottom"
                      :key="i"
                      v-bind="item"
                    />
                  </div>
                </template>
              </Dropdown>
            </template>

            <div
              v-if="isClose"
              class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
              @click="$emit('update:model-value', false)"
            >
              <Icon name="x" width="20" height="20" />
            </div>
          </div>
        </slot>
      </div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
