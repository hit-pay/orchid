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
      <Theme colorMode="light">
        <ProgressBar
          label="2 step progress bar"
          :steps="2"
          :currentStep="1"
        />
      </Theme>
    `,
  }),
};
