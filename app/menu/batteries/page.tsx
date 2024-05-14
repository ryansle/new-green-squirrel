// Components
import { Layout } from '@/components/navigation';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { BsBatteryHalf as HalfBattery } from 'react-icons/bs';
import { Inventory, Breadcrumbs } from '@/components/menu';

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
        Batteries ({batteries.length})
      </h1>

      <Inventory
        inventory={batteries}
        category='batteries'
        fieldToSearch='brand'
      />
    </Layout>
  );
};

export default BatteriesPage;

export const revalidate = 30;