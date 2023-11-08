// Components
import { Layout } from '@/components/navigation';
import { Flower } from '@/components/menu/items';
import { Breadcrumbs, Tabs } from '@/components/menu';
import { GiChestnutLeaf as Leaf } from 'react-icons/gi';
import { MdOutlineStorefront as Store } from 'react-icons/md';

// Types
import type { Flower as FlowerType } from '@/lib/types';

// Utilities
import { fetchFlowers } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/flowers', text: 'Flowers', icon: <Leaf /> }
];

const tabs = ['Everything', 'New Arrivals', 'Almost Gone', 'Top Picks', 'Sativas', 'Indicas', 'Hybrids'];

const FlowersPage = async () => {
  const flowers = await fetchFlowers();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-6'>
        Flowers
      </h1>

      <p className='mb-6'>
        <span className='font-bold'>NOTE</span>: You can special order any quantity of ANY flower. You aren&apos;t limited to buying these in the jar increments! If you&apos;re looking to buy an ounce of anything, message us on Signal and we&apos;ll have it special ordered with you at least a day in advance!
      </p>

      <Tabs tabs={tabs} />

      <div className='grid grid-cols-12 gap-4'>
        {flowers.map((flower: FlowerType) => (
          <div key={flower.strain} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Flower flower={flower} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default FlowersPage;