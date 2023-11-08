// Components
import { Layout } from '@/components/navigation';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { GiTransparentSlime as Goop } from 'react-icons/gi';
import { Inventory, Breadcrumbs } from '@/components/menu';

// Utilities
import { fetchConcentrates } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/concentrates', text: 'Concentrates', icon: <Goop /> }
];

const ConcentratesPage = async () => {
  const concentrates = await fetchConcentrates();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Concentrates ({concentrates.length})
      </h1>

      <Inventory
        inventory={concentrates}
        category='concentrates'
        fieldToSearch='name'
      />
    </Layout>
  );
};

export default ConcentratesPage;