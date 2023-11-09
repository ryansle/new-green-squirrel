'use client';

import { useState } from 'react';

// Components
import { Inventory } from '@/components/menu/Inventory';
import { Tabs } from '@/components/Tabs';

// Types
import type { Flower as FlowerType } from '@/lib/types';

type TabsProps = {
  tabs: string[];
  flowers: FlowerType[];
};

// TODO: suspense component to load this after successful data load?
const FlowerTabs = (props: TabsProps) => {
  const { tabs, flowers } = props;

  const [selected, setSelected] = useState<FlowerType[]>(flowers);
  const [selectedTab, setSelectedTab] = useState<string>('All Flowers');

  const newArrivals = flowers.filter((flower: FlowerType) => flower.new);
  const almostGone = flowers.filter((flower: FlowerType) => flower.almostGone);
  const topPicks = flowers.filter((flower: FlowerType) => flower.ourPick);
  const sativas = flowers.filter((flower: FlowerType) => flower.type === 'sativa');
  const indicas = flowers.filter((flower: FlowerType) => flower.type === 'indica');
  const hybrids = flowers.filter((flower: FlowerType) => flower.type === 'hybrid');

  const handleSelection = (tab: string) => {
    setSelectedTab(tab);
    switch (tab) {
      case 'All Flowers':
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

  const renderDescription = (variant: string) => {
    switch (variant) {
      case 'All Flowers':
        return 'Our entire inventory of the best flowers on the market.';
      case 'New Arrivals':
        return 'New to the Green Squirrel!';
      case 'Almost Gone':
        return 'Flowers that are about to leave our current rotation. They may or may not be back.';
      case 'Top Picks':
        return 'Some of our personal favorites here at the Green Squirrel!';
      case 'Sativas':
        return 'For when you want to get shit done - or reduce your stress and anxiety';
      case 'Indicas':
        return 'For when you want to relax.';
      case 'Hybrids':
        return 'For when you want the best of both worlds.';
    }
  };

  return (
    <div>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClickHandler={handleSelection}
      />
      <div>
        <h3 className='text-2xl font-medium mb-4'>
          {selectedTab} ({selected.length})
        </h3>
        <p className='mb-6 text-gray-400'>
          {renderDescription(selectedTab)}
        </p>

        <Inventory
          inventory={selected}
          category='flowers'
          fieldToSearch='strain'
        />
      </div>
    </div>
  );
};

export { FlowerTabs };
