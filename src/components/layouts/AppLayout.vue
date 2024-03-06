<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Hitpay</span>
            <img
              class="h-8 w-auto"
              src="https://assets-global.website-files.com/64624bb008de2f11dbf1f3a1/6465f9263eb94044a3743277_HitPay_Blue-min.svg"
              alt=""
            />
          </a>
        </div>
        <div class="lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900"
            >{{ item.name }}</a
          >
        </div>
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://www.npmjs.com/package/@orchidui/vue"
            class="text-sm font-semibold leading-6 text-gray-900"
            >NPM<span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="grid lg:grid-cols-2">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Open Source UI Library for Vue3
            </h1>
            <div class="hidden sm:mb-8 sm:flex sm:justify-center mt-8">
              <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Crafted by HitPay
                <a
                  href="https://hitpayapp.com"
                  class="font-semibold text-indigo-600"
                  ><span class="absolute inset-0" aria-hidden="true" />Read more
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              The Open Source UI Library for Vue3 offers a wide range of
              components and tools to streamline the development process for
              Vue.js applications. With a focus on flexibility and
              customization, this library provides developers with the ability
              to create modern and responsive user interfaces with ease.
              <br />
              <br />
              Whether you are building a simple website or a complex web
              application, this UI library has everything you need to enhance
              the user experience and improve overall functionality.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/hit-pay/orchid"
                class="rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >GitHub ⭐
              </a>
              <a
                href="/storybook/"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >StoryBook ⭐
              </a>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <div class="grid items-center flex-wrap content-center">
          <div class="w-full flex flex-wrap gap-5 items-center mb-5">
            <Button left-icon="x" />
            <Button left-icon="x" rightIcon="circle" label="Button" />
            <Button label="Button" isDisabled />
            <Button label="Button" isLoading />
            <Button label="Button" isTransparent />
          </div>
          <div class="w-full flex flex-wrap gap-5 items-center mb-5">
            <Button variant="secondary" left-icon="x" />
            <Button
              variant="secondary"
              left-icon="x"
              rightIcon="circle"
              label="Button"
            />
            <Button variant="secondary" label="Button" isDisabled />
            <Button variant="secondary" label="Button" isLoading />
            <Button variant="secondary" label="Button" isTransparent />
          </div>
          <div class="lg:w-1/2 mb-3">
            <Accordion
              v-model:isExpandable="isOpen"
              :header="args.header"
              :header-style="'bg-oc-gray-50'"
              :body="args.body"
              :icon="args.icon"
              :show-icon="args.showIcon"
              :is-animated="args.isAnimated"
              :is-disabled="args.isDisabled"
            >
              <template #body>
                <DatePicker />
                <div class="flex flex-col gap-3 mt-3">
                  <div v-for="item in dynamicContent" :key="item">
                    Dynamic Content {{ item }}
                  </div>
                  <Button
                    size="small"
                    label="Add Content"
                    @click="dynamicContent.push(dynamicContent.length)"
                  />
                </div>
              </template>
            </Accordion>
            <CustomerCard
              class="mt-3"
              :customer="args.customer"
              :is-beneficiary="args.isBeneficiary"
              :variant="args.variant"
            />
            <div class="flex gap-3 items-center my-6 flex-wrap">
              <Chip label="Primary" />
              <Chip label="Accent 1" variant="accent-1" />
              <Chip label="Accent 2" variant="accent-2" />
              <Chip label="Accent 3" variant="accent-3" />
              <Chip label="success" variant="success" />
              <Chip label="warning" variant="warning" />
              <Chip label="error" variant="error" />
            </div>
          </div>
          <div>
            <NumberInput v-model="NumberInputModel" />
            <OcToggle v-model="ToggleModel" class="mt-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  Button,
  Accordion,
  DatePicker,
  CustomerCard,
  Chip,
  NumberInput,
  Toggle as OcToggle,
} from "@orchidui/vue";

const navigation = [{ name: "Documentation", href: "/storybook/" }];

const isOpen = ref(false);
const dynamicContent = ref([]);
const NumberInputModel = ref(0);
const ToggleModel = ref(false);
const args = {
  // accordion
  header: "Additional Information",
  body: "Accordion content",
  icon: "chevron-down",
  showIcon: true,
  isAnimated: true,
  isExpandable: false,
  isDisabled: false,
  // customer
  variant: "small",
  customer: {
    name: "Alex Turner",
    currency: "SGD",
    email: "alex@arcticmonkey.io",
    phone_number: "+65 8373 3739 18",
    bank_name: "DBS Bank",
    bank_account_number: "**** 1234",
  },
  isBeneficiary: true,
};
</script>
