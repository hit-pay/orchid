import { ColorPicker } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'
import { ref } from 'vue'
import DefaultExample from './examples/Default.vue'
import DefaultRaw from './examples/Default.vue?raw'
import GradientExample from './examples/Gradient.vue'
import GradientRaw from './examples/Gradient.vue?raw'

export default {
  component: ColorPicker,
  tags: ['autodocs'],
  kind: 'leaf',
  description: 'Inline color picker with a dropdown popup, preset swatches, and optional opacity/alpha control.',
  keywords: ['color', 'picker', 'gradient', 'hex', 'palette', 'opacity'],
  use_for: [
    'brand color selection',
    'gradient builder',
    'theme customization',
    'store design settings'
  ],
  understand_with: ['Input', 'Dropdown', 'BaseInput']
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    variant:         { control: 'select', options: ['solid', 'gradient'] },
    hideOpacity:     { control: 'boolean' },
    hideInputColor:  { control: 'boolean' },
    placement:       { control: 'select', options: ['auto', 'top', 'bottom', 'left', 'right'] },
    showLeadingSlot: { control: 'boolean', description: '#leading slot — prepend an icon or label before the input' }
  },
  args: {
    variant:         'solid',
    hideOpacity:     false,
    hideInputColor:  false,
    placement:       'auto',
    showLeadingSlot: false
  },
  render: (args) => ({
    components: { ColorPicker, Theme },
    setup() {
      const color = ref('#3B82F6')
      return { args, color }
    },
    template: `
      <Theme class="p-8">
        <div class="flex flex-col gap-3">
          <ColorPicker
            v-model="color"
            :variant="args.variant"
            :hide-opacity="args.hideOpacity"
            :hide-input-color="args.hideInputColor"
            :placement="args.placement"
          >
            <template v-if="args.showLeadingSlot" #leading>
              <span class="text-xs text-oc-text-400">Color</span>
            </template>
          </ColorPicker>
          <p class="text-sm text-oc-text-400 font-mono">v-model: {{ color }}</p>
        </div>
      </Theme>
    `
  })
}

// ── Default ───────────────────────────────────────────────────────────────────

export const Default = {
  description: 'Solid color picker with an optional #leading slot for a label or icon.',
  highlights: ['v-model — hex color string', '#leading slot — prepend icon or label'],
  code: DefaultRaw,
  render: () => ({
    components: { DefaultExample },
    template: `<div class="p-6"><DefaultExample /></div>`
  })
}

// ── Gradient ──────────────────────────────────────────────────────────────────

export const Gradient = {
  description: 'Gradient variant outputs a CSS gradient string. Bind the value to a background style to preview it.',
  highlights: ['variant="gradient" — CSS gradient output', 'bind to :style for live preview'],
  code: GradientRaw,
  render: () => ({
    components: { GradientExample },
    template: `<div class="p-6"><GradientExample /></div>`
  })
}
