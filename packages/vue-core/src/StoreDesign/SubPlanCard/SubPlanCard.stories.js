import { Theme } from '@orchidui/vue-core'
import SubPlanCard from './SubPlanCard.vue'

export default {
  tags: ['autodocs'],
  component: SubPlanCard
}

export const Default = {
  args: {
    subPlans: [
      {
        id: '9c44a225-444b-40ff-8707-f2f7aa3c82d0',
        parent_type: 'tier',
        billing_frequency: 'monthly',
        hierarchy: 0,
        currency: 'sgd',
        price: 0,
        name: 'Free',
        features: [
          {
            id: '9c44a225-28bf-41bf-92ff-1f5c30173d6c',
            code: 'store.feature_test_a',
            name: 'Test Store Feature A - Free',
            hierarchy: 64
          },
          {
            id: '9c44a225-294f-48fc-8663-f2a12029e8f4',
            code: 'store.feature_test_b',
            name: 'Test Store Feature B - Pro',
            hierarchy: 92
          }
        ]
      },
      {
        id: '9c44a225-60eb-40d6-86e2-a36bb0494ff8',
        parent_type: 'tier',
        billing_frequency: 'monthly',
        hierarchy: 20,
        currency: 'sgd',
        price: 60,
        name: 'Pro',
        features: [
          {
            id: '9c44a225-2632-4dfa-9c97-9931582ddf17',
            code: 'store.whatsapp_form',
            name: 'Store WhatsApp Form',
            hierarchy: 78
          },
          {
            id: '9c44a225-2820-4f95-bab3-9190d5050222',
            code: 'pos.save_orders',
            name: 'POS Save Orders',
            hierarchy: 38
          },
          {
            id: '9c44a225-29d9-4d32-a597-2b6f57de95fe',
            code: 'store.feature_test_c',
            name: 'Test Store Feature C - Pro',
            hierarchy: 4
          }
        ]
      },
      {
        id: '9c44a225-88b1-422d-a23b-40cd7576d390',
        parent_type: 'tier',
        billing_frequency: 'monthly',
        hierarchy: 40,
        currency: 'sgd',
        price: 120,
        name: 'Plus',
        features: [
          {
            id: '9c44a225-2a6e-4076-92df-622d836543ba',
            code: 'store.feature_test_d',
            name: 'Test Store Feature D - Plus',
            hierarchy: 43
          },
          {
            id: '9c44a225-2aff-4f8e-b486-2c30f09363fe',
            code: 'store.feature_test_e',
            name: 'Test Store Feature E - Plus',
            hierarchy: 85
          }
        ]
      }
    ]
  },
  render: (args) => ({
    components: { Theme, SubPlanCard },
    setup() {
      return { args }
    },
    template: `
          <Theme>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
                <SubPlanCard  v-for="(plan, index) in args.subPlans" :planTier="plan" :is-plan-active="index === 1" />
               </div>
          </Theme>
        `
  })
}
