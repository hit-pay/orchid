<script setup>
import "flag-icons/css/flag-icons.min.css";
import countryCodes from "./countryCodes.js";
import  {Dropdown, Input, Icon} from "@orchid";
import { onMounted, ref } from "vue";

const props = defineProps({
  validRegex: {
    type: String,
    default: "",
  },
  initialCountryCode: String,
  errorMessage: String,
  phoneNumber: String,
  countryCode: String,
  placeholder: String,
  hint: String,
  label: String,
  isInlineLabel: Boolean,
  isDisabled: Boolean,
});
const emit = defineEmits({
  "update:phoneNumber": [],
  "update:countryCode": [],
  update: [],
});
const selectedCountryIso = ref(props.initialCountryCode);

const getCountryObject = (iso) =>
  countryCodes.find(
    (country) => country.iso.toLowerCase() === iso.toLowerCase(),
  ) || null;
const getCountryCode = (iso) => getCountryObject(iso)?.code || "";

const isPhoneError = ref(false);
const onInput = (value) => {
  let phoneNumber = value;
  isPhoneError.value =
    props.validRegex && !new RegExp(props.validRegex).test(phoneNumber);
  emit("update:phoneNumber", phoneNumber);
  updateEmit();
};
const changeSelectedCountry = (iso, code, close) => {
  selectedCountryIso.value = iso.toLowerCase();
  emit("update:countryCode", code);
  close();
  updateEmit();
};
const updateEmit = () => {
  emit("update", {
    country: getCountryObject(selectedCountryIso.value)?.country || "",
    iso: selectedCountryIso.value,
    code: getCountryCode(selectedCountryIso.value),
    phone: props.phoneNumber,
  });
};
onMounted(() => {
  emit("update:countryCode", getCountryCode(props.initialCountryCode));
  updateEmit();
});
</script>

<template>
  <Input
    :error-message="isPhoneError && phoneNumber ? errorMessage : ''"
    :model-value="phoneNumber"
    :placeholder="placeholder"
    :label="label"
    :is-inline-label="isInlineLabel"
    :disabled="isDisabled"
    :hint="hint"
    input-type="tel"
    @update:model-value="onInput"
  >
    <template #trailing>
      <Dropdown :offset="10">
        <template #trigger>
          <div class="flex gap-x-2 items-center">
            <div
              class="fi !w-[20px] !h-[15px] !rounded-[2px] shadow-md"
              :class="`fi-${selectedCountryIso}`"
            />

            <span class="text-oc-text-400 font-medium text-sm">
              +{{ getCountryCode(selectedCountryIso) }}
            </span>

            <Icon
              width="16"
              height="16"
              class="text-oc-text-400"
              name="chevron-down"
            />
          </div>
        </template>
        <template #default="{ close }">
          <div class="flex flex-col max-h-[300px] py-2 overflow-y-auto">
            <div
              v-for="country in countryCodes"
              :key="country.code"
              class="py-3 px-4 flex gap-x-4 items-center hover:bg-oc-gray-50 cursor-pointer"
              @click="changeSelectedCountry(country.iso, country.code, close)"
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
