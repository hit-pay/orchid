import { Theme, Checklist } from '@/orchidui-core'

export default {
  component: Checklist,
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    components: { Theme, Checklist },
    template: `
      <Theme>
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
      </Theme>
    `
  })
}
