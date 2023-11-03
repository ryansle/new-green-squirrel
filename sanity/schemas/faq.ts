import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'A question that a lot of people might ask.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'string',
      description: 'An answ12er to this commonly asked question.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});