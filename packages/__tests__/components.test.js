import { describe, it, expect } from 'vitest'
import * as CoreComponents from '@/orchidui-core'
import * as DashboardComponents from '@/orchidui-dashboard'

describe('All components can be imported without errors', () => {
  it('all @orchidui/core exports are defined', () => {
    for (const [name, component] of Object.entries(CoreComponents)) {
      expect(component, `${name} should be defined`).toBeDefined()
    }
  })

  it('all @orchidui/dashboard exports are defined', () => {
    for (const [name, component] of Object.entries(DashboardComponents)) {
      expect(component, `${name} should be defined`).toBeDefined()
    }
  })
})
