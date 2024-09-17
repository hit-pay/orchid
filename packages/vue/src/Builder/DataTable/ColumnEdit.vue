<script setup lang="ts">
import { Dropdown, Button, Icon, Checkbox } from '@/orchidui'
import { ref, onMounted } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import { formatHeadersFromLocalStorage, getFromLocalStorage } from './utils/editColumnsUtils'

const emit = defineEmits(['change-active', 'onMoved', 'update-order'])
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  },
  headers: {
    type: Array,
    default: () => []
  },
  localKey: {
    type: String,
    default: ''
  }
})
const activeHeaders = ref([])
const fixedHeaders = ref([])
const isColumnEditOpened = ref(false)

const updateFilters = (isOnMount = false) => {
  fixedHeaders.value = fixedHeaders.value.map((header) => ({
    ...header,
    isActive: true
  }))
  emit('update-order', {
    fixedHeaders: fixedHeaders.value,
    activeHeaders: activeHeaders.value,
    isOnMount
  })
}

const dragOptions = {
  handle: '.drag-el',
  filter: '.is-disabled',
  group: 'headers',
  animation: 500,
  forceFallback: false,
  move: (evt) => (evt.to.dataset.activeHeaders ? true : !!evt.draggedContext.futureIndex),
  'onUpdate:modelValue': () => updateFilters()
}

onMounted(() => {
  const columnEdit = getFromLocalStorage(props.localKey)
  const { fixed, active } = formatHeadersFromLocalStorage(columnEdit, props.headers, props.localKey)
  fixedHeaders.value = fixed || props.headers.slice(0, 1)
  activeHeaders.value =
    active ||
    props.headers.slice(1).map((header) => ({
      ...header,
      isActive: true
    }))
  updateFilters(true)
})
</script>

<template>
  <Dropdown v-model="isColumnEditOpened" class="h-[36px]">
    <Button label="Edit Column" left-icon="setting" variant="secondary" />
    <template #menu>
      <div class="p-5 gap-y-4 text-sm flex w-[250px] flex-col">
        <div
          v-if="fixedHeaders.length"
          class="gap-y-2 flex flex-col border-b pb-3 border-oc-gray-200"
        >
          <span class="text-oc-text-400 font-medium">Fixed columns</span>
          <VueDraggableNext key="key" v-model="fixedHeaders" v-bind="dragOptions">
            <div
              v-for="(fixedHeader, i) in fixedHeaders"
              :key="fixedHeader.key"
              class="flex items-center justify-between h-[26px]"
              :class="i ? '' : 'is-disabled'"
            >
              <span>{{ fixedHeader.label }}</span>
              <Icon
                v-if="i"
                width="18"
                height="18"
                class="text-oc-text-400 drag-el cursor-move"
                name="draggable"
              />
            </div>
          </VueDraggableNext>
        </div>
        <div class="gap-y-2 flex flex-col">
          <span class="text-oc-text-400 font-medium">Active columns</span>
          <VueDraggableNext
            key="key"
            v-model="activeHeaders"
            v-bind="dragOptions"
            data-active-headers="true"
          >
            <template v-for="activeHeader in activeHeaders" :key="activeHeader.key">
              <div
                v-if="activeHeader.key !== 'actions'"
                class="flex items-center bg-white justify-between h-[26px]"
              >
                <div class="flex items-center w-full gap-x-3">
                  <Checkbox
                    v-model="activeHeader.isActive"
                    class="!w-fit"
                    @update:model-value="updateFilters()"
                  />
                  <div class="truncate w-full max-w-[160px]">{{ activeHeader.label }}</div>
                </div>
                <Icon
                  v-if="activeHeaders.length > 1"
                  width="18"
                  height="18"
                  class="text-oc-text-400 drag-el cursor-move"
                  name="draggable"
                />
              </div>
            </template>
          </VueDraggableNext>
        </div>
      </div>
    </template>
  </Dropdown>
</template>

<style scoped lang="scss"></style>
