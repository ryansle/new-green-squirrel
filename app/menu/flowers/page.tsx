// Components
import { Layout } from '@/components/navigation';
import { Flower } from '@/components/menu/items';

// Types
import type { NextPage } from 'next';
import type { Flower as FlowerType } from '@/lib/types';

// Utilities
import { fetchFlowers } from '@/sanity/fetch';

const FlowersPage: NextPage = async () => {
  const flowers = await fetchFlowers();

  return (
    <Layout>
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