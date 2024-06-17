<script setup lang="ts">
import { getHighlighter } from 'shikiji'
import { onMounted, ref } from 'vue'
import customTheme from './customTheme'
import jsonLang from 'shikiji/dist/langs/json.mjs'

const props = defineProps({
  jsonObject: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    default: 'json'
  }
})

const json = ref()

onMounted(async () => {
  const highlighter = await getHighlighter({
    themes: [customTheme],
    langs: [jsonLang]
  })

  json.value = highlighter.codeToHtml(props.jsonObject, {
    theme: 'Custom Theme',
    lang: props.lang
  })
})
</script>

<template>
  <div class="p-5 rounded bg-oc-gray-900 code-block" v-html="json" />
</template>
<style lang="scss">
.code-block {
  * code,
  * pre {
    font-family: 'Fira Code', monospace;
    font-size: 12px;
  }
}
</style>
