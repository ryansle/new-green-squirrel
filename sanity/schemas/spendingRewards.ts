import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'spendingRewards',
  title: 'Spending Rewards',
  type: 'document',
  fields: [
    defineField({
      name: 'minimumSpend',
      title: 'Minimum Spend',
      type: 'string',
      description: 'How much does a customer need to spend to claim this offer?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offer',
      title: 'Offer',
      type: 'string',
      description: 'What is eligible for this reward amount?',
      validation: (Rule) => Rule.required(),
    }),
  ],
});