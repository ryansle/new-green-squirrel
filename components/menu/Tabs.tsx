'use client';

import { useState } from 'react';

// Components
import { Flower } from './items';

// Types
import type { Flower as FlowerType } from '@/lib/types';

type TabsProps = {
  tabs: string[];
  flowers: FlowerType[];
};

const Tabs = (props: TabsProps) => {
  const { tabs, flowers } = props;

  const [selected, setSelected] = useState<FlowerType[]>(flowers);
  const [selectedTab, setSelectedTab] = useState<string>('Everything');

  const newArrivals = flowers.filter((flower: FlowerType) => flower.new);
  const almostGone = flowers.filter((flower: FlowerType) => flower.almostGone);
  const topPicks = flowers.filter((flower: FlowerType) => flower.ourPick);
  const sativas = flowers.filter((flower: FlowerType) => flower.type === 'sativa');
  const indicas = flowers.filter((flower: FlowerType) => flower.type === 'indica');
  const hybrids = flowers.filter((flower: FlowerType) => flower.type === 'hybrid');

  const handleSelection = (tab: string) => {
    setSelectedTab(tab);
    switch (tab) {
      case 'Everything':
        setSelected(flowers);
        break;
      case 'New Arrivals':
        setSelected(newArrivals);
        break;
      case 'Almost Gone':
        setSelected(almostGone);
        break;
      case 'Top Picks':
        setSelected(topPicks);
        break;
      case 'Sativas':
        setSelected(sativas);
        break;
      case 'Indicas':
        setSelected(indicas);
        break;
      case 'Hybrids':
        setSelected(hybrids);
        break;
    };
  };

  return (
    <div>
      <div className='flex mb-4 items-center justify-center border-b border-gray-700 mb-8 text-lg'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleSelection(tab)}
            className={`${selectedTab === tab ? 'font-semibold rounded-t-xl bg-green-400 text-green-800' : ''} px-4 py-2`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-12 gap-4'>
        {selected.map((flower: FlowerType) => (
          <div key={flower.strain} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Flower flower={flower} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Tabs };
