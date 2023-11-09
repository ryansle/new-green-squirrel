'use client';

import { useState } from 'react';

// Components
import { Tabs } from '@/components';

const tabs = [
  'Spend $125',
  'Spend $150',
  'Spend $200',
  'Spend $250',
  'Spend $350',
  'Spend $420',
  'Spend $500',
  'Spend $600',
  'Spend $270',
  'Spend $800',
  'Spend $900',
  'Spend $1000',
];

const SpecialsTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Spend $125');

  const handleSelection = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className='mt-4'>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClickHandler={handleSelection}
      />
    </div>
  );
};

export { SpecialsTabs };