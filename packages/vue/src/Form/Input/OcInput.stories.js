import Theme from '../../Theme/OcTheme.vue'
import OCInput from './OcInput.vue'
import Dropdown from '../../Overlay/Dropdown/OcDropdown.vue'
import DropdownItem from '../../Overlay/Dropdown/OcDropdownItem.vue'
import Icon from '../../MediaAndIcons/Icon/OcIcon.vue'
import { ref } from 'vue'
import BaseInput from '../BaseInput/OcBaseInput.vue'
import { InputOption } from '@/orchidui'
import { Select } from '@/orchidui'

export default {
  component: OCInput,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    icon: {
      control: 'select',
      options: ['', 'circle']
    },
    errorMessage: {
      control: 'text'
    },
    labelIcon: {
      control: 'select',
      options: ['', 'question-mark']
    }
  },
  args: {
    label: 'Label',
    hint: 'Hint',
    errorMessage: '',
    placeholder: 'Placeholder',
    icon: '',
    disabled: false,
    isInlineLabel: false,
    isRequired: false,
    labelIcon: '',
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10
    }
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      const modelValue = ref()
      const logEvent = (name) => console.info(`Event: ${name}`)

      return { modelValue, args, logEvent }
    },
    template: `
          <Theme colorMode="light" class="py-4">
            <OCInput
                v-model="modelValue"
                :label="args.label"
                :error-message="args.errorMessage"
                :hint="args.hint"
                :placeholder="args.placeholder"
                :isInlineLabel="args.isInlineLabel"
                :icon="args.icon"
                :disabled="args.disabled"
                :isRequired="args.isRequired"
                :tooltip-options="args.tooltipOptions"
                :label-icon="args.labelIcon"
                :tooltip-text="args.tooltipText"
                autofocus
                @focus="logEvent('focus')"
                @blur="logEvent('blur')"
            />
          </Theme>
        `
  })
}

export const MainComponent = {
  args: {
    label: 'Label',
    hint: 'Hint',
    errorMessage: '',
    placeholder: 'Placeholder',
    type: '',
    icon: '',
    disabled: false,
    isInlineLabel: false
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      const text = ref('Text')
      return { text, args }
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <div class="flex items-end gap-x-4">
                <OCInput
                    :label="args.label" :error-message="args.errorMessage" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :type="args.type"
                    :icon="args.icon"
                    :disabled="args.disabled"
                />
                <OCInput
                    :label="args.label" :error-message="args.errorMessage" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :type="args.type"
                    :icon="args.icon"
                    disabled
                />
                <OCInput
                    :label="args.label" :error-message="args.errorMessage" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.label"
                    :type="args.type"
                    :icon="args.icon"
                />
              </div>
              <div class="flex items-end gap-x-4">
                <OCInput
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :label="args.label" error-message="Default Error" :hint="args.hint"
                    :type="args.type"
                    :icon="args.icon"
                    :disabled="args.disabled"
                />
                <OCInput
                    :label="args.label" error-message="Disabled Error" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :type="args.type"
                    :icon="args.icon"
                    disabled
                />
                <OCInput
                    :label="args.label"
                    :placeholder="args.placeholder"
                    is-inline-label
                    :type="args.type"
                    error-message="Inline Error" :hint="args.hint"
                    :icon="args.icon"
                    is-error
                />
              </div>
            </div>
          </Theme>
        `
  })
}

export const Trailing = {
  render: () => ({
    components: { Theme, OCInput, Select },
    setup() {
      const isDropdownOpen = ref([])
      const selectedCurrency = ref('sgd')
      const currencies = [
        { "label": "Any amount", "value": "any" },
        { "value": "aed", "label": "AED" },
        { "value": "all", "label": "ALL" },
        { "value": "amd", "label": "AMD" },
        { "value": "ang", "label": "ANG" },
        { "value": "aoa", "label": "AOA" },
        { "value": "ars", "label": "ARS" },
        { "value": "aud", "label": "AUD" },
        { "value": "awg", "label": "AWG" },
        { "value": "azn", "label": "AZN" },
        { "value": "bam", "label": "BAM" },
        { "value": "bbd", "label": "BBD" },
        { "value": "bdt", "label": "BDT" },
        { "value": "bgn", "label": "BGN" },
        { "value": "bif", "label": "BIF" },
        { "value": "bmd", "label": "BMD" },
        { "value": "bnd", "label": "BND" },
        { "value": "bob", "label": "BOB" },
        { "value": "brl", "label": "BRL" },
        { "value": "bsd", "label": "BSD" },
        { "value": "bwp", "label": "BWP" },
        { "value": "bzd", "label": "BZD" },
        { "value": "cad", "label": "CAD" },
        { "value": "cdf", "label": "CDF" },
        { "value": "chf", "label": "CHF" },
        { "value": "clp", "label": "CLP" },
        { "value": "cny", "label": "CNY" },
        { "value": "cop", "label": "COP" },
        { "value": "crc", "label": "CRC" },
        { "value": "cve", "label": "CVE" },
        { "value": "czk", "label": "CZK" },
        { "value": "djf", "label": "DJF" },
        { "value": "dkk", "label": "DKK" },
        { "value": "dop", "label": "DOP" },
        { "value": "dzd", "label": "DZD" },
        { "value": "egp", "label": "EGP" },
        { "value": "etb", "label": "ETB" },
        { "value": "eur", "label": "EUR" },
        { "value": "fjd", "label": "FJD" },
        { "value": "fkp", "label": "FKP" },
        { "value": "gbp", "label": "GBP" },
        { "value": "gel", "label": "GEL" },
        { "value": "gip", "label": "GIP" },
        { "value": "gmd", "label": "GMD" },
        { "value": "gnf", "label": "GNF" },
        { "value": "gtq", "label": "GTQ" },
        { "value": "gyd", "label": "GYD" },
        { "value": "hkd", "label": "HKD" },
        { "value": "hnl", "label": "HNL" },
        { "value": "hrk", "label": "HRK" },
        { "value": "htg", "label": "HTG" },
        { "value": "huf", "label": "HUF" },
        { "value": "idr", "label": "IDR" },
        { "value": "ils", "label": "ILS" },
        { "value": "inr", "label": "INR" },
        { "value": "isk", "label": "ISK" },
        { "value": "jmd", "label": "JMD" },
        { "value": "kes", "label": "KES" },
        { "value": "kgs", "label": "KGS" },
        { "value": "khr", "label": "KHR" },
        { "value": "kmf", "label": "KMF" },
        { "value": "krw", "label": "KRW" },
        { "value": "kyd", "label": "KYD" },
        { "value": "kzt", "label": "KZT" },
        { "value": "lak", "label": "LAK" },
        { "value": "lbp", "label": "LBP" },
        { "value": "lkr", "label": "LKR" },
        { "value": "lrd", "label": "LRD" },
        { "value": "lsl", "label": "LSL" },
        { "value": "mad", "label": "MAD" },
        { "value": "mdl", "label": "MDL" },
        { "value": "mga", "label": "MGA" },
        { "value": "mkd", "label": "MKD" },
        { "value": "mmk", "label": "MMK" },
        { "value": "mnt", "label": "MNT" },
        { "value": "mop", "label": "MOP" },
        { "value": "mro", "label": "MRO" },
        { "value": "mur", "label": "MUR" },
        { "value": "mvr", "label": "MVR" },
        { "value": "mwk", "label": "MWK" },
        { "value": "mxn", "label": "MXN" },
        { "value": "myr", "label": "MYR" },
        { "value": "mzn", "label": "MZN" },
        { "value": "nad", "label": "NAD" },
        { "value": "ngn", "label": "NGN" },
        { "value": "nio", "label": "NIO" },
        { "value": "nok", "label": "NOK" },
        { "value": "npr", "label": "NPR" },
        { "value": "nzd", "label": "NZD" },
        { "value": "pab", "label": "PAB" },
        { "value": "pen", "label": "PEN" },
        { "value": "pgk", "label": "PGK" },
        { "value": "php", "label": "PHP" },
        { "value": "pkr", "label": "PKR" },
        { "value": "pln", "label": "PLN" },
        { "value": "pyg", "label": "PYG" },
        { "value": "qar", "label": "QAR" },
        { "value": "ron", "label": "RON" },
        { "value": "rsd", "label": "RSD" },
        { "value": "rub", "label": "RUB" },
        { "value": "rwf", "label": "RWF" },
        { "value": "sar", "label": "SAR" },
        { "value": "sbd", "label": "SBD" },
        { "value": "scr", "label": "SCR" },
        { "value": "sek", "label": "SEK" },
        { "value": "sgd", "label": "SGD" },
        { "value": "shp", "label": "SHP" },
        { "value": "sll", "label": "SLL" },
        { "value": "sos", "label": "SOS" },
        { "value": "srd", "label": "SRD" },
        { "value": "std", "label": "STD" },
        { "value": "szl", "label": "SZL" },
        { "value": "thb", "label": "THB" },
        { "value": "tjs", "label": "TJS" },
        { "value": "top", "label": "TOP" },
        { "value": "try", "label": "TRY" },
        { "value": "ttd", "label": "TTD" },
        { "value": "twd", "label": "TWD" },
        { "value": "tzs", "label": "TZS" },
        { "value": "uah", "label": "UAH" },
        { "value": "ugx", "label": "UGX" },
        { "value": "usd", "label": "USD" },
        { "value": "uyu", "label": "UYU" },
        { "value": "uzs", "label": "UZS" },
        { "value": "vnd", "label": "VND" },
        { "value": "vuv", "label": "VUV" },
        { "value": "wst", "label": "WST" },
        { "value": "xaf", "label": "XAF" },
        { "value": "xcd", "label": "XCD" },
        { "value": "xof", "label": "XOF" },
        { "value": "xpf", "label": "XPF" },
        { "value": "yer", "label": "YER" },
        { "value": "zar", "label": "ZAR" },
        { "value": "zmw", "label": "ZMW" }
      ]

      const updateSelectedCurrency = (currency) => {
        selectedCurrency.value = currencies.find(
          (currentCurrency) => currentCurrency.value === currency
        ).value
      }

      return {
        isDropdownOpen,
        selectedCurrency,
        currencies,
        updateSelectedCurrency
      }
    },
    template: `
          <Theme colorMode="light">
            <div class="flex items-end gap-x-4">
              <OCInput label="Label" hint="This is a hint text to help user">
                <template #trailing>
                  <Select
                    :key="selectedCurrency"
                    :model-value="selectedCurrency"
                    :options="currencies"
                    is-filterable
                    is-transparent
                    is-slim
                    @click.stop
                    @update:model-value="updateSelectedCurrency"
                  />
                </template>
              </OCInput>
              <OCInput disabled label="Label" hint="This is a hint text to help user">
                <template #trailing>
                  <Select
                    :key="selectedCurrency"
                    :model-value="selectedCurrency"
                    :options="currencies"
                    is-filterable
                    is-transparent
                    is-slim
                    @click.stop
                    @update:model-value="updateSelectedCurrency"
                  />
                </template>
              </OCInput>
              <OCInput label="Label" hint="This is a hint text to help user"
                       error-message="Error message">
                <template #trailing>
                  <Select
                    :key="selectedCurrency"
                    :model-value="selectedCurrency"
                    :options="currencies"
                    is-filterable
                    is-transparent
                    is-slim
                    @click.stop
                    @update:model-value="updateSelectedCurrency"
                  />
                </template>
              </OCInput>
            </div>
          </Theme>
        `
  })
}

export const After = {
  render: () => ({
    components: { Theme, OCInput, Icon },
    setup() {
      const modelValue = ref('')

      return {
        modelValue
      }
    },
    template: `
      <Theme colorMode="light" class="py-4">
        <OCInput
          v-model="modelValue"
          label="Password"
          input-type="password"
          :has-leading-separator="false"
        >
          <template #leading>
            <span class="text-oc-text-200">
              <Icon name="eye-open" width="16" height="16" />
            </span>
          </template>
        </OCInput>
      </Theme>
    `
  })
}

export const Leading = {
  render: () => ({
    components: { Theme, OCInput, Dropdown, DropdownItem, Icon, BaseInput },
    setup() {
      const isDropdownOpen = ref([])
      return {
        isDropdownOpen
      }
    },
    template: `
          <Theme colorMode="light">
            <div class="flex items-end gap-x-4">
              <OCInput label="Label" hint="This is a hint text to help user">
                <template #leading>
                  <Dropdown v-model="isDropdownOpen[1]" :distance="10">
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                      </div>
                    </template>
                    <div class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"  >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput disabled label="Label" hint="This is a hint text to help user">
                <template #leading>
                  <Dropdown v-model="isDropdownOpen[2]">
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                      </div>
                    </template>
                    <div
                        class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                    >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput label="Label" hint="This is a hint text to help user"
                       error-message="Error message">
                <template #leading>
                  <Dropdown v-model="isDropdownOpen[3]" >
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                      </div>
                    </template>
                    <div
                        class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                    >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
            </div>
          </Theme>
        `
  })
}

export const InputOptions = {
  render: () => ({
    components: { Theme, InputOption },
    setup() {
      const selectedOption = ref(['Option 1', 'options 2'])
      return { selectedOption }
    },
    template: `
          <Theme colorMode="light">
            <InputOption
                v-model="selectedOption"
                label="Label"
                hint="Hint"
                placeholder="Placeholder"
            />

            <div class="mt-4">Selected value: {{ selectedOption }}</div>
          </Theme>
        `
  })
}

export const FormatValue = {
  args: {
    label: 'Currency value',
    placeholder: 'Currency format'
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      const modelValue = ref(0)

      const formatValue = (value) => {
        let output = value

        if (Number(value) === 0) return '0.00'

        // removing non-digit characters
        output = +`${output}`.replace(/\D/g, '')

        //
        return (output / 100).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      }

      const handleUpdateModelValue = (value) => {
        modelValue.value = value.replaceAll(',', '')
      }

      return { modelValue, args, formatValue, handleUpdateModelValue }
    },
    template: `
          <Theme colorMode="light" class="py-4">
            <OCInput
                v-model="modelValue"
                :label="args.label"
                :placeholder="args.placeholder"
                :formatValue="formatValue"
            />
          </Theme>
        `
  })
}

export const passwordInput = {
  name: 'Password Input',
  argTypes: {},
  args: {
    label: 'Password',
    hint: 'Enter your HitPay password',
    placeholder: 'Password',
    isRequired: true,
    inputType: 'password'
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      const modelValue = ref()

      return { modelValue, args }
    },
    template: `
          <Theme colorMode="light" class="py-4">
            <OCInput
                v-model="modelValue"
                :label="args.label"
                :hint="args.hint"
                :placeholder="args.placeholder"
                :isRequired="args.isRequired"
                :input-type="args.inputType"
            />
          </Theme>
        `
  })
}
