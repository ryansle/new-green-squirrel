'use client';

import { useState } from 'react';

// Components
import { Tab } from '@headlessui/react';

type TabsProps = {
  tabs: string[];
};

const Tabs = (props: TabsProps) => {
  const { tabs } = props;

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Tab.Group
      // @ts-ignore
      className='flex justify-center mb-10 font-medium text-lg'
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <Tab.List className='border-b border-gray-700'>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            className={`${index === selectedIndex ? 'bg-green-500 text-green-900 border-x border-t border-gray-700' : ''} px-8 py-2 rounded-t-xl`}
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};

export { Tabs };
