<script setup>
import { computed } from 'vue'
import OcAccordion from './components/OcAccordion.vue'
import OcGeneral from './components/OcGeneral.vue'
import OcLogo from './components/OcLogo.vue'
import OcPage from './components/OcPage.vue'
import OcPayment from './components/OcPayment.vue'
import OcTerminal from './components/OcTerminal.vue'
import OcTimeLine from './components/OcTimeLine.vue'
import OcWebhook from './components/OcWebhook.vue'

const props = defineProps({
  /** Controls the filled/empty dot indicator (timeLine type). */
  isActive: Boolean,
  /** Primary text — main heading of the row. */
  title: String,
  /** Secondary text shown below the title. */
  description: String,
  /** Icon name shown before the description text. */
  descriptionIcon: String,
  /** Icon name inside the circle dot (timeLine) or icon column. */
  icon: String,
  /** CSS class applied to the icon element (e.g. colour override). */
  iconClass: String,
  /** Badge or amount text shown beside the icon (timeLine type). */
  iconText: String,
  /** Date string displayed in the row (webhook, general types). */
  date: String,
  /**
   * Layout variant controlling which sub-component is rendered.
   * @values timeLine, webhook, payment, general, accordion
   */
  type: {
    type: String,
    default: 'timeLine'
  },
  /** Array of endpoint objects shown as a URL list (webhook type). Each item: `{ url, title }`. */
  urls: {
    type: Array,
    default: () => []
  },
  /** Payment method icon list (payment type). Each item: `{ method, md }` where md is an image URL. */
  paymentMethods: {
    type: Array,
    default: () => []
  },
  /** Chip badges shown on the row. Each item: `{ label, variant? }`. */
  chips: {
    type: Array,
    default: () => []
  },
  /** Detail badges (general type). Each item: `{ label, icon?, country? }`. */
  details: {
    type: Array,
    default: () => []
  },
  /** Disable the row — reduced opacity, no interactions. */
  isDisabled: Boolean,
  /** Remove background and border (transparent card style). */
  isTransparent: Boolean,
  /** Show a drag handle on the left (accordion type, for reorderable lists). */
  isDraggable: Boolean,
  /** Start the accordion in the expanded/open state. */
  isOpenDefault: Boolean,
  /** v-model: controls the open/closed state of accordion type rows. */
  modelValue: Boolean
})

const emit = defineEmits({
  /** @deprecated Use the `#menu` slot with DropdownItem instead. */
  more: [],
  /** @deprecated Use the `#menu` slot with DropdownItem instead. */
  edit: [],
  /** @deprecated Use the `#menu` slot with DropdownItem instead. */
  delete: [],
  /** List item row was clicked. */
  'click:item': [],
  /** Accordion open/closed state changed. Payload: new boolean value. */
  'update:modelValue': []
})

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
    @more="$emit('more')"
    @edit="$emit('edit')"
    @delete="$emit('delete')"
    @click="$emit('click:item')"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </component>
</template>