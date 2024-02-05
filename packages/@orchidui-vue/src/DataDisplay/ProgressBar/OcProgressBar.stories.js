import { Theme, ProgressBar } from '@/orchidui';

export default {
  component: ProgressBar,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { Theme, ProgressBar },
    setup() {},
    template: `
      <div class="flex flex-col gap-10">
        <Theme colorMode="light">
          <ProgressBar
            label="2 step progress bar"
            :steps="2"
            :currentStep="1"
          />
        </Theme>
        
        <Theme colorMode="light">
          <ProgressBar
            label="5 step progress bar"
            :steps="5"
            :currentStep="3"
          />
        </Theme>
      </div>
    `,
  }),
};
