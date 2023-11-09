// Components
import { Layout } from '@/components/navigation';
import { SpecialsTabs } from '@/components/specials';
import NextLink from 'next/link';
import { List } from '@/components';

// Types
import type { NextPage } from 'next';
import type { Policy, LoyaltyOffer } from '@/lib/types';

// Utilities
import {
  fetchLoyaltyOffers,
  fetchGiftPolicies,
  fetchFlowerGifts
} from '@/sanity/fetch';

const SpecialsPage: NextPage = async () => {
  const policies = await fetchGiftPolicies();
  const offers = await fetchLoyaltyOffers();
  const flowers = await fetchFlowerGifts();

  const formattedPolicies = policies.map((policy: Policy) => policy.policy);
  const formattedOffers = offers.map((offer: LoyaltyOffer) => offer.loyaltyOffer).sort();

  return (
    <Layout>
      <h1 className='text-4xl font-semibold mb-6'>
        Green Squirrel Specials
      </h1>
      <p className='text-md mb-4 md:text-lg'>
        Follow us on Instagram{' '}
        <NextLink
          href='https://www.instagram.com/nygreensquirrel/'
          className='font-semibold text-green-500 hover:underline'
        >
          @NYGreenSquirrel
        </NextLink>
        {' '} for a chance to win FREE TOP SHELF OUNCES and more!
      </p>

      <div className='flex space-x-8 border p-4 rounded-xl border-gray-700'>

        <List
          title='Loyalty Program'
          listItems={formattedOffers}
          centerTitle
        />
        <List
          title='Appreciation Offers'
          listItems={formattedPolicies}
          centerTitle
        />
      </div>

      <SpecialsTabs />
    </Layout>
  );
};

export default SpecialsPage;
