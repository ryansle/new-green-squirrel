// Components
import { Layout } from '@/components/navigation';
import { Breadcrumbs, Tabs } from '@/components/menu';
import { GiChestnutLeaf as Leaf } from 'react-icons/gi';
import { MdOutlineStorefront as Store } from 'react-icons/md';

// Utilities
import { fetchFlowers } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/flowers', text: 'Flowers', icon: <Leaf /> }
];

const tabs = ['All Flowers', 'New Arrivals', 'Almost Gone', 'Top Picks', 'Sativas', 'Indicas', 'Hybrids'];

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

      <Tabs tabs={tabs} flowers={flowers} />
    </Layout>
  );
};

export default FlowersPage;