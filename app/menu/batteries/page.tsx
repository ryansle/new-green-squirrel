// Components
import { Layout } from '@/components/navigation';
import { Breadcrumbs } from '@/components/menu/Breadcrumbs';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { BsBatteryHalf as HalfBattery } from 'react-icons/bs';
import { Battery } from '@/components/menu/items';

// Types
import type { Battery as BatteryType } from '@/lib/types';

// Utilities
import { fetchBatteries } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/batteries', text: 'Batteries', icon: <HalfBattery /> }
];

const BatteriesPage = async () => {
  const batteries = await fetchBatteries();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Batteries
      </h1>

      <div className='grid grid-cols-12 gap-4'>
        {batteries.map((battery: BatteryType) => (
          <div key={battery.brand} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Battery battery={battery} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default BatteriesPage;