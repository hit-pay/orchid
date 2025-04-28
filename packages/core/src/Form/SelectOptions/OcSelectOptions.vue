<script setup>
import { BaseInput, Icon } from '@/orchidui-core'

import { computed } from 'vue'

const props = defineProps({
  isSmallImage: Boolean,
  variant: {
    type: String,
    default: 'grid'
  },
  optionType: {
    type: String,
    default: 'text' // text, icon, image
  },
  label: String,
  hint: String,
  errorMessage: String,
  placeholder: String,
  isDisabled: Boolean,
  borderless: Boolean,
  options: Array,
  modelValue: [Array, String, Number],
  isRequired: {
    type: Boolean,
    default: false
  },
  labelIcon: {
    type: String,
    default: ''
  },
  tooltipText: {
    type: String,
    default: ''
  },
  tooltipOptions: {
    type: Object,
    default: () => ({})
  },
  class: String
})

const emit = defineEmits({
  'update:modelValue': []
})

const update = (value) => {
  emit('update:modelValue', value)
}

const isGridVariant = computed(() => {
  return props.variant === 'grid'
})
</script>

<template>
  <BaseInput
    :label="label"
    :hint="hint"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <div
      class="gap-3"
      :class="[
        props.class,
        isGridVariant ? 'grid-cols-3' : variant === 'list2' ? 'grid-cols-2' : '',
        {
          'w-full grid': optionType !== 'icon',
          'flex flex-row ': optionType === 'icon'
        }
      ]"
    >
      <template v-if="optionType === 'icon'">
        <div class="flex gap-3 border border-oc-gray-200 p-3 rounded cursor-pointer">
          <div
            v-for="opt in options"
            :key="opt.value"
            class="p-1"
            :class="{
              'bg-oc-gray-200 rounded-sm': opt.value.toString() === modelValue.toString()
            }"
          >
            <Icon :name="opt.icon_name" @click="update(opt.value)"></Icon>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          v-for="opt in options"
          :key="opt.value"
          class="cursor-pointer group items-start"
          :class="{
            'flex border border-oc-gray-200 p-3 rounded hover:shadow': !isGridVariant,
            'border-2 border-oc-primary':
              !isGridVariant && opt.value.toString() === modelValue.toString(),
            '!border-0 hover:bg-oc-accent-1-50 flex': borderless,
            'bg-oc-bg-dark py-4 rounded-lg': isSmallImage
          }"
          @click="update(opt.value)"
        >
          <slot
            name="option"
            :option="opt"
            :selected="opt.value.toString() === modelValue.toString()"
          >
            <img
              v-if="opt.preview"
              class="group-hover:shadow rounded"
              :class="{
                'border-2 border-oc-primary':
                  isGridVariant && opt.value.toString() === modelValue.toString(),
                'border border-oc-gray-200':
                  (isGridVariant && opt.value.toString() !== modelValue.toString()) ||
                  !isGridVariant,
                'w-full': isGridVariant,
                'w-[50px]': !isGridVariant,
                'w-[60%] mx-auto': isSmallImage
              }"
              :src="opt.preview"
            />
            <div
              class="mt-2"
              :class="[isGridVariant ? 'text-center' : 'px-3', borderless ? 'flex-1' : '']"
            >
              <span
                class="font-medium text-oc-text-400 group-hover:text-oc-text-500"
                :class="{
                  'text-sm ': isGridVariant,
                  'text-oc-text-400 group-hover:text-oc-text-500':
                    isGridVariant && opt.value.toString() !== modelValue.toString(),
                  'text-oc-text-500':
                    isGridVariant && opt.value.toString() === modelValue.toString()
                }"
                >{{ opt.label }}</span
              >
              <div v-if="opt.description" class="flex text-sm text-oc-text-400 mt-2">
                {{ opt.description }}
              </div>
            </div>
            <Icon
              v-if="borderless"
              width="16"
              height="16"
              name="check-2"
              class="text-oc-primary"
              :class="opt.value.toString() === modelValue.toString() ? 'opacity-100' : 'opacity-0'"
            />
          </slot>
        </div>
      </template>
    </div>
  </BaseInput>
</template>
