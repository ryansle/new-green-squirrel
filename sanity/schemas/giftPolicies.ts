import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'giftPolicies',
  title: 'Gift Policies',
  type: 'document',
  fields: [
    defineField({
      name: 'policy',
      title: 'Policy',
      type: 'string',
      description: 'A gift policy to be enforced by runners.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});