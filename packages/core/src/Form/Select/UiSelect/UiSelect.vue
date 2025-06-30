<script setup>
import { BaseInput, Button, Checkbox, Chip, Icon, Input, Skeleton } from '@/orchidui-core'
import {
  ComboboxContent,
  ComboboxItem,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
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
  isDisabled:{
    type:Boolean,
    default:false
  },
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
  if (props.multiple && props.modelValue?.length) {
    // Get total count of all available options (including grouped ones)
    let totalOptionsCount = 0
    
    for (const option of filterableOptions.value) {
      if (option.values) {
        totalOptionsCount += option.values.length
      } else {
        totalOptionsCount += 1
      }
    }
    
    return props.modelValue.length === totalOptionsCount
  }
  return false
})

const selectedValues = computed({
  get: () => props.multiple ? (props.modelValue || []) : props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleValueChange = (value) => {
  // Don't handle the special select all value
  if (value === '__select_all__') {
    return
  }
  
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

const selectAll = (event) => {
  // Prevent the default ComboboxItem selection behavior
  event.preventDefault()
  event.stopPropagation()
  
  if (!props.isAsynchronousSearch) {
    if (isSelectedAll.value) {
      emit('update:modelValue', [])
    } else {
      // Handle both grouped and non-grouped options
      const allValues = []
      
      for (const option of filterableOptions.value) {
        if (option.values) {
          // Grouped option - add all sub-option values
          for (const subOption of option.values) {
            allValues.push(subOption.value)
          }
        } else {
          // Regular option - add its value
          allValues.push(option.value)
        }
      }
      
      emit('update:modelValue', allValues)
    }
  }
}

const handleOpenChange = (open) => {
  isOpen.value = open
  if (open) {
    emit('toggle')
    console.log('Should focus first option now...');
    // Only focus search input if filterable and there are multiple options
    // Let Reka UI handle focus for the first option otherwise
    if (props.isFilterable && filterableOptions.value.length > 0) {
      nextTick(() => {
        searchInputRef.value?.focus()
      })
    }
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
        class="bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto w-[var(--radix-combobox-trigger-width)] min-w-[var(--radix-combobox-trigger-width)]"
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

        <!-- Add ComboboxViewport wrapper -->
        <ComboboxViewport class="flex px-3 pb-3 flex-col gap-y-2 pt-3">
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
            <template v-for="option in filterableOptions">
              <template v-if="option.isGroup && Array.isArray(option.value)">
                <div class="px-3 py-2 text-xs font-semibold text-oc-text-400 select-none cursor-default">
                  {{ option.label }}
                </div>
                <ComboboxItem
                  v-for="subOption in option.value"
                  :key="subOption.value"
                  :value="subOption.value"
                  :disabled="subOption.isDisabled"
                  class="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-oc-accent-1-50 data-[highlighted]:bg-oc-accent-1-50 data-[highlighted]:outline-none"
                  @select="handleValueChange(subOption.value)"
                >
                  <Checkbox
                    v-if="isCheckboxes"
                    :model-value="modelValue?.includes(subOption.value)"
                    class="!w-fit pointer-events-none"
                  />
                  <div class="flex flex-col flex-1">
                    <span>{{ subOption.label }}</span>
                    <span v-if="subOption.subLabel" class="text-sm text-oc-text-300">
                      {{ subOption.subLabel }}
                    </span>
                  </div>
                  <Icon 
                    v-if="modelValue?.includes(subOption.value) && !isCheckboxes" 
                    class="w-5 h-5 text-oc-primary" 
                    name="check-2" 
                  />
                </ComboboxItem>
              </template>
              <template v-else>
                <ComboboxItem
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.isDisabled"
                  class="flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg transition-colors duration-150
                    hover:bg-oc-accent-1-50 focus-visible:ring-2 focus-visible:ring-oc-primary
                    data-[highlighted]:bg-oc-accent-1-50 data-[highlighted]:outline-none
                    group"
                  @select="handleValueChange(option.value)"
                >
                  <Checkbox
                    v-if="isCheckboxes"
                    :model-value="modelValue?.includes(option.value)"
                    class="!w-5 !h-5 pointer-events-none"
                  />
                  <div class="flex flex-col flex-1 min-w-0">
                    <span class="truncate font-medium text-oc-text-900 group-data-[highlighted]:text-oc-primary">{{ option.label }}</span>
                    <span v-if="option.subLabel" class="text-xs text-oc-text-300 truncate">{{ option.subLabel }}</span>
                  </div>
                  <Icon 
                    v-if="modelValue?.includes(option.value) && !isCheckboxes" 
                    class="w-5 h-5 text-oc-primary" 
                    name="check-2" 
                  />
                </ComboboxItem>
              </template>
            </template>
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
        </ComboboxViewport>

        <!-- Add New Button -->
        <Button
          v-if="isAddNew"
          variant="secondary"
          class="flex items-center py-2 px-5 justify-center gap-x-2 sticky bottom-0 bg-white z-10 rounded-b-xl border-t border-oc-gray-100 shadow-[0_-2px_8px_0_rgba(0,0,0,0.04)] hover:bg-oc-accent-1-25 focus-visible:ring-2 focus-visible:ring-oc-primary transition-colors duration-150"
          size="small"
          is-transparent
          @click="$emit('addNew')"
        >
          <Icon class="w-5 h-5" name="plus" />
          <span class="font-semibold text-oc-primary tracking-wide">Add new</span>
        </Button>
      </ComboboxContent>
    </ComboboxRoot>

    <!-- Single Selection (Select) -->
    <SelectRoot
      v-else
      :model-value="modelValue"
      :open="isOpen"
      :disabled="isDisabled || isReadonly"
      :dir="'ltr'"
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
        class="bg-white border border-[#E5E6EA] rounded-lg shadow-[0_3px_22px_rgba(38,42,50,0.09)] max-h-[454px] overflow-y-auto min-w-[300px] w-[300px] p-2 gap-1"
        :class="menuClasses"
        :side-offset="4"
        :avoid-collisions="false"
        side="bottom"
        align="start"
        :position="'popper'"
      >
        <!--  Orchid Input -->
        <div
          v-if="isFilterable && (!isInlineSearch || localValueOption)"
          class="sticky px-2 pt-2 top-0 z-10 bg-white"
        >
          <Input
            ref="searchInputRef"
            v-model="query"
            icon="search"
            :placeholder="inlineSearchPlaceholder"
            @update:model-value="handleSearch"
            input-class="h-9 px-2 border border-[#E5E6EA] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1.5px_1.5px_rgba(0,0,0,0.09)] text-[14px] font-inter text-[#9295A5]"
          />
        </div>

        <div class="flex flex-col gap-1 pb-2">
          <!-- Options -->
          <slot :f-options="filterableOptions" :select-option="handleValueChange">
            <template v-for="option in filterableOptions">
              <template v-if="option.isGroup && Array.isArray(option.value)">
                <div class="px-2 pt-2 pb-1 text-[10px] font-medium uppercase tracking-wide text-[#03102F] font-inter">{{ option.label }}</div>
                <SelectItem
                  v-for="subOption in option.value"
                  :key="subOption.value"
                  :value="subOption.value"
                  :disabled="subOption.isDisabled"
                  class="flex flex-row items-center px-2 py-2 gap-2 w-[284px] h-[37px] rounded-md text-[14px] font-inter text-[#61667C] hover:bg-[#F5F7FB] focus-visible:ring-2 focus-visible:ring-[#2465DE] transition-colors duration-100"
                  :class="{ 'opacity-50 !hover:bg-white !cursor-default !pointer-events-none': subOption.isDisabled }"
                >
                  <div class="flex flex-1 items-center min-w-0">
                    <span class="truncate">{{ subOption.label }}</span>
                  </div>
                  <Icon 
                    v-if="modelValue === subOption.value" 
                    class="w-5 h-5 text-[#2465DE]" 
                    name="check-2" 
                  />
                </SelectItem>
              </template>
              <template v-else>
                <SelectItem
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.isDisabled"
                  class="flex flex-row items-center px-2 py-2 gap-2 w-[284px] h-[37px] rounded-md text-[14px] font-inter text-[#61667C] hover:bg-[#F5F7FB] focus-visible:ring-2 focus-visible:ring-[#2465DE] transition-colors duration-100"
                  :class="{ 'opacity-50 !hover:bg-white !cursor-default !pointer-events-none': option.isDisabled }"
                >
                  <div class="flex flex-1 items-center min-w-0">
                    <span class="truncate">{{ option.label }}</span>
                  </div>
                  <Icon 
                    v-if="modelValue === option.value" 
                    class="w-5 h-5 text-[#2465DE]" 
                    name="check-2" 
                  />
                </SelectItem>
              </template>
            </template>
          </slot>
        </div>

        <!-- Add New Button -->
        <Button
          v-if="isAddNew"
          variant="secondary"
          class="flex items-center py-2 px-5 justify-center gap-x-2 sticky bottom-0 bg-white z-10 rounded-b-xl border-t border-oc-gray-100 shadow-[0_-2px_8px_0_rgba(0,0,0,0.04)] hover:bg-oc-accent-1-25 focus-visible:ring-2 focus-visible:ring-oc-primary transition-colors duration-150"
          size="small"
          is-transparent
          @click="$emit('addNew')"
        >
          <Icon class="w-5 h-5" name="plus" />
          <span class="font-semibold text-oc-primary tracking-wide">Add new</span>
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