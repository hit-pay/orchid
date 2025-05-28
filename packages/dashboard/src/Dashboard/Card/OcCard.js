import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('./OcCard.vue'))

export { Card }
