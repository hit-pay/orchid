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
