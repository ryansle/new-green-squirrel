'use client';

import { useState } from 'react';

// Components
import { Tab } from '@headlessui/react';
import { Flower } from './items';

// Types
import type { Flower as FlowerType } from '@/lib/types';

type TabsProps = {
  tabs: string[];
  flowers: FlowerType[];
};

const Tabs = (props: TabsProps) => {
  const { tabs, flowers } = props;

  const [selected, setSelected] = useState<string>('Everything');

  const newArrivals = flowers.filter((flower: FlowerType) => flower.new);
  const almostGone = flowers.filter((flower: FlowerType) => flower.almostGone);

  return (
    <div>
      <div className='flex mb-4'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className='px-4'
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-12 gap-4'>
        {selected === 'Everything' && flowers.map((flower: FlowerType) => (
          <div key={flower.strain} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Flower flower={flower} />
          </div>
        ))}

        {selected === 'New Arrivals' && newArrivals.map((flower: FlowerType) => (
          <div key={flower.strain} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Flower flower={flower} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Tabs };
