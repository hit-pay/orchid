<script setup>
import Examples from './Examples.vue'
const navigation = [
  { name: 'Documentation', href: '/storybook/' },
  {
    name: 'Hitpay Online Store',
    href: 'https://www.hitpayapp.com/online-store'
  }
]
</script>
<template>
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
            >{{ item.name }}</a
          >
        </div>
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://www.npmjs.com/package/@orchidui/vue-core"
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
