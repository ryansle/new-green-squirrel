// Components
import { Layout } from '@/components/navigation';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { IoPencil as Pen } from 'react-icons/io5';
import { Inventory, Breadcrumbs } from '@/components/menu';

// Utilities
import { fetchCarts } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/carts', text: 'Cartridges', icon: <Pen /> }
];

const CartsPage = async () => {
  const carts = await fetchCarts();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Cartridges ({carts.length})
      </h1>

      <Inventory
        inventory={carts}
        category='cartridges'
        fieldToSearch='brand'
      />
    </Layout>
  );
};

export default CartsPage;

export const revalidate = 30;