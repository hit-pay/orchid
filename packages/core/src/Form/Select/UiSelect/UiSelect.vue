<script setup>
import { BaseInput, Button, Checkbox, Chip, Icon, Input, Skeleton } from '@/orchidui-core'
import {
  ComboboxContent,
  ComboboxItem,
  ComboboxRoot,
  ComboboxTrigger,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue
} from 'reka-ui'
import { computed, nextTick, ref, watch } from 'vue'

const props = defineProps({
  label: String,
  hint: String,
  icon: String,
  errorMessage: String,
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  defaultSearchPlaceholder: {
    type: String,
    default: 'Search'
  },
  inlineSearchPlaceholder: {
    type: String,
    default: 'Search'
  },
  isInlineLabel: Boolean,
  isFilterable: Boolean,
  isAsynchronousSearch: Boolean,
  isDisabled: Boolean,
  isReadonly: Boolean,
  isCheckboxes: Boolean,
  isSelectAll: Boolean,
  isAddNew: Boolean,
  isTransparent: Boolean,
  isSlim: Boolean,
  hideChevron: Boolean,
  options: Array,
  modelValue: [Array, String, Number],
  maxVisibleOptions: {
    type: Number,
    default: 0
  },
  multiple: Boolean,
  maxOptionAllowed: Number,
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
  chipProps: {
    type: Object,
    default: () => ({})
  },
  isInlineSearch: Boolean,
  isClearable: Boolean,
  searchKeywords: String,
  isLoading: Boolean,
  menuClasses: String,
  dropdownClasses: String
})

const emit = defineEmits({
  addNew: [],
  'update:modelValue': [],
  'max-option-allowed-set': [],
  onSearchKeywords: '',
  close: [],
  toggle: [],
  cleared: [],
  loadMore: []
})

const query = ref(props.searchKeywords ?? '')
const isOpen = ref(false)
const searchInputRef = ref()

const filterableOptions = computed(() => {
  const filteredOptions = []

  for (const option of props.options || []) {
    if (option.values) {
      const filteredGroup = option.values.filter(
        (subOption) =>
          subOption.label?.toLowerCase().includes(query.value.toLowerCase()) ||
          subOption.subLabel?.toLowerCase().includes(query.value.toLowerCase())
      )

      if (filteredGroup.length > 0) {
        filteredOptions.push({
          label: option.label,
          values: filteredGroup
        })
      }
    } else {
      if (
        option.label?.toLowerCase().includes(query.value.toLowerCase()) ||
        option.subLabel?.toLowerCase().includes(query.value.toLowerCase())
      ) {
        filteredOptions.push(option)
      }
    }
  }

  return filteredOptions
})

const localValueOption = computed(() => {
  if (props.multiple) {
    let selected = []
    if (props.modelValue) {
      for (const value of props.modelValue) {
        for (const option of props.options || []) {
          if (option.values) {
            option.values.forEach((o) => {
              if (o.value === value) {
                selected.push(o)
              }
            })
          } else {
            if (option.value === value) {
              selected.push(option)
            }
          }
        }
      }
    }
    return selected
  } else {
    return (props.options || []).find((o) => o.value?.toString() === props.modelValue?.toString())
  }
})

const isSelectedAll = computed(() => {
  if (props.multiple) {
    return props.modelValue?.length && props.modelValue?.length === filterableOptions.value.length
  }
  return false
})

const selectedValues = computed({
  get: () => props.multiple ? (props.modelValue || []) : props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleValueChange = (value) => {
  if (props.multiple) {
    const currentValues = props.modelValue || []
    let newValues
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(v => v !== value)
    } else {
      if (props.maxOptionAllowed && currentValues.length >= props.maxOptionAllowed) {
        emit('max-option-allowed-set')
        return
      }
      newValues = [...currentValues, value]
    }
    
    emit('update:modelValue', newValues)
  } else {
    emit('update:modelValue', value)
    isOpen.value = false
  }
}

const removeOption = (value) => {
  const newValues = (props.modelValue || []).filter((o) => o !== value)
  emit('update:modelValue', newValues)
}

const selectAll = () => {
  if (!props.isAsynchronousSearch) {
    if (isSelectedAll.value) {
      emit('update:modelValue', [])
    } else {
      emit('update:modelValue', filterableOptions.value.map((o) => o.value))
    }
  }
}

const handleOpenChange = (open) => {
  isOpen.value = open
  if (open) {
    emit('toggle')
    nextTick(() => {
      searchInputRef.value?.focus()
    })
  } else {
    emit('close')
  }
}

const handleSearch = (searchValue) => {
  query.value = searchValue
  emit('onSearchKeywords', searchValue)
}

const clearSelection = () => {
  emit('update:modelValue', props.multiple ? [] : null)
  emit('cleared')
}

watch(() => props.searchKeywords, (newValue) => {
  if (newValue !== undefined) {
    query.value = newValue
  }
})
</script>

<template>
  <BaseInput
    class="relative rounded"
    :label="isInlineLabel ? '' : label"
    :hint="hint"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <!-- Multiple Selection (Combobox) -->
    <ComboboxRoot
      v-if="multiple"
      v-model="selectedValues"
      :open="isOpen"
      :disabled="isDisabled || isReadonly"
      multiple
      @update:open="handleOpenChange"
    >
      <ComboboxTrigger
        class="border min-h-[36px] input-shadow transition-all duration-[250ms] ease-out w-full px-3 flex justify-between items-center bg-white cursor-pointer gap-x-3 rounded py-3"
        :class="[
          dropdownClasses,
          {
            'error-shadow': errorMessage && !isDisabled,
            'focused-shadow': isOpen && !isDisabled,
            'pointer-events-none !bg-oc-bg-dark': isDisabled,
            'border-none !min-h-[30px] !px-0': isTransparent && !isSlim,
            'border-none !min-h-[18px] !px-0': isSlim
          }
        ]"
      >
        <div class="flex flex-wrap gap-2 overflow-hidden flex-1">
          <slot name="selection">
            <Chip
              v-for="option in maxVisibleOptions
                ? localValueOption.slice(0, maxVisibleOptions)
                : localValueOption"
              :key="option.value"
              closable
              :variant="option.variant"
              :label="option.label"
              v-bind="chipProps"
              should-truncate-chip
              @remove="removeOption(option.value)"
            />
            <Chip
              v-if="maxVisibleOptions && localValueOption.length > maxVisibleOptions"
              :label="`+${localValueOption.length - maxVisibleOptions}`"
            />
          </slot>
          <span
            v-if="localValueOption.length === 0"
            class="text-oc-text-300 md:text-base text-lg"
          >
            {{ placeholder }}
          </span>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <Icon
            v-if="modelValue && isClearable"
            class="text-oc-text-400 transition-all duration-500 hover:rotate-90 cursor-pointer"
            width="16"
            height="16"
            name="x"
            @click.stop="clearSelection"
          />
          <Icon
            v-if="!hideChevron"
            class="w-5 h-5 transition-all shrink-0 duration-500"
            :class="{
              '-rotate-180': isOpen,
              'text-oc-text-400': !dropdownClasses
            }"
            name="chevron-down"
          />
        </div>
      </ComboboxTrigger>

      <ComboboxContent
        class="bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto z-50"
        :class="menuClasses"
        :side-offset="4"
      >
        <!-- Orchid Input -->
        <div
          v-if="isFilterable"
          class="sticky px-3 pt-3 top-0 z-10 bg-white"
        >
          <Input
            ref="searchInputRef"
            v-model="query"
            :placeholder="inlineSearchPlaceholder"
            icon="search"
            @update:model-value="handleSearch"
          />
        </div>

        <div class="flex px-3 pb-3 flex-col gap-y-2 pt-3">
          <!-- Select All Option -->
          <ComboboxItem
            v-if="isCheckboxes && isSelectAll && filterableOptions.length"
            class="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-oc-accent-1-50 data-[highlighted]:bg-oc-accent-1-50 data-[highlighted]:outline-none border-b border-oc-gray-200"            
            :value="'__select_all__'"
            @select="selectAll"
          >
            <!--  Orchid Checkbox -->
            <Checkbox
              :model-value="isSelectedAll"
              :is-partial="!isSelectedAll && !!modelValue?.length"
              class="!w-fit pointer-events-none"
            />
            <span>Select All</span>
          </ComboboxItem>

          <!-- Options -->
          <slot :f-options="filterableOptions" :select-option="handleValueChange">
            <ComboboxItem
              v-for="option in filterableOptions"
              :key="option.value"
              :value="option.value"
              :disabled="option.isDisabled"
              class="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-oc-accent-1-50 data-[highlighted]:bg-oc-accent-1-50 data-[highlighted]:outline-none"              
              @select="handleValueChange(option.value)"
            >
              <!--Orchid Checkbox -->
              <Checkbox
                v-if="isCheckboxes"
                :model-value="modelValue?.includes(option.value)"
                class="!w-fit pointer-events-none"
              />
              <div class="flex flex-col flex-1">
                <span>{{ option.label }}</span>
                <span v-if="option.subLabel" class="text-sm text-oc-text-300">
                  {{ option.subLabel }}
                </span>
              </div>
              <Icon 
                v-if="modelValue?.includes(option.value) && !isCheckboxes" 
                class="w-5 h-5 text-oc-primary" 
                name="check-2" 
              />
            </ComboboxItem>
          </slot>

          <!-- No results -->
          <slot name="empty">
            <div v-if="!filterableOptions.length" class="text-sm text-oc-text-300 text-center py-4">
              No data to display
            </div>
          </slot>

          <!-- Loading skeleton -->
          <Skeleton
            v-if="isLoading"
            class="h-[20px] rounded-sm mt-2"
          />
        </div>

        <!-- Add New Button -->
        <Button
          v-if="isAddNew"
          variant="secondary"
          class="flex items-center py-2 justify-center gap-x-[6px] sticky bottom-0 bg-white z-10"
          size="small"
          is-transparent
          @click="$emit('addNew')"
        >
          <Icon class="w-5 h-5" name="plus" />
          Add new
        </Button>
      </ComboboxContent>
    </ComboboxRoot>

    <!-- Single Selection (Select) -->
    <SelectRoot
      v-else
      :model-value="modelValue"
      :open="isOpen"
      :disabled="isDisabled || isReadonly"
      @update:model-value="handleValueChange"
      @update:open="handleOpenChange"
    >
      <SelectTrigger
        class="border min-h-[36px] input-shadow transition-all duration-[250ms] ease-out w-full px-3 flex justify-between items-center bg-white cursor-pointer gap-x-3 rounded"
        :class="[
          dropdownClasses,
          {
            'error-shadow': errorMessage && !isDisabled,
            'focused-shadow': isOpen && !isDisabled,
            'pointer-events-none !bg-oc-bg-dark': isDisabled,
            'border-none !min-h-[30px] !px-0': isTransparent && !isSlim,
            'border-none !min-h-[18px] !px-0': isSlim
          }
        ]"
      >
        <div class="flex items-center gap-x-3 flex-1 overflow-hidden">
          <Icon v-if="icon" :name="icon" width="16" height="16" />
          <span v-if="isInlineLabel && label" class="text-oc-text-300">{{ label }}:</span>
          
          <!--  Orchid Input -->
          <template v-if="isInlineSearch && isFilterable && !localValueOption">
            <Input
              v-model="query"
              :placeholder="defaultSearchPlaceholder"
              input-class="border-none !shadow-none"
              :is-readonly="!isOpen"
              @update:model-value="handleSearch"
            />
          </template>
          <template v-else>
            <SelectValue :placeholder="placeholder">
              <span class="truncate">
                {{ localValueOption?.label || placeholder }}
              </span>
            </SelectValue>
          </template>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <Icon
            v-if="modelValue && isClearable"
            class="text-oc-text-400 transition-all duration-500 hover:rotate-90 cursor-pointer"
            width="16"
            height="16"
            name="x"
            @click.stop="clearSelection"
          />
          <Icon
            v-if="!hideChevron"
            class="w-5 h-5 transition-all shrink-0 duration-500"
            :class="{
              '-rotate-180': isOpen,
              'text-oc-text-400': !dropdownClasses
            }"
            name="chevron-down"
          />
        </div>
      </SelectTrigger>

      <SelectContent
        class="bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto z-50"
        :class="menuClasses"
        :side-offset="4"
      >
        <!--  Orchid Input -->
        <div
          v-if="isFilterable && (!isInlineSearch || localValueOption)"
          class="sticky px-3 pt-3 top-0 z-10 bg-white"
        >
          <Input
            ref="searchInputRef"
            v-model="query"
            icon="search"
            :placeholder="inlineSearchPlaceholder"
            @update:model-value="handleSearch"
          />
        </div>

        <div class="flex px-3 pb-3 flex-col gap-y-2 pt-3">
          <!-- Options -->
          <slot :f-options="filterableOptions" :select-option="handleValueChange">
            <SelectItem
              v-for="option in filterableOptions"
              :key="option.value"
              :value="option.value"
              :disabled="option.isDisabled"
              class="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-oc-accent-1-50 data-[highlighted]:bg-oc-accent-1-50 data-[highlighted]:outline-none"
            >
              <div class="flex flex-col flex-1">
                <span>{{ option.label }}</span>
                <span v-if="option.subLabel" class="text-sm text-oc-text-300">
                  {{ option.subLabel }}
                </span>
              </div>
              <Icon 
                v-if="modelValue === option.value" 
                class="w-5 h-5 text-oc-primary" 
                name="check-2" 
              />
            </SelectItem>
          </slot>

          <!-- No results -->
          <slot name="empty">
            <div v-if="!filterableOptions.length" class="text-sm text-oc-text-300 text-center py-4">
              No data to display
            </div>
          </slot>

          <!-- Loading skeleton -->
          <Skeleton
            v-if="isLoading"
            class="h-[20px] rounded-sm mt-2"
          />
        </div>

        <!-- Add New Button -->
        <Button
          v-if="isAddNew"
          variant="secondary"
          class="flex items-center py-2 justify-center gap-x-[6px] sticky bottom-0 bg-white z-10"
          size="small"
          is-transparent
          @click="$emit('addNew')"
        >
          <Icon class="w-5 h-5" name="plus" />
          Add new
        </Button>
      </SelectContent>
    </SelectRoot>

    <template #tooltipText>
      <div v-if="$slots.selectTooltipText">
        <slot name="selectTooltipText"></slot>
      </div>
    </template>
    <template v-if="$slots.hint" #hint>
      <slot name="hint" />
    </template>
  </BaseInput>
</template>