import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cartridges',
  title: 'Cartridges',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      description: 'What brand cart is this?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'types',
      title: 'Strain Types',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What strains are available for these carts?',
      options: {
        list: [
          { title: 'Sativa', value: 'sativa' },
          { title: 'Indica', value: 'indica' },
          { title: 'Hybrid', value: 'hybrid' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thcContent',
      title: 'THC Content',
      type: 'string',
      description: 'What percentage THC is this strain of cart?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Describe the product.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An image of the cart, or branding.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'string',
      description: 'How much oil is in the cart?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'The price of the cart to be sold at.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'new',
      title: 'New',
      type: 'boolean',
      description: 'Would you like to advertise this strain as \'new\'?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ourPick',
      title: 'Our Pick',
      type: 'boolean',
      description: 'Would you like to advertise this strain as a Green Squirrel favorite?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'almostGone',
      title: 'Leaving Rotation Soon?',
      type: 'boolean',
      description: 'Is this item almost out of stock, or leaving the current rotation soon?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'smallGiftEligible',
      title: 'Small Gift Eligibility',
      type: 'boolean',
      description: 'Is this item eligible for redemption as a small gift?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediumGiftEligible',
      title: 'Medium Gift Eligibility',
      type: 'boolean',
      description: 'Is this item eligible for redemption as a medium gift?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'standardGiftEligible',
      title: 'Standard Gift Eligibility',
      type: 'boolean',
      description: 'Is this item eligible for redemption as a standard gift?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'premiumGiftEligible',
      title: 'Premium Gift Eligibility',
      type: 'boolean',
      description: 'Is this item eligible for redemption as a premium gift?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'squirrelReserveEligible',
      title: 'Squirrel Reserve Gift Eligibility',
      type: 'boolean',
      description: 'Is this item eligible for redemption as a squirrel reserve gift?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visible',
      title: 'Visibility',
      type: 'boolean',
      description: 'Do you want this item shown on the website? (You can edit this flag for seasonal items, out of stock inventory, etc...)',
      validation: (Rule) => Rule.required(),
    }),
  ],
});