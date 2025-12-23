<script setup>
import { Icon } from '@/orchidui-core'

defineProps({
  title: {
    type: String,
    default: ''
  },
  menu: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
})
defineEmits(['titleClick', 'update:modelValue'])
</script>

<template>
  <div class="py-7 flex flex-col gap-y-3 px-4">
    <div
      v-if="title"
      class="py-4 gap-x-3 whitespace-nowrap cursor-pointer flex font-medium items-center"
      @click="$emit('titleClick')"
    >
      <Icon name="chevron-down" class="rotate-90 shrink-0" width="20" height="20" />
      {{ title }}
    </div>
    <div class="flex flex-col gap-y-2">
      <div
        v-for="(item, i) in menu"
        :key="i"
        class="py-3 whitespace-nowrap rounded cursor-pointer font-medium hover:bg-oc-accent-2-50-tr px-5 flex items-center"
        :class="
          modelValue === item.value ? 'bg-oc-accent-2-50-tr text-oc-accent-1' : 'text-oc-text-400'
        "
        @click="$emit('update:modelValue', item.value)"
      >
        <div class="flex-1">{{ item.label }}</div>
        <div class="ml-2" v-if="item.badgeVisible ? item.badgeVisible(item) : true">
          <div
            v-if="item.isBeta"
            class="bg-oc-warning text-white shrink-0 py-1 px-3 rounded-sm uppercase text-xs font-medium"
          >
            BETA
          </div>
          <div
            v-if="item.isNew"
            class="bg-oc-accent-2 text-white shrink-0 py-1 px-3 rounded-sm uppercase text-xs font-medium"
          >
            NEW
          </div>
          <div
            v-if="item.isTryIt"
            class="bg-oc-accent-2 text-white shrink-0 py-1 px-3 rounded-sm uppercase text-xs font-medium"
          >
            TRY IT
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
