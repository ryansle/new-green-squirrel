'use client';

import { useState, useEffect } from 'react';

// Components
import { SearchBar } from './SearchBar';
import {
  Flower,
  Cart,
  Battery,
  Edible,
  Preroll,
  Concentrate,
  Specialty,
} from '@/components/menu/items';

// Types
import type {
  Flower as FlowerType,
  Cartridge as CartridgeType,
  Battery as BatteryType,
  Edible as EdibleType,
  Preroll as PrerollType,
  Concentrate as ConcentrateType,
  Special as SpecialType,
  Category
} from '@/lib/types';

type InventoryItem = (
  FlowerType |
  CartridgeType |
  BatteryType |
  EdibleType |
  PrerollType |
  ConcentrateType |
  SpecialType
);

type InventoryProps = {
  inventory: InventoryItem[];
  category: string;
}

const Inventory = (props: InventoryProps) => {
  const { inventory, category } = props;

  const [searchTerm, setSearchTerm] = useState<string>('');

  const renderInventory = (category: Category, content: any) => {
    console.log(content);

    switch (category) {
      case 'flowers':
        return <Flower flower={content} />;
      case 'batteries':
        return <Battery battery={content} />;
      case 'cartridges':
        return <Cart cart={content} />;
      case 'concentrates':
        return <Concentrate concentrate={content} />;
      case 'edibles':
        return <Edible edible={content} />;
      case 'prerolls':
        return <Preroll preroll={content} />;
      case 'specialty items':
        return <Specialty special={content} />;
    }
  };

  return (
    <div>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchingFor={category}
      />

      {/* <div className='grid grid-cols-12 gap-4'>
        {inventory?.map((item, index) => (
          <div key={index} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            {renderInventory(category as Category, item)}
            {item && <Edible edible={item} />}
          </div>
        ))}
      </div> */}

      <div className='grid grid-cols-12 gap-4'>
        {inventory && inventory?.map((edible, index) => (
          <div key={index} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Edible edible={edible as EdibleType} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Inventory };