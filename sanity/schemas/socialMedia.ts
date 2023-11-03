import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialMediaPlatforms',
  title: 'Social Media Platforms',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'Which social media platform is this?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Please link your profile to this social media platform here.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
