<script setup>
import { Icon, Button } from '@/orchidui-core'

defineProps({
  title: String,
  subtitle: String,
  state: String,
  headerButton: Object,
  items: Array,
  noHeader: Boolean,
  flat: Boolean,
  contentClasses: String,
});

const STATE_ICONS = {
  completed: {
    name: 'check-fill',
    class: 'text-oc-success-500'
  }
}
</script>

<template>
  <div
    class="group border-gray-200 overflow-hidden rounded flex flex-col grow transition relative"
    :class="[
      flat ? 'border-none' : 'border hover:shadow-normal',
    ]"
  >
    <div
      v-if="!noHeader"
      class="px-5 py-3 bg-oc-gray-50 border-b border-oc-gray-200"
    >
      <div class="flex items-center">
        <div class="flex-1">
          <h6 class="font-medium text-base leading-[1.5] m-0 text-oc-text-500">{{ title }}</h6>
        </div>
        <div class="shrink-0 flex items-center gap-6">
          <Button
            v-if="headerButton"
            is-transparent
            variant="secondary"
            size="small"
            class="opacity-0 group-hover:opacity-100 transition-opacity"
            v-bind="headerButton"
          />

          <Icon v-if="state && STATE_ICONS[state]" v-bind="STATE_ICONS[state]" width="20" height="20" />
        </div>
      </div>
    </div>

    <div
      class="bg-white"
      :class="[
        contentClasses,
        flat ? 'p-5' : 'p-6 pb-4'
      ]"
    >
      <slot>
        <template v-if="items">
          <div class="grid grid-cols-2">
            <div v-for="(item, index) in items" :key="index" class="text-base leading-[1.5]">
              <label class="m-0 text-oc-text-400">{{ item.label }}</label>
              <div
                class="m-0 text-oc-text-500 mt-1"
              >
                <ul v-if="Array.isArray(item.value)" class="list-disc ml-5">
                  <li v-for="valueItem in item.value" :key="`${index}-${valueItem}`">
                    {{ valueItem }}
                  </li>
                </ul>
                <div v-else>
                  {{ item.value }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>
