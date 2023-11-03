import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'policy',
  title: 'Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'policy',
      title: 'Policy',
      type: 'string',
      description: 'A policy enforced by the collective.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});