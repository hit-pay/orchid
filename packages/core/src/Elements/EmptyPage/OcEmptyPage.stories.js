import { EmptyPage } from '@/orchidui-core'

export default {
  component: EmptyPage,
  tags: ['autodocs']
}

export const Default = {
  description: 'Basic empty state with icon, title, description, and a primary action button.',
  highlights: ['icon prop', 'title + description props', 'click:button event'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'
</script>

<template>
  <EmptyPage
    icon="document"
    title="No data yet"
    description="Create your first item to get started."
    add-button-label="Create item"
    add-button-icon="plus"
    @click:button="console.log('clicked')"
  />
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage
          icon="document"
          title="No data yet"
          description="Create your first item to get started."
          add-button-label="Create item"
        />
      </div>
    `
  })
}

export const UpgradeVariant = {
  description: 'Warning-coloured icon ring for upsell prompts. Uses upgradeLabel on the button instead of addButtonLabel.',
  highlights: ['is-upgrade prop', 'upgrade-label prop', 'warning colour ring'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'
</script>

<template>
  <EmptyPage
    icon="star"
    title="Premium feature"
    description="Upgrade your plan to unlock this feature."
    is-upgrade
    upgrade-label="Upgrade now"
    @click:button="console.log('upgrade clicked')"
  />
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage
          icon="star"
          title="Premium feature"
          description="Upgrade your plan to unlock this feature."
          is-upgrade
          upgrade-label="Upgrade now"
        />
      </div>
    `
  })
}

export const SmallSize = {
  description: 'Compact variant for inside cards or panels. hide-badge removes the exclamation overlay.',
  highlights: ['size="small"', 'hide-badge prop', ':is-button="false"'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'
</script>

<template>
  <EmptyPage
    size="small"
    icon="search"
    title="No results"
    description="Try a different search term."
    hide-badge
    :is-button="false"
  />
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage
          size="small"
          icon="search"
          title="No results"
          description="Try a different search term."
          hide-badge
          :is-button="false"
        />
      </div>
    `
  })
}

export const WithSecondaryButton = {
  description: 'Two-button layout: pass a Button props object to secondary-button to show a second action.',
  highlights: ['secondary-button prop', 'accepts any Button component props'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'

const secondary = { label: 'Learn more', variant: 'secondary' }
</script>

<template>
  <EmptyPage
    icon="document"
    title="No payments yet"
    description="Share your payment link to start receiving payments."
    add-button-label="Create link"
    :secondary-button="secondary"
    @click:button="console.log('primary clicked')"
  />
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage
          icon="document"
          title="No payments yet"
          description="Share your payment link to start receiving payments."
          add-button-label="Create link"
          :secondary-button="{ label: 'Learn more', variant: 'secondary' }"
        />
      </div>
    `
  })
}

export const NoButton = {
  description: 'Read-only state with no action button — for situations where the user cannot take action.',
  highlights: [':is-button="false"', 'hide-badge prop'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'
</script>

<template>
  <EmptyPage
    icon="clock"
    title="Pending review"
    description="Your submission is under review. You will be notified when it's approved."
    :is-button="false"
    hide-badge
  />
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage
          icon="clock"
          title="Pending review"
          description="Your submission is under review."
          :is-button="false"
          hide-badge
        />
      </div>
    `
  })
}

export const LargeSize = {
  description: 'Large variant with a bigger icon circle — suitable for full-page empty states.',
  highlights: ['size="large"'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'
</script>

<template>
  <EmptyPage
    size="large"
    icon="document"
    title="No transactions yet"
    description="Your transactions will appear here once you start accepting payments."
    add-button-label="Create payment link"
  />
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage
          size="large"
          icon="document"
          title="No transactions yet"
          description="Your transactions will appear here once you start accepting payments."
          add-button-label="Create payment link"
        />
      </div>
    `
  })
}

export const CustomContainerClass = {
  description: 'Override the icon ring colour with containerClass — useful when the default grey or warning colour does not fit the context.',
  highlights: ['container-class prop', 'overrides isUpgrade colour'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'
</script>

<template>
  <EmptyPage
    icon="star"
    title="No favourites yet"
    description="Items you star will appear here."
    add-button-label="Browse items"
    container-class="text-oc-primary-600 border-oc-primary-300 bg-oc-primary-50"
    hide-badge
  />
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage
          icon="star"
          title="No favourites yet"
          description="Items you star will appear here."
          add-button-label="Browse items"
          container-class="text-oc-primary-600 border-oc-primary-300 bg-oc-primary-50"
          hide-badge
        />
      </div>
    `
  })
}

export const CustomSlots = {
  description: 'Use the #icon and #description slots to inject arbitrary content in place of the default icon circle and description text.',
  highlights: ['#icon slot', '#description slot'],
  code: `<script setup>
import { EmptyPage } from '@orchidui/core'
</script>

<template>
  <EmptyPage
    title="Nothing here yet"
    add-button-label="Get started"
  >
    <template #icon>
      <div class="w-16 h-16 rounded-full bg-oc-primary-50 border border-oc-primary-200 flex items-center justify-center text-3xl">
        📭
      </div>
    </template>
    <template #description>
      <p class="text-oc-text-400 text-center text-sm">
        Add your first item or
        <a href="#" class="text-oc-primary-500 underline">import from CSV</a>.
      </p>
    </template>
  </EmptyPage>
</template>`,
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="flex justify-center p-10">
        <EmptyPage title="Nothing here yet" add-button-label="Get started">
          <template #icon>
            <div class="w-16 h-16 rounded-full bg-oc-primary-50 border border-oc-primary-200 flex items-center justify-center text-3xl">
              📭
            </div>
          </template>
          <template #description>
            <p class="text-oc-text-400 text-center text-sm">
              Add your first item or
              <a href="#" class="text-oc-primary-500 underline">import from CSV</a>.
            </p>
          </template>
        </EmptyPage>
      </div>
    `
  })
}
