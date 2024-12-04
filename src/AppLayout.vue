<script setup>
import { ref } from 'vue'
import {
  Theme,
  Header as OcHeader,
  TabToSelect,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
  Icon,
  Button
} from '@/orchidui-core'
import Examples from './Examples.vue'
import CrossSell from './CrossSell.vue'
const showComponents = ref(false)

const navigation = [
  { name: 'Preview Components', href: 'components' },
  { name: 'Storybook', href: '/storybook/' }
]
const onClickNav = (e, item) => {
  if (item.href == 'components') {
    e.preventDefault()
    showComponents.value = true
  }
}

const activeMenuValue = ref('core')
const menus = [
  {
    label: 'Core UI',
    value: 'core',
    sidebarClass: 'layout-payment',
    path: 'core'
  },
  {
    label: 'Dashboard UI',
    value: 'dashboard',
    sidebarClass: 'layout-pos',
    path: 'dashboard'
  }
]
</script>
<template>
  <Theme>
    <template v-if="!showComponents">
      <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
          <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
              <a href="/" class="-m-1.5 p-1.5">
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
                @click="onClickNav($event, item)"
                >{{ item.name }}</a
              >
            </div>
            <div class="lg:flex lg:flex-1 lg:justify-end">
              <a
                href="https://www.npmjs.com/package/@/orchidui-core"
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
          <Examples />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="w-full">
        <OcHeader class="mb-3">
          <HeaderLeft class="md:w-[260px]">
            <a
              class="md:w-[102px] flex items-center gap-3 text-oc-accent-1"
              href="#"
              aria-label="Home Page"
            >
              <Icon class="mt-1" name="hitpay/logo" width="26" height="28" />
              <Icon class="mt-3 hidden md:block" name="hitpay/hitpay" width="74" height="24" />
            </a>
          </HeaderLeft>
          <HeaderCenter class="flex-1 md:flex-none">
            <TabToSelect v-model="activeMenuValue" :menus="menus" />
          </HeaderCenter>
          <HeaderRight>
            <Button variant="secondary" right-icon="x" @click="showComponents = false"
              >Close</Button
            >
          </HeaderRight>
        </OcHeader>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full xl:w-1/3">
          <CrossSell />
        </div>
        <div class="w-full xl:w-2/3">
          <iframe
            class="w-full h-[200px]"
            src="https://orchid-git-next-hit-pay.vercel.app/storybook/iframe.html?args=&id=form-button-ocbutton--button-variant&viewMode=story"
          >
          </iframe>
        </div>
      </div>
    </template>
  </Theme>
</template>
