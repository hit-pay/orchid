<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  example: { type: Object, required: true }
})

const activeTab = ref('preview')

const codeSnippet = computed(() => {
  const c = props.example.code
  if (!c) return ''
  if (typeof c === 'string') return c
  return c.snippet ?? ''
})

const hasPreview = computed(() => !!props.example.preview)
const hasCode = computed(() => !!codeSnippet.value)

function copyCode() {
  navigator.clipboard.writeText(codeSnippet.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}

const copied = ref(false)
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold text-oc-text mb-1">{{ example.title }}</h2>
    <p v-if="example.description" class="text-sm text-oc-text-400 mb-3 leading-relaxed">
      {{ example.description }}
    </p>

    <ul v-if="example.highlights?.length" class="flex flex-wrap gap-1.5 mb-4">
      <li
        v-for="h in example.highlights"
        :key="h"
        class="text-xs bg-oc-gray-100 text-oc-text-400 px-2 py-0.5 rounded font-mono"
      >
        {{ h }}
      </li>
    </ul>

    <div class="border border-oc-gray-200 rounded-xl overflow-hidden">
      <div class="flex items-center justify-between border-b border-oc-gray-200 bg-oc-gray-50 px-1">
        <div class="flex">
          <button
            v-if="hasPreview"
            class="px-4 py-2.5 text-sm font-medium transition-colors border-b-2"
            :class="activeTab === 'preview'
              ? 'text-oc-text border-oc-accent-1 -mb-px'
              : 'text-oc-text-300 border-transparent hover:text-oc-text'"
            @click="activeTab = 'preview'"
          >
            Preview
          </button>
          <button
            v-if="hasCode"
            class="px-4 py-2.5 text-sm font-medium transition-colors border-b-2"
            :class="activeTab === 'code'
              ? 'text-oc-text border-oc-accent-1 -mb-px'
              : 'text-oc-text-300 border-transparent hover:text-oc-text'"
            @click="activeTab = 'code'"
          >
            Code
          </button>
        </div>
        <button
          v-if="activeTab === 'code' && hasCode"
          class="mr-2 px-2.5 py-1 text-xs rounded text-oc-text-400 hover:text-oc-text hover:bg-oc-gray-200 transition-colors"
          @click="copyCode"
        >
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>

      <div v-show="activeTab === 'preview' && hasPreview" class="bg-white min-h-[80px]">
        <component :is="example.preview" />
      </div>

      <div v-if="!hasPreview && activeTab === 'preview'" class="p-8 text-center text-oc-text-300 text-sm bg-oc-gray-50">
        No preview available
      </div>

      <div v-if="activeTab === 'code' && hasCode" class="relative">
        <pre class="bg-[#1e1e2e] text-[#cdd6f4] text-xs leading-relaxed p-6 overflow-x-auto font-mono"><code>{{ codeSnippet }}</code></pre>
      </div>
    </div>
  </div>
</template>
