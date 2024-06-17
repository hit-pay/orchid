import { defineAsyncComponent } from 'vue'

const CodeBlock = defineAsyncComponent(() => import('./DataDisplay/CodeBlock/OcCodeBlock.vue'))
export { CodeBlock }
