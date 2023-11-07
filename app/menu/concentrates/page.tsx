// Components
import { Layout } from '@/components/navigation';
import { Breadcrumbs } from '@/components/menu/Breadcrumbs';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { GiTransparentSlime as Goop } from 'react-icons/gi';
import { Concentrate } from '@/components/menu/items';

// Types
import type { NextPage } from 'next';
import type { Concentrate as ConcentrateType } from '@/lib/types';

// Utilities
import { fetchConcentrates } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/concentrates', text: 'Concentrates', icon: <Goop /> }
];

const ConcentratesPage: NextPage = async () => {
  const concentrates = await fetchConcentrates();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Concentrates
      </h1>

      <div className='grid grid-cols-12 gap-4'>
        {concentrates.map((concentrate: ConcentrateType) => (
          <div key={concentrate.name} className='col-span-4'>
            <Concentrate concentrate={concentrate} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ConcentratesPage;