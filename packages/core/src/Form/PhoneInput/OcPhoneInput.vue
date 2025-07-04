<script setup>
import { Dropdown, Input, Icon } from '@/orchidui-core'
import { computed, ref } from 'vue'
import { preventEventIfNotNumberInput } from '@/orchidui-core/composables/helpers.js'
import { parsePhoneNumber } from 'libphonenumber-js'

const props = defineProps({
  countryCodes: { type: Array, default: () => [] },
  initialCountryCode: {
    type: String,
    default: 'sg'
  },
  errorMessage: String,
  modelValue: {
    type: Array,
    default: () => ['sg', '']
  },
  placeholder: String,
  hint: String,
  label: String,
  isInlineLabel: Boolean,
  isDisabled: Boolean,
  shouldParseCountryCode: Boolean,
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
  }
})
const emit = defineEmits({
  'update:modelValue': []
})

let defaultCountryCode = props.initialCountryCode

if (props.modelValue && props.modelValue[0]) {
  const country = props.countryCodes.find((c) => c.code === props.modelValue[0].toString())
  country ? (defaultCountryCode = country.iso.toLowerCase()) : ''
}

const selectedCountryIso = ref(defaultCountryCode)
const isDropdownOpened = ref(false)
const query = ref('')
const filteredCountryCodes = computed(() =>
  props.countryCodes
    .filter((country) => country.country.toLowerCase().includes(query.value.toLowerCase()))
    .sort((a, b) => a.country.localeCompare(b.country))
)
const getCountryObject = (iso) =>
  props.countryCodes.find((country) => country.iso.toLowerCase() === iso.toLowerCase()) || null

const getCountryCode = (iso) => getCountryObject(iso)?.code || ''

const onInput = (value) => {
  emit('update:modelValue', [getCountryCode(selectedCountryIso.value), value])
}
const changeSelectedCountry = (iso, code, value = null) => {
  selectedCountryIso.value = iso.toLowerCase()
  emit('update:modelValue', [code, value || props.modelValue?.[1] || ''])
  isDropdownOpened.value = false
}

const countryListRef = ref(null)
const countryListItemRef = ref([])
const scrollToSelectedCountry = () => {
  setTimeout(() => {
    const indexSelectedCountry = filteredCountryCodes.value.indexOf(
      getCountryObject(selectedCountryIso.value)
    )
    const countryEl = countryListItemRef.value[indexSelectedCountry]
    const top = countryEl.offsetTop
    countryListRef.value.scrollTo(0, top - 60, { behavior: 'smooth' })
  }, 10)
}

const onPaste = (e) => {
  let text = e?.clipboardData?.getData('Text') || ''

  try {
    if (/^[+]?[0-9]+$/.test(text)) {
      text = text.slice(0, 19)

      if (text.length > 5 && (props.shouldParseCountryCode || text.startsWith('+'))) {
        const { nationalNumber, countryCallingCode, country } = parsePhoneNumber(
          '+' + text.replace('+', '')
        )

        if (countryCallingCode && country) {
          changeSelectedCountry(country, countryCallingCode, nationalNumber)
        } else {
          emit('update:modelValue', [getCountryCode(selectedCountryIso.value), nationalNumber])
        }
      } else {
        emit('update:modelValue', [getCountryCode(selectedCountryIso.value), text])
      }
    }
  } catch {
    emit('update:modelValue', [getCountryCode(selectedCountryIso.value), text])
  }

  e?.preventDefault()
}
</script>

<template>
  <Input
    :error-message="errorMessage"
    :model-value="modelValue?.[1] || ''"
    :placeholder="placeholder"
    :label="label"
    :is-inline-label="isInlineLabel"
    :disabled="isDisabled"
    :hint="hint"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
    @paste="onPaste"
    @keydown="preventEventIfNotNumberInput"
    @update:model-value="onInput"
  >
    <template #trailing>
      <Dropdown
        v-model="isDropdownOpened"
        :distance="10"
        placement="bottom-start"
        @update:model-value="scrollToSelectedCountry"
      >
        <div class="flex gap-x-2 items-center">
          <div
            class="fi !w-[20px] !h-[15px] !rounded-[2px] shadow-md"
            :class="`fi-${selectedCountryIso}`"
          />

          <span class="text-oc-text-400 font-medium text-sm">
            +{{ getCountryCode(selectedCountryIso) }}
          </span>

          <Icon width="16" height="16" class="text-oc-text-400" name="chevron-down" />
        </div>

        <template #menu>
          <div
            ref="countryListRef"
            class="flex flex-col max-h-[300px] py-2 overflow-y-scroll hidden-scrollbar"
          >
            <div class="px-3 py-1 sticky top-0 bg-oc-bg-light z-[1000]">
              <Input v-model="query" icon="search" placeholder="Search" @keydown.stop @click.stop>
                <template #icon>
                  <Icon class="w-5 h-5 text-oc-text-400" name="search" />
                </template>
              </Input>
            </div>
            <div
              v-for="(country, i) in filteredCountryCodes"
              ref="countryListItemRef"
              :key="i"
              class="py-3 px-4 flex gap-x-4 items-center hover:bg-oc-gray-50 cursor-pointer"
              :class="
                selectedCountryIso === country.iso.toLowerCase() ? 'bg-oc-gray-50 font-medium' : ''
              "
              @click="changeSelectedCountry(country.iso, country.code)"
            >
              <div
                class="fi !w-[20px] !h-[15px] !rounded-[2px] shadow-md"
                :class="`fi-${country.iso.toLowerCase()}`"
              />
              <span class="text-oc-text-300">+{{ country.code }}</span>
              <span class="text-oc-text-400">{{ country.country }}</span>
            </div>
          </div>
        </template>
      </Dropdown>
    </template>
  </Input>
</template>

<style>
@import url('https://cdn.jsdelivr.net/gh/lipis/flag-icons@latest/css/flag-icons.min.css');

.hidden-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
