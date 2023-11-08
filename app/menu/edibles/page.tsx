// Components
import { Layout } from '@/components/navigation';
import { Breadcrumbs } from '@/components/menu/Breadcrumbs';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { LiaCookieBiteSolid as Cookie } from 'react-icons/lia';
import { Edible } from '@/components/menu/items';

// Types
import type { NextPage } from 'next';
import type { Edible as EdibleType } from '@/lib/types';

// Utilities
import { fetchEdibles } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/edibles', text: 'Edibles', icon: <Cookie /> }
];

const EdiblesPage: NextPage = async () => {
  const edibles = await fetchEdibles();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Edibles
      </h1>

      <div className='grid grid-cols-12 gap-4'>
        {edibles.map((edible: EdibleType) => (
          <div key={edible.brand} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Edible edible={edible} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EdiblesPage;