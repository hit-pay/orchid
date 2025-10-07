import Checklist from './OcChecklist.vue'

export default {
  component: Checklist,
  tags: ['autodocs'],
  args: {
    index: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    completed: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
    actionButton: {
      control: 'object',
      description: 'An action button props'
    }
  }
}
export const Default = {
  render: () => ({
    components: { Checklist },
    template: `
          <div class="flex flex-col">
            <Checklist
              label="Account verifications"
              completed
              :index="1"
              :action-button="{ label: 'Completed' }"
            />
            <Checklist
              label="Add bank account"
              active
              :index="2"
              :action-button="{ label: 'Continue' }"
            />
            <Checklist
              label="Add bank account"
              index="3"
              :action-button="{ label: 'Setup' }"
            />
          </div>
        `
  })
}
