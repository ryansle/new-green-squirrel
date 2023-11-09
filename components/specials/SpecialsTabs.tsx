'use client';

import { useState } from 'react';

// Components
import { Tabs } from '@/components';
import { Gift } from '@/components/specials';

// Types
import type { Product } from '@/lib/types';

type SpecialsTabsProps = {
  inventory: Product[];
}

const tabs = [
  'Spend $125',
  'Spend $150',
  'Spend $200',
  'Spend $250',
  'Spend $350',
  'Spend $420',
  'Spend $500',
  'Spend $600',
  'Spend $700',
  'Spend $800',
  'Spend $900',
  'Spend $1000',
];

const SpecialsTabs = (props: SpecialsTabsProps) => {
  const { inventory } = props;

  const smallGifts = inventory.filter((gift) => gift.smallGiftEligible);
  const mediumGifts = inventory.filter((gift) => gift.mediumGiftEligible);
  const standardGifts = inventory.filter((gift) => gift.standardGiftEligible);
  const premiumGifts = inventory.filter((gift) => gift.premiumGiftEligible);
  const reserveGifts = inventory.filter((gift) => gift.squirrelReserveEligible);

  const [selectedTab, setSelectedTab] = useState<string>('Spend $125');
  const [giftSubset, setGiftSubset] = useState<Product[]>(smallGifts);

  const handleSelection = (tab: string) => {
    setSelectedTab(tab);

    switch (tab) {
      case 'Spend $125':
        setGiftSubset(smallGifts);
        break;
      case 'Spend $150':
        setGiftSubset(mediumGifts);
        break;
      case 'Spend $200':
        setGiftSubset(standardGifts);
        break;
      case 'Spend $250':
        setGiftSubset(premiumGifts);
        break;
      case 'Spend $350':
        setGiftSubset(reserveGifts);
        break;
      case 'Spend $420':
        setGiftSubset([standardGifts, reserveGifts].flat());
        break;
      case 'Spend $500':
        setGiftSubset([standardGifts, mediumGifts, reserveGifts].flat());
        break;
      case 'Spend $600':
        setGiftSubset([reserveGifts, premiumGifts, standardGifts].flat());
        break;
      case 'Spend $700':
        setGiftSubset([reserveGifts, premiumGifts, standardGifts].flat());
        break;
      case 'Spend $800':
        setGiftSubset([reserveGifts, standardGifts].flat());
        break;
      case 'Spend $900':
        setGiftSubset([reserveGifts, premiumGifts].flat());
        break;
      case 'Spend $1000':
        setGiftSubset([reserveGifts, premiumGifts].flat());
        break;
    }
  };

  const renderDescription = (tab: string) => {
    switch (tab) {
      case 'Spend $125':
        return 'Get a small gift!';
      case 'Spend $150':
        return 'Get a medium gift!';
      case 'Spend $200':
        return 'Get a standard gift!';
      case 'Spend $250':
        return 'Get a premium gift!';
      case 'Spend $350':
        return 'Get a squirrel reserve gift!';
      case 'Spend $420':
        return 'Get a squirrel reserve and standard gift!';
      case 'Spend $500':
        return 'Get a squirrel reserve, standard, and medium gift, OR a free half ounce!';
      case 'Spend $600':
        return 'Get a squirrel reserve, premium, and standard gift!';
      case 'Spend $700':
        return 'Get a squirrel reserve, 2 premium gifts, and a standard gift!';
      case 'Spend $800':
        return 'Get 2 squirrel reserve gifts and a standard gift!';
      case 'Spend $900':
        return 'Get 2 squirrel reserve and 2 premium gifts!';
      case 'Spend $1000':
        return 'Get 3 squirrel reserve gifts and a premium gift OR a free ounce of anything!';
    };
  };

  return (
    <div className='mt-4'>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClickHandler={handleSelection}
      />

      <div>
        <h3 className='text-2xl font-medium mb-4'>
          {selectedTab} ({giftSubset?.length})
        </h3>
        <p className='mb-6 text-gray-400'>
          {renderDescription(selectedTab)}
        </p>

        <div className='grid grid-cols-12 gap-4'>
          {giftSubset?.map((item, index) => (
            <div key={index} className='col-span-12 sm:col-span-6 xl:col-span-4'>
              <Gift
                product={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SpecialsTabs };