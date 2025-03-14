<script setup>
import { Input, Dropdown, Icon } from '@/orchidui-core'
import { computed, ref } from 'vue'

const props = defineProps({
  placeholder: String,
  hint: String,
  label: String,
  errorMessages: {
    type: Object,
    default: () => ({
      link: '',
      title: ''
    })
  },
  isInlineLabel: Boolean,
  isDisabled: Boolean,
  modelValue: String,
  type: String,
  title: String,
  links: {
    type: Array,
    default: () => []
  },
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
  isEdit: Boolean
})

const emit = defineEmits({
  'update:modelValue': [],
  'update:type': [],
  'update:title': []
})

const isDropdownOpened = ref(false)
const selectedLinkType = ref(props.type ?? props.links?.[0]?.value)
const linkTitle = ref(props.title ?? '')
const selectedLinkTypeProps = computed(
  () => props.links.find((link) => link.value === selectedLinkType.value) ?? {}
)
const preFill = computed(() => selectedLinkTypeProps.value.preFill ?? '')
const localValue = ref(props.modelValue ? props.modelValue.replace(preFill.value, '') : '')

const updateLinkType = (value) => {
  const newPreFill = props.links.find((link) => link.value === value)?.preFill

  emit('update:modelValue', props.modelValue.replace(preFill.value, newPreFill))

  selectedLinkType.value = value
  emit('update:type', value)
  isDropdownOpened.value = false
}

const update = (value) => {
  localValue.value = value
  emit('update:modelValue', preFill.value + value)
  if (!props.isEdit && selectedLinkType.value !== 'link') {
    emit('update:title', value)
  }
}

const placeholderInput = computed(() => selectedLinkTypeProps.value.placeholder ?? '')
const isOtherLink = computed(() => selectedLinkType.value === 'link')
</script>

<template>
  <div>
    <Input
      v-if="isOtherLink || isEdit"
      v-model="linkTitle"
      class="mb-3"
      label="Title"
      placeholder="Title"
      :error-message="errorMessages.title"
      @update:model-value="$emit('update:title', $event)"
    />
    <Input
      :placeholder="placeholderInput"
      :label="selectedLinkType === 'link' ? 'Link' : label"
      :error-message="errorMessages.link"
      :is-inline-label="isInlineLabel"
      :disabled="isDisabled"
      :hint="hint"
      :pre-fill="preFill"
      :model-value="localValue"
      :is-required="isRequired"
      :label-icon="labelIcon"
      :tooltip-text="tooltipText"
      :tooltip-options="tooltipOptions"
      @update:model-value="update"
    >
      <template #trailing>
        <Dropdown v-model="isDropdownOpened" :distance="10">
          <div class="flex items-center text-oc-text-400 gap-x-2">
            <Icon
              v-if="selectedLinkTypeProps.icon"
              width="20"
              height="20"
              :name="selectedLinkTypeProps.icon"
            />
            <Icon
              width="16"
              height="16"
              class="transition duration-300"
              name="chevron-down"
              :class="isDropdownOpened ? '-rotate-180' : ''"
            />
          </div>

          <template #menu>
            <div v-if="!isEdit" class="flex flex-col gap-2 p-2 py-3">
              <div
                v-for="link in links"
                :key="link.value"
                class="flex items-center px-3 py-2 rounded-sm cursor-pointer gap-x-3 text-oc-text-400 hover:bg-gray-50"
                @click="updateLinkType(link.value)"
              >
                <Icon width="20" height="20" :name="link.icon" />
                {{ link.label }}
              </div>
            </div>
          </template>
        </Dropdown>
      </template>
    </Input>
  </div>
</template>
