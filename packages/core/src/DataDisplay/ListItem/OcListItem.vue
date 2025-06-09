<script setup>
import { ref, computed } from 'vue'
import OcTimeLine from './components/OcTimeLine.vue'
import OcWebhook from './components/OcWebhook.vue'
import OcLogo from './components/OcLogo.vue'
import OcPayment from './components/OcPayment.vue'
import OcGeneral from './components/OcGeneral.vue'
import OcTerminal from './components/OcTerminal.vue'
import OcPage from './components/OcPage.vue'
import OcAccordion from './components/OcAccordion.vue'

const props = defineProps({
  isActive: Boolean,
  title: String,
  description: String,
  descriptionIcon: String,
  icon: String,
  iconClass: String,
  iconText: String,
  date: String,
  type: {
    type: String,
    default: 'timeLine'
  },
  urls: {
    type: Array,
    default: () => []
  },
  paymentMethods: {
    type: Array,
    default: () => []
  },
  chips: {
    type: Array,
    default: () => []
  },
  details: {
    type: Array,
    default: () => []
  },
  isDisabled: Boolean,
  isTransparent: Boolean,
  isDraggable: Boolean,
  isOpenDefault: Boolean
})

defineEmits(['more', 'edit', 'delete', 'click:item'])



const getTypeComponent = computed(() => {
  switch (props.type) {
    case 'timeLine': return OcTimeLine
    case 'webhook': return OcWebhook
    case 'payment': return OcPayment
    case 'general': return OcGeneral
    case 'terminal': return OcTerminal
    case 'logo': return OcLogo
    case 'page': return OcPage
    case 'accordion': return OcAccordion
    default: return OcTimeLine
  }
})
</script>

<template>
  <component
    :is="getTypeComponent"
    v-bind="props"
    :class="{ 'opacity-50': isDisabled }"
    @more="$emit('more')"
    @edit="$emit('edit')"
    @delete="$emit('delete')"
    @click="$emit('click:item')"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </component>
</template>
