<script setup>
import { Dropdown, Input, Icon } from "@/orchidui";
import { computed, ref } from "vue";

const props = defineProps({
  countryCodes: Array,
  initialCountryCode: {
    type: String,
    default: "sg",
  },
  errorMessage: String,
  modelValue: {
    type: Array,
    default: () => [],
  },
  placeholder: String,
  hint: String,
  label: String,
  isInlineLabel: Boolean,
  isDisabled: Boolean,
});
const emit = defineEmits({
  "update:modelValue": [],
});

const selectedCountryIso = ref(props.initialCountryCode);
const isDropdownOpened = ref(false);
const query = ref("");
const filteredCountryCodes = computed(() =>
  props.countryCodes
    .filter((country) =>
      country.country.toLowerCase().includes(query.value.toLowerCase()),
    )
    .sort((a, b) => a.country.localeCompare(b.country)),
);
const getCountryObject = (iso) =>
  props.countryCodes.find(
    (country) => country.iso.toLowerCase() === iso.toLowerCase(),
  ) || null;

const getCountryCode = (iso) => getCountryObject(iso)?.code || "";

const onInput = (value) => {
  emit("update:modelValue", [props.modelValue?.[0] || "", value]);
};
const changeSelectedCountry = (iso, code) => {
  selectedCountryIso.value = iso.toLowerCase();
  emit("update:modelValue", [code, props.modelValue?.[1] || ""]);
  isDropdownOpened.value = false;
};

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
    @update:model-value="onInput"
  >
    <template #trailing>
      <Dropdown
        v-model="isDropdownOpened"
        :distance="10"
        placement="bottom-start"
      >
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

        <template #menu>
          <div class="flex flex-col max-h-[300px] py-2 overflow-y-auto">
            <div class="px-3 py-1">
              <Input v-model="query" icon="search" placeholder="Search">
                <template #icon>
                  <Icon class="w-5 h-5 text-oc-text-400" name="search" />
                </template>
              </Input>
            </div>
            <div
              v-for="(country, i) in filteredCountryCodes"
              :key="i"
              class="py-3 px-4 flex gap-x-4 items-center hover:bg-oc-gray-50 cursor-pointer"
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
@import url("https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css");
</style>
