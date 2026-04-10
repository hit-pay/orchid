import { Skeleton } from '@/orchidui-core'

export default {
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Animated shimmer placeholder used while content is loading. Skeleton has no props — its shape and size are controlled entirely through CSS classes.

---

## Usage

\`\`\`vue
<Skeleton class="h-5 w-full rounded" />
\`\`\`

Shape the skeleton with Tailwind classes:
- **Height**: \`h-4\`, \`h-5\`, \`h-8\`, \`h-[160px]\`
- **Width**: \`w-full\`, \`w-1/2\`, \`w-[200px]\`
- **Shape**: \`rounded\` (pill/text line), \`rounded-full\` (circle avatar), \`rounded-lg\` (card)

> Tip: Wrap multiple Skeleton elements in a \`flex flex-col gap-3\` container to create a realistic loading placeholder that matches your real layout.
        `.trim()
      }
    }
  }
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

export const OverviewCards = {
  description: 'Dashboard overview/stats card row loading state.',
  highlights: ['use grid for multi-column card layouts', 'combine icon circle + text lines per card'],
  code: `<script setup>
import { Skeleton } from '@orchidui/core'
</script>

<template>
  <div class="grid grid-cols-3 gap-4 w-full max-w-[600px]">
    <div
      v-for="i in 3"
      :key="i"
      class="p-4 border border-oc-gray-200 rounded-lg flex flex-col gap-3"
    >
      <Skeleton class="w-8 h-8 rounded-lg" />
      <Skeleton class="h-6 w-1/2 rounded" />
      <Skeleton class="h-4 w-3/4 rounded" />
    </div>
  </div>
</template>`,
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="p-6 w-full max-w-[600px]">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="i in 3" :key="i" class="p-4 border border-oc-gray-200 rounded-lg flex flex-col gap-3">
            <Skeleton class="w-8 h-8 rounded-lg" />
            <Skeleton class="h-6 w-1/2 rounded" />
            <Skeleton class="h-4 w-3/4 rounded" />
          </div>
        </div>
      </div>
    `
  })
}

export const FormFields = {
  description: 'Form loading state — label + input skeleton pairs for each field.',
  highlights: ['label line thinner than input line', 'simulate a realistic form layout'],
  code: `<script setup>
import { Skeleton } from '@orchidui/core'
</script>

<template>
  <div class="flex flex-col gap-5 w-[360px]">
    <!-- Field 1 -->
    <div class="flex flex-col gap-2">
      <Skeleton class="h-4 w-24 rounded" />
      <Skeleton class="h-9 w-full rounded" />
    </div>
    <!-- Field 2 -->
    <div class="flex flex-col gap-2">
      <Skeleton class="h-4 w-16 rounded" />
      <Skeleton class="h-9 w-full rounded" />
    </div>
    <!-- Field 3 -->
    <div class="flex flex-col gap-2">
      <Skeleton class="h-4 w-20 rounded" />
      <Skeleton class="h-[80px] w-full rounded" />
    </div>
    <!-- Submit button -->
    <Skeleton class="h-9 w-24 rounded" />
  </div>
</template>`,
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="p-6 w-[360px]">
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <Skeleton class="h-4 w-24 rounded" />
            <Skeleton class="h-9 w-full rounded" />
          </div>
          <div class="flex flex-col gap-2">
            <Skeleton class="h-4 w-16 rounded" />
            <Skeleton class="h-9 w-full rounded" />
          </div>
          <div class="flex flex-col gap-2">
            <Skeleton class="h-4 w-20 rounded" />
            <Skeleton class="h-[80px] w-full rounded" />
          </div>
          <Skeleton class="h-9 w-24 rounded" />
        </div>
      </div>
    `
  })
}
