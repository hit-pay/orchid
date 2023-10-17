<template>
  <Theme :color-mode="state.darkMode ? 'dark' : 'light'" :class="primaryColor">
    <section
      class="container flex flex-col items-start min-h-screen gap-y-4 p-3 md:p-8 mx-auto"
    >
      <section
        class="w-full p-8 flex justify-between items-center mt-8 rounded md:mt-0 bg-oc-primary-100"
      >
        <!-- Theme settings -->
        <div class="flex items-center flex-wrap gap-3">
          <h1 class="w-full mb-3 font-medium">Theme Settings</h1>
          <Button label="Enable Dark Mode" @click="toggleDarkMode" />
          <Button label="Change Primary Colors" @click="changePrimaryColor" />
          <span class="dark:text-oc-primary">dark:text-oc-primary</span>
        </div>
      </section>

      <section class="w-full">
        <div class="grid gap-3 md:p-8 rounded bg-oc-bg-dark">
          <h1 class="flex  mb-3 font-bold">Orchid UI Playground</h1>
          <div class="flex  gap-3 mb-3">
            <a href="/docs" class="text-oc-primary"> Documentation </a> /
            <a
              href="https://storybook-orchidui.vercel.app/"
              class="text-oc-primary"
            >
              Storybook
            </a>
          </div>
          <!-- COLORS -->
          <h2>
            Color Gray
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-11 gap-3">
            <div class="h-[50px] bg-oc-gray-10 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-50 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-100 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-200 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-300 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-400 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-500 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-600 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-700 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-800 rounded border"></div>
            <div class="h-[50px] bg-oc-gray-900 rounded border"></div>
          </div>
          <h2>
            Color Text
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-5 gap-3">
            <div class="h-[50px] bg-oc-text-100 rounded border"></div>
            <div class="h-[50px] bg-oc-text-200 rounded border"></div>
            <div class="h-[50px] bg-oc-text-300 rounded border"></div>
            <div class="h-[50px] bg-oc-text-400 rounded border"></div>
            <div class="h-[50px] bg-oc-text-500 rounded border"></div>
          </div>
          <h2>
            Color Background
          </h2>
          <div class="w-full grid md:grid-cols-2 gap-3">
            <div class="h-[50px] bg-oc-bg-light rounded border"></div>
            <div class="h-[50px] bg-oc-bg-dark rounded border"></div>
          </div>
          <h2>
            Color Primary
          </h2>
           <div class="w-full grid grid-cols-3 md:grid-cols-7 gap-3">
            <div class="h-[50px] bg-oc-primary-50-tr rounded border"></div>
            <div class="h-[50px] bg-oc-primary-50 rounded border"></div>
            <div class="h-[50px] bg-oc-primary-100 rounded border"></div>
            <div class="h-[50px] bg-oc-primary-200 rounded border"></div>
            <div class="h-[50px] bg-oc-primary-300 rounded border"></div>
            <div class="h-[50px] bg-oc-primary-400 rounded border"></div>
            <div class="h-[50px] bg-oc-primary-500 rounded border"></div>
          </div>
          <h2>
            Color Accent 1 (Purple)
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-7 gap-3">
            <div class="h-[50px] bg-oc-accent-2-50-tr rounded border"></div>
            <div class="h-[50px] bg-oc-accent-2-50 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-2-100 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-2-200 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-2-300 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-2-400 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-2-500 rounded border"></div>
          </div>
          <h2>
            Color Accent 2 (Red)
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-7 gap-3">
            <div class="h-[50px] bg-oc-accent-3-50-tr rounded border"></div>
            <div class="h-[50px] bg-oc-accent-3-50 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-3-100 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-3-200 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-3-300 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-3-400 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-3-500 rounded border"></div>
          </div>
          <h2>
            Color Accent 3 (Dark Blue)
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
            <div class="h-[50px] bg-oc-accent-1-50-tr rounded border"></div>
            <div class="h-[50px] bg-oc-accent-1-50 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-1-100 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-1-200 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-1-300 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-1-400 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-1-500 rounded border"></div>
            <div class="h-[50px] bg-oc-accent-1-600 rounded border"></div>
          </div>
          <h2>
            Color Success
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-7 gap-3">
            <div class="h-[50px] bg-oc-success-50-tr rounded border"></div>
            <div class="h-[50px] bg-oc-success-50 rounded border"></div>
            <div class="h-[50px] bg-oc-success-100 rounded border"></div>
            <div class="h-[50px] bg-oc-success-200 rounded border"></div>
            <div class="h-[50px] bg-oc-success-300 rounded border"></div>
            <div class="h-[50px] bg-oc-success-400 rounded border"></div>
            <div class="h-[50px] bg-oc-success-500 rounded border"></div>
          </div>
          <h2>
            Color Warning
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-7 gap-3">
            <div class="h-[50px] bg-oc-warning-50-tr rounded border"></div>
            <div class="h-[50px] bg-oc-warning-50 rounded border"></div>
            <div class="h-[50px] bg-oc-warning-100 rounded border"></div>
            <div class="h-[50px] bg-oc-warning-200 rounded border"></div>
            <div class="h-[50px] bg-oc-warning-300 rounded border"></div>
            <div class="h-[50px] bg-oc-warning-400 rounded border"></div>
            <div class="h-[50px] bg-oc-warning-500 rounded border"></div>
          </div>
          <h2>
            Color Error
          </h2>
          <div class="w-full grid grid-cols-3 md:grid-cols-7 gap-3">
            <div class="h-[50px] bg-oc-error-50-tr rounded border"></div>
            <div class="h-[50px] bg-oc-error-50 rounded border"></div>
            <div class="h-[50px] bg-oc-error-100 rounded border"></div>
            <div class="h-[50px] bg-oc-error-200 rounded border"></div>
            <div class="h-[50px] bg-oc-error-300 rounded border"></div>
            <div class="h-[50px] bg-oc-error-400 rounded border"></div>
            <div class="h-[50px] bg-oc-error-500 rounded border"></div>
          </div>
          <!-- DEMO COMPONENT -->
          <div class="flex ">
            <Accordion
              v-model:isExpandable="isOpen"
              class="w-full"
              header="Header Accordion"
              body="Lorem ipsum dolor sit amet, consectetur "
            />
          </div>
          <div class="flex flex-wrap  gap-3">
            <Button left-icon="x" />
            <Button left-icon="circle" is-rounded-full />
            <Button left-icon="x" right-icon="circle" label="Button Text" />
            <Button
              left-icon="circle"
              label="Button Text"
              variant="destructive"
            />
            <Button
              left-icon="circle"
              label="Button Text"
              variant="secondary"
            />
            <Button label="Button Text" is-disabled />
            <Button label="Button Text" is-loading />
            <Button label="Button Text" is-transparent />
          </div>
          <div class="flex flex-wrap gap-x-3 ">
            <Chip label="Primary" />
            <Chip label="Accent 1" variant="accent-1" />
            <Chip label="Accent 2" variant="accent-2" />
            <Chip label="success" variant="success" />
            <Chip label="warning" variant="warning" />
            <Chip label="error" variant="error" />
          </div>
          <div class="flex flex-wrap  gap-3">
            <Shackbar v-bind="snackbarArgs" />
            <Shackbar v-bind="snackbarArgs" color="primary" />
            <Shackbar v-bind="snackbarArgs" color="error" />
            <Shackbar v-bind="snackbarArgs" color="warning" />
            <Shackbar v-bind="snackbarArgs" color="gray" />
          </div>
          <div class="grid grid-cols-4 gap-4 my-6 w-fit">
            <Checkbox :model-value="true" />
            <Checkbox />
            <Checkbox is-error />
            <Checkbox is-partial />
            <Checkbox :model-value="true" disabled />
            <Checkbox disabled />
            <div />
            <Checkbox is-partial disabled />
          </div>
          <div class="flex flex-wrap">
            <CheckboxesGroup
              v-model="selectedCheckboxes"
              :checkboxes="checkboxes"
              label="Label"
              alignment="vertical"
            />
            <CheckboxesGroup
              v-model="selectedCheckboxes"
              :checkboxes="checkboxes"
              label="Label"
              alignment="horizontal"
            />
          </div>
          <div class="flex flex-col gap-2 my-6 w-fit">
            <Criteria label="Text" :model-value="false" />
            <Criteria label="Text" :model-value="true" />
          </div>
          <div class="flex flex-col items-center gap-2 my-6 w-fit">
            <Radio model-value="1" label="Text" />
            <Radio model-value="2" label="Text" />
            <Radio model-value="3" disabled label="Text" />
            <Radio model-value="4" disabled label="Text" />
            <Radio model-value="5" is-error label="Text" />
          </div>
          <div class="flex flex-col gap-y-4 ">
            <RadioGroup
              :radio="radios"
              group-name="radio1"
              label="Label"
              alignment="vertical"
            />
            <RadioGroup
              :radio="radios"
              group-name="radio2"
              label="Label"
              alignment="horizontal"
            />
          </div>
          <div class=" grid items-center grid-cols-2 gap-6 my-6 w-fit">
            <Toggle :model-value="true" />
            <Toggle :model-value="true" size="small" />
            <Toggle :model-value="false" />
            <Toggle size="small" :model-value="false" />
          </div>
          <div class="grid justify-start">
            <Tooltip key="my-tooltip" trigger="hover" :offset="[0, 10]" position="bottom" popper-class="bg-oc-bg-light">
                <div class="p-3 rounded-sm cursor-pointer">Trigger Tooltip </div>
                <template #popper>
                  <div class="flex w-[300px] flex-col gap-y-3 p-4">
                    <div class="font-medium">Tooltip title</div>
                    <div class="text-sm">Tooltips are used to describe or identify an element. In most scenarios,
                      tooltips help the user
                      understand the meaning, function or alt-text of an element.
                    </div>
                  </div>
                </template>
              </Tooltip>
          </div>
          <div class="flex  overflow-auto">

            <Table
              class="w-full"
              is-selectable
              :headers="headers"
              :fields="fields"
              :filter-tabs="tabs"
            >
              <template #col1>
                <TableCellContent
                  important
                  title="Table Cell"
                  description="Table Cell column two"
                />
              </template>
              <template #col3="{ data }">
                <div class="flex gap-x-2 items-center">
                  <span class="w-[122px]">{{ data }}</span>
                  <Icon
                    class="cursor-pointer w-5 h-5 group-hover/row:opacity-100 opacity-0"
                    name="copy"
                  />
                </div>
              </template>
              <template #col4="{ data }">
                <span class="text-oc-text-400 text-sm">{{ data }}</span>
              </template>
              <template #col5="{ data }">
                <Chip variant="success" class="w-fit" :label="data" />
              </template>
              <template #col6="{ data }">
                <Toggle :model-value="data" size="small" />
              </template>
              <template #actions>
                <Icon
                  class="w-6 h-6 group-hover/row:block hidden cursor-pointer mx-auto"
                  name="dots-vertical"
                />
              </template>
            </Table>
          </div>
          <div class="flex w-full overflow-auto">
            <PageTitle
              title="Page Title"
              main-link="https://securecheckout.../payment-request/"
              user-id="@minstore-edit43"
              description="Page description will be here. For better experience keep 1 line"
              chip-variant="success"
              chip-label="Active"
              additional-title="Need attention"
              tooltip-content="Tooltip content"
            />
          </div>
        </div>
      </section>
    </section>
  </Theme>
</template>

<script setup>
import {
  Accordion,
  Button,
  Chip,
  Shackbar,
  Theme,
  Criteria,
  Radio,
  Checkbox,
  CheckboxesGroup,
  RadioGroup,
  Toggle,
  Table,
  Icon,
  TableCellContent,
  PageTitle,
  Tooltip,
} from "@orchid";
import { ref, reactive, computed } from "vue";

const isOpen = ref(false);
const snackbarArgs = {
  showIcon: true,
  icon: "filled-check",
  content: "Changes have been successfully saved",
};
const headers = [
  {
    key: "col1",
    label: "Table Header",
  },
  {
    key: "col2",
    label: "Table Header",
  },
  {
    key: "col3",
    label: "Table Header",
  },
  {
    key: "col4",
    label: "Table Header",
  },
  {
    key: "col5",
    label: "Table Header",
  },
  {
    key: "col6",
    label: "Table Header",
  },
  {
    key: "actions",
    label: "",
    variant: "icon",
  },
];
const fields = [
  {
    col1: "",
    col2: "Table Cell",
    col3: "Table Cell",
    col4: "Table Cell column two",
    col5: "Label",
    col6: false,
  },
  {
    col1: "",
    col2: "Table Cell",
    col3: "Table Cell",
    col4: "Table Cell column two",
    col5: "Label",
    col6: false,
  },
  {
    col1: "",
    col2: "Table Cell",
    col3: "Table Cell",
    col4: "Table Cell column two",
    col5: "Label",
    col6: false,
  },
  {
    col1: "",
    col2: "Table Cell",
    col3: "Table Cell",
    col4: "Table Cell column two",
    col5: "Label",
    col6: false,
  },
  {
    col1: "asd",
    col2: "Table Cell",
    col3: "Table Cell",
    col4: "Table Cell column two",
    col5: "Label",
    col6: false,
  },
];
const tabs = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Filter 01",
    value: "1",
  },
  {
    label: "Filter 02",
    value: "2",
  },
  {
    label: "Filter 03",
    value: "3",
  },
];
const radios = [
  {
    label: "Text",
    value: 0,
  },
  {
    label: "Text",
    value: 1,
  },
  {
    label: "Text",
    value: 2,
  },
  {
    label: "Text",
    value: 3,
  },
  {
    label: "Text",
    value: 5,
  },
];
const checkboxes = [
  {
    label: "Text",
    value: 0,
  },
  {
    label: "Text",
    value: 1,
  },
  {
    label: "Text",
    value: 2,
  },
  {
    label: "Text",
    value: 3,
  },
  {
    label: "Text",
    value: 5,
  },
];
const selectedCheckboxes = ref([]);

let state = reactive({
  darkMode: false,
  primary_colors: {
    teal: `teal-primary-color`,
  },
  primary_color: "",
});

const primaryColor = computed(() => {
  return state.primary_color ? state.primary_colors[state.primary_color] : "";
});

const toggleDarkMode = () => {
  state.darkMode = !state.darkMode;
};
const changePrimaryColor = () => {
  if (!state.primary_color) {
    state.primary_color = "teal";
  } else {
    state.primary_color = "";
  }
};
</script>
<style>
.teal-primary-color {
  --oc-primary-50-tr: #f0fdfa;
  --oc-primary-50: #ccfbf1;
  --oc-primary-100: #99f6e4;
  --oc-primary-200: #5eead4;
  --oc-primary-300: #2dd4bf;
  --oc-primary-400: #14b8a6;
  --oc-primary-500: #0d9488;

  --button-primary-default: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );
  --button-primary-hover: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );
  --button-primary-pressed: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );
  --button-primary-disabled: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );

  --button-secondary-default: linear-gradient(180deg, #fff 0%, #f2f2f2 100%);
  --button-secondary-hover: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  --button-secondary-pressed: linear-gradient(180deg, #fafafa 0%, #fff 100%);
  --button-secondary-disabled: linear-gradient(
    180deg,
    #fcfcfc 0%,
    #f7f7f7 100%
  );
}

.dark-mode .teal-primary-color {
  --oc-primary-500: #f0fdfa;
  --oc-primary-400: #ccfbf1;
  --oc-primary-300: #99f6e4;
  --oc-primary-200: #5eead4;
  --oc-primary-100: #2dd4bf;
  --oc-primary-50: #14b8a6;
  --oc-primary-50-tr: #0d9488;
}
</style>
