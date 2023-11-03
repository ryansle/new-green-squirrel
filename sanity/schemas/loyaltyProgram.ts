import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'loyaltyProgram',
  title: 'Loyalty Program',
  type: 'document',
  fields: [
    defineField({
      name: 'loyaltyOffer',
      title: 'Loyalty Offer',
      type: 'string',
      description: 'A loyalty deal to be shown on the Special Offers page.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});