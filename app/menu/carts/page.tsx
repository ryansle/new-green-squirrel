// Components
import { Layout } from '@/components/navigation';
import { Breadcrumbs } from '@/components/menu/Breadcrumbs';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { IoPencil as Pen } from 'react-icons/io5';
import { Cart } from '@/components/menu/items';

// Types
import type { NextPage } from 'next';
import type { Cartridge } from '@/lib/types';

// Utilities
import { fetchCarts } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/carts', text: 'Cartridges', icon: <Pen /> }
];

const CartsPage: NextPage = async () => {
  const carts = await fetchCarts();

  console.log(carts);

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Cartridges
      </h1>

      <div className='grid grid-cols-12 gap-4'>
        {carts.map((cart: Cartridge) => (
          <div key={cart.brand} className='col-span-4'>
            <Cart cart={cart} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CartsPage;