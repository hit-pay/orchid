import { TimePopup, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: TimePopup,
  tags: ['autodocs'],
  kind: 'leaf',
  description: 'Scrollable time picker popup with hour, minute, and AM/PM columns. Used inside TimePicker as the dropdown content.',
  keywords: ['time', 'picker', 'popup', 'scroll', 'hour', 'minute', 'AM', 'PM'],
  use_for: ['standalone time picker UI', 'embedded inside TimePicker'],
  understand_with: ['TimePicker']
}

export const Playground = {
  argTypes: {},
  args: {},
  render: () => ({
    components: { TimePopup, Theme },
    setup() {
      const time = ref(new Date())
      return { time }
    },
    template: `
      <Theme class="p-6 flex flex-col gap-3">
        <TimePopup v-model="time" />
        <p class="text-sm text-oc-text-400">{{ time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</p>
      </Theme>
    `
  })
}
