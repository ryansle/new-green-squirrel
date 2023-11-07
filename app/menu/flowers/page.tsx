// Components
import { Layout } from '@/components/navigation';
import { Flower } from '@/components/menu/items';
import { Breadcrumbs } from '@/components/menu/Breadcrumbs';
import { GiChestnutLeaf as Leaf } from 'react-icons/gi';
import { MdOutlineStorefront as Store } from 'react-icons/md';

// Types
import type { NextPage } from 'next';
import type { Flower as FlowerType } from '@/lib/types';

// Utilities
import { fetchFlowers } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/flowers', text: 'Flowers', icon: <Leaf /> }
];

const FlowersPage: NextPage = async () => {
  const flowers = await fetchFlowers();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Flowers
      </h1>

      <div className='grid grid-cols-12 gap-4'>
        {flowers.map((flower: FlowerType) => (
          <div key={flower.strain} className='col-span-4'>
            <Flower flower={flower} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default FlowersPage;