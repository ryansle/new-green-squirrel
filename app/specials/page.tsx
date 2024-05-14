// Components
import { Layout } from '@/components/navigation';
import { SpecialsTabs, Gift } from '@/components/specials';
import NextLink from 'next/link';
import { List } from '@/components';

// Types
import type { NextPage } from 'next';
import type { Policy, LoyaltyOffer } from '@/lib/types';

// Utilities
import {
  fetchLoyaltyOffers,
  fetchGiftPolicies,
  fetchFlowerGifts,
  fetchCarts,
  fetchBatteries,
  fetchEdibles,
  fetchPrerolls,
  fetchConcentrates,
  fetchSpecials
} from '@/sanity/fetch';

const SpecialsPage: NextPage = async () => {
  // Fetch information
  const policies = await fetchGiftPolicies();
  const offers = await fetchLoyaltyOffers();

  // Fetch all items from the menu
  const flowers = await fetchFlowerGifts();
  const carts = await fetchCarts();
  const batteries = await fetchBatteries();
  const edibles = await fetchEdibles();
  const prerolls = await fetchPrerolls();
  const dabs = await fetchConcentrates();
  const specials = await fetchSpecials();

  // Flatten into one array
  const inventory = [flowers, carts, batteries, edibles, prerolls, dabs, specials].flat();

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

      <div className='flex border p-4 rounded-xl border-gray-700 space-y-8 flex-col md:flex-row md:space-x-8 md:space-y-0'>
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

      <SpecialsTabs inventory={inventory} />
    </Layout>
  );
};

export default SpecialsPage;

export const revalidate = 30;