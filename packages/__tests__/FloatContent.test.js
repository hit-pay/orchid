import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import { FloatContent } from '@/orchidui-core'

// Real consumer markup from the HitPay dashboard: `!right-[16px]` beats the old
// `right-[-999px]` via !important, and `w-[566px]` beats `w-0` on source order alone.
const HOSTILE_CLASS = 'top-[16px] !h-[calc(100%-32px)] !right-[16px] !left-[16px] w-[566px] !block'

let styleEl

beforeAll(async () => {
  // Compile the component's own utilities plus the consumer's with the repo's Tailwind,
  // so the cascade under test is the one consumers actually ship.
  const { css } = await postcss([
    tailwindcss({
      content: [
        './packages/core/src/DataDisplay/FloatContent/OcFloatContent.vue',
        { raw: `<div class="${HOSTILE_CLASS}"></div>` }
      ],
      corePlugins: { preflight: false }
    })
  ]).process('@tailwind utilities;', { from: undefined })

  styleEl = document.createElement('style')
  styleEl.textContent = css
  document.head.appendChild(styleEl)
})

afterAll(() => styleEl.remove())

let wrapper
afterEach(() => wrapper?.unmount())

const mountPanel = (props) => {
  wrapper = mount(FloatContent, {
    props: { title: 'Transaction detail', ...props },
    attrs: { class: HOSTILE_CLASS },
    attachTo: document.body
  })
  return wrapper.element
}

describe.each(['right', 'left'])('OcFloatContent position="%s"', (position) => {
  it('is hidden and non-interactive when closed, despite !important consumer classes', () => {
    const el = mountPanel({ modelValue: false, position })
    const style = getComputedStyle(el)

    expect(style.visibility).toBe('hidden')
    expect(style.pointerEvents).toBe('none')
    expect(el.style.getPropertyPriority('visibility')).toBe('important')
    expect(el.style.transform).toContain(position === 'right' ? 'calc(100%' : 'calc(-100%')
    expect(el.hasAttribute('inert')).toBe(true)
    expect(el.getAttribute('aria-hidden')).toBe('true')
    expect(el.querySelector('[tabindex], button, a, input')).toBeNull()
  })

  it("is visible at the consumer's offset when open", async () => {
    const el = mountPanel({ modelValue: true, position })
    const style = getComputedStyle(el)

    expect(style.visibility).not.toBe('hidden')
    expect(style.pointerEvents).not.toBe('none')
    expect(style[position]).toBe('16px')
    expect(style.width).toBe('566px')
    expect(el.getAttribute('style') ?? '').toBe('')
    expect(el.hasAttribute('inert')).toBe(false)
    expect(el.hasAttribute('aria-hidden')).toBe(false)
    expect(el.textContent).toContain('Transaction detail')

    await wrapper.setProps({ modelValue: false })
    expect(getComputedStyle(el).visibility).toBe('hidden')
    expect(el.hasAttribute('inert')).toBe(true)
  })
})
