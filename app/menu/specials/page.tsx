// Components
import { Layout } from '@/components/navigation';
import { Breadcrumbs } from '@/components/menu/Breadcrumbs';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { GiMushroomGills as Shroom } from 'react-icons/gi';
import { Specialty } from '@/components/menu/items';

// Types
import type { Special } from '@/lib/types';

// Utilities
import { fetchSpecials } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/concentrates', text: 'Specialty Items', icon: <Shroom /> }
];

const SpecialtyPage = async () => {
  const specialties = await fetchSpecials();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Specialty Items
      </h1>

      <div className='grid grid-cols-12 gap-4'>
        {specialties.map((special: Special) => (
          <div key={special.name} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Specialty special={special} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SpecialtyPage;