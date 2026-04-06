import { Skeleton } from '@/orchidui-core'

export default {
  component: Skeleton,
  tags: ['autodocs']
}

export const TextLines = {
  description: 'Paragraph loading state. Control width with Tailwind classes to simulate text of different lengths.',
  highlights: ['no props — shape is controlled entirely by CSS classes', 'h-* — height', 'w-* — width', 'rounded — border radius'],
  code: `<script setup>
import { Skeleton } from '@orchidui/core'
</script>

<template>
  <div class="flex flex-col gap-3 w-[300px]">
    <Skeleton class="h-5 w-full rounded" />
    <Skeleton class="h-5 w-5/6 rounded" />
    <Skeleton class="h-5 w-4/6 rounded" />
    <Skeleton class="h-5 w-2/6 rounded" />
  </div>
</template>`,
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="p-6 flex flex-col gap-3 w-[300px]">
        <Skeleton class="h-5 w-full rounded" />
        <Skeleton class="h-5 w-5/6 rounded" />
        <Skeleton class="h-5 w-4/6 rounded" />
        <Skeleton class="h-5 w-2/6 rounded" />
      </div>
    `
  })
}

export const AvatarWithText = {
  description: 'Avatar + name/detail row loading state. rounded-full makes the circle avatar shape.',
  highlights: ['rounded-full — circular shape', 'aspect-square — equal width and height', 'combine multiple Skeletons in a flex layout'],
  code: `<script setup>
import { Skeleton } from '@orchidui/core'
</script>

<template>
  <div class="flex gap-3 items-center">
    <Skeleton class="w-10 h-10 rounded-full shrink-0" />
    <div class="flex flex-col gap-2 flex-1">
      <Skeleton class="h-4 w-[160px] rounded" />
      <Skeleton class="h-3 w-[100px] rounded" />
    </div>
  </div>
</template>`,
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="p-6">
        <div class="flex gap-3 items-center">
          <Skeleton class="w-10 h-10 rounded-full shrink-0" />
          <div class="flex flex-col gap-2 flex-1">
            <Skeleton class="h-4 w-[160px] rounded" />
            <Skeleton class="h-3 w-[100px] rounded" />
          </div>
        </div>
      </div>
    `
  })
}

export const Card = {
  description: 'Card loading state with image area, title, and description lines.',
  highlights: ['combine Skeletons of different sizes', 'rounded-lg for card corners'],
  code: `<script setup>
import { Skeleton } from '@orchidui/core'
</script>

<template>
  <div class="w-[280px] rounded-lg border border-oc-gray-200 overflow-hidden">
    <!-- image area -->
    <Skeleton class="h-[160px] w-full" />

    <!-- content -->
    <div class="p-4 flex flex-col gap-3">
      <Skeleton class="h-5 w-3/4 rounded" />
      <Skeleton class="h-4 w-full rounded" />
      <Skeleton class="h-4 w-5/6 rounded" />
      <Skeleton class="h-8 w-24 rounded mt-2" />
    </div>
  </div>
</template>`,
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="p-6">
        <div class="w-[280px] rounded-lg border border-oc-gray-200 overflow-hidden">
          <Skeleton class="h-[160px] w-full" />
          <div class="p-4 flex flex-col gap-3">
            <Skeleton class="h-5 w-3/4 rounded" />
            <Skeleton class="h-4 w-full rounded" />
            <Skeleton class="h-4 w-5/6 rounded" />
            <Skeleton class="h-8 w-24 rounded mt-2" />
          </div>
        </div>
      </div>
    `
  })
}

export const TableRow = {
  description: 'Table row loading state. Repeat to fill the expected number of rows.',
  highlights: ['repeat v-for rows for realistic loading', 'match column widths to the real table headers'],
  code: `<script setup>
import { Skeleton } from '@orchidui/core'
</script>

<template>
  <div class="w-full border border-oc-gray-200 rounded overflow-hidden">
    <!-- header row -->
    <div class="flex gap-3 px-4 py-3 border-b border-oc-gray-200 bg-oc-bg-2">
      <Skeleton class="h-4 w-[40%] rounded" />
      <Skeleton class="h-4 w-[30%] rounded" />
      <Skeleton class="h-4 w-[20%] rounded" />
    </div>

    <!-- data rows -->
    <div
      v-for="i in 5"
      :key="i"
      class="flex gap-3 px-4 py-4 border-b border-oc-gray-200 last:border-0"
    >
      <Skeleton class="h-4 w-[40%] rounded" />
      <Skeleton class="h-4 w-[30%] rounded" />
      <Skeleton class="h-4 w-[20%] rounded" />
    </div>
  </div>
</template>`,
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="p-6 w-full max-w-[500px]">
        <div class="w-full border border-oc-gray-200 rounded overflow-hidden">
          <div class="flex gap-3 px-4 py-3 border-b border-oc-gray-200 bg-oc-bg-2">
            <Skeleton class="h-4 w-[40%] rounded" />
            <Skeleton class="h-4 w-[30%] rounded" />
            <Skeleton class="h-4 w-[20%] rounded" />
          </div>
          <div v-for="i in 5" :key="i" class="flex gap-3 px-4 py-4 border-b border-oc-gray-200 last:border-0">
            <Skeleton class="h-4 w-[40%] rounded" />
            <Skeleton class="h-4 w-[30%] rounded" />
            <Skeleton class="h-4 w-[20%] rounded" />
          </div>
        </div>
      </div>
    `
  })
}
