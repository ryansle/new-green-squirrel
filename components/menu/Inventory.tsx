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
import { NoResults } from '@/components/menu';

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

type InventoryItem =
  FlowerType |
  CartridgeType |
  BatteryType |
  EdibleType |
  PrerollType |
  ConcentrateType |
  SpecialType;

type InventoryProps = {
  inventory: InventoryItem[];
  category: Category;
  fieldToSearch: 'name' | 'strain' | 'brand';
}

const Inventory = (props: InventoryProps) => {
  const { inventory, category, fieldToSearch } = props;

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filtered, setFiltered] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const matchingItems = inventory.filter((item) => {
      // @ts-ignore
      const normalizedField = item[fieldToSearch].toLowerCase();

      if (normalizedField.includes(normalizedSearchTerm)) return item;
    });

    setFiltered(matchingItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const renderInventory = (category: Category, content: any) => {
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

      <div className='grid grid-cols-12 gap-4'>
        {/* Case 1: User has not attempted to search, show regular inventory */}
        {searchTerm === '' && (
          <>
            {inventory?.map((item, index) => (
              <div key={index} className='col-span-12 sm:col-span-6 xl:col-span-4'>
                {renderInventory(category as Category, item)}
              </div>
            ))}
          </>
        )}

        {/* Case 2: User has managed a successful search, show matching content */}
        {searchTerm !== '' && filtered.length !== 0 && (
          <>
            {filtered?.map((item, index) => (
              <div key={index} className='col-span-12 sm:col-span-6 xl:col-span-4'>
                {renderInventory(category as Category, item)}
              </div>
            ))}
          </>
        )}
      </div>

      {/* Case 3: User has performed a search, and there is no matching content */}
      {searchTerm !== '' && filtered.length === 0 && (
        <NoResults searchTerm={searchTerm} />
      )}
    </div>
  );
};

export { Inventory };