import { Theme, UiSelect } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: UiSelect,
  tags: ['autodocs'],
  title: 'Components/Form/UiSelect'
}

const commonDefaults = {
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isInlineLabel: false,
  isFilterable: false,
  isAsynchronousSearch: false,
  isCheckboxes: false,
  isSelectAll: false,
  isAddNew: false,
  isTransparent: false,
  isSlim: false,
  isInlineSearch: false,
  isClearable: false,
  isLoading: false,
  hideChevron: false,
  maxVisibleOptions: 0,
  labelIcon: '',
  tooltipText: '',
  tooltipOptions: {},
  chipProps: {},
  searchKeywords: '',
  menuClasses: '',
  dropdownClasses: ''
}

export const Default = {
  argTypes: {
    labelIcon: {
      control: 'select',
      options: ['', 'question-mark']
    }
  },
  args: {
    ...commonDefaults,
    label: 'Label',
    hint: 'Hint',
    placeholder: 'Select an option',
    errorMessage: '',
    options: [
      {
        label: 'Option 1',
        subLabel: 'sub label of Option 1',
        value: 1
      },
      {
        label: 'Option 2',
        subLabel: 'sub label of Option 2',
        value: 2,
        isDisabled: true
      },
      {
        label: 'Option 3',
        value: 3,
        isDisabled: true
      },
      {
        label: 'Option 4',
        value: 4
      },
      {
        label: 'Option 5',
        subLabel: 'sub label of Option 5',
        value: 5
      },
      {
        label: 'Option 6',
        subLabel: 'sub label of Option 6',
        value: 6
      }
    ],
    isFilterable: true,
    isInlineSearch: true,
    isAddNew: true,
    isRequired: false,
    isClearable: true,
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10
    }
  },
  render: (args) => ({
    components: { Theme, UiSelect },
    setup() {
      const selectedOption = ref()
      return { selectedOption, args }
    },
    template: `
      <Theme colorMode="light">
        <div class="w-full h-[400px] p-4">
          <div class="mb-4">Selected value: {{ selectedOption }}</div>
          <UiSelect
            v-model="selectedOption"
            v-bind="args"
            @cleared="selectedOption = undefined"
            @on-search-keywords="(query) => console.log('Search:', query)"
            @load-more="() => console.log('load-more')"
            @add-new="() => console.log('add-new')"
          />
        </div>
      </Theme>
    `
  })
}

export const Multiple = {
  args: {
    ...commonDefaults,
    label: 'Multiple Selection',
    hint: 'You can select multiple options',
    placeholder: 'Select options',
    multiple: true,
    isCheckboxes: true,
    isSelectAll: true,
    isFilterable: true,
    maxOptionAllowed: 3,
    options: [
      {
        label: 'Option 1',
        subLabel: 'sub label of Option 1',
        value: 1
      },
      {
        label: 'Option 2',
        subLabel: 'sub label of Option 2',
        value: 2
      },
      {
        label: 'Option 3',
        value: 3
      },
      {
        label: 'Option 4 with very long text, it should be truncated',
        value: 4
      },
      {
        label: 'Option 5',
        value: 5
      },
      {
        label: 'Option 6',
        value: 6
      }
    ]
  },
  render: (args) => ({
    components: { Theme, UiSelect },
    setup() {
      const selectedOptions = ref([])
      
      const setExceedMaxOption = () => {
        console.log('Exceed max options allowed')
      }
      
      return { selectedOptions, args, setExceedMaxOption }
    },
    template: `
      <Theme colorMode="light" class="p-4">
        <div class="w-full h-[400px]">
          <div class="mb-4">Selected values: {{ selectedOptions }}</div>
          <UiSelect
            v-model="selectedOptions"
            v-bind="args"
            @max-option-allowed-set="setExceedMaxOption"
            @cleared="selectedOptions = []"
            @on-search-keywords="(query) => console.log('Search:', query)"
            @load-more="() => console.log('load-more')"
            @add-new="() => console.log('add-new')"
          />
        </div>
      </Theme>
    `
  })
}

export const WithGroups = {
  args: {
    ...commonDefaults,
    label: 'Grouped Options',
    hint: 'Options organized in groups',
    placeholder: 'Select from groups',
    isFilterable: true,
    options: [
      {
        label: 'Fruits',
        isGroup: true,
        value: [
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Cherry', value: 'cherry' }
        ]
      },
      {
        label: 'Vegetables',
        isGroup: true,
        value: [
          { label: 'Carrot', value: 'carrot' },
          { label: 'Broccoli', value: 'broccoli' },
          { label: 'Spinach', value: 'spinach' }
        ]
      }
    ]
  },
  render: (args) => ({
    components: { Theme, UiSelect },
    setup() {
      const selectedOption = ref()
      return { selectedOption, args }
    },
    template: `
      <Theme colorMode="light">
        <div class="w-full h-[400px] p-4">
          <div class="mb-4">Selected value: {{ selectedOption }}</div>
          <UiSelect
            v-model="selectedOption"
            v-bind="args"
            @cleared="selectedOption = undefined"
          />
        </div>
      </Theme>
    `
  })
}

export const AsyncSearch = {
  args: {
    ...commonDefaults,
    label: 'Async Search',
    hint: 'Search will trigger API call',
    placeholder: 'Type to search...',
    isFilterable: true,
    isAsynchronousSearch: true,
    options: []
  },
  render: (args) => ({
    components: { Theme, UiSelect },
    setup() {
      const selectedOption = ref()
      const isLoading = ref(false)
      const options = ref([])
      
      const handleAsyncSearch = async (query) => {
        if (!query) {
          options.value = []
          return
        }
        
        isLoading.value = true
        
        // Simulate API call
        setTimeout(() => {
          options.value = [
            { label: `Result 1 for "${query}"`, value: `${query}_1` },
            { label: `Result 2 for "${query}"`, value: `${query}_2` },
            { label: `Result 3 for "${query}"`, value: `${query}_3` }
          ]
          isLoading.value = false
        }, 1000)
      }
      
      return { selectedOption, args, isLoading, options, handleAsyncSearch }
    },
    template: `
      <Theme colorMode="light">
        <div class="w-full h-[400px] p-4">
          <div class="mb-4">Selected value: {{ selectedOption }}</div>
          <UiSelect
            v-model="selectedOption"
            v-bind="args"
            :options="options"
            :is-loading="isLoading"
            @on-search-keywords="handleAsyncSearch"
            @cleared="selectedOption = undefined"
          />
        </div>
      </Theme>
    `
  })
}

export const WithAddNew = {
  args: {
    ...commonDefaults,
    label: 'Add New Option',
    hint: 'You can add new options if not found',
    placeholder: 'Select or add new',
    isFilterable: true,
    isAddNew: true,
    options: [
      { label: 'Existing Option 1', value: 1 },
      { label: 'Existing Option 2', value: 2 },
      { label: 'Existing Option 3', value: 3 }
    ]
  },
  render: (args) => ({
    components: { Theme, UiSelect },
    setup() {
      const selectedOption = ref()
      const options = ref([...args.options])
      
      const handleAddNew = (newOptionLabel) => {
        const newOption = {
          label: newOptionLabel,
          value: Date.now() // Use timestamp as unique value
        }
        options.value.push(newOption)
        selectedOption.value = newOption.value
        console.log('Added new option:', newOption)
      }
      
      return { selectedOption, args, options, handleAddNew }
    },
    template: `
      <Theme colorMode="light">
        <div class="w-full h-[400px] p-4">
          <div class="mb-4">Selected value: {{ selectedOption }}</div>
          <UiSelect
            v-model="selectedOption"
            v-bind="args"
            :options="options"
            @add-new="handleAddNew"
            @cleared="selectedOption = undefined"
          />
        </div>
      </Theme>
    `
  })
}

export const ErrorState = {
  args: {
    ...commonDefaults,
    label: 'Select with Error',
    hint: 'This field has an error',
    placeholder: 'Select an option',
    errorMessage: 'Please select a valid option',
    isRequired: true,
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 }
    ]
  },
  render: (args) => ({
    components: { Theme, UiSelect },
    setup() {
      const selectedOption = ref()
      return { selectedOption, args }
    },
    template: `
      <Theme colorMode="light">
        <div class="w-full h-[400px] p-4">
          <div class="mb-4">Selected value: {{ selectedOption }}</div>
          <UiSelect
            v-model="selectedOption"
            v-bind="args"
            @cleared="selectedOption = undefined"
          />
        </div>
      </Theme>
    `
  })
}

export const Disabled = {
  args: {
    ...commonDefaults,
    label: 'Disabled Select',
    hint: 'This select is disabled',
    placeholder: 'Cannot select',
    isDisabled: true,
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 }
    ]
  },
  render: (args) => ({
    components: { Theme, UiSelect },
    setup() {
      const selectedOption = ref()
      return { selectedOption, args }
    },
    template: `
      <Theme colorMode="light">
        <div class="w-full h-[400px] p-4">
          <div class="mb-4">Selected value: {{ selectedOption }}</div>
          <UiSelect
            v-model="selectedOption"
            v-bind="args"
          />
        </div>
      </Theme>
    `
  })
}