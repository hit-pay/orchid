// Registry of manual documentation overrides per component.
// Add a new entry here whenever a component needs hand-crafted schema enrichments or examples.
//
// Each module exports default { schemaOverrides?, examples? }
// - schemaOverrides: merged on top of the auto-generated schema (props, events, slots)
// - examples: replaces auto-generated examples entirely

import FormBuilder from './FormBuilder.js'

export const COMPONENT_DOCS = {
  FormBuilder,
}
