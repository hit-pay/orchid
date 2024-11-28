<script setup>
import { computed } from 'vue'
import { Button, Chip, Icon } from '@orchidui/vue-core'

const props = defineProps({
  planTier: {
    type: Object,
    required: true
  },
  isPlanActive: Boolean
})

const emit = defineEmits(['select'])

const isFreeTier = computed(() => props.planTier.name === 'Free')
const isProTier = computed(() => props.planTier.name === 'Pro')
const isPlusTier = computed(() => props.planTier.name === 'Plus')

const frequencyText = computed(() => props.planTier.billing_frequency === 'monthly')
  ? '/month'
  : '/year'

const planTierDescription = computed(() => {
  if (props.planTier.name === 'free') {
    return 'For individual who just starting their business'
  } else if (props.planTier.name === 'pro') {
    return 'For business who needs more features to increase their sales'
  } else {
    return 'For business who want in-depth analytics to win business and work'
  }
})
</script>

<template>
  <div
    class="tier-card rounded relative shadow-sm max-w-[300px]"
    :class="{
      '!bg-oc-bg-dark border border-oc-gray-200': isFreeTier,
      'tier-card--pro border border-oc-gray-200': isProTier,
      'tier-card--plus bg-oc-gray-900 text-white': isPlusTier,
      'border-2 border-oc-primary-500': isPlanActive
    }"
  >
    <div class="z-10 flex flex-col gap-4 p-9 relative">
      <!-- Feature name -->
      <div class="flex items-center gap-4">
        <span class="font-medium text-xl">{{ planTier.name }}</span>
        <Chip v-if="isPlanActive" label="Current Plan" />
      </div>

      <!-- Feature description -->
      <div class="text-oc-text-400 text-sm mb-5" :class="{ '!text-oc-text-200': isPlusTier }">
        {{ planTierDescription }}
      </div>

      <!-- Feature price -->
      <div class="flex gap-3 items-center mb-5">
        <div class="flex items-start gap-2">
          <span class="text-[24px] font-medium tracking-tighter">{{
            planTier.currency.toUpperCase()
          }}</span>
          <span class="text-[40px] leading-none font-medium">{{ planTier.price }}</span>
        </div>
        <span
          v-if="!isFreeTier"
          class="text-oc-text-400 text-base"
          :class="{ '!text-oc-text-200': isPlusTier }"
        >
          {{ frequencyText }}
        </span>
      </div>

      <!-- Button -->
      <Button
        v-if="!isPlanActive"
        :label="isFreeTier ? 'Change to Free' : 'Start 14 day trial'"
        :variant="isFreeTier ? 'secondary' : 'primary'"
        size="big"
        class="mb-5"
        @click="emit('select')"
      />

      <!-- Features -->
      <div class="flex flex-col gap-3" :class="{ 'text-oc-text-200': isPlusTier }">
        <span v-if="!isFreeTier">
          Everything on
          <strong>{{ planTier.code === 'tier_s' ? 'FREE' : 'PRO' }}</strong>
          includes:
        </span>

        <span
          v-for="feature in planTier.features"
          :key="feature.id"
          class="flex gap-3 items-center"
        >
          <Icon name="check-fill" class="text-oc-primary-500" height="16" width="16" />
          <span>{{ feature.name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tier-card {
  &--pro {
    &::after {
      position: absolute;
      height: 50%;
      right: 0;
      top: 0;
      left: 0;
      content: '';
      border-radius: 16px;
      background: linear-gradient(
        90deg,
        rgba(232, 201, 250, 0.3) 0%,
        rgba(255, 224, 162, 0.3) 100%
      );
      box-shadow: 0 0 60px 30px #ffffff inset;
    }
  }

  &--plus {
    &::after {
      position: absolute;
      height: 25%;
      right: 0;
      bottom: 0;
      left: 0;
      content: '';
      border-radius: 16px;
      background: linear-gradient(
        90deg,
        rgba(232, 201, 250, 0.3) 0%,
        rgba(255, 224, 162, 0.3) 100%
      );
      box-shadow: 0 0 60px 30px var(--oc-gray-900) inset;
    }
  }
}
</style>
